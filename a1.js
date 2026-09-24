// ===============================
// Page Switching (hash-based SPA)
// ===============================
const pages = document.querySelectorAll(".page");
const navLinkEls = document.querySelectorAll("[data-link]");

function showPage(pageName) {
  const target = document.getElementById("page-" + pageName);
  if (!target) return;

  pages.forEach(p => p.classList.remove("active"));
  target.classList.add("active");

  navLinkEls.forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinkEls.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageName = link.dataset.page;
    history.pushState(null, "", "#" + pageName);
    showPage(pageName);
    navLinks.classList.remove("active-menu");
  });
});

window.addEventListener("popstate", () => {
  const pageName = (location.hash || "#home").replace("#", "");
  showPage(pageName);
});

// Load the correct page on first visit (supports direct links like file.html#projects)
const initialPage = (location.hash || "#home").replace("#", "");
showPage(initialPage);

// ===============================
// Mobile Navigation
// ===============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active-menu");
  });
}

// ===============================
// Typing Animation
// ===============================
const typingElement = document.getElementById("typing");

const words = [
  "AI & Data Science Student",
  "Machine Learning Enthusiast",
  "Future AI Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();
