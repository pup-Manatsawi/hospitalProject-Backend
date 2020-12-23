const express = require("express");
const router = express.Router()
const healthCheckController = require("../controllers/healthCheck")

router.get("/", healthCheckController.getHealthCheck);
router.post("/", healthCheckController.addHealthCheck);
router.put("/:id", healthCheckController.updateHealthCheck);
router.delete("/:id", healthCheckController.deleteHealthCheck);

module.exports = router