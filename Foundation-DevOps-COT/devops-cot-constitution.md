PROJECT CONSTITUTION — DRAFT



Scope: This document is a forensic extraction of the DevOps COT project history available in this project conversation. It deliberately does not design the final architecture, introduce new technologies, or convert proposed future functionality into approved decisions.



Classification used:

FACT — directly established in the project history.

DECISION — explicitly chosen/approved direction.

PROPOSAL — discussed as a future or possible direction but not established as final.

OPEN QUESTION — something that requires a decision or clarification.

UNKNOWN — insufficient evidence in the available project history.



1\. Project Identity

Project name — FACT / DECISION



The current project name is DevOps COT.



The project has also been referred to as Clashing DevTools.



The earlier naming relationship was:



DevOps COT / Clashing DevTools



The acronym expansion of COT has not been explicitly and consistently established in the available project history.



Classification: FACT for the names; UNKNOWN for an official expansion of COT.



Project type — FACT



The project is an academic B.Tech. major project associated with the Information Technology department at Guru Nanak Dev Engineering College, Ludhiana.



It is currently being developed as a major-project system rather than merely the earlier minor-project work.



Ownership — DECISION



The current project is a solo project owned and developed by:



Oram — 2303031



The project history explicitly corrected the earlier team-based attribution and established that the current major project should contain only Oram as the student/project owner.



Academic context — FACT



The project is associated with:



B.Tech.

Information Technology

Guru Nanak Dev Engineering College, Ludhiana

Major Project

Project synopsis and subsequent major-project development

Project category — FACT



The project is a combination of:



gamified software

DevOps learning/interaction

browser-based application development

interactive base-building/game mechanics

educational technology



The project is not intended merely as a conventional DevOps automation project. Its central identity is the gamification of DevOps concepts and learning.



2\. Problem Being Solved

Difficulty understanding interconnected DevOps concepts — FACT



The project identifies a learning problem around understanding DevOps as a connected ecosystem.



DevOps includes concepts such as:



version control

automation

continuous integration

continuous delivery/deployment

containerization

infrastructure

deployment

monitoring

operational processes



The project history establishes that beginners/students may encounter these concepts individually and have difficulty visualizing their relationships as one operational environment.



Lack of contextual interaction — FACT



The project aims to address the limitation of learning DevOps primarily through separate theoretical topics, commands and individual tools.



The intended solution is to give these concepts a contextual representation through an interactive environment.



Gamification as the proposed response — DECISION



The project uses the principles of a base-building/strategy game as the interaction model for representing DevOps concepts.



The basic idea is:



game progression → infrastructure development → interaction with DevOps concepts



Exact real-world problem scope — OPEN QUESTION



The project history establishes the educational problem, but does not define a quantitative or formally researched problem statement such as:



measured learning difficulty

target learning-performance gap

comparison against conventional DevOps labs

percentage improvement

formal usability study



These should not be claimed unless established later.



3\. Target Users

Students / beginners learning DevOps — FACT



The project is intended to provide an interactive way for learners, particularly beginners/students, to encounter DevOps concepts.



General user/player — FACT



The application has a player/user model in which an authenticated user receives an individual game environment.



Collaborative/team learners — PROPOSAL



Clan/team mechanics have been implemented at a game level and future development has discussed expanding them toward collaborative/team-oriented learning.



However, the exact educational role of clans as a collaborative learning mechanism is not yet fully defined.



Formal instructors/teachers — UNKNOWN



The project history does not establish a teacher/admin/instructor role within the application.



4\. Intended User Experience

Interactive DevOps world — DECISION



The intended experience is not a conventional dashboard containing lists of DevOps tools.



The user should interact with DevOps concepts through a game-like environment.



Base-building interaction — DECISION



The user starts with a central Town Hall/Main Repository and develops an environment around it.



The interaction model includes:



buildings

resources

upgrades

missions

progression

clan/team mechanics

simulated operational interactions

Progressive learning — DECISION / PROPOSAL



The intended major-project experience is:



Start with basic DevOps environment

&#x20;       ↓

Progress through game

&#x20;       ↓

Unlock technologies/concepts

&#x20;       ↓

Learn what they represent

