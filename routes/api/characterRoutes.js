const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

// define routes

// make it so it ends up as /api/characters/

router
  .route("/")
  .get(charactersController.findAllCharacters)
  .post(charactersController.saveCharacter);

// /api/characters/:id 
router
  .route("/:id")
  .get(charactersController.findCharactersById)
  .put(charactersController.updateCharacter)
  .delete(charactersController.deleteCharacter);

  module.exports = router;