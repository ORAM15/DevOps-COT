REQUIREMENTS AND CONSTRAINTS SPECIFICATION

DevOps COT — Clashing DevTools



Project: DevOps COT

Project Type: B.Tech. Major Project

Project Owner: Oram (2303031)

Institution: Guru Nanak Dev Engineering College, Ludhiana

Specification Basis: Verified PROJECT CONSTITUTION — DRAFT



0\. Specification Status



This document converts the verified project Constitution into an explicit requirements baseline.



It does not define the final architecture, select new technologies, prescribe implementation patterns, or turn future ideas into current functionality.



Where the Constitution establishes an intended capability but does not define an exact measurable threshold, the acceptance interpretation below deliberately remains qualitative. Such items should be refined later through design/evaluation work rather than invented here.



Requirement classification

Classification	Meaning

MANDATORY	Required for the project direction or explicitly established as essential

IMPORTANT	Strongly supports the project objectives and should be addressed

OPTIONAL	Desirable but not established as essential

DEFERRED	Intentionally belongs to later/future development

1\. Functional Requirements

FR-01 — User Authentication



Requirement:

The system shall provide authenticated user access using the project's established Firebase-based authentication mechanism.



Reason:

Authentication is an existing and explicitly established part of the project and allows individual users to have their own game environment.



Priority: MANDATORY



Source: Project Constitution §9, §11, §19.



Acceptance interpretation:

A user should be able to authenticate successfully and enter the application as an identified user.



FR-02 — Individual User Identity



Requirement:

The system shall associate an authenticated user with an individual application/game identity.



Reason:

The project is intended to provide independent game environments rather than treating every user as the same player.



Priority: MANDATORY



Source: Project Constitution §3, §9.



Acceptance interpretation:

The authenticated user's identity should be distinguishable from another authenticated user's identity.



FR-03 — Individual Base Initialization



Requirement:

The system shall initialize an individual Town Hall/base environment for an authenticated user.



Reason:

Receiving an individual new/base Town Hall state is part of the verified current user flow.



Priority: MANDATORY



Source: Project Constitution §9, §11.



Acceptance interpretation:

A newly authenticated user should receive an initialized game environment rather than an undefined or shared base.



FR-04 — Persistent Game State



Requirement:

The system shall maintain user-specific game-state information persistently.



Reason:

Persistent game state is necessary for an individual progressing game environment.



Priority: MANDATORY



Source: Project Constitution §9, §11.



Acceptance interpretation:

Game information associated with a user should remain available rather than being limited solely to a transient browser session.



FR-05 — Interactive Base Environment



Requirement:

The system shall provide an interactive base-building environment representing the player's DevOps environment.



Reason:

The base-building environment is the central gameplay representation of the project.



Priority: MANDATORY



Source: Project Constitution §5, §9.



Acceptance interpretation:

The user should be able to interact with the established base/game environment rather than merely view static information.



FR-06 — Isometric Game Environment



Requirement:

The current game foundation shall support the established 12 × 12 isometric environment.



Reason:

The isometric grid is part of the current implementation.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

The existing game environment should retain functional support for the established isometric grid unless deliberately replaced during a future approved development phase.



FR-07 — DevOps-Themed Infrastructure



Requirement:

The game shall represent DevOps-related infrastructure through game entities.



Reason:

Representing infrastructure through gameplay is fundamental to the product concept.



Priority: MANDATORY



Source: Project Constitution §5, §9.



Acceptance interpretation:

DevOps concepts should have recognizable representations within the game environment.



FR-08 — Resource Management



Requirement:

The system shall support the established game resources: BuildPower, Containers and Data.



Reason:

Resources form part of the existing gameplay and progression mechanics.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

The established resources should be represented and participate in the existing game mechanics.



FR-09 — Building Construction



Requirement:

The system shall support construction/placement of established game buildings.



Reason:

Building construction is part of the current base-building gameplay.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

A player should be able to perform the established building-placement/construction interactions.



FR-10 — Building Upgrades



Requirement:

The system shall support upgrading applicable buildings using the established game mechanics.



Reason:

Upgrades provide progression within the current game.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

Applicable buildings should be capable of progressing through their established upgrade mechanism.



FR-11 — Building Information



Requirement:

The system shall expose relevant information about game buildings, including established level/cost/production/construction information where applicable.



Reason:

Players need contextual information to interact with the building system.



Priority: IMPORTANT



Source: Project Constitution §9.



Acceptance interpretation:

Selecting or interacting with a relevant building should expose its available established information.



FR-12 — Builder Management



Requirement:

The system shall support the existing Builder Management functionality.



Reason:

Builder management is part of the current game foundation.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

The player should be able to use the established builder-management interactions.



FR-13 — Builder AI



Requirement:

The system shall support the existing Builder AI upgrade-selection functionality.



Reason:

Builder AI is an existing gameplay component and contributes to automation within the game.



Priority: MANDATORY



Source: Project Constitution §9, §12.



Acceptance interpretation:

The Builder AI should be capable of selecting upgrade actions according to its established strategies.



FR-14 — Builder AI Strategies



Requirement:

The Builder AI shall support the established Resource, Level and Balanced strategies.



