FINAL MASTER PHASE PLAN

DevOps COT — Clashing DevTools



Status: Authoritative Phase Structure

Project Owner: Oram (2303031)

Project Type: B.Tech. Major Project

Baseline: Approved Project Constitution → Requirements \& Constraints → Final Architecture → Technology \& Tooling Specification



0\. Planning Principle



This roadmap is intentionally not a calendar.



It is a dependency-driven engineering progression:



Understand \& Freeze

&#x20;       │

&#x20;       ▼

Stabilize Existing System

&#x20;       │

&#x20;       ▼

Define \& Validate Educational Game Systems

&#x20;       │

&#x20;       ▼

Implement Learning + Progression

&#x20;       │

&#x20;       ▼

Build 3D World \& Runtime Integration

&#x20;       │

&#x20;       ▼

Integrate → Test → Evaluate → Finalize



A later phase must not be considered complete merely because its code exists. It is complete only when its exit criteria and validation conditions are satisfied.



The plan uses six phases. Fewer phases would combine work that has materially different prerequisites; more phases would unnecessarily fragment the engineering process.



PHASE 0 — BASELINE FREEZE \& REQUIREMENT VALIDATION

Phase ID



P0



Phase Name



Project Baseline and Engineering Readiness



Purpose



Establish a verified starting point from the existing repository and freeze the approved project scope before substantial new implementation begins.



Why It Exists



The project already contains a functioning prototype. The next development stage must therefore begin from the actual repository rather than from assumptions about what the application contains.



This phase prevents:



rebuilding existing functionality,

accidentally removing working systems,

treating proposed features as implemented,

introducing unnecessary technologies,

architectural drift.

Prerequisites



None.



This is the root phase.



Inputs

Approved Project Constitution

Requirements \& Constraints

Final Architecture

Technology \& Tooling Specification

Existing DevOps COT repository

Existing Firebase configuration

Existing source code

Existing DevOps configuration

Existing application behaviour

Objectives

Verify the current repository against the approved architecture.

Establish a known-good baseline.

Identify implementation gaps between the current system and approved requirements.

Freeze the project scope and technology baseline.

Major Workstreams

Repository baseline



Verify:



src/

package.json

package-lock.json

server.ts

vite.config.ts

tsconfig.json

firebase configuration

firestore.rules

docker-compose.yml

Jenkinsfile

nginx.conf

Application baseline



Verify the current:



authentication

user initialization

game state

resources

buildings

upgrades

builder system

missions

clan system

fork system

simulated infiltration

orchestration/status interface

Architecture consistency



Identify any difference between:



Current repository

&#x20;       ↓

Approved architecture

Development environment



Verify that the application can be:



install → run → build → type-check

Expected Artifacts

Verified repository baseline

Baseline build/run procedure

Current-state feature inventory

Architecture-gap list

Known-issues list

Baseline Git commit/tag

Validation



The existing project must successfully demonstrate its confirmed baseline functionality.



Dependencies



None.



Risks

Existing implementation may differ from previous descriptions.

Some functionality may only be simulated.

Configuration may depend on external Firebase settings.

Existing code may contain technical debt.

Human Decisions Required



Only where the repository contradicts the approved specification.



Exit Criteria



P0 exits when:



repository is accessible and understood,

baseline application can be run,

current functionality is verified,

major discrepancies are documented,

no unresolved contradiction affects the next phase.

Definition of Complete



The team knows exactly what exists before modifying it.



Next Phase Dependency



P0 → P1



PHASE 1 — GAME SYSTEM \& EDUCATIONAL MODEL FREEZE

Phase ID



P1



Phase Name



Gameplay, Progression and DevOps Learning Model



Purpose



Convert the approved product vision into precise game rules and educational mappings before implementing the major expansion.



Why It Exists



The major innovation is not simply adding more buildings or graphics.



The central product mechanism is:



Game Progression

&#x20;      ↓

DevOps Concept

&#x20;      ↓

Technology Unlock

&#x20;      ↓

