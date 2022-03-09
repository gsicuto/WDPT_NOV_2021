require('dotenv').config();
const express = require('express');
const connectDb = require('./config/db.connection');

const User = require('./models/User');

connectDb();

const app = express();


// Middleware
// permitir que o express interprete o body se for json type

app.use(express.json());

// Rotas

app.post('/user', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ msg: 'username already exists' });
    } else {
      res.status(500).json({ msg: 'Erro ao criar usuário', error: error.message });
    }
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(process.env.PORT, () => console.log('Server Running on port 3000'));
