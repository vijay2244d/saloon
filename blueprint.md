# Project Blueprint: The Smart Salon

## 1. Project Overview

This project is a modern, multi-page website for "The Smart Salon," a fictional high-tech hair salon. The site is built with Astro.js and focuses on a clean, visually appealing design, smooth animations, and a clear, intuitive user experience. The architecture has been transitioned from a single-page layout to a more traditional multi-page structure for better organization and scalability.

## 2. Implemented Features & Design

### 2.1. Multi-Page Architecture

The website is now structured as a multi-page application with the following pages:

*   **Home (`/`):** A welcoming landing page featuring a unique door-opening animation.
*   **About (`/about`):** A page describing the salon's mission and team.
*   **Services (`/services`):** A page detailing the salon's offerings.
*   **Contact (`/contact`):** A page with contact information and a map.

This structure was achieved by moving content from individual components into dedicated page files within the `src/pages/` directory.

### 2.2. Header & Navigation

*   A consistent header is present on all pages.
*   The header displays the salon's name on the left and navigation links on the right.
*   The navigation links have increased spacing for better readability and a more balanced design.

### 2.3. Door Animation (Home Page)

*   **Functionality:** On a user's first visit, they are presented with a full-screen overlay and a stylized, clickable door. The main content is hidden.
*   **Interaction:** The main content is revealed with a smooth animation *only* when the user clicks directly on the door structure.
*   **Animation Details:**
    *   The door swings open with a 3D perspective effect.
    *   The door and overlay fade out smoothly after the animation completes.
    *   Subsequent visits bypass the animation for a faster experience, tracked via `sessionStorage`.
*   **Visuals:** The door has a modern, semi-transparent design with a handle for better affordance.

### 2.4. Hair Animation (Services Page)

*   **Functionality:** When a user navigates to the "Services" page, a gentle animation of falling hair strands plays in the background.
*   **Visuals:** The animation features realistic-looking hair strands of varying colors and sizes, creating an elegant and immersive effect.
*   **Duration:** The animation runs for a few seconds and then fades out to avoid distracting from the page content.

### 2.5. Styling & Design

*   **Color Palette:** The design uses a sophisticated color palette with `--ivory` as the primary background color, `--gunmetal` for text, and `--fiery-terracotta` for accents and highlights.
*   **Typography:** The site uses a clean, modern font with a clear hierarchy for headings and body text.
*   **Layout:** The layout is responsive and uses Tailwind CSS for a consistent and mobile-friendly design.

## 3. Current State & Plan

*   **Current Action:** The door animation's click behavior has been corrected to only trigger when the door itself is clicked. The clickable area is no longer the entire screen.
*   **Next Steps:** Awaiting user feedback on the corrected door animation and overall site design before proceeding with any further changes.
