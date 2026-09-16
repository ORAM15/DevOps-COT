FINAL PROJECT STATE AND HANDOFF PROTOCOL
DevOps COT — Clashing DevTools

Document Status: FINAL / AUTHORITATIVE
Purpose: Canonical project-state representation and AI-to-AI handoff mechanism

1. Purpose

The purpose of this protocol is to ensure that DevOps COT can be continued by a completely fresh AI session without relying on hidden conversational memory.

A new AI agent must be able to determine, from explicit project records:

Where are we?
What has been completed?
What is being worked on?
What failed?
What is blocked?
What decisions are pending?
What has been validated?
What is the repository state?
What is allowed next?

The central principle is:

Conversation history is not the project's state database.

The project must maintain an explicit, versioned and inspectable state.

2. Canonical State Model

The project state follows:

                    PROJECT CONSTITUTION
                            │
                            ▼
                  REQUIREMENTS & CONSTRAINTS
                            │
                            ▼
                  FINAL ARCHITECTURE
                            │
                            ▼
                TECHNOLOGY SPECIFICATION
                            │
                            ▼
                    MASTER PHASE PLAN
                            │
                            ▼
                  CHECKPOINT SYSTEM
                            │
                            ▼
                 CURRENT PROJECT STATE
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
    Decision Log      Checkpoint Log    Validation Records
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                     HANDOFF RECORD
                            │
                            ▼
                    NEXT AI SESSION

The PROJECT_STATE is the primary operational snapshot.

The other records provide the evidence and history behind that snapshot.

3. Canonical State Files

The repository should maintain a dedicated project-state directory:

docs/
└── project-state/
    ├── PROJECT_STATE.md
    ├── DECISION_LOG.md
    ├── CHECKPOINT_LOG.md
    ├── VALIDATION_RECORD.md
    └── HANDOFF_RECORD.md

These are not ordinary documentation files.

They form the project's engineering continuity layer.

4. PROJECT_STATE

PROJECT_STATE.md represents the current authoritative snapshot.

It answers:

"If I know nothing about this project, what is its current engineering state?"

It must contain the following canonical information.

4.1 State Header
# PROJECT STATE

Project: DevOps COT
State Version: <version>
Last Updated: <date/time>
Updated By: <human/AI identifier>

The timestamp must correspond to the actual update.

The AI must never fabricate a timestamp or state update.

5. Current Phase

The state must explicitly identify:

Current Phase:
Phase X — <name>

Phase Status:
PLANNED / READY / IN PROGRESS / BLOCKED / COMPLETE

Only one phase should normally be marked as the current active phase.

A future phase must not be treated as active simply because its work has been discussed.

6. Current Checkpoint

The state must identify the exact active checkpoint:

Current Checkpoint:
CP-X.Y — <name>

Checkpoint Status:
PLANNED / READY / IN PROGRESS / VALIDATING /
REQUIRES HUMAN REVIEW / BLOCKED / ACCEPTED / COMPLETE

If no checkpoint is active:

Current Checkpoint:
NONE
7. Completed Checkpoints

Maintain a concise historical list:

## Completed Checkpoints

| Checkpoint | Status | Evidence | Date |
|---|---|---|---|
| CP-01 | COMPLETE | Validation Record VR-001 | ... |
| CP-02 | COMPLETE | Validation Record VR-002 | ... |

A checkpoint may appear here only after its acceptance criteria have been demonstrated.

A commit or merged PR alone is insufficient.

8. Active Work

The state must explicitly describe what is currently being worked on.

## Active Work

Checkpoint:
CP-X.Y

Objective:
...

Current task:
...

Files/components involved:
...

Expected outcome:
...

This prevents a new AI from guessing what the previous agent was doing.

9. Blocked Work

Any blocked work must be recorded separately.

## Blocked Work

| Item | Blocker | Since | Required Action |
|---|---|---|---|
| ... | ... | ... | ... |

Examples of blockers include:

missing credentials,
unavailable external service,
unresolved architecture question,
required human decision,
failed dependency,
missing asset,
unavailable environment.

