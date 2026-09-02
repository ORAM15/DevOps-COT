FINAL ARCHITECTURE SPECIFICATION
DevOps COT — Clashing DevTools

Project Owner: Oram (2303031)
Project Type: B.Tech. Major Project
Institution: Guru Nanak Dev Engineering College, Ludhiana
Architecture Status: FINAL BASELINE
Architecture Basis: Approved Project Constitution + Requirements & Constraints Specification
Scope: Current functional foundation + approved major-project direction
Architectural Change Policy: This architecture is the baseline architecture. Changes to it require an explicit architectural change request approved by the project owner.

0. Architectural Principles

The architecture is governed by the following principles.

P1 — Requirements before technology

No component or technology is introduced merely because it is popular. Every architectural component must trace to an established requirement.

P2 — Continue the existing project

The architecture extends the existing functional prototype rather than replacing it with an unrelated architecture.

P3 — Separate gameplay from learning

The game is the interaction mechanism; DevOps learning is the educational purpose. They must remain conceptually separable so that gameplay logic does not become inseparable from educational content.

P4 — User state belongs to the authenticated user

Game state must remain associated with an authenticated user identity.

P5 — Simulation remains simulation

The infiltration/attack mechanic is a game simulation. The architecture must not provide a path from the game into real-world cyberattack execution.

P6 — Original visual identity

The architecture must support original game assets and must not depend on copied commercial-game assets.

P7 — Current and future systems remain distinguishable

Future Docker/Jenkins/Kubernetes/CI-CD/monitoring learning systems, the tutorial/chat-buddy, and the future 3D environment are not silently treated as existing functionality.

P8 — AI assistance is not automatically runtime AI

Google AI Studio and Antigravity are development tools. They are not architectural runtime dependencies merely because they assisted development.

P9 — Do not prematurely solve undefined problems

Where the requirements leave rendering, scalability, deployment topology or future LLM architecture undefined, the architecture records the uncertainty instead of inventing a solution.

1. System Context
1.1 System boundary

DevOps COT is a browser-based gamified DevOps learning and interaction platform.

At the highest level:

                         ┌─────────────────────────┐
                         │         PLAYER          │
                         │                         │
                         │ Authenticate            │
                         │ Manage base             │
                         │ Manage resources        │
                         │ Upgrade infrastructure  │
                         │ Perform missions        │
                         │ Interact with clan       │
                         │ Perform simulations     │
                         └────────────┬────────────┘
                                      │
                                      ▼
                    ┌─────────────────────────────────┐
                    │          DEVOPS COT             │
                    │                                 │
                    │ Browser Application             │
                    │                                 │
                    │ Gameplay                        │
                    │ DevOps representations          │
                    │ User state                      │
                    │ Progression                     │
                    │ Simulated operations            │
                    └───────────────┬─────────────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     ▼                             ▼
          ┌──────────────────┐          ┌──────────────────┐
          │ Firebase         │          │ Application      │
          │ Authentication   │          │ Server           │
          │                  │          │ Express          │
          └──────────────────┘          └────────┬─────────┘
                                                │
                                                ▼
                                      ┌──────────────────┐
                                      │ Pipeline Status   │
                                      │ Simulation        │
                                      └──────────────────┘

                     ┌─────────────────────────────┐
                     │ Cloud Firestore            │
                     │ Persistent user/game state │
                     └─────────────────────────────┘
2. Architectural Scope

The final architecture covers:

browser client
application/game layer
Firebase authentication
Firestore persistence
Express application server
simulated pipeline-status interaction
game-state management
gameplay systems
Builder AI
mission system
clan/repository-fork systems
security boundaries
testing
deployment
observability
future educational-extension boundaries
future 3D-asset integration boundary

It does not prematurely define:

a new game engine
a new database
a microservice architecture
Kubernetes infrastructure
a production-grade CI/CD platform
an LLM runtime
a specific 3D rendering engine
a multiplayer networking architecture
a new cloud provider

because these are not currently required or sufficiently specified.

3. High-Level Architecture

The system follows a client-centric web application architecture with managed authentication/persistence and a lightweight application server.

                         USER
                           │
                           ▼
                 ┌──────────────────┐
                 │ Browser          │
                 │                  │
                 │ React UI         │
                 │ Game UI          │
                 │ HUD              │
                 │ Game interaction │
                 └────────┬─────────┘
                          │
               ┌──────────┴──────────┐
               │                     │
               ▼                     ▼
     ┌──────────────────┐   ┌────────────────────┐
     │ Firebase         │   │ Express Server     │
     │ Authentication   │   │                    │
     └────────┬─────────┘   │ Simulation/API     │
              │             └─────────┬──────────┘
              ▼                       │
     ┌──────────────────┐             ▼
     │ Firebase UID     │    ┌────────────────────┐
     │ User Identity    │    │ Pipeline Status    │
     └────────┬─────────┘    │ Simulation         │
              │              └────────────────────┘
              ▼
     ┌──────────────────┐
     │ Cloud Firestore  │
     │                  │
     │ User/game state  │
     └──────────────────┘

The architecture intentionally avoids introducing a separate backend service for every game subsystem.

4. Component Architecture

The logical application is divided into the following components.

