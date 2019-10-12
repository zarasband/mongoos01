const { mongoose } = require('./db/mongoose');
const { Person } = require('./model/person');

let Peransa = new Person({
    firstName: 'Peransa',
    LastName: 'Zarsvand',
    age: 37
});

Peransa.save().then((Person) => {
    console.log('Person has save.', Person);
}, (err) => {
    console.log('unable to save person to database', err);
});