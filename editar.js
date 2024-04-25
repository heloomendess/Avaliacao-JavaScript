function incGols(nome){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.nome == nome)
    tarefa.gols += 1
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    const card = document.querySelector(`#${nome}`)
    card.querySelector(".gols").value = tarefa.gols
    console.log(tarefa.gols)

}

function decGols(nome){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.nome == nome)
    tarefa.gols -= 1
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    const card = document.querySelector(`#${nome}`)
    card.querySelector(".gols").value = tarefa.gols
    console.log(tarefa.gols)

}

function incAssist(nome){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.nome == nome)
    tarefa.assist += 1
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    const card = document.querySelector(`#${nome}`)
    card.querySelector(".assist").value = tarefa.assist
    console.log(tarefa.assist)

}

function decAssist(nome){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.nome == nome)
    tarefa.assist -= 1
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    const card = document.querySelector(`#${nome}`)
    card.querySelector(".assist").value = tarefa.assist
    console.log(tarefa.assist)

}