function apagar(nome){
    
    const card = document.querySelector(`#${nome}`)//tirar ele do DOOM
    //card.classList.add("apagando")
    //card.addEventListener("animationend", () => card.remove())
    

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [] //carrega do localStorage
    const tarefasFiltradas = 
    tarefas.filter( tarefa => tarefa.nome != nome)//realizar testes se passa ou não pelo filtro
    
    localStorage.setItem("tarefas", JSON.stringify(tarefasFiltradas)) 

    location.reload();
    //update(tarefas.nome)
}
/*

document.querySelector("#btn_apagar").addEventListener("click", () => {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const card = document.querySelector("div")
    document.querySelector("#lista-de-tarefas").appendChild(card)

    card.remove();

    const taskId = parseInt(event.target.getAttribute("data-id")); // Obtém o ID da tarefa clicada
    const index = tarefas.findIndex(tarefa => tarefa.id === taskId);
    
    // Remover a tarefa do array de tarefas
    tarefas.splice(index, 1);
        
    // Salvar as tarefas atualizadas no localStorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
})*/