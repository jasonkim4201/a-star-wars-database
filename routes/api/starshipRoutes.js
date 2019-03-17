const router = require("express").Router();
const starshipsController = require("../../controllers/starshipsController");

// api/starships/

router
  .route("/")
  .get(starshipsController.findAllStarships)
  .post(starshipsController.saveStarships)

router 
  .route("/:id")
  .get(starshipsController.findStarshipsById)
  .put(starshipsController.updateStarships)
  .delete(starshipsController.deleteStarships);

module.exports = router;