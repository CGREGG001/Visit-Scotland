document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Valeur seuil en pixels pour afficher le bouton
    const scrollThreshold = 400; // Pour un site pro, entre 300 et 500 est idéal

    // Fonction pour vérifier la position de défilement et afficher/masquer le bouton
    function toggleBackToTopButton() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > scrollThreshold) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // Vérifier la position de défilement au chargement de la page
    toggleBackToTopButton();

    // Ajouter l'écouteur d'événement pour le défilement
    window.addEventListener('scroll', toggleBackToTopButton);

    // Gérer le clic sur le bouton pour remonter en haut de page
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Animation de défilement fluide vers le haut
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
