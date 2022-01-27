const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function procuraFuncionario(funcionario) {
  const funcionarioAchado = employees.find((e) => e.id === funcionario.id
  || e.firstName === funcionario.name
  || e.lastName === funcionario.name);

  if (!funcionarioAchado) {
    throw new Error('Informações inválidas');
  } else {
    return funcionarioAchado;
  }
}

const retornoFuncionario = ({ id, firstName, lastName, responsibleFor }) => {
  function animalPorId(fun2) {
    const s = species.filter((e) => e.id === fun2[0] || e.id === fun2[1]);
    return s.map((e) => e.name);
  }

  function localizacao(animal) {
    const a = species.filter((e) => e.name === animal[0] || e.name === animal[1]);
    return a.map((e) => e.location);
  }

  const objFuncionario = {
    id: `${id}`,
    fullName: `${firstName} ${lastName}`,
  };
  objFuncionario.species = animalPorId(responsibleFor);
  objFuncionario.locations = localizacao(animalPorId(responsibleFor));

  return objFuncionario;
};

function listaDeFuncionarios() {
  function animalPorId(fun2) {
    const s = species.filter((e) => e.id === fun2[0] || e.id === fun2[1]
    || e.id === fun2[2] || e.id === fun2[3]);
    return s.map((e) => e.name);
  }
  function localizacao(animal) {
    const a = species.filter((e) => e.name === animal[0] || e.name === animal[1]
    || e.name === animal[2] || e.name === animal[3]);
    return a.map((e) => e.location);
  }
  const teste2 = (arr) => arr.map((e) => ({
    id: `${e.id}`,
    fullName: `${e.firstName} ${e.lastName}`,
    species: animalPorId(e.responsibleFor),
    locations: localizacao(animalPorId(e.responsibleFor)),
  }));
  return teste2(employees);
}

function getEmployeesCoverage(employee) {
  if (employee) {
    return retornoFuncionario(procuraFuncionario(employee));
  }
  if (!employee) {
    return listaDeFuncionarios();
  }
}

// console.log(listaDeFuncionarios());
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'aaa' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

/*
  Monitoria da manhã com Roberval **(throw new Error)**
*/
module.exports = getEmployeesCoverage;
