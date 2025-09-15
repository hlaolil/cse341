# CSE 341 Week 5 Video Demo Script

## Music API - Under 5 Minutes for Full Points

## 🎬 **MINUTE 1: Introduction & GitHub (0:00-1:00)**

### **[0:00-0:30] Opening**

- "Hi, I'm Kendahl. This is my CSE 341 Week 5 Music API project."
- "I built a REST API with two collections: Artists and Albums, with full CRUD operations."

### **[0:30-1:00] GitHub Repository**

- **Go to:** `https://github.com/kendychae/cse341`
- Click on `music-api` folder
- "Here's my project structure with routes, middleware, and Swagger documentation."
- Show `routes/artists.js` and `routes/albums.js` briefly

---

## 🎬 **MINUTE 2: Deployed API & Collections (1:00-2:00)**

### **[1:00-1:30] Show Deployed API**

- **Go to:** `https://music-api-cse341-u669.onrender.com/`
- "My API is deployed on Render and connected to MongoDB Atlas."
- Show the welcome message with endpoints

### **[1:30-2:00] Show Two Collections**

- **Go to:** `https://music-api-cse341-u669.onrender.com/artists`
- "Here are my Artists - The Beatles, Queen, and Taylor Swift"
- **Go to:** `https://music-api-cse341-u669.onrender.com/albums`
- "Here are Albums with artist references showing the relationship"

---

## 🎬 **MINUTE 3: Swagger Documentation (2:00-3:00)**

### **[2:00-2:30] Open Swagger**

- **Go to:** `https://music-api-cse341-u669.onrender.com/api-docs`
- "This is my interactive Swagger documentation showing all endpoints."
- Scroll through to show Artists and Albums sections

### **[2:30-3:00] Explain API Structure**

- "Each collection has GET, POST, PUT, DELETE operations."
- "Notice the validation requirements and error responses."
- Point out the schema definitions at the bottom

---

## 🎬 **MINUTE 4: CRUD Operations Demo (3:00-4:00)**

### **[3:00-3:20] Test GET Operations**

- Click "Try it out" on `GET /artists`
- Click "Execute" - show the 3 artists returned

### **[3:20-3:40] Test POST Operation**

- Click on `POST /artists`
- Click "Try it out"
- **Use this JSON:**

```json
{
  "name": "Led Zeppelin",
  "genre": "Rock",
  "country": "United Kingdom",
  "formed_year": 1968,
  "members": ["Robert Plant", "Jimmy Page"]
}
```

- Click "Execute" - show 201 success response

### **[3:40-4:00] Show Error Handling**

- Try POST with missing required field (remove "name")
- Click "Execute" - show 400 error with validation details

```json
{
  "genre": "Rock",
  "country": "United Kingdom",
  "formed_year": 1968,
  "members": ["Robert Plant", "Jimmy Page"]
}
```

## 🎬 **MINUTE 5: Wrap-up & Final Points (4:00-5:00)**

### **[4:00-4:30] Show Album Operations**

- Quickly demonstrate `GET /albums`
- Show one album with artist_id reference
- "Albums reference artist IDs showing the relationship between collections"

### **[4:30-5:00] Conclusion**

- "This API meets all Week 5 requirements:"
- "✅ Two collections with CRUD operations"
- "✅ Error handling and validation"
- "✅ Swagger documentation at /api-docs"
- "✅ Deployed on Render with MongoDB"
- "✅ GitHub repository with professional structure"
- "Thank you!"

---

## 🚀 **Quick Reference URLs**

- **GitHub**: `https://github.com/kendychae/cse341`
- **API Root**: `https://music-api-cse341-u669.onrender.com/`
- **API Docs**: `https://music-api-cse341-u669.onrender.com/api-docs`
- **Artists**: `https://music-api-cse341-u669.onrender.com/artists`
- **Albums**: `https://music-api-cse341-u669.onrender.com/albums`

---

---

## 📝 **Sample JSON for Demo**

### **Valid Artist POST:**

```json
{
  "name": "Led Zeppelin",
  "genre": "Rock",
  "country": "United Kingdom",
  "formed_year": 1968,
  "members": ["Robert Plant", "Jimmy Page"]
}
```

### **Invalid Artist POST (for error demo):**

```json
{
  "genre": "Rock",
  "country": "United Kingdom",
  "formed_year": 1968,
  "members": ["Robert Plant", "Jimmy Page"]
}
```

---

**🎥 Ready to record? This script will get you full points while staying under 5 minutes!**
