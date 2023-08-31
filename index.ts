import PromptSync from "prompt-sync"
const prompt = PromptSync()

interface Aluno {
  nome: string;
  notas: number[];
  media: number;
}

function calcularMedia(notas: number[]): number 
  {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }

function main() 
{
  const nome = prompt('Insira o nome do aluno que sera avaliado: ');
  const notas: number[] = [];

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

  const aluno: Aluno = 
  {
    nome,
    notas,
    media,
  };

  console.log(aluno);
}
main();