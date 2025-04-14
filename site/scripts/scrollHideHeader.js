let lastScrollTop = 0;
const header = document.getElementById('header');
const scrollThreshold = 10; // Seuil de défilement minimal pour déclencher l'action

header.style.transition = "top 0.3s ease-in-out";

window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Vérifie si le défilement a dépassé un certain seuil
    if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
        if (currentScroll > lastScrollTop && currentScroll > 60) {
            // Scroll vers le bas ET on a défilé suffisamment loin du haut
            header.style.top = "-60px"; // Cache le header
        } else {
            // Scroll vers le haut
            header.style.top = "0"; // Affiche le header
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour éviter les valeurs négatives
    }
});
