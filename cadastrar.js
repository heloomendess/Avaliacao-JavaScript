document.querySelector("#botao-cadastrar") 
.addEventListener("click", () => {

    const article = document.querySelector("article")

    const tarefa = {
        nome : article.querySelector("#nome").value,
        time : article.querySelector("#time").value,
        gols : article.querySelector("#gols").value,
        assist : article.querySelector("#assist").value
    }



        if(validar(tarefa)) {
        console.log(tarefa)
        let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
        tarefas.push(tarefa);
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "index.html"
    }
})

function validar(tarefa) {
    let valid = true;

    limparErros()

    if(tarefa.nome === "") {
        document.querySelector("#nome").classList.add("is-error")
        document.querySelector("#nome-error").innerText = "O nome é obrigatório"
        valid = false;
    } 
    if(tarefa.time === "") {
        document.querySelector("#time-error").innerText = "O time é obrigatória"
        document.querySelector("#time").classList.add("is-error")
        valid = false;
    } 
    if(tarefa.gols <= 0) {
        document.querySelector("#gols-error").innerText = "Os gols devem ser maior que zero"
        document.querySelector("#gols").classList.add("is-error")
        valid = false;
    }
    if(tarefa.assist <= 0) {
        document.querySelector("#assistencias-error").innerText = "As assistencias devem ser maior que zero"
        document.querySelector("#assist").classList.add("is-error")
        valid = false;
    }
    if(tarefa.foto === "") {
        document.querySelector("#foto-error").innerText = "As assistencias devem ser maior que zero"
        document.querySelector("#foto").classList.add("is-error")
        valid = false;
    }

    return valid;
}

function limparErros() {
    document
    .querySelectorAll('.nes-input.is-error, .nes-textarea.is-error')
    .forEach(campo => campo.classList.remove('is-error'))

    document
    .querySelectorAll('span.span-error')
    .forEach(span => span.innerText ="")
    
}