┌────────────────────────────────────────────────────────────┐
│                     DEVOPS COT APPLICATION                  │
│                                                            │
│ ┌────────────────────────────────────────────────────────┐ │
│ │                    PRESENTATION LAYER                   │ │
│ │                                                        │ │
│ │ React Application                                      │ │
│ │ ├── HUD / Resource Bar                                 │ │
│ │ ├── Isometric Grid                                     │ │
│ │ ├── Building Panels                                    │ │
│ │ ├── Building Information                               │ │
│ │ ├── Builder Management                                 │ │
│ │ ├── Clan Panel                                         │ │
│ │ ├── Daily Missions                                     │ │
│ │ ├── Attack Interface                                   │ │
│ │ └── Orchestration Interface                            │ │
│ └───────────────────────────┬────────────────────────────┘ │
│                             │                              │
│ ┌───────────────────────────▼────────────────────────────┐ │
│ │                     GAME DOMAIN                         │ │
│ │                                                        │ │
│ │ User/Game State                                        │ │
│ │ Building System                                        │ │
│ │ Resource System                                        │ │
│ │ Upgrade System                                         │ │
│ │ Builder System                                         │ │
│ │ Builder AI                                             │ │
│ │ Mission System                                         │ │
│ │ Clan System                                            │ │
│ │ Repository Fork System                                 │ │
│ │ Infiltration Simulation                                │ │
│ │ Orchestration State                                    │ │
│ └───────────────┬─────────────────────┬──────────────────┘ │
│                 │                     │                    │
│                 ▼                     ▼                    │
│       ┌──────────────────┐   ┌─────────────────────┐     │
│       │ Firebase Client  │   │ Application API     │     │
│       │ Integration      │   │ Client              │     │
│       └────────┬─────────┘   └──────────┬──────────┘     │
└────────────────┼────────────────────────┼────────────────┘
                 │                        │
                 ▼                        ▼
       Firebase Authentication      Express Server
                 │                        │
                 ▼                        ▼
          Cloud Firestore        Pipeline Simulation
5. Component Responsibilities
5.1 Presentation Layer
Responsibility

The presentation layer is responsible for displaying and receiving interaction with the game.

It includes the established interface components such as:

Resource Bar
Isometric Grid
Building Panel
Building Information
Builder Management
Clan Panel
Daily Missions
Attack Button/interface
Orchestration Panel
Tooltip/UI components
It must NOT

The presentation layer should not become the authoritative storage location for persistent user state.

6. Game Domain Layer

The game domain represents the actual rules of DevOps COT.

6.1 User/Game State

Responsible for:

current authenticated player association
Town Hall/base state
buildings
resources
progression-related game state
applicable game interactions
6.2 Building System

Responsible for:

building entities
building placement
construction state
building level
building costs
building production characteristics
building removal
building skin/state where applicable

Established buildings include:

Main Repository / Town Hall
Git Base
Jenkins Lab
Docker Yard
Nginx Web Server
Storage Vault

These are game entities representing DevOps infrastructure, not necessarily direct deployments of those technologies.

6.3 Resource System

Responsible for the established game resources:

BuildPower
Containers
Data

It controls resource-related game state and their use in applicable construction/upgrade/game operations.

6.4 Upgrade System

Responsible for:

validating upgrade actions
applying applicable costs
changing building progression state
coordinating with builder availability
maintaining valid game state
6.5 Builder System

Responsible for:

builder availability
construction/upgrade activity
builder management
applicable construction states
7. Builder AI Architecture

The Builder AI is a game-domain decision component, not an external LLM architecture.

             Current Game State
                    │
                    ▼
          ┌─────────────────────┐
          │    Builder AI       │
          │                     │
          │ Resource Strategy   │
          │ Level Strategy      │
          │ Balanced Strategy   │
          └──────────┬──────────┘
                     │
                     ▼
              Upgrade Selection
                     │
                     ▼
              Upgrade System
Decision

Builder AI remains a deterministic/game-strategy component.

Why required

FR-13 and FR-14 explicitly require Builder AI and its established strategies.

Alternatives considered

External LLM-based agent

Not required for the current Builder AI requirement.

Rule/strategy-based game AI

Already consistent with the established functionality.

Trade-off

A rule-based strategy is less general than an LLM agent, but it is:

predictable
easier to test
directly aligned with the current requirement
less computationally complex
independent of external AI services
Consequence

No runtime LLM dependency is required for Builder AI.

Requirements satisfied
FR-13
FR-14
AI-01
NFR-03
TEST-04
8. Authentication Architecture

The approved authentication architecture uses Firebase Authentication.

USER
 │
 ▼
React Application
 │
 ▼
Firebase Authentication
 │
 ▼
Authenticated Identity
 │
 ▼
Firebase UID
 │
 ├──────────────► Application/Game State
 │
 └──────────────► Firestore User/Game Data
Authentication responsibilities

Firebase Authentication is responsible for establishing the authenticated identity.

The application uses that identity to associate the player with their game environment.

Firestore stores the corresponding persistent user/game state.

9. Authorization Architecture

The project requires user-specific state isolation.

The conceptual authorization boundary is:

Authenticated User
       │
       ▼
 Firebase UID
       │
       ▼
User's authorized game state
       │
       ▼
Read / update applicable state

The architecture does not introduce a separate authorization server because the requirements do not require one.

The detailed Firestore security-rule implementation must enforce the intended user-state boundary.

Important architectural constraint

A user must not be able to treat another user's game state as their own simply by manipulating client-side state.

10. Data Architecture

The project's persistent data architecture is based on Cloud Firestore.

At the logical level:

                 Firebase Authentication
                           │
                           │ UID
                           ▼
                  ┌──────────────────┐
                  │ User/Game State  │
                  └────────┬─────────┘
                           │
          ┌────────────────┼─────────────────┐
          ▼                ▼                 ▼
      Buildings         Resources        Progression
          │                │                 │
          └────────────────┴─────────────────┘
                           │
                           ▼
                     Game State

The exact physical Firestore collection/document schema is not defined by the approved requirements.

Therefore:

The architecture specifies logical data ownership, not an invented Firestore schema.

11. Logical Data Model

The minimum logical entities established by the requirements are:

User
 │
 └── GameState
      │
      ├── TownHall / MainRepository
      │
      ├── Buildings
      │
      ├── Resources
      │
      ├── Builders
      │
      ├── Missions
      │
      ├── Clan State
      │
      └── Other established gameplay state

