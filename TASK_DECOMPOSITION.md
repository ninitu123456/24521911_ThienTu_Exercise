# Task Decomposition

## Exercise 1: Semantic DOM Architecture & A11y Contract

### T-01: Semantic Landmark Tree

**Objective:**  
Create an accessible semantic HTML foundation for the developer portfolio.

**Requirements:**

- Create the semantic HTML document structure.
- Use semantic landmark elements.
- Use zero `<div>` elements.
- Add an accessible skip link.
- The skip link must target the main content using `#main`.
- Do not include CSS in this task.

**Expected Landmark Hierarchy:**

- Header
  - Navigation
- Main
  - Hero Section
  - Skills Section
  - Projects Section
  - Contact Section
- Footer

**Accessibility Contract:**

- The page must use semantic HTML landmarks.
- The main content must use `id="main"`.
- A "Skip to Content" link must be provided.
- No `<div>` elements are allowed.

**Atomic Commit:**

`feat(html): semantic landmark tree`

---

## Exercise 2: Enterprise Developer Portfolio Decomposition Pipeline

### T-02A: Tokens & Reset

**Objective:**  
Create reusable CSS design tokens and establish a consistent global CSS reset.

**Requirements:**

- Define reusable CSS design tokens using custom properties.
- Define theme colors as CSS variables.
- Add a global CSS reset.
- Use `box-sizing: border-box`.
- Remove default margin and padding.
- Do not use JavaScript in this task.
- Do not hardcode color hex values inside component rules.

**Files:**

- `css/tokens.css`

**Atomic Commit:**

`feat(css): tokens & reset`

### T-02B: 2D Grid Layout

**Objective:**  
Create a responsive two-dimensional page layout using CSS Grid.

**Requirements:**

- Use CSS Grid for the primary layout.
- Use a single-column layout on mobile devices.
- Use a two-column layout on larger screens.
- Prevent horizontal scrolling at 375px viewport width.
- Use existing design tokens where applicable.
- Do not include JavaScript in this task.

**Files:**

- `css/layout.css`

**Atomic Commit:**

`feat(css): responsive grid`

### T-02C: Theme Engine

**Objective:**  
Implement persistent light and dark theme switching.

**Requirements:**

- Support light and dark themes.
- Persist the selected theme using `localStorage`.
- Use exactly `theme` as the localStorage key.
- Theme colors must use CSS custom properties.
- Theme switching must produce zero console errors.

**Files:**

- `css/tokens.css`
- `js/theme.js`
- `portfolio.html`

**Atomic Commit:**

`feat(js): dark mode engine`

---

## Exercise 3: Component Architecture & State Modeling

### T-03A: Hero Section

**Objective:**  
Create an accessible hero component for the developer portfolio.

**Requirements:**

- Include a high-resolution portrait.
- Define explicit image width and height.
- Include a primary headline.
- Include a short professional pitch.
- Use semantic HTML.
- Use existing CSS design tokens.

### T-03B: Theme Switcher

**Objective:**  
Provide an accessible theme switching component.

**Requirements:**

- Use a native button.
- Expose the current state using `aria-pressed`.
- Update the icon dynamically.
- Provide an accessible label.
- Preserve the selected theme using the existing theme engine.

### T-03C: Skills Matrix

**Objective:**  
Display technical skills in categorized groups.

**Requirements:**

- Organize skills into categories.
- Represent individual skills using badges.
- Use CSS Grid for the skills layout.
- Use semantic HTML.

### T-03D: Project Cards

**Objective:**  
Create self-contained semantic project components.

**Requirements:**

- Each project must use an `<article>` element.
- Include project title.
- Include technology tags.
- Include project description.
- Include accessible project links.

### T-03E: Contact Form

**Objective:**  
Create an accessible contact form with native validation and client-side state handling.

**Requirements:**

- Use semantic form controls.
- Associate labels with inputs.
- Use native HTML validation.
- Provide client-side form state handling.
- Provide accessible status feedback.