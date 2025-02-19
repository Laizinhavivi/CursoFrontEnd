// delação de variavéis e constantes

let nome = "João" // string
nome = "José" // reatribuição de valor let; não colocar a variavel let; 
var idade = 25  
idade = 26 // reatribuição de valor var; sem a variavel var
var idade = 26 // redefinir valor var; com a variavel var no texto
const PI = 3.1415 // Numeric
let test = true // Boolean; verdadeira ou falsa
var x = null // null, nulo
var y; //Undefined
// sempre usar aspas "" quando for um texto
// let = variavel, pode mudar quando quiser 
//var = pode ser reescrita
// const = constante, não muda
// "joão" texto
// "25" variavel numérica
// let pode retribuir, mas não pode redifinir
// numeric pode redifinir e retribuir
console.log("Nome: "+nome)
console.log("idade: "+idade)
console.log("PI: "+PI) 
console.log("Teste: "+test)
// abre o terminal : CTRL+""
// repetir a última linha = Alt+ shfit+seta para baixo

//==============================================

// Tipos de Operadores

//Operadores aritiméticos (+,- , * , / , %)
// no final sempre terá uma variável boolean : false ou true; verdadeiro ou falso
var a = 10 
var b = 3
console.log("Soma: "+(a+b)) // 13
console.log("Sulbtração: "+(a-b)) // 7
console.log("Multiplicação: "+(a*b)) // 30
console.log("Divisão: "+(a/b)) // 3.333..
console.log("Resto: "+(a%b)) // 1

// Operadores Relacionais
var a = 10 // var numeric
var b = 20 // var numeric
var c = "10" // var string

console.log("a>b: "+(a>b)) // Comparação maior 
console.log("a==c: "+(a==c)) // Igualdade simples
console.log("a===c: "+(a===c)) // Igualdade Estrita

// Operadores Lógicos (&& - E, || - OU, ! - Não)

var nota1 = 5
var nota2 = 8

console.log("Aprovação: "+ (nota1>7 && nota2>7)) //false
console.log("Aprovação: "+ (nota1>7 || nota2>7)) //true
console.log(!true) //false

// Estruturas De Dados (if else, switch case)
// if else = condição, C
//console. log = print do python, imprimir no terminal
var precoProduto = 150
if (precoProduto>=100){console.log("valor a pagar:"+(precoProduto*0.9)) // 10% de desconto
}else{ 
    console.log("valor a pagar:"+precoProduto)
}

//switch case
var mes = 2;
switch (mes){ 
    case 1 :
        console.log("Janeiro")
        break
     case 2 :
            console.log("Ferereiro")
            break
    case 3 :
        console.log("Março")
        break
         default:
            consol.log("Outro Mês")
            break
}


// //java
// classe = modelo
// atributo = características

//Estruturas de Repetição
//For (inicio, fim  e incremento)
for(let i=0; i<=100 ; i++){ 
     console.log(i);
    
}

//while (condicional)
var numeroEscolhido = 4;
var continuar = true;
var contador = 0;
while (continuar){ 
     contador++;
     let numeroSorteado = Math.round(Math.random()*10); // sortear um número entre 0 e 10
     if(numeroEscolhido==numeroSorteado){
        console.log("Acertou!!!!")
        console.log("numero de tentativas:" +contador);
        continuar = false;
     }
}
//função é um método que eu pode executar no código
//funções -  (void // return)
//function return
function ola(nome){ //parâmetro
    return "Olá, "+nome+" Seja Bem-Vindo!!"
} 
console.log(ola("Turma A"));

//function void
function Hello(nome){
    console.log("Hello, "+nome) ;
}
Hello("Turma A");

