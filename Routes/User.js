const express = require('express');
const { CreatedUser, GellAllUser } = require('../Controller/User');

const UserRouter = express.Router();  

UserRouter.post('/', CreatedUser);
UserRouter.get('/', GellAllUser);

module.exports = {UserRouter};
