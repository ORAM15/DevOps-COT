FINAL QUALITY AND EVALUATION SYSTEM
DevOps COT — Clashing DevTools

Document Status: FINAL / AUTHORITATIVE
Purpose: Define how DevOps COT proves that engineering work is correct, functional, integrated, secure, usable, and genuinely complete.

This document works together with the approved:

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
Checkpoint & Engineering-Work Unit System
        ↓
AI Engineering Contract
        ↓
QUALITY & EVALUATION SYSTEM

The fundamental rule is:

A successful build, green commit, or merged PR is evidence that code was accepted by a tool—not proof that the project requirement was satisfied.

Meaningful progress is demonstrated only when the relevant acceptance criteria are validated with evidence.

1. Quality Philosophy

DevOps COT is evaluated at the level of observable system outcomes, not code volume.

The evaluation model therefore follows:

Requirement
     ↓
Expected Behaviour
     ↓
Validation Method
     ↓
Evidence
     ↓
Acceptance Criteria
     ↓
Evaluation Decision

A checkpoint is considered successful only when the evidence demonstrates that the intended behaviour exists.

2. What Counts as Evidence

Evidence may include:

automated test results,
test logs,
screenshots,
screen recordings,
browser demonstrations,
API responses,
database-state verification,
authentication demonstrations,
deployment verification,
performance measurements,
security-test results,
error-handling demonstrations,
observability output,
regression-test results.

Evidence must be reproducible where reasonably possible.

The AI must never manufacture evidence.

3. Evidence Hierarchy

Evidence should be interpreted approximately in this order:

Reproducible end-to-end behaviour
          ↓
Integration test result
          ↓
Automated unit test result
          ↓
Reproducible manual test
          ↓
Runtime/API/database evidence
          ↓
Code/configuration inspection
          ↓
Unverified assumption

The appropriate level depends on the requirement.

For example, source code can demonstrate that an authentication function exists, but it cannot by itself prove that a real user can successfully authenticate and receive the correct user-specific game state.

4. Validation Levels

The project uses seven principal validation levels.

V1 — Static Validation

Used for:

TypeScript correctness,
compilation,
linting,
configuration,
structural consistency.
V2 — Unit Validation

Used for isolated deterministic logic.

V3 — Integration Validation

Used when multiple components interact.

V4 — End-to-End Validation

Used for complete user workflows.

V5 — System Validation

Used for deployment, persistence, authentication, external services and complete application behaviour.

V6 — Quality Validation

Used for:

security,
performance,
UX,
reliability,
observability.
V7 — Acceptance Validation

Determines whether the actual checkpoint/phase acceptance criteria have been satisfied.

5. Unit Testing

Unit tests validate isolated application behaviour.

Examples relevant to DevOps COT include:

resource calculations,
building upgrade calculations,
resource-cost validation,
building-level progression,
mission-condition evaluation,
Builder AI decision logic,
game-state transformations,
utility functions,
deterministic game rules.

A unit test should ideally verify one well-defined behaviour.

Required evidence

Where unit tests are applicable:

executed test command,
test output,
pass/fail result,
relevant test coverage of changed logic.
Pass criteria

The relevant deterministic behaviours pass their expected assertions.

Failure criteria

Any required unit behaviour fails.

A test that merely executes without asserting meaningful behaviour does not constitute successful validation.

6. Integration Testing

Integration testing verifies communication between project components.

Potential integration boundaries include:

React UI
   ↓
Application logic
   ↓
Firebase
   ↓
Firestore

and, where applicable:

Frontend
   ↓
Express server
   ↓
Pipeline-status simulation

Integration testing should verify that independently functioning components work together correctly.

Examples

Authentication:

Authentication request
        ↓
Firebase authentication
        ↓
Authenticated identity
        ↓
Application state
        ↓
User-specific game environment

Persistence:

Game action
     ↓
State update
     ↓
Firestore
     ↓
Reload
     ↓
Correct state restored
Pass criteria

The integrated workflow produces the expected state at each important boundary.

7. End-to-End Testing

End-to-end testing validates complete user journeys.

