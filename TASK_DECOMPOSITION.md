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