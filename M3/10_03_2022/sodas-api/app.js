require('dotenv').config()

const express = require('express')
const connectDb = require('./config/db.config')

// Connect to database
connectDb()

const app = express()

// Utilizar o Json no body das requisições
app.use(express.json())

// Rotas

app.use('/auth', require('./routes/auth.routes'))
app.use('/soda', require('./routes/soda.routes'))

app.listen(process.env.PORT, () => console.log(`server running on port: ${process.env.PORT}`));
