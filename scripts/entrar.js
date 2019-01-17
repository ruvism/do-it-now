const entrar = document.getElementById("entrar");

entrar.addEventListener('click', function(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    if ((email == "") || (email.search("@") == -1)){
        alert("Insira e-mail válido")
    } else if (senha == ""){
        alert("Insira sua senha")
    } else{
      window.location.href= "listas.html";  
    }
})