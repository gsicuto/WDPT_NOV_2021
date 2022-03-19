const { Router } = require('express');

const Soda = require('../models/Soda');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const newSoda = await Soda.create(req.body);
    res.status(201).json(newSoda);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  console.log(req.user)
  try {
    const allSodas = await Soda.find();
    res.status(200).json(allSodas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // const soda = await Soda.findOne({ _id: req.params.id });
    const soda = await Soda.findById(id);
    res.status(200).json(soda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const updatedSoda = await Soda.findOneAndUpdate({ _id: id }, payload, { new: true });
    res.status(200).json(updatedSoda);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Soda.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = router;