A blocked item must not be silently treated as active implementation.

10. Failed Attempts

The project must preserve meaningful failed attempts.

## Failed Attempts

### FA-001 — <description>

Attempt:
...

Expected:
...

Actual:
...

Failure:
...

Evidence:
...

Root cause:
...

Lesson:
...

Current status:
ABANDONED / RETRY REQUIRED / BLOCKED / RESOLVED

This is important because a fresh AI must not repeat a known failed approach without new justification.

11. Open Decisions

Pending decisions belong in the state:

## Open Decisions

| ID | Decision | Options | Impact | Approval Required |
|---|---|---|---|---|
| D-001 | ... | A / B | ... | YES |

The AI must distinguish:

DECIDED

from:

UNDER CONSIDERATION

Silence does not constitute approval.

12. Required Approvals

The state must identify anything requiring human authorization.

## Required Approvals

- [ ] Architecture change — D-001
- [ ] Database schema change — D-002
- [ ] Scope expansion — D-003
- [ ] External service decision — D-004

Once approved, the approval should be reflected in the relevant Decision Record.

13. Latest Validation

The state must identify the latest meaningful validation:

## Latest Validation

Validation ID:
VR-X

Checkpoint:
CP-X.Y

Validation type:
...

Date:
...

Result:
PASS / FAIL / BLOCKED

Evidence:
...

Validated by:
...

The state should point to the actual validation record rather than duplicating every detail.

14. Repository State

A fresh AI must know the repository condition before touching code.

The state should record:

## Repository State

Branch:
main / feature/... / fix/...

Working tree:
CLEAN / DIRTY

Latest relevant commit:
<hash>

Active PR:
#XX / NONE

Uncommitted changes:
YES / NO

Unexpected changes:
YES / NO

Repository warnings:
...

This information must reflect an actual repository inspection.

The AI must not assume the state file is current if repository evidence contradicts it.

15. Known Defects

Known defects must be explicitly recorded.

## Known Defects

| ID | Description | Severity | Affected Area | Status |
|---|---|---|---|---|
| DEF-001 | ... | HIGH | ... | OPEN |
| DEF-002 | ... | MEDIUM | ... | KNOWN |

The AI must not "forget" known defects merely because they are inconvenient to the next task.

16. Next Permitted Action

This is one of the most important fields.

The state must explicitly say:

## Next Permitted Action

<single bounded action>

Examples:

Inspect CP-03 implementation before modifying it.

or:

Run the required validation for CP-03.2.

or:

Wait for human approval of D-004.

or:

Create the implementation branch for CP-04.1.

The next action must be derived from the current checkpoint and its prerequisites.

17. PROJECT_STATE Canonical Template
# PROJECT STATE

## Identity

Project:
State Version:
Last Updated:
Updated By:

## Current Phase

Phase ID:
Phase Name:
Status:

## Current Checkpoint

Checkpoint ID:
Checkpoint Name:
Status:

## Completed Checkpoints

| ID | Status | Validation | Date |
|---|---|---|---|

## Active Work

Objective:
Current Task:
Affected Components:
Expected Outcome:

## Blocked Work

| ID | Blocker | Required Action |
|---|---|---|

## Failed Attempts

| ID | Attempt | Result | Lesson | Status |
|---|---|---|---|---|

## Open Decisions

| ID | Decision | Status | Approval |
|---|---|---|---|

## Required Approvals

- ...

## Latest Validation

Validation ID:
Result:
Evidence:
Date:

## Repository State

Branch:
Working Tree:
Latest Commit:
Active PR:
Uncommitted Changes:
Unexpected Changes:

## Known Defects

| ID | Description | Severity | Status |
|---|---|---|---|

## Next Permitted Action

...

## State Confidence

HIGH / MEDIUM / LOW

## State Notes

...
18. DECISION_LOG

DECISION_LOG.md records decisions that affect project direction.

It prevents a future AI from confusing discussion with authorization.

Each decision must contain:

# Decision D-001

Status:
PROPOSED / APPROVED / REJECTED / SUPERSEDED

Date:

