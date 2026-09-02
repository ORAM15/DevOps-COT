TECHNOLOGY AND TOOLING SPECIFICATION

DevOps COT — Clashing DevTools



Project: DevOps COT

Owner: Oram (2303031)

Project Type: B.Tech. Major Project

Institution: Guru Nanak Dev Engineering College, Ludhiana

Specification Status: FINAL TOOLING BASELINE

Derived From: Final Project Architecture + Requirements \& Constraints

Principle: Requirements → architectural need → technology evaluation → tooling decision



1\. Purpose



This specification defines the technology and tooling baseline for DevOps COT.



It deliberately does not start with a list of fashionable technologies and then justify them afterward. Each technology is evaluated against the architecture and requirements already established.



The project has two distinct technological layers:



&#x20;                   DEVOPS COT

&#x20;                       │

&#x20;         ┌─────────────┴─────────────┐

&#x20;         │                           │

&#x20;         ▼                           ▼

&#x20;  PRODUCT RUNTIME              DEVELOPMENT SYSTEM

&#x20;         │                           │

&#x20;         │                           ├── Git / GitHub

&#x20;         │                           ├── AI Studio

&#x20;         │                           ├── Antigravity

&#x20;         │                           ├── Jules

&#x20;         │                           ├── Gemini CLI

&#x20;         │                           └── Design tools

&#x20;         │

&#x20;         ├── React

&#x20;         ├── TypeScript

&#x20;         ├── Vite

&#x20;         ├── Express

&#x20;         ├── Firebase Auth

&#x20;         └── Firestore



This distinction is important:



A tool used to build DevOps COT is not automatically a technology used inside DevOps COT.



2\. Tool Status Vocabulary



Every technology is assigned one of the following statuses.



ALREADY CONFIGURED



Confirmed in the current repository/project state.



AVAILABLE



Relevant and usable for the project, but not currently configured as part of the repository.



REQUIRES SETUP



Architecturally useful, but requires explicit installation/configuration before use.



PROPOSED



Potential future technology that may be useful but is not currently approved as a project dependency.



OPEN QUESTION



A requirement exists, but the exact technology cannot responsibly be selected yet.



NOT REQUIRED



The technology does not solve a currently approved requirement and therefore should not be introduced.



3\. Programming Language

TypeScript



Purpose: Primary application programming language.



Why needed:

The existing application is already implemented in TypeScript, and the architecture requires maintainable typed application/game logic.



Current status: ALREADY CONFIGURED



The repository contains TypeScript source files, tsconfig.json, and TypeScript-related dependencies.



Classification: APPROVED DECISION



Alternatives:



JavaScript

Python

C#

Java



Reason for selection:

TypeScript is already the implementation language and is appropriate for the existing React + Node.js architecture.



Constraints:



Existing TypeScript code should remain the baseline.

A language migration would require an explicit architectural change.



Security:

TypeScript provides compile-time type checking but does not itself provide runtime security.



Cost: Free/open source.



4\. Runtime

Node.js



Purpose: Server-side JavaScript/TypeScript runtime.



Why needed:

The architecture contains an Express application server.



Current status: ALREADY CONFIGURED



The project contains server.ts, Express dependencies and Node.js type definitions.



Classification: APPROVED DECISION



Alternatives:



Deno

Bun

another JavaScript runtime



Reason for selection:

Node.js is already part of the current application architecture and integrates directly with Express and the npm ecosystem.



Constraint:

Do not migrate runtime without an approved architecture change.



5\. Frontend Framework

React



Purpose: Browser application and game interface.



Why needed:

The entire existing game UI is component-oriented and browser-based.



Current status: ALREADY CONFIGURED



The repository contains React 19 dependencies and components.



Classification: APPROVED DECISION



Alternatives:



Vue

Angular

Svelte

vanilla JavaScript



Reason for selection:

React is already the foundation of the functional prototype and supports the component structure required by the game.



Cost: Free/open source.



6\. Frontend Build Tool

Vite



Purpose: Frontend development and production build tooling.



Why needed:

The existing application uses Vite for the browser application.



Current status: ALREADY CONFIGURED



vite.config.ts exists in the repository.



Classification: APPROVED DECISION



Alternatives:



Webpack

Parcel

another build system



Reason for selection:

Already integrated into the project and directly supports the React application.



7\. UI Styling

Tailwind CSS



Purpose: Application styling and UI implementation.



Why needed:

The project requires a coherent game interface with multiple panels, HUD elements and responsive UI components.