Reason:

These strategies are explicitly documented as part of the current implementation.



Priority: IMPORTANT



Source: Project Constitution §9, §12.



Acceptance interpretation:

The corresponding strategy choices should produce the established type of upgrade selection.



FR-15 — Daily Missions



Requirement:

The system shall provide the existing Daily Missions functionality.



Reason:

Missions are an established gameplay mechanism and provide objectives for player activity.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

The user should be able to access and interact with the existing daily-mission system.



FR-16 — Clan System



Requirement:

The system shall support the established demonstration clan functionality.



Reason:

Clan interaction is an existing part of the project.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

The user should be able to access the established clan interface and information.



FR-17 — ID Hunters Demonstration Clan



Requirement:

The current demonstration implementation shall contain the established ID Hunters clan with the authenticated player represented as its leader.



Reason:

This is part of the current implementation rather than a future idea.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

The established demonstration clan should be represented with its configured leader/member information.



FR-18 — Clan Performance Information



Requirement:

The clan system shall display the established member information, including levels, trophies and resource contributions.



Reason:

These are current clan-game mechanics.



Priority: IMPORTANT



Source: Project Constitution §9.



Acceptance interpretation:

The relevant member performance information should be visible through the clan interface.



FR-19 — Repository Fork Gameplay



Requirement:

The system shall support repository-forking as an established game interaction.



Reason:

Repository forking is used as a game-based DevOps interaction.



Priority: MANDATORY



Source: Project Constitution §9.



Acceptance interpretation:

The user should be able to perform the established repository-fork interaction and receive its configured game outcome.



FR-20 — Simulated Infiltration Gameplay



Requirement:

The system shall support the existing simulated pipeline-infiltration game mechanic.



Reason:

The mechanic provides an operational/game interaction within the project's game world.



Priority: MANDATORY



Source: Project Constitution §9, §8.



Acceptance interpretation:

The system should simulate the established operation and generate its configured game result.



FR-21 — Non-Real-World Attack Behaviour



Requirement:

The infiltration/attack mechanic shall remain a game simulation and shall not perform real-world cyberattacks.



Reason:

This is an explicit project boundary.



Priority: MANDATORY



Source: Project Constitution §8.



Acceptance interpretation:

Game interaction must operate on the project's simulated game state rather than executing unauthorized real-world attack activity.



FR-22 — Orchestration Interface



Requirement:

The system shall retain the established orchestration-oriented interface functionality where it forms part of the current implementation.



Reason:

An orchestration-oriented interface exists in the current project.



Priority: IMPORTANT



Source: Project Constitution §9.



Acceptance interpretation:

The existing orchestration-oriented interaction/presentation should remain functional unless intentionally superseded.



FR-23 — Pipeline Status Simulation



Requirement:

The system shall support the established pipeline-status simulation functionality.



Reason:

A pipeline-status simulation endpoint is already part of the project.



Priority: IMPORTANT



Source: Project Constitution §9.



Acceptance interpretation:

The application should be able to obtain/present the established simulated pipeline status.



2\. Educational Functional Requirements



These requirements describe the major-project direction, not necessarily the current prototype.



EFR-01 — DevOps Conceptual Representation



Requirement:

The system shall use game mechanics to provide contextual representations of DevOps infrastructure and operational concepts.



Reason:

This is the central educational purpose of DevOps COT.



Priority: MANDATORY



Source: Project Constitution §5, §6.



Acceptance interpretation:

Game entities and interactions should have identifiable relationships to the DevOps concepts they are intended to represent.



EFR-02 — Progressive DevOps Learning



Requirement:

The major-project system shall support a progression-oriented approach to introducing DevOps concepts.



Reason:

Progressive learning is a core part of the future product vision.



Priority: IMPORTANT



Source: Project Constitution §4, §6, §15.



Acceptance interpretation:

The learning experience should progress from simpler concepts toward more advanced concepts rather than presenting all intended technologies without progression.



EFR-03 — Progressive Technology Unlocking



Requirement:

The proposed learning system should associate game progression with progressive availability of DevOps technologies/concepts.



Reason:

The project vision explicitly describes technology unlocking through progression.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

When implemented, advancement in game progression should be capable of triggering access to the corresponding educational technology/concept.



EFR-04 — Docker Learning Integration



Requirement:

The major-project development may integrate Docker as a DevOps learning concept through gameplay.



Reason:

Docker is explicitly identified as a future educational technology.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

Docker should not be represented as a completed educational feature until an actual implementation exists.



EFR-05 — Jenkins Learning Integration



Requirement:

The major-project development may integrate Jenkins as a DevOps learning concept through gameplay.



Reason:

Jenkins is explicitly identified as a future educational technology.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

The presence of a Jenkinsfile must not be considered sufficient acceptance evidence for this requirement.



EFR-06 — Kubernetes Learning Integration



Requirement:

The major-project development may introduce Kubernetes as a progressively unlocked DevOps learning concept.



Reason:

Kubernetes is part of the established future direction.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

Kubernetes should only be treated as implemented when an actual educational/gameplay integration has been developed.



EFR-07 — CI/CD Learning Integration



Requirement:

The major-project development may provide gameplay-based representation of CI/CD concepts.



