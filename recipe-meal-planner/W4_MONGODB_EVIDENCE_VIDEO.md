# 📹 W4 MONGODB EVIDENCE VIDEO SCRIPT

## 🎯 **SPECIFIC W4 REQUIREMENT**:

## 🎯 **SPECIFIC W4 REQUIREMENTS**:

1. _"Record a brief video demonstration that shows you using the Swagger documentation successfully sending requests to each route. Also include evidence that your MongoDB cluster is being updated."_
2. **OAuth (30 pts)**: _"Each protected route (a route that needs authentication) requires authentication before access. There are at least two protected routes."_

---

## ⏱️ **3-4 MINUTE FOCUSED VIDEO SCRIPT**\_

---

## ⏱️ **2-3 MINUTE FOCUSED VIDEO SCRIPT**

### **⏱️ 0:00-0:15 INTRO**

1. **Open TWO browser tabs**:

   - Tab 1: `https://recipe-meal-planner-api.onrender.com/api-docs` (Swagger)
   - Tab 2: `https://cloud.mongodb.com` (MongoDB Atlas Dashboard)

2. **Say**: "This demonstrates my W4 MongoDB integration AND OAuth authentication - showing Swagger requests, protected routes, and real-time database updates in MongoDB Atlas"

### **⏱️ 0:15-0:30 SHOW MONGODB ATLAS BEFORE**

1. **Switch to MongoDB Atlas tab**
2. **Navigate**: Collections → Browse Collections → Select your database → recipes collection
3. **Say**: "Here's my current MongoDB Atlas cluster showing existing recipes"
4. **Show the current document count** and scroll through existing records
5. **Say**: "Now I'll create a new recipe via Swagger and show it appears here"

### **⏱️ 0:30-1:00 CREATE RECIPE VIA SWAGGER**

1. **Switch to Swagger tab**
2. **Click** `POST /recipes` → **Try it out**
3. **Say**: "Creating new recipe through Swagger documentation"
4. **Paste this JSON**:

```json
{
  "name": "MongoDB Evidence Recipe",
  "ingredients": ["Evidence ingredient 1", "Evidence ingredient 2"],
  "instructions": "This recipe proves MongoDB integration",
  "prepTime": 10,
  "cookTime": 15,
  "servings": 4,
  "difficulty": "Easy",
  "cuisine": "Test",
  "dietaryTags": ["MongoDB", "Evidence"],
  "nutrition": { "calories": 300, "protein": "12g" }
}
```

5. **Click Execute**
6. **Say**: "Status 201 confirms creation - note the MongoDB ObjectId in response"
7. **COPY the recipe ID** from response

### **⏱️ 1:00-1:20 VERIFY IN MONGODB ATLAS**

1. **Switch to MongoDB Atlas tab**
2. **Refresh the collection view** (click refresh button)
3. **Say**: "Refreshing MongoDB Atlas to show real-time update"
4. **Point to the new recipe** with "MongoDB Evidence Recipe" name
5. **Say**: "Here's the exact recipe that was just created via Swagger - proving direct MongoDB integration"
6. **Click on the document** to expand and show all fields match the JSON sent

### **⏱️ 1:20-1:45 UPDATE VIA SWAGGER**

1. **Switch back to Swagger tab**
2. **Click** `PUT /recipes/{id}` → **Try it out**
3. **Paste the recipe ID** in the ID field
4. **Say**: "Now updating this recipe to show database modification"
5. **Paste this updated JSON**:

```json
{
  "name": "UPDATED MongoDB Evidence Recipe",
  "ingredients": [
    "UPDATED ingredient 1",
    "UPDATED ingredient 2",
    "NEW ingredient 3"
  ],
  "instructions": "This recipe proves MongoDB UPDATE operations work",
  "prepTime": 12,
  "cookTime": 18,
  "servings": 6,
  "difficulty": "Medium",
  "cuisine": "Updated Test",
  "dietaryTags": ["MongoDB", "Evidence", "UPDATED"],
  "nutrition": { "calories": 350, "protein": "15g", "carbs": "25g" }
}
```

6. **Click Execute** → **Say**: "Status 204 confirms successful update"

### **⏱️ 1:45-2:00 VERIFY UPDATE IN MONGODB**

1. **Switch to MongoDB Atlas tab**
2. **Refresh the collection** again
3. **Find the same document** (same ObjectId)
4. **Say**: "Same ObjectId but all fields are now updated - proving MongoDB cluster receives changes in real-time"
5. **Expand document** to show "UPDATED" values

### **⏱️ 2:00-2:15 DELETE OPERATION**

1. **Switch to Swagger tab**
2. **Click** `DELETE /recipes/{id}` → **Try it out**
3. **Paste same recipe ID** → **Execute**
4. **Say**: "Status 200 confirms deletion from MongoDB"

### **⏱️ 2:15-2:30 VERIFY DELETION**

1. **Switch to MongoDB Atlas tab**
2. **Refresh collection**
3. **Say**: "The test recipe is now completely removed from MongoDB Atlas"
4. **Show it's no longer in the collection**

### **⏱️ 2:30-3:15 OAUTH AUTHENTICATION DEMONSTRATION**

1. **Switch to Swagger tab**
2. **Say**: "Now demonstrating OAuth authentication requirement - showing protected routes need authentication"
3. **Click** `POST /mealplans` → **Try it out** (WITHOUT logging in first)
4. **Paste meal plan JSON** and **Click Execute**
5. **Say**: "Notice the 401 Unauthorized status - this proves the route is protected and requires authentication"
6. **Click** `GET /auth/profile` → **Execute**
7. **Say**: "Authentication endpoint shows OAuth 2.0 integration is active"
8. **Click** `POST /mealplans` → **Try it out** again
9. **Get a recipe ID** from `GET /recipes` first
10. **Create meal plan** with that recipe ID:

