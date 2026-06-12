# Generated Skills

Community-created skills in **work in progress** — not published in `registry.json`. They use the same project-type folder structure as first-party skills.

```
drip-skills/
  saas-website/          ← first-party production skills
    linear-modern/
    ...
  generated/             ← community WIP skills (same project-type axis)
    saas-website/
      luxury-bold/
    dashboard/           ← future project types
      ...
```

First-party vs community is distinguished by the `author` field in `skill.json` (`"getdrip"` vs designer username), not by folder location.

| Skill | Project Type | Status | Notes |
|-------|--------------|--------|-------|
| `luxury-bold` | `saas-website` | WIP | Has `disable-model-invocation: true`. Run quality tests before promotion. |

To promote a generated skill to production:

1. Pass `node scripts/validate-skill.mjs drip-skills/generated/saas-website/<name>`
2. Complete all 5 laws in [`creating new skill info/quality-tests.md`](../../creating%20new%20skill%20info/quality-tests.md)
3. Move folder to `drip-skills/saas-website/<name>/` (same project type, out of `generated/`)
4. Add entry to `registry.json` with matching `projectType`
5. Remove `disable-model-invocation` and WIP markers from `SKILL.md`
