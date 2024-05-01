const User = require('../Models/User')

async function CreatedInquiry(req, res) {
    try {
        const payload = req.body;
        const newUser = await User.create(payload);
        res.status(201).send({
            message: "Inquiry Submitted Successfully!",
            user: newUser
        });
    } catch (error) {
        console.error('Failed to handle inquiry:', error);
        res.status(500).send({
            message: 'Server error while creating inquiry',
            error: error.message
        });
    }
}


async function GetAllInquiry(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const total = await User.countDocuments();
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const users = await User.find().skip(startIndex).limit(limit);
        if (users.length === 0) {
            return res.status(404).send({
                message: 'No Inquiries Found!'
            });
        }
        const results = {};
        if (endIndex < total) {
            results.next = {
                page: page + 1,
                limit: limit
            };
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            };
        }
        results.totalPages = Math.ceil(total / limit);
        results.current = {
            page: page,
            limit: limit,
            count: users.length
        };
        results.data = users;
        res.send(results);
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving Inquiries',
            error: error.message
        });
    }
}



module.exports = { CreatedInquiry, GetAllInquiry };