
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }
const { name, itv } = car;
console.log(name);
console.log(itv);
const [a, b, c] = car.itv;
console.log(a);
console.log(b);
console.log(c);