# Project Blueprint: The Smart Salon

## 1. Overview

This document outlines the architecture, design, and features of "The Smart Salon," a modern, content-focused website built with Astro.js. The goal is to create a visually immersive and highly performant user experience that reflects the salon's brand of style and serenity. The site features a unique, animation-driven entrance on the homepage to captivate users from the first moment.

## 2. Project Outline

### 2.1. Technology Stack

*   **Framework:** Astro.js
*   **Styling:** Global CSS (`global.css`) and scoped styles within Astro components.
*   **Deployment:** Static-first build, suitable for modern hosting platforms.

### 2.2. Design & Aesthetics

*   **Color Palette:** Primarily uses variables defined in `global.css`, featuring a clean and modern aesthetic with primary, text, and background colors.
*   **Typography:** Utilizes Garamond for serif fonts, lending an elegant and classic feel.
*   **Visual Effects:** Implements blur and scaling effects to create a sense of depth, particularly in the entrance animation.

### 2.3. Implemented Features

#### 2.3.1. Global Components

*   **Header (`Header.astro`):**
    *   Displays site navigation.
    *   Features black text for high readability.
    *   Includes a prominent, large "Book Now" button to drive user action.
*   **Footer (`Footer.astro`):**
    *   Contains a simple copyright notice and branding.
    *   Visually separated from the main content with a top border.

#### 2.3.2. Homepage (`index.astro`)

*   **Grand Entrance Animation (Corrected Implementation):**
    *   **Architecture:** The animation is now driven by a simplified `Door.astro` component and a synchronized script in `index.astro`. The new implementation uses a dedicated `div` for the black background, which is more reliable than the previous CSS-only methods.
    *   **Loading Behavior:** A `visibility: hidden` rule in `Layout.astro` prevents any "flash of unstyled content" (FOUC). The script in `index.astro` makes the page visible only after the initial scene is fully prepared, guaranteeing a smooth and glitch-free load.
    *   **Trigger:** The animation is exclusively user-initiated, starting only on a click or keypress. It activates only on the user's first visit to the homepage during a session (managed via `sessionStorage`).
    *   **Initial State:** The screen is covered by a solid, pitch-black overlay (`door-overlay`). A "blurry glass" door (`glass-door`) appears to float in the darkness, showing a blurred preview of the homepage content behind it.
    *   **Animation Sequence:**
        1.  On user interaction, the `.opening` class is added to the glass door, causing it to swing open with a 3D effect.
        2.  Simultaneously, the `.hiding` class is added to the black overlay, causing it to fade out.
        3.  The main page content (`page-content`) has its `.content-hidden` class removed, allowing it to un-blur, scale up, and fade in.
        4.  The entire door component is hidden from view after the animations are complete.
*   **Hero Section:**
    *   Displays the main marketing message with a clear typographic hierarchy.

### 2.4. Page Structure

*   **`src/layouts/Layout.astro`:** The main site template, which includes the global `visibility: hidden` style to prevent FOUC.
*   **`src/pages/index.astro`:** The homepage, containing the hero section and the master script for the entrance animation.
*   **`src/components/Door.astro`:** The rewritten, simplified component for the entrance animation, now with a dedicated overlay `div`.
*   **`src/components/Header.astro` and `src/components/Footer.astro`:** Global header and footer.

## 3. Current Task

**Objective:** Awaiting final user confirmation on the corrected animation.

**Plan:**
*   No active task. Ready for new instructions.
