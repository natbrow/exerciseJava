const a = 10;
const b = 5;

// - Ejecuta esta función sin pasar ningún parametro

const suma = (a = 10, b = 5) => {
    console.log(a + b);
}
suma();
//     - Ejecuta esta función pasando un solo parametro

suma(15);

//         - Ejecuta esta función pasando dos parametros
suma(20, 20);