// criacao de tarefas

function criarTarefa(){
        const botao = document.getElementById("botao__mais");
        botao.addEventListener("click", function(){
            const linhaTarefa = document.createElement("nova__linha__tarefa");
            const afazer = document.getElementById("tarefa__adicionar").value;
            const novaTarefa = document.createTextNode(afazer);
            linhaTarefa.appendChild(novaTarefa);
    document.getElementById("criacao__tarefa__lista").appendChild(linhaTarefa);
    document.getElementById("tarefa__adicionar").value = "";
})
}

function concluirTarefa(feita) {
    feita.classList.toggle('checked');       
}

function deletarTarefa(botaoFechar){
    botaoFechar.parentElement.remove()
}
