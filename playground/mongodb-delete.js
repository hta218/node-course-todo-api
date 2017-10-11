const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');

  // delete many
  // db.collection('Todos').deleteMany({'text' : 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  db.collection('Todos').deleteOne({'text' : 'Something to do'}).then((result) => {
    console.log(result);
  });

  // find one n delete
  db.collection('Todos').findOneAndDelete({completed : true}).then((result) => {
    console.log(result);
  });

  // db.close();
});
