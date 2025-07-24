/*ce Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.*/

function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// Exemplo de uso:
const logMensagem = debounce((msg) => console.log(msg), 1000);

logMensagem("Chamando 1");
logMensagem("Chamando 2"); 
logMensagem("Chamando 3"); // Só essa vai aparecer após 1 segundo

