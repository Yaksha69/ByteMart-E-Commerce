const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', router)

app.use('/product', router);

app.use('/products', router);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database');
        app.listen(process.env.PORT, () => {
            console.log(`Listening to PORT ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error in connecting to the database:', error);
    });
