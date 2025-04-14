const burgerToggle = document.querySelector(".burger");
const navLinks = document.querySelector(".navLinks");

function isMenuOpen() {
    return burgerToggle.classList.contains("open");
}

function openNav() {
    burgerToggle.classList.add("open");
    navLinks.classList.add("open");
    burgerToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    // Scroll en haut pour que le menu soit visible
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function closeNav() {
    burgerToggle.classList.remove("open");
    navLinks.classList.remove("open");
    burgerToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
}

function toggleNav(event) {
    event.stopPropagation();
    if (isMenuOpen()) {
        closeNav();
    } else {
        openNav();
    }
}

// Gère le clic sur le bouton burger
burgerToggle.addEventListener("click", toggleNav);

// Clic à l’intérieur du menu mais pas sur un lien : on ferme
navLinks.addEventListener("click", (event) => {
    const isLink = event.target.closest("a");
    if (!isLink && isMenuOpen()) {
        closeNav();
    }
});

// Ferme avec la touche Échap
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) {
        closeNav();
    }
});

// Transition fluide uniquement en mobile
new ResizeObserver((entries) => {
    if (entries[0].contentRect.width <= 768) {
        navLinks.style.transition = "transform 0.4s ease-out";
    } else {
        navLinks.style.transition = "none";
    }
}).observe(document.body);
