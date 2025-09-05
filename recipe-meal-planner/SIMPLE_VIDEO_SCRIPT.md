# 📹 SUPER SIMPLE 5-MINUTE VIDEO SCRIPT

## 🎬 **FOLLOW THESE EXACT STEPS**

---

### **⏱️ 0:00-0:15 START**

1. **Go to**: `https://recipe-meal-planner-api.onrender.com/api-docs`
2. **Start recording**
3. **Say**: "CSE 341 Week 3 Recipe API with CRUD operations, validation, and MongoDB"

### **⏱️ 0:15-0:45 SHOW DOCS**

1. **Say**: "Swagger documentation shows recipes with 10+ fields and meal plans"
2. **Scroll down** to show endpoints
3. **Say**: "Full CRUD operations for both collections"

### **⏱️ 0:45-1:30 CREATE (POST)**

1. **Click** `POST /recipes` → Try it out
2. **Say**: "Creating new recipe"
3. **Paste this**:

```
{"name":"Video Demo","ingredients":["2 eggs","1 cup flour"],"instructions":"Mix and cook","prepTime":5,"cookTime":10,"servings":2,"difficulty":"Easy","cuisine":"American","dietaryTags":["Quick"],"nutrition":{"calories":200}}
```

4. **Execute** → **Say**: "Status 201 created"
5. **COPY THE ID** from response

### **⏱️ 1:30-2:00 READ (GET)**

1. **Click** `GET /recipes/{id}` → Try it out
2. **Paste the ID** → Execute
3. **Say**: "GET by ID shows the recipe I created"

### **⏱️ 2:00-2:45 UPDATE (PUT)**

1. **Click** `PUT /recipes/{id}` → Try it out
2. **Paste the SAME ID**
3. **Paste this**:

```
{"name":"UPDATED Demo","ingredients":["2 eggs","1 cup flour","vanilla"],"instructions":"Mix, add vanilla, cook","prepTime":7,"cookTime":10,"servings":2,"difficulty":"Easy","cuisine":"American","dietaryTags":["Quick","Sweet"],"nutrition":{"calories":220}}
```

4. **Execute** → **Say**: "Status 204 updated successfully"

### **⏱️ 2:45-3:15 DELETE**

1. **Click** `DELETE /recipes/{id}` → Try it out
2. **Paste the SAME ID** → Execute
3. **Say**: "Status 200 deleted"
4. **Try GET by ID again** → **Say**: "404 confirms deletion"

### **⏱️ 3:15-4:00 MEAL PLANS**

1. **Click** `GET /recipes` → Execute → **Copy any recipe ID**
2. **Click** `POST /mealplans` → Try it out
3. **Say**: "Creating meal plan"
4. **Paste this** (replace the ID):

```
{"date":"2024-12-15","recipeId":"PASTE_RECIPE_ID_HERE","mealType":"Dinner","servings":4,"notes":"Video demo"}
```

5. **Execute** → **Say**: "Status 201 created with validation"

### **⏱️ 4:00-4:30 VALIDATION**

1. **Try POST recipe** but **remove "name" field**
2. **Execute** → **Say**: "Status 400 validation prevents bad data"

### **⏱️ 4:30-5:00 END**

**Say**: "Recipe API complete with CRUD, validation, MongoDB, and documentation"
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
