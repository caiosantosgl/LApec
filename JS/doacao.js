document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    const buttons = document.querySelectorAll(".topb");
    const pixKey = "42365439000168";
    const phoneContact = "(83) 99834-0051 / (83) 99834-0054";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const textToCopy = (button.id === "contato-mobile") ? phoneContact : pixKey;

            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalContent = button.innerHTML;

                if (button.innerText.trim() !== "") {
                    button.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
                } else {
                    button.innerHTML = '<i class="fa-solid fa-check"></i>';
                }

                button.style.backgroundColor = "#28a745";
                button.style.color = "white";

                setTimeout(() => {
                    button.innerHTML = originalContent;
                    button.style.backgroundColor = "";
                    button.style.color = "";
                }, 2000);
            }).catch(err => {
                console.error("Erro ao copiar: ", err);
            });
        });
    });
});
