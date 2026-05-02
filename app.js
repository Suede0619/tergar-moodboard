(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  function iconFor(nextTheme) {
    if (nextTheme === "dark") {
      return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2.4M12 19.6V22M4.93 4.93l1.7 1.7M17.37 17.37l1.7 1.7M2 12h2.4M19.6 12H22M4.93 19.07l1.7-1.7M17.37 6.63l1.7-1.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    }
    return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.25 14.25A8.5 8.5 0 0 1 9.75 3.75 8.5 8.5 0 1 0 20.25 14.25Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  }

  function setTheme(nextTheme) {
    theme = nextTheme;
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.innerHTML = iconFor(theme);
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  setTheme(theme);

  if (toggle) {
    toggle.addEventListener("click", () => setTheme(theme === "dark" ? "light" : "dark"));
  }
})();