Reason:

CI/CD is part of the intended DevOps educational expansion.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

A genuine gameplay/learning representation must exist before this is considered fulfilled.



EFR-08 — Monitoring Learning Integration



Requirement:

The major-project development may introduce monitoring concepts through gameplay.



Reason:

Monitoring is part of the future DevOps-learning direction.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

Monitoring should not be marked as implemented solely because logs or simulated status information exist.



EFR-09 — Guided Learning



Requirement:

The future system should provide a tutorial/chat-buddy mechanism for contextual explanations of newly introduced concepts.



Reason:

Guided learning has been explicitly proposed as part of the major-project vision.



Priority: DEFERRED



Source: Project Constitution §4, §15.



Acceptance interpretation:

A learner should receive contextual guidance when an implemented learning concept is introduced.



EFR-10 — Educational Missions



Requirement:

The project should extend missions toward meaningful DevOps learning activities.



Reason:

Advanced educational missions are part of the intended future direction.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

A future educational mission should connect the player's activity to a defined DevOps concept rather than merely providing generic game objectives.



3\. 3D and Visual Requirements

VR-01 — Original Visual Identity



Requirement:

The project shall maintain an original visual identity rather than reproducing copyrighted game assets.



Reason:

This is an explicit project decision.



Priority: MANDATORY



Source: Project Constitution §5, §8.



Acceptance interpretation:

Project assets should be original or appropriately sourced rather than copied from Clash of Clans or another commercial game.



VR-02 — Technology-City Direction



Requirement:

The future visual environment shall move toward an original futuristic technology-city environment.



Reason:

The richer technology-city environment is part of the approved/project direction.



Priority: IMPORTANT



Source: Project Constitution §15.



Acceptance interpretation:

The future environment should visually communicate a technology-oriented world rather than simply reproducing a generic game grid.



VR-03 — Original 3D Buildings



Requirement:

Future development shall support original three-dimensional representations of the project's buildings.



Reason:

The project vision includes original 3D buildings.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

3D building assets should be original representations of project concepts and not copies of commercial-game assets.



VR-04 — Original 3D Units and Environment



Requirement:

Future development may introduce original three-dimensional units/troops and environmental assets.



Reason:

The broader 3D vision includes buildings, units and scenery.



Priority: DEFERRED



Source: Project Constitution §15.



Acceptance interpretation:

This requirement remains incomplete until such assets are actually developed and integrated.



VR-05 — Fable 5 Asset Development



Requirement:

Fable 5 is intended to participate in the future original 3D asset-development workflow.



Reason:

This is an explicit future project decision.



Priority: DEFERRED



Source: Project Constitution §12, §15.



Acceptance interpretation:

Fable 5 should be considered a future development dependency, not a current runtime requirement, unless this is subsequently changed.



4\. User Requirements

UR-01 — Simple Entry into the Game



Requirement:

A user should be able to authenticate and enter their individual game environment without requiring access to another user's base.



Priority: MANDATORY



Reason:

Individual authentication and base initialization are established core functionality.



Source: Constitution §4, §9.



Acceptance interpretation:

The documented authentication-to-individual-base flow should work.



UR-02 — Understandable Game Interaction



Requirement:

Users should be able to understand and interact with the base-building/game environment.



Priority: IMPORTANT



Reason:

The project is intended as an interactive learning experience rather than a purely technical backend.



Source: Constitution §4, §5.



Acceptance interpretation:

The core game interactions should be understandable enough to permit normal use and later educational interaction.



UR-03 — Contextual DevOps Learning



Requirement:

The future user experience should allow DevOps concepts to be encountered within gameplay context.



Priority: MANDATORY



Reason:

This is central to the project's educational purpose.



Source: Constitution §5, §6.



Acceptance interpretation:

Implemented educational concepts should be connected to game interactions rather than presented only as disconnected definitions.



5\. Non-Functional Requirements



The Constitution does not provide numerical non-functional thresholds. Therefore these requirements intentionally avoid invented values.



NFR-01 — Usability



Requirement:

The system should provide an understandable interactive experience appropriate for students/beginners encountering DevOps concepts.



Reason:

The product is intended to make DevOps concepts more interactive and contextual.



Priority: IMPORTANT



Source: Constitution §3, §4, §17.



Acceptance interpretation:

Core functionality should be usable without requiring the user to understand the implementation details of the system.



NFR-02 — Educational Clarity



Requirement:

The relationship between a game mechanic and the DevOps concept it represents should be understandable.



Reason:

Gamification without meaningful conceptual mapping would not satisfy the project's core purpose.



Priority: MANDATORY



Source: Constitution §5, §6.



Acceptance interpretation:

For each implemented educational mapping, the intended concept should be identifiable to the learner.



NFR-03 — Maintainable Codebase



Requirement:

The implementation should remain sufficiently organized to allow continued incremental development from the existing prototype.



Reason:

The major project is being extended from an existing implementation.



Priority: IMPORTANT



Source: Constitution §9, §22.



Acceptance interpretation:

Future development should be possible without requiring wholesale replacement of unrelated existing functionality.



NFR-04 — Incremental Extensibility



Requirement:

