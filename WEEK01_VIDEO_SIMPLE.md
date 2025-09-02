# Week 01 Video Script (SIMPLE - 4 minutes)

## Week 01 Requirements ONLY:

✅ GET all contacts  
✅ GET single contact  
✅ Deployed on Render  
✅ Proper architecture  
✅ Secure credentials

**(No POST/PUT/DELETE needed for Week 01)**

---

## Simple Video Script

### 1. Intro (20 seconds)

"Hi, I'm Kendahl. This is my CSE 341 Week 01 Contacts API project."

### 2. Show GET All Contacts (30 seconds)

**Go to:** https://cse341-al36.onrender.com/contacts
**Say:** "My API is deployed on Render. GET /contacts returns all contacts from MongoDB with the required fields: firstName, lastName, email, favoriteColor, and birthday."

### 3. Show GET Single Contact (30 seconds)

**Go to:** https://cse341-al36.onrender.com/contacts/68b7627b0f7282e4198f94d9
**Say:** "GET /contacts/:id returns a single contact by MongoDB ObjectId."

### 4. Show GitHub Repository (90 seconds)

**Go to:** https://github.com/kendychae/cse341
**Say:** "My GitHub repo shows proper MVC architecture:

- server.js connects endpoints to routes
- routes/contacts.js contains my GET endpoints
- db/conn.js handles MongoDB connection
- .env file is NOT in GitHub for security"

**Click on routes/contacts.js to show the GET endpoints**

### 5. Show Security (30 seconds)

**Say:** "My MongoDB connection string is stored in .env locally, not on GitHub. On Render, I added MONGODB_URI as an environment variable for security."

### 6. Wrap Up (30 seconds)

**Say:** "Week 01 requirements completed:
✓ GET all contacts working
✓ GET single contact working  
✓ Deployed on Render
✓ Proper code architecture
✓ Secure credential handling

Links I'm submitting:

- GitHub: https://github.com/kendychae/cse341
- Render: https://cse341-al36.onrender.com/
- This YouTube video"

---

## URLs to Copy-Paste:

- **GET All:** https://cse341-al36.onrender.com/contacts
- **GET Single:** https://cse341-al36.onrender.com/contacts/68b7627b0f7282e4198f94d9
- **GitHub:** https://github.com/kendychae/cse341

## Recording Tips:

- Keep it simple - just show the working endpoints
- No PowerShell commands needed
- Focus on the 4 grading criteria from the rubric
- Total time: 4-5 minutes max
