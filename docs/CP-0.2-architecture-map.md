# Architecture & Dependency Map

- **Frontend Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Motion for animations
- **Backend/Database**: Firebase v12 (Auth + Firestore)
- **Deployment/Server**: Express server (`server.ts` executed with `tsx`) + Docker (`docker-compose.yml`, `nginx.conf`) + Jenkins pipeline (`Jenkinsfile`)

### Core Flow Identified (Static Analysis Only)
- `src/main.tsx` -> renders `<App />`
- `src/App.tsx` acts as the root orchestrator.
- Authentication happens via Google Popup.
- On auth, `users/{userId}` is polled/created for state management.
- The `IsometricGrid` consumes the `buildings` state from Firestore to render the base.
- Game mechanics like Attacks, Daily Missions, Clans, and Forking all interact with Firebase by incrementing values via `updateDoc`.

*No architectural redesigns proposed. All static features require human validation / E2E test suites to prove runtime behavior.*