Context:

Problem:

Options Considered:

Decision:

Reason:

Trade-offs:

Consequences:

Requirements Affected:

Architecture Affected:

Approval Required:

Approved By:

Evidence:
19. Decision Status Rules
PROPOSED

An idea has been suggested.

It cannot be treated as project policy.

APPROVED

The project owner has explicitly authorized it.

It may now affect implementation.

REJECTED

The option must not be implemented unless reconsidered through a new decision.

SUPERSEDED

A newer approved decision replaces it.

20. CHECKPOINT_LOG

CHECKPOINT_LOG.md records checkpoint progression.

Example:

# CHECKPOINT LOG

## CP-02.1

Phase:
Phase 2

Objective:
...

Status:
COMPLETE

Prerequisites:
...

Implementation:
...

Validation:
VR-002

PR:
#31

Acceptance:
PASS

Completed:
2026-...

Evidence:
...

Notes:
...

The checkpoint log provides historical continuity.

21. Checkpoint State Transition

A checkpoint must follow:

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
COMPLETE

Possible interruptions:

       ┌──────────┐
       ▼          │
     FAILED       │
       │          │
       └── RETRY ─┘

       BLOCKED

REQUIRES HUMAN REVIEW

The AI must not skip states merely to make the project appear further along.

22. VALIDATION_RECORD

Every significant completed checkpoint requires a validation record.

Example:

# VALIDATION RECORD VR-001

Checkpoint:
CP-X.Y

Requirement(s):
REQ-X

Validation Type:
Unit / Integration / E2E / Security / UX / Deployment / etc.

Environment:

Date:

Expected Behaviour:

Actual Behaviour:

Tests Executed:

Results:

Evidence:

Known Failures:

Regression Check:

Acceptance Criteria:

Result:
PASS / FAIL / BLOCKED

Validated By:

Approval:
23. Validation Evidence Principle

The record must answer:

How do we know this works?

Not:

Did the AI write code?

Evidence may include:

automated test results,
browser verification,
screenshots,
recordings,
API responses,
database verification,
deployment checks,
logs,
reproducible commands.

The appropriate evidence depends on the checkpoint.

24. HANDOFF_RECORD

HANDOFF_RECORD.md is designed specifically for transitions between AI sessions.

It should be short enough to read quickly while linking to deeper records.

Canonical structure:

# HANDOFF RECORD

## Project

DevOps COT

## Handoff Date

...

## Previous Agent

...

## Current Phase

...

## Current Checkpoint

...

## Current Objective

...

## What Was Completed

...

## What Is Currently Being Worked On

...

## What Failed

...

## Current Blockers

...

## Open Decisions

...

## Required Human Approvals

...

## Latest Validation

...

## Repository State

...

## Known Defects

...

## Important Constraints

...

## Next Permitted Action

...

## Do NOT Do

...

## Authoritative References

- Project Constitution
- Requirements & Constraints
- Final Architecture
- Technology Specification
- Master Phase Plan
- Checkpoint System
- AI Engineering Contract
- Quality & Evaluation System
- GitHub Engineering Workflow
- PROJECT_STATE
- DECISION_LOG
- CHECKPOINT_LOG
- VALIDATION_RECORD
25. Handoff Principle

The handoff record must not become a second project constitution.

It is a pointer and operational snapshot.

The hierarchy remains:

Permanent project decisions
        ↓
Authoritative project documents
        ↓
Current state
        ↓
Handoff snapshot

If a handoff contradicts an approved architecture document, the contradiction must be surfaced rather than silently resolved.

26. What Belongs in the Repository

The repository should contain information that must travel with the codebase and remain version-controlled.

Authoritative engineering material
Project Constitution
Requirements & Constraints
Final Architecture
Technology Specification
Master Phase Plan
Checkpoint System
AI Engineering Contract
Quality & Evaluation System
GitHub Engineering Workflow
Operational state
PROJECT_STATE.md
DECISION_LOG.md
CHECKPOINT_LOG.md
VALIDATION_RECORD.md
HANDOFF_RECORD.md
Technical documentation
README
API documentation
developer setup
configuration documentation
architecture diagrams
important ADRs
testing documentation
deployment documentation

