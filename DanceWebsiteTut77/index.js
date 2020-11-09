const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/gym', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

var contactSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    Email: String,
    address: String,
    desc: String
});

var Contact = mongoose.model('Kitten', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

// ENDPOINTS
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})

// ENDPOINTS
app.get('/login', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})

// ENDPOINTS
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("the item has been saved")
    }).catch(() => {
        res.status(404).send("Item was not posted")
    })
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});