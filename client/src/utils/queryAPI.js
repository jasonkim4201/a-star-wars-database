import axios from "axios";

// first off lets see if i can get the search to work on the swapi
// now make axios calls to my own api routes
// okay so the api only returns a max of 10 items in a search or lets try a for in loop with all the links...


export default {
  queryCharacters(query) {
    return axios.get(`https://swapi.co/api/people/?search=${query}`);
  },
  queryAllCharacters(query) {
    return axios.get(query);
  },
  queryPlanets(query) {
    return axios.get(`https://swapi.co/api/planets/?search=${query}`);
  },
  starshipQuery(query) {
    return axios.get(`https://swapi.co/api/starships/?search=${query}`);
  },
  vehiclesQuery(query) {
    return axios.get(`https://swapi.co/api/vehicles/?search=${query}`)
  },

};