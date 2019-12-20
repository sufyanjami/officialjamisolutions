const nodemailer = require('nodemailer')
const express = require('express');
const app = express();
​
//body parser middleware to get params from requests
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
})); // support encoded bodies
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(bodyParser.json()); // support json encoded bodies
​
//set port
app.set('port', process.env.PORT || 8000);
​
//start serving static files
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});