const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const db = require('../db/conn');
const { requireAuth } = require('../middleware/auth');

// Data validation helper functions
const validateArtist = (artist) => {
  const errors = [];
  
  if (!artist.name || artist.name.trim().length === 0) {
    errors.push('Artist name is required');
  }
  
  if (!artist.genre || artist.genre.trim().length === 0) {
    errors.push('Genre is required');
  }
  
  if (!artist.country || artist.country.trim().length === 0) {
    errors.push('Country is required');
  }
  
  if (!artist.formed_year || isNaN(artist.formed_year) || artist.formed_year < 1900 || artist.formed_year > new Date().getFullYear()) {
    errors.push('Valid formed year is required (1900 - current year)');
  }
  
  if (!artist.members || !Array.isArray(artist.members) || artist.members.length === 0) {
    errors.push('At least one member is required');
  }
  
  return errors;
};

// GET /artists - Get all artists
router.get('/', async (req, res) => {
  try {
    const database = db.getDb();
    const artists = await database.collection('artists').find().toArray();
    res.status(200).json(artists);
  } catch (error) {
    console.error('Error fetching artists:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch artists'
    });
  }
});

// GET /artists/:id - Get single artist by ID
router.get('/:id', async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid artist ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    const artist = await database.collection('artists').findOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (!artist) {
      return res.status(404).json({ 
        error: 'Artist not found',
        message: 'No artist exists with the provided ID'
      });
    }
    
    res.status(200).json(artist);
  } catch (error) {
    console.error('Error fetching artist:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch artist'
    });
  }
});

// POST /artists - Create new artist
router.post('/', requireAuth, async (req, res) => {
  try {
    const artistData = {
      name: req.body.name,
      genre: req.body.genre,
      country: req.body.country,
      formed_year: parseInt(req.body.formed_year),
      members: req.body.members,
      biography: req.body.biography || '',
      website: req.body.website || '',
      social_media: req.body.social_media || {},
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Validate artist data
    const validationErrors = validateArtist(artistData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please correct the following errors',
        details: validationErrors
      });
    }

    const database = db.getDb();
    const result = await database.collection('artists').insertOne(artistData);
    
    res.status(201).json({
      message: 'Artist created successfully',
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error('Error creating artist:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to create artist'
    });
  }
});

// PUT /artists/:id - Update existing artist
router.put('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid artist ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const artistData = {
      name: req.body.name,
      genre: req.body.genre,
      country: req.body.country,
      formed_year: parseInt(req.body.formed_year),
      members: req.body.members,
      biography: req.body.biography || '',
      website: req.body.website || '',
      social_media: req.body.social_media || {},
      updatedAt: new Date()
    };

    // Validate artist data
    const validationErrors = validateArtist(artistData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please correct the following errors',
        details: validationErrors
      });
    }

    const database = db.getDb();
    const result = await database.collection('artists').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: artistData }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ 
        error: 'Artist not found',
        message: 'No artist exists with the provided ID'
      });
    }
    
    res.status(204).send(); // No content response for successful update
  } catch (error) {
    console.error('Error updating artist:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to update artist'
    });
  }
});

// DELETE /artists/:id - Delete artist
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid artist ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    
    // Check if artist has any albums before deleting
    const albumsCount = await database.collection('albums').countDocuments({
      artist_id: req.params.id
    });
    
    if (albumsCount > 0) {
      return res.status(400).json({
        error: 'Cannot delete artist',
        message: `Artist has ${albumsCount} album(s) associated. Please delete albums first.`
      });
    }
    
    const result = await database.collection('artists').deleteOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ 
        error: 'Artist not found',
        message: 'No artist exists with the provided ID'
      });
    }
    
    res.status(200).json({
      message: 'Artist deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting artist:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to delete artist'
    });
  }
});

module.exports = router;