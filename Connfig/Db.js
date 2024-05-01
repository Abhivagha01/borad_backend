require('dotenv').config();
const mongoose = require('mongoose');

async function MongooseConnect() {
    mongoose.connect(process.env.MONGOOSE_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB connected successfully.');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });
}



module.exports = MongooseConnect;