The architecture deliberately does not define fields that have not been established.

12. Data Ownership
Data	Authority
Authentication identity	Firebase Authentication
Persistent user/game state	Cloud Firestore
Current UI state	React application
Game rules	Game domain
Builder AI decisions	Builder AI/game domain
Simulated pipeline status	Express/application simulation
Static game definitions	Application/game configuration

The exact division between static configuration and persisted data may be refined during implementation without changing this architectural boundary.

13. Application Architecture

The application follows:

Presentation
     │
     ▼
Game Domain
     │
     ├──────────────► Firebase Integration
     │                       │
     │                       ▼
     │                 Firestore
     │
     └──────────────► API Integration
                             │
                             ▼
                       Express Server
                             │
                             ▼
                    Pipeline Simulation

The React application is therefore not merely a static frontend.

It contains the interactive game experience and coordinates the established application integrations.

14. API Architecture

The requirements establish an Express-based application server and a simulated pipeline-status endpoint.

The API architecture is intentionally small.

React Application
       │
       │ HTTP/API interaction
       ▼
Express Server
       │
       ▼
Pipeline Status Simulation
       │
       ▼
Simulated Pipeline Result
       │
       ▼
React Application
API responsibility

The Express layer is responsible for the established application-server functionality, including the pipeline-status simulation.

It does not become a generic microservice platform.

15. Pipeline Simulation Boundary

The pipeline simulation has an explicit boundary:

┌──────────────────────────────┐
│       DEVOPS COT GAME        │
│                              │
│ Game pipeline representation │
│            │                 │
│            ▼                 │
│ Simulated pipeline state     │
│            │                 │
│            ▼                 │
│ Game result / UI             │
└──────────────────────────────┘

             X

┌──────────────────────────────┐
│ REAL-WORLD INFRASTRUCTURE    │
│                              │
│ No unauthorized interaction  │
│ No real attack execution     │
└──────────────────────────────┘

This is a major architectural invariant.

16. Clan Architecture

The clan system is a game-domain subsystem.

Authenticated Player
        │
        ▼
    Clan State
        │
        ├── Leader
        ├── Demonstration Members
        ├── Levels
        ├── Trophies
        └── Contributions

The established demonstration clan is:

ID Hunters

The architecture treats this as gameplay data, not as a real-world organizational identity system.

17. Repository Fork Architecture

Repository forking is a game mechanic.

Player
  │
  ▼
Repository/Fork Interaction
  │
  ▼
Game Logic
  │
  ├── Validate action
  ├── Calculate outcome
  └── Award applicable game values
          │
          ▼
      Game State

The architecture does not require actual GitHub repository forking as part of this mechanic.

This distinction is important.

The project may represent repository concepts through gameplay without making the game itself a Git hosting client.

18. Mission Architecture
Game State
    │
    ▼
Mission System
    │
    ├── Resource collection
    ├── Upgrade objectives
    ├── Repository fork objectives
    └── Infiltration objectives
    │
    ▼
Mission Result
    │
    ▼
Game Progress / Rewards

The existing mission system remains part of the game domain.

Future educational missions are an extension of this architecture rather than a separate application.

19. Educational Architecture

The educational architecture is deliberately separated conceptually from the game engine.

             GAME PROGRESSION
                    │
                    ▼
           ┌──────────────────┐
           │ Learning Context │
           └────────┬─────────┘
                    │
                    ▼
           DevOps Concept
                    │
                    ▼
             Game Interaction
                    │
                    ▼
              User Learning

The major-project objective is not merely:

"Add more buildings."

It is:

Use game progression and interaction to contextualize DevOps concepts.

20. Future Technology Learning Architecture

The intended future direction allows:

Town Hall / Progression
          │
          ▼
Technology Unlock
          │
          ▼
Educational Explanation
          │
          ▼
Game Interaction
          │
          ▼
Conceptual Understanding

Potential technologies established as future directions include:

Docker
Jenkins
Kubernetes
CI/CD
monitoring

These are DEFERRED, not current architectural runtime dependencies.

21. Tutorial / Chat-Buddy Architecture

The tutorial/chat-buddy is future functionality.

Therefore the final architecture establishes only an extension boundary:

Game Progression
       │
       ▼
Concept Unlocked
       │
       ▼
Learning Assistant Extension
       │
       ▼
Contextual Explanation
Runtime LLM decision

OPEN QUESTION

The approved architecture does not select:

Gemini
OpenAI
another LLM provider
local model
agent framework

as the runtime architecture for the future chat-buddy.

Why?

The requirement establishes the need for guided learning, but does not establish which AI technology must implement it.

Selecting one now would violate the requirement not to introduce technologies prematurely.

22. AI Architecture Classification

There are therefore two separate AI categories.

Current
Builder AI
     │
     ├── Resource strategy
     ├── Level strategy
     └── Balanced strategy

Status: APPROVED DECISION

Future
Tutorial / Chat-Buddy
          │
          ▼
     AI/LLM layer

Status: OPEN QUESTION

This prevents the common architectural mistake of assuming that because the project is "AI-assisted" during development, every runtime AI feature must use an LLM.

23. 3D Architecture

The future project vision includes:

technology-city environment
original 3D buildings
original 3D units
original environmental assets

The architectural boundary is:

                Game Domain
                    │
                    ▼
              World State
                    │
                    ▼
          ┌──────────────────┐
          │ Visual Asset     │
          │ Integration      │
          └────────┬─────────┘
                   │
                   ▼
          3D Buildings / Units
          / Environment
Fable 5

Classification: APPROVED FUTURE DIRECTION / DEFERRED

Fable 5 is established as part of the planned 3D asset-development workflow.

It is not currently declared as a browser runtime/rendering engine.

24. 3D Rendering Engine

