const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = themeToggle.querySelector(".toggle-text");

const savedTheme = localStorage.getItem("durgesh-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const isLight = theme === "light";
  themeIcon.textContent = isLight ? "☀" : "☾";
  themeText.textContent = isLight ? "Light" : "Dark";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

applyTheme(savedTheme || (prefersLight ? "light" : "dark"));

themeToggle.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  applyTheme(nextTheme);
  localStorage.setItem("durgesh-theme", nextTheme);
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