Current status: ALREADY CONFIGURED



The repository contains Tailwind-related dependencies/configuration.



Classification: APPROVED DECISION



Alternatives:



CSS Modules

plain CSS

styled-components

another utility CSS framework



Reason for selection:

Already established in the current implementation.



8\. UI Animation

Motion



Purpose: Interface animation and visual interaction.



Why needed:

The project contains interactive game UI and visual feedback.



Current status: ALREADY CONFIGURED



The motion dependency exists in the project.



Classification: APPROVED DECISION



Alternatives:



CSS animations

Framer Motion-compatible alternatives

custom animation implementation



Reason for selection:

Already part of the current application.



9\. Iconography

Lucide React



Purpose: Interface icons.



Why needed:

The existing application contains icon-driven game/interface controls.



Current status: ALREADY CONFIGURED



lucide-react exists in package.json.



Classification: APPROVED DECISION



Alternatives:



custom SVG icons

another icon library



Reason for selection:

Already integrated and suitable for consistent UI iconography.



10\. Backend Framework

Express



Purpose: Application server/API boundary.



Why needed:

The final architecture explicitly retains the Express server and pipeline-status simulation.



Current status: ALREADY CONFIGURED



The repository contains server.ts and Express dependencies.



Classification: APPROVED DECISION



Alternatives:



Fastify

NestJS

serverless functions

no backend



Reason for selection:

The project already has an Express server and the requirements do not justify replacing it.



11\. Database / Persistent State

Cloud Firestore



Purpose: Persistent user/game state.



Why needed:

Users require persistent individual game environments.



Current status: ALREADY CONFIGURED



The project contains Firebase configuration and Firestore security rules.



Classification: APPROVED DECISION



Alternatives evaluated:



PostgreSQL

MySQL

MongoDB

local storage

another cloud database

Why Firestore wins



The architecture already uses Firebase Authentication and requires user-specific persistent game state. Firestore naturally fits that ecosystem and avoids introducing an additional database platform.



Trade-off



Firestore reduces infrastructure management but introduces dependence on Firebase's document-oriented model.



Constraint



Do not add another database unless requirements change.



12\. Local Browser Storage

localStorage / IndexedDB



Status: NOT REQUIRED as authoritative storage



The architecture already establishes Firestore as persistent game-state storage.



Local browser storage may be used for ephemeral UI preferences if later required, but it must not silently replace Firestore for authoritative user/game state.



Classification: NOT REQUIRED



13\. Authentication

Firebase Authentication



Purpose: User identity and authentication.



Why needed:

Authentication is a mandatory project capability.



Current status: ALREADY CONFIGURED



Classification: APPROVED DECISION



Current intended mechanism: Firebase-based Google authentication.



Alternatives:



Auth0

Clerk

custom JWT authentication

custom OAuth implementation



Reason for selection:

Already integrated and directly connected to Firebase UID-based game-state ownership.



Security considerations:



Do not expose credentials.

Do not trust client-side identity claims without Firebase verification.

Firestore rules must enforce user-state boundaries.

14\. Authorization

Firebase / Firestore Security Rules



Purpose: Protect user-specific Firestore state.



Current status: ALREADY CONFIGURED



The repository contains:



firestore.rules



Classification: APPROVED DECISION



A separate authorization server is not required.



15\. AI — Current Runtime

Builder AI



Purpose: Select game upgrades using established strategies.



Current strategies:



Resource

Level

Balanced



Current status: ALREADY CONFIGURED / IMPLEMENTED



Classification: APPROVED DECISION



Important distinction



Builder AI is game logic, not necessarily a generative AI/LLM.



Therefore:



Gemini is not required for Builder AI.



This keeps the game deterministic and testable.



16\. AI — Future Learning Assistant

LLM / Gemini



Purpose: Potential future tutorial/chat-buddy for contextual DevOps explanations.



Current status: PROPOSED / OPEN QUESTION



Classification: OPEN QUESTION



The requirement establishes the educational assistant concept, but does not establish a mandatory runtime LLM provider.



Therefore we do not currently approve:



Gemini

OpenAI

Claude

local LLM

agent framework



as the final runtime implementation.



Alternatives

Alternative	Assessment

Gemini	Strong candidate, but premature selection

OpenAI	Technically possible, not required

Local LLM	Greater infrastructure burden

Rule-based assistant	Could satisfy simpler guided learning

No AI	Possible if guided learning is implemented deterministically



The runtime AI decision should be made when the chat-buddy requirement is sufficiently specified.



