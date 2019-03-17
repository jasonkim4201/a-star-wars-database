const db = require("../models");

module.exports = {
  findAllStarships(req, res) {
    db.starships.find(req.query)
      .then(dbStarships => res.json(dbStarships))
      .catch(error => res.status(500).json(error));
  },
  findStarshipsById(req, res) {
    db.starships.findById(req.params.id)
      .then(dbStarships => res.json(dbStarships))
      .catch(error => res.status(422).json(error));
  },
  saveStarships(req, res) {
    db.starships.create(req.body)
      .then(dbStarships => res.json(dbStarships))
      .catch(error => res.status(422).json(error));
  },
  updateStarships(req, res) {
    db.starships.findOneAndUpdate({ _id: req.params.id}, req.body)
      .then(dbStarships => res.json(dbStarships))
      .catch(error => res.status(422).json(error));
  },
  deleteStarships(req, res) {
    db.starships.findById({ _id: req.params.id})
      .then(dbStarships => dbStarships.remove())
      .then(dbStarships => res.json(dbStarships))
      .catch(error => res.status(422).json(error));
  }
};