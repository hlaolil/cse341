const { MongoClient } = require('mongodb');
require('dotenv').config();

const sampleRecipes = [
  {
    name: "Spaghetti Carbonara",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "Black pepper",
      "Salt"
    ],
    instructions: "1. Cook spaghetti in salted water. 2. Fry pancetta until crispy. 3. Mix eggs and cheese. 4. Combine all ingredients off heat.",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    dietaryTags: ["Contains eggs", "Gluten-containing"],
    nutrition: {
      calories: 520,
      protein: "22g",
      carbs: "55g",
      fat: "23g"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Chicken Stir Fry",
    ingredients: [
      "300g chicken breast, sliced",
      "2 tbsp vegetable oil",
      "1 bell pepper, sliced",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tsp ginger, minced"
    ],
    instructions: "1. Heat oil in wok. 2. Cook chicken until done. 3. Add vegetables and stir fry. 4. Add sauce and seasonings. 5. Cook for 2-3 minutes and serve.",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Asian",
    dietaryTags: ["Dairy-free", "Gluten-free with tamari"],
    nutrition: {
      calories: 280,
      protein: "25g",
      carbs: "8g",
      fat: "15g"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Greek Salad",
    ingredients: [
      "2 large tomatoes, chopped",
      "1 cucumber, diced",
      "1 red onion, sliced",
      "200g feta cheese, cubed",
      "100g Kalamata olives",
      "3 tbsp olive oil",
      "1 tbsp red wine vinegar",
      "1 tsp oregano",
      "Salt and pepper"
    ],
    instructions: "1. Combine tomatoes, cucumber, and onion. 2. Add feta and olives. 3. Whisk oil, vinegar, and oregano. 4. Toss with dressing and season.",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    dietaryTags: ["Vegetarian", "Gluten-free"],
    nutrition: {
      calories: 220,
      protein: "8g",
      carbs: "12g",
      fat: "18g"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    
    const db = client.db('recipeMealPlanner');
    
    // Clear existing data
    await db.collection('recipes').deleteMany({});
    await db.collection('mealPlans').deleteMany({});
    console.log('Cleared existing data');
    
    // Insert sample recipes
    const recipeResult = await db.collection('recipes').insertMany(sampleRecipes);
    console.log(`Inserted ${recipeResult.insertedCount} sample recipes`);
    
    // Create sample meal plans using the inserted recipe IDs
    const recipeIds = Object.values(recipeResult.insertedIds);
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
      },
      {
        date: "2024-01-16",
        recipeId: recipeIds[2].toString(),
        mealType: "Dinner",
        servings: 4,
        notes: "Light dinner",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    const mealPlanResult = await db.collection('mealPlans').insertMany(sampleMealPlans);
    console.log(`Inserted ${mealPlanResult.insertedCount} sample meal plans`);
    
    console.log('✅ Database seeded successfully!');
    console.log('🍽️  Sample recipes and meal plans added');
    console.log('🚀 Start your server with: npm start');
    console.log('📚 Visit API docs at: http://localhost:3001/api-docs');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
