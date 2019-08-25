var elementoInput = document.getElementById('input')
var elementoBotao = document.getElementById('botao')
var elementoLista = document.getElementById('lista')

var tarefas = [
    'Tarefa 1',
    'Tarefa 2',
    'Tarefa 3'
]

function adicionarTarefa(){
    if (elementoInput.value != ''){
        var tarefa = elementoInput.value;
        elementoInput.value = '';
        tarefas.push(tarefa);
        console.log(tarefas);
    }  
}

elementoBotao.onclick = adicionarTarefa;