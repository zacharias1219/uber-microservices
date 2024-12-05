const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const connect = require('./db/db');
connect()
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const rabbitMq = require('./service/rabbitmq');

rabbitMq.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', userRoutes);

module.exports = app;