Guided Explanation

&#x20;      ↓

Interactive Gameplay



This relationship must be defined before implementation.



Otherwise the project risks becoming merely a strategy game with DevOps-themed artwork.



Prerequisites



P0 complete.



Inputs

Approved requirements

Existing game systems

Existing DevOps-themed buildings

Existing resources

Existing progression

Planned educational direction

Final architecture

Objectives

Define the authoritative game progression model.

Define the DevOps-to-game mapping.

Define technology unlocking rules.

Define educational interaction rules.

Define boundaries between implemented, planned and simulated functionality.

Major Workstreams

1\. Town Hall Progression



Define how progression works and what becomes available at each stage.



Conceptually:



Town Hall Level

&#x20;      │

&#x20;      ├── Buildings

&#x20;      ├── Resources

&#x20;      ├── Missions

&#x20;      ├── Technologies

&#x20;      └── Learning Content



Exact level mappings must be established before implementation.



2\. DevOps Mapping



Define authoritative relationships such as:



Repository

Docker

Jenkins

Kubernetes

CI/CD

Monitoring

Networking

Deployment

Scaling



and their game representations.



Only approved mappings enter the implementation.



3\. Resource Economy



Define:



resource acquisition

resource spending

building costs

upgrade costs

progression dependencies

resource constraints



The existing resources provide the baseline rather than automatically introducing additional resource types.



4\. Building Progression



Define:



building purpose

level system

dependencies

unlock requirements

educational meaning

upgrade behaviour

5\. Learning Assistant



Define the requirements for the planned tutorial/chat-buddy.



Before selecting an LLM:



Learning requirement

&#x20;       ↓

Interaction requirement

&#x20;       ↓

Knowledge requirement

&#x20;       ↓

AI necessity

&#x20;       ↓

LLM technology decision



This prevents Gemini or another model from being introduced merely because it is available.



6\. Mission System



Define how missions reinforce DevOps learning rather than functioning only as generic game objectives.



Expected Artifacts

Game progression specification

Building progression matrix

Resource rules

DevOps mapping matrix

Technology unlock matrix

Mission model

Learning assistant specification

Educational interaction rules

Validation



Every proposed major mechanic must answer:



What does the player learn or understand by performing this action?



Risks

Gameplay may become disconnected from education.

Too many concepts may be introduced simultaneously.

Game balance may conflict with educational clarity.

AI may be used where deterministic content is sufficient.

Human Decisions Required

Exact progression structure

Exact DevOps mappings where multiple interpretations exist

Educational depth

Learning assistant behaviour

Exit Criteria



P1 exits when the major gameplay and educational rules are sufficiently defined that implementation can proceed without inventing core product behaviour during coding.



Definition of Complete



The product's learning/gameplay contract is defined.



Next Phase Dependency



P1 → P2



PHASE 2 — CORE SYSTEM REFINEMENT \& LEARNING IMPLEMENTATION

Phase ID



P2



Phase Name



Core Gameplay and DevOps Learning Implementation



Purpose



Extend the existing functional prototype into the structured DevOps learning system defined in P1.



Why It Exists



The current project already has significant game functionality. This phase builds on that foundation rather than replacing it.



Prerequisites

P0 complete

P1 complete

Inputs

Verified existing implementation

Game specification

Educational mapping

Progression rules

Final architecture

Approved technology baseline

Objectives

Stabilize existing game systems.

Implement authoritative progression.

Integrate DevOps learning into gameplay.

Implement technology unlocking and associated learning interactions.

Major Workstreams

Existing-System Stabilization



Refine:



authentication

Firestore persistence

user initialization

building management

resource management

upgrades

builder management

missions

clan interactions

fork gameplay

simulated operations

Progression



Implement the defined:



Town Hall

&#x20;   ↓

Unlock

&#x20;   ↓

Technology

&#x20;   ↓

Learning

&#x20;   ↓

Gameplay



model.



DevOps Technologies



The approved future learning direction includes technologies/concepts such as:



Docker

