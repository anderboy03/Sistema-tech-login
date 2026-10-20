const form = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");


// QUANDO ENVIAR O FORMULÁRIO
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const senha = senhaInput.value;

    // Limpa mensagens
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    // Limpa classes anteriores
    emailInput.classList.remove("erro", "sucesso");
    senhaInput.classList.remove("erro", "sucesso");


    // VALIDAÇÃO DO E-MAIL
    if (email === "") {
        emailError.textContent = "Digite seu e-mail!";
        emailInput.classList.add("erro");
        return;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Digite um e-mail válido!";
        emailInput.classList.add("erro");
        return;
    }

    emailInput.classList.add("sucesso");


    // VALIDAÇÃO DA SENHA
    if (senha === "") {
        passwordError.textContent = "Digite a senha!";
        senhaInput.classList.add("erro");
        return;
    }

    if (senha.length < 6) {
        passwordError.textContent = "A senha deve ter pelo menos 6 caracteres!";
        senhaInput.classList.add("erro");
        return;
    }

    senhaInput.classList.add("sucesso");


    // SUCESSO
    successMessage.textContent = "Login realizado com sucesso!";

    emailInput.value = "";
    senhaInput.value = "";

    passwordError.textContent = "apagar a mensagem de erro da senha";
});

emailInput.addEventListener("input", function() {
    emailError.textContent = "";
    emailInput.classList.remove("erro");
});

senhaInput.addEventListener("input", function() {
    
    passwordError.textContent = "";
    senhaInput.classList.remove("erro");
});



