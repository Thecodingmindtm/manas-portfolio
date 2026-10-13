
const particlesContainer = document.getElementById("particles");
const symbols = [
  { text: "</>", type: "symbol" },
  { text: "{ }", type: "symbol" },
  { text: "⌘", type: "symbol" },
  { text: "↗", type: "symbol" },
  { text: "🚀", type: "emoji" },
  { text: "💻", type: "emoji" },
  { text: "✦", type: "symbol" }
];

if (particlesContainer) {
  // Floating dots
  for (let i = 0; i < 35; i++) {
    const dot = document.createElement("span");
    dot.className = "particle dot";

    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.setProperty("--size", `${2 + Math.random() * 4}px`);
    dot.style.setProperty("--duration", `${7 + Math.random() * 12}s`);
    dot.style.setProperty("--delay", `${Math.random() * -15}s`);

    if (i % 4 === 0) dot.classList.add("coral");
    if (i % 7 === 0) dot.classList.add("cyan");

    particlesContainer.appendChild(dot);
  }

  // Floating code and tech symbols
  symbols.forEach((item, index) => {
    const symbol = document.createElement("span");
    symbol.className = `particle ${item.type}`;

    if (index % 3 === 0) symbol.classList.add("coral");
    symbol.textContent = item.text;
    symbol.style.left = `${8 + Math.random() * 84}%`;
    symbol.style.top = `${8 + Math.random() * 80}%`;
    symbol.style.setProperty("--duration", `${10 + Math.random() * 9}s`);
    symbol.style.setProperty("--delay", `${index * -1.7}s`);

    particlesContainer.appendChild(symbol);
  });
}

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Reveal elements when they enter the viewport
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Current year
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