Classification: OPEN QUESTION

The requirements establish the need for future 3D assets, but they do not establish the final runtime rendering technology.

Therefore this architecture deliberately does not select:

Three.js
Babylon.js
Unity
Unreal Engine
another rendering engine

at this stage.

This is not an omission. It is an intentional architectural boundary.

25. Visual Asset Pipeline

The future asset pipeline is conceptually:

Project Concept
      │
      ▼
Original Asset Design
      │
      ▼
Fable 5 / 3D Asset Workflow
      │
      ▼
Original 3D Asset
      │
      ▼
Game Asset Integration
      │
      ▼
Game World

The pipeline must preserve the original-asset constraint.

26. Deployment Architecture

The approved deployment architecture is intentionally conservative.

                USER
                  │
                  ▼
             Web Browser
                  │
                  ▼
        ┌───────────────────┐
        │ Web Application   │
        │ React/Vite        │
        └─────────┬─────────┘
                  │
          ┌───────┴────────┐
          ▼                ▼
 Firebase Services    Express Server
          │                │
          ▼                ▼
    Firestore          Simulation

The exact hosting provider/topology for every application component is not sufficiently established in the requirements.

Therefore:

Deployment platform

OPEN QUESTION where not explicitly established.

Production topology

OPEN QUESTION.

Production readiness

NOT CLAIMED.

27. Existing Deployment/Configuration Artifacts

The repository contains:

docker-compose.yml
Jenkinsfile
nginx.conf

These remain part of the project engineering foundation.

However:

Configuration file
       ≠
Operational production infrastructure

Therefore these files cannot, by themselves, establish:

production deployment
operational Jenkins CI/CD
container orchestration
production reverse proxy infrastructure
Kubernetes deployment
28. DevOps Tool Architecture

The project uses DevOps technologies in two different ways.

Current engineering/configuration foundation
Git/GitHub
Docker Compose
Jenkinsfile
Nginx configuration
Future educational integration
Docker
Jenkins
Kubernetes
CI/CD
Monitoring

The second category must not be confused with the first.

For example:

Having a Jenkinsfile does not mean that Jenkins-based educational gameplay has already been implemented.

29. Security Architecture

The security architecture is based on four major boundaries.

             ┌─────────────────────┐
             │       USER           │
             └──────────┬──────────┘
                        │
                        ▼
             ┌─────────────────────┐
             │ Firebase Auth       │
             └──────────┬──────────┘
                        │
                        │ UID
                        ▼
             ┌─────────────────────┐
             │ User Game State     │
             │ / Firestore         │
             └─────────────────────┘


             ┌─────────────────────┐
             │ Game Simulation      │
             │ Boundary             │
             └──────────┬──────────┘
                        │
                        X
                Real-world attacks
30. Trust Boundaries
TB-01 — Unauthenticated Browser → Application

Before authentication, the user cannot be trusted as an identified player.

TB-02 — Authenticated User → User State

Firebase identity establishes the user's identity.

TB-03 — Client → Persistent Data

The client must not be considered authoritative merely because it contains UI/game state.

Persistent data access must respect the established user boundary.

TB-04 — Client → Express API

The application server is a separate trust boundary from browser-side interaction.

TB-05 — Game Simulation → Real World

This is the strongest boundary.

The simulated attack/infiltration system must terminate inside the game environment.

31. Secrets Architecture

Environment-based configuration is part of the established repository structure.

The architecture therefore follows:

Source Code
     │
     X
Hard-coded secrets
     
Environment / Secret Configuration
     │
     ▼
Application Runtime

Actual secret values must not be committed to the repository.

The architecture does not prescribe an additional secrets-management service because one is not required by the approved requirements.

32. Observability Architecture

Current observability is primarily application/game-oriented.

Application / Game Activity
          │
          ▼
    Status / Logs
          │
          ▼
       UI Layer

The established system includes system-log/status presentation and pipeline-status simulation.

This is different from a full production observability platform.

33. Future Monitoring Architecture

Monitoring is a future educational concept.

The future conceptual architecture is:

Game Environment
      │
      ▼
Operational State
      │
      ▼
Monitoring Concept
      │
      ▼
Game Representation
      │
      ▼
Educational Feedback

No production monitoring stack is selected by this architecture.

34. Failure-Handling Architecture

Failure handling follows the principle that invalid operations must not corrupt persistent game state.

User Action
    │
    ▼
Validate Operation
    │
    ├──── Invalid ────► Reject / report
    │
    ▼
Valid Operation
    │
    ▼
Update Game State
    │
    ▼
Persist State

Examples include:

insufficient resources
unavailable builder
invalid building operation
invalid upgrade
invalid game interaction

The exact error-message UX is an implementation detail unless subsequently elevated to an architectural requirement.

35. Persistence Failure

Conceptually:

Game Operation
      │
      ▼
State Update
      │
      ▼
Persistence
      │
   ┌──┴──┐
   │     │
Success Failure
   │     │
   ▼     ▼
Confirm  Handle error
state    without falsely
         claiming persistence

The system must not report a persistent operation as successful if persistence has failed.

36. Authentication Failure
Authentication Request
        │
        ▼
Firebase Authentication
        │
   ┌────┴────┐
   │         │
Success     Failure
   │         │
   ▼         ▼
Enter       Remain outside
Game        authenticated game
37. API Failure
Game/UI
  │
  ▼
Express API
  │
 ┌┴────────────┐
 │             │
Success       Failure
 │             │
 ▼             ▼
Use result   Handle/display
             unavailable result

The application must not interpret an unavailable simulated pipeline response as a successful operational result.

38. State Invariants

The following are major architectural invariants.

INV-01 — User identity invariant

Every persistent user-specific game state must be associated with an authenticated identity.

INV-02 — User isolation invariant