&#x20;       ↓

Use them through gameplay

&#x20;       ↓

Progress further



The overall progressive-learning concept is established, while the complete future implementation is still planned.



Tutorial/chat-buddy experience — PROPOSAL



A tutorial or chat-buddy character/system has been proposed to introduce users to the game and explain DevOps concepts when appropriate.



It has not been established as part of the current completed implementation.



5\. Core Product Vision

Gamified DevOps learning/interaction platform — DECISION



The project's established positioning is:



A gamified DevOps learning and interaction platform in which game progression is used to introduce and demonstrate DevOps concepts and technologies.



This is the clearest current product definition established in the project history.



Virtual DevOps technology ecosystem — DECISION



The project is intended to represent a DevOps environment as a progressively developing virtual technology ecosystem.



Strategy-game-inspired interaction — DECISION



The project deliberately takes inspiration from the strategic structure of games such as Clash of Clans.



The inspiration concerns interaction/progression principles rather than copying its actual visual assets.



Original identity — DECISION



The project should not reproduce the original buildings, artwork or other copyrighted assets of Clash of Clans.



The visual direction is intended to be an original futuristic/technology-oriented world.



6\. Primary Objectives

Objective 1 — DECISION



Develop a gamified platform that represents DevOps infrastructure and concepts through interactive gameplay and progressive game mechanics.



Objective 2 — DECISION



Extend the platform into a structured DevOps learning environment through progressive technology integration, guided learning, advanced missions, team interaction and an original 3D technology-city environment.



Objective count — DECISION



The project history explicitly settled on two concise primary objectives, rather than three or four.



7\. Secondary Objectives



The following have been established or discussed as supporting goals.



Interactive representation of infrastructure — FACT / DECISION



Represent infrastructure-related DevOps concepts through buildings, resources and progression.



Individual persistent game environment — FACT



Allow authenticated users to receive an individual game/base state.



Game-based progression — DECISION



Use progression and upgrades as mechanisms for introducing concepts.



Educational technology unlocking — PROPOSAL



Associate future progression with technologies such as Docker, Jenkins and Kubernetes.



Team interaction — PROPOSAL



Expand clan/team mechanics toward collaborative learning.



Rich visual environment — DECISION / PROPOSAL



Develop an original technology-city environment, eventually moving toward 3D assets.



8\. Explicit Non-Objectives

Real-world cyberattack platform — DECISION



The attack/infiltration mechanic is explicitly a simulated game operation.



It is not intended to perform real-world cyberattacks.



Copying Clash of Clans assets — DECISION



The project will not reproduce the copyrighted buildings/artwork of Clash of Clans.



The project can take inspiration from the interaction model but will create its own assets and visual identity.



Production-ready DevOps infrastructure — FACT / CONSTRAINT



The existence of Jenkinsfile, Docker Compose and Nginx configuration is not evidence that the project is already a production-grade CI/CD infrastructure platform.



Replacement for practical DevOps laboratories — DECISION



The synopsis explicitly positioned the platform as a complementary learning environment rather than a replacement for practical DevOps laboratories or real infrastructure.



Unsupported performance claims — DECISION / CONSTRAINT



No numerical learning improvements, productivity gains, performance metrics or user-impact statistics have been established.



9\. Existing Implementation



The project history identifies the following current functionality.



Browser-based application — FACT



The current implementation is a browser-based application.



Authentication — FACT



Firebase Authentication is used.



Google-based authentication has been described as the current authentication mechanism.



A tested user flow was established in which another person:



opened the shared application,

logged in,

provided Gmail/account information,

completed Firebase authentication,

entered the application,

received a new individual Town Hall/base state.

Individual game state — FACT



The authenticated user can receive an initialized individual Town Hall/base environment.



User identity is associated with Firebase UID.



Persistent storage — FACT



Cloud Firestore is used for persistent user/game-state information.



The project history states that user-specific building/game information is maintained through Firestore.



Isometric game environment — FACT



The current environment uses a 12 × 12 isometric grid.



DevOps-themed buildings — FACT



The current implementation contains:



Main Repository / Town Hall

Git Base

Jenkins Lab

Docker Yard

Nginx Web Server

Storage Vault

