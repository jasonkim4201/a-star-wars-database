const router = require("express").Router();
const planetsController = require("../../controllers/planetsController");

// /api/planets/
router
  .route("/")
  .get(planetsController.findAllPlanets)
  .post(planetsController.savePlanet)

router
  .route("/:id")
  .get(planetsController.findPlanetsById)
  .put(planetsController.updatePlanet)
  .delete(planetsController.deletePlanet);

module.exports = router;