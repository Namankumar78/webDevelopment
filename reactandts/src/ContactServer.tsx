import { Router } from "react-router-dom";
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const port = 3000;

var corsOptions = {
    origin: "https://localhost:3000"
}
// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.unlencoded({ extended: true}));


const mongoose = require('mongoose');


var contactSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    Email: String,
    address: String,
    desc: String
}, {
    timestamps: true
});
const User = mongoose.model('User', contactSchema);
mongoose.connect('mongodb://localhost:3000/gymtypescript', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('Connected---------------->', (err: any) => {console.log('connected')});
db.on('Not    Connected---------------->', (err: any) => {console.log('connection error')});





// router.route('/').get((req: any, res: any) => {
//   User.find()
//     .then((users: any) => res.json(users))
//     .catch((err: string)=> res.status(400).json('Error: ' + err));
// });

// router.route('/contact').post((req: any, res: any) => {
//   const username = req.body.username;
//   const newUser = new User({username});
//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch((err: string) => res.status(400).json('Error: ' + err));
// });



app.post('/contact').post((req: any, res: any) => {
    var myData = new User(req.body);
    myData.save().then(() => {
        res.send("the item has been saved")
    }).catch(() => {
        res.status(404).send("Item was not posted")
    })
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

export {app, User}