The repository therefore becomes self-describing.

27. What Belongs in Notebook Reference Material

Notebook/reference material should contain information that is useful for reasoning and historical context but does not itself constitute executable project authority.

Examples:

brainstorming
early ideas
alternative concepts
research notes
design exploration
meeting notes
UX inspiration
rejected concepts
long-form investigation
temporary analysis

Notebook material can explain why something was considered.

It should not silently override an approved project decision.

28. Repository vs Notebook Authority

The distinction is:

NOTEBOOK
"What have we discussed?"

REPOSITORY
"What has been formally established?"

GITHUB STATE
"What has actually happened?"

VALIDATION RECORD
"What has been demonstrated?"

HANDOFF
"What does the next agent need to know immediately?"

This prevents conversational brainstorming from becoming accidental project requirements.

29. Source-of-Truth Hierarchy

When sources conflict, the AI must use this hierarchy:

1. Explicitly approved project decision
2. Approved architecture / requirements
3. Current repository implementation
4. Validation evidence
5. Current PROJECT_STATE
6. Handoff record
7. Historical discussion / brainstorming

However, this hierarchy does not permit the AI to ignore contradictions.

If the approved specification says one thing and the implementation says another:

Record the discrepancy.

Do not silently rewrite either one.

30. Fresh AI Resume Protocol

A completely new AI session must follow this sequence before touching code.

Step 1 — Establish Repository Identity

Confirm:

Repository
Project
Current directory
Git remote
Current branch

The agent must verify that it is actually operating on DevOps COT.

31. Step 2 — Inspect Git State

Run repository inspection equivalent to:

git status
git branch
git log --oneline -n 10
git remote -v

The exact commands may vary by environment, but the agent must establish the actual repository state.

Do not trust a handoff saying:

"Working tree clean"

without checking.

32. Step 3 — Read PROJECT_STATE

Read:

docs/project-state/PROJECT_STATE.md

Determine:

Current phase
Current checkpoint
Active work
Blockers
Known defects
Next permitted action
33. Step 4 — Read Handoff Record

Read:

docs/project-state/HANDOFF_RECORD.md

This provides the operational context left by the previous session.

34. Step 5 — Read Checkpoint Definition

Open the active checkpoint's authoritative definition.

Verify:

Objective
Prerequisites
Allowed work
Acceptance criteria
Validation
Dependencies
Human approval requirement

Do not begin implementation until prerequisites are satisfied.

35. Step 6 — Read Relevant Requirements

Identify the requirements linked to the checkpoint.

Read only what is necessary to establish the checkpoint's contractual boundary, but consult the authoritative Requirements & Constraints document where ambiguity exists.

36. Step 7 — Read Relevant Architecture

Inspect the architecture relevant to the checkpoint.

The agent must answer:

What component am I allowed to modify?
What interfaces already exist?
What must remain unchanged?
Does this work require an architectural decision?

If architecture is unclear:

Stop and escalate.

Do not redesign the architecture independently.

37. Step 8 — Read Relevant Decisions

Search DECISION_LOG.md.

Determine whether the intended implementation has already been decided.

If the required decision is:

APPROVED

follow it.

If:

PROPOSED

do not implement it as though approved.

If:

OPEN

human/owner resolution may be required.

38. Step 9 — Inspect Existing Implementation

Before modification, inspect the actual relevant code.

The AI must understand:

current behaviour
data flow
component relationships
existing interfaces
existing state management
existing error handling
existing tests

This is mandatory.

The agent must not modify a component solely from its filename or assumptions.

39. Step 10 — Inspect Existing Tests

Determine:

What tests already exist?
What behaviour is already protected?
What regression risk exists?
What validation does this checkpoint require?

Existing tests are part of the project's historical engineering knowledge.

40. Step 11 — Establish Baseline

Where practical, run the relevant existing validation before modification.

This establishes:

BASELINE

so that later failures can be attributed correctly.

Conceptually:

Before change
     ↓
