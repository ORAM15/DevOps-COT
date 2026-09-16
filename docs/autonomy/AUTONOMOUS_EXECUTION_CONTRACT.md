# Autonomous Checkpoint Execution Contract

## Purpose
This repository exposes a deterministic, checkpoint-bounded contract for a fresh coding-agent session and an external orchestrator. It does not implement a scheduler.

## Required resume sequence
A fresh agent must:
1. Read `AGENTS.md`.
2. Read `docs/foundation/FOUNDATION_MANIFEST.md`.
3. Read `docs/project-state/PROJECT_STATE.md`.
4. Read `docs/project-state/CHECKPOINT_LOG.md`.
5. Read `DECISION_LOG.md`, `VALIDATION_RECORD.md`, and `HANDOFF_RECORD.md`.
6. Inspect the repository and Git state.
7. Determine the current checkpoint from persistent state.
8. Determine the next permitted checkpoint only from authoritative repository data.
9. Execute only that checkpoint's allowed work.
10. Run that checkpoint's required validation.
11. Record actual evidence and state changes.
12. Deliver only the bounded checkpoint change through the frozen GitHub workflow.
13. Stop at human-approval gates or genuine blockers.

## Completion invariant
A checkpoint is complete only when its acceptance criteria are demonstrated with evidence. Code existence, a commit, a pull request, or a successful build alone is insufficient.

## Authority-gap rule
If the repository does not contain the exact authoritative definition or acceptance criteria needed for the active checkpoint, do not infer them. Report the missing authority and stop.

## External orchestrator boundary
The external orchestrator is responsible for starting a fresh agent session. It must not encode project-specific implementation decisions outside repository authority. Each invocation is one bounded execution attempt. A later invocation re-reads state and determines what is permitted at that time.

## Scheduling boundary
No scheduler, cron implementation, webhook service, or autonomous loop is implemented in this repository. Scheduling remains an external concern.
