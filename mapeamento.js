/*Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.*/
const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 200 },
    { nome: "Monitor", preco: 1200 }
];

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() // cria cópia para não alterar o original
        .sort((a, b) => a.preco - b.preco) // ordena por preço
        .map(produto => produto.nome); // pega só os nomes
}

// Teste
console.log(nomesOrdenadosPorPreco(produtos));
// Saída: [ 'Mouse', 'Teclado', 'Monitor', 'Notebook' ]
