const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((e) => e.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  function retornaArray() {
    const filter = employees.filter((e) => e.managers.includes(managerId));
    return filter.map((newArr) => `${newArr.firstName} ${newArr.lastName}`);
  }
  return retornaArray();
}

module.exports = { isManager, getRelatedEmployees };
