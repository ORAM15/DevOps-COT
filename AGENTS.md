# AGENTS.md

## DevOps COT Autonomous Engineering Contract

This repository is governed by `PROJECT FOUNDATION v1.0 — FROZEN`.

### Authority order
1. Frozen project foundation documents under `docs/foundation/`.
2. Persistent project state under `docs/project-state/`.
3. The active checkpoint definition referenced by `PROJECT_STATE.md`.
4. Repository implementation and its validation evidence.
5. Conversational instructions are not authoritative when they conflict with repository authority.

### Mandatory resume sequence
Before touching code, an agent MUST:
1. Read `docs/foundation/FOUNDATION_MANIFEST.md`.
2. Read `docs/project-state/PROJECT_STATE.md`.
3. Read `docs/project-state/CHECKPOINT_LOG.md`.
4. Read `docs/project-state/DECISION_LOG.md` and `VALIDATION_RECORD.md`.
5. Read the checkpoint-specific authoritative definition when present in the foundation.
6. Inspect Git status/history and the relevant implementation.
7. Determine the single next permitted checkpoint.
8. If the checkpoint, its acceptance criteria, or an approval boundary cannot be established, STOP and report the blocker.

### Execution boundaries
- Execute only the active checkpoint.
- Do not start a later checkpoint because it appears convenient.
- Inspect before modifying.
- Preserve working behavior.
- Make bounded changes.
- Validate every meaningful change.
- Never fabricate tests, success, evidence, commits, or completion.
- Do not silently change requirements, architecture, API contracts, database schema, scope, or frozen foundation documents.
- Do not create meaningless commits or PRs.

### Failure handling
If validation fails, record the failure, diagnose it, and repair only within the checkpoint's permitted repair limit. If the limit is absent or exceeded, STOP for human review.

If requirements conflict, authoritative information is missing, repository state is inconsistent, or an external dependency prevents completion, STOP rather than inventing a resolution.

### GitHub delivery
Use the frozen GitHub workflow. Work on the checkpoint branch, provide evidence in the PR, and stop at human approval gates. A commit, PR, or green build alone is not checkpoint completion.

### Autonomous invocation
External orchestrators must use the exact invocation contract in `docs/autonomy/JULES_INVOCATION.md`. The invocation is checkpoint-bounded and never means “keep coding indefinitely.”
