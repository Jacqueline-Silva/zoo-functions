const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) {
    return {};
  }
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

module.exports = getEmployeeByName;
