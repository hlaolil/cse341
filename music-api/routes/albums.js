const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const db = require('../db/conn');
const { requireAuth } = require('../middleware/auth');

// Data validation helper functions
const validateAlbum = (album) => {
  const errors = [];
  
  if (!album.title || album.title.trim().length === 0) {
    errors.push('Album title is required');
  }
  
  if (!album.artist_id || !ObjectId.isValid(album.artist_id)) {
    errors.push('Valid artist ID is required');
  }
  
  if (!album.release_date) {
    errors.push('Release date is required');
  } else {
    const date = new Date(album.release_date);
    if (isNaN(date.getTime())) {
      errors.push('Valid release date is required (YYYY-MM-DD format)');
    }
  }
  
  if (!album.genre || album.genre.trim().length === 0) {
    errors.push('Genre is required');
  }
  
  if (!album.track_count || isNaN(album.track_count) || album.track_count < 1) {
    errors.push('Valid track count is required (minimum 1)');
  }
  
  if (!album.duration || isNaN(album.duration) || album.duration < 1) {
    errors.push('Valid duration in minutes is required');
  }
  
  return errors;
};

// GET /albums - Get all albums
router.get('/', async (req, res) => {
  try {
    const database = db.getDb();
    const albums = await database.collection('albums').find().toArray();
    res.status(200).json(albums);
  } catch (error) {
    console.error('Error fetching albums:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch albums'
    });
  }
});

// GET /albums/:id - Get single album by ID
router.get('/:id', async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid album ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    const album = await database.collection('albums').findOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (!album) {
      return res.status(404).json({ 
        error: 'Album not found',
        message: 'No album exists with the provided ID'
      });
    }
    
    res.status(200).json(album);
  } catch (error) {
    console.error('Error fetching album:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch album'
    });
  }
});

// GET /albums/artist/:artistId - Get albums by artist
router.get('/artist/:artistId', async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.artistId)) {
      return res.status(400).json({ 
        error: 'Invalid artist ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    const albums = await database.collection('albums')
      .find({ artist_id: req.params.artistId })
      .toArray();
    
    res.status(200).json(albums);
  } catch (error) {
    console.error('Error fetching albums by artist:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch albums for the specified artist'
    });
  }
});

// POST /albums - Create new album
router.post('/', requireAuth, async (req, res) => {
  try {
    const albumData = {
      title: req.body.title,
      artist_id: req.body.artist_id,
      release_date: req.body.release_date,
      genre: req.body.genre,
      track_count: parseInt(req.body.track_count),
      duration: parseInt(req.body.duration),
      record_label: req.body.record_label || '',
      cover_image_url: req.body.cover_image_url || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Validate album data
    const validationErrors = validateAlbum(albumData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please correct the following errors',
        details: validationErrors
      });
    }

    // Check if artist exists
    const database = db.getDb();
    const artist = await database.collection('artists').findOne({
      _id: new ObjectId(albumData.artist_id)
    });
    
    if (!artist) {
      return res.status(400).json({
        error: 'Artist not found',
        message: 'The specified artist does not exist'
      });
    }

    const result = await database.collection('albums').insertOne(albumData);
    
    res.status(201).json({
      message: 'Album created successfully',
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error('Error creating album:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to create album'
    });
  }
});

// PUT /albums/:id - Update existing album
router.put('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid album ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const albumData = {
      title: req.body.title,
      artist_id: req.body.artist_id,
      release_date: req.body.release_date,
      genre: req.body.genre,
      track_count: parseInt(req.body.track_count),
      duration: parseInt(req.body.duration),
      record_label: req.body.record_label || '',
      cover_image_url: req.body.cover_image_url || '',
      updatedAt: new Date()
    };

    // Validate album data
    const validationErrors = validateAlbum(albumData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please correct the following errors',
        details: validationErrors
      });
    }

    // Check if artist exists
    const database = db.getDb();
    const artist = await database.collection('artists').findOne({
      _id: new ObjectId(albumData.artist_id)
    });
    
    if (!artist) {
      return res.status(400).json({
        error: 'Artist not found',
        message: 'The specified artist does not exist'
      });
    }

    const result = await database.collection('albums').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: albumData }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ 
        error: 'Album not found',
        message: 'No album exists with the provided ID'
      });
    }
    
    res.status(204).send(); // No content response for successful update
  } catch (error) {
    console.error('Error updating album:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to update album'
    });
  }
});

// DELETE /albums/:id - Delete album
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid album ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    const result = await database.collection('albums').deleteOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ 
        error: 'Album not found',
        message: 'No album exists with the provided ID'
      });
    }
    
    res.status(200).json({
      message: 'Album deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting album:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to delete album'
    });
  }
});

module.exports = router;