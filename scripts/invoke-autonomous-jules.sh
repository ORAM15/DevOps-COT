#!/usr/bin/env bash
set -euo pipefail

# Repository-side bridge from an external orchestrator to one bounded Jules session.
# This script does not decide what to build. Repository state and foundation authority do.

ROOT_DIR="$(git rev-parse --show-toplevel 2>/dev/null)" || {
  echo "ERROR: run from a Git repository." >&2
  exit 2
}
cd "$ROOT_DIR"

required_files=(
  "AGENTS.md"
  "docs/foundation/FOUNDATION_MANIFEST.md"
  "docs/project-state/PROJECT_STATE.md"
  "docs/project-state/CHECKPOINT_LOG.md"
  "docs/project-state/DECISION_LOG.md"
  "docs/project-state/VALIDATION_RECORD.md"
  "docs/project-state/HANDOFF_RECORD.md"
  "docs/autonomy/JULES_INVOCATION.md"
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "BLOCKED: required autonomous-execution file is missing: $file" >&2
    exit 3
  fi
done

if ! grep -q 'PROJECT FOUNDATION v1.0' docs/foundation/FOUNDATION_MANIFEST.md; then
  echo "BLOCKED: frozen foundation authority manifest is not recognizable." >&2
  exit 3
fi

if ! grep -q '^> Inspect the current `PROJECT_STATE`' docs/autonomy/JULES_INVOCATION.md; then
  echo "BLOCKED: exact Jules invocation contract is missing or malformed." >&2
  exit 3
fi

# The repository is the source of truth for the invocation prompt.
PROMPT="$(awk '/^> Inspect the current `PROJECT_STATE`/{capture=1} capture && /^> /{sub(/^> /, ""); print} capture && !/^> /{exit}' docs/autonomy/JULES_INVOCATION.md)"

if [[ -z "$PROMPT" ]]; then
  echo "BLOCKED: could not extract the Jules invocation contract." >&2
  exit 3
fi

if command -v jules >/dev/null 2>&1; then
  JULES_CMD=(jules)
elif command -v npx >/dev/null 2>&1; then
  JULES_CMD=(npx --yes @google/jules)
else
  echo "BLOCKED: Jules CLI is not installed. Install @google/jules or use the Jules REST API from the external orchestrator." >&2
  exit 4
fi

echo "Autonomous preflight: PASS"
echo "Repository: $(git config --get remote.origin.url || true)"
echo "Branch: $(git branch --show-current)"
echo "Invocation: one checkpoint-bounded Jules session"
echo "Starting Jules..."

"${JULES_CMD[@]}" remote new --repo . --session "$PROMPT"