Baseline validation
     ↓
Implement
     ↓
Post-change validation
     ↓
Compare
41. Step 12 — Check for Unexpected Repository Changes

If the working tree contains modifications that the agent did not create:

Do not overwrite them.

Determine whether they belong to:

current work,
another task,
an unfinished previous session,
external tooling.

If ownership cannot be established:

REQUIRES HUMAN REVIEW
42. Step 13 — Confirm Allowed Scope

Before writing code, explicitly determine:

Allowed files/components:
...

Forbidden/unrelated areas:
...

API changes allowed:
YES / NO

Database changes allowed:
YES / NO

Architecture changes allowed:
YES / NO

Dependency changes allowed:
YES / NO

This prevents scope creep.

43. Step 14 — Implement the Smallest Valid Change

The AI should implement the smallest change capable of satisfying the checkpoint.

Prefer:

bounded modification

over:

unrelated cleanup
+
refactor
+
dependency upgrade
+
architecture redesign
44. Step 15 — Validate

After implementation:

Build
↓
Relevant automated tests
↓
Integration tests
↓
E2E/manual verification
↓
Regression checks

Only the layers relevant to the checkpoint need to be executed.

45. Step 16 — Inspect the Diff

Before committing:

git status

and inspect the complete diff.

Verify:

Expected files changed?
Unexpected files?
Debug code?
Secrets?
Generated junk?
Unrelated refactoring?
Architecture drift?

Unexpected changes must be investigated.

46. Step 17 — Record Validation

Create/update the appropriate:

VALIDATION_RECORD

The evidence must correspond to actual tests and observations.

47. Step 18 — Update Project State

Only after meaningful progress should the AI update:

PROJECT_STATE
CHECKPOINT_LOG
VALIDATION_RECORD
HANDOFF_RECORD

The state must describe reality.

48. Step 19 — GitHub Workflow

Follow the approved GitHub Engineering Workflow:

Issue
 ↓
Branch
 ↓
Implementation
 ↓
Testing
 ↓
Validation
 ↓
Commit
 ↓
PR
 ↓
Review
 ↓
Acceptance
 ↓
Merge

Do not bypass the workflow merely because the change is technically small if the checkpoint requires traceability.

49. Step 20 — Prepare Handoff

At the end of an AI session, the agent must leave enough information for another agent to continue.

The handoff must state:

Completed
Current work
Failed attempts
Blockers
Open decisions
Validation
Repository state
Known defects
Next permitted action

A fresh agent should not need to ask:

"What were you doing?"

50. Resume Decision Tree

A fresh AI should effectively execute:

START
  │
  ▼
Verify repository
  │
  ▼
Read PROJECT_STATE
  │
  ▼
Read HANDOFF
  │
  ▼
Current checkpoint exists?
  │
 ┌┴─────────────┐
NO              YES
 │               │
 ▼               ▼
Determine       Read checkpoint
next allowed      │
action            ▼
              Prerequisites met?
                  │
             ┌────┴────┐
            NO         YES
             │          │
             ▼          ▼
          BLOCK/       Inspect
          ESCALATE     implementation
                          │
                          ▼
                     Architecture clear?
                       │       │
                      NO      YES
                       │       │
                       ▼       ▼
                    ESCALATE  Establish
                              baseline
                                │
                                ▼
                             Implement
                                │
                                ▼
                            Validate
                                │
                         ┌──────┴──────┐
                       PASS           FAIL
                         │              │
                         ▼              ▼
                      Record         Diagnose
                      evidence          │
                         │              ▼
                         │          Learn/revise
                         │
                         ▼
                      Update
                       state
                         │
                         ▼
                     GitHub flow
                         │
                         ▼
                       HANDOFF
51. State Consistency Rules

The following invariants must always hold.

Invariant 1

A checkpoint cannot be COMPLETE without acceptance evidence.

Invariant 2

A requirement cannot be considered implemented merely because code exists.

Invariant 3

A proposed decision cannot be treated as approved.

Invariant 4

A failed validation cannot be recorded as successful.

Invariant 5

