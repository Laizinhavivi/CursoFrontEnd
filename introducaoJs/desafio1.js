const readline = require('readline');

// Cria uma interface de leitura para o terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para classificar a idade
function classificarIdade() {
    rl.question("Qual é a sua idade maravilhosa? ", function(idade) {

        // Verifica a faixa etária e exibe a classificação
        if (idade < 18) {
            console.log("Você é menor de idade.");
        } else if (idade >= 18 && idade < 60) {
            console.log("Você é adulto.");
        } else {
            console.log("Você é idoso.");
        }

        // Fecha a interface após a resposta
        rl.close();
    });
}

// Chama a função para iniciar o processo
classificarIdade();
