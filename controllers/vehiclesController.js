const db = require("../models");

module.exports = {
  findAllVehicles(req, res) {
    db.vehicles.find(req.query)
      .then(dbVehicles => res.json(dbVehicles))
      .catch(error => res.status(500).json(error));
  },
  findVehiclesById(req, res) {
    db.vehicles.findById(req.params.id)
      .then(dbVehicles => res.json(dbVehicles))
      .catch(error => res.status(422).json(error));
  },
  saveVehicles(req, res) {
    db.vehicles.create(req, res)
      .then(dbVehicles => res.json(dbVehicles))
      .catch(error => res.status(422).json(error));
  },
  updateVehicles(req, res) {
    db.vehicles.findOneAndUpdate({ _id: req.params.id}, req.body)
      .then(dbVehicles => res.json(dbVehicles))
      .catch(error => res.status(422).json(error));
  },
  deleteVehicles(req, res) {
    db.vehicles.findById({ _id: req.params.id})
      .then(dbVehicles => dbVehicles.remove())
      .then(dbVehicles => res.json(dbVehicles))
      .catch(error => res.status(422).json(error));
  }
};