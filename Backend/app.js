const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(express.json());
const cors = require("cors"); // Duplicate import

app.use(cors({ origin: "*" })); // Allow all origins (for testing)

app.use('/ai', aiRoutes);

module.exports = app;