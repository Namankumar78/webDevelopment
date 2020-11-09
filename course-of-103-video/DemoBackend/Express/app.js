const express = require("express")
const path = require("path");
const hostname = '127.0.0.1';
const app = express();
const port = 3000;


app.use('/static', express.static('static'));


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));



app.get('/', function (req, res) {
    const con = 'Please fill the form';
    const param = {'title': 'this is my page', "content": con};
    res.status(200).render('index', param)
  });


  
app.listen(port, hostname, () => {
    console.log(`this is data on port ${port}`);
});