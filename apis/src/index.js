const express = require('express');
// const http = require('http');
// const https = require('https');
const cors = require('cors')


const app = express();
app.use(cors());

const routes = require('./routes/index.route');
app.use(routes)

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/testdata', (req, res, next) => {
    console.log("TEST DATA :");
})

// Starting the Server at the port 3000
const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
})

module.exports = {app}