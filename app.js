const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.use(express.json());

const redisRoute = require('./modules/redis.js');

app.use('/redis', redisRoute);

let port = process.env.PORT || '3000';
http.listen(port);