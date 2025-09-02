const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { connectToServer } = require('../db/conn');

// GET all contacts
router.get('/', async (req, res) => {
  const db = await connectToServer();
  const contacts = await db.collection('contacts').find().toArray();
  res.json(contacts);
});

// GET contact by id
router.get('/:id', async (req, res) => {
  const db = await connectToServer();
  try {
    const contact = await db.collection('contacts').findOne({ _id: new ObjectId(req.params.id) });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

module.exports = router;
