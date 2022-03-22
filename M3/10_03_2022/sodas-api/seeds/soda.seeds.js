require('dotenv').config();
const mongoose = require('mongoose');
const Soda = require('../models/Soda');
const sodas = require('./data.json');

const run = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Database connected: ${connection.connections[0].name}`);
  try {
    console.log('Dropping previous collection');
    await Soda.collection.drop();
    
    console.log('Seeding sodas in DB');
    const newSodas = await Soda.create(sodas);
    console.log(newSodas);

  } catch (error) {
    console.log(error)
  } finally {
    connection.disconnect();
    console.log('Disconnected');
  }
}

run();