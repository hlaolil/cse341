const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();

const db = require('./db/conn');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/recipes', require('./routes/recipes'));
app.use('/mealplans', require('./routes/mealplans'));

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Recipe & Meal Planning API',
    documentation: '/api-docs',
    endpoints: {
      recipes: '/recipes',
      mealPlans: '/mealplans'
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
    availableEndpoints: ['/recipes', '/mealplans', '/api-docs']
  });
});

// Initialize database and start server
db.initDb((err) => {
  if (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  } else {
    app.listen(PORT, () => {
      console.log(`🚀 Recipe & Meal Planning API is running on port ${PORT}`);
      console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
      console.log(`🍽️  Recipes endpoint: http://localhost:${PORT}/recipes`);
      console.log(`📅 Meal plans endpoint: http://localhost:${PORT}/mealplans`);
    });
  }
});
