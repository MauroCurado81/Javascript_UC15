// Função principal para adicionar tarefas
function adicionarTarefas(){
    //1. Encontra a caixa de texto e pega o que foi digitado
    const input = document.getElementById('inputTarefas')
    const texto = input.value.trim()

    //2. Se o campo estiver vazio, mostra alerta e cancela a função
    if(texto === ''){
        alert('Hey, Digite alguma coisa né')
    return
}
 //3. Cria um novo item de lista <li>
const li = document.createElement('li')

 //4. Preenche o <li> com o texto + botão de remover
li.innerHTML = `${texto} <button class="remover" onclick="removerTarefa(this)">X</button`

//5. Coloca o novo item na lista
document.getElementById('listaTarefas').appendChild(li)

//6. Limpa a caixa de texto para digitar a próxima tarefa
input.value = ''

}

//Função para remover uma tarefa
function removerTarefa(botao){
    const li = botao.parentElement
    li.remove()
}