Resources — FACT



The current principal resources are:



BuildPower

Containers

Data

Building systems — FACT



Buildings have:



levels

costs

production characteristics

construction states



The user can:



place buildings

generate resources

construct infrastructure

upgrade buildings

manage builders

remove buildings

Builder Management — FACT



Builder management exists as part of the current game system.



Builder AI — FACT



A Builder AI component exists.



It can select upgrade actions using strategies described as:



Resource

Level

Balanced

Daily Missions — FACT



Daily missions exist.



The established mission categories include activities related to:



resource collection

upgrades

repository forking

infiltration actions

Clan system — FACT



A demonstration clan named:



ID Hunters



has been implemented.



The authenticated player is the clan leader.



Generated demonstration members are displayed.



Clan information includes:



member levels

trophies

resource contributions

Repository-fork gameplay — FACT



Repository-forking functionality exists as a game interaction.



It interacts with demonstration repository clans and can award game resources/reputation.



Simulated infiltration/attack mechanic — FACT



An attack/infiltration mechanic exists as a simulated game operation.



It simulates a pipeline-infiltration attempt and determines a game outcome.



Rewards may include:



game resources

experience



It is explicitly a game simulation.



Orchestration interface — FACT



The project contains an orchestration-oriented interface and system-log presentation.



Pipeline-status simulation endpoint — FACT



The project contains an Express-based pipeline-status simulation endpoint.



10\. Existing Repository State



As of the repository setup documented on 24 August 2026, the project existed locally at:



D:\\BRDR\\Development\\Active Projects\\DevOps-COT



The extracted project contained:



src/

.env.example

.gitignore

bun.lock

docker-compose.yml

firebase-applet-config.json

firebase-blueprint.json

firestore.rules

index.html

Jenkinsfile

metadata.json

nginx.conf

package.json

package-lock.json

README.md

server.ts

tsconfig.json

vite.config.ts



The source tree documented at that point contained components including:



App.tsx

AttackButton.tsx

BuilderManagement.tsx

BuildingInfo.tsx

BuildingPanel.tsx

ClanPanel.tsx

DailyMissions.tsx

ForkClanSelector.tsx

IsometricGrid.tsx

OrchestrationPanel.tsx

ResourceBar.tsx

Tooltip.tsx

game.ts

Firebase utility files

game types



Classification: FACT.



Git repository — FACT



The local project was initialized as a Git repository.



The branch was renamed to:



main



Initial commit — FACT



The repository received the commit:



Initial commit - DevOps COT Major Project



The recorded commit contained 35 files and approximately 10,321 insertions.



GitHub remote — FACT



The GitHub repository was configured as the remote origin.



The local main branch was successfully pushed to GitHub.



The final documented status was:



branch is up to date with origin/main

nothing to commit, working tree clean



11\. Existing Functionality



The current functionality can therefore be divided into these established systems:



Authentication

&#x20;     │

&#x20;     ▼

Individual User

&#x20;     │

&#x20;     ▼

Town Hall / Base

&#x20;     │

&#x20;┌────┼─────────────────────┐

&#x20;▼    ▼          ▼          ▼

Buildings Resources Missions Clan

&#x20;│       │          │         │

&#x20;▼       ▼          ▼         ▼

Upgrades Production Forking Trophies

&#x20;│                    │

&#x20;▼                    ▼

Builder AI       Simulated Operations



This is a representation of the existing functional areas, not a proposed final architecture.



12\. Existing Technologies

React 19 — FACT



Used for the browser-based frontend and component-based UI.



TypeScript — FACT



Used for application development.



Vite 6 — FACT



Used as the frontend/build tooling.



Tailwind CSS — FACT



Used for styling/UI development.



Motion — FACT



Used for interface/game animation.



Lucide React — FACT



Present as an interface/icon library dependency.



Express 4 — FACT



Used for the server-side portion and pipeline-status simulation endpoint.



Node.js — FACT



The project uses the Node.js ecosystem, with server.ts and Express.



Firebase Authentication — FACT



Used for authentication.



Google-based authentication is the established current mechanism.



Cloud Firestore — FACT



Used for persistent user and game-state information.



Google AI Studio — FACT



