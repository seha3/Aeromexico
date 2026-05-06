# Aeroméxico — UI Developer Technical Test

Frontend technical assessment focused on responsive layout implementation and dynamic DOM manipulation using vanilla JavaScript.

## Overview

This project contains the solutions for the two requested exercises:

1. **Pixel perfect responsive layout**
2. **Dynamic login modal customization**

The implementation was built using:

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript

No frameworks or UI libraries were used.

---

# Exercise 1 — Responsive UI Layout

A responsive implementation based on the provided Figma design.

## Features

- Responsive desktop and mobile layouts
- Flexbox-based layout system
- Pixel-focused spacing and typography adjustments
- Hover states
- SVG asset integration
- Semantic HTML structure

## Tech Decisions

- Flexbox was used instead of CSS Grid because the layout structure is primarily component-oriented and linear.
- SVG assets were preferred for scalability and visual consistency with the Figma design.
- CSS was intentionally kept simple and maintainable without introducing unnecessary abstractions.

---

# Exercise 2 — Login Modal DOM Manipulation

A JavaScript solution that dynamically modifies the login modal UI.

## Requirements Covered

- Changes the label:
  - `Cuenta Aeroméxico Rewards`
  - → `Correo electrónico`

- Restyles the **Iniciar sesión** button according to the provided design.

- Keeps modifications persistent when:
  - the modal closes and reopens
  - switching between “Inicia sesión” and “Inscríbete”
  - the modal content re-renders dynamically

## Technical Approach

The solution uses:

- `MutationObserver`
- dynamic DOM querying
- runtime style injection
- scoped modal observation

The implementation first detects when the modal appears in the DOM and then limits observation to the modal node itself for better performance and cleaner state handling.

---

# Project Structure

```bash
.
├── index.html
├── styles.css
├── modal-fix.js
└── assets
