FINAL CHECKPOINT AND ENGINEERING-WORK UNIT SYSTEM

DevOps COT — Clashing DevTools



Status: Authoritative Engineering Execution System

Project Owner: Oram (2303031)

Baseline: Project Constitution → Requirements \& Constraints → Final Architecture → Technology \& Tooling Specification → Final Master Phase Plan



1\. Purpose of the Checkpoint System



The master phases define what progression the project follows.



The checkpoint system defines how work is actually executed and accepted.



The fundamental rule is:



A checkpoint is an engineering outcome, not a coding activity.



Therefore:



Code exists

&#x20;     ≠

Checkpoint complete



Commit exists

&#x20;     ≠

Checkpoint complete



PR exists

&#x20;     ≠

Checkpoint complete



Tests were attempted

&#x20;     ≠

Checkpoint complete



Instead:



Defined objective

&#x20;      ↓

Bounded implementation

&#x20;      ↓

Validation

&#x20;      ↓

Acceptance criteria demonstrated

&#x20;      ↓

Evidence captured

&#x20;      ↓

Human approval where required

&#x20;      ↓

Checkpoint CLOSED



This system is specifically designed so an autonomous AI coding agent can work on the project without silently expanding scope or declaring incomplete work finished.



2\. Checkpoint Hierarchy



The project uses four levels:



PROJECT

&#x20;  │

&#x20;  └── PHASE

&#x20;         │

&#x20;         └── CHECKPOINT

&#x20;                │

&#x20;                └── ENGINEERING WORK UNIT

&#x20;                       │

&#x20;                       ├── Issue

&#x20;                       ├── Branch

&#x20;                       ├── Implementation

&#x20;                       ├── Tests

&#x20;                       ├── Evidence

&#x20;                       ├── PR

&#x20;                       ├── Review

&#x20;                       └── Closure



A checkpoint is the smallest independently acceptable project milestone.



An engineering work unit is the bounded implementation activity performed to satisfy that checkpoint.



3\. Global Checkpoint Rules



Every checkpoint must obey these rules.



Rule 1 — Scope is frozen



The agent may implement only work explicitly included under Allowed Work.



If implementation reveals a new requirement:



New idea

&#x20;  ↓

STOP

&#x20;  ↓

Document

&#x20;  ↓

Human decision

&#x20;  ↓

Separate checkpoint/change request if approved



The agent must not silently add it.



Rule 2 — Existing functionality is protected



Unless the checkpoint explicitly concerns modification of an existing feature, the agent must preserve existing behaviour.



Rule 3 — Evidence is mandatory



Every checkpoint must produce evidence demonstrating its acceptance criteria.



Examples:



test output

screenshots

browser demonstration

API response

database verification

build output

deployment verification

architecture evidence

Rule 4 — GitHub activity represents the work



Every implementation checkpoint should normally have:



Issue

&#x20; ↓

Branch

&#x20; ↓

Commit(s)

&#x20; ↓

PR

&#x20; ↓

Review

&#x20; ↓

Validation

&#x20; ↓

Merge

&#x20; ↓

Issue closure

Rule 5 — No "looks correct" acceptance



Visual or functional claims must be demonstrated.



4\. Master Checkpoint Map



The six master phases are divided into the following bounded checkpoints.



Phase	Checkpoints

P0	CP-0.1, CP-0.2, CP-0.3

P1	CP-1.1, CP-1.2, CP-1.3

P2	CP-2.1, CP-2.2, CP-2.3, CP-2.4

P3	CP-3.1, CP-3.2, CP-3.3

P4	CP-4.1, CP-4.2, CP-4.3, CP-4.4

P5	CP-5.1, CP-5.2, CP-5.3



Total: 20 checkpoints.



This is deliberately bounded. A checkpoint should be large enough to produce meaningful engineering progress but small enough that an agent can execute it without becoming responsible for an entire phase.



PHASE 0 — BASELINE

CP-0.1 — Repository Baseline Verification

Phase



P0 — Baseline Freeze \& Requirement Validation



Objective