17\. Embedding Models

Status: NOT REQUIRED



The current architecture contains no requirement for:



semantic search

document retrieval

vector similarity

RAG

long-term semantic memory



Therefore no embedding model is approved.



Classification



NOT REQUIRED



Potential future use would require an explicit requirement for retrieval or semantic knowledge access.



18\. Vector Database



Examples include:



Pinecone

Weaviate

Qdrant

Chroma

pgvector



Status: NOT REQUIRED



There is currently no requirement for a vector database.



Adding one would unnecessarily complicate the system.



19\. Gemini API



The repository's .env.example contains:



GEMINI\_API\_KEY



This establishes a Gemini-oriented development/runtime configuration path in the project environment, but does not by itself prove that a Gemini-powered gameplay feature is currently part of the approved runtime architecture.



Current Google documentation confirms that Gemini API supports application integration and that Google AI Studio manages API keys/projects for Gemini development.



Status



REQUIRES VERIFICATION / SETUP FOR RUNTIME USE



Classification



OPEN QUESTION for future runtime AI.



Security



API keys must remain server-side and must never be committed.



Google's current AI Studio documentation explicitly describes server-side secret handling for Gemini API keys.



20\. Google AI Studio

Purpose



AI-assisted development, application prototyping, iteration and Gemini experimentation.



Current status: ALREADY USED



The project was developed with Google AI Studio as part of the AI-assisted workflow.



Classification: APPROVED DEVELOPMENT TOOL



It should not automatically be treated as a runtime dependency.



Google AI Studio currently supports full-stack app development with a server-side Node.js runtime, npm packages and server-side secret handling.



Alternatives

Antigravity

Jules

Gemini CLI

VS Code + coding assistant

manual development

Reason for retention



It is already part of the project's development history.



Security



Never put project secrets into prompts or commit generated secret values.



21\. Antigravity

Purpose



AI-assisted coding, project iteration, code generation and application development.



Current status: ALREADY USED



Classification: APPROVED DEVELOPMENT TOOL



Antigravity is not part of the production runtime.



Alternatives

Jules

Gemini CLI

GitHub Copilot

manual implementation

Tooling principle



Antigravity can assist implementation, but generated code must remain subject to:



Prompt

&#x20; ↓

AI-generated change

&#x20; ↓

Developer review

&#x20; ↓

Build/type-check

&#x20; ↓

Test

&#x20; ↓

Git diff review

&#x20; ↓

Commit

22\. Jules



Jules is Google's coding agent with GitHub integration. Current documentation describes repository/branch selection, planning before code changes, isolated VM execution, dependency installation, testing and PR-oriented workflows.



Purpose



Potential asynchronous coding-agent workflow for:



bug fixing

tests

documentation

scoped features

dependency updates

code transformations

Current status



AVAILABLE



No evidence in the project history establishes that Jules has already been used on DevOps COT.



Classification



AVAILABLE / PROPOSED DEVELOPMENT TOOL



It is not an application runtime dependency.



Alternatives

Antigravity

Gemini CLI

Google AI Studio

manual development

Reason for potential selection



Jules is particularly useful once the project is GitHub-centered because it can work against repository branches and produce reviewable changes. Its official workflow includes planning, diffs, tests and PR creation.



Setup requirements



Jules requires GitHub repository connection.



Security



Use repository-scoped access and review generated diffs before merging.



Cost



Jules currently offers multiple usage plans, including a no-cost tier, with higher tiers providing greater task/concurrency capacity.



Recommendation



Do not make Jules mandatory.



Use it as an optional coding agent after the repository has clear contributor/agent instructions.



23\. Gemini CLI

Purpose



Terminal-based Gemini-assisted development.



Current status: AVAILABLE / REQUIRES SETUP



Classification: PROPOSED DEVELOPMENT TOOL



It is not required by the product architecture.



Potential uses

repository exploration

code explanation

debugging

test generation

documentation

shell/terminal workflows

development automation

Alternatives

Antigravity

Jules

Google AI Studio

local coding tools

Reason for non-mandatory status



The project already has a functioning AI-assisted workflow. Adding another agent is only justified if it materially improves terminal-based development.



Operational constraint



Do not allow multiple AI coding agents to independently modify the same branch without controlled review.



24\. Google Stitch



Google's Stitch is a UI-design experiment that can generate interfaces from natural-language prompts or images/wireframes and supports iterative design exploration.



Purpose



Potential UI/UX exploration.



Current status



AVAILABLE



