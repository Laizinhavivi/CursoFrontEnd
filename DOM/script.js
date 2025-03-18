//Introdução ao Estudo de Dom


//Selecionar e modificar elementos

//getElementBYID -> variável simples
let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerText = "Outro Título"; //modificar o texto

//get ElementsByClassName ->vetor(array)
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);
descricao[1].innerText = "Outro Texto";
descricao[0].style.color = "purple"; // deixei a cor do texto roxo

//get ElementByTagName -> Vetor (Array)
let p = Document.getElementByTagName("p");
console.log(p[1]);
p[1].style.fontWeight = "bold" //fonte em negrito "bold"

//querySelector -> Variável Simples
let paragrafo = document.querySelector("p");
console.log(paragrafo);
paragrafo.style.fontSize = "20px";

//querySelectorAll -> Vetor(Array)
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => element.style.color="pink");



//Lançamento de Eventos (EventListener)

function mudarcorfundo(){
    let body = documents.querySelector("body");
    body.style.backgroundCollor = "blue";
}


//2 - adicionando o ouvine (addEventLinster)
document.querySelector(".btn").addEventListener