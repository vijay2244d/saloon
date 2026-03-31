# Project Blueprint

## Overview

This project is a modern, content-focused website for "The Smart Salon," built with Astro.js. The site is designed to be highly performant, with a focus on delivering a great user experience and excellent Core Web Vitals. It features a sophisticated and luxurious design, with a clean and intuitive user interface.

## Implemented Features & Styles

### Initial Setup (Version 1.0)

*   **Framework:** Astro.js
*   **Styling:** Tailwind CSS (initial setup)
*   **Layout:** Basic layout with a header, footer, and main content area.
*   **Pages:**
    *   `index.astro`: Home page
    *   `about.astro`: About Us page
*   **Components:**
    *   `Header.astro`: Site header
    *   `Footer.astro`: Site footer
    *   `Layout.astro`: Main layout component

### Version 1.1

*   **Home Page:**
    *   **Hero Section:** Added a full-screen hero section with a background video and a welcoming message.
    *   **Services Section:** Created a section to showcase the salon's services, with a grid of cards.
    *   **Testimonials Section:** Added a section for customer testimonials.
    *   **Call to Action:** Included a call-to-action button to encourage users to book an appointment.
*   **About Us Page:**
    *   **Team Section:** Created a section to introduce the salon's team members, with images, names, roles, and bios.
*   **Styling:**
    *   **Color Palette:** Implemented a sophisticated color palette with `--ivory` and `--gunmetal` as the primary colors, and `--fiery-terracotta` as an accent color.
    *   **Typography:** Used the "Playfair Display" font for headings to create an elegant and luxurious feel.
    *   **Animations:** Added subtle animations and transitions to enhance the user experience.

### Version 1.2

*   **About Us Page:**
    *   Updated the team members' roles and bios to be more professional and appropriate for a high-end salon.
*   **Services Page:**
    *   Replaced the futuristic and unrealistic service descriptions with a list of professional, high-end salon services.

### Version 1.3 (Security Enhancements)

*   **Firebase Hosting:** Initialized Firebase Hosting to enable the configuration of security headers.
*   **Security Headers:** Implemented the following security headers in `firebase.json` to protect against common web vulnerabilities:
    *   **Content-Security-Policy:** Restricts the sources of content to prevent XSS attacks.
    *   **X-Frame-Options:** Prevents clickjacking by controlling whether the site can be embedded in an iframe.
    *   **X-Content-Type-Options:** Prevents MIME-type sniffing by forcing the browser to adhere to the `Content-Type` header.
    *   **Referrer-Policy:** Controls how much referrer information is sent in requests.
*   **Dependency Audit:** Performed a security audit of all project dependencies using `npm audit` and resolved all identified vulnerabilities by running `npm audit fix`.

### Version 1.4 (Navigation)

*   **Navigation Dock:**
    *   **Glass Effect:** The navigation dock has been redesigned with a frosted glass effect using `backdrop-filter`, giving it a modern, iOS-style appearance.

### Version 1.5 (Navigation Cleanup)

*   **Navigation Dock:**
    *   Removed the theme switch toggle from the navigation dock.
    *   Removed the central object/placeholder from the navigation dock.
    *   Deleted the `ThemeToggle.jsx` component.
    *   Removed all dark theme related styles and logic from the application.

### Version 1.6 (Code Refactoring)

*   **Goal:** Improve maintainability and adherence to best practices by externalizing inline CSS and JavaScript.
*   **Actions Taken:**
    *   Scanned all `.astro` and `.jsx` components within the `src/components/` directory.
    *   For each component containing `<style>` tags, the CSS was extracted into a new, corresponding `.css` file in `src/styles/`.
    *   For each component containing `<script>` tags, the JavaScript was extracted into a new, corresponding `.js` file in `src/scripts/`.
    *   For the React component `Dock.jsx`, inline style objects were converted to CSS classes and moved to `src/components/Dock.css`.
    *   Components were updated to import the new external CSS and JS files.
*   **Affected Components:**
    *   `src/components/Card.astro`
    *   `src/components/Dock.jsx`
    *   `src/components/Door.astro`
    *   `src/components/Gift.astro`
    *   `src/components/HairAnimation.astro`
*   **Benefits:**
    *   Cleaner and more readable component files.
    *   Improved separation of concerns (structure, style, and behavior).
    *   Enhanced cacheability of CSS and JavaScript assets.

### Version 1.7 (Theme Changer)

*   **Goal:** Implement a light/dark theme switcher.
*   **Actions Taken:**
    *   Created a new React component `ThemeToggle.jsx` to handle theme switching logic.
    *   Added CSS for the `ThemeToggle` component in `src/styles/ThemeToggle.css`.
    *   Updated `src/styles/global.css` with a dark theme color palette.
    *   Integrated the `ThemeToggle` component into the `Dock.jsx` navigation component.
*   **Functionality:**
    *   The theme preference is saved to `localStorage` to persist across sessions.
    *   A `data-theme` attribute on the `<html>` element is updated to dynamically switch between light and dark themes.

### Version 1.8 (Theme Toggle Repositioning)

