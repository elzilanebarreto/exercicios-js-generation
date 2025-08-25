/* Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.
        Código do Produto       Produto           Preço Unitário
            1             Cachorro Quente           R$ 10.00
            2             X-Salada                  R$ 15.00
            3             X-Bacon                   R$ 18.00
            4             Bauru                     R$ 12.00
            5             Refrigerante              R$ 8.00
            6             Suco de laranja           R$ 13.00

Valor total = quantidade * preço
 */

const leia = require('readline-sync');

let codigoDoProduto, quantidade, precoDoProduto, nomeDoProduto, valorTotal;

codigoDoProduto = leia.questionInt('Codigo do Produto: ');

switch (codigoDoProduto) {
    case 1:
        nomeDoProduto = 'Cachorro Quente'
        precoDoProduto = 10.00;
        break;
    case 2:
        nomeDoProduto = 'X-Salada'
        precoDoProduto = 15.00;
        break;
    case 3:
        nomeDoProduto = 'X-Bacon'
        precoDoProduto = 18.00;
        break;
    case 4:
        nomeDoProduto = 'Bauru'
        precoDoProduto = 12.00;
        break;
    case 5:
        nomeDoProduto = 'Refrigerante'
        precoDoProduto = 8.00;
        break;
    case 6:
        nomeDoProduto = 'Suco de laranja'
        precoDoProduto = 13.00;
        break;

    default:
        console.log('Opcao invalida.');
        return;
}

quantidade = leia.questionInt('Quantidade: ');
valorTotal = quantidade * precoDoProduto;

console.log(`\nProduto: ${nomeDoProduto}\nValor Total: ${valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);