One user's game state must not simply become another user's game state.

INV-03 — Resource invariant

Game operations must preserve valid resource state.

INV-04 — Upgrade invariant

An upgrade cannot be applied if the established game rules do not permit it.

INV-05 — Builder invariant

Construction/upgrade activity must respect established builder availability/state.

INV-06 — Simulation invariant

Infiltration/attack mechanics operate only inside the simulated game environment.

INV-07 — Educational integrity invariant

A DevOps concept must not be claimed as educationally integrated until an actual game/learning mechanism represents it.

INV-08 — Feature-status invariant

Planned functionality must not be represented as implemented.

INV-09 — Asset originality invariant

Future 3D/game assets must preserve the project's original visual identity.

INV-10 — AI transparency invariant

AI-assisted development must not be represented as exclusively manual implementation.

39. Control Flow

The primary user control flow is:

Open Application
      │
      ▼
Authenticate
      │
      ▼
Identify User
      │
      ▼
Load / Initialize User Game State
      │
      ▼
Enter Base
      │
      ├─────────────┐
      ▼             ▼
Manage Base       Missions
      │             │
      ▼             ▼
Resources        Rewards
      │
      ▼
Buildings
      │
      ▼
Upgrades
      │
      ▼
Builder / Builder AI
      │
      ▼
Clan / Fork / Simulation
      │
      ▼
Persist Applicable State
40. Authentication Data Flow
User
 │
 ▼
Browser
 │
 ▼
Firebase Authentication
 │
 ▼
Firebase UID
 │
 ├─────────────► Application identity
 │
 └─────────────► Firestore state association
                         │
                         ▼
                  Individual Base
41. Building Data Flow
User selects building
          │
          ▼
Presentation Layer
          │
          ▼
Building Domain Logic
          │
          ├── Validate
          ├── Calculate applicable cost/state
          └── Update game state
          │
          ▼
Persistent State
          │
          ▼
Updated UI
42. Upgrade Data Flow
Building
   │
   ▼
Upgrade Request
   │
   ▼
Upgrade Validation
   │
   ├── Resource availability
   ├── Builder availability
   └── Applicable game conditions
   │
   ▼
Upgrade State
   │
   ▼
Persistence
   │
   ▼
UI Update
43. Builder AI Control Flow
Current Base State
       │
       ▼
Available Upgrade Candidates
       │
       ▼
Selected Strategy
       │
 ┌─────┼────────┐
 ▼     ▼        ▼
Resource Level Balanced
       │
       ▼
Candidate Evaluation
       │
       ▼
Upgrade Selection
       │
       ▼
Builder / Upgrade System
44. Repository Fork Control Flow
Player
  │
  ▼
Select Repository/Fork Action
  │
  ▼
Game Validation
  │
  ▼
Simulated Fork Operation
  │
  ▼
Game Outcome
  │
  ▼
Applicable Rewards / Reputation
  │
  ▼
Game State
45. Infiltration Control Flow
Player
  │
  ▼
Initiate Infiltration
  │
  ▼
Game Simulation
  │
  ▼
Pipeline-Infiltration Result
  │
  ▼
Game Outcome
  │
  ├── Resources
  └── Experience where applicable
  │
  ▼
Updated Game State

No path exists architecturally from this flow to real-world attack execution.

46. Integration Architecture

The current integration landscape is:

                    DEVOPS COT
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
      Firebase       Firestore      Express
        Auth            │             │
          │             │             ▼
          └──────┬──────┘       Pipeline Simulation
                 │
                 ▼
            User/Game State

External development services/tools such as Google AI Studio and Antigravity are development-time dependencies, not necessarily runtime application integrations.

47. External Dependency Classification
Technology / Service	Classification	Architectural Role
React	APPROVED DECISION	UI/application layer
TypeScript	APPROVED DECISION	Application language
Vite	APPROVED DECISION	Frontend build/development tooling
Tailwind CSS	APPROVED DECISION	UI styling
Motion	APPROVED DECISION	UI animation
Express	APPROVED DECISION	Application server/API
Node.js	APPROVED DECISION	Server/runtime environment
Firebase Authentication	APPROVED DECISION	Authentication
Cloud Firestore	APPROVED DECISION	Persistent user/game state
Git	APPROVED DECISION	Version control
GitHub	APPROVED DECISION	Repository/version-control platform
Docker Compose	APPROVED FOUNDATION	Existing project DevOps configuration
Jenkinsfile	APPROVED FOUNDATION	Existing CI/CD-oriented configuration
Nginx configuration	APPROVED FOUNDATION	Existing web/deployment configuration
Google AI Studio	APPROVED DEVELOPMENT TOOL	AI-assisted development
Antigravity	APPROVED DEVELOPMENT TOOL	AI-assisted development
Fable 5	APPROVED FUTURE DIRECTION	Planned 3D asset development
Runtime LLM provider	OPEN QUESTION	Future chat-buddy
3D rendering engine	OPEN QUESTION	Future 3D runtime
Kubernetes	DEFERRED	Future educational concept
Jenkins runtime integration	DEFERRED	Future educational concept
Docker runtime educational integration	DEFERRED	Future educational concept
Monitoring stack	DEFERRED / OPEN	Future educational concept
CI/CD implementation stack	DEFERRED / OPEN	Future educational concept
48. Technologies Explicitly Not Required by Current Architecture

The following are NOT REQUIRED merely to satisfy the approved requirements:

Microservices

Not required because the project does not establish independent service boundaries requiring them.

Separate API gateway

Not required.

Redis/cache

Not required by the requirements.

Message queue

Not required.

Kubernetes

Not required for the current runtime architecture.

Separate relational database

Not required because Firestore is already the approved persistence technology.

Dedicated game engine

Not currently required.

Runtime LLM

Not required for current Builder AI.

Dedicated multiplayer server

