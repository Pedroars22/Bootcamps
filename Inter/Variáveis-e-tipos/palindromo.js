var palavra = require('prompt-sync')();

palindromo = palavra();

//Solução 1
function verificarPalindromo(palindromo) {
    if (!palindromo) return "Digite uma palavra!";
    
    if (palindromo.split("").reverse().join("") === palindromo) {
        return `"${palindromo}" é um palíndromo`;
    } 
    return `"${palindromo}" não é um palíndromo`;
}


//Solução 2
function verificarPalindromo2(palindromo) {
    if (!palindromo) return "Digite uma palavra!";

    for (let i = 0; i < palindromo.length / 2; i++) {
        if (palindromo[i] !== palindromo[palindromo.length - 1 - i]) {
            return `"${palindromo}" não é um palíndromo`
        } 

        return `"${palindromo}" é um palíndromo`;
    }
     
}

console.log(verificarPalindromo2(palindromo));