Classification



PROPOSED



Why not required



The current project already has a functional UI.



Stitch may help redesign/future-design:



HUD

menus

technology panels

learning interfaces

3D-world UI



but it is not necessary for the existing runtime.



Alternatives

manual design

Canva

Figma

existing React UI

Google AI Studio

Decision



Use only where a design exploration problem exists.



Do not make it part of the mandatory development pipeline.



25\. Google Opal



Google Labs currently describes Opal as a tool for building, editing and sharing AI mini-apps using natural language.



Purpose



Rapid experimentation/prototyping of AI mini-workflows.



Current status



AVAILABLE



Classification



PROPOSED / EXPERIMENTAL



Why not required



DevOps COT does not require a separate AI mini-app platform.



Potential uses could include prototyping:



educational interactions

learning workflows

AI-assisted concept demonstrations



but such experiments should not automatically enter the production architecture.



Alternatives

Google AI Studio

Gemini API

direct application implementation

26\. Other Google AI Tools

Google Labs / Experimental Tools



Classification: PROPOSED / EXPERIMENTAL



Google Labs currently hosts multiple AI experiments, including Opal and Jules.



Rule



Experimental Google tools may be used for research and prototyping, but they do not become project dependencies without an explicit requirement and architecture decision.



27\. Fable 5

Purpose



Original 3D asset development for:



buildings

units/troops

environmental assets

futuristic technology-city scenery

Current status



REQUIRES SETUP / FUTURE



Classification



APPROVED FUTURE TOOLING DIRECTION



Important distinction



Fable 5 is part of the asset-production workflow.



It is not currently approved as the game's runtime rendering engine.



Alternatives

Blender

Maya

3ds Max

procedural modelling

another 3D asset tool

Reason for selection



Fable 5 was explicitly established as the intended future workflow for creating the project's original 3D models.



Constraint



The assets must retain an original visual identity and must not reproduce commercial-game buildings/artwork.



28\. 3D Rendering Technology

Status: OPEN QUESTION



No final runtime rendering technology has been approved.



Candidates might include:



Three.js

Babylon.js

Unity

Unreal

another web-compatible renderer



But none should be silently adopted.



Reason



The requirement specifies future 3D assets, not the runtime rendering engine.



Therefore:



3D asset tool = Fable 5 direction.

3D runtime = OPEN QUESTION.



29\. Testing



Testing is a requirement, but the architecture does not currently mandate a specific testing framework.



Current status



REQUIRES SETUP / PARTIALLY ESTABLISHED



Classification



OPEN QUESTION for exact framework



Potential candidates:



Vitest

Jest

React Testing Library

Playwright

Cypress

Recommended evaluation



Because the project uses Vite + React, Vitest is a natural candidate for unit/integration testing, while Playwright could handle browser-level flows.



However, they should be formally adopted only when the testing requirements are converted into an implementation plan.



Why not automatically install everything?



Because adding five testing frameworks increases maintenance burden without satisfying a requirement that needs all five.



30\. Testing Layers



The approved tooling direction should eventually cover:



Unit Tests

&#x20;   │

&#x20;   ▼

Game Logic

Resources

Upgrades

Builder AI

Missions

&#x20;   │

&#x20;   ▼

Integration Tests

&#x20;   │

&#x20;   ▼

Firebase / Express boundaries

&#x20;   │

&#x20;   ▼

End-to-End Tests

&#x20;   │

&#x20;   ▼

Authentication → Game → Persistence

31\. CI/CD

Jenkins



The repository contains a Jenkinsfile.



Current status



ALREADY CONFIGURED — CONFIGURATION ARTIFACT



Classification



APPROVED FOUNDATION



But:



A Jenkinsfile is not evidence of a currently operational Jenkins server/pipeline.



Alternatives

GitHub Actions

GitLab CI

Jenkins

Cloud Build

other CI systems

Architecture decision



The current repository retains the Jenkinsfile because it is part of the existing project foundation.



Runtime Jenkins educational integration



DEFERRED



Jenkins may later become a gameplay/learning concept.



32\. GitHub Actions

Status



AVAILABLE



Classification



PROPOSAL



GitHub Actions could provide CI automation around:



Push

&#x20;↓

Build

&#x20;↓

Type-check

&#x20;↓

Test

&#x20;↓

Artifact / deployment



But because the existing repository already contains a Jenkinsfile, switching to GitHub Actions without a requirement is unnecessary.



Decision



Do not replace Jenkins configuration automatically.



