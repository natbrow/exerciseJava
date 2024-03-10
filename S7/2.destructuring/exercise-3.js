
const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};

const animals = animalFunction();
//console.log(animals);
const { name, race } = animalFunction();
console.log(name);
console.log(race);