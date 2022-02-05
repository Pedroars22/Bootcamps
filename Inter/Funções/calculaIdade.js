function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Pedro",
    idade: 29
}

const pessoa2 = {
    nome: "Paloma",
    idade: 28
}

const animal = {
    nome: "Julieta",
    idade: 3,
    raca: 'Maltês'
}

//console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(animal, [10]));