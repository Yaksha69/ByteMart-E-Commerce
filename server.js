const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/products', router);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening to PORT ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error in connecting to the database:', error);
    });

app.use(router);