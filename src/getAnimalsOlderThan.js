const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const chamaAnimal = data.species.find((e) => e.name === animal);
  return chamaAnimal.residents.every((e) => e.age > age);
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
