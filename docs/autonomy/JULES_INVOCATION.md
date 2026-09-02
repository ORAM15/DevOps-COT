# Jules Invocation Contract

Use this exact instruction for each external scheduled invocation:

> Inspect the current `PROJECT_STATE` and repository state. Load `AGENTS.md`, the frozen foundation authority manifest, the project-state records, and the authoritative definition of the current/next permitted checkpoint. Determine the next permitted checkpoint from repository evidence. Execute only that bounded checkpoint according to the frozen project foundation. Inspect before modifying, preserve working behavior, validate meaningful changes, record evidence, and deliver the bounded change through the frozen GitHub workflow. If a genuine human approval gate, missing authoritative information, inconsistent repository state, or other blocker prevents safe completion, stop and report it. Never continue coding indefinitely and never claim completion without acceptance evidence.

## Invocation semantics

- One invocation = one checkpoint-bounded execution attempt.
- The agent must re-read persistent state on every invocation.
- The agent must not assume that a previous session's conversational memory exists.
- A scheduler may invoke this instruction repeatedly; repetition is not permission to skip gates or start later checkpoints.
- Human approval remains authoritative.
