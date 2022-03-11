const mongoose = require('mongoose');

const connect = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`DataBase connected: ${connection.connections[0].name}`);
};

module.exports = connect;