The highest-value E2E workflows are those that represent actual project objectives.

A core flow should include, where supported:

Open application
      ↓
Authenticate
      ↓
Enter game
      ↓
Receive individual game environment
      ↓
Interact with base
      ↓
Modify game state
      ↓
Persist state
      ↓
Reload/re-enter
      ↓
Verify state

Other applicable flows include:

Building
   ↓
Placement
   ↓
Construction
   ↓
Resource generation
   ↓
Upgrade
   ↓
Updated state

and:

Clan
 ↓
Fork interaction
 ↓
Game result
 ↓
Reward/state update
Pass criteria

The complete user journey works without an unexplained failure.

8. Regression Testing

Regression testing protects already-working functionality.

Whenever a checkpoint changes an existing subsystem, previously validated behaviour relevant to that subsystem must be revalidated.

Examples:

A change to authentication requires regression testing of:

login,
identity,
initialization,
user-specific state.

A change to building logic requires regression testing of:

placement,
resources,
construction,
upgrades.

A change to Firestore persistence requires regression testing of:

loading,
saving,
user isolation,
state restoration.
Regression principle

New functionality must not invalidate previously accepted functionality.

9. Security Testing

Security testing verifies that the application does not violate its established security requirements.

Relevant areas include:

Authentication

Verify:

unauthenticated users cannot access protected functionality where protection is required,
authenticated identity is correctly established,
the correct user identity is associated with the session.
Authorization / data isolation

Verify that one authenticated user cannot improperly access another user's private game state.

Secrets

Verify:

secrets are not committed,
environment configuration is respected,
sensitive credentials are not exposed through the client.
Firestore

Where applicable, validate that Firestore security rules enforce the intended access boundaries.

Application security

Check for:

unintended data exposure,
insecure configuration,
accidental credential leakage,
unauthorized state manipulation.
Pass criteria

No required security boundary can be bypassed during the defined tests.

Failure criteria

Any confirmed unauthorized access or secret exposure is a quality failure and potentially a release blocker.

10. Performance Testing

Performance testing must be proportional to the project's actual requirements.

The objective is not to manufacture impressive benchmark numbers.

The project should validate relevant user-facing performance.

Examples:

application startup,
initial game rendering,
grid rendering,
building interaction,
resource updates,
authentication transition,
Firestore operations,
large UI-state updates,
future 3D scene loading.
Evidence

Where measured:

test environment,
scenario,
measurement,
result,
acceptable threshold.

If no approved numerical threshold exists, the result must be described qualitatively rather than inventing one.

Example:

"The base remained responsive during the tested interaction scenario."

is valid if actually demonstrated.

Claiming:

"The application supports 10,000 concurrent users"

without testing is invalid.

11. AI Evaluation

AI evaluation applies only where AI functionality is actually part of the relevant implementation.

For the existing Builder AI, evaluation should focus on whether its decision behaviour matches the defined strategies.

Example:

Resource Strategy
       ↓
Should prioritize resource-related upgrade

Level Strategy
       ↓
Should prioritize level-related progression

Balanced Strategy
       ↓
Should consider multiple factors

Testing should use known game states with expected decisions.

AI evaluation evidence

Record:

input game state,
strategy,
AI decision,
expected decision,
actual decision,
result.
Pass criteria

The AI behaves consistently with its defined strategy for the validated scenarios.

Future AI systems

If a tutorial/chat-buddy or LLM-based educational assistant is later implemented, evaluation must additionally consider:

factual correctness,
relevance,
consistency,
appropriate educational explanation,
refusal of unsupported claims,
response quality.

An LLM must not be considered successful merely because it produces text.

12. UX Validation

UX validation evaluates whether users can actually understand and operate the application.

Important workflows include:

authentication,
entering the base,
identifying resources,
selecting buildings,
understanding building information,
placing buildings,
upgrading,
managing builders,
completing missions,
accessing clan functionality,
understanding game feedback.
Validation methods

Use:

guided manual walkthroughs,
representative-user demonstrations,
task completion,
observation of confusion/errors,
screenshots or recordings.
Pass criteria