The project should be capable of being extended with additional gameplay and educational concepts.



Reason:

The project is explicitly intended to grow from its current foundation.



Priority: IMPORTANT



Source: Constitution §5, §15.



Acceptance interpretation:

New concepts and game systems should be introducible without invalidating the established project purpose.



6\. Security Requirements

SEC-01 — Authenticated Access



Requirement:

User-specific game functionality shall be associated with authenticated user identity.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

The system shall distinguish authenticated users when associating game state.



SEC-02 — User-Specific State Isolation



Requirement:

Individual user game state shall not be treated as one universally shared game state.



Priority: MANDATORY



Reason:

The application has been tested with individual user/base initialization.



Source: Constitution §9.



Acceptance interpretation:

One authenticated user's initialized game state should not simply replace another authenticated user's state.



SEC-03 — Secrets Protection



Requirement:

Application secrets/configuration must not be treated as ordinary source-code data.



Priority: IMPORTANT



Reason:

The repository contains environment configuration mechanisms and AI/cloud services.



Source: Constitution §10, repository state documented in Constitution §10.



Acceptance interpretation:

Secret values should not be committed to the public/source repository as hard-coded credentials.



Boundary: The Constitution does not specify a complete secrets-management architecture, so no additional mechanism is prescribed here.



SEC-04 — Simulated Attack Boundary



Requirement:

The game's infiltration mechanic shall remain confined to the simulated game environment.



Priority: MANDATORY



Source: Constitution §8.



Acceptance interpretation:

The feature must not execute actual unauthorized cyber operations.



7\. Reliability Requirements

REL-01 — Persistent User State



Requirement:

The system should preserve the established user/game-state information through its persistent storage mechanism.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

A user's stored game state should remain retrievable according to the application's established persistence behaviour.



REL-02 — Authentication-to-Game Continuity



Requirement:

Successful authentication should lead to the user's corresponding game environment.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:



Authentication

&#x20;     ↓

User identity

&#x20;     ↓

Game-state lookup/initialization

&#x20;     ↓

Individual base



The documented flow should complete without requiring manual reconstruction of the user's game environment.



REL-03 — Graceful Handling of Game Operations



Requirement:

Core game operations should maintain valid game state when users construct, upgrade, manage or interact with game entities.



Priority: IMPORTANT



Source: Constitution §9.



Acceptance interpretation:

Established operations should not leave the game state in an invalid or unusable condition.



8\. Performance Requirements



The Constitution does not establish numerical performance targets.



PERF-01 — Responsive Interaction



Requirement:

Core game interactions should remain sufficiently responsive for normal browser use.



Priority: IMPORTANT



Source: Constitution §4, §9.



Acceptance interpretation:

Users should be able to interact with established game components without obvious blocking or unusable delays.



Measurement: OPEN QUESTION



No numerical response-time threshold has been established.



PERF-02 — Performance Evaluation



Requirement:

Performance should be evaluated before final project completion.



Priority: IMPORTANT



Source: Constitution §24.



Acceptance interpretation:

The final project should have some documented basis for assessing whether performance is acceptable.



Exact metrics: OPEN QUESTION



9\. Scalability Requirements

SCALE-01 — Individual User State



Requirement:

The system should maintain separate user/game states as additional users use the platform.



Priority: IMPORTANT



Source: Constitution §3, §9.



Acceptance interpretation:

Adding another authenticated user should not inherently require replacing the state of existing users.



SCALE-02 — Future Extensibility



Requirement:

The system should remain extensible toward the project's planned larger gameplay and educational scope.



Priority: IMPORTANT



Source: Constitution §15.



Acceptance interpretation:

The existing implementation should provide a reasonable foundation for additional technologies, missions, game mechanics and visual assets.



SCALE-03 — Scalability Targets



Requirement:

No specific concurrent-user, database-volume, latency or infrastructure-scaling target is currently established.



Priority: DEFERRED



Source: Constitution §21 and §24.



Acceptance interpretation:

No numerical scalability claim may be made until the project owner establishes one.



10\. Observability Requirements

OBS-01 — System/Operational Visibility



Requirement:

The project should retain meaningful system-status/log presentation where it forms part of the existing implementation.



Priority: IMPORTANT



Source: Constitution §9.



Acceptance interpretation:

Existing system-log/status presentation should remain understandable and useful for observing simulated/application activity.



OBS-02 — Monitoring as Education



Requirement:

Future monitoring functionality may be connected explicitly to DevOps learning.



Priority: DEFERRED



Source: Constitution §15.



Acceptance interpretation:

Monitoring should only be considered an educational feature once an actual learning/gameplay mechanism is implemented.



11\. Maintainability Requirements

MAINT-01 — Incremental Development



Requirement:

The project shall support incremental development from the existing functional foundation.



Priority: MANDATORY



Reason:

The major project explicitly continues from the existing prototype.



Source: Constitution §9, §15.



Acceptance interpretation:

Development work should be capable of extending existing functionality rather than requiring the project to be restarted.



MAINT-02 — Clear Separation of Current and Future Functionality



Requirement:

Implemented functionality and planned functionality shall remain distinguishable in project documentation and development decisions.



Priority: MANDATORY



