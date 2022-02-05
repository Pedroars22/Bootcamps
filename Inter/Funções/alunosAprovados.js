const alunos = [
    {
        nome: 'Pedro',
        nota: 7,
        turma: '1B'
    },
    {
        nome: 'Augusto',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Silva',
        nota: 6,
        turma: '1C'
    },
    {
        nome: 'Ribeiro',
        nota: 4,
        turma: '2C'
    }
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));