Establish the exact current repository and confirm that it can be built and inspected.



Prerequisites



None.



Allowed Work

inspect repository

inspect package configuration

inspect source structure

inspect Firebase configuration

inspect environment configuration

inspect DevOps configuration

install dependencies if required

run existing build/type-check commands

document existing errors



No feature modification.



Expected Artifacts

repository inventory

dependency inventory

baseline build result

baseline type-check result

known-issues list

Validation Method



Run the project's documented build and validation commands and inspect the repository.



Acceptance Criteria

repository structure is documented

dependencies are identified

build result is known

type-check result is known

existing errors are recorded rather than silently fixed

Definition of Done



The project has a reproducible technical baseline.



Failure Conditions

repository cannot be understood

baseline cannot be reproduced

undocumented modifications are required merely to establish the baseline

Dependencies



None.



Human Approval Requirement



Not required for routine inspection.



Required if baseline requires modifying existing behaviour.



Expected GitHub Activity



Prefer an Issue for baseline tracking.



No feature branch is required if no code changes occur.



Expected Branch/PR Behaviour



No implementation PR unless baseline stabilization becomes necessary.



Completion Evidence



Attach:



command output

build result

repository inventory

known-issues report

Next Checkpoint



CP-0.2



CP-0.2 — Existing Functionality Verification

Objective



Demonstrate the functionality currently claimed by the project.



Prerequisites



CP-0.1.



Allowed Work



Verify existing:



Firebase authentication

user initialization

individual game state

isometric environment

buildings

resources

upgrades

Builder system

missions

clan

fork interaction

simulated infiltration

orchestration/status interface



Only fixes necessary to enable verification may be proposed; they require separate approval if they modify behaviour.



Expected Artifacts



Current-state feature matrix.



Validation Method



Browser/manual testing plus available automated tests.



Acceptance Criteria



Every feature is classified:



WORKING

PARTIAL

FAILED

UNKNOWN



No feature is marked implemented solely because corresponding source code exists.



Definition of Done



The actual application state is known.



Failure Conditions



Feature claims cannot be reproduced or evidence is insufficient.



Dependencies



CP-0.1.



Human Approval Requirement



Required for discrepancies between historical claims and actual behaviour.



Expected GitHub Activity



Issue documenting baseline functionality.



Completion Evidence



Screenshots, test results, reproduction notes.



Next Checkpoint



CP-0.3



CP-0.3 — Architecture Baseline Reconciliation

Objective



Compare the current implementation against the approved architecture.



Prerequisites



CP-0.2.



Allowed Work

architecture inspection

dependency mapping

interface identification

gap identification

technical debt documentation



No architectural redesign.



Acceptance Criteria



Every major architectural component is classified:



MATCH

PARTIAL

MISSING

CONFLICT

NOT REQUIRED

Definition of Done



A verified architecture-gap report exists.



Human Approval Requirement



Required for architectural conflicts.



Expected GitHub Activity



Issue + documentation commit if appropriate.



Completion Evidence



Architecture reconciliation document.



Next Checkpoint



CP-1.1



PHASE 1 — GAME + EDUCATIONAL MODEL

CP-1.1 — Game Progression Specification

Objective



Freeze the authoritative gameplay progression.



Prerequisites



P0 complete.



Allowed Work



Define:



Town Hall progression

building unlocks

resource relationships

upgrade rules

progression dependencies

Acceptance Criteria



Every progression rule is explicit and internally consistent.



Definition of Done



No core progression rule requires the implementation agent to invent behaviour.



Failure Conditions



Contradictory or undefined progression rules.



Human Approval



Required.



GitHub



Issue → documentation branch → PR → review → merge.



Evidence



Approved progression specification.



Next



CP-1.2



CP-1.2 — DevOps Educational Mapping

Objective



Define exactly how gameplay represents DevOps concepts.



Allowed Work



Map approved concepts to:



buildings

resources

missions

progression

interactions

educational explanations

Acceptance Criteria



Every educational mechanic has an explicit DevOps relationship.



Definition of Done