Reason:

This distinction has repeatedly been established as essential to project accuracy.



Source: Constitution §18, §26.



Acceptance interpretation:

A proposed feature shall not be documented as implemented until implementation evidence exists.



MAINT-03 — Honest AI-Assisted Development Attribution



Requirement:

AI-assisted development shall be documented as assistance rather than falsely representing AI-generated output as exclusively manual implementation.



Priority: MANDATORY



Source: Constitution §10, §18.



Acceptance interpretation:

Project documentation should accurately describe AI-assisted development while preserving the owner's engineering decisions, integration, debugging and testing contributions.



12\. Testing Requirements

TEST-01 — Authentication Testing



Requirement:

Authentication shall be tested for the established user-entry flow.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

A user should be able to complete the documented authentication flow and enter the application.



TEST-02 — Individual Base Testing



Requirement:

The system shall be tested to verify individual base initialization for authenticated users.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

A newly authenticated user should receive the intended individual starting state.



TEST-03 — Persistence Testing



Requirement:

User/game persistence shall be tested.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

Stored user/game information should remain retrievable according to the established persistence behaviour.



TEST-04 — Gameplay Testing



Requirement:

Existing core game interactions shall be tested, including applicable:



resource interactions

building operations

upgrades

builder management

missions

clan interactions

repository fork

simulated infiltration



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

Each existing system should be demonstrably functional rather than merely present in source code.



TEST-05 — Educational Feature Testing



Requirement:

Future educational mechanics shall be tested for both functional behaviour and conceptual clarity.



Priority: IMPORTANT / DEFERRED



Source: Constitution §24.



Acceptance interpretation:

An educational feature should work technically and communicate its intended DevOps concept.



TEST-06 — Final Evaluation



Requirement:

The completed project shall undergo functional/usability/educational evaluation before final demonstration.



Priority: MANDATORY



Source: Constitution §24.



Acceptance interpretation:

The final project should have documented evaluation evidence.



Exact evaluation methodology: OPEN QUESTION



13\. Deployment Requirements

DEP-01 — Runnable Application



Requirement:

The project shall remain runnable as a browser-based application.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

A user should be able to launch/access the application and perform the established user flow.



DEP-02 — Authentication Service Availability



Requirement:

The deployed/runnable application shall be capable of accessing its authentication service.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

The documented Firebase authentication flow should function in the target environment.



DEP-03 — Persistent Storage Availability



Requirement:

The deployed/runnable application shall be capable of accessing its established persistent game-state storage.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

Authenticated users should be able to retrieve/store applicable game state.



DEP-04 — Production-Readiness Boundary



Requirement:

The project shall not be described as production-ready solely because deployment/configuration files exist.



Priority: MANDATORY



Source: Constitution §8, §14.



Acceptance interpretation:

Claims of production readiness require separate evidence beyond the existence of Docker Compose, Jenkinsfile or Nginx configuration.



DEP-05 — Deployment Architecture



Requirement:

The exact final deployment architecture shall be established before final production/deployment claims are made.



Priority: DEFERRED



Source: Constitution §21, §23.



Acceptance interpretation:

The project shall not invent or assume an architecture that has not been formally decided.



14\. Data Requirements

DATA-01 — User Identity Data



Requirement:

The system shall associate game data with authenticated user identity.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

User-specific data should have an identifiable relationship to the authenticated account.



DATA-02 — Game-State Persistence



Requirement:

The system shall persist applicable game-state information.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

Established game-state data should be available through subsequent application use according to the existing persistence behaviour.



DATA-03 — Game Entities



Requirement:

The data model shall support the established game entities required by the current functionality, including users, buildings, resources and applicable game-state information.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

The existing gameplay should be representable and persistable without requiring an unsupported external/manual state.



DATA-04 — Exact Schema



Requirement:

The final Firestore schema shall be explicitly documented before the technical specification is considered complete.



Priority: IMPORTANT / OPEN



Source: Constitution §21 and §27.



Acceptance interpretation:

The project documentation should eventually identify the relevant collections/documents and their relationships.



15\. UX Requirements

UX-01 — Game-Oriented Interaction



Requirement:

The user interface shall support the base-building/game interaction model.



Priority: MANDATORY



Source: Constitution §4, §5.



Acceptance interpretation:

The UI should allow users to interact with game entities rather than functioning solely as an administrative dashboard.



UX-02 — DevOps Context



Requirement:

The UI should provide sufficient contextual information for users to understand the DevOps meaning of implemented game entities.



Priority: IMPORTANT



Source: Constitution §5, §6.



Acceptance interpretation:

A user should be able to understand what an implemented DevOps-themed game entity represents.



UX-03 — Progressive Experience



Requirement:

The future UX should support progression from basic to more advanced DevOps concepts.



Priority: DEFERRED



Source: Constitution §4, §15.



Acceptance interpretation:

Future technologies/concepts should be introduced according to an established progression rather than arbitrarily.



UX-04 — Original Visual Language



Requirement:

The interface and environment shall preserve the project's original technology-oriented visual identity.



Priority: IMPORTANT



Source: Constitution §5, §15.



Acceptance interpretation:

The visual design should communicate the project's own technology-city identity without copying commercial-game assets.