A representative user can complete the intended task without critical confusion or an unexplained blocker.

UX validation is not equivalent to:

"The interface looks good."

It must evaluate actual usability.

13. Deployment Validation

Deployment validation must establish that the deployed application actually works.

A deployment is not considered validated merely because:

Build = PASS

Validation should cover:

Deployment
    ↓
Open deployed application
    ↓
Application loads
    ↓
Authentication works
    ↓
Game loads
    ↓
User-specific state works
    ↓
Relevant persistent operation works

Where applicable, also validate:

required environment variables,
external service configuration,
API endpoints,
routing,
production build behaviour.
Pass criteria

The deployed application performs the acceptance-relevant workflows successfully.

14. Observability Validation

Observability must prove that meaningful failures can be detected and diagnosed to the extent required by the architecture.

Relevant evidence may include:

application logs,
server logs,
API responses,
Firebase errors,
browser console errors where applicable,
pipeline-status information,
system-log presentation.

Validation should deliberately trigger selected failure conditions and determine whether the resulting behaviour is observable.

Pass criteria

The relevant failure produces sufficient observable information to determine what happened.

15. Failure Testing

Failure testing deliberately verifies system behaviour when something goes wrong.

Potential scenarios include:

Authentication failure

Expected:

Authentication failure
       ↓
User receives appropriate failure state
       ↓
Application remains stable
Persistence failure

Expected:

Firestore unavailable/error
       ↓
Operation fails safely
       ↓
User receives meaningful feedback
       ↓
Application does not silently claim success
API failure

Expected:

API unavailable/error
       ↓
Error handled
       ↓
No fabricated successful result
Invalid game operation

Examples:

insufficient resources,
invalid upgrade,
invalid building action.

Expected:

Invalid operation
      ↓
Rejected
      ↓
State remains valid
Pass criteria

The application fails safely and preserves important invariants.

16. Major Project Invariants

Testing must protect the fundamental consistency rules of the application.

Examples of important invariants include:

Resource integrity

A player should not receive an invalid negative or otherwise impossible resource state through ordinary gameplay.

Upgrade integrity

A building should not advance to an invalid level.

Ownership integrity

A user's private game state must remain associated with the correct authenticated identity.

Persistence integrity

A successfully persisted game state should be recoverable according to the defined persistence model.

Authentication integrity

Protected functionality must not incorrectly treat an unauthenticated user as an authenticated user.

Simulation integrity

The infiltration/attack mechanic must remain a simulated game operation and must not perform actual real-world attacks.

These invariants should be explicitly validated whenever relevant.

17. Phase Quality Gates

Every master phase must end with an evaluation gate.

The phase cannot progress merely because implementation work is finished.

The gate asks:

Has the phase objective been demonstrated?

18. GATE PASS

A phase receives:

GATE PASS

when:

required work is implemented,
acceptance criteria are demonstrated,
relevant tests pass,
no unresolved blocking defect remains,
evidence has been captured,
scope remains compliant,
required human approval has been obtained.

Then:

Phase N
   ↓
GATE PASS
   ↓
Phase N+1 permitted
19. GATE FAIL

A phase receives:

GATE FAIL

when:

an acceptance criterion is demonstrably false,
required functionality does not work,
regression is introduced,
required testing fails,
security requirements fail,
required evidence contradicts the expected outcome.

A failed gate means remediation is required.

GATE FAIL
    ↓
Fix
    ↓
Revalidate
    ↓
Gate again

The project does not proceed as though the phase passed.

20. BLOCKED

A phase receives:

BLOCKED

when the work cannot be meaningfully validated because of an external or unresolved dependency.

Examples:

required service unavailable,
required credentials unavailable,
necessary owner decision missing,
architecture ambiguity,
unresolved repository inconsistency,
unavailable required asset/tool.

A blocked phase is not equivalent to a failed phase.

BLOCKED
   ↓
Resolve blocker
   ↓
Resume validation
21. REQUIRES HUMAN REVIEW

A phase receives:

REQUIRES HUMAN REVIEW

