const router = require("express").Router();
const vehiclesController = require("../../controllers/vehiclesController");

router
  .route("/")
  .get(vehiclesController.findAllVehicles)
  .post(vehiclesController.saveVehicles);

router
  .route("/:id")
  .get(vehiclesController.findVehiclesById)
  .put(vehiclesController.updateVehicles)
  .delete(vehiclesController.deleteVehicles);

  module.exports = router;