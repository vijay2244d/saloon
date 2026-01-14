# Project Blueprint

## Overview

This project is a modern, content-focused website for "The Smart Salon," built with Astro.js. The primary goal is to create a fast, highly-performant, and visually engaging web experience for clients, showcasing the salon's services, special offers, and providing a seamless booking process.

## Implemented Features

### Core & Styling

*   **Framework:** Astro.js
*   **Styling:** Tailwind CSS with a custom color palette defined in `src/styles/global.css`.
*   **Layout:** A consistent layout (`src/layouts/Layout.astro`) is used across all pages, providing a unified look and feel.
*   **Header:** A navigation header (`src/components/Header.astro`) is present on all pages, allowing users to easily navigate the site.
*   **Typography:** A modern and elegant font combination is used to create a premium feel.
*   **Color Palette:** The color scheme is based on a sophisticated palette of Ivory, Gunmetal, Fiery Terracotta, and Coral Pink.

### Pages & Components

*   **Home Page (`/`):** A welcoming landing page featuring a stylish barber pole animation (`src/components/BarberPole.astro`) and a brief introduction to the salon (`src/components/Welcome.astro`).
*   **Entrance Animation:** A sleek, modern entrance animation featuring a "frosted glass" door that splits in half and slides open to reveal the website content. The door is enhanced with sleek, vertical handles and a subtle inner shadow for a more premium and realistic feel. The "Click to Enter" text has been removed for a cleaner, more minimalist design. The surrounding area of the door is blacked out, creating a spotlight effect.
*   **Services Page (`/services`):** A showcase of the salon's services, including precision haircuts, expert coloring, and luxe treatments. The page is designed to be visually appealing, with high-quality images and descriptive text.
*   **Offers Page (`/offers`):** A dedicated page to highlight special promotions and discounts. The page features an "offer giver" theme, with a unique gift icon (`src/components/Gift.astro`) for each offer, making the deals feel more special and enticing.
*   **Booking Page (`/contact`):** A full-fledged booking page that allows clients to schedule appointments directly on the website. The page features:
    *   An interactive calendar for date selection, powered by `vanilla-calendar-ii`.
    *   A time slot picker with a list of available appointment times.
    *   A user-friendly form to collect client information (name, email, phone number).

## Current Plan

This marks the completion of the requested features. The next steps will be determined by your feedback and any new requests.
