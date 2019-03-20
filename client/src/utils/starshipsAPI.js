import axios from "axios";

export default {
  getSavedStarships() {
    return axios.get("/api/starships");
  },
  getSavedStarshipsById(starshipId) {
    return axios.get(`/api/starships/${starshipId}`);
  },
  saveStarship(starshipData) {
    return axios.post("/api/starships", starshipData);
  },
  deleteStarship(starshipId) {
    return axios.delete(`/api/starships/${starshipId}`);
  }
}