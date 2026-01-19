# Nouranto Project Context

## Project Overview
This repository contains a high-fidelity prototype for **Nouranto**, a premium Egyptian agriculture export company with a heritage dating back to 1988 (roots extending over 70 years). The project demonstrates a "bold minimalist" web design using HTML and Tailwind CSS, and utilizes **Beads (`bd`)** for AI-native issue tracking.

## Technology Stack
*   **Frontend:** HTML5, Tailwind CSS (via CDN), Google Fonts, Google Material Symbols.
*   **Styles:** Externalized in `assets/styles.css`.
*   **Issue Tracking:** [Beads](https://github.com/steveyegge/beads) (CLI tool: `bd`).
*   **Architecture:** Static site with multiple pages (`index.html`, `contact.html`).

## Key Files
*   `index.html`: The main landing page, featuring sections for Hero, Stats, About Us, Mission & Vision, Certifications, Product Calendar, and Partnership.
*   `heritage.html`: A dedicated page showcasing the company's 80-year timeline, generational narrative, and vision for sustainability.
*   `contact.html`: A specialized B2B inquiry page with a detailed procurement form.
*   `DESIGN_SYSTEM.md`: Documentation of the visual style, color palette, and typography.
*   `AGENTS.md`: **CRITICAL**. Specific instructions for AI agents regarding workflow, issue tracking, and git operations.
*   `content.md`: Source of truth for website copy and business details.
*   `.beads/`: Directory for Beads configuration and issue database.

## Business Context (from `content.md`)
*   **Founding:** Founded by Khaled ElMeligy in 1988 as a family business.
*   **Location:** 11 El Gazayer Street, Aswan Square, Mohandseen, Cairo, Egypt.
*   **Operations:** Controls the entire supply chain from 6 strategic farms to advanced packing stations.
*   **Products:** Green beans, Mange tout / Sugarsnaps, Spring Onions, Strawberries, Grapes, and Iceberg Lettuce.
*   **Compliance:** Certified for Global GAP, GRASP, SPRING, BRC, and SEDEX.

## Development Workflow
AI agents **MUST** follow the mandated workflow in `AGENTS.md`, including using `bd` for task management and ensuring all changes are pushed to the remote repository at the end of every session.