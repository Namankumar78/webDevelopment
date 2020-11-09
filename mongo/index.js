var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Here you go......')
});

var kittySchema = new mongoose.Schema({
    name: String
  });

kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }


var Kitten = mongoose.model('Kitten', kittySchema);


var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

// silence.speak();

silence.save(function (err, silence) {
    if (err) return console.error(err);
    silence.speak();
});

Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })