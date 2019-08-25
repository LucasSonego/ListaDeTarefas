var elementoInput = document.getElementById('input')
var elementoBotao = document.getElementById('botao')
var elementoLista = document.getElementById('lista')

var tarefas = JSON.parse(localStorage.getItem('tarefasStorage')) || [
    'Exemplo de tarefa'
]

function adicionarTarefa(){
    if (elementoInput.value != ''){
        var tarefa = elementoInput.value;
        elementoInput.value = '';
        tarefas.push(tarefa);
        renderTarefas();
        salvarTarefas();
    }  
}

elementoBotao.onclick = adicionarTarefa;

function renderTarefas(){
    elementoLista.innerHTML = '';
    for (tarefa of tarefas){
        var li = document.createElement('li');
        var texto = document.createTextNode(tarefa);
        var trashImg = document.createElement('img');
        trashImg.setAttribute('src', 'src/trash.svg')
        trashImg.setAttribute('height', '15')

        pos = tarefas.indexOf(tarefa);
        trashImg.setAttribute('onclick', 'removeTarefa(' + pos + ')')

        li.appendChild(texto);
        li.appendChild(trashImg);
        li.setAttribute('class', 'tarefa');
        elementoLista.appendChild(li);
    }
}

renderTarefas();

function removeTarefa(pos){
    tarefas.splice(pos,1);
    renderTarefas();
    salvarTarefas();
}

function salvarTarefas(){
    localStorage.setItem('tarefasStorage', JSON.stringify(tarefas));
}