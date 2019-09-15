var elementoInput = document.getElementById('input')
var elementoListaTarefas = document.getElementById('listaTarefas')
var elementoListaConcluidos = document.getElementById('listaConcluidos')

var tarefas = JSON.parse(localStorage.getItem('tarefasStorage')) || [
    'Exemplo de tarefa'
]

var tarefasConcluidas = JSON.parse(localStorage.getItem('tarefasConcluidasStorage')) || [
    'Tarefa Concluída'
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

function renderTarefas(){
    elementoListaTarefas.innerHTML = '';
    elementoListaConcluidos.innerHTML = '';
    for (tarefa of tarefas){
        var li = document.createElement('li');
        var texto = document.createTextNode(tarefa);
        var trashImg = document.createElement('img');
        trashImg.setAttribute('src', 'src/trash.svg');

        var checkImg = document.createElement('img');
        checkImg.setAttribute('src', 'src/check.svg');

        pos = tarefas.indexOf(tarefa);
        checkImg.setAttribute('onclick', 'tarefaConcluida(' + pos + ')');
        trashImg.setAttribute('onclick', 'removeTarefa(' + pos + ', "tarefas")');

        li.appendChild(texto);
        li.appendChild(trashImg);
        li.appendChild(checkImg);
        li.setAttribute('class', 'tarefa');
        elementoListaTarefas.appendChild(li);
    }
    for (tarefa of tarefasConcluidas){
        var li = document.createElement('li');
        var texto = document.createTextNode(tarefa);
        var trashImg = document.createElement('img');
        trashImg.setAttribute('src', 'src/trash.svg');

        pos = tarefas.indexOf(tarefa);
        trashImg.setAttribute('onclick', 'removeTarefa(' + pos + ', "concluidas")');

        li.appendChild(texto);
        li.appendChild(trashImg);
        li.setAttribute('class', 'tarefa');
        elementoListaConcluidos.appendChild(li);
    }
}

renderTarefas();

function removeTarefa(pos,lista){
    if (lista == 'tarefas'){
        tarefas.splice(pos,1);
    }
    if (lista == 'concluidas'){
        tarefasConcluidas.splice(pos,1);   
    }
    renderTarefas();
    salvarTarefas();
}

function tarefaConcluida(pos){
    var tarefa = tarefas[pos];
    tarefas.splice(pos,1);
    tarefasConcluidas.push(tarefa);
    renderTarefas();
    salvarTarefas();
}

function salvarTarefas(){
    localStorage.setItem('tarefasStorage', JSON.stringify(tarefas));
    localStorage.setItem('tarefasConcluidasStorage', JSON.stringify(tarefasConcluidas));
}

elementoInput.addEventListener('keypress', function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        adicionarTarefa();
    }
});