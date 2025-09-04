# 📹 WEEK 3 VIDEO SCRIPT - Recipe & Meal Planning API

## 🎬 **5-MINUTE DEMONSTRATION SCRIPT**

---

### **⏱️ 0:00-0:15 INTRO (15 seconds)**

1. **Go to**: Your deployed Render URL `/api-docs`
2. **Start recording**
3. **Say**: "CSE 341 Week 3 Project - Recipe and Meal Planning API demonstrating full CRUD operations with data validation and MongoDB integration"

---

### **⏱️ 0:15-1:00 SHOW API DOCUMENTATION (45 seconds)**

1. **Point to Swagger UI interface**
2. **Say**: "Professional API documentation with Swagger UI showing two main collections"
3. **Scroll through endpoints**
4. **Say**: "Recipes collection with 10+ fields and MealPlans collection with 5 fields"
5. **Point to schemas section**
6. **Say**: "Complete data models with validation requirements shown"

---

### **⏱️ 1:00-2:00 RECIPES CRUD DEMONSTRATION (60 seconds)**

#### **GET All Recipes (15 seconds)**

1. **Click** `GET /recipes` → Try it out → Execute
2. **Say**: "GET all recipes - shows 3 sample recipes with complete data"

#### **POST Create Recipe (30 seconds)**

1. **Click** `POST /recipes` → Try it out
2. **Say**: "Creating new recipe with required validation"
3. **Paste JSON**:

```json
{
  "name": "Video Demo Recipe",
  "ingredients": ["2 eggs", "1 cup flour", "1/2 cup milk"],
  "instructions": "Mix ingredients and cook",
  "prepTime": 5,
  "cookTime": 10,
  "servings": 2,
  "difficulty": "Easy",
  "cuisine": "American",
  "dietaryTags": ["Quick meal"],
  "nutrition": { "calories": 200 }
}
```

4. **Execute** → **Say**: "Status 201 - Recipe created successfully"
5. **Copy the insertedId**

#### **GET Single Recipe (15 seconds)**

1. **Click** `GET /recipes/{id}` → Try it out
2. **Paste the copied ID** → Execute
3. **Say**: "GET by ID - retrieves our newly created recipe"

---

### **⏱️ 2:00-3:15 UPDATE AND DELETE OPERATIONS (75 seconds)**

#### **PUT Update Recipe (45 seconds)**

1. **Click** `PUT /recipes/{id}` → Try it out
2. **Say**: "Demonstrating PUT update with validation"
3. **Paste the ID** and **updated JSON**:

```json
{
  "name": "UPDATED Video Demo Recipe",
  "ingredients": ["2 eggs", "1 cup flour", "1/2 cup milk", "1 tsp vanilla"],
  "instructions": "Mix ingredients, add vanilla, and cook",
  "prepTime": 7,
  "cookTime": 10,
  "servings": 2,
  "difficulty": "Easy",
  "cuisine": "American",
  "dietaryTags": ["Quick meal", "Contains dairy"],
  "nutrition": { "calories": 220 }
}
```

4. **Execute** → **Say**: "Status 204 - Recipe updated successfully"
5. **Verify**: Go back to GET by ID to show the update worked

#### **DELETE Recipe (30 seconds)**

1. **Click** `DELETE /recipes/{id}` → Try it out
2. **Paste the same ID** → Execute
3. **Say**: "Status 200 - Recipe deleted successfully"
4. **Verify**: Try GET by ID again to show 404 Not Found

---

### **⏱️ 3:15-4:30 MEAL PLANS DEMONSTRATION (75 seconds)**

#### **GET All Meal Plans (15 seconds)**

1. **Click** `GET /mealplans` → Try it out → Execute
2. **Say**: "GET all meal plans - shows sample meal planning data"

#### **POST Create Meal Plan (30 seconds)**

1. **Click** `POST /mealplans` → Try it out
2. **Say**: "Creating meal plan that references existing recipe"
3. **Get a recipe ID from the GET recipes response**
4. **Paste JSON**:

```json
{
  "date": "2024-12-15",
  "recipeId": "PASTE_ACTUAL_RECIPE_ID_HERE",
  "mealType": "Dinner",
  "servings": 4,
  "notes": "Video demonstration meal plan"
}
```

5. **Execute** → **Say**: "Status 201 - Meal plan created with recipe validation"

#### **GET by Date (15 seconds)**

1. **Click** `GET /mealplans/date/{date}` → Try it out
2. **Enter**: `2024-12-15` → Execute
3. **Say**: "GET by date - shows our new meal plan for December 15th"

#### **PUT Update Meal Plan (15 seconds)**

1. **Click** `PUT /mealplans/{id}` → briefly show the interface
2. **Say**: "PUT and DELETE work the same as recipes with full validation"

---

### **⏱️ 4:30-4:50 VALIDATION DEMONSTRATION (20 seconds)**

1. **Try POST recipe with missing required field**
2. **Remove the "name" field** from the JSON
3. **Execute** → **Say**: "Status 400 - Validation error shows required fields"
4. **Point to error details**: "Comprehensive validation prevents invalid data"

---

### **⏱️ 4:50-5:00 CONCLUSION (10 seconds)**

**Say**: "Complete Recipe and Meal Planning API with full CRUD operations, data validation, MongoDB integration, and professional documentation. All requirements met for Week 3."
**Stop recording**

---

## 📋 **COPY-PASTE VALUES FOR VIDEO**

### **Recipe JSON (POST)**:

```json
{
  "name": "Video Demo Recipe",
  "ingredients": ["2 eggs", "1 cup flour", "1/2 cup milk"],
  "instructions": "Mix ingredients and cook",
  "prepTime": 5,
  "cookTime": 10,
  "servings": 2,
  "difficulty": "Easy",
  "cuisine": "American",
  "dietaryTags": ["Quick meal"],
  "nutrition": { "calories": 200 }
}
```

### **Updated Recipe JSON (PUT)**:

```json
{
  "name": "UPDATED Video Demo Recipe",
  "ingredients": ["2 eggs", "1 cup flour", "1/2 cup milk", "1 tsp vanilla"],
  "instructions": "Mix ingredients, add vanilla, and cook",
  "prepTime": 7,
  "cookTime": 10,
  "servings": 2,
  "difficulty": "Easy",
  "cuisine": "American",
  "dietaryTags": ["Quick meal", "Contains dairy"],
  "nutrition": { "calories": 220 }
}
```

### **Meal Plan JSON (POST)**:

```json
{
  "date": "2024-12-15",
  "recipeId": "REPLACE_WITH_ACTUAL_ID",
  "mealType": "Dinner",
  "servings": 4,
  "notes": "Video demonstration meal plan"
}
```

---

## 🎯 **VIDEO DEMONSTRATES**

✅ **Two Collections**: Recipes (10+ fields) and MealPlans (5 fields)
✅ **Full CRUD**: GET, POST, PUT, DELETE for both collections  
✅ **Data Validation**: Required fields, proper error handling
✅ **MongoDB Integration**: Live database operations
✅ **Professional Documentation**: Complete Swagger UI
✅ **Reference Validation**: Meal plans validate recipe existence
✅ **Error Handling**: Proper HTTP status codes and messages

**This directly addresses all Week 3 requirements!** 🚀
