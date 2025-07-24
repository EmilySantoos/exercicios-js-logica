/* implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.*/

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const chave = JSON.stringify(args);
        if (cache[chave]) {
            return cache[chave];
        }
        const resultado = fn(...args);
        cache[chave] = resultado;
        return resultado;
    };
}

// Exemplo com cálculo pesado (fatorial):
const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5)); // Calcula e armazena
console.log(fatorialMemo(5)); // Retorna do cache
