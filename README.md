# Enterprise Developer Portfolio

A responsive and accessible developer portfolio built with semantic HTML, modern CSS, and vanilla JavaScript.

The project demonstrates semantic DOM architecture, responsive layout design, theme persistence, reusable component architecture, accessibility practices, and resilient UI state management.

---

## Features

- Semantic HTML landmark architecture
- Zero `<div>` elements
- Accessible Skip to Content link
- Responsive CSS Grid layout
- Mobile support at 375px viewport width
- Light and dark theme support
- Theme persistence using `localStorage`
- Accessible theme switcher using `aria-pressed`
- Responsive Hero section
- Skills Matrix
- Project Cards
- Native validated Contact Form
- Client-side form handling
- Loading Skeleton with CSS shimmer animation
- Live Data State
- Empty State
- Error State
- Accessible Retry button
- Client-side resilient state engine
- Reduced-motion support

---

## Project Structure

```text
enterprise-developer-portfolio/
├── README.md
├── TASK_DECOMPOSITION.md
├── portfolio.html
│
├── assets/
│   └── images/
│       └── portrait.webp
│
├── css/
│   ├── tokens.css
│   ├── layout.css
│   ├── components.css
│   └── skeleton.css
│
└── js/
    ├── theme.js
    ├── components.js
    └── state.js