Not required by the currently defined requirements.

Real Git hosting integration

Not required for the repository-fork game mechanic.

Real cyberattack infrastructure

Explicitly prohibited.

49. Testing Architecture

Testing follows the architectural layers.

                    TESTING
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
    UI/Flow         Game Logic     Integration
        │              │              │
        ▼              ▼              ▼
 Authentication    Resources       Firebase
 Building          Upgrades        Firestore
 Missions           AI             Express
 Clan              Simulation
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                End-to-End Flow
                       │
                       ▼
                Final Evaluation
50. Test Boundaries
Authentication

Verify:

Authentication → UID → Game Entry
Persistence

Verify:

Game Operation → Firestore → Retrieval
Game systems

Verify:

resource operations
building operations
upgrades
builders
Builder AI
missions
clan
repository fork
infiltration simulation
Integration

Verify:

React ↔ Firebase
React ↔ Express
Express ↔ Simulation
51. Deployment Testing

The deployment test must verify that the target deployment environment supports:

application loading
authentication
individual user initialization
persistent state
established game interactions

A deployment configuration file alone is not sufficient evidence.

52. Observability Testing

The testing process should verify that established system status/log presentation does not falsely represent unavailable operations as successful.

53. Architecture Decision Records
ADR-01 — React-based browser application
Decision

Retain the existing React browser application as the primary client architecture.

Why required

The current application is already implemented as a browser-based React application.

Alternatives considered

A dedicated native application or game engine.

Trade-offs

A browser application provides straightforward accessibility but is not equivalent to a dedicated high-performance game engine.

Consequences

The current project remains web-based.

Requirements satisfied

FR-05, DEP-01, UX-01.

Technology classification

React — APPROVED DECISION

54. ADR-02 — TypeScript
Decision

Retain TypeScript for application development.

Why required

It is part of the established implementation.

Alternatives considered

JavaScript-only implementation.

Trade-off

TypeScript introduces compilation/type-checking overhead but provides stronger type safety for the existing application.

Consequences

Existing TypeScript code remains the implementation baseline.

Requirements satisfied

Maintainability, testing, existing implementation continuity.

Classification

APPROVED DECISION

55. ADR-03 — Firebase Authentication
Decision

Use Firebase Authentication for established authentication.

Why required

Authentication and individual identity are mandatory requirements and Firebase Authentication is already established.

Alternatives considered

Custom authentication system.

Trade-offs

Firebase reduces custom authentication implementation but introduces dependency on Firebase.

Consequences

User identity is externally managed by Firebase Authentication.

Requirements satisfied

FR-01, FR-02, SEC-01, REL-02.

Classification

APPROVED DECISION

56. ADR-04 — Cloud Firestore
Decision

Use Cloud Firestore for persistent user/game state.

Why required

Persistent individual game state is mandatory and Firestore is already established.

Alternatives considered

A relational database or another persistence service.

Trade-offs

Firestore fits the existing architecture but its document-oriented model differs from relational data modeling.

Consequences

Game-state persistence remains tied to Firebase infrastructure.

Requirements satisfied

FR-04, DATA-01, DATA-02, REL-01, SCALE-01.

Classification

APPROVED DECISION

57. ADR-05 — Express Application Server
Decision

Retain Express as the application server for the established server/API functionality.

Why required

The current project contains an Express server and an established pipeline-status simulation endpoint.

Alternatives considered

Removing the server and placing all functionality in the browser.

Trade-offs

An Express server introduces another runtime component but provides a clear application API boundary.

Consequences

The deployment must account for the server component where required.

Requirements satisfied

FR-23, API architecture, integration requirements.

Classification

APPROVED DECISION

58. ADR-06 — Firestore Rather Than a New Database
Decision

Do not introduce another database.

Why required

The current requirements already establish persistent storage through Firestore.

Alternatives considered

PostgreSQL, MongoDB, other database systems.

Trade-offs

Avoiding database proliferation reduces complexity.

Consequences

Future data requirements must remain compatible with the established persistence architecture unless an explicit architecture change is approved.

Requirements satisfied

DATA-02, MAINT-01, SCALE-01.

Classification

NOT REQUIRED

for an additional database.

59. ADR-07 — Builder AI as Game Logic
Decision

Builder AI remains a game-strategy subsystem rather than an LLM agent.

Why required

The current requirement only requires upgrade selection through Resource, Level and Balanced strategies.

Alternatives considered

LLM-based agent.

Trade-offs

A deterministic system has less generative flexibility but is easier to validate and more predictable.

Consequences

No runtime AI service is needed for Builder AI.

Requirements satisfied

FR-13, FR-14, AI-01.

Classification

APPROVED DECISION

60. ADR-08 — Future Chat-Buddy Remains Technology-Agnostic
Decision

Do not select an LLM provider or agent framework for the future chat-buddy yet.

Why required

The requirement establishes guided learning but does not specify the implementation technology.

Alternatives considered

Gemini, OpenAI, local LLM, other agent frameworks.

Trade-offs

Leaving the choice open delays implementation detail but prevents premature architectural commitment.

Consequences

The future learning-assistant interface must remain implementable without coupling the current architecture to a specific provider.

Requirements satisfied

EFR-09 while respecting TECH-04.

Classification

OPEN QUESTION

61. ADR-09 — No Dedicated Game Engine Yet
Decision

Do not introduce a dedicated game engine into the current architecture.

Why required

The current game is browser-based and the requirements do not establish a dedicated game-engine dependency.

Alternatives considered

Unity, Unreal Engine, other engines.

Trade-offs

A game engine could provide richer 3D capabilities but would introduce substantial architectural complexity and potentially alter the current browser application model.

Consequences

The current architecture remains web-application based.

Requirements satisfied

FR-05, DEP-01, current continuity requirements.

Classification

