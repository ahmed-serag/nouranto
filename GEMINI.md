# Nouranto Project Context

## Project Overview
This repository contains a high-fidelity prototype for **Nouranto**, a premium B2B Egyptian agriculture export company. The project serves as a demonstration of a "bold minimalist" web design using HTML and Tailwind CSS, and it utilizes **Beads (`bd`)** as an AI-native issue tracking system embedded directly within the repository.

## Technology Stack
*   **Frontend:** HTML5, Tailwind CSS (via CDN), Google Fonts.
*   **Issue Tracking:** [Beads](https://github.com/steveyegge/beads) (CLI tool: `bd`).
*   **Architecture:** Single-file static site (`index.html`).

## Key Files
*   `index.html`: The main landing page for the Nouranto website. It includes embedded Tailwind configuration and styles.
*   `AGENTS.md`: **CRITICAL**. specific instructions for AI agents regarding workflow, issue tracking, and git operations.
*   `prompts.md`: The original design specification and prompt used to generate the `index.html` content.
*   `.beads/`: Directory containing the Beads configuration and local issue database (`interactions.jsonl`).

## Development Workflow

### Agent Mandates (from `AGENTS.md`)
AI agents working on this repository **MUST** adhere to the following workflow:

1.  **Task Management (`bd`):**
    *   `bd ready`: Find available work.
    *   `bd show <id>`: View issue details.
    *   `bd update <id> --status in_progress`: Claim a task.
    *   `bd close <id>`: Mark a task as complete.

2.  **Session Completion ("Landing the Plane"):**
    Before finishing a session, you must:
    1.  File new issues for any incomplete or follow-up work using `bd create`.
    2.  Run any necessary quality checks.
    3.  **Sync and Push (MANDATORY):**
        ```bash
        git pull --rebase
        bd sync
        git push
        ```
    4.  Verify the push was successful (`git status`).

### Running the Project
Since this is a static site with no build step:
1.  Open `index.html` directly in a web browser.
2.  No `npm install` or build commands are required.
