# Nouranto Project Context

## Project Overview
This repository contains a high-fidelity prototype for **Nouranto**, a premium Egyptian agriculture export company with a heritage dating back to 1989 (roots extending over 70 years). The project demonstrates a "bold minimalist" web design using HTML and Tailwind CSS, and utilizes **Beads (`bd`)** for AI-native issue tracking.

## Technology Stack
*   **Frontend:** HTML5, Tailwind CSS (via CDN), Google Fonts, Google Material Symbols.
*   **Styles:** Externalized in `assets/styles.css`.
*   **Scripts:** Shared logic in `assets/scripts.js`.
*   **Issue Tracking:** [Beads](https://github.com/steveyegge/beads) (CLI tool: `bd`).
*   **Architecture:** Static site with multiple pages (`index.html`, `heritage.html`, `packhouse.html`, `products.html`, `contact.html`).

## Key Files
*   `index.html`: The main landing page, featuring sections for Hero, Stats, About Us, Mission & Vision, Certifications, Product Calendar, and Partnership.
*   `heritage.html`: A dedicated page showcasing the company's 80-year timeline, generational narrative, and vision for sustainability.
*   `farms.html`: Detailed overview of the 6 strategic farm locations and global safety certifications.
*   `packhouse.html`: Details on the packhouse facilities, Cool Chain technology, logistics (Nouranto Cargo), and packaging specifications.
*   `products.html`: A comprehensive product portfolio with an interactive crop calendar and detailed varietal information.
*   `contact.html`: A specialized B2B inquiry page with a detailed procurement form.
*   `DESIGN_SYSTEM.md`: **CRITICAL REFERENCE**. Must be followed for all visual and UI changes.
*   `AGENTS.md`: **CRITICAL**. Specific instructions for AI agents regarding workflow, issue tracking, and git operations.
*   `content.md`: **CRITICAL REFERENCE**. Source of truth for all website copy and business details. Must be consulted for any content updates.
*   `Product Portfolio prompts.md`: Detailed specifications for the product portfolio page.
*   `.beads/`: Directory for Beads configuration and issue database.

## Business Context (from `content.md`)
*   **Founding:** Founded by Khaled ElMeligy in 1989 as a family business.
*   **Location:** 11 El Gazayer Street, Aswan Square, Mohandseen, Cairo, Egypt.
*   **Operations:** Controls the entire supply chain from 6 strategic farms to advanced packing stations.
*   **Products:** Green beans, Mange tout / Sugarsnaps, Spring Onions, Strawberries, and Grapes.
*   **Compliance:** Certified for Global GAP, GRASP, SPRING, BRC, and SEDEX.

## Development Workflow
AI agents **MUST** follow the mandated workflow in `AGENTS.md`, including using `bd` for task management and ensuring all changes are pushed to the remote repository at the end of every session.

**Note for AI Agents:** You MUST reference `@DESIGN_SYSTEM.md` for any visual or stylistic changes and `@content.md` for any text or business logic updates in all your thinking and planning processes.
