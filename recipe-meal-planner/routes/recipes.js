const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const db = require('../db/conn');
const { requireAuth } = require('../middleware/auth');

// Data validation helper functions
const validateRecipe = (recipe) => {
  const errors = [];
  
  if (!recipe.name || recipe.name.trim().length === 0) {
    errors.push('Recipe name is required');
  }
  
  if (!recipe.ingredients || !Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0) {
    errors.push('At least one ingredient is required');
  }
  
  if (!recipe.instructions || recipe.instructions.trim().length === 0) {
    errors.push('Instructions are required');
  }
  
  if (!recipe.prepTime || isNaN(recipe.prepTime) || recipe.prepTime < 0) {
    errors.push('Valid prep time (in minutes) is required');
  }
  
  if (!recipe.cookTime || isNaN(recipe.cookTime) || recipe.cookTime < 0) {
    errors.push('Valid cook time (in minutes) is required');
  }
  
  if (!recipe.servings || isNaN(recipe.servings) || recipe.servings < 1) {
    errors.push('Valid number of servings is required');
  }
  
  if (!recipe.difficulty || !['Easy', 'Medium', 'Hard'].includes(recipe.difficulty)) {
    errors.push('Difficulty must be Easy, Medium, or Hard');
  }
  
  if (!recipe.cuisine || recipe.cuisine.trim().length === 0) {
    errors.push('Cuisine type is required');
  }
  
  return errors;
};

// GET /recipes - Get all recipes
router.get('/', async (req, res) => {
  try {
    const database = db.getDb();
    const recipes = await database.collection('recipes').find().toArray();
    res.status(200).json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch recipes'
    });
  }
});

// GET /recipes/:id - Get single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid recipe ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    const recipe = await database.collection('recipes').findOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (!recipe) {
      return res.status(404).json({ 
        error: 'Recipe not found',
        message: 'No recipe exists with the provided ID'
      });
    }
    
    res.status(200).json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch recipe'
    });
  }
});

// POST /recipes - Create new recipe
router.post('/', requireAuth, async (req, res) => {
  try {
    const recipeData = {
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      prepTime: parseInt(req.body.prepTime),
      cookTime: parseInt(req.body.cookTime),
      servings: parseInt(req.body.servings),
      difficulty: req.body.difficulty,
      cuisine: req.body.cuisine,
      dietaryTags: req.body.dietaryTags || [],
      nutrition: req.body.nutrition || {},
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Validate recipe data
    const validationErrors = validateRecipe(recipeData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please correct the following errors',
        details: validationErrors
      });
    }

    const database = db.getDb();
    const result = await database.collection('recipes').insertOne(recipeData);
    
    res.status(201).json({
      message: 'Recipe created successfully',
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to create recipe'
    });
  }
});

// PUT /recipes/:id - Update existing recipe
router.put('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid recipe ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const recipeData = {
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      prepTime: parseInt(req.body.prepTime),
      cookTime: parseInt(req.body.cookTime),
      servings: parseInt(req.body.servings),
      difficulty: req.body.difficulty,
      cuisine: req.body.cuisine,
      dietaryTags: req.body.dietaryTags || [],
      nutrition: req.body.nutrition || {},
      updatedAt: new Date()
    };

    // Validate recipe data
    const validationErrors = validateRecipe(recipeData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please correct the following errors',
        details: validationErrors
      });
    }

    const database = db.getDb();
    const result = await database.collection('recipes').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: recipeData }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ 
        error: 'Recipe not found',
        message: 'No recipe exists with the provided ID'
      });
    }
    
    res.status(204).send(); // No content response for successful update
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to update recipe'
    });
  }
});

// DELETE /recipes/:id - Delete recipe
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid recipe ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    const result = await database.collection('recipes').deleteOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ 
        error: 'Recipe not found',
        message: 'No recipe exists with the provided ID'
      });
    }
    
    res.status(200).json({
      message: 'Recipe deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to delete recipe'
    });
  }
});

module.exports = router;
