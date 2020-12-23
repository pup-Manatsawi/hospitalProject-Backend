const db = require("../models")

const getPatient = async (req, res) => {
    const patient = await db.Patient.findOne({ where: { id: req.params.id } });
    res.send(patient)
}

const addPatient = async (req, res) => {
    const newPatient = await db.Patient.create({ ...req.body });
    res.send(newPatient)
}

const updatePatient = async (req, res) => {
    const targetPatient = await db.Patient.findOne({ where: { id: req.params.id } });
    if (targetPatient) {
        await targetPatient.update({ ...req.body })
        res.status(200).send("Update success")
    } else {
        res.status(404).send("Patient Not Found")
    }
}

const deletePatient = async (req, res) => {
    const targetPatient = await db.Patient.findOne({ where: { id: req.params.id } });
    if (targetPatient) {
        await targetPatient.destroy();
        res.send(204)
    } else {
        res.status(404).send("Patient Not Found")
    }
}

module.exports = {
    getPatient,
    addPatient,
    updatePatient,
    deletePatient,
}