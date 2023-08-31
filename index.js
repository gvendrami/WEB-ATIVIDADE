"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();

function calcularMedia(notas) 
{
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

function main() 
{
    const nome = prompt('Insira o nome do aluno que sera avaliado: ');
    const notas = [];

    for (let k = 0; k < 4; k++) 
    {
        const nota = parseFloat(prompt(`Digite a nota ${k + 1} de 0 a 10: `));
        if (isNaN(nota)||nota<0||nota>10) 
        {
            console.log('Voce inseriu uma nota inválida. Por favor, digite novamente.');
            k--;
            continue;
        }
        notas.push(nota);
    }

    const media = calcularMedia(notas);

    const aluno = 
    {
        nome,
        notas,
        media,
    };

    console.log(aluno);
}
main();