Used as an AI-assisted development environment/tool during application development and iteration.



It was explicitly described as being used similarly to an IDE in the project-development workflow.



Antigravity — FACT



Used as part of the AI-assisted development workflow.



Git — FACT



Used for version control.



GitHub — FACT



Used as the remote repository.



Docker / Docker Compose — FACT



Docker-related configuration exists in the repository, including:



docker-compose.yml



However, the project history does not establish that a complete production Docker deployment is currently operational.



Jenkins — FACT / LIMITED



A Jenkinsfile exists in the repository.



Jenkins is also a planned educational technology for deeper future integration.



The repository's Jenkinsfile does not by itself establish a fully operational Jenkins CI/CD pipeline.



Nginx — FACT / LIMITED



An nginx.conf file exists.



It is part of the project's DevOps-oriented configuration.



A complete production Nginx deployment has not been established as a fact.



Firebase project configuration/rules — FACT



The repository contains Firebase-related configuration and Firestore rules files.



Fable 5 — DECISION / PLANNED



Fable 5 has been selected/planned for the future 3D asset-development workflow.



It is not part of the current confirmed browser implementation.



13\. Existing Integrations

Firebase Authentication ↔ application — FACT



The application uses Firebase authentication to establish user identity.



Firebase UID ↔ user-specific game state — FACT



The documented design associates authenticated users with their individual game information.



Cloud Firestore ↔ game state — FACT



Firestore is used for persistent user/game-state information.



Express ↔ pipeline simulation — FACT



The project contains an Express pipeline-status simulation endpoint.



GitHub ↔ local Git repository — FACT



The project has a configured GitHub remote and successfully pushed main.



Google AI Studio / Antigravity ↔ development workflow — FACT



Both tools were used to assist application development and iterative refinement.



14\. Existing Limitations

Current system is not the final vision — FACT



The current implementation is explicitly treated as the functional foundation rather than the completed major-project vision.



Deeper educational integration is incomplete — FACT



The future project is intended to establish stronger relationships between gameplay progression and actual DevOps learning.



Docker/Jenkins/Kubernetes educational integration — PROPOSAL



The project intends to integrate these technologies more deeply into gameplay/learning.



Their terminology or configuration in the current project must not be interpreted as proof that complete educational integrations already exist.



Kubernetes — PROPOSAL



Kubernetes has been discussed as a future technology to introduce through progression.



No evidence establishes a complete Kubernetes implementation in the current application.



Monitoring — PROPOSAL



Monitoring is part of the intended future DevOps-learning expansion.



Tutorial/chat-buddy — PROPOSAL



The tutorial/chat-buddy concept remains future development unless later implementation evidence establishes otherwise.



3D world — PROPOSAL / DECISION



The future direction is to move from the current isometric environment toward a richer original 3D technology-city environment.



The 3D expansion has not been established as complete.



3D assets — PROPOSAL



Original 3D buildings, units and environmental assets are planned.



15\. Future Ideas



The following are future directions established in the conversation and must remain separate from current functionality.



Progressive DevOps technology unlocking — PROPOSAL



Town Hall/progression level increases could unlock new DevOps technologies.



Example discussed:



Town Hall progression

&#x20;       ↓

Technology unlocked

&#x20;       ↓

Tutorial explanation

&#x20;       ↓

Gameplay interaction

&#x20;       ↓

Demonstration of concept

Docker learning — PROPOSAL



Docker could be introduced as a progressive technology.



Jenkins learning — PROPOSAL



Jenkins could be introduced as part of future progression.



Kubernetes learning — PROPOSAL



Kubernetes could be introduced at a later progression level.



CI/CD learning — PROPOSAL



CI/CD concepts could become part of the educational progression.



Monitoring — PROPOSAL



Monitoring concepts could be represented through gameplay.



Tutorial/chat-buddy — PROPOSAL



A character/system could introduce concepts and guide players.



Advanced educational missions — PROPOSAL



Missions could be connected more directly with actual DevOps concepts.



Expanded clan/team learning — PROPOSAL



The existing clan system could be expanded into a more meaningful collaborative learning environment.



Futuristic technology city — DECISION / PROPOSAL