16\. AI-Specific Requirements

AI-01 — Builder AI



Requirement:

The current Builder AI shall support its established upgrade-selection behaviour.



Priority: MANDATORY



Source: Constitution §9.



Acceptance interpretation:

The AI should be capable of selecting applicable upgrade actions through its established Resource, Level and Balanced strategies.



AI-02 — AI-Assisted Development Transparency



Requirement:

AI-assisted development tools shall be represented accurately in technical documentation.



Priority: MANDATORY



Source: Constitution §10.



Acceptance interpretation:

Documentation may state that Google AI Studio and Antigravity assisted development, but should not imply that prompting alone constituted the complete engineering contribution.



AI-03 — Future Learning Assistant



Requirement:

A tutorial/chat-buddy mechanism may provide contextual DevOps explanations.



Priority: DEFERRED



Source: Constitution §15.



Acceptance interpretation:

The feature remains future work until implemented and tested.



AI-04 — AI Technology Selection



Requirement:

No additional AI technology shall be treated as a required project dependency merely because it could potentially improve the product.



Priority: MANDATORY



Reason:

The Constitution explicitly prohibits inventing missing technologies and requires future decisions to remain open until established.



Source: Constitution §21, §27.



Acceptance interpretation:

Future AI technologies must be separately approved before becoming project requirements.



17\. Evaluation Requirements

EVAL-01 — Functional Evaluation



Requirement:

The final system shall be evaluated against its implemented functional requirements.



Priority: MANDATORY



Source: Constitution §24.



Acceptance interpretation:

The project should demonstrate which required systems actually work.



EVAL-02 — Educational Evaluation



Requirement:

The project should evaluate whether implemented game mechanics clearly communicate their intended DevOps concepts.



Priority: IMPORTANT



Source: Constitution §6, §24.



Acceptance interpretation:

Evaluation should provide evidence regarding educational clarity rather than assuming gamification automatically produces learning.



EVAL-03 — Usability Evaluation



Requirement:

The completed system should undergo usability evaluation.



Priority: IMPORTANT



Source: Constitution §24.



Acceptance interpretation:

There should be some documented evaluation of whether intended users can understand and use the system.



EVAL-04 — Quantitative Learning Claims



Requirement:

No quantitative claim regarding improved learning, productivity or user performance shall be made unless supported by actual evaluation evidence.



Priority: MANDATORY



Source: Constitution §8, §21.



Acceptance interpretation:

Claims such as "improves learning by X%" require actual measurement before inclusion in documentation/resume/presentation.



18\. Explicit Constraints

CON-01 — Solo Project



The project is owned/developed as a solo major project by Oram (2303031).



Classification: MANDATORY



CON-02 — Existing Foundation



The project shall continue from the existing functional prototype rather than being treated as a completely new project.



Classification: MANDATORY



CON-03 — No Copyrighted Game Copy



The project may use the interaction/progression principles of strategy games but shall not copy commercial game buildings, artwork or other protected assets.



Classification: MANDATORY



CON-04 — No Real Cyberattacks



Attack/infiltration gameplay must remain simulated.



Classification: MANDATORY



CON-05 — Honest Feature Status



Implemented, partial, planned and proposed functionality must remain explicitly distinguishable.



Classification: MANDATORY



CON-06 — No Unsupported Technology Claims



A technology shall not be listed as part of the implemented stack solely because it appears in a proposal, configuration file or discussion.



Classification: MANDATORY



CON-07 — No Production-Readiness Overstatement



The application shall not be described as production-ready without evidence supporting that claim.



Classification: MANDATORY



CON-08 — AI-Assisted Development Honesty



AI-assisted development shall not be represented as equivalent to manually writing every component.



Classification: MANDATORY



19\. Resource Constraints

RES-01 — Development Hardware



The project is constrained by the available personal development computer/environment.



Priority: IMPORTANT



Source: Constitution §27.



RES-02 — Future 3D Hardware



The future 3D development stage may require additional graphics capability and storage.



Priority: DEFERRED



Source: Constitution §15, §22.



RES-03 — Development Time



The project must be developed within the academic major-project timeline.



Priority: MANDATORY



Source: Academic project context and Constitution §22.



Exact remaining schedule: OPEN QUESTION



RES-04 — Incremental Development



Advanced features should be developed incrementally rather than assuming the entire future vision can be implemented simultaneously.



Priority: IMPORTANT



Source: Constitution §15, §22.



20\. Technology Constraints



These are constraints on interpretation, not final architecture decisions.



TECH-01 — Existing Technology Preservation



The current implementation technologies should be recognized as part of the established foundation.



Priority: MANDATORY



Current established technologies include:



React 19

TypeScript

Vite 6

Tailwind CSS

Motion

Express 4

Node.js ecosystem

Firebase Authentication

Cloud Firestore

Git

GitHub

TECH-02 — DevOps Configuration Distinction



The existence of:



Docker Compose

Jenkinsfile

Nginx configuration



shall not automatically imply that those technologies constitute fully operational production infrastructure.



Priority: MANDATORY



TECH-03 — Fable 5 Status



Fable 5 shall currently be treated as a planned 3D asset-development dependency, not as part of the existing runtime stack.



