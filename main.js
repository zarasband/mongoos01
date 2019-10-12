const { mongoose } = require('./db/mongoose');
const { Person } = require('./model/person');
const { ObjectID } = require('mongodb');


//make id in mongodb

// let newId = new ObjectID();
// console.log(newId);




// let Peransa = new Person({
//     firstName: 'Peransa',
//     LastName: 'Zarsvand',
//     age: 37
// });

// Peransa.save().then((Person) => {
//     console.log('Person has save.', Person);
// }, (err) => {
//     console.log('unable to save person to database', err);
// });

let ID = '5da1d3ce9a8d602d0437573b';

// Person.find({
//     _id: ID
// }).then((Person) => {
//     console.log(Person);
// });

//Update ->
// Person.findByIdAndUpdate({
//     _id: ID
// }, {
//     $set: {
//         firstName: 'SAMIR',
//         LastName: 'Bardia'
//     }
// }).then(() => {
//     console.log('Person has been updated.');
// })


// Person.update({
//     _id: ID
// }, {
//     $set: {
//         firstName: 'Samir'
//     }
// }).then(() => {
//     console.log('Person has been updated.');
// })

if (!ObjectID.isValid(ID)) {
    console.log('person id is not valid');
} else {
    Person.findOneAndRemove({
        _id: ID
    }).then((person) => {
        console.log('this person had been removed.', person);
    });
}
//Person.findById(ID).then((show) => { console.log(show); });