when the technical implementation may be functioning but a human decision is required.

Examples:

major UX decision,
architecture change,
scope decision,
educational correctness,
visual direction,
major gameplay decision,
security-sensitive decision.

The AI must not substitute its own authority for the owner.

22. Phase Evaluation Model

Each master phase should be evaluated using:

Evaluation Area	Required Question
Functional	Does the required functionality work?
Integration	Do affected components work together?
Regression	Did existing accepted behaviour remain intact?
Security	Are required security boundaries preserved?
Performance	Is required responsiveness acceptable?
UX	Can intended users perform the required tasks?
Reliability	Does the system behave correctly under expected failures?
Observability	Can relevant behaviour/failures be diagnosed?
Deployment	Does the deployed system behave correctly where applicable?
Evidence	Can the result actually be demonstrated?

Not every category needs identical depth in every phase. Validation must correspond to the phase's actual requirements.

23. Phase Gate Structure

Each phase must produce:

PHASE VALIDATION REPORT

Phase:
Objective:

Requirements validated:
...

Tests performed:
...

Manual validation:
...

Integration validation:
...

Regression validation:
...

Security validation:
...

Performance validation:
...

UX validation:
...

Deployment validation:
...

Failure validation:
...

Evidence:
...

Known failures:
...

Known limitations:
...

Acceptance criteria:
...

Result:
GATE PASS / GATE FAIL / BLOCKED / REQUIRES HUMAN REVIEW
24. Quality Gates Across the Project

The project follows this general progression:

Current System
      │
      ▼
Baseline Validation
      │
      ▼
PHASE GATE
      │
      ▼
Game/System Refinement
      │
      ▼
PHASE GATE
      │
      ▼
DevOps Educational Integration
      │
      ▼
PHASE GATE
      │
      ▼
Guided Learning / Advanced Interaction
      │
      ▼
PHASE GATE
      │
      ▼
3D Technology-City Development
      │
      ▼
PHASE GATE
      │
      ▼
Full Integration
      │
      ▼
Final Evaluation
      │
      ▼
FINAL ACCEPTANCE

The exact phase sequence remains governed by the authoritative Master Phase Plan.

25. Checkpoint-Level Evaluation

Every checkpoint must have its own validation.

The checkpoint record must answer:

What was supposed to happen?
        ↓
Did it happen?
        ↓
How was it tested?
        ↓
What evidence proves it?
        ↓
Does it satisfy acceptance criteria?

A checkpoint is therefore not complete because:

code exists,
files changed,
a commit exists,
a PR exists,
CI is green,
the AI says it works.
26. GitHub Is Not the Quality System

GitHub provides engineering traceability.

It does not automatically prove:

Correctness
Usability
Security
Educational validity
Gameplay correctness
Deployment correctness

Therefore:

GitHub activity
      +
Validation evidence
      +
Acceptance criteria
      =
Meaningful engineering progress

A green CI pipeline is useful evidence, but it is only one part of the quality system.

27. Progress Measurement

Project progress should be measured through accepted outcomes.

A useful progress model is:

Requirement defined
        ↓
Implementation complete
        ↓
Validation complete
        ↓
Evidence captured
        ↓
Checkpoint accepted

Only the final state represents completed engineering progress.

For example:

State	Progress Status
Idea only	0% accepted
Code partially written	In progress
Code complete, untested	Unverified
Tests passed	Validated technically
Acceptance criteria demonstrated	Accepted
Phase gate passed	Phase complete

This prevents inflated progress reporting.

28. Defect Severity

Failures should be classified according to their impact.

BLOCKER

Prevents the core system or required checkpoint from functioning.

Examples:

application cannot start,
authentication fundamentally fails,
required data is lost,
critical security boundary is broken.
CRITICAL

Major required functionality is unusable or unsafe.

MAJOR

Important functionality is incorrect but the broader system remains usable.

MINOR

Limited functional or UX defect that does not prevent the required workflow.

COSMETIC

Visual or non-functional issue without meaningful effect on required behaviour.

