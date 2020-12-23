const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });
    if (targetUser) {
        const isCorrect = bcrypt.compareSync(password, targetUser.password);
        if (isCorrect) {
            const token = jwt.sign({ id: targetUser.id }, "thisIsSecret", { expiresIn: 3600 });
            res.send(token);
        } else {
            res.status(400).send("Password is wrong.");
        }
    } else {
        res.status(404).send("Username not found");
    }
}

const register = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });
    if (targetUser) {
        res.status(400).send("Username already used.");
    } else {
        const salt = bcrypt.genSaltSync(12);
        const hashedPW = bcrypt.hashSync(password, salt);

        await db.User.create({ ...req.body, password: hashedPW });

        res.send(201)
    }
}

module.exports = {
    login: login,
    register: register
}