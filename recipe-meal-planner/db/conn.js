const { MongoClient } = require('mongodb');

let db;

const initDb = (callback) => {
  if (db) {
    console.log('Database is already initialized!');
    return callback(null, db);
  }
  
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      db = client.db('recipeMealPlanner'); // New database name
      console.log('Successfully connected to MongoDB Atlas');
      callback(null, db);
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
      callback(err);
    });
};

const getDb = () => {
  if (!db) {
    throw Error('Database not initialized');
  }
  return db;
};

module.exports = {
  initDb,
  getDb
};