A CI strategy should be finalized during implementation of the testing/deployment requirements.



33\. Docker

Docker / Docker Compose



Purpose: Existing development/deployment configuration and future DevOps educational representation.



Current status: ALREADY CONFIGURED



The repository contains:



docker-compose.yml

Classification



APPROVED FOUNDATION



Important distinction



Docker is currently an engineering/configuration technology.



The future idea of teaching Docker through game progression is:



DEFERRED



Alternatives

Podman

native process execution

Reason



Docker is already established and aligned with the project's DevOps educational domain.



34\. Nginx

Purpose



Existing web/deployment configuration.



Current status: ALREADY CONFIGURED



Repository contains:



nginx.conf



Classification: APPROVED FOUNDATION



Important distinction



The presence of nginx.conf does not prove Nginx is currently operating in production.



35\. Monitoring

Current runtime monitoring platform



Status: NOT REQUIRED as a dedicated production stack at present



Existing system status/log presentation is already part of the game/application.



Future educational monitoring



Status: DEFERRED



Potential future tools:



Prometheus

Grafana

OpenTelemetry

cloud monitoring



None are currently approved.



Reason



The project requires monitoring as a future DevOps learning concept, not a production monitoring infrastructure stack at this stage.



36\. Observability

Current status



PARTIALLY AVAILABLE



The project contains system-log/status-oriented UI and pipeline simulation.



Classification



APPROVED FOUNDATION



Future



A full observability stack is:



PROPOSED / DEFERRED



No Prometheus/Grafana/OpenTelemetry dependency should be introduced until the requirements explicitly require real telemetry.



37\. Security Tooling



The project currently relies primarily on:



Firebase Authentication

Firestore Security Rules

Environment variables/secrets

Git ignore rules



These are:



APPROVED



Security tools not currently required

Vault

AWS Secrets Manager

Keycloak

dedicated WAF

SIEM

enterprise IAM



These are:



NOT REQUIRED



for the current project scope.



38\. Environment Configuration



The repository contains:



.env.example



and .gitignore excludes environment files while retaining .env.example.



This is an established engineering decision.



Classification



ALREADY CONFIGURED



Purpose



Document required environment variables without committing secrets.



39\. Git

Purpose



Version control.



Status: ALREADY CONFIGURED



The repository was initialized on main and has an initial commit.



Classification: APPROVED DECISION



The project currently uses Git for source history and controlled changes.



40\. GitHub

Purpose



Remote repository and collaboration/source-management platform.



Repository:



ORAM15/DevOps-COT



Status: ALREADY CONFIGURED



The project was successfully pushed to GitHub and the local branch tracks origin/main.



Classification: APPROVED DECISION



Alternatives

GitLab

Bitbucket

self-hosted Git

Reason



Already established and integrated into the project's workflow.



41\. GitHub Tooling

GitHub CLI (gh)



Status: AVAILABLE / REQUIRES SETUP



Classification: OPTIONAL / PROPOSED



Potential uses:



PR management

issue management

branch operations

automation

agent workflows



It is not required for the application itself.



42\. Jules + GitHub



This is a particularly relevant combination because Jules officially integrates with GitHub repositories and can work with branches and pull requests.



Potential workflow:



Issue / Task

&#x20;    │

&#x20;    ▼

Jules

&#x20;    │

&#x20;    ▼

Plan

&#x20;    │

&#x20;    ▼

Isolated VM

&#x20;    │

&#x20;    ▼

Code Changes

&#x20;    │

&#x20;    ▼

Tests

&#x20;    │

&#x20;    ▼

Diff / PR

&#x20;    │

&#x20;    ▼

Oram Review

&#x20;    │

&#x20;    ▼

Merge

Status



AVAILABLE



Not mandatory



Jules should not receive unrestricted autonomous authority over main.



43\. AI-Assisted Development Governance



Because the project uses multiple AI development tools, a common governance model is required.



Approved workflow

Requirement

&#x20;   │

&#x20;   ▼

Developer-defined task

&#x20;   │

&#x20;   ▼

AI Tool

&#x20;   │

&#x20;   ▼

Generated proposal/code

&#x20;   │

&#x20;   ▼

Developer inspection

&#x20;   │

&#x20;   ▼

Type-check/build

&#x20;   │

&#x20;   ▼

Tests

&#x20;   │

&#x20;   ▼

Git diff

&#x20;   │

&#x20;   ▼

Commit / PR



AI output is therefore:



implementation assistance, not automatic authority.



44\. Documentation