Jenkins

Kubernetes

CI/CD

monitoring



They should be integrated progressively according to P1's final mapping.



Important Boundary



This does not mean that the project must immediately deploy a real Kubernetes cluster, Jenkins infrastructure or production monitoring stack.



The educational requirement and real infrastructure implementation are separate concerns.



Tutorial / Chat-Buddy



Implement the learning assistant only according to the finalized P1 requirements.



If an LLM is actually necessary, then the open LLM decision can be resolved at this point.



Potential architecture:



Player unlocks technology

&#x20;       │

&#x20;       ▼

Learning context

&#x20;       │

&#x20;       ▼

Tutorial / Chat-Buddy

&#x20;       │

&#x20;       ├── Explanation

&#x20;       ├── Context

&#x20;       └── Guided interaction

Expected Artifacts

Refined game systems

Progression implementation

Technology unlock implementation

Educational missions

Learning interaction

Updated Firestore data model where required

Updated UI

Updated tests

Validation



Verify:



progression

persistence

unlock rules

resource effects

missions

learning interactions

authentication boundaries

Risks

Regression of existing gameplay

Firestore schema incompatibility

Overcomplicated progression

AI inconsistency if LLM is introduced

excessive coupling between game logic and educational content

Human Decisions Required

Final LLM selection if needed

Final educational content approval

Gameplay balance decisions

Exit Criteria



The player can progress through the defined learning/gameplay path without relying on unfinished 3D infrastructure.



Definition of Complete



The project's core educational gameplay works independently of the future visual expansion.



Next Phase Dependency



P2 → P3



PHASE 3 — ORIGINAL 3D WORLD \& ASSET PIPELINE

Phase ID



P3



Phase Name



3D Technology-City and Asset Development



Purpose



Transform the visual environment from the existing isometric foundation toward the planned original futuristic technology-city experience.



Why It Exists



The project's future vision explicitly calls for original 3D:



buildings

units/troops

environmental assets

scenery



This requires an asset-production process distinct from application/gameplay logic.



Prerequisites

P1 complete

P2 sufficiently stable

3D asset requirements finalized



P2 does not need to be 100% feature-complete, but core gameplay interfaces consumed by the visual layer must be stable.



Inputs

Visual direction

Building encyclopedia

Gameplay models

Original-asset requirement

Fable 5 workflow

Existing UI/world

Objectives

Establish the original 3D visual language.

Create required 3D assets.

Preserve the established gameplay semantics.

Prepare assets for runtime integration.

Major Workstreams

Visual Identity



The world should communicate:



Technology

Infrastructure

Automation

Cyber/DevOps

Future

Engineering



while remaining visually original.



Building Assets



Create 3D representations for approved buildings.



The assets should preserve their gameplay role, not copy another game's artwork.



For example:



Docker Yard

&#x20;     │

&#x20;     ▼

Original 3D visual representation

&#x20;     │

&#x20;     ▼

Same gameplay function

Units / Troops



Create original models for approved units.



Their visual identity must correspond to their game/educational function.



Environment



Develop:



technology-city surroundings

terrain

decorative structures

non-interactive scenery

lighting

visual effects



Only required elements should be produced.



Fable 5



Fable 5 becomes part of the planned asset-production workflow.



It is not automatically the runtime engine.



Expected Artifacts

3D asset library

building models

unit models

environment assets

asset naming conventions

export/import pipeline

visual style guide

Validation



Every asset must satisfy:



original visual identity

correct scale

correct orientation

acceptable runtime format

compatibility with intended renderer

no copied commercial-game artwork

Risks

3D asset production becoming too large

runtime performance issues

renderer not yet finalized

inconsistent asset scale

excessive graphical complexity

Human Decisions Required



The major open architectural decision here is the runtime 3D renderer.



Fable 5 does not resolve that decision automatically.



Exit Criteria



The required visual assets exist and can be technically consumed by the selected runtime rendering approach.



Definition of Complete



The project has an original, integration-ready 3D asset foundation.



