// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    // ========== MODO NOTURNO ==========
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Define o tema padrão ao carregar
    body.classList.add("light-theme");

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            toggleButton.textContent = "🌞 Modo Matutino";
        } else {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            toggleButton.textContent = "🌙Modo Noturno";
        }
    });

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
