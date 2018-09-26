// #!/usr/bin/env nodejs

const express = require('express');
const app = express();

app.use(express.static('static'));

// Log Http requests to console
app.use(function (req, res, next) {
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

//const PORT = 8080;
const PORT = 3000;

app.listen(PORT);