The educational model can be explained without relying on informal interpretation.



Human Approval



Required.



GitHub



Documentation PR.



Evidence



DevOps ↔ Game mapping matrix.



Next



CP-1.3



CP-1.3 — Learning Interaction Specification

Objective



Define the tutorial/chat-buddy and contextual learning behaviour.



Allowed Work



Specify:



when learning assistance appears

what context it receives

what it explains

progression relationship

boundaries of AI behaviour



Do not select an LLM unless required.



Acceptance Criteria



Learning interaction has explicit triggers, inputs, outputs and boundaries.



Human Approval



Required.



Evidence



Learning interaction specification.



Next



CP-2.1



PHASE 2 — CORE GAME + LEARNING

CP-2.1 — Existing Game-System Stabilization

Objective



Make the existing game foundation reliable before major expansion.



Prerequisites



P1 complete.



Allowed Work



Fix verified defects in:



authentication

persistence

resources

buildings

construction

upgrades

builders

missions

clan/fork systems

existing game interactions

Acceptance Criteria



Existing approved functionality passes its baseline validation.



Definition of Done



No known critical regression exists in the stabilized systems.



GitHub

Issue

&#x20; ↓

feature/fix branch

&#x20; ↓

commits

&#x20; ↓

PR

&#x20; ↓

review

&#x20; ↓

tests

&#x20; ↓

merge

Completion Evidence



Test results + before/after evidence where applicable.



Next



CP-2.2



CP-2.2 — Progression and Technology Unlocks

Objective



Implement the approved progression mechanism connecting gameplay to DevOps technologies.



Allowed Work



Implement only the P1-approved progression.



Acceptance Criteria



A user can demonstrate the defined progression and corresponding unlock behaviour.



Definition of Done



Progression works consistently and persists correctly.



Failure Conditions



Unlocks occur incorrectly, bypass progression, or do not persist.



Human Approval



Required for progression-rule changes.



Evidence



Screen recording/screenshots + state verification + tests.



Next



CP-2.3



CP-2.3 — DevOps Learning Gameplay

Objective



Implement the educational mechanics defined in CP-1.2.



Allowed Work

educational missions

contextual explanations

technology interactions

approved learning mechanics

Acceptance Criteria



A representative player workflow demonstrates:



Progress

&#x20;↓

Unlock

&#x20;↓

Learn

&#x20;↓

Interact

Definition of Done



The educational loop is demonstrably functional.



Human Approval



Required for educational content acceptance.



Evidence



Recorded workflow + test evidence.



Next



CP-2.4



CP-2.4 — Learning Assistant Integration

Objective



Implement the approved tutorial/chat-buddy functionality, if the requirements establish that AI is necessary.



Prerequisites



CP-2.3.



Allowed Work



Only the approved AI interaction.



Restrictions



The agent may not independently introduce:



autonomous agents

RAG

vector databases

embeddings

additional models



unless explicitly required and approved.



Acceptance Criteria



The assistant provides the approved learning interaction reliably and within defined boundaries.



Definition of Done



AI interaction is validated against representative learning scenarios.



Human Approval



Required.



Evidence



Prompt/input-output examples, application screenshots and validation results.



Next



P3



PHASE 3 — 3D WORLD

CP-3.1 — 3D Visual System Definition

Objective



Freeze the visual language and asset requirements before mass asset creation.



Prerequisites



CP-1.1 and CP-1.2.



Allowed Work



Define:



building visual language

unit visual language

environment

scale

camera requirements

lighting direction

asset naming

export requirements

Acceptance Criteria



Required asset categories are defined.



Human Approval



Required.



Evidence



3D visual specification.



Next



CP-3.2



CP-3.2 — Original 3D Asset Production

Objective



Create the approved original 3D assets.



Prerequisites



CP-3.1.



Allowed Work



Create:



required buildings

required units

required environment assets

approved scenery



using the approved asset workflow, including Fable 5 where applicable.



Acceptance Criteria



Each required asset:



is original,

satisfies its visual specification,

has correct scale,

