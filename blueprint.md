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

## Current Change Request

*   **Change:** Remove the theme switch mode and the central object from the navigation bar.
*   **Plan:**
    1.  ~~Remove the `ThemeToggle` component from the `Dock.jsx` file.~~
    2.  ~~Delete the `ThemeToggle.jsx` component file.~~
    3.  ~~Remove the dark theme classes and logic from `Layout.astro`.~~
    4.  ~~Remove the central object styling from `Dock.css`.~~
    5.  ~~Remove the logic for the central object from `Dock.jsx`.~~
    6.  Update the `blueprint.md` file to document the removal of the theme switch mode and the central object.
