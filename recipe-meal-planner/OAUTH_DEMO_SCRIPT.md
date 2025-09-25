# OAuth Demo for W4 Video

**URL:** https://recipe-meal-planner-api.onrender.com/api-docs

## ⚠️ **IMPORTANT: For W4 OAuth demonstration, you ONLY need to show that protected routes return 401 errors!**

## W4 OAuth Requirements (Lines 22-30 of evidence script):

1. **Click** `GET /auth/profile` → **Execute** → Should get "Failed to fetch" (401)
2. **Click** `GET /mealplans` → **Execute** → Should get "Failed to fetch" (401)
3. **Click** `POST /mealplans` → **Execute** → Should get "Failed to fetch" (401)
4. **Click** `PUT /mealplans/{id}` → **Execute** → Should get "Failed to fetch" (401)

### Recipe JSON (for testing when demo mode is ON):

```json
{
  "name": "Test Recipe",
  "ingredients": ["1 cup flour", "2 eggs", "1/2 cup milk"],
  "instructions": "Mix ingredients and bake at 350°F for 30 minutes",
  "prepTime": 15,
  "cookTime": 30,
  "servings": 4,
  "difficulty": "Easy",
  "cuisine": "American"
}
```

### Broken Recipe JSON (for validation testing):

```json
{
  "ingredients": ["Test"],
  "instructions": "Missing required name field"
}
```

### Broken Meal Plan JSON (for validation testing):

```json
{
  "recipeId": "invalid-id",
  "mealType": "Test"
}
```

## Notes:

- **Protected Routes:** All POST/PUT/DELETE operations require authentication
- **GET /mealplans routes** are also protected (added for W4)
- When demo mode is OFF → All protected routes return 401 errors
- When demo mode is ON → All routes work without authentication (for testing functionality)
