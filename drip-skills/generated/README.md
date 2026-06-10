# Generated Skills

Skills in this folder are **work in progress** and are **not published** in `registry.json`.

| Skill | Status | Notes |
|-------|--------|-------|
| `luxury-bold` | WIP | Has `disable-model-invocation: true`. Run quality tests before promotion. |

To promote a generated skill to production:

1. Pass `node scripts/validate-skill.mjs drip-skills/generated/<name>`
2. Complete all 5 laws in [`creating new skill info/quality-tests.md`](../../creating%20new%20skill%20info/quality-tests.md)
3. Move folder to `drip-skills/<name>/`
4. Add entry to `registry.json`
5. Remove `disable-model-invocation` and WIP markers from `SKILL.md`
