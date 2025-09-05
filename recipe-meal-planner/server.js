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
  secret: process.env.SESSION_SECRET || 'demo-secret-key-for-cse341',
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
app.use('/recipes', require('./routes/recipes'));
app.use('/mealplans', require('./routes/mealplans'));

// Seed endpoint for populating database with sample data
app.post('/seed', async (req, res) => {
  try {
    const database = db.getDb();
    
    // Sample recipes
    const sampleRecipes = [
      {
        name: "Spaghetti Carbonara",
        ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g pecorino cheese", "Black pepper", "Salt"],
        instructions: "1. Cook spaghetti in salted water. 2. Fry pancetta until crispy. 3. Mix eggs and cheese. 4. Combine all ingredients off heat.",
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: "Medium",
        cuisine: "Italian",
        dietaryTags: ["Contains eggs", "Gluten-containing"],
        nutrition: { calories: 520, protein: "22g", carbs: "55g", fat: "23g" },
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chicken Stir Fry",
        ingredients: ["300g chicken breast, sliced", "2 tbsp vegetable oil", "1 bell pepper, sliced", "1 onion, sliced", "2 cloves garlic, minced", "2 tbsp soy sauce", "1 tbsp sesame oil", "1 tsp ginger, minced"],
        instructions: "1. Heat oil in wok. 2. Cook chicken until done. 3. Add vegetables and stir fry. 4. Add sauce and seasonings. 5. Cook for 2-3 minutes and serve.",
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: "Easy",
        cuisine: "Asian",
        dietaryTags: ["Dairy-free", "Gluten-free with tamari"],
        nutrition: { calories: 280, protein: "25g", carbs: "8g", fat: "15g" },
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Greek Salad",
        ingredients: ["2 large tomatoes, chopped", "1 cucumber, diced", "1 red onion, sliced", "200g feta cheese, cubed", "100g Kalamata olives", "3 tbsp olive oil", "1 tbsp red wine vinegar", "1 tsp oregano", "Salt and pepper"],
        instructions: "1. Combine tomatoes, cucumber, and onion. 2. Add feta and olives. 3. Whisk oil, vinegar, and oregano. 4. Toss with dressing and season.",
        prepTime: 15,
        cookTime: 0,
        servings: 4,
        difficulty: "Easy",
        cuisine: "Mediterranean",
        dietaryTags: ["Vegetarian", "Gluten-free"],
        nutrition: { calories: 220, protein: "8g", carbs: "12g", fat: "18g" },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Clear existing data and insert sample data
    await database.collection('recipes').deleteMany({});
    await database.collection('mealPlans').deleteMany({});
    
    const recipeResult = await database.collection('recipes').insertMany(sampleRecipes);
    const recipeIds = Object.values(recipeResult.insertedIds);
    
    // Sample meal plans
    const sampleMealPlans = [
      {
        date: "2024-01-15",
        recipeId: recipeIds[0].toString(),
        mealType: "Dinner",
        servings: 4,
        notes: "Family dinner",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: "2024-01-16",
        recipeId: recipeIds[1].toString(),
        mealType: "Lunch",
        servings: 2,
        notes: "Quick lunch",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    const mealPlanResult = await database.collection('mealPlans').insertMany(sampleMealPlans);
    
    res.status(200).json({
      message: 'Database seeded successfully!',
      recipesInserted: recipeResult.insertedCount,
      mealPlansInserted: mealPlanResult.insertedCount
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
