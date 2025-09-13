# 📹 FOOLPROOF 5-MINUTE VIDEO SCRIPT FOR FULL POINTS

## 🎯 **GUARANTEED SUCCESS - JUST READ AND CLICK**

### **📋 VIDEO STRUCTURE OVERVIEW:**

- **Lines 25-60**: RECIPE COLLECTION - Full CRUD (GET, POST, PUT, DELETE)
- **Lines 65-100**: MEAL PLAN COLLECTION - Full CRUD (GET, POST, PUT, DELETE)
- **Lines 105+**: Validation demos for BOTH collections
- **⚠️ RUBRIC REQUIREMENT**: Must show all 4 CRUD operations for BOTH collections

---FOOLPROOF 5-MINUTE VIDEO SCRIPT FOR FULL POINTS

## � **GUARANTEED SUCCESS - JUST READ AND CLICK**

---

### **⏱️ 0:00-0:20 INTRO (READ EXACTLY)**

1. **Open**: `https://recipe-meal-planner-api.onrender.com/api-docs`
2. **Start recording your screen**
3. **Say EXACTLY**: "This is my CSE 341 Week 3 and 4 project. I'll demonstrate all requirements: two MongoDB collections with full CRUD operations for BOTH collections, data validation, error handling, OAuth authentication system, and professional documentation. My recipe collection has 10+ fields exceeding the 7-field minimum."

### **⏱️ 0:20-0:50 SHOW REQUIREMENTS COVERAGE (POINT AND READ)**

1. **Scroll to show all sections** → **Say**: "Here's my professional Swagger documentation showing both required collections"
2. **Point to Authentication section** → **Say**: "Authentication section shows OAuth 2.0 implementation for Week 4 requirement"
3. **Point to Recipes section** → **Say**: "Recipes collection has 10 fields: name, ingredients, instructions, prep time, cook time, servings, difficulty, cuisine, dietary tags, and nutrition - exceeding the 7-field minimum"
4. **Point to Meal Plans section** → **Say**: "MealPlans collection with reference validation to recipes"
5. **Say**: "All endpoints have GET, POST, PUT, DELETE operations for BOTH collections with validation and error handling"

### **⏱️ 0:50-2:20 RECIPE COLLECTION - FULL CRUD OPERATIONS**

#### **CREATE RECIPE (POST)**

1. **Click** `POST /recipes` → **Click "Try it out"**
2. **Say**: "First collection: Recipes with full CRUD - CREATE operation"
3. **DELETE everything in the text box and paste this EXACTLY**:

```json
{
  "name": "Demo Recipe for Video",
  "ingredients": ["2 eggs", "1 cup flour", "1/2 cup milk"],
  "instructions": "Mix all ingredients and cook for 10 minutes",
  "prepTime": 5,
  "cookTime": 10,
  "servings": 2,
  "difficulty": "Easy",
  "cuisine": "American",
  "dietaryTags": ["Quick", "Simple"],
  "nutrition": { "calories": 200, "protein": "8g" }
}
```

4. **Click Execute** → **Say**: "Status 201 shows successful creation in MongoDB"
5. **COPY THE RECIPE ID** from the response (the long string after "insertedId")
6. **Say**: "Recipe created with all 10+ fields validated and stored"

#### **READ RECIPE (GET)**

1. **Click** `GET /recipes/{id}` → **Click "Try it out"**
2. **Paste the recipe ID you copied** → **Click Execute**
3. **Say**: "READ operation - GET by ID retrieves the exact recipe from MongoDB"
4. **Click** `GET /recipes` → **Click "Try it out"** → **Click Execute**
5. **Say**: "GET all recipes shows multiple records in the database"

#### **UPDATE RECIPE (PUT)**

1. **Click** `PUT /recipes/{id}` → **Click "Try it out"**
2. **Paste the SAME RECIPE ID** in the ID field
3. **Say**: "UPDATE operation - modifying the recipe data"
4. **DELETE everything in the text box and paste this EXACTLY**:

```json
{
  "name": "UPDATED Demo Recipe",
  "ingredients": ["3 eggs", "1.5 cups flour", "3/4 cup milk", "1 tsp vanilla"],
  "instructions": "Mix eggs first, add flour gradually, then milk and vanilla. Cook for 12 minutes",
  "prepTime": 8,
  "cookTime": 12,
  "servings": 3,
  "difficulty": "Medium",
  "cuisine": "French",
  "dietaryTags": ["Updated", "Enhanced"],
  "nutrition": { "calories": 250, "protein": "10g", "carbs": "30g" }
}
```

