/*Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.*/

const readline = require('readline');

// Cria interface para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gera número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

console.log("🎯 Bem-vindo ao Jogo de Adivinhação!");
console.log("Tente adivinhar o número entre 1 e 100.\n");

function perguntar() {
    rl.question("Digite seu palpite: ", (resposta) => {
        const palpite = parseInt(resposta);
        tentativas++;

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("⚠ Por favor, digite um número válido entre 1 e 100.");
            perguntar();
            return;
        }

        if (palpite === numeroSecreto) {
            console.log(`🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`);
            rl.close();
        } else if (palpite < numeroSecreto) {
            console.log("🔼 Mais alto! Tente novamente.");
            perguntar();
        } else {
            console.log("🔽 Mais baixo! Tente novamente.");
            perguntar();
        }
    });
}

perguntar();
