---
name: commit
description: Commit changes using a short Conventional Commits message. Use when the user asks to commit changes.
---

# Commit

1. Run `git status` and `git diff` (staged and unstaged) to see what changed.
2. If on `main`, create a new branch first (e.g. `feat/short-description`).
3. Stage the relevant files. Don't stage secrets or build output.
4. Commit with a Conventional Commits message: `type: short summary`
   - Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`
   - Lowercase, imperative, under ~72 characters, no trailing period.
   - Add a body only if the "why" isn't obvious. Keep it brief.
5. Don't push unless the user asks.
