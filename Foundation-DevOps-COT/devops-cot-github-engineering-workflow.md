FINAL GITHUB ENGINEERING WORKFLOW
DevOps COT — Clashing DevTools

Document Status: FINAL / AUTHORITATIVE
Applies To: All development, AI-assisted development, testing, review, integration, and release activity performed through GitHub.

This workflow is subordinate to the approved:

Project Constitution
        ↓
Requirements & Constraints
        ↓
Final Architecture
        ↓
Technology & Tooling Specification
        ↓
Master Phase Plan
        ↓
Checkpoint System
        ↓
AI Engineering Contract
        ↓
Quality & Evaluation System
        ↓
GITHUB ENGINEERING WORKFLOW

The GitHub repository is the project's engineering source of truth for versioned implementation, while the approved project documents remain authoritative for requirements, architecture, scope, and engineering policy.

1. Repository Identity

The current project repository is:

DevOps-COT

The repository contains the current application implementation and associated configuration, including the React/TypeScript application, Firebase-related configuration, Express server, Docker Compose configuration, Jenkinsfile, Nginx configuration and project documentation.

The repository must evolve through controlled engineering changes rather than uncontrolled direct modification.

2. Repository Structure

The repository should maintain a clear separation between application code, configuration and documentation.

The current implementation includes the following principal structure:

DevOps-COT/
│
├── src/
│   ├── components/
│   │   ├── game/
│   │   └── ui/
│   │
│   ├── constants/
│   ├── lib/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types/
│
├── index.html
├── server.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
│
├── firebase-applet-config.json
├── firebase-blueprint.json
├── firestore.rules
│
├── docker-compose.yml
├── Jenkinsfile
├── nginx.conf
│
├── .env.example
├── .gitignore
├── README.md
└── metadata.json

This structure should not be reorganized merely for aesthetic reasons.

Future restructuring must have a concrete engineering justification.

3. Repository Protection Principle

The repository must preserve:

Working implementation
        +
Validated changes
        +
Traceability
        +
Reviewability

The repository must not become a dumping ground for:

experiments,
abandoned code,
generated noise,
unrelated projects,
temporary credentials,
meaningless commits,
speculative architecture.
4. Branch Strategy

The project uses a protected integration branch:

main

The current repository was initialized on main and pushed to GitHub.

The conceptual workflow is:

main
 │
 ├── feature/checkpoint-...
 │
 ├── fix/checkpoint-...
 │
 └── refactor/checkpoint-...
          │
          ▼
         PR
          │
          ▼
       Review
          │
          ▼
      Validation
          │
          ▼
        Merge
          │
          ▼
         main

Direct uncontrolled development on main should be avoided.

5. Main Branch

main represents the integrated project state.

It should contain only changes that have passed the required engineering workflow.

The main branch should therefore remain:

buildable,
reviewable,
traceable,
consistent with the approved architecture,
free from knowingly broken checkpoint work.

A change that is known to violate acceptance criteria must not be merged merely to "get it into main."

6. Branch Naming

Branches should identify the engineering purpose and checkpoint.

Recommended format:

feature/CP-01-<short-description>
fix/CP-01-<short-description>
refactor/CP-01-<short-description>

Examples:

feature/CP-03-technology-unlock
fix/CP-04-firestore-state-persistence
refactor/CP-02-game-state-management

The branch name should be concise but traceable.

7. One Branch = One Bounded Work Unit

A branch should normally correspond to:

One checkpoint or one clearly bounded implementation task.

Do not combine unrelated work.

Bad:

feature/new-game-system

containing:

authentication changes,
new buildings,
database migration,
UI redesign,
3D assets,
CI/CD changes.

Good:

feature/CP-05-building-upgrade-validation

containing only the work required for that checkpoint.

8. Issue Structure

Every meaningful engineering work unit should have a GitHub Issue.

A standard Issue should contain:

Title:
[CP-X.Y] Short description

Checkpoint:
CP-X.Y

Phase:
Phase-X

Objective:
...

Requirements addressed:
REQ-...

Scope:
...

Allowed changes:
...

Acceptance criteria:
...

Validation required:
...

Dependencies:
...

Known risks:
...

Out of scope:
...

The Issue becomes the execution boundary for the AI agent.

9. Checkpoint-to-Issue Mapping

Each checkpoint must map to a traceable GitHub Issue.

Master Phase
     ↓
Checkpoint
     ↓
GitHub Issue
     ↓
Implementation Branch
     ↓
Commits
     ↓
Pull Request
     ↓
Validation Evidence
     ↓