Next Phase Dependency



P3 → P4



PHASE 4 — FULL INTEGRATION, QUALITY \& ENGINEERING HARDENING

Phase ID



P4



Phase Name



System Integration and Quality Engineering



Purpose



Combine the refined gameplay/learning system with the visual system and establish a reliable complete application.



Why It Exists



A system can have individually working components while still failing as an integrated product.



This phase therefore focuses on:



Components

&#x20;   ↓

Interfaces

&#x20;   ↓

Integrated System

&#x20;   ↓

Validation

Prerequisites

P2 complete

P3 complete

runtime rendering decision resolved

Inputs

Core game system

Educational system

3D assets

Authentication

Firestore

Express API

DevOps configuration

Testing requirements

Objectives

Integrate all approved components.

Establish reliable end-to-end workflows.

Validate persistence and authentication.

Test gameplay and educational correctness.

Harden deployment and operational behaviour.

Major Workstreams

Integration



Validate:



Authentication

&#x20;     ↓

User State

&#x20;     ↓

Game World

&#x20;     ↓

Progression

&#x20;     ↓

Learning

&#x20;     ↓

Persistence

API Validation



Verify the existing API boundary and any approved future APIs.



Data Validation



Verify:



user ownership

game-state consistency

progression persistence

resource consistency

building consistency

Security



Validate:



Firebase authentication

Firestore rules

authorization boundaries

environment variables

secret handling

API exposure

Testing



Testing should progressively cover:



Unit



Game rules and deterministic logic.



Integration



Application/Firebase/API interactions.



End-to-End



Critical user workflows.



For example:



Open application

&#x20;     ↓

Authenticate

&#x20;     ↓

Initialize/load base

&#x20;     ↓

Interact

&#x20;     ↓

Change game state

&#x20;     ↓

Persist

&#x20;     ↓

Reload

&#x20;     ↓

Verify state

Performance



Focus on requirements-driven performance issues such as:



world rendering

asset loading

game-state operations

network calls

Firestore operations



Do not optimize components that have no demonstrated problem.



CI/CD



The existing Jenkinsfile should be validated rather than assumed to represent a fully operational CI/CD system.



If CI becomes mandatory under the finalized requirements, its execution environment must be configured and tested.



Expected Artifacts

Integrated application

Test suite

test reports

security validation results

performance findings

CI configuration

deployment configuration

defect register

Risks

integration regressions

3D performance

authentication failures

inconsistent Firestore state

CI configuration mismatch

AI-generated code regressions

Human Decisions Required

Severity of unresolved defects

release readiness

acceptable performance thresholds where not already defined

final scope cuts if necessary

Exit Criteria



All mandatory requirements have an implementation path and all critical workflows pass validation.



Definition of Complete



The integrated system is technically stable enough for final evaluation.



Next Phase Dependency



P4 → P5



PHASE 5 — EVALUATION, DEPLOYMENT \& FINAL RELEASE

Phase ID



P5



Phase Name



Evaluation, Demonstration and Finalization



Purpose



Validate the completed project against its requirements and prepare the final academic deliverable.



Why It Exists



A major project is not complete merely when implementation stops.



The final system must demonstrate that it satisfies the approved objectives and requirements.



Prerequisites

P4 complete

no unresolved critical defects

Inputs

Integrated application

Requirements specification

Architecture

Test results

Deployment configuration

Evaluation criteria

Objectives

Validate the finished system against requirements.

Evaluate usability and educational value.

Verify deployment/runnability.

Prepare final documentation and demonstration.

Major Workstreams

Requirements Validation



Create:



Requirement

&#x20;    ↓

Implementation

&#x20;    ↓

Test Evidence

&#x20;    ↓

Result



for every mandatory requirement.



Educational Evaluation



Evaluate whether users can understand the intended DevOps concepts through the game's progression.



The project should demonstrate that the game mechanics are not merely decorative.



Functional Evaluation



Verify:



authentication

individual state

gameplay

progression

persistence

missions

learning

visual environment

