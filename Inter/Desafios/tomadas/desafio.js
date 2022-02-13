let tomada = [2, 2, 2, 2];

let soma = 0;

for (let i = 0; i < tomada.length; i++) {
     soma += parseInt(tomada.slice(-i));
}

soma = soma - 3;

console.log(soma);

