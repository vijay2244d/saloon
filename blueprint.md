# Project Blueprint

## 1. Project Overview

**The Smart Salon** is a modern, content-focused website for a fictional AI-powered hair salon. Built with Astro.js, it prioritizes performance and a seamless user experience. The site is designed to be visually appealing, accessible, and easy to navigate, with a focus on showcasing the salon's services and encouraging bookings.

## 2. Project Outline

### 2.1. Style & Design

*   **Palette:**
    *   `--ivory`: #F6F7EB (background)
    *   `--gunmetal`: #393E41 (text)
    *   `--fiery-terracotta`: #E94F37 (primary accent)
*   **Typography:** A clean, modern sans-serif font is used throughout the site.
*   **Visuals:** The site uses a full-width hero image to create a strong first impression. Decorative animations are used to add a touch of personality.

### 2.2. Features

*   **Responsive Header:** A fully responsive header with a hamburger menu for mobile devices.
*   **Hero Section:** A prominent hero section with a compelling headline, descriptive text, and a call-to-action button.
*   **Accessibility:** The site is designed to be accessible, with ARIA attributes and other accessibility best practices implemented.
*   **Animations:** Subtle animations are used to enhance the user experience.

## 3. Current Change: Accessibility Audit & Hero Component

### 3.1. Plan & Steps

1.  **Audit Components:** Review all existing components in the `src/components` directory for accessibility issues.
2.  **Remediate Issues:** Address any accessibility issues found, including:
    *   Adding `aria-` attributes to interactive elements.
    *   Providing text alternatives for icons and images.
3.  **Create Hero Component:** Create a new `Hero.astro` component to be the main feature of the landing page.
4.  **Integrate Hero Component:** Add the new `Hero.astro` component to the `index.astro` page.
5.  **Style Hero Component:** Add the necessary styling for the `Hero.astro` component to the `global.css` file.
6.  **Create Blueprint:** Create a `blueprint.md` file to document the project's purpose, features, and the changes made.