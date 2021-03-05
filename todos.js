function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}



function criaLinha(tds) {

    linha = document.createElement("tr");
    tduserId = document.createElement("td");
    tdid = document.createElement("td");
    tdtitle = document.createElement("td");
    tdcompleted = document.createElement("td");

    tduserId.innerHTML = tds.userId
    tdid.innerHTML = tds.id
    tdtitle.innerHTML = tds.title
    tdcompleted.innerHTML = tds.completed

    linha.appendChild(tduserId);
    linha.appendChild(tdid);
    linha.appendChild(tdtitle);
    linha.appendChild(tdcompleted);

    return linha;
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/todos");
    let tds = JSON.parse(data);
    let todos = document.getElementById("todos");
    tds.forEach(element => {
        let linha = criaLinha(element);
        todos.appendChild(linha);

    });

    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()


