const mongoose = require('mongoose');

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Connected to Mongo! Database name: ${connection.connections[0].name}`);
}

module.exports = connectDb;