Markdown



Status: ALREADY AVAILABLE



The repository contains README.md.



Classification



APPROVED



Markdown should remain the primary lightweight technical documentation format.



45\. Project Documentation Files



The project should maintain, as appropriate:



README.md

PROJECT\_CONSTITUTION.md

REQUIREMENTS\_AND\_CONSTRAINTS.md

ARCHITECTURE.md

TECHNOLOGY\_AND\_TOOLING.md

CHANGELOG.md



The last four are documentation artifacts rather than runtime dependencies.



Their creation is consistent with the current project-governance work.



46\. Agent Instructions

AGENTS.md



This is particularly relevant if Jules is introduced.



Jules' current documentation states that it automatically looks for AGENTS.md at the repository root and uses it to understand project-specific tools, conventions and inputs/outputs.



Status



AVAILABLE / RECOMMENDED



Classification



PROPOSED DEVELOPMENT TOOLING



Potential contents

architecture rules

forbidden technologies

build commands

testing commands

repository conventions

security restrictions

game-domain invariants

"planned ≠ implemented" rule

no real cyberattack behavior

original-asset requirement



This would be particularly useful for future AI agents working on the repository.



47\. API Testing Tools



Potential tools:



Postman

Insomnia

curl

REST Client

automated test frameworks

Current status



NOT REQUIRED as a mandatory application dependency



API testing can initially be performed through automated tests and command-line tools.



48\. Package Management

npm



Status: ALREADY CONFIGURED



The repository contains:



package.json

package-lock.json

Classification



APPROVED DECISION



Important observation



The repository also contains an empty bun.lock.



That does not establish Bun as the project's runtime/package-manager architecture.



Therefore:



Bun — NOT REQUIRED currently



unless explicitly adopted later.



49\. Build Toolchain



The current baseline is:



Node.js

&#x20;  │

&#x20;  ▼

npm

&#x20;  │

&#x20;  ▼

Vite

&#x20;  │

&#x20;  ▼

TypeScript

&#x20;  │

&#x20;  ▼

React Application



This is the canonical frontend build path.



50\. Backend Build/Execution

Node.js

&#x20;  │

&#x20;  ▼

TypeScript / tsx

&#x20;  │

&#x20;  ▼

Express

&#x20;  │

&#x20;  ▼

Application API



The repository's existing dev script uses tsx server.ts.



51\. Design Tooling

Current UI



The current UI is already implemented directly in the React application.



Therefore no design tool is mandatory.



Canva



Status: AVAILABLE



Classification: PROPOSED / OPTIONAL



Useful for:



presentation

synopsis

project diagrams

academic visuals



Not required for runtime development.



52\. Stitch vs Canva vs Direct React

Tool	Appropriate Use	Status

React	Actual UI implementation	APPROVED

Stitch	UI exploration/prototyping	PROPOSED

Canva	Presentation/communication	OPTIONAL

Fable 5	Future 3D assets	APPROVED FUTURE



The important distinction is:



Design tooling does not automatically become product architecture.



53\. AI Studio vs Antigravity vs Jules vs Gemini CLI



These tools overlap, so using all of them indiscriminately would increase complexity.



Tool	Best role in this project	Status

Google AI Studio	AI-assisted app development/prototyping	ALREADY USED

Antigravity	Interactive AI-assisted coding	ALREADY USED

Jules	Async GitHub coding agent	AVAILABLE / PROPOSED

Gemini CLI	Terminal AI workflow	AVAILABLE / PROPOSED

Recommended division

Google AI Studio

&#x20;   → rapid application/prototype development



Antigravity

&#x20;   → interactive coding and iterative implementation



Jules

&#x20;   → scoped asynchronous GitHub tasks



Gemini CLI

&#x20;   → terminal/repository assistance



They should not all be mandatory.



54\. Cost Model

Core runtime



The project relies heavily on:



open-source frontend/backend technologies

Firebase services

GitHub

development tools



Actual cloud/service costs depend on usage and selected plans.



AI development



Google AI Studio, Jules and other AI tools may have usage limits or paid tiers. Jules currently advertises a no-cost tier alongside paid plans.



Rule



No paid service becomes a mandatory project dependency unless:



the requirement needs it,

the benefit is demonstrated,

the cost is acceptable,

and the owner approves it.

55\. Security Considerations Across the Toolchain

API keys



Never commit:



GEMINI\_API\_KEY

JULES\_API\_KEY

Firebase secrets

deployment credentials

Repository



Keep secrets outside source control.