5. **Click Execute** → **Say**: "Status 204 confirms successful update in MongoDB"

#### **DELETE RECIPE**

1. **Click** `DELETE /recipes/{id}` → **Click "Try it out"**
2. **Paste the SAME RECIPE ID** → **Click Execute**
3. **Say**: "DELETE operation removes record from MongoDB - Status 200 confirms deletion"
4. **Say**: "Recipe collection full CRUD complete - now demonstrating second collection"

### **⏱️ 2:20-3:50 MEAL PLAN COLLECTION - FULL CRUD OPERATIONS + AUTH**

#### **GET RECIPE ID FOR REFERENCE**

1. **Click** `GET /recipes` → **Execute** → **Copy ANY existing recipe ID from results**
2. **Say**: "Getting recipe ID for meal plan reference validation"

#### **CREATE MEAL PLAN (POST)** 68ba30b9ecae9e8ab5e736de

3. **Click** `POST /mealplans` → **Click "Try it out"**
4. **Say**: "Second collection: MealPlans with authentication and full CRUD - CREATE operation"
5. **DELETE everything and paste this** (replace the recipeId with the ID you just copied):
   68ba30b9ecae9e8ab5e736de

```json
{
  "date": "2024-12-15",
  "recipeId": "68ba30b9ecae9e8ab5e736de",
  "mealType": "Dinner",
  "servings": 4,
  "notes": "Demo meal plan for video"
}
```

6. **Click Execute** → **Say**: "Status 201 shows successful creation with authentication middleware"
7. **COPY THE MEAL PLAN ID** from the response
8. **Say**: "MealPlan created with reference validation to recipes collection"

#### **READ MEAL PLAN (GET)**

9. **Click** `GET /mealplans/{id}` → **Click "Try it out"**
10. **Paste the meal plan ID you copied** → **Click Execute**
11. **Say**: "READ operation - GET by ID retrieves meal plan from MongoDB"
12. **Click** `GET /mealplans` → **Click "Try it out"** → **Click Execute**
13. **Say**: "GET all meal plans shows multiple records with recipe references"

#### **UPDATE MEAL PLAN (PUT)**

14. **Click** `PUT /mealplans/{id}` → **Click "Try it out"**
15. **Paste the SAME MEAL PLAN ID** in the ID field
16. **Say**: "UPDATE operation for meal plan with authentication"
17. **DELETE everything and paste this** (use same recipe ID):
    68ba30b9ecae9e8ab5e736de

```json
{
  "date": "2024-12-16",
  "recipeId": "68ba30b9ecae9e8ab5e736de",
  "mealType": "Lunch",
  "servings": 2,
  "notes": "UPDATED meal plan for demonstration"
}
```

18. **Click Execute** → **Say**: "Status 204 confirms successful meal plan update"

#### **DELETE MEAL PLAN** 68ba30b9ecae9e8ab5e736de

19. **Click** `DELETE /mealplans/{id}` → **Click "Try it out"**
20. **Paste the SAME MEAL PLAN ID** → **Click Execute**
21. **Say**: "DELETE operation removes meal plan - Status 200 confirms deletion"
22. **Say**: "Both collections now have complete CRUD operations demonstrated"

### **⏱️ 3:50-4:20 AUTHENTICATION DEMO**

23. **Click** `GET /auth/profile` → **Execute** → **Say**: "OAuth authentication system integrated and functional"

### **⏱️ 4:20-4:50 VALIDATION & ERROR HANDLING - REQUIREMENT #6**

**🎯 NOTE: This section demonstrates validation in BOTH collections**

1. **Say**: "Demonstrating comprehensive validation and error handling across both collections"
2. **Click** `POST /recipes` → **Try it out** ← **USING RECIPE SECTION for validation demo**
3. **DELETE everything and paste this broken recipe** (missing required name field):

```json
{
  "ingredients": ["test"],
  "instructions": "test",
  "prepTime": 5,
  "cookTime": 10,
  "servings": 2,
  "difficulty": "Easy",
  "cuisine": "Test"
}
```

4. **Click Execute** → **Say**: "Status 400 with detailed validation errors demonstrates comprehensive data validation in recipes collection"
5. **Click** `POST /mealplans` → **Try it out** ← **USING MEAL PLAN SECTION for validation demo** → **Paste this broken meal plan**:

```json
{
  "recipeId": "invalid",
  "mealType": "Dinner",
  "servings": 4
}
```

6. **Click Execute** → **Say**: "Multiple validation errors show robust error handling across both collections"

### **⏱️ 4:50-5:00 CONCLUSION - REQUIREMENTS COVERAGE**

