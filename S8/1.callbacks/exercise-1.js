
const numbersList = [];

function sum(a, b) {
    return a + b;

}
sum();

function substract(a, b) {
    return a - b;

}
substract();


function father(a, b, callback) {
    const result = callback(a, b)
    numbersList.push(result);

}

father(4, 15, sum);
console.log(numbersList);
father(10, 6, substract);
console.log(numbersList);
father(20, 9, sum);
console.log(numbersList);
father(30, 80, substract);
console.log(numbersList);