AI agents



AI agents must not receive unnecessary credentials.



GitHub



Use scoped permissions.



Deployment



Production credentials must not be placed in repository files.



Gemini



Google's current documentation explicitly recommends secure key handling and notes that unrestricted standard Gemini keys are being rejected, with migration to auth keys required before September 2026.



For this project, that means any future Gemini integration must be configured using the currently supported secure authentication mechanism rather than copying an API key into frontend source.



56\. Operational Constraints



The project should avoid creating a toolchain like:



React

\+ Next.js

\+ Vite

\+ Webpack

\+ Node

\+ Bun

\+ Python

\+ FastAPI

\+ PostgreSQL

\+ MongoDB

\+ Redis

\+ Kafka

\+ Kubernetes

\+ Terraform

\+ Prometheus

\+ Grafana

\+ OpenTelemetry

\+ multiple AI agents



simply because each technology is individually useful.



That architecture would violate the project's core principle:



Only introduce a technology when a requirement actually requires it.



57\. Current Repository Toolchain



Based on the repository state established in this project:



┌─────────────────────────────────────────┐

│             DEVOPS COT REPO             │

├─────────────────────────────────────────┤

│ Language                                │

│  TypeScript / JavaScript                │

│                                         │

│ Frontend                                │

│  React                                  │

│  Vite                                   │

│  Tailwind CSS                           │

│  Motion                                 │

│  Lucide React                           │

│                                         │

│ Backend                                 │

│  Node.js                                │

│  Express                                │

│                                         │

│ Authentication                          │

│  Firebase Authentication                │

│                                         │

│ Persistence                             │

│  Cloud Firestore                        │

│                                         │

│ DevOps Configuration                   │

│  Docker Compose                         │

│  Jenkinsfile                            │

│  Nginx                                  │

│                                         │

│ Version Control                         │

│  Git                                    │

│  GitHub                                 │

└─────────────────────────────────────────┘

58\. Current Development Toolchain

Developer

&#x20;   │

&#x20;   ├──────────────► Google AI Studio

&#x20;   │

&#x20;   ├──────────────► Antigravity

&#x20;   │

&#x20;   └──────────────► Git / GitHub

&#x20;                         │

&#x20;                         ▼

&#x20;                   DevOps-COT

59\. Future Development Toolchain

&#x20;                   DEVOPS COT

&#x20;                       │

&#x20;       ┌───────────────┼────────────────┐

&#x20;       │               │                │

&#x20;       ▼               ▼                ▼

&#x20;  Code Agent       3D Assets       Learning AI

&#x20;       │               │                │

&#x20;       ▼               ▼                ▼

&#x20;Jules / CLI        Fable 5          \[OPEN]

&#x20;       │

&#x20;       ▼

&#x20;GitHub PR

60\. Definitive Toolchain Map



This is the final baseline.



&#x20;                        ORAM

&#x20;                         │

&#x20;                         ▼

&#x20;                ┌────────────────┐

&#x20;                │ Development    │

&#x20;                │ Workflow       │

&#x20;                └───────┬────────┘

&#x20;                        │

&#x20;         ┌──────────────┼─────────────────┐

&#x20;         │              │                 │

&#x20;         ▼              ▼                 ▼

&#x20;  Google AI Studio  Antigravity       Git/GitHub

&#x20;         │              │                 │

&#x20;         └──────────────┼─────────────────┘

&#x20;                        │

&#x20;                        ▼

&#x20;               ┌──────────────────┐

&#x20;               │ TypeScript       │

&#x20;               │ React            │

&#x20;               │ Vite             │

&#x20;               │ Tailwind         │

&#x20;               │ Motion           │

&#x20;               └────────┬─────────┘

&#x20;                        │

&#x20;                        ▼

&#x20;                ┌───────────────┐

&#x20;                │ Node.js       │

&#x20;                │ Express       │

&#x20;                └───────┬───────┘

&#x20;                        │

&#x20;             ┌──────────┴──────────┐

&#x20;             │                     │

&#x20;             ▼                     ▼

&#x20;     Firebase Auth           Application API

&#x20;             │                     │

&#x20;             ▼                     ▼

&#x20;        Firebase UID        Pipeline Simulation

&#x20;             │

&#x20;             ▼

&#x20;       Cloud Firestore

&#x20;             │

&#x20;             ▼

&#x20;       Persistent Game

&#x20;            State





&#x20;     EXISTING DEVOPS FOUNDATION

&#x20;     ──────────────────────────