*   **Goal:** Move the theme toggle to a more conventional, fixed position.
*   **Actions Taken:**
    *   Removed the `ThemeToggle` component from the `Dock.jsx` component.
    *   Added the `ThemeToggle` component directly to the main `src/layouts/Layout.astro` file.
    *   Added inline CSS to `Layout.astro` to position the toggle in the top-right corner of the screen using `position: fixed`.
*   **Benefit:** The theme toggle is now always accessible in a consistent location across all pages.

### Version 1.9 (Dependency Maintenance)

*   **Goal:** Update outdated project dependencies to improve security, performance, and stability.
*   **Actions Taken:**
    *   Attempted to update all dependencies to their latest versions.
    *   Encountered a critical "Unsupported engine" error, as the latest Astro versions require Node.js v22+, while the environment runs Node.js v20.
    *   Resolved the issue by systematically downgrading `astro`, `@astrojs/react`, `@astrojs/solid-js`, `@astrojs/tailwind`, and `tailwindcss` to the latest versions compatible with Node.js v20.
    *   Used the `--legacy-peer-deps` flag to resolve several complex peer dependency conflicts that arose during the downgrade process.
    *   Started the development server and performed a full visual and functional regression test.
*   **Outcome:**
    *   All dependencies are now on stable, compatible versions.
    *   The application is confirmed to be running correctly, with all original animations, layout, and component functionality preserved.
    *   The project is now on a more secure and stable foundation.

### Version 2.0 (Dark Mode Optimization)

*   **Goal:** Fix an issue where service card names were unreadable in dark mode.
*   **Problem:** The existing theme implementation caused light text to be displayed on a light background for the service cards in dark mode. This was due to a simple CSS variable swap that didn't account for the cards' hardcoded white background.
*   **Actions Taken:**
    *   **Adopted Tailwind's Class-Based Dark Mode:** The theming strategy was upgraded to use Tailwind CSS's standard `class`-based system for better control and maintainability.
    *   **Updated `tailwind.config.cjs`:** Set the `darkMode` property to `'class'` to enable the new strategy.
    *   **Refactored `ThemeToggle.jsx`:** The theme toggle component was modified to add/remove the `dark` class to the `<html>` element, activating Tailwind's `dark:` variants.
    *   **Applied `dark:` Variants:** The service cards in `src/pages/services.astro` were updated with `dark:` utility classes (e.g., `dark:bg-gunmetal`, `dark:text-ivory`) to define their appearance in dark mode.
    *   **Cleaned up CSS:** The now-redundant `[data-theme="dark"]` styles were removed from `src/styles/global.css`.
*   **Outcome:**
    *   The service cards are now perfectly readable in both light and dark modes.
    *   The project's theming system is now more robust, maintainable, and aligned with industry best practices.

### Version 2.1 (Global Theme Application)

*   **Goal:** Ensure the dark theme is applied consistently across the entire website.
*   **Problem:** The initial dark mode implementation only targeted specific components, leaving the rest of the site in light mode.
*   **Actions Taken:**
    *   **Updated `src/layouts/Layout.astro`:** Applied the `dark:` utility classes to the `<body>` tag to set the global background and text colors for dark mode.
    *   **Updated `src/components/Dock.css`:** Added `dark:` mode styles to the navigation dock and its labels to ensure their appearance is consistent with the new theme.
*   **Outcome:**
    *   The dark theme is now applied globally and consistently across all pages and components.

### Version 2.2 (Responsive Design Audit & Implementation)

*   **Goal:** Ensure the website is fully responsive and provides an optimal viewing experience on all devices, from mobile to desktop.
*   **Actions Taken:**
    *   **Global Layout (`Layout.astro`):**
        *   Updated the viewport meta tag to `width=device-width, initial-scale=1.0` to ensure proper scaling on all devices.
        *   Adjusted the fixed positioning of the navigation dock to be closer to the bottom edge on mobile devices for better ergonomics (`bottom-4 sm:bottom-6 md:bottom-8`).
    *   **Hero Component (`Hero.astro`):**
        *   Converted the static, horizontal layout to a flexible layout that stacks vertically on small screens (`flex-col`) and transitions to a horizontal layout on larger screens (`sm:flex-row`).
        *   Implemented responsive typography, reducing heading sizes on mobile for better readability.
    *   **Services Page (`services.astro`):**
        *   Made the typography for the page title and description responsive.
        *   Removed the fixed `aspect-square` from the service cards, allowing their height to adjust to the content, which prevents text from being cut off on smaller screens.
        *   Optimized section and container padding for different breakpoints.
    *   **Navigation Dock (`Dock.jsx`, `Dock.css`):**
        *   Removed the `<Movable>` wrapper component, as draggable UI elements are not a standard or intuitive pattern on mobile. The `Movable.jsx` file was deleted.
        *   Reduced the default `baseItemSize` and `magnification` of the dock items in `Dock.jsx` to create a more compact appearance.
        *   Added a media query to `Dock.css` to reduce the `gap` and `padding` of the dock on screens smaller than 640px.
*   **Outcome:**
    *   The website is now fully responsive, offering a seamless and intuitive user experience across a wide range of screen sizes.
    *   Key pages and components have been audited and refactored to adhere to responsive design best practices.

## Current Change Request

*There are no active change requests.*
