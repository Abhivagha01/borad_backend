const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Inquiry', UserSchema);

