const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const filtraPorRegiao = (regiao) => {
  const regiaoObj = {
    NE: species.filter((e) => e.location === 'NE').map((e) => e.name),
    NW: species.filter((e) => e.location === 'NW').map((e) => e.name),
    SE: species.filter((e) => e.location === 'SE').map((e) => e.name),
    SW: species.filter((e) => e.location === 'SW').map((e) => e.name),
  };
  return regiaoObj;
};
// console.log(species.filter((e1) => e1.location === 'NE').map((e) => e.residents.map((e) => e.name)))

/* const nomesPorRegiao = {
  NE: species.filter((e1) => e1.location === 'NE').map((e) => e.residents.map((e) => e.name)),
};
nomesPorRegiao.NW = species.filter((e1) => e1.location === 'NW').map((e) => e.residents.map((e) => e.name));
nomesPorRegiao.SE = species.filter((e1) => e1.location === 'SE').map((e) => e.residents.map((e) => e.name));
nomesPorRegiao.SW = species.filter((e1) => e1.location === 'SW').map((e) => e.residents.map((e) => e.name));
 */
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return filtraPorRegiao();
  }
  if (options.includeNames) {
    //
  }
}
console.log(getAnimalMap());

module.exports = getAnimalMap;