is technically exportable,

contains no copied commercial-game artwork/model.

Definition of Done



The required asset set exists in integration-ready form.



Human Approval



Visual approval required.



Evidence



Asset inventory + renders/previews + source files.



Next



CP-3.3



CP-3.3 — 3D Runtime Integration

Objective



Integrate approved 3D assets into the application/runtime.



Prerequisites



CP-2.4 and CP-3.2.



Allowed Work

asset loading

rendering

camera integration

interaction integration

environment integration

Acceptance Criteria



Required assets render correctly and retain the gameplay semantics defined by the game system.



Definition of Done



The 3D world is a functional part of the application rather than a collection of standalone models.



Human Approval



Required for major visual changes.



Evidence



Runtime screenshots/video + performance measurements where required.



Next



P4



PHASE 4 — INTEGRATION + QUALITY

CP-4.1 — End-to-End System Integration

Objective



Integrate authentication, persistence, gameplay, learning and 3D systems.



Prerequisites



P2 and P3 complete.



Acceptance Criteria



Critical workflow:



Open

&#x20;↓

Authenticate

&#x20;↓

Load/Create Player State

&#x20;↓

Enter World

&#x20;↓

Interact

&#x20;↓

Progress

&#x20;↓

Learn

&#x20;↓

Persist

&#x20;↓

Reload

&#x20;↓

State Remains Correct



works successfully.



Definition of Done



Critical end-to-end workflow passes.



GitHub



Implementation PR with integration tests.



Evidence



End-to-end test report.



Next



CP-4.2



CP-4.2 — Security and Reliability Validation

Objective



Validate the system's approved security and reliability boundaries.



Allowed Work



Validate:



authentication

authorization

Firestore rules

user-state isolation

environment secrets

API boundaries

failure handling

Acceptance Criteria



Unauthenticated or unauthorized access cannot bypass the approved boundaries.



Definition of Done



No unresolved critical security defect remains.



Human Approval



Required for security exceptions.



Evidence



Security test results.



Next



CP-4.3



CP-4.3 — Testing and Performance Validation

Objective



Establish evidence that the integrated system behaves reliably.



Allowed Work

unit testing

integration testing

end-to-end testing

regression testing

relevant performance testing

Acceptance Criteria



All mandatory test scenarios pass or have explicitly documented defects/deferments.



Definition of Done



Test evidence exists for mandatory requirements.



Important Rule



Performance optimization must be evidence-driven.



Do not introduce optimization infrastructure without a demonstrated requirement.



Evidence



Test report + performance results.



Next



CP-4.4



CP-4.4 — Deployment Pipeline Validation

Objective



Validate the actual deployment path supported by the approved architecture.



Allowed Work

build configuration

deployment configuration

Jenkins validation if required

Docker validation if required

Nginx validation where applicable

environment configuration

Acceptance Criteria



The approved deployment procedure can reproduce a runnable deployment.



Definition of Done



Deployment is demonstrated, not merely configured.



Human Approval



Required for production/release classification.



Evidence



Deployment logs + accessible application + configuration record.



Next



P5



PHASE 5 — EVALUATION + FINALIZATION

CP-5.1 — Requirements Acceptance

Objective



Verify every mandatory requirement against implementation evidence.



Prerequisites



P4 complete.



Allowed Work



Create a traceability matrix:



Requirement

&#x20;    ↓

Implementation

&#x20;    ↓

Test

&#x20;    ↓

Evidence

&#x20;    ↓

PASS / FAIL / DEFERRED

Acceptance Criteria



No mandatory requirement is marked PASS without evidence.



Definition of Done



Requirements traceability is complete.



Evidence



Final requirements matrix.



Next



CP-5.2



CP-5.2 — Educational and Usability Evaluation

Objective



Evaluate whether the final system actually provides the intended learning/game experience.



Acceptance Criteria



Representative users can:



enter the system,

understand the basic interaction,

progress through the intended workflow,

encounter the DevOps learning mechanism,

complete representative tasks.



Exact evaluation methodology must follow the approved evaluation requirements.



