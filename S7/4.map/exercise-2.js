// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad.name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users = [{ id: 1, name: 'Abel' }, { id: 2, name: 'Julia' }, { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }];

const cambiarName = users.map(user => {
    switch (user.name.charAt(0)) {
        case 'A':
            return { id: user.id, name: 'Anacleto' };
        default:
            return { id: user.id, name: user.name }

    }
});
console.log(cambiarName);