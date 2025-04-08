const burgerToggle = document.querySelector(".burger");
const navLinks = document.querySelector(".navLinks");

function toggleNav(event) {
    event.stopPropagation(); // Évite de déclencher l’événement du document
    burgerToggle.classList.toggle("open");
    navLinks.classList.toggle("open");

    const isExpanded = burgerToggle.getAttribute("aria-expanded") === "true";
    burgerToggle.setAttribute("aria-expanded", String(!isExpanded));
}

function closeNav() {
    burgerToggle.classList.remove("open");
    navLinks.classList.remove("open");
    burgerToggle.setAttribute("aria-expanded", "false");
}

burgerToggle.addEventListener("click", toggleNav);

// Clic *dans* le menu, mais PAS sur un lien → fermer
navLinks.addEventListener("click", function (event) {
    const isLink = event.target.closest("a");

    if (!isLink && burgerToggle.classList.contains("open")) {
        closeNav();
    }
});

// Transition fluide pour mobile
new ResizeObserver(entries => {
    if (entries[0].contentRect.width <= 768) {
        navLinks.style.transition = "transform 0.4s ease-out";
    } else {
        navLinks.style.transition = "none";
    }
}).observe(document.body);


// Touche Échap pour fermeture
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && burgerToggle.classList.contains("open")) {
        closeNav();
    }
});
