const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const router = Router()

router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    try{
        const user = await User.findOne({ username })
        if (user) {
            throw new Error('User already exists')
        }
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            username,
            passwordHash
        })

        res.status(201).json({
            username: newUser.username,
            favoriteSodas: newUser.favoriteSodas
        })


    }catch(error){
        if (error.message === 'User already exists'){
            res.status(400).json({ msg: error.message })
        }
        res.status(500).json({ msg: error.message })
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('User not found')
        }
        const compareHash = await bcrypt.compare(password, user.passwordHash)
        if(!compareHash) {
            throw new Error('Username or password invalid')
        }
        res.status(200).json({msg: `User ${user.username}, loggedIn`})
    } catch (error) {
        res.status(401).json({msg: error.message})
    }
})

module.exports = router