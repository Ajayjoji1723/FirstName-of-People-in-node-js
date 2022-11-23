const peoplesNames = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");

const getPeopleInCity = (peoplesNames) => {
  return getFirstName(peoplesNames);
};
module.exports = getPeopleInCity;
