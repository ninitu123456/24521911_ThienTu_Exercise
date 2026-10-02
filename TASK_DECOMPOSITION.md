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