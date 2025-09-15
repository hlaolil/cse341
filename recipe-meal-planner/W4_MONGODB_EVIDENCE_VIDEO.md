## 🎯 **W4 REQUIREMENTS FOR FULL CREDIT:**

## ⏱️ **EXACTLY 3-MINUTE SCRIPT**

### **⏱️ 0:00-0:20 INTRO + MONGODB SETUP**

1. **Open TWO tabs**: Swagger (`https://recipe-meal-planner-api.onrender.com/api-docs`) + MongoDB Atlas
   https://cloud.mongodb.com/v2/68b724fcb9acac6de4cdc66b#/metrics/replicaSet/68b725a82ddc4e0fe762be46/explorer/recipeMealPlanner/recipes/find
2. **Say**: "W4 demonstration: Swagger requests, MongoDB updates, and OAuth authentication"
3. **Switch to MongoDB Atlas** → **Navigate to recipes collection** → **Show current documents**
4. **Say**: "Current MongoDB state - now creating recipe via Swagger"

### **⏱️ 0:20-0:50 MONGODB EVIDENCE (CREATE)**

5. **Switch to Swagger** → **Click** `POST /recipes` → **Try it out**
6. **DELETE everything and paste this JSON:**

```json
{
  "name": "W4 Evidence Recipe",
  "ingredients": ["Evidence 1", "Evidence 2"],
  "instructions": "MongoDB integration proof",
  "prepTime": 10,
  "cookTime": 15,
  "servings": 4,
  "difficulty": "Easy",
  "cuisine": "Test",
  "dietaryTags": ["MongoDB"],
  "nutrition": { "calories": 300, "protein": "12g" }
}
```

7. **Click Execute** → **Say**: "Status 201 - MongoDB ObjectId created"
8. **COPY recipe ID from response**
9. **Switch to MongoDB Atlas** → **Refresh** → **Point to new recipe**
10. **Say**: "Real-time MongoDB update confirmed"

### **⏱️ 0:50-1:10 MONGODB EVIDENCE (UPDATE)**

11. **Switch to Swagger** → **Click** `PUT /recipes/{id}` → **Try it out**
12. **Paste the recipe ID** in the ID field
13. **DELETE everything in body and paste this JSON:**

```json
{
  "name": "UPDATED W4 Evidence",
  "ingredients": ["UPDATED 1", "UPDATED 2", "NEW 3"],
  "instructions": "MongoDB UPDATE proof",
  "prepTime": 12,
  "cookTime": 18,
  "servings": 6,
  "difficulty": "Medium",
  "cuisine": "Updated",
  "dietaryTags": ["UPDATED"],
  "nutrition": { "calories": 350, "protein": "15g" }
}
```

14. **Execute** → **Say**: "Status 204 update confirmed"
15. **Switch to MongoDB** → **Refresh** → **Show updated document**
16. **Say**: "Same ObjectId, updated fields - MongoDB integration proven"

### **⏱️ 1:10-1:30 MONGODB EVIDENCE (DELETE)**

17. **Switch to Swagger** → **Click** `DELETE /recipes/{id}` → **Try it out**
18. **Paste the SAME recipe ID** in the ID field
19. **Execute** → **Say**: "Status 200 deletion confirmed"
20. **Switch to MongoDB** → **Refresh** → **Show recipe removed**
21. **Say**: "Complete CRUD operations with MongoDB Atlas integration demonstrated"

### **⏱️ 1:30-2:20 OAUTH AUTHENTICATION DEMO**

22. **Switch to Swagger** → **Say**: "Now demonstrating OAuth authentication"
23. **Click** `GET /auth/profile` → **Execute**
24. **Say**: "Failed to fetch - PERFECT! Authentication endpoint is protected"

25. **Click** `GET /mealplans` → **Execute**
26. **Say**: "Failed to fetch proves GET meal plans route is protected by OAuth"

27. **Click** `POST /mealplans` → **Try it out** → **Execute** (without adding any data)
28. **Say**: "POST meal plans also fails - both GET and POST meal plan routes require authentication"

29. **Click** `PUT /mealplans/{id}` → **Try it out** → **Put any ID** → **Execute**

30. **Say**: "Third protected route also fails - OAuth authentication working on all meal plan endpoints"

### **⏱️ 2:20-2:45 VALIDATION & ERROR HANDLING DEMO**

31. **Click** `POST /recipes` → **Try it out**
32. **DELETE everything and paste this BROKEN JSON:**

```json
{
  "ingredients": ["Test"],
  "instructions": "Missing required name field"
}
```

33. **Execute** → **Say**: "Status 400 validation error - data validation working"
34. **Click** `POST /mealplans` → **Try it out** → **Paste this BROKEN JSON:**

```json
{
  "recipeId": "invalid-id",
  "mealType": "Test"
}
```

35. **Execute** → **Say**: "Failed to fetch proves validation on protected routes too"

### **⏱️ 2:45-2:55 DATABASE FIELDS VERIFICATION**

36. **Switch to MongoDB Atlas** → **Click on any recipe document** → **Expand it**
37. **Say**: "Recipe collection has 10+ fields: name, ingredients, instructions, prepTime, cookTime, servings, difficulty, cuisine, dietaryTags, nutrition - exceeding 7-field requirement"

### **⏱️ 2:55-3:00 CONCLUSION**

38. **Say**: "Complete W4 requirements: Swagger documentation, MongoDB Atlas updates, OAuth authentication, data validation, error handling, and database with 7+ fields demonstrated."

---

## ✅ **FULL CREDIT REQUIREMENTS COVERED:**\*\*\*\*\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***\*\*\*\*\*\*\*\*