The environment is intended to become an original futuristic technology city rather than remaining a simple abstract grid.



Original 3D buildings — DECISION / PROPOSAL



Buildings should be original creations representing the project's DevOps concepts.



Original 3D units/troops — PROPOSAL



The broader vision includes original 3D units/troops corresponding to game mechanics.



Original environmental scenery — PROPOSAL



The user explicitly wanted surrounding scenery resembling a proper technology city, with buildings and environmental elements comparable in richness to a large strategy/open-world game environment.



The desired visual reference included the richness of games such as GTA V, but the project is not intended to copy GTA assets.



16\. Requirements

Functional requirements established

Authentication — FACT



The system must support authenticated users through Firebase.



Individual game environment — FACT



Authenticated users should receive their own game/base environment.



Persistent game state — FACT



User/game information should persist through Firestore.



Base-building interaction — FACT



The system supports buildings, resources, construction and upgrades.



Game progression — DECISION



Progression is central to the project.



DevOps representation — DECISION



Game entities should represent or contextualize DevOps concepts.



Clan interaction — FACT



The current system contains a clan mechanic.



Simulated operations — FACT



The current system contains simulated operational/infiltration gameplay.



Future requirements

Structured DevOps education — DECISION



The major-project direction requires deeper educational integration.



Progressive technology unlocking — PROPOSAL

Guided learning — PROPOSAL

Advanced missions — PROPOSAL

Expanded team interaction — PROPOSAL

3D technology city — DECISION / PROPOSAL

Original 3D assets — DECISION / PROPOSAL

17\. Constraints

Academic project context — FACT



The project is being developed as a B.Tech. major project.



Solo ownership — DECISION



Only Oram is the current project owner/student.



Original visual assets — DECISION



The project should not copy copyrighted Clash of Clans assets.



Current prototype must be extended rather than blindly treated as final — DECISION



The existing implementation is the foundation for major-project development.



No unsupported claims — DECISION



Project documentation must distinguish implementation from future work.



AI-assisted development must be represented honestly — DECISION



AI-assisted development is acceptable, but prompting alone should not be portrayed as the entirety of software engineering contribution.



18\. Assumptions

Individual Firebase identity corresponds to individual game state — FACT / ASSUMPTION



This relationship is stated in the project history and synopsis, but the exact complete Firestore schema has not been reconstructed here.



Browser remains a primary application environment — FACT



The current application is browser-based.



3D expansion remains compatible with the broader product vision — DECISION



The project intends to evolve the visual environment toward original 3D assets.



Existing game mechanics can serve as the foundation for future educational mechanics — DECISION



This is the stated development direction.



19\. Decisions Already Explicitly Approved



The following are the strongest established decisions:



Project name: DevOps COT.

Alternative name: Clashing DevTools.

Project type: B.Tech. major project.

Project ownership: solo project by Oram (2303031).

Core product: gamified DevOps learning/interaction platform.

Game-inspired interaction: base-building/strategy model.

Original visual identity: no copying of commercial game assets.

Current application: browser-based.

Firebase Authentication: part of current system.

Cloud Firestore: part of current persistence layer.

Current environment: 12 × 12 isometric grid.

Current DevOps-themed infrastructure: established building set.

Current resources: BuildPower, Containers and Data.

Builder AI: current system.

Daily Missions: current system.

ID Hunters clan: current demonstration clan.

Simulated infiltration: game mechanic only.

Git/GitHub: repository/version-control workflow.

Google AI Studio: AI-assisted development tool.

Antigravity: AI-assisted development tool.

Fable 5: planned future 3D asset-development workflow.

Future major-project direction: deeper DevOps educational integration.

Two primary objectives: explicitly preferred over a longer objective list.

20\. Proposals That Were Never Approved as Completed Features



The following must remain proposals/plans:



complete Docker gameplay integration

complete Jenkins gameplay integration

complete Kubernetes gameplay integration

complete CI/CD educational simulation

complete monitoring educational system

tutorial/chat-buddy

advanced educational missions

expanded collaborative learning clans

full 3D world

complete 3D building library

complete 3D troop/unit library

fully developed technology-city scenery

comprehensive DevOps technology progression

production-grade DevOps infrastructure

