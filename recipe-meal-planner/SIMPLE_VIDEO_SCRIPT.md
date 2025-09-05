# 📹 SUPER SIMPLE 5-MINUTE VIDEO SCRIPT

## 🎬 **FOLLOW THESE EXACT STEPS**

---

### **⏱️ 0:00-0:15 START**

1. **Go to**: `https://recipe-meal-planner-api.onrender.com/api-docs`
2. **Start recording**
3. **Say**: "CSE 341 Week 3 Recipe API deployed on Render with CRUD operations, validation, and MongoDB"

### **⏱️ 0:15-0:45 SHOW DOCS**

1. **Say**: "Professional Swagger documentation shows TWO COLLECTIONS"
2. **Point to recipes section** → **Say**: "Recipes collection has 10+ fields"
3. **Point to mealplans section** → **Say**: "MealPlans collection with 5 fields"
4. **Say**: "Full CRUD operations for both collections with MongoDB integration"

### **⏱️ 0:45-1:30 CREATE (POST)**

1. **Click** `POST /recipes` → Try it out
2. **Say**: "Demonstrating CREATE operation with data validation"
3. **Say**: "Recipe has 10+ required fields including name, ingredients, instructions, prep time, cook time, servings, difficulty, cuisine, dietary tags, and nutrition"
4. **Paste this**:

```
{"name":"Video Demo","ingredients":["2 eggs","1 cup flour"],"instructions":"Mix and cook","prepTime":5,"cookTime":10,"servings":2,"difficulty":"Easy","cuisine":"American","dietaryTags":["Quick"],"nutrition":{"calories":200}}
```

4. **Execute** → **Say**: "Status 201 created successfully in MongoDB database"
5. **COPY THE ID** from response

### **⏱️ 1:30-2:00 READ (GET)**

1. **Click** `GET /recipes/{id}` → Try it out
2. **Paste the ID** → Execute
3. **Say**: "READ operation retrieves the exact recipe from MongoDB with all fields"
4. **Also try** `GET /recipes` → Execute
5. **Say**: "Shows all recipes in the database"

### **⏱️ 2:00-2:45 UPDATE (PUT)**

1. **Click** `PUT /recipes/{id}` → Try it out
2. **Paste the SAME ID**
3. **Say**: "UPDATE operation with validation - changing multiple fields"
4. **Paste this**:

```
{"name":"UPDATED Demo","ingredients":["2 eggs","1 cup flour","vanilla"],"instructions":"Mix, add vanilla, cook","prepTime":7,"cookTime":10,"servings":2,"difficulty":"Easy","cuisine":"American","dietaryTags":["Quick","Sweet"],"nutrition":{"calories":220}}
```

4. **Execute** → **Say**: "Status 204 means successful update in MongoDB"

### **⏱️ 2:45-3:15 DELETE**

1. **Click** `DELETE /recipes/{id}` → Try it out
2. **Paste the SAME ID** → Execute
3. **Say**: "DELETE operation removes from MongoDB - Status 200"
4. **Try GET by ID again** → **Say**: "404 confirms deletion - record no longer exists"
5. **Say**: "All four CRUD operations working with MongoDB database"

### **⏱️ 3:15-4:00 MEAL PLANS - SECOND COLLECTION**

1. **Click** `GET /recipes` → Execute → **Copy any recipe ID**
2. **Click** `POST /mealplans` → Try it out
3. **Say**: "Second collection - MealPlans with reference validation to recipes"
4. **Paste this** (replace the ID):

```
{"date":"2024-12-15","recipeId":"PASTE_RECIPE_ID_HERE","mealType":"Dinner","servings":4,"notes":"Video demo"}
```

5. **Execute** → **Say**: "Status 201 - validates recipe exists before creating meal plan"

### **⏱️ 4:00-4:30 VALIDATION & ERROR HANDLING**

1. **Try POST recipe** but **remove "name" field**
2. **Execute** → **Say**: "Status 400 validation error for recipes collection"
3. **Try POST mealplan** but **remove "date" field**
4. **Execute** → **Say**: "Status 400 validation works for both collections with detailed error messages"
5. **Say**: "Comprehensive error handling with try/catch blocks prevents invalid data"

### **⏱️ 4:30-5:00 END**

**Say**: "Recipe API deployed on Render demonstrates all requirements: Two MongoDB collections, full CRUD operations, data validation, error handling, professional API documentation, and successful deployment. Week 3 project complete."
**Stop recording**

---

## 📋 **COPY-PASTE VALUES**

**Recipe (POST):**

```
{"name":"Video Demo","ingredients":["2 eggs","1 cup flour"],"instructions":"Mix and cook","prepTime":5,"cookTime":10,"servings":2,"difficulty":"Easy","cuisine":"American","dietaryTags":["Quick"],"nutrition":{"calories":200}}
```

**Updated Recipe (PUT):**

```
{"name":"UPDATED Demo","ingredients":["2 eggs","1 cup flour","vanilla"],"instructions":"Mix, add vanilla, cook","prepTime":7,"cookTime":10,"servings":2,"difficulty":"Easy","cuisine":"American","dietaryTags":["Quick","Sweet"],"nutrition":{"calories":220}}
```

**Meal Plan (POST):**

```
{"date":"2024-12-15","recipeId":"REPLACE_WITH_RECIPE_ID","mealType":"Dinner","servings":4,"notes":"Video demo"}
```

## 🎯 **YOUR URL:**

`https://recipe-meal-planner-api.onrender.com/api-docs`

**That's it! Just follow step by step!** 🚀
