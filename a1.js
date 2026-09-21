// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===============================
// Contact Form
// ===============================

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    try {
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        status.style.color = "#22c55e";
        status.innerHTML = result.message;

        form.reset();

    } catch {
        status.style.color = "#ef4444";
        status.innerHTML = "Backend not connected yet.";
    }
});

// ===============================
// Scroll Reveal Animation
// ===============================

const cards = document.querySelectorAll(
    ".project-card, .skill, .glass-card"
);

// Initial hidden state
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
});

// Reveal when scrolling
function revealCards() {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

// Run on page load
window.addEventListener("load", revealCards);

// Run while scrolling
window.addEventListener("scroll", revealCards);
