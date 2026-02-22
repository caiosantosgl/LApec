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
// === BOTÃO COPIAR CHAVE PIX ===

document.addEventListener("DOMContentLoaded", function () {

    const btnDoar = document.querySelector(".btn-doar");
    const chavePix = "42365439000168";

    btnDoar.addEventListener("click", function (e) {
        e.preventDefault();

        // Copia a chave para a área de transferência
        navigator.clipboard.writeText(chavePix)
            .then(() => {

                const textoOriginal = btnDoar.innerHTML;

                // Feedback visual
                btnDoar.innerHTML = "✔ Copiado!";
                btnDoar.style.backgroundColor = "#28a745";
                btnDoar.style.color = "white";

                // Volta ao normal após 2 segundos
                setTimeout(() => {
                    btnDoar.innerHTML = textoOriginal;
                    btnDoar.style.backgroundColor = "";
                    btnDoar.style.color = "";
                }, 2000);

            })
            .catch(err => {
                console.error("Erro ao copiar: ", err);
            });
    });

});

// === BOTÃO DO QR CODE ===

const btnQr = document.querySelector(".btn-qr");
const qrArea = document.querySelector(".qr-area");
const seta = document.querySelector(".seta");

btnQr.addEventListener("click", () => {

    qrArea.classList.toggle("ativo");

    if (qrArea.classList.contains("ativo")) {
        seta.classList.remove("fa-angle-down");
        seta.classList.add("fa-angle-up");
    } else {
        seta.classList.remove("fa-angle-up");
        seta.classList.add("fa-angle-down");
    }

});