Human Approval



Required.



Evidence



Evaluation results, observations and documented findings.



Next



CP-5.3



CP-5.3 — Final Release and Documentation

Objective



Produce the final academically demonstrable project.



Allowed Work

final release

final documentation

project report

architecture documentation

testing documentation

deployment instructions

screenshots

presentation/demo material

Acceptance Criteria



The final project is:



runnable/deployed according to approved scope,

validated,

documented,

traceable to requirements,

demonstrable.

Definition of Done



The project owner approves the final release.



Human Approval



Mandatory.



Evidence



Final release commit/tag + final report + validation package.



Next



PROJECT COMPLETE



5\. Standard GitHub Checkpoint Lifecycle



Every implementation checkpoint should follow this lifecycle unless explicitly classified as documentation-only.



┌───────────────┐

│ GitHub Issue  │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Scope defined │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Branch created│

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Work executed │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Validation    │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Evidence      │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Pull Request  │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Review        │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Merge         │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Verify merged │

│ behaviour     │

└───────┬───────┘

&#x20;       ↓

┌───────────────┐

│ Close Issue   │

└───────────────┘

6\. GitHub Naming Convention

Issue

\[CP-2.2] Implement Town Hall Technology Unlocks

Branch

checkpoint/cp-2.2-technology-unlocks



For defect work:



fix/cp-2.1-resource-persistence

Commit



Use explicit checkpoint references:



CP-2.2 implement technology unlock progression



or:



CP-2.2 fix unlock persistence

Pull Request

\[CP-2.2] Technology Unlock Progression

7\. Pull Request Requirements



Every checkpoint PR should contain:



Summary



What was changed.



Scope



What checkpoint requirements were addressed.



Implementation



Technical changes.



Validation



Exact commands/tests/manual workflows used.



Evidence



Screenshots, logs, recordings or test output where applicable.



Known Limitations



Anything intentionally incomplete.



Requirements



Reference:



Requirements: R-x.x, R-x.x

Checkpoint: CP-x.x

Out-of-Scope Changes



Explicitly state:



No unrelated features were introduced.



if true.



8\. Autonomous AI Agent Execution Contract



An AI coding agent working on DevOps COT must follow this protocol.



Before coding



The agent must determine:



Which checkpoint?

&#x20;       ↓

What is its objective?

&#x20;       ↓

What is allowed?

&#x20;       ↓

What is forbidden?

&#x20;       ↓

What must be demonstrated?



If the requested work does not belong to the active checkpoint:



STOP and request clarification/approval.



During coding



The agent may:



inspect code,

modify approved components,

add required tests,

fix checkpoint-related defects,

update documentation directly related to the checkpoint.



The agent may not:



redesign the architecture,

introduce unrelated libraries,

introduce new product features,

alter approved requirements,

silently change game rules,

remove existing functionality to simplify implementation.

After coding



The agent must execute:



Build

&#x20;↓

Type-check

&#x20;↓

Relevant tests

&#x20;↓

Functional validation

&#x20;↓

Evidence collection



Only then may it prepare the PR.



9\. Checkpoint Closure Rules



A checkpoint is OPEN when work has not been validated.



A checkpoint becomes VALIDATED when acceptance evidence exists.



A checkpoint becomes APPROVED when required human approval exists.



A checkpoint becomes CLOSED only after the corresponding GitHub work is merged and the acceptance criteria are confirmed.



OPEN

&#x20;↓

IMPLEMENTED

&#x20;↓

VALIDATED

&#x20;↓

APPROVED

&#x20;↓

MERGED

&#x20;↓

CLOSED



Importantly:



IMPLEMENTED ≠ CLOSED

10\. Checkpoint Status Vocabulary



Use only these states:



Status	Meaning

PLANNED	Defined but not started

READY	Prerequisites satisfied

IN PROGRESS	Active engineering work

BLOCKED	Cannot proceed because dependency/decision is missing

IMPLEMENTED	Code/work exists

VALIDATED	Acceptance criteria demonstrated

