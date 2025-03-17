// Wacht tot de pagina volledig geladen is
document.addEventListener("DOMContentLoaded", function () {
    
    // Maak de navbar achtergrond transparant tot er gescrolld wordt
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#6a46c1"; // Donkere tint bij scrollen
        } else {
            navbar.style.backgroundColor = "#7e57c2"; // Originele kleur
        }
    });

    // Klik-event voor de "Probeer nu!" knop
    const probeerKnop = document.querySelector(".cta-button");
    probeerKnop.addEventListener("click", function () {
        alert("Bedankt voor je interesse! Brainbite komt binnenkort beschikbaar. 😊");
    });

    // Hover-effect voor lessen
    const lessen = document.querySelectorAll(".les-box");
    lessen.forEach(les => {
        les.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease-in-out";
        });

        les.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

});
