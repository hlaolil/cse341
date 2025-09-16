# OAuth Demo

**URL:** https://recipe-meal-planner-api.onrender.com/api-docs

## Demo Mode Control

**NEW:** You can now toggle between demo mode and real OAuth!

### Check Current Mode:

- GET `/auth/demo-mode` - Shows if demo mode is on/off

### Toggle Demo Mode:

- POST `/auth/toggle-demo` - Switches between demo and real OAuth
- POST `/auth/toggle-demo` with body `{"enable": false}` - Disables demo mode
- POST `/auth/toggle-demo` with body `{"enable": true}` - Enables demo mode

## Demo Script Options

### Option A: Demo Mode (Simplified for Video)

1. **Setup:** POST `/auth/toggle-demo` with `{"enable": true}`
2. Show unlocked locks on POST/PUT/DELETE routes
3. Try POST /recipes -> 401 error (briefly)
4. Go to /auth/demo-login -> Execute
5. Refresh -> locks now closed
6. Try POST /recipes -> 201 success
7. Go to /auth/demo-logout -> Execute
8. Refresh -> locks open again
9. Try POST /recipes -> 401 error

### Option B: Real OAuth Mode (Full Authentication)

1. **Setup:** POST `/auth/toggle-demo` with `{"enable": false}`
2. Show unlocked locks on POST/PUT/DELETE routes
3. Try POST /recipes -> 401 error
4. Go to /auth/google -> Redirects to Google login
5. Complete Google authentication
6. Return to API docs -> locks now closed
7. Try POST /recipes -> 201 success
8. Go to /auth/logout -> Execute
9. Refresh -> locks open again
10. Try POST /recipes -> 401 error

## Copy-Paste JSON Examples

### Recipe JSON (for POST /recipes):

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

### Meal Plan JSON (for POST /mealplans):

```json
{
  "date": "2024-12-01",
  "recipeId": "PASTE_RECIPE_ID_HERE",
  "mealType": "Dinner",
  "servings": 2,
  "notes": "Family dinner"
}
```

### Update Recipe JSON (for PUT /recipes/{id}):

```json
{
  "name": "Updated Test Recipe",
  "ingredients": ["2 cups flour", "3 eggs", "1 cup milk"],
  "instructions": "Mix well and bake at 375°F for 25 minutes",
  "prepTime": 10,
  "cookTime": 25,
  "servings": 6,
  "difficulty": "Medium",
  "cuisine": "Italian"
}
```

## Notes:

- **6 Protected Routes:** POST/PUT/DELETE for both /recipes and /mealplans
- For meal plans, first create a recipe to get a valid recipeId
- Difficulty options: "Easy", "Medium", "Hard"
- Meal type options: "Breakfast", "Lunch", "Dinner", "Snack"

## Mode Explanations:

### Demo Mode (enable: true):

- All protected routes automatically have access
- Use `/auth/demo-login` and `/auth/demo-logout` for show
- Perfect for video demonstrations
- No real Google OAuth needed

### Real OAuth Mode (enable: false):

- Protected routes actually require Google authentication
- Must complete real Google login flow
- Shows true OAuth protection
- Requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables

## For Your Video:

1. Start with real OAuth mode disabled: `POST /auth/toggle-demo {"enable": false}`
2. Show that protected routes return 401 errors
3. Try to access `/auth/google` (will show OAuth not configured message)
4. Switch to demo mode: `POST /auth/toggle-demo {"enable": true}`
5. Now demonstrate the authentication flow with demo endpoints
6. This shows you understand both real OAuth and can demo it safely
