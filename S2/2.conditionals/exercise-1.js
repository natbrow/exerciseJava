
const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true }, { name: 'Lucia Aranda', T1: true, T2: false, T3: true }, { name: 'Abel Cabeza', T1: false, T2: true, T3: true }, { name: 'Alfredo Blanco', T1: false, T2: false, T3: false }, { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]
for (let alumn of alumns) {
    let trimestres = 0;
    if (alumn.T1 === true) {
        trimestres++
    } if (alumn.T2 === true) {
        trimestres++
    } if (alumn.T3 === true) {
        trimestres++
    } if (trimestres >= 2) {
        alumn.isApproved = true;
    } else {
        alumn.isApproved = false;
    }
}
console.log(alumns);