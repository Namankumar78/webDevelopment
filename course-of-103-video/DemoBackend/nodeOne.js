const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.2';
const port = 3000;
const home = fs.readFileSync('./home.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');
const mod = require('./mod');
npm
console.log(mod.yooooooooooooo);

const server = http.createServer((req, res) => {
  url = req.url;
  console.log(url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (url == '/home.html') {
    res.end(home);
  }else if (url == '/about.html' || url == '/') {
    res.end(about);
  }else if (url == '/services.html') {
    res.end(services);
  }else if (url == '/contact.html') {
    res.end(contact);
  }else {
    res.statusCode = 404;
    res.end("<h1> Content not found </h1>");
  }


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});1