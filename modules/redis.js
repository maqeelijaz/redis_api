const express = require('express');
const router = express.Router();
const Redis = require('ioredis');

router.post('/setData', (req, res) => {
    const client = new Redis({
        host: 'localhost',
        port: 6379
    });
    console.log(req.body.data);
    client.set('data', JSON.stringify(req.body.data), (err, reply) => {
        if (err) res.send(err);
        res.send('Success')
    });
});

router.get('/getData', (req, res) => {
    const client = new Redis({
        host: 'localhost',
        port: 6379
    });

    client.get('data', (err, reply) => {
        if (err) res.send(err);
        res.send(reply)
    });
});

module.exports = router;