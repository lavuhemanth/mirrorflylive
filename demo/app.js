const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const config = require("./config/index.js");

const constPath = path.join(__dirname, "/static");

app.use(express.static(constPath));

app.get('/', (req, res) => {
    res.sendFile(constPath + '/demo_input.html');
})

app.get('/live', (req, res) => {
    res.sendFile(constPath + "/output-demo.html");
})

server.listen(config.port, function () {
  console.log("server had started : ", config.port);
});