Priority: MANDATORY



TECH-04 — No Premature Technology Selection



Additional technologies required by future development shall not be declared part of the project until requirements/design work establishes the need.



Priority: MANDATORY



21\. Scope Boundaries



The project currently has three distinct scope layers:



┌───────────────────────────────────────────────┐

│          CURRENT FUNCTIONAL FOUNDATION        │

│                                               │

│ Auth + User State + Base + Resources          │

│ Buildings + Upgrades + Builder AI             │

│ Missions + Clan + Fork + Simulation           │

└───────────────────────────────────────────────┘

&#x20;                      │

&#x20;                      ▼

┌───────────────────────────────────────────────┐

│       MAJOR-PROJECT EDUCATIONAL EXPANSION     │

│                                               │

│ Progressive DevOps Learning                   │

│ Technology Unlocking                          │

│ Guided Learning                               │

│ Educational Missions                          │

│ Deeper DevOps Integration                     │

└───────────────────────────────────────────────┘

&#x20;                      │

&#x20;                      ▼

┌───────────────────────────────────────────────┐

│             FUTURE VISUAL EXPANSION           │

│                                               │

│ Technology City                               │

│ Original 3D Buildings                         │

│ Original 3D Units                             │

│ Original Environment                          │

└───────────────────────────────────────────────┘



This separation is important because the lower two layers must not be represented as already completed merely because they form the project's vision.



22\. Out-of-Scope Capabilities



The following are explicitly outside the established scope or currently prohibited from being claimed.



OOS-01 — Real Cyberattack Capability



Status: OUT OF SCOPE



The project shall not become a real-world attack platform.



OOS-02 — Copying Clash of Clans



Status: OUT OF SCOPE



The project shall not reproduce its copyrighted buildings/artwork/assets.



OOS-03 — Claiming Production Infrastructure Without Evidence



Status: OUT OF SCOPE



Configuration files alone do not qualify as evidence of production-grade infrastructure.



OOS-04 — Unsupported Educational Claims



Status: OUT OF SCOPE



The project shall not claim measured educational improvement without evaluation evidence.



OOS-05 — Unapproved Technologies



Status: OUT OF SCOPE



Technologies not established by the project evidence shall not be silently added to the official technology baseline.



OOS-06 — Undefined Large-Scale Multiplayer



Status: UNKNOWN / OUTSIDE CURRENT BASELINE



Large-scale multiplayer has not been sufficiently specified to become a requirement.



23\. Deferred Requirements Register



For clarity, the following are deliberately deferred rather than rejected:



ID	Deferred Capability	Reason

EFR-03	Progressive technology unlocking	Future educational expansion

EFR-04	Docker learning integration	Future educational expansion

EFR-05	Jenkins learning integration	Future educational expansion

EFR-06	Kubernetes learning integration	Future educational expansion

EFR-07	CI/CD learning integration	Future educational expansion

EFR-08	Monitoring learning integration	Future educational expansion

EFR-09	Tutorial/chat-buddy	Proposed future feature

EFR-10	Educational missions	Future expansion

VR-03	Original 3D buildings	Future visual expansion

VR-04	Original 3D units/environment	Future visual expansion

VR-05	Fable 5 asset workflow	Future 3D development

SCALE-03	Quantitative scalability targets	Not yet defined

PERF-02	Quantitative performance targets	Not yet defined

24\. Requirement Priority Summary

Priority	Meaning	Current Interpretation

MANDATORY	Must be satisfied	Core project boundary/current foundation

IMPORTANT	Strongly expected	Important for quality/completion

OPTIONAL	Desirable	Not currently required

DEFERRED	Future phase	Must not be represented as current functionality

Current mandatory foundation



The mandatory current foundation consists primarily of:



Authentication → Individual User → Individual Base → Persistent State → Game Environment → Resources → Buildings → Upgrades → Builders/Builder AI → Missions → Clan/Fork/Simulation



Major-project mandatory direction



The major-project purpose additionally requires:



Gamified DevOps representation → contextual learning → progressive educational development



The exact implementation of future technologies remains subject to later design decisions.



25\. Requirements Traceability Summary



The requirements can be traced back to the project's established objectives.



Goal G1 — Gamified representation of DevOps concepts



Objective:

Develop a gamified platform that represents DevOps infrastructure and concepts through interactive gameplay and progressive game mechanics.



Supported requirements

FR-05 — Interactive Base Environment

FR-06 — Isometric Game Environment

FR-07 — DevOps-Themed Infrastructure

FR-08 — Resource Management

FR-09 — Building Construction

FR-10 — Building Upgrades

FR-12 — Builder Management

FR-13 — Builder AI

FR-15 — Daily Missions

FR-16 — Clan System

FR-19 — Repository Fork Gameplay

FR-20 — Simulated Infiltration

EFR-01 — DevOps Conceptual Representation

UX-01 — Game-Oriented Interaction

Goal G2 — Structured DevOps learning environment



Objective:

Extend the platform into a structured DevOps learning environment through progressive technology integration, guided learning, advanced missions, team interaction and an original 3D technology-city environment.



Supported requirements

