import axios from "axios";

export default {
  queryCharacters(query) {
    return axios.get(`https://swapi.co/api/people/?search=${query}`);
  },
  queryRandomCharacters(query) {
    return axios.get(query);
  },
  queryPlanets(query) {
    return axios.get(`https://swapi.co/api/planets/?search=${query}`);
  },
  queryRandomPlanets(query) {
    return axios.get(query);
  },
  queryStarships(query) {
    return axios.get(`https://swapi.co/api/starships/?search=${query}`);
  },
  queryRandomStarships(query) {
    return axios.get(query);
  },
  queryVehicles(query) {
    return axios.get(`https://swapi.co/api/vehicles/?search=${query}`)
  },
  queryRandomVehicles(query) {
    return axios.get(query);
  }
};