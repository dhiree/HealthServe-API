require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoute');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/', serviceRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
