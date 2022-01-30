const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalsInfo = () => {
  const especies = species.filter((e) => e.name).map((n) => n.name);
  const populacao = species.filter((e) => e.residents).map((p) => p.residents.length);
  const uniao = {};
  especies.forEach((element, index) => {
    uniao[element] = populacao[index];
  });
  return uniao;
};

const populacao = (animal) => species.find((e) => e.name === animal).residents;

const req3 = (animal) => {
  const popu = species.find((e) => e.name === animal.specie);
  const genero = popu.residents.filter((e) => e.sex === animal.sex);
  return genero.length;
};

function countAnimals(animal) {
  if (!animal) {
    return animalsInfo();
  }
  if (animal.sex) {
    return req3(animal);
  }
  if (animal.specie) {
    return populacao(animal.specie).length;
  }
}

module.exports = countAnimals;
