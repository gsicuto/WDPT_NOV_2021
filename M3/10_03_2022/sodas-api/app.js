require('dotenv').config()

const express = require('express')
const connectDb = require('./config/db.config')
const cors = require('cors')

// Connect to database
connectDb()

const app = express()

// Cors Middleware

// const cors = (req, res, next) => {
//     res.setHeader('access-control-allow-origin', '*')
//     next()
// }

// app.use(cors)

app.use(cors())


// Utilizar o Json no body das requisições
app.use(express.json())

// Rotas Publicas
app.use('/auth', require('./routes/auth.routes'))

// middleware de autorização
app.use(require('./middlewares/auth.middleware'))

// Rotas Privadas
app.use('/soda', require('./routes/soda.routes'))
app.use('/user', require('./routes/user.routes'))

app.listen(process.env.PORT, () => console.log(`server running on port: ${process.env.PORT}`));
