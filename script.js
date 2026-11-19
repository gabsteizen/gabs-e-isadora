
// =====================================
// EQUILIBRA - JAVASCRIPT
// =====================================


// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const aberto = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", aberto);

    menuToggle.textContent = aberto ? "✕" : "☰";

});


// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ANIMAÇÃO AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(
    ".section-heading, .about-grid, .challenge-card, " +
    ".sleep-grid, .social-grid, .habit-card, " +
    ".movement-content, .checklist-container, " +
    ".help-card, .emergency-card, .final-content"
);

elementos.forEach(elemento => {
    elemento.classList.add("reveal");
});

const observador = new IntersectionObserver((entradas, observer) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

            observer.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.12
});

elementos.forEach(elemento => {
    observador.observe(elemento);
});


// CHECKLIST DE AUTOCUIDADO

const checkboxes = document.querySelectorAll(
    ".check-item input"
);

const progressNumber = document.getElementById(
    "progress-number"
);

const progressFill = document.getElementById(
    "progress-fill"
);

const checklistMessage = document.getElementById(
    "checklist-message"
);

const resetButton = document.getElementById(
    "reset-checklist"
);


// ATUALIZAR PROGRESSO

function atualizarProgresso() {

    const total = checkboxes.length;

    const marcados = document.querySelectorAll(
        ".check-item input:checked"
    ).length;

    const porcentagem = (marcados / total) * 100;

    progressNumber.textContent = `${marcados}/${total}`;

    progressFill.style.width = `${porcentagem}%`;


    // MENSAGENS PERSONALIZADAS

    if (marcados === 0) {

        checklistMessage.textContent =
            "Seu progresso começa com uma escolha.";

    }

    else if (marcados <= 2) {

        checklistMessage.textContent =
            "Todo pequeno passo conta. Continue cuidando de você!";

    }

    else if (marcados <= 4) {

        checklistMessage.textContent =
            "Muito bem! Você está construindo hábitos saudáveis.";

    }

    else if (marcados === 5) {

        checklistMessage.textContent =
            "Excelente! Você está quase completando seu checklist.";

    }

    else {

        checklistMessage.textContent =
            "Parabéns! Você completou todos os hábitos de hoje!";

    }

}


// DETECTAR MARCAÇÕES

checkboxes.forEach(checkbox => {

    checkbox.addEventListener("change", atualizarProgresso);

});


// REINICIAR CHECKLIST

resetButton.addEventListener("click", () => {

    checkboxes.forEach(checkbox => {

        checkbox.checked = false;

    });

    atualizarProgresso();

});


// EFEITO SUAVE NAS IMAGENS

document.querySelectorAll("img").forEach(imagem => {

    imagem.addEventListener("error", () => {

        imagem.style.backgroundColor = "#dcebe0";

    });

});


// ANO AUTOMÁTICO NO CONSOLE

console.log(
    "Equilibra - Saúde Mental & Bem-estar | Site carregado com sucesso!"
);
