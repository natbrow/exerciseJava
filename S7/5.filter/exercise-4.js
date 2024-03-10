
const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' }, { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' }, { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }, { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];

const filtrarPorEdad = streamers.filter(streamers => streamers.gameMorePlayed === 'Leage of Legends' || streamers.age < 30)
console.log(filtrarPorEdad);