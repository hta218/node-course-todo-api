const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');

  // find one n update
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("59ddd0763e7cf32eb879dec3")
  }, {
    $set: {
      completed: true,
      text: 'Update message'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // NOTE: the returnOriginal field is to set the result value
  //  (true: result = the original, flase: result = new update)

  // increase value
  db.collection('Users').findOneAndUpdate({
    name: 'Huynh Tuan Anh'
  }, {
    $inc: {
      age: 1
    }
  }).then((result)=> {
    console.log(result);
  });

  // db.close();
});