Acceptance
     ↓
Issue Closure

Example:

Phase 3
  ↓
CP-3.2
  ↓
Issue #27
  ↓
feature/CP-3.2-technology-unlock
  ↓
PR #31
  ↓
Validation
  ↓
Accepted
  ↓
Issue #27 Closed

This creates a permanent engineering trail.

10. Issue Scope Protection

An Issue must not silently expand.

If implementation reveals additional work, classify it as:

same checkpoint and necessary → continue,
separate bounded task → new Issue,
requirement change → proposal,
architecture change → human approval,
scope expansion → human approval.

Do not simply add everything discovered during development into the current branch.

11. Commit Expectations

Every commit must represent real engineering work.

A useful commit should communicate:

What changed

and, where useful:

Why it changed

Recommended format:

CP-X.Y: <action>

Examples:

CP-2.1: validate building upgrade costs
CP-3.2: implement technology unlock state
CP-4.1: fix user game-state initialization
12. Commit Quality Rules

A commit should be:

logically coherent,
related to the active Issue,
reviewable,
meaningful,
free from unrelated changes.

Avoid commits such as:

update
changes
final
progress
test
AI changes
misc

unless the actual context makes the purpose clear.

13. No Green-Dot Farming

GitHub activity is not a project metric.

The AI must never create commits merely to:

increase contribution activity,
create a green GitHub graph,
make the repository appear active,
satisfy an arbitrary commit count.

One meaningful commit is better than twenty meaningless commits.

14. No Artificial Commit Splitting

The AI must also avoid artificially splitting one trivial change into many commits.

For example:

change title
change spacing
change button
change color
change comment

when all changes form one small coherent fix.

Commits should reflect meaningful engineering boundaries.

15. Pull Request Structure

Every PR should contain a standard description.

# Summary

What was implemented?

# Checkpoint

CP-X.Y

# Issue

Closes #XX

# Requirements

REQ-X
REQ-Y

# Changes

- ...
- ...
- ...

# Architecture Impact

None / described below

# API Impact

None / described below

# Database Impact

None / described below

# Security Impact

None / described below

# Testing

Tests executed:
...

Results:
...

# Validation Evidence

...

# Known Limitations

...

# Scope Confirmation

No unrelated functionality included.
16. PR Requirements

A PR is mergeable only when:

the intended checkpoint work exists,
the change is bounded,
required tests have been executed,
relevant validation has been completed,
acceptance criteria have been demonstrated,
no known critical regression exists,
required evidence is available,
required review has occurred,
architecture has not been silently changed,
protected contracts have not been silently changed.
17. Testing Before PR

Before requesting review, the AI should perform the validation applicable to the change.

At minimum, where applicable:

Type/Build validation
        ↓
Targeted tests
        ↓
Integration validation
        ↓
Regression validation
        ↓
Manual/E2E validation

Not every PR requires every testing layer, but the AI must justify why a layer is not applicable when the checkpoint's acceptance criteria might otherwise require it.

18. "Build Passes" Is Not Enough

A successful build proves only that the selected build process completed successfully.

It does not prove:

authentication works,
Firestore persistence works,
game logic is correct,
user isolation works,
gameplay works,
UX works,
acceptance criteria are satisfied.

Therefore:

Build PASS
    ≠
Checkpoint PASS
19. PR Evidence Requirement

A PR must contain evidence proportional to the claim.

For behavioural changes, acceptable evidence may include:

automated test output,
screenshots,
recordings,
API results,
database-state verification,
browser walkthrough,
deployment verification.

The PR should explicitly state what was tested.

Example:

Validation:
1. Authenticated with Google account.
2. Confirmed Firebase UID was established.
3. Confirmed new game state initialized.
4. Reloaded application.
5. Confirmed state persisted.

Result:
PASS

The exact evidence must reflect what was actually performed.

20. No Fabricated Validation

The AI must never put:

Tests: PASS

into a PR unless the tests actually ran and passed.

Likewise:

Deployment: PASS

requires actual deployment validation.

Security: PASS

requires actual relevant security validation.

If validation was impossible:

Status: BLOCKED
Reason: ...
21. Review Requirements

A reviewer should verify:

Requirement correctness

Does the change satisfy the linked requirement?

Scope

Does it remain inside the checkpoint?

Regression

Does existing functionality remain intact?

Architecture

Does it comply with the approved architecture?

Security

Does it preserve authentication, authorization and data protection?

Testing

Is validation appropriate?

Evidence

Can the claimed behaviour be demonstrated?

