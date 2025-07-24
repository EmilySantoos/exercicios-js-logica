/*8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.*/

const vendas = [
    { cliente: "Alice", total: 150 },
    { cliente: "Bob", total: 200 },
    { cliente: "Alice", total: 100 },
    { cliente: "Bob", total: 50 },
    { cliente: "Carlos", total: 300 }
];

function agruparPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const cliente = venda.cliente;
        if (!acumulador[cliente]) {
            acumulador[cliente] = 0;
        }
        acumulador[cliente] += venda.total;
        return acumulador;
    }, {});
}

console.log(agruparPorCliente(vendas));