NOT REQUIRED currently

62. ADR-10 — Future 3D Rendering Technology Remains Open
Decision

Support future 3D assets without selecting the runtime rendering technology now.

Why required

Original 3D assets are planned, but the requirements do not prescribe a rendering engine.

Alternatives considered

Three.js, Babylon.js, Unity, Unreal, others.

Trade-offs

Leaving it open preserves flexibility but means the exact 3D runtime architecture must be determined before implementation.

Consequences

Future 3D work must include an explicit architecture decision before runtime integration.

Requirements satisfied

VR-02, VR-03, VR-04, VR-05.

Classification

OPEN QUESTION

63. ADR-11 — No Real Cybersecurity Infrastructure
Decision

The attack/infiltration system remains a simulation.

Why required

The Constitution explicitly establishes this boundary.

Alternatives considered

Real penetration-testing infrastructure.

Trade-offs

Simulation provides educational/game interaction without introducing real-world attack capability.

Consequences

The game cannot claim to be a real penetration-testing platform.

Requirements satisfied

FR-20, FR-21, SEC-04, CON-04.

Classification

APPROVED DECISION

64. ADR-12 — No Microservices
Decision

The system will not be decomposed into microservices under the current architecture.

Why required

No requirement establishes independent services, independent scaling or service-level boundaries.

Alternatives considered

Microservice architecture.

Trade-offs

A modular monolith/application architecture is simpler for the current project and academic development context.

Consequences

The application remains architecturally compact.

Requirements satisfied

MAINT-01, TECH-04, resource constraints.

Classification

NOT REQUIRED

65. Architectural Constraints

The final architecture is constrained by:

The project is a solo B.Tech. major project.
The current functional implementation must remain the foundation.
Firebase Authentication remains the established authentication mechanism.
Firestore remains the established persistent state mechanism.
React/TypeScript remain the established application foundation.
Express remains part of the current server/API foundation.
The attack system must remain simulated.
Commercial-game assets must not be copied.
Future 3D assets must be original.
Fable 5 is future asset-development tooling, not a current runtime requirement.
Future LLM technology remains undecided.
Future 3D rendering technology remains undecided.
Docker/Jenkins/Kubernetes/CI/CD/monitoring must not automatically be treated as currently implemented educational systems.
AI-assisted development must be documented honestly.
Production-readiness cannot be inferred from configuration files.
No technology may be added solely because it is fashionable or technically attractive.
Future functionality must remain distinguishable from current functionality.
66. Architectural Dependencies
React Application
       │
       ├─────────────► Firebase Authentication
       │
       ├─────────────► Cloud Firestore
       │
       └─────────────► Express Server
                            │
                            ▼
                    Pipeline Simulation

Development dependencies additionally include:

Developer
   │
   ├── Git
   ├── GitHub
   ├── Google AI Studio
   └── Antigravity

Future development dependencies:

3D Asset Development
        │
        ▼
     Fable 5

Learning Assistant
        │
        ▼
  LLM technology
  [OPEN QUESTION]

3D Runtime
        │
        ▼
Rendering technology
  [OPEN QUESTION]
67. Architecture Consistency Audit

The architecture has been checked against the approved requirements.

Requirement Area	Architectural Support	Status
Authentication	Firebase Authentication	CONSISTENT
User identity	Firebase UID association	CONSISTENT
Individual base	Game-state initialization	CONSISTENT
Persistence	Firestore	CONSISTENT
Base environment	React game layer	CONSISTENT
Isometric environment	Existing game presentation	CONSISTENT
Resources	Game domain	CONSISTENT
Buildings	Building subsystem	CONSISTENT
Upgrades	Upgrade subsystem	CONSISTENT
Builders	Builder subsystem	CONSISTENT
Builder AI	Strategy-based component	CONSISTENT
Missions	Mission subsystem	CONSISTENT
Clan	Clan subsystem	CONSISTENT
Repository fork	Game-domain simulation	CONSISTENT
Infiltration	Isolated simulation	CONSISTENT
Pipeline status	Express simulation endpoint	CONSISTENT
Educational mapping	Learning-context boundary	CONSISTENT
Progressive learning	Future extension	CONSISTENT
Docker/Jenkins/Kubernetes	Deferred educational integration	CONSISTENT
Guided learning	Future extension boundary	CONSISTENT
3D environment	Future asset/rendering boundary	CONSISTENT
Original assets	Architectural invariant	CONSISTENT
Security	Auth + state isolation + simulation boundary	CONSISTENT
Reliability	Persistence/error boundaries	CONSISTENT
Performance	No invented numerical target	CONSISTENT
Scalability	No invented user target	CONSISTENT
Observability	Existing logs/status + future monitoring boundary	CONSISTENT
Maintainability	Modular application/domain separation	CONSISTENT
Testing	Layered testing architecture	CONSISTENT
Deployment	Browser + Firebase + Express boundary	CONSISTENT
Data	Logical Firestore ownership	CONSISTENT
AI	Builder AI separated from future LLM	CONSISTENT
Scope	Current/future separation	CONSISTENT
68. Architecture Gaps That Are Intentionally Open

The architecture is final, but some implementation-level decisions are intentionally unresolved because the requirements do not authorize us to invent them.

These include:

OPEN-01 — Exact Firestore schema

The logical data ownership is defined, but the exact collections/documents/fields are not.

OPEN-02 — Final 3D rendering technology

Required eventually, but not selected.

OPEN-03 — Future chat-buddy implementation

The requirement exists; runtime AI technology does not.

OPEN-04 — Final deployment topology

The system's logical deployment components are defined, but the final hosting topology is not fully established.

OPEN-05 — Quantitative performance targets

No response-time/throughput threshold has been approved.

OPEN-06 — Quantitative scalability target

No concurrent-user target has been approved.

OPEN-07 — Educational evaluation methodology

