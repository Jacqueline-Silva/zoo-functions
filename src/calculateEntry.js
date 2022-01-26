const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const yearsOld = (idade) => {
  const objIdade = {};
  if (idade.filter((idd) => idd.age === 18)) {
    const adult = idade.filter((idd) => idd.age === 18).length;
    objIdade.adult = adult;
  }
  if (idade.filter((idd) => idd.age <= 10)) {
    const child = idade.filter((idd) => idd.age <= 10).length;
    objIdade.child = child;
  }
  if (idade.filter((idd) => idd.age === 50)) {
    const senior = idade.filter((idd) => idd.age === 50).length;
    objIdade.senior = senior;
  }
  return objIdade;
};

function countEntrants(entrants) {
  return yearsOld(entrants);
}

const calculaPreco = (entrants) => {
  let soma = 0;
  soma += (countEntrants(entrants).child * prices.child);
  soma += (countEntrants(entrants).adult * prices.adult);
  soma += (countEntrants(entrants).senior * prices.senior);
  return soma;
};

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  if (Object.keys(entrants).length >= 1) {
    return calculaPreco(entrants);
  }
}
/*
  Consulta:
    Raphael Martins fez um thread no Slack sobre expressão lógica para objetos.
*/

module.exports = { calculateEntry, countEntrants };
