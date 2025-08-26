/*   Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.
 */

const leia = require("readline-sync");

let tipoPrincipal = leia.question('Tipo: ').toLowerCase();
let classe = leia.question('Classe: ').toLowerCase();
let alimentacao = leia.question('Alimentacao: ').toLowerCase();

let animal = '';

if (tipoPrincipal === "vertebrado") {

    if (classe === "ave") {
        if (alimentacao === "carnivoro") {
            animal = "Aguia";
        } else if (alimentacao === "onivoro") {
            animal = "Pomba";
        }
    } else if (classe === "mamifero") {
        if (alimentacao === "onivoro") {
            animal = "Homem";
        } else if (alimentacao === "herbivoro") {
            animal = "Vaca";
        }
    }
    
} else if (tipoPrincipal === "invertebrado") {

    if (classe === "inseto") {
        if (alimentacao === "hematofago") {
            animal = "Pulga";
        } else if (alimentacao === "herbivoro") {
            animal = "Lagarta";
        } 
    } else if (classe === "anelideo") {
        if (alimentacao === "hematofago") {
            animal = "Sanguessuga";
        } else if (alimentacao === "onivoro") {
            animal = "Minhoca";
        }
    }
}

console.log(`\n${animal}`);