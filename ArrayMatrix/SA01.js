// Situação de aprenizagem 01 - Array e Matrix
// Calculadora de média

var notas = []; // Declaração de um vetor
const prompt = require("prompt-sync")();

// função para adicionar nota -> média
function adicionarNota(){
    let nota = Number(prompt("Informe a Nota: "));
    notas.push(nota);
    console.log("Nota Adicionada com Sucesso");
}

// Função para calcular a média
function Calcularnotas(){
    if(notas.length === 0) return;
    let soma = notas.reduce((x,y)=>x+y);
    let mediaFinal = soma/notas.length;
    console.log(" A média é "+mediaFinal);
}

//menu de opeções
function menuOpcoes(){
    let continuar = true;
    while(continuar){
    console.log("====Calculadora Média===");
    console.log("2. Adicionar Nota");
    console.log("3. Calcular Média");
    console.log("4. Sair");
    console.log("==========================");
    let Opercao = prompt("Informe a Opção Desejada")
    switch(Operacao){
        case "1": adicionarNota();break;
        case "2": CalcularMedia();break;
        case "3": Continuar = false;break;
        default: console.log("Opção Inválida");break;
}
}
console.log("saindo...");
};
menuOpcoes();