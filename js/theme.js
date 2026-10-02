const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";

function applyTheme(theme) {
    root.dataset.theme = theme;

    const isDark = theme === "dark";

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
    );

    themeToggle.textContent = isDark ? "☀" : "☾";
}

applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = root.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", nextTheme);

    applyTheme(nextTheme);
});