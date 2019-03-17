const db = require("../models");
// note mongoose says queries are NOT promises so dont even think about trying to do what you were thinking about buddy boi
module.exports = {
  findAllCharacters(req, res) {
    db.characters.find(req.query)
      .then(dbCharacters => res.json(dbCharacters))
      .catch(error => res.status(500).json(error));
  },
  findCharactersById(req, res) {
    db.characters.findById(req.params.id)
      .then(dbCharacters => res.json(dbCharacters))
      .catch(error => res.status(422).json(error));
  },
  saveCharacter(req, res) {
    db.characters.create(req.body)
      .then(dbCharacters => res.json(dbCharacters))
      .catch(error => res.status(422).json(error));
  },
  updateCharacter(req, res) {
    db.characters.findOneAndUpdate({ _id: req.params.id}, req.body)
      .then(dbCharacters => res.json(dbCharacters))
      .catch(error => res.status(422).json(error));
  },
  deleteCharacter(req, res) {
    db.characters.findById({ _id: req.params.id })
      .then(dbCharacters => dbCharacters.remove())
      .then(dbCharacters => res.json(dbCharacters))
      .catch(error => res.status(422).json(error));
  }
};