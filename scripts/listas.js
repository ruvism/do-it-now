// criacao de tarefas

// function criarTarefa(){

//     var novaTarefa = document.getElementById("tarefa__adicionar").value;

//     var conteudoAtual = document.getElementById("criacao__tarefa__lista").innerHTML;

//     var novaLinha = '<li onclick="concluirTarefa(this)">' + novaTarefa + '<span onclick="deletarTarefa(this)"><img src="./assets/icone_deletar_tarefa-subtarefa.png"></span>' + '</li>';	
//     output.innerHTML = conteudoAtual + novaLinha;

//     document.getElementById("tarefa__adicionar").value = '';
// }
			
function concluirTarefa(feita) {
    feita.classList.toggle('checked');       
}

function deletarTarefa(botaoFechar){
    botaoFechar.parentElement.remove()
}


function criarTarefa(){
    const linhaTarefa = document.createElement("nova__linha__tarefa");
    const afazer = document.getElementById("tarefa__adicionar").value;
    const novaTarefa = document.createTextNode(afazer);
    if( afazer == ""){
        alert("Coloque sua tarefa aqui")
    } else{
        document.getElementById("criacao__tarefa__lista").appendChild(linhaTarefa);
    }
    document.getElementById("tarefa__adicionar").value = "";
}