const db = require("../models");

module.exports = {
  findAllPlanets(req, res) {
    db.planets.find(req.query)
      .then(dbPlanets => res.json(dbPlanets))
      .catch(error => res.status(500).json(error));
  },
  findPlanetsById(req, res) {
    db.planets.find(req.params.id)
      .then(dbPlanets => res.json(dbPlanets))
      .catch(error => res.status(422).json(error));
  },
  savePlanet(req, res) {
    db.planets.create(req.body)
      .then(dbPlanets => res.json(dbPlanets))
      .catch(error => res.status(422).json(error));
  },
  updatePlanet(req, res) {
    db.planets.findOneAndUpdate({ _id: req.params.id}, req.body)
      .then(dbPlanets => res.json(dbPlanets))
      .catch(error => res.status(422).json(error));
  },
  deletePlanet(req, res) {
    db.planets.findById({ _id: req.params.id})
      .then(dbPlanets => dbPlanets.remove())
      .then(dbPlanets => res.json(dbPlanets))
      .catch(error => res.status(422).json(error));
  }
};