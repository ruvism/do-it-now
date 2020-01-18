function cadastrarRefug() {
    const cadastrar = document.getElementById("botao-cadastro-refug");

    cadastrar.addEventListener('click', function (event) {
        event.preventDefault();
        const nome = document.getElementById("nome-cadastro-refug").value;
        const rne = document.getElementById("rne-cadastro-refug").value;
        const cpf = document.getElementById("cpf-cadastro-refug").value;
        const email = document.getElementById("email-cadastro-refug").value;
        const senha = document.getElementById("senha-cadastro-refug").value;
        // const endereco = document.getElementById("endereco-cadastro-refug").value;
        // const cidade = document.getElementById("cidade-cadastro-refug").value;
        // const pais = document.getElementById("pais-cadastro-refug").value;
        // const estado = document.getElementById("estado-cadastro-refug").value;
        // const cep = document.getElementById("cep-cadastro-refug").value;

        if ((nome == "") || (email == "") || (email.search("@") == -1) || (senha == "") || (rne == "") || (cpf == "")) {
            alert("Preencha seus dados corretamente");
        } else {
            alert("Cadastro realizado com sucesso");
            window.location.href = "home-refug.html";
        }

    })
}