22. AI Pull Request Behaviour

An AI agent creating a PR must think:

"Can another engineer understand exactly
what I changed, why I changed it,
and how I proved that it works?"

If the answer is no, the PR is not ready.

The AI must not hide:

failed tests,
known defects,
incomplete functionality,
technical debt introduced by the change,
validation limitations.
23. Review Outcomes

A PR can receive:

APPROVED

Requirements and evidence are satisfactory.

CHANGES REQUESTED

The implementation requires correction.

BLOCKED

External dependency or owner decision prevents completion.

REJECTED

The implementation is fundamentally inconsistent with requirements, architecture or project scope.

24. Merge Requirements

A PR may be merged only when:

Issue linked
    +
Checkpoint identified
    +
Scope verified
    +
Required tests passed
    +
Acceptance evidence available
    +
Review complete
    +
No blocking failure
    +
Architecture compliant
    +
Security acceptable

Where human approval is required by the AI Engineering Contract, that approval must occur before merge.

25. Merge Strategy

The project should favour a clean, understandable history.

Where the repository workflow permits, checkpoint work should be integrated as a coherent unit rather than leaving excessive experimental commits in the main history.

The exact GitHub merge mechanism may depend on repository configuration, but the result must preserve traceability.

26. Merge Does Not Equal Acceptance

This distinction is mandatory:

PR merged
     ≠
Checkpoint accepted

A checkpoint is accepted only after its acceptance criteria have been demonstrated.

If the repository workflow permits merging only after acceptance, then merge may be part of the completion sequence.

Otherwise, the acceptance state must still be explicitly recorded.

27. Issue Closure

An Issue should be closed only when its linked checkpoint has met its acceptance criteria.

Closing an Issue because:

code was written,
a PR was created,
a PR was merged,

is insufficient.

Correct:

Implementation
    ↓
Validation
    ↓
Acceptance
    ↓
Issue closure
28. Failed PRs

When a PR fails validation, the AI must not repeatedly retry the same approach without learning.

The workflow is:

Failure
   ↓
Identify cause
   ↓
Record evidence
   ↓
Determine root cause
   ↓
Modify approach
   ↓
Re-test

If the same approach fails repeatedly:

Stop and reassess.

Do not generate endless speculative patches.

29. Repeated Failure Protocol

After repeated meaningful failures, the AI should produce:

## Failure Pattern

What has failed:
...

Attempts made:
...

Evidence:
...

Likely root cause:
...

Why previous fixes failed:
...

Remaining uncertainty:
...

Recommended next action:
...

Human decision required:
YES / NO

The objective is learning from failure rather than generating more code.

30. Huge Change Protection

The AI must detect unexpectedly large diffs.

If a small checkpoint produces:

dozens of unrelated files,
major dependency changes,
architecture changes,
database migrations,
widespread refactoring,

the AI should stop and inspect why the diff became large.

Large diffs are not automatically wrong, but they require justification.

31. Unrelated Work Protection

A branch for:

CP-3.2 Technology Unlock

must not contain:

unrelated UI redesign,
authentication refactoring,
3D asset experiments,
documentation unrelated to the checkpoint,
random dependency upgrades.

If discovered:

Move it into a separate Issue/branch.

32. Dependency Changes

Dependency upgrades should not be bundled casually into feature work.

For example:

CP-3.2
Technology unlock
+
Upgrade React
+
Upgrade Firebase
+
Replace animation library

is poor engineering unless all are genuinely required.

Unrelated dependency upgrades should be separate work.

33. Documentation Updates

Documentation must be updated when the implementation creates meaningful documentation changes.

Examples:

new developer setup instructions,
changed API behaviour,
changed configuration,
changed architecture,
new environment variables,
significant gameplay system,
changed deployment process.

The AI should not modify documentation simply to create another commit.

34. README Responsibilities

The README should remain useful to a developer who encounters the repository without conversation history.

Where applicable it should explain:

project identity,
purpose,
setup,
development commands,
environment configuration,
running the application,
relevant architecture,
deployment information,
current limitations.

It must not claim features that are only planned.

35. Decision Records

Significant engineering decisions should be recorded rather than buried in chat.

A decision record should contain:

Decision ID:
ADR-X

Title:
...

Status:
Accepted / Proposed / Superseded

Context:
...

Decision:
...

Alternatives:
...

Reason:
...

Trade-offs:
...

Consequences:
...

Requirements affected:
...

Decision records are particularly important for:

architecture,
major technologies,
authentication,
database structure,
API contracts,
major gameplay architecture,
major 3D architecture,
significant scope changes.
36. Decision Authority

