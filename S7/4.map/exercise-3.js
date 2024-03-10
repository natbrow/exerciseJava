// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad.name y añade al valor de.name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.


const cities = [{ isVisited: true, name: 'Tokyo' }, { isVisited: false, name: 'Madagascar' }, { isVisited: true, name: 'Amsterdam' }, { isVisited: false, name: 'Seul' }];

const result = cities.map(city => {
    switch (city.isVisited) {
        case true:
            return { name: `${city.name} (Visitado)` };
        default:
            return { name: city.name };
    }
})
console.log(result);