EFR-01 — DevOps Conceptual Representation

EFR-02 — Progressive DevOps Learning

EFR-03 — Progressive Technology Unlocking

EFR-04 — Docker Learning Integration

EFR-05 — Jenkins Learning Integration

EFR-06 — Kubernetes Learning Integration

EFR-07 — CI/CD Learning Integration

EFR-08 — Monitoring Learning Integration

EFR-09 — Guided Learning

EFR-10 — Educational Missions

UX-02 — DevOps Context

UX-03 — Progressive Experience

Goal G3 — Functional and individually persistent software platform



Although not written as a separate primary objective in the Constitution, this is necessary to support the existing project.



Supported requirements

FR-01 — User Authentication

FR-02 — Individual User Identity

FR-03 — Individual Base Initialization

FR-04 — Persistent Game State

REL-01 — Persistent User State

REL-02 — Authentication-to-Game Continuity

DATA-01 — User Identity Data

DATA-02 — Game-State Persistence

DEP-01 — Runnable Application

DEP-02 — Authentication Service Availability

DEP-03 — Persistent Storage Availability

Goal G4 — Original technology-oriented game world

Supported requirements

VR-01 — Original Visual Identity

VR-02 — Technology-City Direction

VR-03 — Original 3D Buildings

VR-04 — Original 3D Units and Environment

VR-05 — Fable 5 Asset Development

UX-04 — Original Visual Language



The last four are primarily future/deferred requirements.



Goal G5 — Responsible and technically credible engineering

Supported requirements

SEC-01 — Authenticated Access

SEC-02 — User-Specific State Isolation

SEC-03 — Secrets Protection

SEC-04 — Simulated Attack Boundary

MAINT-01 — Incremental Development

MAINT-02 — Current/Future Separation

MAINT-03 — Honest AI-Assisted Attribution

TEST-01 through TEST-06

DEP-04 — Production-Readiness Boundary

TECH-04 — No Premature Technology Selection

EVAL-04 — No Unsupported Quantitative Claims

26\. Requirements Baseline — Current vs Future



The most important distinction for all subsequent project work is:



CURRENT REQUIREMENT BASELINE

Authentication

&#x20;      ↓

Individual user identity

&#x20;      ↓

Individual Town Hall/base

&#x20;      ↓

Persistent game state

&#x20;      ↓

Isometric game environment

&#x20;      ↓

DevOps-themed buildings

&#x20;      ↓

Resources

&#x20;      ↓

Construction / upgrades

&#x20;      ↓

Builder management + Builder AI

&#x20;      ↓

Daily missions

&#x20;      ↓

Clan system

&#x20;      ↓

Repository-fork gameplay

&#x20;      ↓

Simulated infiltration

&#x20;      ↓

Orchestration / pipeline simulation

MAJOR-PROJECT EXPANSION

Current Game Foundation

&#x20;       ↓

Structured DevOps Learning

&#x20;       ↓

Progressive Concept Introduction

&#x20;       ↓

Technology Unlocking

&#x20;       ↓

Guided Learning

&#x20;       ↓

Educational Missions

&#x20;       ↓

Deeper DevOps Integration

FUTURE VISUAL EXPANSION

Existing Isometric Environment

&#x20;       ↓

Technology-City Environment

&#x20;       ↓

Original 3D Buildings

&#x20;       ↓

Original 3D Units

&#x20;       ↓

Original 3D Environment

&#x20;       ↓

Fable 5 Asset Workflow

27\. Requirements That Remain Intentionally Undefined



The Constitution does not yet establish enough information to define the following precisely:



exact performance targets

exact scalability targets

exact concurrent-user target

exact educational evaluation methodology

exact usability evaluation methodology

exact final progression levels

exact technology-unlock sequence

exact DevOps concept-to-game mapping for every future technology

exact tutorial/chat-buddy behaviour

exact educational mission catalogue

exact final clan/team-learning behaviour

exact 3D asset requirements

exact final rendering/runtime technology

exact Fable 5 asset pipeline

exact deployment architecture

exact Firestore schema

exact API contracts

exact security-rule specification

exact final production environment



These are not missing requirements to be guessed. They are future specification decisions.



28\. Final Requirements Position



The verified requirements establish a clear boundary:



DevOps COT must remain a functional, individually persistent, browser-based gamified DevOps environment while evolving toward a structured educational experience.



The current system already establishes the gameplay foundation:



authentication + individual state + base + resources + infrastructure + upgrades + Builder AI + missions + clan + fork + simulated operations.



The major-project development is primarily concerned with turning that foundation into a stronger DevOps learning system, rather than merely adding more game mechanics.



The future visual direction adds a second major dimension:



original futuristic technology-city + original 3D buildings + original 3D units/environment, with Fable 5 planned as part of the asset-development workflow.



And the following boundaries are non-negotiable:



No real cyberattack capability.

No copying of commercial game assets.

No unsupported technologies or claims.

No treating proposals as implemented functionality.

No claiming production readiness without evidence.

No pretending AI-assisted development was entirely manual development.



This document therefore provides the requirements baseline, but intentionally leaves architecture, detailed system design, technology additions, implementation strategy and final 3D pipeline for subsequent project stages.
