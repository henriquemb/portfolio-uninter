function sendForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

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

    alert(`${name}, sua mensagem foi enviada. Obrigado pelo contato!`);
    return true;
}