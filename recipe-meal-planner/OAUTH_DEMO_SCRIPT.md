# CSE 341 Week 4 OAuth Authentication Demo Script

## Recipe & Meal Planner API - Authentication Demonstration

### **[0:00-0:15] Quick Introduction**

- "OAuth authentication demo for my Recipe & Meal Planner API using Google OAuth 2.0."

### **[0:15-0:45] Show Protected Routes with Lock Icons**

- **Go to:** `https://recipe-meal-planner-api.onrender.com/api-docs`
- **Quickly scroll and point out:**
  - "See the lock icons 🔒 on POST, PUT, DELETE routes - these require authentication"
  - **Show:** POST /recipes, PUT /recipes/{id}, DELETE /recipes/{id}
  - **Show:** POST /mealplans, PUT /mealplans/{id}, DELETE /mealplans/{id}

### **[0:45-1:15] Test Protected Route**

- **Try:** `POST /recipes`
- "Testing a protected route requiring OAuth authentication"
- **Paste pre-written JSON:**

```json
{
  "name": "OAuth Test Recipe",
  "ingredients": ["Test ingredient"],
  "instructions": "Demo recipe",
  "prepTime": 10,
  "cookTime": 15,
  "servings": 4,
  "difficulty": "Easy",
  "cuisine": "Demo"
}
```

- Click "Execute" → Show **201 Created** response

### **[1:15-1:30] Wrap Up**

- "Authentication successful - Google OAuth protects all create/update/delete operations"
- "GET operations remain public for data viewing"

---

**URL:** `https://recipe-meal-planner-api.onrender.com/api-docs`

---
