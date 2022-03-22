const { Router } = require('express')
const User = require('../models/User')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}, { passwordHash: 0  }).populate('favoriteSodas')
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

router.put('/addFavoriteSoda/:sodaId', async (req, res) => {
    const { sodaId } = req.params
    const { username } = req.user
    try {
        const updatedUser = await User.findOneAndUpdate(
            { username }, 
            { $push: { favoriteSodas: sodaId } }, 
            { new: true }
        ).select('-passwordHash')
        .populate('favoriteSodas')

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

module.exports = router