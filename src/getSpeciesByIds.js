const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return species.filter((e) => e.id === ids[0] || e.id === ids[1]);
}

module.exports = getSpeciesByIds;
