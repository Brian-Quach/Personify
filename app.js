// #!/usr/bin/env nodejs

const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('static'));

// Log Http requests to console
app.use(function (req, res, next) {
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

const https = require('https');
const PORT = 3000;

var privateKey = fs.readFileSync('server.key');
var certificate = fs.readFileSync('server.crt');
var config = {
    key: privateKey,
    cert: certificate
};

https.createServer(config, app).listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log("HTTPS server on https://localhost:%s", PORT);
});
