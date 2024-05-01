require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGOOSE_CONNECT)
        console.log(`Successfully connected to : ${mongoose.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);

    }
}

module.exports = { connectToMongoDB };
