#!/usr/bin/env node
/**
 * Validates drip-skills packages against design2skill.md spec.
 * Usage: node scripts/validate-skill.mjs [skill-path...]
 *        node scripts/validate-skill.mjs   (validates all production skills)
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SKILLS_ROOT = join(ROOT, "drip-skills");

const REQUIRED_FILES = [
  "SKILL.md",
  "philosophy.md",
  "skill.json",
  "tokens/colors.md",
  "tokens/typography.md",
  "tokens/spacing.md",
  "tokens/borders.md",
  "tokens/shadows.md",
  "tokens/motion.md",
  "integration/tailwind.config.js",
  "integration/globals.css",
  "integration/setup.md",
  "components/core/Button.jsx",
  "components/core/Input.jsx",
  "components/core/Badge.jsx",
  "components/display/Card.jsx",
  "components/display/Alert.jsx",
  "components/navigation/Navbar.jsx",
  "components/feedback/Spinner.jsx",
  "examples/LandingPage.jsx",
  "examples/README.md",
  "responsive/breakpoints.md",
  "meta/changelog.md",
];

const SKILL_MD_SECTIONS = [
  "HOW TO USE THIS SKILL",
  "WHAT YOU CAN OVERRIDE",
  "WHAT YOU MUST NEVER OVERRIDE",
  "AGENT BEHAVIOR RULES",
  "STACK REQUIREMENTS",
];

const GENERATED_PREFIX = join(SKILLS_ROOT, "generated");

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function findSkillDirs() {
  const dirs = [];

  async function walk(dir, isGenerated = false) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const full = join(dir, entry.name);
      const skillMd = join(full, "SKILL.md");
      if (await exists(skillMd)) {
        dirs.push({ path: full, generated: isGenerated || dir === GENERATED_PREFIX });
        continue;
      }
      if (entry.name === "generated") {
        await walk(full, true);
      }
    }
  }

  await walk(SKILLS_ROOT);
  return dirs;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const fm = {};
  const lines = match[1].split("\n").map((l) => l.replace(/\r$/, ""));
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(/^([\w-]+):\s*(.*)$/);
    if (!m) { i++; continue; }
    const key = m[1];
    let value = m[2].trim();
    if (value === ">" || value === "|" || value === ">-" || value === "|-") {
      const block = [];
      i++;
      while (i < lines.length) {
        const next = lines[i];
        if (/^[\w-]+:\s/.test(next)) break;
        block.push(next.trim());
        i++;
      }
      value = block.join(" ").trim();
      fm[key] = value;
      continue;
    }
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    fm[key] = value;
    i++;
  }
  return fm;
}

async function countComponents(skillPath) {
  const componentsDir = join(skillPath, "components");
  if (!(await exists(componentsDir))) return 0;
  let count = 0;

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith(".jsx")) count++;
    }
  }

  await walk(componentsDir);
  return count;
}

async function validateSkill(skillPath, { strict = true } = {}) {
  const name = basename(skillPath);
  const errors = [];
  const warnings = [];

  for (const rel of REQUIRED_FILES) {
    if (!(await exists(join(skillPath, rel)))) {
      errors.push(`Missing required file: ${rel}`);
    }
  }

  const skillMdPath = join(skillPath, "SKILL.md");
  if (await exists(skillMdPath)) {
    const content = await readFile(skillMdPath, "utf8");
    const fm = parseFrontmatter(content);

    if (!fm?.name) errors.push("SKILL.md missing frontmatter field: name");
    else if (fm.name !== name) errors.push(`SKILL.md name "${fm.name}" does not match folder "${name}"`);

    if (!fm?.description) errors.push("SKILL.md missing frontmatter field: description");
    else if (fm.description.length < 40) warnings.push("SKILL.md description is very short — may hurt agent discovery");

    if (!content.includes("Tier A")) warnings.push("SKILL.md missing Tier A/B/C reading list");

    for (const section of SKILL_MD_SECTIONS) {
      if (!content.includes(section)) errors.push(`SKILL.md missing section: ${section}`);
    }

    const lines = content.split("\n").length;
    if (lines > 500) warnings.push(`SKILL.md is ${lines} lines (recommended max 500)`);

    if (content.match(/^```\s*$/m) && content.includes("STACK REQUIREMENTS")) {
      const tail = content.split("STACK REQUIREMENTS").pop();
      if (tail.includes("```")) errors.push("SKILL.md has stray markdown fence at end");
    }
  }

  const skillJsonPath = join(skillPath, "skill.json");
  if (await exists(skillJsonPath)) {
    const raw = await readFile(skillJsonPath, "utf8");
    if (raw.includes("```")) errors.push("skill.json contains markdown fences");

    let json;
    try {
      json = JSON.parse(raw);
    } catch (e) {
      errors.push(`skill.json invalid JSON: ${e.message}`);
    }

    if (json) {
      if (json.name !== name) errors.push(`skill.json name "${json.name}" does not match folder "${name}"`);
      if (!json.description) warnings.push("skill.json missing description");
      if (!json.signature_traits?.length) warnings.push("skill.json missing signature_traits");

      const actual = await countComponents(skillPath);
      if (json.components != null && json.components !== actual) {
        warnings.push(`skill.json components=${json.components} but found ${actual} .jsx files`);
      }
    }
  }

  async function checkJsxFence(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await checkJsxFence(full);
      else if (entry.name.endsWith(".jsx")) {
        const src = await readFile(full, "utf8");
        if (src.trimStart().startsWith("```")) {
          errors.push(`${entry.name} wrapped in markdown fence — agent may mis-parse`);
        }
      }
    }
  }

  const componentsDir = join(skillPath, "components");
  if (await exists(componentsDir)) await checkJsxFence(componentsDir);

  const qualityPrompts = join(skillPath, "meta/quality-prompts.md");
  if (strict && !(await exists(qualityPrompts))) {
    warnings.push("Missing meta/quality-prompts.md");
  }

  return { name, path: skillPath, errors, warnings };
}

async function main() {
  const args = process.argv.slice(2);
  let skillDirs;

  if (args.length > 0) {
    skillDirs = args.map((p) => ({ path: p, generated: p.includes("generated") }));
  } else {
    skillDirs = await findSkillDirs();
  }

  let failed = false;
  const results = [];

  for (const { path, generated } of skillDirs) {
    const result = await validateSkill(path, { strict: !generated });
    results.push(result);

    const label = generated ? `${result.name} (generated/WIP)` : result.name;
    if (result.errors.length === 0 && result.warnings.length === 0) {
      console.log(`✓ ${label}`);
    } else {
      if (result.errors.length) failed = true;
      console.log(`${result.errors.length ? "✗" : "⚠"} ${label}`);
      for (const e of result.errors) console.log(`  ERROR: ${e}`);
      for (const w of result.warnings) console.log(`  WARN:  ${w}`);
    }
  }

  console.log(`\nValidated ${results.length} skill(s).`);
  process.exit(failed ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
