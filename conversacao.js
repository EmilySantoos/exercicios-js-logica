/*○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.*/

// Converte array de pares para objeto
function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;
    }, {});
}

// Converte objeto para array de pares
function objetoParaPares(obj) {
    return Object.entries(obj);
}

// Testes
const pares = [["nome", "Alice"], ["idade", 25], ["cidade", "São Paulo"]];
const obj = { nome: "Alice", idade: 25, cidade: "São Paulo" };

console.log("De pares para objeto:", paresParaObjeto(pares));
// { nome: 'Alice', idade: 25, cidade: 'São Paulo' }

console.log("De objeto para pares:", objetoParaPares(obj));
// [ [ 'nome', 'Alice' ], [ 'idade', 25 ], [ 'cidade', 'São Paulo' ] ]
