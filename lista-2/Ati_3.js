/*
 Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue. 
*/

const leia = require('readline-sync');

let nome, idade, perguntaDeDoacao, situacao;

nome = leia.question('Digite o Nome do doador: ');
idade = leia.questionInt('Digite a Idade do doador: ');
perguntaDeDoacao = leia.question('Primeira doacao de sangue? ');

if ((idade >= 18 && idade <= 69) && (perguntaDeDoacao === true)){
    situacao = 'apto';
} else{
    situacao = 'nao apto';
}

console.log(`${nome} ${situacao} para doar sangue!`);