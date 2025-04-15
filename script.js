// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

    // ========== SCROLL SUAVE ==========
    document.querySelectorAll("nav ul li a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});
