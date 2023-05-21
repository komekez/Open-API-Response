const express = require('express');
const app = express();
const path = require('path');
const config = require('../config')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets'))); 
// this line of code makes sure that all the static 
// files like CSS and JS that are present in asset directory are made available 
// to all the all the EJS pages that are rendered on the browser


app.get('/crypto', (req, res) => {
    res.render('Crypto')
})

app.get('/animals', (req, res) => {
    //sending some data from the server to the frontend page
    const num = Math.floor(Math.random() * 10);
    res.render('Animals', {random: num});
})

app.use('/', (req, res) => {
    // res.send('<h2>Seems like you have made request to a wrong url!');
    res.render('index')
})

app.listen(config.frontend.port, () => {
    console.log("Listening on port : ", config.frontend.port); 
})