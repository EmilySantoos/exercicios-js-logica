/*Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.*/


// Função para verificar se o ano é bissexto
function ehAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Função para verificar se a data é válida
function ehDataValida(dia, mes, ano) {
    // Verifica se os números são inteiros
    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
        return false;
    }

    // Verifica se o mês está entre 1 e 12
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Define a quantidade de dias no mês
    let diasNoMes;
    if (mes === 2) {
        diasNoMes = ehAnoBissexto(ano) ? 29 : 28;
    } else if ([4, 6, 9, 11].includes(mes)) {
        diasNoMes = 30;
    } else {
        diasNoMes = 31;
    }

    // Verifica se o dia está dentro do limite do mês
    return dia >= 1 && dia <= diasNoMes;
}

// Testes
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false
console.log(ehDataValida(31, 4, 2023)); // false (abril tem 30 dias)
console.log(ehDataValida(31, 12, 2023)); // true