A blocked checkpoint cannot be represented as active implementation.

Invariant 6

A merged PR does not automatically mean checkpoint completion.

Invariant 7

Repository state must be verified rather than assumed.

Invariant 8

Known defects must remain visible until resolved or explicitly accepted.

Invariant 9

The next permitted action must not violate prerequisites.

Invariant 10

No fresh AI session may modify code before completing the resume sequence.

52. Handling State Contradictions

If a fresh AI discovers:

PROJECT_STATE → CP-04 active

GitHub → CP-03 branch still active

Checkpoint log → CP-03 incomplete

the AI must not guess.

It must report:

STATE INCONSISTENCY DETECTED

PROJECT_STATE:
...

CHECKPOINT_LOG:
...

GITHUB:
...

Required resolution:
...

Then pause if the discrepancy could affect implementation.

53. State Update Rule

State files must be updated after meaningful state transitions, not after every keystroke.

Meaningful transitions include:

checkpoint started
checkpoint implemented
validation passed
validation failed
blocker discovered
decision approved
PR opened
PR changes requested
PR merged
checkpoint accepted
checkpoint completed

This prevents state-document noise.

54. Handoff Quality Test

A handoff is considered adequate only if a fresh AI can answer these questions without consulting the previous conversation:

1. What project am I working on?
2. What phase are we in?
3. What checkpoint is active?
4. What is its objective?
5. What has already been completed?
6. What is currently being changed?
7. What failed previously?
8. What is blocked?
9. What decisions are open?
10. What approvals are required?
11. What was last validated?
12. What is the repository state?
13. What defects are known?
14. What am I allowed to do next?
15. What am I explicitly NOT allowed to do?

If these cannot be answered, the handoff is incomplete.

55. The Fresh-Agent Rule

The most important rule of this protocol is:

A fresh AI session must never begin by asking "What should I build?"

It must first determine:

What has already been decided?
What already exists?
What is currently authorized?
What remains incomplete?
What has been proven?
What is the next bounded action?

Only then may it modify the project.

56. Canonical Continuity Model

The completed continuity system is:

                 PERMANENT KNOWLEDGE
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
   Requirements     Architecture     Decisions
        │               │                │
        └───────────────┼────────────────┘
                        ▼
                  PHASE / CHECKPOINT
                        │
                        ▼
                     GITHUB
                        │
                        ▼
                 IMPLEMENTATION
                        │
                        ▼
                   VALIDATION
                        │
                        ▼
                     STATE
                        │
            ┌───────────┼───────────┐
            ▼           ▼           ▼
        Checkpoint   Validation   Defects
           Log         Record       Log
            │           │
            └─────┬─────┘
                  ▼
              HANDOFF
                  │
                  ▼
             FRESH AI
                  │
                  ▼
           RESUME SEQUENCE
                  │
                  ▼
            NEXT ACTION
57. Final Handoff Contract

For DevOps COT, continuity is an engineering requirement.

The project must never depend on:

one AI session,
one chat thread,
undocumented memory,
undocumented decisions,
undocumented failures,
undocumented repository state.

The authoritative operational chain is:

PROJECT CONSTITUTION
        ↓
REQUIREMENTS
        ↓
ARCHITECTURE
        ↓
TECHNOLOGY SPECIFICATION
        ↓
MASTER PHASE PLAN
        ↓
CHECKPOINT
        ↓
GITHUB ISSUE
        ↓
IMPLEMENTATION
        ↓
VALIDATION
        ↓
CHECKPOINT LOG
        ↓
PROJECT STATE
        ↓
HANDOFF RECORD
        ↓
FRESH AI SESSION

And the mandatory fresh-session rule is:

Inspect → Read State → Read Handoff → Verify Checkpoint → Verify Requirements → Verify Architecture → Inspect Existing Code → Establish Baseline → Confirm Scope → Implement Bounded Change → Validate → Record Evidence → Update State → Follow GitHub Workflow → Handoff.

That sequence is the project's canonical mechanism for allowing autonomous AI-assisted development to continue safely without hidden conversational memory.