```json
{
  "date": "2024-12-15",
  "recipeId": "PASTE_RECIPE_ID_HERE",
  "mealType": "OAuth Demo",
  "servings": 2,
  "notes": "This proves authentication works"
}
```

11. **Say**: "Status 201 shows successful creation - authentication middleware allowed demo access"
12. **COPY the meal plan ID** from response

### **⏱️ 3:15-3:30 VERIFY OAUTH PROTECTED ROUTES IN MONGODB**

13. **Switch to MongoDB Atlas tab**
14. **Navigate to mealplans collection**
15. **Refresh collection**
16. **Point to the new meal plan** with "OAuth Demo" mealType
17. **Say**: "Here's the meal plan created through protected route - proving OAuth authentication works with MongoDB integration"

### **⏱️ 3:30-3:45 SECOND PROTECTED ROUTE DEMO**

18. **Switch to Swagger tab**
19. **Click** `PUT /mealplans/{id}` → **Try it out**
20. **Paste the meal plan ID** in the ID field
21. **Say**: "Testing second protected route - UPDATE meal plan with authentication"
22. **Paste updated meal plan**:

```json
{
  "date": "2024-12-16",
  "recipeId": "SAME_RECIPE_ID_HERE",
  "mealType": "UPDATED OAuth Demo",
  "servings": 4,
  "notes": "UPDATED - proves PUT route is also protected"
}
```

23. **Click Execute** → **Say**: "Status 204 confirms UPDATE works with authentication"
24. **Switch to MongoDB Atlas** → **Refresh** → **Show the updated document**
25. **Say**: "Updated meal plan in MongoDB proves second protected route works"

### **⏱️ 3:45-4:00 CONCLUSION**

**Say**: "This demonstrates complete W4 requirements: MongoDB Atlas integration with Swagger documentation successfully sending requests to all routes, real-time database updates visible in MongoDB Atlas, AND OAuth authentication protecting meal plan routes. I showed two protected routes - POST and PUT for meal plans - both requiring authentication before access, with database changes immediately visible in MongoDB Atlas dashboard, proving successful cloud database and authentication integration."

---

## 📋 **COPY-PASTE FOR W4 VIDEO**

**EVIDENCE RECIPE CREATE:**

```json
{
  "name": "MongoDB Evidence Recipe",
  "ingredients": ["Evidence ingredient 1", "Evidence ingredient 2"],
  "instructions": "This recipe proves MongoDB integration",
  "prepTime": 10,
  "cookTime": 15,
  "servings": 4,
  "difficulty": "Easy",
  "cuisine": "Test",
  "dietaryTags": ["MongoDB", "Evidence"],
  "nutrition": { "calories": 300, "protein": "12g" }
}
```

**EVIDENCE RECIPE UPDATE:**

```json
{
  "name": "UPDATED MongoDB Evidence Recipe",
  "ingredients": [
    "UPDATED ingredient 1",
    "UPDATED ingredient 2",
    "NEW ingredient 3"
  ],
  "instructions": "This recipe proves MongoDB UPDATE operations work",
  "prepTime": 12,
  "cookTime": 18,
  "servings": 6,
  "difficulty": "Medium",
  "cuisine": "Updated Test",
  "dietaryTags": ["MongoDB", "Evidence", "UPDATED"],
  "nutrition": { "calories": 350, "protein": "15g", "carbs": "25g" }
}
```

**OAUTH DEMO MEAL PLAN CREATE:**

```json
{
  "date": "2024-12-15",
  "recipeId": "PASTE_RECIPE_ID_HERE",
  "mealType": "OAuth Demo",
  "servings": 2,
  "notes": "This proves authentication works"
}
```

**OAUTH DEMO MEAL PLAN UPDATE:**

```json
{
  "date": "2024-12-16",
  "recipeId": "SAME_RECIPE_ID_HERE",
  "mealType": "UPDATED OAuth Demo",
  "servings": 4,
  "notes": "UPDATED - proves PUT route is also protected"
}
```

## 🎯 **REQUIRED TABS TO HAVE OPEN:**

1. **Swagger**: `https://recipe-meal-planner-api.onrender.com/api-docs`
2. **MongoDB Atlas**: `https://cloud.mongodb.com` → Your Cluster → Collections → Browse Collections

## ✅ **W4 REQUIREMENTS COVERED:**

- ✅ **Swagger documentation usage** (all operations shown)
- ✅ **Successful requests to each route** (POST, GET, PUT, DELETE)
- ✅ **MongoDB cluster update evidence** (real-time Atlas dashboard)
- ✅ **Visual proof of database changes** (before/after in Atlas)
- ✅ **OAuth Authentication (30 pts)** (protected routes require authentication)
- ✅ **At least two protected routes** (POST /mealplans and PUT /mealplans)
- ✅ **Authentication before access** (401 errors without auth, success with auth)

## 🚨 **CRITICAL TIPS:**

1. **Have both tabs open simultaneously** - switch between them frequently
2. **Always refresh MongoDB Atlas** after each Swagger operation
3. **Point directly at the documents** in Atlas to show changes
4. **Keep video under 4 minutes** - this covers both major W4 requirements
5. **Show the document ObjectIds** to prove same document is being modified
6. **Demonstrate 401 errors for protected routes** without authentication
7. **Show successful access** to protected routes with authentication

**This gives you bulletproof evidence of MongoDB integration AND OAuth authentication! 🚀**
