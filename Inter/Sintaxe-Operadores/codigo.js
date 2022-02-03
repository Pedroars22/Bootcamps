//Importação para usúario digitar os valores
let entrarValor = require('prompt-sync')();

let num1 = parseFloat(entrarValor());
let num2 = parseFloat(entrarValor());

function comparaNumeros(num1, num2) {
    if (!num1 || !num2)  return 'Digite dois números';
      
    
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não'        
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    const soma = parseFloat(num1) + parseFloat(num2);

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(comparaNumeros(num1, num2));