quantified educational effectiveness

large-scale multiplayer

real-world infrastructure deployment through gameplay

21\. Unknowns



The available conversation does not conclusively establish:



exact official expansion of COT

exact Firestore collection/document schema

complete Firebase security-rule behaviour

complete authentication session/persistence implementation details

exact public deployment platform

exact current public URL

whether the Express server is externally deployed

whether Docker Compose has actually been executed successfully

whether Jenkins has actually executed the Jenkinsfile

whether Nginx has been deployed

exact API contract of the pipeline simulation endpoint

exact production/deployment architecture

exact automated test suite

test coverage

performance metrics

scalability measurements

number of real users

formal educational evaluation

usability study results

final 3D technology/engine architecture

final Fable 5 asset pipeline

final database schema

final multiplayer architecture

final game balance

final progression levels

final technology unlock sequence

final list of troops/units

final list of defenses

final battle system

final win/loss system

final achievement system

final mission catalogue

final educational curriculum mapping

22\. Risks

Scope expansion — FACTUAL RISK



The project has a large planned vision involving gameplay, DevOps education, AI assistance, clans, missions and 3D assets.



Without prioritization, scope may become difficult to complete within an academic project timeline.



Educational depth — RISK



There is a risk that the project could become primarily a game while the DevOps educational purpose remains superficial.



3D development complexity — RISK



Moving from the current browser/isometric implementation toward a richer 3D environment introduces substantial asset-development and integration complexity.



Technology integration complexity — RISK



Adding Docker, Jenkins, Kubernetes, CI/CD and monitoring as meaningful gameplay/learning mechanics could substantially increase system complexity.



AI-assisted development complexity — RISK



AI-generated/AI-assisted code can introduce inconsistencies or implementation assumptions that require human verification and testing.



Cloud dependency — RISK



The current system depends on Firebase services for important functionality.



Scope versus academic deliverability — RISK



The final vision is substantially larger than the currently implemented foundation.



23\. Dependencies

Current dependencies — FACT



The current project depends on:



React

TypeScript

Vite

Tailwind CSS

Motion

Express

Node.js ecosystem

Firebase Authentication

Cloud Firestore

Git

GitHub

browser environment

Development dependencies — FACT



The development workflow has involved:



Google AI Studio

Antigravity

package management

Git/GitHub

Future dependencies — PROPOSAL



Future development may depend on:



Fable 5

additional 3D asset tooling

expanded cloud/backend infrastructure

potentially additional DevOps tooling



The exact future dependency list is not yet finalized.



24\. Success Criteria



No complete formal success-criteria specification has been explicitly approved in the project history.



Therefore the following are OPEN QUESTIONS, not established requirements:



Educational success — OPEN QUESTION



How will the project demonstrate that users actually understand DevOps concepts better through the game?



Functional success — OPEN QUESTION



What exact functionality must be completed before the project is considered finished?



Usability success — OPEN QUESTION



What usability criteria or user-testing methodology will be used?



Technical success — OPEN QUESTION



What performance, reliability or scalability thresholds are required?



3D success — OPEN QUESTION



What exact level of 3D environment completeness is required for the final major-project submission?



DevOps integration success — OPEN QUESTION



Which DevOps technologies must be genuinely integrated before final evaluation?



25\. Current Project State — Consolidated

Established working foundation — FACT



The project currently has a browser-based interactive application with:



Firebase authentication

Google-based login

individual authenticated users

individual Town Hall/base initialization

Firestore persistence

12 × 12 isometric environment

DevOps-themed buildings

resources

building construction

building upgrades

Builder Management

Builder AI

Daily Missions

ID Hunters clan

clan members/trophies/contributions

repository-fork gameplay

simulated infiltration gameplay

orchestration-oriented interface

system-log presentation

Express pipeline simulation endpoint

Repository state — FACT



The project has:



local Git repository

main branch

initial commit

GitHub remote

successful push to GitHub

clean working tree at the documented checkpoint

Not yet established as final — FACT



The project is not yet the complete major-project vision.



The future direction includes deeper educational DevOps integration and richer visual/gameplay systems.



26\. Contradictions in the Project History

Team project vs solo project — CONTRADICTION



