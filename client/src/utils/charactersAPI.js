import axios from "axios";

export default {
  getSavedCharacters() {
    return axios.get("/api/characters");
  },
  getCharactersById(characterId) {
    return axios.get(`/api/characters/${characterId}`);
  },
  saveCharacter(characterData) {
    return axios.post("/api/characters", characterData);
  },
  // add update character later after I see this shit works properly...
  deleteCharacter(characterId) {
    return axios.delete(`/api/characters/${characterId}`);
  }
}