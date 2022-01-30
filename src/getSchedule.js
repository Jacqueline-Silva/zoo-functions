const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const searchAnimal = (animalName) => {
  const search = species.filter((animal) => animal.name.includes(animalName));
  let animalAvailability = '';
  search.forEach((a) => {
    animalAvailability = a.availability;
  });
  return animalAvailability;
};

const searchDay = (day) => {
  const { open, close } = hours[day];
  const animalsOfDay = species.filter((e) => e.availability.includes(day)).map((e) => e.name);
  let objResult = {};
  if (day === 'Monday') {
    objResult = {
      [day]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  } else {
    objResult = {
      [day]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: animalsOfDay,
      },
    };
  } return objResult;
};

const withoutAnimalAndDay = () => {
  const searchResult = {};
  const objKeys = Object.keys(hours);
  objKeys.forEach((dayK, index) => {
    const animalsOfDay = species.filter((e) => e.availability.includes(dayK)).map((e) => e.name);
    const objValues = Object.values(hours);
    const { open, close } = objValues[index];
    searchResult[objKeys[index]] = {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: animalsOfDay,
    };
    if (objKeys[index] === 'Monday') {
      searchResult.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return searchResult;
};

function animalOrDay(aniOrDay) {
  if (species.find((animal) => animal.name === aniOrDay)) {
    return searchAnimal(aniOrDay);
  }
  if (hours[aniOrDay]) {
    return searchDay(aniOrDay);
  }
  return withoutAnimalAndDay();
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return withoutAnimalAndDay();
  }
  if (scheduleTarget) {
    return animalOrDay(scheduleTarget);
  }
}

module.exports = getSchedule;
