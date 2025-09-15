const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const session = require('express-session');
const { passport, mockAuth } = require('./middleware/auth');
require('dotenv').config();

const db = require('./db/conn');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration for OAuth
app.use(session({
  secret: process.env.SESSION_SECRET || 'music-api-secret-key-cse341',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// Initialize Passport for OAuth
app.use(passport.initialize());
app.use(passport.session());

// Mock authentication for demo purposes (shows OAuth capability)
app.use(mockAuth);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Authentication routes
app.use('/auth', require('./routes/auth'));

// Routes
app.use('/artists', require('./routes/artists'));
app.use('/albums', require('./routes/albums'));

// Seed endpoint for populating database with sample data
app.post('/seed', async (req, res) => {
  try {
    const database = db.getDb();
    
    // Sample artists
    const sampleArtists = [
      {
        name: "The Beatles",
        genre: "Rock",
        country: "United Kingdom",
        formed_year: 1960,
        members: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
        biography: "The Beatles were an English rock band formed in Liverpool in 1960.",
        website: "https://www.thebeatles.com",
        social_media: {
          twitter: "@thebeatles",
          instagram: "@thebeatles"
        },
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Queen",
        genre: "Rock",
        country: "United Kingdom",
        formed_year: 1970,
        members: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
        biography: "Queen are a British rock band formed in London in 1970.",
        website: "https://www.queenonline.com",
        social_media: {
          twitter: "@queenwillrock",
          instagram: "@officialqueenmusic"
        },
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Taylor Swift",
        genre: "Pop",
        country: "United States",
        formed_year: 2006,
        members: ["Taylor Swift"],
        biography: "American singer-songwriter known for narrative songs about her personal life.",
        website: "https://www.taylorswift.com",
        social_media: {
          twitter: "@taylorswift13",
          instagram: "@taylorswift"
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Clear existing data and insert sample data
    await database.collection('artists').deleteMany({});
    await database.collection('albums').deleteMany({});
    
    const artistResult = await database.collection('artists').insertMany(sampleArtists);
    const artistIds = Object.values(artistResult.insertedIds);
    
    // Sample albums
    const sampleAlbums = [
      {
        title: "Abbey Road",
        artist_id: artistIds[0].toString(),
        release_date: "1969-09-26",
        genre: "Rock",
        track_count: 17,
        duration: 47,
        record_label: "Apple Records",
        cover_image_url: "https://example.com/abbey-road.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bohemian Rhapsody",
        artist_id: artistIds[1].toString(),
        release_date: "1975-10-31",
        genre: "Rock",
        track_count: 12,
        duration: 43,
        record_label: "EMI",
        cover_image_url: "https://example.com/bohemian-rhapsody.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "1989",
        artist_id: artistIds[2].toString(),
        release_date: "2014-10-27",
        genre: "Pop",
        track_count: 13,
        duration: 49,
        record_label: "Big Machine Records",
        cover_image_url: "https://example.com/1989.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Folklore",
        artist_id: artistIds[2].toString(),
        release_date: "2020-07-24",
        genre: "Indie Folk",
        track_count: 16,
        duration: 63,
        record_label: "Republic Records",
        cover_image_url: "https://example.com/folklore.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    const albumResult = await database.collection('albums').insertMany(sampleAlbums);
    
    res.status(200).json({
      message: 'Database seeded successfully!',
      artistsInserted: artistResult.insertedCount,
      albumsInserted: albumResult.insertedCount
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    res.status(500).json({
      error: 'Failed to seed database',
      message: error.message
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Music API',
    description: 'A comprehensive REST API for managing artists and albums',
    documentation: '/api-docs',
    endpoints: {
      artists: '/artists',
      albums: '/albums'
    },
    version: '1.0.0'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: 'Something went wrong on our end'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested endpoint does not exist',
    availableEndpoints: ['/artists', '/albums', '/api-docs']
  });
});

// Initialize database and start server
db.initDb((err) => {
  if (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  } else {
    app.listen(PORT, () => {
      console.log(`🎵 Music API is running on port ${PORT}`);
      console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
      console.log(`🎤 Artists endpoint: http://localhost:${PORT}/artists`);
      console.log(`💿 Albums endpoint: http://localhost:${PORT}/albums`);
    });
  }
});