Severity must be based on actual impact rather than how difficult the bug is to fix.

29. Regression Baseline

Once a checkpoint or phase passes its gate, its validated behaviour becomes part of the regression baseline.

Future changes must not silently invalidate it.

Conceptually:

Accepted Checkpoint
       ↓
Validated Behaviour
       ↓
Regression Baseline
       ↓
Future Changes Must Preserve It

If a future requirement intentionally changes the behaviour, that change must be explicitly approved and the baseline updated.

30. Final System Evaluation

Before the project can be declared complete, the final evaluation must demonstrate the approved final scope.

The final evaluation should include:

Functional validation

All mandatory final requirements.

Integration validation

Major system boundaries.

End-to-end validation

Critical user journeys.

Regression validation

Previously accepted functionality.

Security validation

Authentication, authorization, data protection and secrets.

Performance validation

Relevant performance expectations.

UX validation

Core user workflows.

Failure validation

Important failure scenarios.

Deployment validation

Final deployed/runnable system where deployment is part of the approved scope.

Observability validation

Required logs/error visibility.

Educational validation

Whether the implemented DevOps learning interactions actually correspond to their intended concepts.

31. Final Acceptance Gate

The project reaches:

FINAL GATE PASS

only when:

All mandatory requirements
        +
Required acceptance criteria
        +
Required testing
        +
Security validation
        +
Regression validation
        +
Relevant UX validation
        +
Deployment validation
        +
Evidence
        +
Human approval where required
        ↓
FINAL ACCEPTANCE

A project does not receive final acceptance merely because:

main branch is green

or:

application builds successfully
32. Final Quality Decision Matrix
Condition	Decision
Acceptance criteria demonstrated, evidence complete	GATE PASS
Required behaviour demonstrably incorrect	GATE FAIL
Validation impossible due to unresolved dependency	BLOCKED
Owner decision required	REQUIRES HUMAN REVIEW
Code exists but behaviour unverified	NOT COMPLETE
Build passes but acceptance criteria unverified	NOT COMPLETE
Tests pass but required UX behaviour fails	GATE FAIL
Implementation works but security requirement fails	GATE FAIL
Feature works but is outside approved scope	STOP / REVIEW
Requirement itself is unclear	REQUIRES HUMAN REVIEW
33. The Fundamental Quality Rule

The entire evaluation system can be reduced to one rule:

No claim of progress is accepted without evidence proportional to the claim.

Therefore:

"I wrote it."
        ≠
"It works."

"It builds."
        ≠
"The requirement is satisfied."

"The tests passed."
        ≠
"The user experience is correct."

"The PR merged."
        ≠
"The phase is complete."

"The deployment succeeded."
        ≠
"The deployed product works."

"The AI says it is complete."
        ≠
"Evidence demonstrates completion."

The authoritative state is always determined by demonstrated acceptance criteria.

34. Final Quality Operating Model
                    PROJECT REQUIREMENT
                           │
                           ▼
                   ACCEPTANCE CRITERIA
                           │
                           ▼
                  VALIDATION STRATEGY
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
      UNIT            INTEGRATION           E2E
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ▼
                  SECURITY / FAILURE
                           │
                           ▼
                  PERFORMANCE / UX
                           │
                           ▼
                DEPLOYMENT / OBSERVABILITY
                           │
                           ▼
                     EVIDENCE
                           │
                           ▼
                  ACCEPTANCE DECISION
                           │
          ┌────────────────┼─────────────────┐
          ▼                ▼                 ▼
      GATE PASS         GATE FAIL        BLOCKED
          │                │                 │
          ▼                ▼                 ▼
   NEXT PHASE          REMEDIATION      RESOLVE BLOCKER
          │                │                 │
          └────────────────┴─────────────────┘
                           │
                           ▼
                  FINAL ACCEPTANCE
Final governing principle

DevOps COT will measure progress by validated engineering outcomes, not by code written, commits created, PRs merged, or builds passing. Every meaningful claim must be backed by appropriate evidence, every checkpoint must satisfy its acceptance criteria, and every phase must earn its gate before the project moves forward.