approved integrations

Deployment



Deploy using only the approved deployment architecture.



Do not label the system "production-ready" unless the actual operational requirements justify that classification.



Final Documentation



Prepare:



project report

architecture documentation

requirements traceability

technology documentation

testing documentation

deployment instructions

screenshots

demonstration material

viva preparation

Expected Artifacts

final application

deployment

test/evaluation report

requirements traceability report

final documentation

presentation

demonstration build

Validation



The final system must pass:



mandatory functional requirements

security requirements

persistence requirements

critical UX requirements

evaluation requirements

Risks

unresolved low-priority features consuming final time

deployment configuration failures

documentation falling behind implementation

educational claims exceeding demonstrated evidence

Human Decisions Required



Final release approval.



Exit Criteria



All mandatory requirements are satisfied or explicitly documented as deferred through an approved change.



Definition of Complete



DevOps COT is considered complete when the approved scope has been implemented, integrated, tested, evaluated, documented and made runnable/deployable according to the approved architecture.



Next Phase Dependency



None.



P5 is the terminal phase.



7\. MASTER DEPENDENCY GRAPH

&#x20;                        ┌──────────────────────┐

&#x20;                        │ P0                   │

&#x20;                        │ BASELINE             │

&#x20;                        │ VALIDATION           │

&#x20;                        └──────────┬───────────┘

&#x20;                                   │

&#x20;                                   ▼

&#x20;                        ┌──────────────────────┐

&#x20;                        │ P1                   │

&#x20;                        │ GAME + EDUCATIONAL   │

&#x20;                        │ MODEL FREEZE         │

&#x20;                        └──────────┬───────────┘

&#x20;                                   │

&#x20;                                   ▼

&#x20;                        ┌──────────────────────┐

&#x20;                        │ P2                   │

&#x20;                        │ CORE GAME +          │

&#x20;                        │ LEARNING             │

&#x20;                        └──────────┬───────────┘

&#x20;                                   │

&#x20;                                   ▼

&#x20;                        ┌──────────────────────┐

&#x20;                        │ P3                   │

&#x20;                        │ 3D WORLD + ASSETS    │

&#x20;                        └──────────┬───────────┘

&#x20;                                   │

&#x20;                        ┌──────────┴───────────┐

&#x20;                        │                      │

&#x20;                        ▼                      ▼

&#x20;                   P2 COMPLETE            P3 COMPLETE

&#x20;                        │                      │

&#x20;                        └──────────┬───────────┘

&#x20;                                   ▼

&#x20;                        ┌──────────────────────┐

&#x20;                        │ P4                   │

&#x20;                        │ INTEGRATION +        │

&#x20;                        │ QUALITY              │

&#x20;                        └──────────┬───────────┘

&#x20;                                   │

&#x20;                                   ▼

&#x20;                        ┌──────────────────────┐

&#x20;                        │ P5                   │

&#x20;                        │ EVALUATION +         │

&#x20;                        │ FINAL RELEASE        │

&#x20;                        └──────────────────────┘



The effective dependency structure is therefore:



P0 → P1 → P2 ─────┐

&#x20;                 ├──→ P4 → P5

&#x20;      P1 → P3 ───┘



This allows the 3D asset pipeline to proceed once its gameplay/visual requirements are sufficiently defined without requiring the entire educational product to be rebuilt first.



8\. PHASE DEPENDENCY MATRIX

Phase	Requires	Produces

P0	Existing project + approved specifications	Verified baseline

P1	P0	Frozen gameplay/education model

P2	P1 + P0	Core educational game

P3	P1 + stable P2 interfaces	Original 3D assets/world

P4	P2 + P3	Integrated validated system

P5	P4	Evaluated final product

9\. CROSS-PHASE INVARIANTS



These rules apply throughout all phases.



1\. Scope Invariant



No feature becomes part of the project merely because an AI agent suggests it.



Proposal ≠ Requirement

Requirement ≠ Implementation

Implementation ≠ Validated Feature

2\. Architecture Invariant



