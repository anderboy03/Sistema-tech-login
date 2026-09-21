const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
   

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    console.log(emailError);
console.log(passwordError);
console.log(successMessage);

    document.getElementById("email").classList.remove("erro", "sucesso");
document.getElementById("password").classList.remove("erro", "sucesso");

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    if (email === "") {
        emailError.textContent = "Digite seu e-mail!";
        document.getElementById("email").classList.add("erro");
        return;
    }
    const emailValido = email.includes("@");
    if(!emailValido){
        emailError.textContent = "Digite um e-mail válido!";
        document.getElementById("email").classList.add("erro");
        return;
        

    }

    if (senha === "") {
        passwordError.textContent = "Digite a senha!";
        document.getElementById("password").classList.add("erro");
        return;
    }
    

    successMessage.textContent = "Login realizado com sucesso!";
    document.getElementById("email").classList.add("sucesso");
    document.getElementById("password").classList.add("sucesso");

    
});
console.log("JavaScript funcionando!");