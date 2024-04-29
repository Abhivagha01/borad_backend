const User = require('../Models/User')

async function CreatedUser(req, res) {
    const payload = req.body
    console.log(payload);
    if (!payload) {
        return res.status(400).send({ error: 'No data Provided!' })
    }
    const newUser = await User.create(payload);
    res.status(201).send({ message: "User created!", user: newUser });
}

async function GellAllUser(req, res) {
    const user = await User.find();
    if(!user){
        return res.status(400).send({ error: 'No User Found!' })
    }
    res.send(user);
}

module.exports = { CreatedUser, GellAllUser };