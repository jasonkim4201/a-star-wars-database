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
  // reminder to add update character when this is all done
  deleteCharacter(characterId) {
    return axios.delete(`/api/characters/${characterId}`);
  }
}