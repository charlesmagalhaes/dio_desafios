interface funcionario {
    nome: string;
    codigo: number;
}

const charles: funcionario = {
    nome: 'Charles',
    codigo: 7
}

console.log(charles)

// Desafio  2

enum profissao {
    atriz,
    padeiro
}

interface pessoa {
    nome: string;
    idade: number | string;
    profissao: profissao;
}



const maria:pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: profissao.padeiro
}

const roberto:pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao:profissao.padeiro
}

const laura:pessoa = {
    nome: 'laura',
    idade: '32',
    profissao:profissao.atriz
}

const carlos:pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao:profissao.padeiro
}