GitHub documentation must distinguish:

FACT
DECISION
PROPOSAL
OPEN QUESTION
UNKNOWN

An AI-created issue or document must never turn:

"We could use X"

into:

"The project uses X."

unless the decision was actually approved.

37. State Tracking

The project should maintain explicit engineering state.

At minimum:

Phase
Checkpoint
Issue
Branch
PR
Validation
Acceptance
Status

A conceptual state model is:

PLANNED
   ↓
READY
   ↓
IN PROGRESS
   ↓
IMPLEMENTED
   ↓
VALIDATING
   ↓
VALIDATED
   ↓
REVIEW
   ↓
ACCEPTED
   ↓
MERGED
   ↓
CLOSED

Failure states:

FAILED
BLOCKED
REQUIRES HUMAN REVIEW

must remain visible rather than being hidden.

38. Checkpoint State

Each checkpoint should have one authoritative status:

Status	Meaning
PLANNED	Not started
READY	Prerequisites satisfied
IN PROGRESS	Active implementation
IMPLEMENTED	Code exists but acceptance not yet demonstrated
VALIDATING	Validation underway
VALIDATED	Required tests/evidence completed
REQUIRES HUMAN REVIEW	Owner decision required
BLOCKED	External/unresolved blocker
GATE FAIL	Acceptance failed
ACCEPTED	Acceptance criteria demonstrated
MERGED	Accepted implementation integrated
CLOSED	Engineering work unit completed
39. Rollback Strategy

Rollback must preserve the ability to return to the last known good state.

If a merged change introduces a serious regression:

Detect regression
      ↓
Assess severity
      ↓
Protect current evidence
      ↓
Rollback/revert if necessary
      ↓
Restore known-good state
      ↓
Create corrective Issue
      ↓
Investigate root cause
      ↓
Implement fix
      ↓
Revalidate

The exact rollback mechanism depends on the type of failure.

40. No Destructive Recovery

The AI must not use destructive Git operations simply to make the repository look clean.

Examples requiring caution include:

force-pushing shared branches,
deleting important branches,
resetting away unknown work,
deleting uncommitted changes,
rewriting shared history.

If repository ownership/state is uncertain:

Stop and ask for clarification.

41. Release and Tag Strategy

Tags are appropriate when the project reaches meaningful milestones.

Potential examples:

v0.1.0

for an initial validated milestone,

v0.2.0

for a significant subsequent milestone,

and eventually:

v1.0.0

for the validated major-project release.

Tags should not be created merely because a certain number of commits exists.

A release/tag should correspond to a meaningful validated state.

42. Release Criteria

A release candidate should have:

required functionality,
completed relevant checkpoints,
validation evidence,
no unresolved release-blocking defects,
documented known limitations,
deployment validation where applicable,
owner approval where required.
43. Development vs Release State

The repository must distinguish:

Development state

from:

Validated milestone

An experimental branch is not a release.

A partially implemented feature is not a release.

A passing build is not a release.

44. AI Agent GitHub Protocol

Before touching GitHub, an AI agent should perform:

1. Identify active checkpoint
2. Identify linked Issue
3. Inspect repository state
4. Confirm branch
5. Inspect relevant implementation
6. Confirm scope
7. Implement bounded change
8. Validate
9. Inspect diff
10. Commit meaningful work
11. Prepare PR
12. Provide evidence
13. Request review
14. Merge only when authorized
15. Update checkpoint state
45. Required Pre-Commit Inspection

Before committing, the AI must inspect:

git status

and the relevant diff.

Conceptually:

Repository state
      ↓
Changed files
      ↓
Diff
      ↓
Unexpected changes?
      │
      ├── YES → investigate
      │
      └── NO → commit

This prevents accidental inclusion of unrelated work.

46. AI Must Not Assume Its Own Changes Are the Only Changes

If the repository contains unexpected modifications:

The AI must treat them as potentially belonging to another workflow/person/process.

It must not overwrite them simply because they are inconvenient.

47. PR Evidence Checklist

Before a PR can be considered mergeable:

[ ] Correct Issue linked
[ ] Correct checkpoint identified
[ ] Scope matches checkpoint
[ ] Relevant files inspected
[ ] No unrelated changes
[ ] Build/type validation completed where applicable
[ ] Relevant automated tests completed
[ ] Relevant integration tests completed
[ ] Relevant E2E/manual validation completed
[ ] Regression behaviour checked
[ ] Security implications checked
[ ] Acceptance criteria demonstrated
[ ] Evidence attached/recorded
[ ] Known failures disclosed
[ ] Known limitations disclosed
[ ] Architecture unchanged or approved
[ ] API unchanged or approved
[ ] Database unchanged or approved
[ ] Security boundaries preserved
[ ] Documentation updated where required
[ ] Review completed
48. Mergeability Rule

