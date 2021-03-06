const express = require('express');
const bodyParser = require('body-parser');
const gpio = require('rpi-gpio');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/gpio', function (req, res) {
    const { value } = req.body;
    // send value to gpio :
    console.log({ value });
    gpio.setup(7, gpio.DIR_OUT, function(er) {
        console.log('coucou');
        gpio.write(7, !!value, function(err) {
            if (err) console.error(err);
        });
    });
    res.send({ gpio, value });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
