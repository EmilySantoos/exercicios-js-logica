/*Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.*/

const frase = "olá olá mundo mundo teste mundo";

// Divide a frase em palavras
const palavras = frase.split(" ");
const palavrasUnicas = [];

// Percorre todas as palavras
for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    let existe = false;

    // Verifica se a palavra já está no array de únicas
    for (let j = 0; j < palavrasUnicas.length; j++) {
        if (palavrasUnicas[j] === palavra) {
            existe = true;
            break;
        }
    }

    // Se não existir, adiciona
    if (!existe) {
        palavrasUnicas.push(palavra);
    }
}

console.log(palavrasUnicas);