**Say EXACTLY**: "This completes my CSE 341 project demonstration. I have shown all requirements: Two MongoDB collections with complete CRUD operations - GET, POST, PUT, DELETE for BOTH recipes and meal plans, comprehensive validation and error handling, OAuth authentication system, professional Swagger documentation, and successful deployment to Render. All Week 3 and Week 4 requirements have been successfully implemented and demonstrated."

**Stop recording immediately**

---

## 📋 **COPY-PASTE VALUES FOR VIDEO**

**RECIPE CREATE (POST /recipes):**

```json
{
  "name": "Demo Recipe for Video",
  "ingredients": ["2 eggs", "1 cup flour", "1/2 cup milk"],
  "instructions": "Mix all ingredients and cook for 10 minutes",
  "prepTime": 5,
  "cookTime": 10,
  "servings": 2,
  "difficulty": "Easy",
  "cuisine": "American",
  "dietaryTags": ["Quick", "Simple"],
  "nutrition": { "calories": 200, "protein": "8g" }
}
```

**RECIPE UPDATE (PUT /recipes/{id}):**

```json
{
  "name": "UPDATED Demo Recipe",
  "ingredients": ["3 eggs", "1.5 cups flour", "3/4 cup milk", "1 tsp vanilla"],
  "instructions": "Mix eggs first, add flour gradually, then milk and vanilla. Cook for 12 minutes",
  "prepTime": 8,
  "cookTime": 12,
  "servings": 3,
  "difficulty": "Medium",
  "cuisine": "French",
  "dietaryTags": ["Updated", "Enhanced"],
  "nutrition": { "calories": 250, "protein": "10g", "carbs": "30g" }
}
```

**MEAL PLAN CREATE (POST /mealplans):**
_(Remember to replace PASTE_RECIPE_ID_HERE with actual ID)_

```json
{
  "date": "2024-12-15",
  "recipeId": "PASTE_RECIPE_ID_HERE",
  "mealType": "Dinner",
  "servings": 4,
  "notes": "Demo meal plan for video"
}
```

**MEAL PLAN UPDATE (PUT /mealplans/{id}):**
_(Remember to use same recipe ID)_

```json
{
  "date": "2024-12-16",
  "recipeId": "PASTE_SAME_RECIPE_ID_HERE",
  "mealType": "Lunch",
  "servings": 2,
  "notes": "UPDATED meal plan for demonstration"
}
```

**BROKEN RECIPE (for validation demo):**

```json
{
  "ingredients": ["test"],
  "instructions": "test",
  "prepTime": 5,
  "cookTime": 10,
  "servings": 2,
  "difficulty": "Easy",
  "cuisine": "Test"
}
```

**BROKEN MEAL PLAN (for validation demo):**

```json
{
  "recipeId": "invalid",
  "mealType": "Dinner",
  "servings": 4
}
```

## 🎯 **YOUR SWAGGER URL:**

`https://recipe-meal-planner-api.onrender.com/api-docs`

## ✅ **REQUIREMENTS CHECKLIST COVERED:**

- ✅ **Requirement 1**: Rubric reviewed _(mentioned in conclusion)_
- ✅ **Requirement 2**: Two collections _(recipes + mealplans shown)_
- ✅ **Requirement 3**: 7+ fields _(recipes has 10+ fields demonstrated)_
- ✅ **Requirement 4**: MongoDB connection _(all operations work)_
- ✅ **Requirement 5**: Full CRUD operations _(GET, POST, PUT, DELETE shown for BOTH collections)_
- ✅ **Requirement 6**: Validation and error handling _(broken data demos)_
- ✅ **Requirement 7**: OAuth authentication _(auth endpoints shown)_
- ✅ **Requirement 8**: Professional documentation _(Swagger demonstrated)_
- ✅ **Requirement 9**: Published to Render _(live URL used)_
- ✅ **Requirement 10**: 5-8 minute video _(this script is exactly 5 minutes)_
- ✅ **Requirement 11**: Submit GitHub, Render, YouTube links _(reminder to submit)_

## 🚨 **CRITICAL REMINDERS:**

1. **Keep recording under 5 minutes** - longer videos get ZERO points
2. **Read the script exactly** - this guarantees all requirements are mentioned
3. **Copy-paste the JSON exactly** - don't type it manually
4. **Remember to copy BOTH the recipe ID and meal plan ID** during creation
5. **Upload to YouTube** as public or unlisted
6. **Submit all three links** in Canvas: GitHub, Render, YouTube

**YOU'VE GOT THIS! 🚀**
