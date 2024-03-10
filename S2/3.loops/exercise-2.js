const aliens = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const alien in aliens) {
    console.log(`${alien}:${aliens[alien]}`);

}