const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.filter((e) => e.id === id);
  const primeiroAnimal = funcionario.map((e) => e.responsibleFor[0]);
  const idAnimal = primeiroAnimal.toString();

  const residentss = species.find((e) => e.id === idAnimal);
  const residentsOrdenados = residentss.residents.sort((a, b) => a.age - b.age);
  const animalIdoso = residentsOrdenados[residentsOrdenados.length - 1];

  return Object.values(animalIdoso);
}

module.exports = getOldestFromFirstSpecies;
