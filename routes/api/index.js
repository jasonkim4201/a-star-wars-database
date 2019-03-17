const router = require("express").Router();
const characterRoutes = require("./characterRoutes");
const planetRoutes = require("./planetRoutes");
const starshipRoutes = require("./starshipRoutes");
const vehicleRoutes = require("./vehicleRoutes");

router.use("/characters", characterRoutes);
router.use("/planets", planetRoutes);
router.use("/starships", starshipRoutes);
router.use(".vehicles", vehicleRoutes);

module.exports = router;