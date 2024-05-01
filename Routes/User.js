const express = require('express');
const { CreatedInquiry, GetAllInquiry } = require('../Controller/User');

const UserRouter = express.Router();  

UserRouter.post('/inquiry', CreatedInquiry);
UserRouter.get('/', GetAllInquiry);

module.exports = {UserRouter};
