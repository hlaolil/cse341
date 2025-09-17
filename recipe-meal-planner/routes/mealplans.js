const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const db = require('../db/conn');
const { requireAuth } = require('../middleware/auth');

// Data validation helper functions
const validateMealPlan = (mealPlan) => {
  const errors = [];
  
  if (!mealPlan.date) {
    errors.push('Date is required');
  } else {
    const date = new Date(mealPlan.date);
    if (isNaN(date.getTime())) {
      errors.push('Valid date is required (YYYY-MM-DD format)');
    }
  }
  
  if (!mealPlan.recipeId || !ObjectId.isValid(mealPlan.recipeId)) {
    errors.push('Valid recipe ID is required');
  }
  
  if (!mealPlan.mealType || !['Breakfast', 'Lunch', 'Dinner', 'Snack'].includes(mealPlan.mealType)) {
    errors.push('Meal type must be Breakfast, Lunch, Dinner, or Snack');
  }
  
  if (!mealPlan.servings || isNaN(mealPlan.servings) || mealPlan.servings < 1) {
    errors.push('Valid number of servings is required');
  }
  
  return errors;
};

// GET /mealplans - Get all meal plans
router.get('/', requireAuth, async (req, res) => {
  try {
    const database = db.getDb();
    const mealPlans = await database.collection('mealPlans').find().toArray();
    res.status(200).json(mealPlans);
  } catch (error) {
    console.error('Error fetching meal plans:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch meal plans'
    });
  }
});

// GET /mealplans/:id - Get single meal plan by ID
router.get('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid meal plan ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    const mealPlan = await database.collection('mealPlans').findOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (!mealPlan) {
      return res.status(404).json({ 
        error: 'Meal plan not found',
        message: 'No meal plan exists with the provided ID'
      });
    }
    
    res.status(200).json(mealPlan);
  } catch (error) {
    console.error('Error fetching meal plan:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch meal plan'
    });
  }
});

// GET /mealplans/date/:date - Get meal plans for specific date
router.get('/date/:date', async (req, res) => {
  try {
    const date = new Date(req.params.date);
    if (isNaN(date.getTime())) {
      return res.status(400).json({ 
        error: 'Invalid date format',
        message: 'Please provide date in YYYY-MM-DD format'
      });
    }

    const database = db.getDb();
    const mealPlans = await database.collection('mealPlans')
      .find({ date: req.params.date })
      .toArray();
    
    res.status(200).json(mealPlans);
  } catch (error) {
    console.error('Error fetching meal plans by date:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch meal plans for the specified date'
    });
  }
});

// POST /mealplans - Create new meal plan
router.post('/', requireAuth, async (req, res) => {
  try {
    const mealPlanData = {
      date: req.body.date,
      recipeId: req.body.recipeId,
      mealType: req.body.mealType,
      servings: parseInt(req.body.servings),
      notes: req.body.notes || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Validate meal plan data
    const validationErrors = validateMealPlan(mealPlanData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please correct the following errors',
        details: validationErrors
      });
    }

    // Check if recipe exists
    const database = db.getDb();
    const recipe = await database.collection('recipes').findOne({
      _id: new ObjectId(mealPlanData.recipeId)
    });
    
    if (!recipe) {
      return res.status(400).json({
        error: 'Recipe not found',
        message: 'The specified recipe does not exist'
      });
    }

    const result = await database.collection('mealPlans').insertOne(mealPlanData);
    
    res.status(201).json({
      message: 'Meal plan created successfully',
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error('Error creating meal plan:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to create meal plan'
    });
  }
});

// PUT /mealplans/:id - Update existing meal plan
router.put('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid meal plan ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const mealPlanData = {
      date: req.body.date,
      recipeId: req.body.recipeId,
      mealType: req.body.mealType,
      servings: parseInt(req.body.servings),
      notes: req.body.notes || '',
      updatedAt: new Date()
    };

    // Validate meal plan data
    const validationErrors = validateMealPlan(mealPlanData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please correct the following errors',
        details: validationErrors
      });
    }

    // Check if recipe exists
    const database = db.getDb();
    const recipe = await database.collection('recipes').findOne({
      _id: new ObjectId(mealPlanData.recipeId)
    });
    
    if (!recipe) {
      return res.status(400).json({
        error: 'Recipe not found',
        message: 'The specified recipe does not exist'
      });
    }

    const result = await database.collection('mealPlans').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: mealPlanData }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ 
        error: 'Meal plan not found',
        message: 'No meal plan exists with the provided ID'
      });
    }
    
    res.status(204).send(); // No content response for successful update
  } catch (error) {
    console.error('Error updating meal plan:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to update meal plan'
    });
  }
});

// DELETE /mealplans/:id - Delete meal plan
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ 
        error: 'Invalid meal plan ID format',
        message: 'Please provide a valid MongoDB ObjectId'
      });
    }

    const database = db.getDb();
    const result = await database.collection('mealPlans').deleteOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ 
        error: 'Meal plan not found',
        message: 'No meal plan exists with the provided ID'
      });
    }
    
    res.status(200).json({
      message: 'Meal plan deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting meal plan:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to delete meal plan'
    });
  }
});

module.exports = router;