AWAITING APPROVAL	Human decision required

MERGED	Accepted changes merged

CLOSED	Full checkpoint completion verified

DEFERRED	Explicitly postponed

CANCELLED	Explicitly removed through change control

11\. Definition of Checkpoint Complete



The authoritative rule is:



A checkpoint is complete only when all acceptance criteria have been demonstrated, required evidence has been recorded, required human approvals have been obtained, and the corresponding GitHub work has been correctly integrated.



Therefore:



Code only



❌ Not complete.



Commit only



❌ Not complete.



PR only



❌ Not complete.



Tests attempted



❌ Not complete.



Tests passed but acceptance criteria not demonstrated



❌ Not complete.



Acceptance demonstrated + evidence + approval + integration



✅ Complete.



12\. Standard CHECKPOINT TEMPLATE



This template should be copied for every future checkpoint.



\# CHECKPOINT \[CP-X.X] — \[CHECKPOINT NAME]



\## Phase

P\[X] — \[Phase Name]



\## Status

PLANNED



\## Objective



\[One precise statement describing the engineering outcome.]



\## Prerequisites



\- \[Prerequisite]

\- \[Prerequisite]



\## Requirements Addressed



\- \[Requirement ID]

\- \[Requirement ID]



\## Allowed Work



\- \[Allowed activity]

\- \[Allowed activity]

\- \[Allowed activity]



\## Out of Scope



\- \[Explicitly prohibited activity]

\- \[Explicitly prohibited activity]



\## Expected Artifacts



\- \[Artifact]

\- \[Artifact]

\- \[Artifact]



\## Validation Method



\[Exact method by which the result will be demonstrated.]



\## Acceptance Criteria



\- \[Criterion that must be demonstrated]

\- \[Criterion that must be demonstrated]

\- \[Criterion that must be demonstrated]



\## Definition of Done



\[Precise statement describing when the checkpoint is considered complete.]



\## Failure Conditions



\- \[Failure condition]

\- \[Failure condition]



\## Dependencies



\- \[Checkpoint/dependency]



\## Human Approval Requirement



\[None / Required / Required for specific decision]



\## GitHub Issue



\[Issue number/link]



\## Branch



\[Branch name]



\## Expected Commits



```text

\[Commit convention]

Pull Request



\[PR number/link]



Review Requirements

\[Review requirement]

\[Validation requirement]

Completion Evidence

\[Screenshot]

\[Test output]

\[Browser demonstration]

\[API/database evidence]

\[Other evidence]

Validation Result



PASS / FAIL / BLOCKED



Human Approval



APPROVED / NOT APPROVED / NOT REQUIRED



Merge Status



MERGED / NOT MERGED



Closure Status



OPEN / CLOSED / DEFERRED / CANCELLED



Known Limitations



\[Document only verified limitations.]



Next Checkpoint



CP-X.X



Closure Statement



This checkpoint is closed only after all acceptance criteria have been demonstrated and the required evidence and approvals have been recorded.





\---



\# 13. Engineering Work Unit Template



For an individual agent task inside a checkpoint:



```markdown

\# ENGINEERING WORK UNIT



\## Work Unit ID

EWU-\[CP]-\[NUMBER]



\## Parent Checkpoint

CP-X.X



\## Objective

\[Single bounded task]



\## Context

\[Relevant technical context]



\## Allowed Files / Components

\- \[file/component]

\- \[file/component]



\## Allowed Changes

\- \[change]

\- \[change]



\## Forbidden Changes

\- unrelated features

\- architecture changes

\- dependency additions without approval

\- requirement changes



\## Preconditions

\- \[condition]



\## Implementation Tasks

1\. \[task]

2\. \[task]

3\. \[task]



\## Validation

1\. \[test]

2\. \[test]

3\. \[manual verification]



\## Expected Evidence

\- \[evidence]



\## Completion Condition



The work unit is complete only when its validation passes and its output satisfies the parent checkpoint acceptance criteria.



\## Escalation Conditions



Stop and request human direction if:



\- requirements conflict,

\- architecture must change,

