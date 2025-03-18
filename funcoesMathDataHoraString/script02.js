// Fuções de Texto (String)

let texto = "Aula de JavaScript";

// Contar os caracteres
console.log(texto.length); //18

//MIÚSCULA E minúsculas
console.log(texto.toLocaleUpperCase()); // MAIÚSCULAS
console.log(texto.toLocaleLowerCase()); // minúsculas

// Partes do Texto
// Substring (Inicio, fim)
console.log(texto.substring(0,4)); //Aula
//slice()
console.log(texto.slice(-10))

//Substituir parte do texto
console.log(texto.replace("java", "type"))

//Tesoura (fim)
let texto1 = "  JavaScript  ";
console.log(texto1); //" JavaScript  "
console.log(texto1.trim());

// Seprar texto (Split) : Caracter comum
let linguagens = "javaSCript, python, PHP, java, C#" 
let vetorlinguagens = linguagens.split(", ");
console.log (linguagens);
console.log(vetorlinguagens);

//desafio
let caracter = "Bom Dia Com Muita Alegria"
let caracteresSemEspaco=caracteres.replaceAll(" ","");
console.log(caracteres);
console.log(caracteres.length);
console.log(caracteresSemEspaco);
console.log(caracteresSemEspaco.length);
