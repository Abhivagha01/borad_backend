require('dotenv').config();
const express = require('express');
const { UserRouter } = require('./Routes/User');
const {connectToMongoDB} =require('./Connfig/Db')
const app = express();
var cors = require('cors');


connectToMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/',UserRouter);

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.error('Failed to start the server:', error);
    } else {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
});
