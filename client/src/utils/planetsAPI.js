import axios from "axios";

export default {
  getSavedPlanets() {
    return axios.get("/api/planets/");
  },
  getSavedPlanetsById(planetId) {
    return axios.get(`/api/planets/${planetId}`);
  },
  savePlanet(planetData) {
    return axios.post("/api/planets", planetData);
  },
  // hey, make sure you add a way to update planets. you know...for science... pls dont forget
  deletePlanet(planetId) {
    return axios.delete(`/api/planets/${planetId}`);
  }
}