Earlier project documentation identified:



Oram (2303031)

Vansh Jethi (2303072)

Tanveer Singh Dhanjal (2303069)



as team members.



Later, the user explicitly stated:



"this my solo project, only Oram(2303031)"



The current constitutional position is therefore:



DECISION: DevOps COT is a solo major project owned by Oram (2303031).



The earlier team attribution should be treated as historical/obsolete project documentation, not current ownership.



Current implementation vs future DevOps integration — APPARENT TENSION, NOT TRUE CONTRADICTION



The repository contains:



Docker configuration

Jenkinsfile

Nginx configuration

Jenkins/Docker terminology



while the project also explicitly states that deeper Docker/Jenkins/Kubernetes/CI/CD/monitoring educational integration is future work.



These are not necessarily contradictory.



The correct distinction is:



Configuration / existing DevOps-oriented components

&#x20;                   ≠

Complete educational integration of the technology



Therefore the project must not claim that the existence of a Jenkinsfile means that a complete Jenkins CI/CD learning system is already implemented.



2 objectives vs earlier 3-objective discussions — HISTORICAL EVOLUTION



Earlier versions discussed three objectives and subsequently reduced/restructured them.



The latest explicit requirement is two concise primary objectives.



The two-objective version should therefore be treated as the current decision.



27\. Missing Information Requiring Owner Input



Before this Constitution becomes a permanent project reference, the following should be explicitly confirmed by the project owner:



Project identity

What is the official expansion, if any, of COT?

Is the official title simply DevOps COT, or should Clashing DevTools appear formally?

Current implementation

Which of the documented gameplay systems are currently fully working in the latest code?

Which are partially implemented?

Which were demonstration-only?

Which were changed after the documented repository snapshot?

Firebase

Exact authentication provider configuration.

Exact Firestore data model.

Exact security rules.

Exact persistence behaviour.

Whether all game state is persistent across sessions.

Deployment

Current hosting platform.

Current public URL.

Whether frontend and backend are separately hosted.

Whether Firebase is the only cloud service currently required.

Whether the deployed version corresponds exactly to the GitHub repository.

DevOps tooling

Has Docker Compose actually been executed successfully?

Has Jenkins actually executed the Jenkinsfile?

Is Nginx actually used in the running application?

Is the Express server currently required in the deployed application?

What exactly does the pipeline simulation endpoint do?

Game

Exact current building catalogue.

Exact resource-generation rules.

Exact upgrade mechanics.

Exact Builder AI implementation.

Exact clan mechanics.

Exact fork mechanics.

Exact infiltration mechanics.

Whether combat exists beyond simulation.

Exact progression model.

Educational system

Which DevOps concepts are already educationally mapped?

Which are merely represented visually?

Which technologies must be included in the final major project?

What should each game object actually teach?

3D direction

Exact role of Fable 5.

Whether Fable 5 generates assets only or also participates in runtime/game development.

Target 3D style.

Target camera/perspective.

Whether the final application remains browser-based.

Final 3D rendering technology.

Final asset formats and pipeline.

Evaluation

How learning effectiveness will be evaluated.

Whether real students will test the system.

What constitutes successful completion.

What final features are mandatory versus optional.

28\. Facts Extracted



The strongest factual foundation currently established is:



DevOps COT is the current project name.

It is also historically called Clashing DevTools.

It is a B.Tech. Information Technology major project.

The current project is a solo project by Oram (2303031).

Its central purpose is gamified DevOps learning/interaction.

It uses a strategy/base-building interaction model.

It is inspired by the structure of games such as Clash of Clans.

It must maintain an original visual identity.

The current application is browser-based.

React 19 and TypeScript are part of the current stack.

Vite, Tailwind CSS and Motion are part of the current stack.

Express/Node.js components exist.

Firebase Authentication is used.

Google-based authentication is established.

Cloud Firestore is used.

Individual user/game state is supported.

A 12 × 12 isometric environment exists.

DevOps-themed buildings exist.

BuildPower, Containers and Data exist as resources.

Building construction/upgrading exists.

Builder Management exists.

Builder AI exists.

Daily Missions exist.

ID Hunters exists as a demonstration clan.