No new technology is introduced solely because it is popular.



Every new technology must have:



Requirement

&#x20;  ↓

Architectural need

&#x20;  ↓

Alternative evaluation

&#x20;  ↓

Owner approval

3\. Educational Invariant



Every major educational mechanic must have a demonstrable relationship to a DevOps concept.



4\. Security Invariant



The game must not evolve into an actual cyberattack platform.



Simulated infiltration remains a game mechanic.



5\. Asset Invariant



3D assets must establish an original visual identity.



The project may borrow interaction/progression inspiration, but not reproduce copyrighted commercial-game artwork or models.



6\. Data Invariant



Authenticated users must not gain access to another user's private game state.



7\. AI Invariant



AI-generated code/content remains subject to developer review and validation.



AI output

&#x20;   ≠

Automatically trusted implementation

8\. Persistence Invariant



Game state that is required to survive sessions must have an authoritative persistence mechanism.



9\. Evidence Invariant



A feature is not described as completed merely because:



a configuration file exists,

a component exists,

an AI generated it,

a button exists,

or an idea was discussed.



It must satisfy the appropriate implementation and validation criteria.



10\. ARCHITECTURE CONSISTENCY AUDIT



The phase plan was checked against the approved architecture.



Architecture Area	Phase Responsible	Consistent?

React frontend	P0, P2, P4	✓

TypeScript	P0–P4	✓

Vite	P0, P4	✓

Tailwind/Motion/UI	P2–P4	✓

Express	P0, P2, P4	✓

Firebase Auth	P0, P2, P4, P5	✓

Firestore	P0, P2, P4, P5	✓

User-specific state	P0, P2, P4	✓

Game systems	P1, P2	✓

Educational progression	P1, P2, P5	✓

Future LLM	P1 decision → P2 implementation	✓

Fable 5	P3	✓

3D runtime	P3 decision → P4 integration	✓

Docker	P0/P4/P5	✓

Jenkins	P0/P4/P5	✓

Nginx	P0/P4/P5	✓

Git/GitHub	All phases	✓

AI-assisted development	All implementation phases	✓

Testing	P4/P5	✓

Security	P0/P2/P4/P5	✓

Observability	P4/P5	✓

Vector DB	None	✓

Embeddings	None	✓

Redis	None	✓

Kafka	None	✓

Microservices	None	✓

API Gateway	None	✓

Real cyberattack infrastructure	None	✓

11\. ARCHITECTURAL DECISIONS RESPECTED BY THE PLAN



The phase structure deliberately preserves several important architectural boundaries.



No premature microservices



There is no phase for converting the application into microservices because the approved architecture does not require them.



No premature vector database



There is no RAG/embedding/vector phase because no approved requirement currently requires semantic retrieval.



No premature Kubernetes infrastructure



Kubernetes can be represented educationally before the project needs an actual Kubernetes deployment environment.



No premature production observability stack



Prometheus/Grafana/OpenTelemetry are not inserted into the roadmap merely because the project is DevOps-themed.



No premature LLM commitment



The educational assistant is defined first; the model/provider is selected only if the requirement actually requires an LLM.



No assumption that Fable 5 is the renderer



Fable 5 is the 3D asset workflow. Runtime rendering remains a separate architectural decision.



12\. AUTHORITATIVE PHASE ORDER



The project should therefore proceed strictly as:



P0

│

│  Verify what exists

▼

P1

│

│  Decide exactly what the game teaches

▼

P2

│

│  Build the educational gameplay

▼

P3

│

│  Build the original 3D world/assets

▼

P4

│

│  Integrate + test + harden

▼

P5

│

│  Evaluate + deploy + document

▼

DONE



The most important engineering principle is that P1 comes before significant new implementation. We already have a prototype; the major-project risk is no longer proving that we can make a game interface. The risk is making the final system coherent, educationally meaningful, technically maintainable, and faithful to the approved architecture.



This phase structure is therefore the authoritative progression from the current DevOps COT state to the intended finished product.

