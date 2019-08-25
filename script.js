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
        renderTarefas();
    }  
}

elementoBotao.onclick = adicionarTarefa;

function renderTarefas(){
    elementoLista.innerHTML = '';
    for (tarefa of tarefas){
        var li = document.createElement('li');
        var texto = document.createTextNode(tarefa);

        li.appendChild(texto);
        elementoLista.appendChild(li);
    }
}

renderTarefas();