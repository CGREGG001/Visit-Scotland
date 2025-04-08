const hamburgerToggle = document.querySelector(".burger");
const navLinksContainer = document.querySelector(".navLinks");

function toggleNav() {
    hamburgerToggle.classList.toggle("open");

    const ariaToggle = hamburgerToggle.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggle.setAttribute("aria-expanded", ariaToggle);
    navLinksContainer.classList.toggle("open");
}

hamburgerToggle.addEventListener("click", toggleNav);

new ResizeObserver(entries => {

    if (entries[0].contentRect.width <= 900) {
        navLinksContainer.style.transition = "transform 0.4s ease-out";
    } else {
        navLinksContainer.style.transition = "none";
    }

}).observe(document.body);
