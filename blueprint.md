# Project Blueprint

## 1. Project Overview

**The Smart Salon** is a modern, content-focused website for a fictional AI-powered hair salon. Built with Astro.js, it prioritizes performance and a seamless user experience. The site is designed to be visually appealing, accessible, and easy to navigate, with a focus on showcasing the salon's services and encouraging bookings.

## 2. Project Outline

### 2.1. Style & Design

*   **Palette:**
    *   `--ivory`: #F6F7EB (background)
    *   `--gunmetal`: #393E41 (text)
    *   `--fiery-terracotta`: #E94F37 (primary accent)
*   **Typography:** The site will use "Playfair Display" for headings and a clean, modern sans-serif font for the body text.
*   **Visuals:** The site uses a full-width hero section with a barber pole graphic to create a strong first impression. The navigation icons now match the accent color.

### 2.2. Features

*   **Hero Section:** A prominent hero section with a compelling headline, descriptive text, and a barber pole graphic. The home page is non-scrollable to keep the focus on the hero section.
*   **Interactive Dock:** A bottom navigation dock that provides an interactive and visually appealing way to navigate the site. The icon colors have been updated to match the site's theme.
*   **Accessibility:** The site is designed to be accessible, with ARIA attributes and other accessibility best practices implemented.
*   **Animations:**
    *   **One-Time Intro Animation:** A responsive door animation that plays only once per user session. It uses `sessionStorage` to ensure it doesn't repeat on subsequent page loads.
        *   **Laptop/Default:** A full-screen, blurry-glass door with handles.
        *   **Desktop (>1440px):** A centered, 50% width door with a black background.
    *   **Hair Animation:** A subtle hair-falling animation is present on the "Services" page.
*   **Content Pages:** Dedicated pages for "About Us", "Services", "Booking", "Reviews", and "Special Offers".
    *   The **Services** page lists the salon's actual services with custom icons and detailed descriptions. The service cards are now square and have a more prominent hover effect. Clicking a service card redirects the user to the booking page with the service pre-selected.
    *   The **Booking** page now features a comprehensive booking form and displays the salon's phone number.
    *   The **Offers** page has been cleaned up.

## 3. Current Task

### Enhance Service Page

**Objective:** Change the service placeholders on the services page to be square and add a more prominent hover effect.

**Plan:**

1.  **[Done]** Updated `src/pages/services.astro` to change the grid layout and styling of the service cards to be square and have a more pronounced hover effect.

## 4. Previous Tasks

### Enhance Booking Page

**Objective:** Add a complete booking form to the booking page, including fields for the user's name, email, and phone number, and display the salon's phone number.

**Plan:**

1.  **[Done]** Updated `src/pages/booking.astro` to include a full booking form with fields for service, name, email, phone number, date, and time.
2.  **[Done]** Created a new `src/components/PhoneNumber.astro` component to display the salon's contact number.
3.  **[Done]** Added the `PhoneNumber` component to the booking page.

### Remove Header

**Objective:** Remove the redundant header component to simplify the layout.

**Plan:**

1.  **[Done]** Removed the `<Header />` component from `src/layouts/Layout.astro`.
2.  **[Done]** Deleted the `src/components/Header.astro` file.

### Implement One-Time Intro Animation

**Objective:** Ensure the door animation only plays once per user session.

**Plan:**

1.  **[Done]** Used `sessionStorage` in `Door.astro` to track if the intro has been seen.
2.  **[Done]** Hid the component instantly on subsequent views within the same session.

## 5. Next Task

### Deploy the Website

**Objective:** Deploy the website to a public URL.

**Plan:**

1.  Run the build command to generate the static files.
2.  Deploy the `dist` folder to Firebase Hosting.
