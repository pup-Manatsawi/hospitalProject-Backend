const express = require("express");
const app = express();
const cors = require("cors")
const userRouter = require("./routes/user");
const healthCheckRouter = require("./routes/healthCheck")
const patientRouter = require("./routes/patient");
const db = require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/users", userRouter);
app.use("/health-checks", healthCheckRouter);
app.use("/patients", patientRouter);
app.use("/update-database", (req, res) => {
    db.sequelize.sync().then(() => {
        console.log("Database Synced")
        res.send("Database synced")
    })
})

app.listen(8000, () => {
    console.log("Server is running")
})