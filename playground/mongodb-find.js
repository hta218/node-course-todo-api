// MongoClient is to connect to server
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Only on ES6
var user = {name: 'Tuan Anh', age: 22};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');

  // toArray method return a Promise so we have to call then()
  // db.collection('Todos').find().count((er, count) => {
  //   if (err) {
  //     console.log('Unable to fetch data. Err: ', err);
  //   } else {
  //     console.log('Count: ', count);
  //   }
  //   // console.log('Todos data: ');
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // });

  db.collection('Users').find({
    name: 'Huynh Tuan Anh'
  }).toArray().then((docs) => {
    console.log('Fetch ok');
    console.log('Users: ');
    console.log(JSON.stringify(docs, undefined, 4));
  }, (err) => {
    console.log('Unable to fetch data. Err: ', err);
  });

  // db.close();
});
