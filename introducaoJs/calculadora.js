// criar uma calculadora simples em js = java script
//import da biblioteca
const prompt = require("prompt-sync")();

//funcões da calculadora - Operações
//soma
function soma(a,b){ 
    return a+b;
}
//subtração
function sub(a,b){ 
    return (a-b);
}
//multiplicação
function multi (a,b){ 
return (a*b);
}
//divisão
function div(a,b){ 
return (a/b);
}
//menu operações
function menuOperacoes(){ 
   console.log("=== Calculadora Simples===");
   console.log("| 1. soma                |");
   console.log("| 2. subtração           |");
   console.log("| 3. multiplicação       |");
   console.log("| 4. divisão             |");
   console.log("==========================");
   let operacao = prompt("Escolha a Operacao Desejada: ");
   //Entrada dos números
   let numero1 = Number(prompt("Digite numero 1:"));
   let numero2 = Number(prompt("Digite numero 2:"));
   let resultado;
   //condicional
   switch (operacao) {
    case "1":
       resultado = soma(numero1,numero2);
        break;
    case "2":
    resultado = Sub(numero1,numero2);
    break;
    case "3": multi(numero1,numero2);
    break;
    case "4":
        if(numero2==0){ 
            console.log("não dvidirás por zero!!! ");
            resultado = null;
        }else{
            resultado=div(numero1,numero2);
        }
        break;
    default:
        console.log("Operação Inválida")
        break;
   }//fim so switch
    console.log("Resultado: "+resultado);
}

//execução do programa

var continuar = true;
while (continuar) {
    menuOperacoes();
    let sair = prompt("1. Continuar | 2.Sair");
    if (Sair===2){
        continuar = false;
        console.log("Saindo...");
    }
}
