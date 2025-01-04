document.addEventListener('DOMContentLoaded', function () {
    const observer = new MutationObserver(() => {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuClose = document.getElementById('menu-close');

        if (menuToggle && mobileMenu && menuClose) {
            observer.disconnect(); // Detén la observación cuando los elementos están listos

            // Abrir el menú
            menuToggle.addEventListener('click', function () {
                mobileMenu.classList.toggle('collapse');
            });

            // Cerrar el menú
            menuClose.addEventListener('click', function () {
                mobileMenu.classList.add('collapse');
            });
        }
    });

    // Observa cambios en el cuerpo del documento
    observer.observe(document.body, { childList: true, subtree: true });
});
