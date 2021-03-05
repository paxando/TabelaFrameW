function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}



function criaLinha(albuns) {

    linha = document.createElement("tr");
    tduserId = document.createElement("td");
    tdid = document.createElement("td");
    tdtitle = document.createElement("td");
    

    tduserId.innerHTML = albuns.userId
    tdid.innerHTML = albuns.id
    tdtitle.innerHTML = albuns.title
    

    linha.appendChild(tduserId);
    linha.appendChild(tdid);
    linha.appendChild(tdtitle);
    

    return linha;
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/albums");
    let albuns = JSON.parse(data);
    let albums = document.getElementById("albums");
    albuns.forEach(element => {
        let linha = criaLinha(element);
        albums.appendChild(linha);

    });

    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()