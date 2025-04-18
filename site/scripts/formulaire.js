// Animation au chargement
document.addEventListener('DOMContentLoaded', function () {
    const fieldsets = document.querySelectorAll('fieldset[role="group"]');

    fieldsets.forEach((fieldset, index) => {
        fieldset.style.opacity = '0';
        fieldset.style.animation = `fadeIn 0.5s ease-out forwards ${index * 0.2}s`;
    });

    // Validation améliorée
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.checkValidity()) {
                this.style.borderColor = 'var(--success)';
            } else if (this.value) {
                this.style.borderColor = 'var(--error)';
            }
        });

        input.addEventListener('focus', function () {
            this.style.borderColor = 'var(--primary)';
        });
    });

    form.addEventListener('submit', function (e) {
        // Simulation de soumission - à remplacer par votre logique réelle
        e.preventDefault();

        const button = form.querySelector('button');
        const originalText = button.textContent;

        button.textContent = 'Envoi en cours...';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = '✓ Envoyé!';
            button.style.backgroundColor = 'var(--success)';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = 'var(--primary)';
                button.disabled = false;
                form.reset();

                // Réinitialiser les styles des inputs
                inputs.forEach(input => {
                    input.style.borderColor = 'var(--border)';
                });
            }, 2000);
        }, 1500);
    });
});
