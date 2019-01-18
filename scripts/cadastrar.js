const cadastrar = document.getElementById("criar-conta");

cadastrar.addEventListener('click', function(event){
    event.preventDefault();
    const nome = document.getElementById("nome-cadastro").value;
    const email = document.getElementById("email-cadastro").value;
    const senha = document.getElementById("senha-cadastro").value;

    if ((nome == "") || (email == "") || (email.search("@") == -1) || (senha == "")){
        alert("Preencha seus dados corretamente");
    } else{
        alert("Cadastro realizado com sucesso");
        window.location.href= "listas.html";  
    }

})