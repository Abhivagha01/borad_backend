require('dotenv').config();
const mongoose = require('mongoose');

async function MongooseConnect() {
    try {
        await mongoose.connect(process.env.MONGOOSE_CONNECT);
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection failed", error);
    }
}

module.exports = MongooseConnect;
