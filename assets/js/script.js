const inputBox = document.querySelector("#input-box"),
listContainer = document.querySelector(".list_container"),
button = document.querySelector(".todo__adc button");

function addTask(event){
    event.preventDefault();
    // verifica se o campo foi preencido.
    if(inputBox.value === ""){
        alert("Você precisa escrever algo para ser adicionado...")
    } else {
        // adicionar a nova task a lista de task.
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        li.classList.add("item-list");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}

// Adiciona o evento de clique ao botão.
button.addEventListener("click", addTask);

// Marca a task como completa ou a deleta.
listContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("cheked");
        saveTasks();
    } else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveTasks();
    }
});

// salva as tasks no localstorage.
function saveTasks(){
    localStorage.setItem("dataTask", listContainer.innerHTML);
}

// inicia a função que mostra as task salvas.
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("dataTask");
}
showTasks();