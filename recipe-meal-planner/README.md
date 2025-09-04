# Recipe & Meal Planning API

A comprehensive REST API for managing recipes and meal planning with full CRUD operations, built with Node.js, Express, and MongoDB.

## 🚀 Features

- **Recipe Management**: Create, read, update, and delete recipes with 10+ fields
- **Meal Planning**: Plan meals by date and meal type
- **Data Validation**: Comprehensive input validation and error handling
- **API Documentation**: Full Swagger/OpenAPI 3.0 documentation
- **MongoDB Integration**: Uses MongoDB Atlas for data persistence
- **RESTful Design**: Follows REST API best practices

## 📋 API Endpoints

### Recipes

- `GET /recipes` - Get all recipes
- `GET /recipes/{id}` - Get recipe by ID
- `POST /recipes` - Create new recipe
- `PUT /recipes/{id}` - Update recipe
- `DELETE /recipes/{id}` - Delete recipe

### Meal Plans

- `GET /mealplans` - Get all meal plans
- `GET /mealplans/{id}` - Get meal plan by ID
- `GET /mealplans/date/{date}` - Get meal plans for specific date
- `POST /mealplans` - Create new meal plan
- `PUT /mealplans/{id}` - Update meal plan
- `DELETE /mealplans/{id}` - Delete meal plan

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and add your MongoDB connection string
4. Start the server:
   ```bash
   npm start
   ```
   For development:
   ```bash
   npm run dev
   ```

## 📖 API Documentation

Visit `/api-docs` when the server is running to access the interactive Swagger documentation.

## 🗂️ Recipe Data Model

Recipes include the following fields:

- **name**: Recipe name (required)
- **ingredients**: Array of ingredients (required)
- **instructions**: Cooking instructions (required)
- **prepTime**: Preparation time in minutes (required)
- **cookTime**: Cooking time in minutes (required)
- **servings**: Number of servings (required)
- **difficulty**: Easy, Medium, or Hard (required)
- **cuisine**: Type of cuisine (required)
- **dietaryTags**: Array of dietary information (optional)
- **nutrition**: Nutritional information object (optional)

## 📅 Meal Plan Data Model

Meal plans include:

- **date**: Date in YYYY-MM-DD format (required)
- **recipeId**: Reference to recipe ObjectId (required)
- **mealType**: Breakfast, Lunch, Dinner, or Snack (required)
- **servings**: Number of servings planned (required)
- **notes**: Additional notes (optional)

## 🌐 Deployment

This API is designed to be deployed on Render.com:

1. Connect your GitHub repository
2. Set environment variables in Render dashboard
3. Deploy using the build command: `npm install`
4. Start command: `npm start`

## 🔒 Environment Variables

- `MONGODB_URI`: MongoDB Atlas connection string
- `PORT`: Server port (default: 3000)

## 📝 Sample Data

### Sample Recipe

```json
{
  "name": "Spaghetti Carbonara",
  "ingredients": [
    "200g spaghetti",
    "100g pancetta",
    "2 large eggs",
    "50g pecorino cheese",
    "Black pepper",
    "Salt"
  ],
  "instructions": "1. Cook spaghetti in salted water. 2. Fry pancetta until crispy. 3. Mix eggs and cheese. 4. Combine all ingredients.",
  "prepTime": 10,
  "cookTime": 15,
  "servings": 4,
  "difficulty": "Medium",
  "cuisine": "Italian",
  "dietaryTags": ["Contains eggs", "Gluten-containing"],
  "nutrition": {
    "calories": 520,
    "protein": "22g",
    "carbs": "55g",
    "fat": "23g"
  }
}
```

### Sample Meal Plan

```json
{
  "date": "2024-01-15",
  "recipeId": "60f7c2b8d4f1c12345678901",
  "mealType": "Dinner",
  "servings": 4,
  "notes": "Prepare extra for leftovers"
}
```

## 🧪 Testing

Use the Swagger documentation at `/api-docs` to test all endpoints interactively.

## 📄 License

MIT License