Clan members, levels, trophies and contributions are displayed.

Repository-fork gameplay exists.

Simulated infiltration gameplay exists.

The infiltration mechanic does not perform real-world attacks.

An orchestration-oriented interface exists.

A pipeline-status simulation endpoint exists.

Docker Compose configuration exists.

A Jenkinsfile exists.

Nginx configuration exists.

Git is used.

GitHub is used.

The project has a main branch.

The initial major-project commit was successfully pushed to GitHub.

Google AI Studio was used for AI-assisted development.

Antigravity was used for AI-assisted development.

Fable 5 is planned for future 3D asset development.

The final vision includes deeper DevOps educational integration.

Docker, Jenkins, Kubernetes, CI/CD and monitoring are future educational directions unless separately proven implemented.

A tutorial/chat-buddy system is a future direction.

A richer technology-city environment is a future direction.

Original 3D buildings, units and scenery are a future direction.

The project should not copy commercial game assets.

The project is not intended as a real-world cyberattack platform.

The project is not being represented as production-ready merely because DevOps configuration exists.

29\. Decisions Extracted



The principal decisions currently established are:



DevOps COT as project identity.

Solo ownership by Oram (2303031).

Gamified DevOps learning as the core product direction.

Base-building strategy as the interaction model.

Original visual identity instead of copying Clash of Clans assets.

Firebase Authentication for current authentication.

Firestore for current persistence.

React/TypeScript/Vite-based browser application.

Existing prototype as the foundation for major-project development.

Two primary project objectives.

Future progressive DevOps technology learning.

Future richer educational integration.

Future original 3D environment.

Fable 5 as planned 3D asset-development tooling.

Honest separation of implemented and planned functionality.

Simulated rather than real cyberattack mechanics.

30\. Unresolved Questions



The most important unresolved questions are:



What exactly is the final educational curriculum represented by the game?

Which DevOps technologies are mandatory for the final project?

What exact gameplay mechanic teaches each technology?

What is the final progression/unlock tree?

What constitutes completion of the major project?

What is the final 3D runtime/rendering approach?

What exactly will Fable 5 contribute?

Which current repository components are actually used at runtime?

What is the exact Firebase/Firestore schema?

What is the exact deployment architecture?

What formal evaluation will demonstrate educational value?

Which future gameplay systems are mandatory and which are optional?

31\. Final Constitutional Position



At this stage, the safest formal understanding of the project is:



DevOps COT is a solo B.Tech. major project by Oram (2303031) that develops a gamified DevOps learning and interaction platform. The existing browser-based implementation provides an interactive isometric base-building environment with Firebase authentication, Firestore-backed user/game persistence, DevOps-themed infrastructure, resources, upgrades, Builder AI, missions, clan and repository-fork interactions, and simulated operational gameplay. The project is intended to evolve beyond this foundation into a more structured DevOps learning environment in which game progression progressively introduces DevOps concepts and technologies. The future vision includes guided learning, deeper integration of technologies such as Docker, Jenkins, Kubernetes, CI/CD and monitoring, expanded educational/gameplay systems, and an original futuristic 3D technology-city environment using Fable 5 as part of the planned 3D asset-development workflow.



Most important constitutional boundary:



CURRENT PROJECT

&#x20;     │

&#x20;     ├── Functional game foundation

&#x20;     ├── Authentication + persistence

&#x20;     ├── DevOps-themed game systems

&#x20;     ├── Resources / buildings / upgrades

&#x20;     ├── Builder AI / missions

&#x20;     ├── Clan / fork / simulated operations

&#x20;     └── GitHub repository

&#x20;               │

&#x20;               ▼

&#x20;     MAJOR PROJECT DEVELOPMENT

&#x20;               │

&#x20;               ├── Structured DevOps learning

&#x20;               ├── Progressive technology unlocking

&#x20;               ├── Guided learning

&#x20;               ├── Advanced educational gameplay

&#x20;               ├── Rich technology-city environment

&#x20;               └── Original 3D assets



No final architecture has been defined by this document. This Constitution establishes the project's known identity, boundaries, current foundation, approved direction, and unresolved decisions so that the subsequent architecture work can be requirement-driven rather than based on assumptions.

