// MongoClient is to connect to server
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// Only on ES6
var user = {name: 'Tuan Anh', age: 22};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   // result.ops store all of the docs was inserted into db in an array
  // });

  // db.collection('Users').insertOne({
  //   name: 'Huynh Tuan Anh',
  //   age: 22,
  //   location: 'Ha Noi, Viet Nam'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user. Err: ', err);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
