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
---

## Exercise 4: Resilient Component Architecture

### State Machine Contract

The resilient data component supports four states:

1. Loading
2. Live
3. Empty
4. Error

### State Transitions

- Initial → Loading
- Loading → Live when data is successfully loaded.
- Loading → Empty when the request succeeds but contains no data.
- Loading → Error when data loading fails.
- Error → Loading when the user activates Retry.

### Accessibility Contract

- Loading state must communicate that content is loading.
- Live state must expose loaded content semantically.
- Empty state must clearly communicate that no data is available.
- Error state must communicate the failure.
- Retry must use an accessible native button.

### T-03A: Loading Skeleton

**Objective:**  
Provide visual loading feedback while component data is being loaded.

**Requirements:**

- Use a pure CSS shimmer animation.
- Do not use JavaScript for the animation.
- Display multiple skeleton placeholders.
- Loading state must be accessible.
- Respect the user's reduced-motion preference.

**Files:**

- `portfolio.html`
- `css/skeleton.css`

**Atomic Commit:**

`feat(css): skeleton`

### T-03B: Live Data State

**Objective:**  
Display successfully loaded data using a resilient and semantic component structure.

**Requirements:**

- Display loaded items using semantic `<article>` elements.
- Arrange the item collection using CSS Grid.
- Arrange metadata badges using Flexbox.
- Reuse existing badge styles and design tokens.
- Keep the Live state separate from Loading, Empty, and Error states.

**Files:**

- `portfolio.html`
- `css/components.css`

### T-03C: Empty State

**Objective:**  
Provide accessible feedback when the data request succeeds but contains no items.

**Requirements:**

- Display a clear empty-state message.
- Use semantic HTML.
- Keep the Empty state separate from Loading and Live states.
- Ensure only the active state is visible.