&#x20;     Docker Compose

&#x20;     Jenkinsfile

&#x20;     Nginx





&#x20;     OPTIONAL DEVELOPMENT AGENTS

&#x20;     ────────────────────────────

&#x20;     Jules

&#x20;     Gemini CLI





&#x20;     FUTURE 3D

&#x20;     ─────────

&#x20;     Fable 5

&#x20;         │

&#x20;         ▼

&#x20;     Original 3D Assets

&#x20;         │

&#x20;         ▼

&#x20;     \[Runtime Renderer = OPEN]





&#x20;     FUTURE LEARNING AI

&#x20;     ──────────────────

&#x20;     Tutorial / Chat-Buddy

&#x20;               │

&#x20;               ▼

&#x20;      \[LLM Provider = OPEN]





&#x20;     NOT REQUIRED

&#x20;     ────────────

&#x20;     Vector DB

&#x20;     Embeddings

&#x20;     Redis

&#x20;     Kafka

&#x20;     Microservices

&#x20;     API Gateway

&#x20;     Separate DB

&#x20;     Kubernetes runtime

&#x20;     Dedicated game engine

&#x20;     Real cyberattack infrastructure

61\. Final Status Matrix

Technology / Tool	Status	Classification

TypeScript	Already configured	APPROVED

JavaScript	Existing ecosystem	APPROVED

Node.js	Already configured	APPROVED

React 19	Already configured	APPROVED

Vite	Already configured	APPROVED

Tailwind CSS	Already configured	APPROVED

Motion	Already configured	APPROVED

Lucide React	Already configured	APPROVED

Express	Already configured	APPROVED

Firebase Auth	Already configured	APPROVED

Firestore	Already configured	APPROVED

Git	Already configured	APPROVED

GitHub	Already configured	APPROVED

Docker Compose	Repository configured	APPROVED FOUNDATION

Jenkinsfile	Repository configured	APPROVED FOUNDATION

Nginx	Configuration present	APPROVED FOUNDATION

Google AI Studio	Used	APPROVED DEV TOOL

Antigravity	Used	APPROVED DEV TOOL

Fable 5	Future	APPROVED FUTURE TOOL

Jules	Available	PROPOSED / OPTIONAL

Gemini CLI	Available	PROPOSED / OPTIONAL

Stitch	Available	PROPOSED / OPTIONAL

Opal	Available	PROPOSED / EXPERIMENTAL

Gemini API runtime	Possible	OPEN QUESTION

Future LLM	Unselected	OPEN QUESTION

Embedding model	No requirement	NOT REQUIRED

Vector database	No requirement	NOT REQUIRED

Redis	No requirement	NOT REQUIRED

Kafka/message queue	No requirement	NOT REQUIRED

Microservices	No requirement	NOT REQUIRED

API gateway	No requirement	NOT REQUIRED

Second database	No requirement	NOT REQUIRED

Kubernetes runtime	Not required currently	DEFERRED

Prometheus	No current requirement	PROPOSED / DEFERRED

Grafana	No current requirement	PROPOSED / DEFERRED

OpenTelemetry	No current requirement	PROPOSED / DEFERRED

3D rendering engine	Not selected	OPEN QUESTION

Playwright	Potential E2E	PROPOSED

Vitest	Potential unit/integration	PROPOSED

GitHub Actions	Potential CI	PROPOSED

GitHub CLI	Optional workflow tool	PROPOSED

Canva	Communication/design	OPTIONAL

62\. Final Technology Decision



The mandatory runtime stack remains intentionally small:



TypeScript + React + Vite + Tailwind CSS + Motion + Node.js + Express + Firebase Authentication + Cloud Firestore



with:



Git + GitHub as the source-control foundation.



The existing DevOps-oriented engineering foundation retains:



Docker Compose + Jenkinsfile + Nginx



The established AI-assisted development workflow retains:



Google AI Studio + Antigravity



while:



Jules and Gemini CLI remain optional development agents, not mandatory dependencies.



The future 3D workflow is:



Fable 5 → original 3D assets → future runtime renderer



with the renderer intentionally left as an OPEN QUESTION.



The future educational AI workflow is:



Game progression → learning context → tutorial/chat-buddy → \[LLM implementation OPEN]



Finally, embeddings, vector databases, microservices, Redis, Kafka, a second database, a dedicated game engine, and real cyberattack infrastructure are not part of the current technology baseline.



That is deliberate: the project's technology stack is being kept requirement-driven rather than technology-driven.
