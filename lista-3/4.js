/* WHILE:
    Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:
    ● Idade (Número inteiro)
    ● Identidade de Gênero (Número Inteiro):
        o 1 – Mulher Cis
        o 2 – Homem Cis
        o 3 – Não Binário
        o 4 – Mulher Trans
        o 5 – Homem Trans
        o 6 – Outros
    ● Pessoa Desenvolvedora (Número Inteiro):
        o 1 – Backend
        o 2 – Frontend
        o 3 – Mobile
        o 4 – FullStack
    Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar a leitura dos dados de um novo colaborador ou não (S/N). Caso seja pressionada a tecla N, mostre na tela:
        ● O número de pessoas desenvolvedoras Backend
        ● O número de Mulheres Cis e Trans desenvolvedoras Frontend
        ● O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
        ● O número de Não Binários desenvolvedores FullStack menores de 30 anos
        ● O número total de pessoas que responderam à pesquisa
        ● A média de idade das pessoas que responderam à pesquisa
*/

const leia = require("readline-sync");

let situcao = true, continua;
let idade, idGenero, pessoaDev; 


let totalDeBackend = 0;
let mulheresFrontend = 0;
let homensMobile40 = 0;
let naoBinariosFullStack30 = 0;
let totalDePessoas = 0;
let somaDasIdades = 0;
let mediaDasIdades = 0;

while(situcao){

    idade = leia.questionInt('Idade: ');
    somaDasIdades += idade;

    console.log('\n1 - Mulher Cis | 2 - Homem Cis | 3 - Não Binário | 4 - Mulher Trans | 5 - Homem Trans | 6 - Outros');
    idGenero = leia.questionInt('Identidade de Genero: ');

    console.log('\n1 - Backend | 2 - Frontend | 3 - Mobile | 4 - FullStack');
    pessoaDev = leia.questionInt('Pessoa Desenvolvedora: ');

    if(pessoaDev === 1){
        totalDeBackend++;
    }

    if(((idGenero === 1) || (idGenero === 4)) && (pessoaDev === 2)){
        mulheresFrontend++;
    }

    if(((idGenero === 2) || (idGenero === 5)) && (pessoaDev === 3) && (idade > 40)){
        homensMobile40++;
    }

    if((idGenero === 3) && (pessoaDev === 4) && idade < 30){
        naoBinariosFullStack30++;
    }

    
    
    totalDePessoas++;

    continua = leia.question('Deseja continuar (S/N): ').toUpperCase();
    if(continua === 'N'){
        situcao = false;
    }
}

mediaDasIdades = somaDasIdades / totalDePessoas;

console.clear();
console.log(`Total de pessoas desenvolvedoras Backend: ${totalDeBackend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresFrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensMobile40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${naoBinariosFullStack30}`);
console.log(`O numero total de pessoas que responderam a pesquisa: ${totalDePessoas}`);
console.log(`A media de idade das pessoas que responderam a pesquisa: ${mediaDasIdades.toFixed(2)}`);