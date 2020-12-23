const db = require("../models");

const getHealthCheck = async (req, res) => {
  const healthChecks = await db.HealthCheck.findAll();
  res.send(healthChecks);
};

const addHealthCheck = async (req, res) => {
  const { patient_id } = req.body;
  console.log({ patient_id });
  const targetHealthCheck = await db.HealthCheck.findOne({
    where: { patient_id: +patient_id },
  });
  if (!targetHealthCheck) {
    const newHealthCheck = await db.HealthCheck.create({ ...req.body });
    res.send(newHealthCheck);
  } else {
    targetHealthCheck.update({ ...req.body });
    res.send();
  }
};

const updateHealthCheck = async (req, res) => {
  const targetHealthCheck = await db.HealthCheck.findOne({
    where: { id: req.params.id },
  });
  if (targetHealthCheck) {
    await targetHealthCheck.update({ ...req.body });
    res.send("Update success");
  } else {
    res.status(404).send("Not Found");
  }
};

const deleteHealthCheck = async (req, res) => {
  const targetHealthCheck = await db.HealthCheck.findOne({
    where: { id: req.params.id },
  });
  if (targetHealthCheck) {
    await targetHealthCheck.destroy();
    res.send(204);
  } else {
    res.status(404).send("Not Found");
  }
};

module.exports = {
  getHealthCheck,
  addHealthCheck,
  updateHealthCheck,
  deleteHealthCheck,
};