A PR is:

MERGEABLE

only if the evidence supports acceptance.

NOT MERGEABLE

if:

acceptance criteria are unverified,
required tests fail,
critical regression exists,
scope is uncontrolled,
required approval is missing,
security concerns remain unresolved.
BLOCKED

if validation cannot proceed because of an external dependency or missing decision.

49. Engineering Evidence Record

For important checkpoints, the PR or linked Issue should preserve:

Checkpoint:
...

Requirement:
...

Expected behaviour:
...

Actual behaviour:
...

Validation method:
...

Result:
PASS / FAIL

Evidence:
...

Environment:
...

Known limitations:
...

Reviewer:
...

Acceptance:
...

This becomes useful during:

major-project review,
viva,
debugging,
future AI sessions,
regression analysis,
final documentation.
50. Final GitHub Operating Model

The entire project workflow is:

                 APPROVED REQUIREMENT
                         │
                         ▼
                    CHECKPOINT
                         │
                         ▼
                     ISSUE
                         │
                         ▼
                     BRANCH
                         │
                         ▼
                  INSPECT SYSTEM
                         │
                         ▼
                 BOUNDED IMPLEMENTATION
                         │
                         ▼
                    VALIDATION
                         │
                 ┌───────┴───────┐
                 ▼               ▼
               PASS             FAIL
                 │               │
                 ▼               ▼
              EVIDENCE       INVESTIGATE
                 │               │
                 ▼               │
                 PR ◄────────────┘
                 │
                 ▼
               REVIEW
                 │
          ┌──────┴──────┐
          ▼             ▼
       APPROVED       CHANGES
          │             │
          ▼             └──→ FIX → VALIDATE
        MERGE
          │
          ▼
   ACCEPTANCE CONFIRMED
          │
          ▼
     ISSUE CLOSED
          │
          ▼
    CHECKPOINT COMPLETE
          │
          ▼
      NEXT CHECKPOINT
51. Anti-Pattern Protection

The following behaviours are explicitly prohibited.

Green-dot farming
Meaningless commits → prohibited
PR farming
Useless PRs → prohibited
Scope explosion
Small Issue → giant unrelated implementation → prohibited
Validation bypass
Code works "according to AI" → merge → prohibited
Failure repetition
Same failed approach repeatedly → prohibited
Architecture drift
Implementation difficulty → silently redesign architecture → prohibited
Evidence fabrication
Untested → reported as tested → prohibited
Broken-main development
Known broken implementation → merge anyway → prohibited
52. Final GitHub Contract

Any AI agent working with the DevOps COT repository is bound by these rules:

Every meaningful change must have a reason.

Every meaningful change must have a bounded scope.

Every bounded work unit must be traceable to a checkpoint and Issue.

Every implementation must be validated according to its acceptance criteria.

Every PR must contain honest evidence.

A green build is not sufficient proof of completion.

A merged PR is not sufficient proof of completion.

An AI claim is not evidence.

A failed attempt must produce learning before another attempt.

Unrelated work must not be mixed into a checkpoint.

Architecture, API, database, authentication and security boundaries must not be changed without authorization.

The AI must never manufacture GitHub activity.

The AI must never fabricate successful validation.

The AI must never merge knowingly broken work.

Issues close only after acceptance is demonstrated.

Checkpoints complete only after their acceptance criteria are satisfied.

The repository records engineering history; it does not manufacture engineering progress.

53. Definitive Workflow Rule

The authoritative GitHub progression for DevOps COT is therefore:

REQUIREMENT
    ↓
PHASE
    ↓
CHECKPOINT
    ↓
ISSUE
    ↓
BRANCH
    ↓
INSPECTION
    ↓
BOUNDED IMPLEMENTATION
    ↓
TESTING
    ↓
VALIDATION
    ↓
EVIDENCE
    ↓
PR
    ↓
REVIEW
    ↓
ACCEPTANCE
    ↓
MERGE
    ↓
ISSUE CLOSURE
    ↓
CHECKPOINT COMPLETION
    ↓
NEXT CHECKPOINT

The repository is considered healthy not when it has many commits, branches, PRs or green dots, but when each merged change can be traced to an approved requirement and backed by demonstrated engineering evidence.