The need for evaluation is established, but the exact methodology is not.

These are not architectural defects. They are explicit open questions preserved to prevent unsupported architectural commitments.

69. Final Technology Classification
APPROVED DECISION
Runtime/application
React
TypeScript
Vite
Tailwind CSS
Motion
Node.js
Express
Persistence/authentication
Firebase Authentication
Cloud Firestore
Engineering
Git
GitHub
Existing DevOps configuration foundation
Docker Compose
Jenkinsfile
Nginx configuration
Current game AI
Builder AI / established strategy logic
APPROVED DEVELOPMENT TOOLS
Google AI Studio
Antigravity

These are development-assistance technologies, not necessarily runtime application dependencies.

DEFERRED
Docker as deeper educational gameplay
Jenkins as deeper educational gameplay
Kubernetes learning integration
CI/CD learning integration
Monitoring learning integration
Educational mission expansion
Tutorial/chat-buddy implementation
Original 3D buildings
Original 3D units
Original 3D environment
Fable 5 asset workflow
OPEN QUESTION
Future LLM provider/runtime
Future 3D rendering technology
Exact final deployment topology
Exact Firestore physical schema
Quantitative performance requirements
Quantitative scalability requirements
Detailed educational evaluation mechanism
NOT REQUIRED

Unless an approved change request establishes otherwise:

microservices
API gateway
message broker
Redis/cache
second database
dedicated authentication server
dedicated multiplayer server
real cyberattack infrastructure
runtime LLM for Builder AI
dedicated game engine for the current application
Kubernetes as current infrastructure
70. Final Reference Architecture

The architecture can be reduced to this canonical representation:

                         ┌─────────────────────┐
                         │        PLAYER       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   WEB BROWSER       │
                         │                     │
                         │ React + TypeScript  │
                         │ Game UI             │
                         │ Isometric World     │
                         └──────────┬──────────┘
                                    │
                 ┌──────────────────┼──────────────────┐
                 │                  │                  │
                 ▼                  ▼                  ▼
        ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
        │ Firebase Auth  │ │ Game Domain    │ │ Express Server │
        │                │ │                │ │                │
        │ User Identity  │ │ Buildings      │ │ API            │
        │ Firebase UID   │ │ Resources      │ │ Pipeline       │
        └───────┬────────┘ │ Upgrades       │ │ Simulation     │
                │          │ Builders       │ └───────┬────────┘
                │          │ Builder AI     │         │
                │          │ Missions       │         ▼
                │          │ Clan           │ ┌────────────────┐
                │          │ Fork           │ │ Simulated      │
                │          │ Infiltration   │ │ Pipeline State │
                │          └───────┬────────┘ └────────────────┘
                │                  │
                └──────────────────┤
                                   ▼
                         ┌─────────────────────┐
                         │   Cloud Firestore   │
                         │                     │
                         │ User/Game State     │
                         │ Buildings           │
                         │ Resources           │
                         │ Progress            │
                         └─────────────────────┘

And the approved future extension is:

                 CURRENT ARCHITECTURE
                         │
          ┌──────────────┴───────────────┐
          ▼                              ▼
 DevOps Learning Layer             Visual Expansion
          │                              │
          ▼                              ▼
 Progressive Concepts             Original 3D Assets
          │                              │
          ├── Docker                     ├── Buildings
          ├── Jenkins                    ├── Units
          ├── Kubernetes                 └── Environment
          ├── CI/CD                             │
          └── Monitoring                        ▼
          │                                  Fable 5
          ▼
 Tutorial / Chat-Buddy
          │
          ▼
   [LLM technology OPEN]
71. Final Architectural Position

DevOps COT is architecturally a browser-based, authenticated, persistent gamified application built around a React/TypeScript game interface, a game-domain layer, Firebase Authentication, Cloud Firestore persistence and an Express-based application/API boundary.

The current game domain contains the established base, resources, buildings, upgrades, builders, Builder AI, missions, clan functionality, repository-fork gameplay and simulated pipeline/infiltration operations.

The architecture deliberately treats DevOps educational integration as the next logical layer, where progression and gameplay provide context for learning technologies such as Docker, Jenkins, Kubernetes, CI/CD and monitoring.

The architecture also establishes a clean future boundary for the planned original futuristic 3D technology-city, original buildings and units, with Fable 5 participating in the asset-development workflow.

Crucially, it does not prematurely turn future ideas into runtime dependencies. The future LLM architecture, 3D rendering technology, exact Firestore physical schema, quantitative performance/scalability targets and final deployment topology remain explicitly open.

Architectural invariants that must survive future development
                    DEVOPS COT
                        │
                        ▼
             ┌────────────────────┐
             │ Authenticated User │
             └─────────┬──────────┘
                       ▼
             ┌────────────────────┐
             │ Individual State  │
             └─────────┬──────────┘
                       ▼
             ┌────────────────────┐
             │ Gamified DevOps   │
             │ Environment       │
             └─────────┬──────────┘
                       ▼
             ┌────────────────────┐
             │ Progressive       │
             │ Learning          │
             └─────────┬──────────┘
                       ▼
             ┌────────────────────┐
             │ Original World +  │
             │ Future 3D Assets  │
             └────────────────────┘

   NEVER CROSS THESE BOUNDARIES:

   ✗ Real-world cyberattack execution
   ✗ Copied commercial-game assets
   ✗ Unsupported technology commitments
   ✗ Planned = implemented
   ✗ AI assistance = manual coding claim
   ✗ Configuration file = production infrastructure

This is the FINAL ARCHITECTURE SPECIFICATION baseline. Any subsequent change to a component boundary, approved technology, data architecture, deployment architecture, security model, AI architecture, or rendering architecture should be handled as an explicit Architectural Change Request (ACR) rather than silently modifying this baseline.