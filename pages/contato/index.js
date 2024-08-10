// Processo os dados do formulário
function sendForm() {
    // Busca os valores do formulário, nome, email e mensagem inserida pelo usuário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    // Valida se os campos estão preenchidos
    if (name === "") {
        alert("Por favor, informe um nome válido.");
        return false;
    }

    if (email === "") {
        alert("Por favor, informe um email válido.");
        return false;
    }

    if (msg === "") {
        alert("Por favor, informe a mensagem de contato.");
        return false;
    }

    // Caso válido, informa ao usuário que a mensagem de contato foi enviada
    alert(`${name}, sua mensagem foi enviada. Obrigado pelo contato!`);
    return true;
}