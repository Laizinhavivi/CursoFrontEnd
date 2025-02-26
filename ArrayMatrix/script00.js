// Array and Matrix (ventores matrizes)
//Um Array é uma coleção ordenada de dados
//O primeiro elemento de um array, o índice é 0
  //Declara uma array
let array = [];
let numberArray = [1,2,3,4,5,6,7,8,9];
let textArray = ["Sapato", "cola", "Bola"];
let mixArray = [1,"Nome","true"];

//Como Acessar os elementos
console.log(textArray[1]); //índice = bola
console.log(numberArray[8]);//9

// Contar elementos de uma array (length)
console.log(numberArray.length);//9
console.log(textArray.length); //3

//Adicionar elementos em um Array
//No começo (0)  unshif
textArray.unshift("cachorro");
//No final - push()
textArray.push("Casa");
console.log(textArray);

//Alterar o valor de elemento de um Array
textArray[2] = "Carro";
console.log(textArray);

//remover elementos Array
//do começo - shift
textArray.shift(); 
console.log(textArray);
//do meio - splice(indice,quantidade)
textArray.splice(1,1);
console.log(textArray);
//do fim
textArray.pop();
console.log(textArray);

//Percorrer um Array
for(let i=0; i<numberArray.length;i++){
console.log("Numero["+i+"]="+numberArray[i]);
}

//Foreach
numberArray.forEach(x =>{
     console.log(x);
});

//indexof=>Retorna o Indice do Elemento
console.log()