---
name: open-pr
description: Open a pull request against the fork's main branch. Use when the user asks to open or create a PR.
---

# Open PR

1. If on `main`, create a branch first (e.g. `feat/short-description`).
2. Commit any pending changes with the `commit` skill.
3. Push the branch to `origin` (the fork) with `git push -u origin HEAD`.
4. Open the PR against the fork's default branch, `main`, not `upstream`:

   ```sh
   gh pr create --repo nicomiguelino/typescript-refresher-2026 \
     --base main --head <branch> --title "<title>" --body "<body>"
   ```

   - Title: Conventional Commits format, e.g. `feat: add X`.
   - Body: short and simple, a sentence plus a few bullets at most.
   - No test plan section.
5. Return the PR URL.
