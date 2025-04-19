document.addEventListener('DOMContentLoaded', () => {
    if (document.cookie.includes('cookie_consent=')) return;

    // va chercher ...
    fetch('/components/cookie-banner.html')
        .then(response => {
            if (!response.ok) throw new Error("Bannière non trouvée");
            return response.text();
        })
        .then(html => {
            // Injecte la bannière dans le DOM
            const wrapper = document.createElement('div');
            wrapper.innerHTML = html;
            const banner = wrapper.firstElementChild;

            // Ajoute la bannière dans le body
            document.body.appendChild(banner);

            // Ensuite, récupère les éléments
            const acceptBtn = document.getElementById("accept-cookies");
            const rejectBtn = document.getElementById("reject-cookies");

            if (!banner || !acceptBtn || !rejectBtn) {
                console.error("Un des éléments de la bannière est introuvable.");
                return;
            }

            banner.classList.remove("hidden");

            function setConsent(value) {
                const date = new Date();
                date.setMonth(date.getMonth() + 13); // 13 mois
                document.cookie = `cookie_consent=${value}; expires=${date.toUTCString()}; path=/`;
                banner.remove();
            }

            acceptBtn.addEventListener("click", () => setConsent("accepted"));
            rejectBtn.addEventListener("click", () => setConsent("rejected"));
        })
        .catch(err => console.error('Erreur lors du chargement de la bannière cookie :', err));
});
