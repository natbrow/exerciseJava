// Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample.La función confirmExample recibirá una variable de tipo string(description) que mostrará como titulo de la ventana y retornará el valor del confirm.  La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback(confirmExample o promptExample).

// La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

// Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers

const userAnwsers = [];
let description;
const propmt = prompt('Soy un texto');

function confirmExample(description) {
    const result = confirm(description);
    return result;
}

function promptExample(description) {
    return propmt(description)
}

function father(description, callback) {
    const result = callback(description);
    userAnwsers.push(result);
}
console.log(userAnwsers);
father(confirm, confirmExample);
console.log(userAnwsers);
father(description, promptExample);
console.log(userAnwsers);
father(description, confirmExample);
console.log(userAnwsers);

// guia de confirm y prompt
const confirmValue = confirm('Soy un texto');