\- new technology appears necessary,

\- scope expands,

\- destructive migration is required,

\- security boundary changes,

\- existing behaviour must intentionally be removed.

14\. Checkpoint Dependency Graph



The complete execution graph is:



P0

│

├── CP-0.1

│      ↓

├── CP-0.2

│      ↓

└── CP-0.3

&#x20;      │

&#x20;      ▼

CP-1.1

&#x20;      │

&#x20;      ▼

CP-1.2

&#x20;      │

&#x20;      ▼

CP-1.3

&#x20;      │

&#x20;      ▼

CP-2.1

&#x20;      │

&#x20;      ├──────────────┐

&#x20;      ▼              │

CP-2.2               │

&#x20;      ↓              │

CP-2.3               │

&#x20;      ↓              │

CP-2.4               │

&#x20;      │              │

&#x20;      └──────┐       │

&#x20;             │       │

P1 ───────────┘       │

&#x20;                     ▼

&#x20;                  CP-3.1

&#x20;                     ↓

&#x20;                  CP-3.2

&#x20;                     ↓

&#x20;                  CP-3.3

&#x20;                     │

&#x20;                     │

&#x20;            ┌────────┴────────┐

&#x20;            │                 │

&#x20;            ▼                 ▼

&#x20;         CP-2.4           CP-3.3

&#x20;            │                 │

&#x20;            └────────┬────────┘

&#x20;                     ▼

&#x20;                  CP-4.1

&#x20;                     ↓

&#x20;                  CP-4.2

&#x20;                     ↓

&#x20;                  CP-4.3

&#x20;                     ↓

&#x20;                  CP-4.4

&#x20;                     ↓

&#x20;                  CP-5.1

&#x20;                     ↓

&#x20;                  CP-5.2

&#x20;                     ↓

&#x20;                  CP-5.3

&#x20;                     ↓

&#x20;                   DONE



The critical integration gate is:



CP-2.4 ─────┐

&#x20;           ├──→ CP-4.1

CP-3.3 ─────┘



The learning system and 3D system therefore converge only after both are independently ready.



15\. Human-Controlled Gates



Certain checkpoints intentionally require owner approval.



CP-1.1

Game progression

&#x20;     │

&#x20;     ▼

HUMAN GATE



CP-1.2

Educational mapping

&#x20;     │

&#x20;     ▼

HUMAN GATE



CP-1.3

Learning interaction

&#x20;     │

&#x20;     ▼

HUMAN GATE



CP-3.1

Visual specification

&#x20;     │

&#x20;     ▼

HUMAN GATE



CP-3.2

3D assets

&#x20;     │

&#x20;     ▼

HUMAN GATE



CP-4.2

Security acceptance

&#x20;     │

&#x20;     ▼

HUMAN GATE



CP-5.2

Educational evaluation

&#x20;     │

&#x20;     ▼

HUMAN GATE



CP-5.3

FINAL RELEASE

&#x20;     │

&#x20;     ▼

HUMAN GATE



This prevents an autonomous agent from making irreversible product decisions simply because it can technically implement them.



16\. Final Engineering Rule



From this point forward, phase completion is determined by checkpoint closure, not by elapsed development time.



The authoritative hierarchy is:



PROJECT CONSTITUTION

&#x20;       ↓

REQUIREMENTS

&#x20;       ↓

FINAL ARCHITECTURE

&#x20;       ↓

TECHNOLOGY SPECIFICATION

&#x20;       ↓

MASTER PHASE PLAN

&#x20;       ↓

CHECKPOINT

&#x20;       ↓

ENGINEERING WORK UNIT

&#x20;       ↓

IMPLEMENTATION

&#x20;       ↓

VALIDATION

&#x20;       ↓

EVIDENCE

&#x20;       ↓

HUMAN APPROVAL

&#x20;       ↓

GITHUB MERGE

&#x20;       ↓

CHECKPOINT CLOSED



This gives us a controlled system for continuing DevOps COT with AI agents: the agent executes bounded engineering work; it does not redefine what the project is.

