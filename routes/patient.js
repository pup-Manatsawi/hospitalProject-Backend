const express = require("express");
const router = express.Router()
const patientController = require("../controllers/patient")

router.get("/:id", patientController.getPatient);
router.post("/", patientController.addPatient);
router.put("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);

module.exports = router