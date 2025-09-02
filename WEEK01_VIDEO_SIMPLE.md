# Week 01 Video Script (5-6 minutes)

## Week 01 Requirements:

✅ GET all contacts  
✅ GET single contact  
✅ Deployed on Render  
✅ Proper MVC architecture  
✅ Secure credentials  
✅ MongoDB connection with 3+ contacts

**(No POST/PUT/DELETE needed for Week 01)**

---

## Detailed Video Script

### 1. Intro (45 seconds)

"Hi, I'm Kendahl. This is my CSE 341 Week 01 Contacts API project. I'll demonstrate all the required functionality for full credit.

Today I'll show you:

- My deployed API on Render with working GET endpoints
- Proper MVC architecture in my GitHub repository
- How I securely handle MongoDB credentials
- My contacts database with the required fields

This project creates a REST API for managing contacts, storing them in MongoDB, and deploying to a cloud platform."

### 2. Show GET All Contacts (60 seconds)

**Go to:** https://cse341-al36.onrender.com/contacts
**Say:** "First, let me show my deployed API on Render. This URL - cse341-al36.onrender.com/contacts - demonstrates my GET request that retrieves all contacts.

As you can see, it returns JSON data from my MongoDB database. Each contact has all the required fields:

- firstName and lastName for the person's name
- email for contact information
- favoriteColor as a personal preference
- birthday in YYYY-MM-DD format

This proves my Node.js application successfully connects to MongoDB and retrieves data. I have 4 contacts in my database, which exceeds the minimum requirement of 3."

### 3. Show GET Single Contact (45 seconds)

**Go to:** https://cse341-al36.onrender.com/contacts/68b7627b0f7282e4198f94d9
**Say:** "Next, here's my GET request that retrieves a single contact by ID. I'm using the MongoDB ObjectId from the previous response.

This endpoint returns just one contact instead of all of them. This demonstrates that my API can handle both collection-level and individual resource requests, which are the two required GET endpoints for Week 01."

### 4. Show GitHub Repository Architecture (120 seconds)

**Go to:** https://github.com/kendychae/cse341
**Say:** "Now let me show you my GitHub repository to demonstrate proper MVC architecture and code organization.

First, you'll notice my project structure follows best practices:

- server.js is my main entry point that sets up Express
- I have a routes folder with contacts.js containing my API endpoints
- A db folder with conn.js that handles my MongoDB connection
- scripts folder with seed.js for populating the database
- Package.json shows my dependencies: Express, MongoDB driver, and dotenv

Most importantly for security - notice there's NO .env file in this repository."

**Click on server.js**
**Say:** "In server.js, you can see I'm using Express, requiring my environment variables with dotenv, and connecting my routes. The contacts routes are mounted at /contacts."

**Click on routes/contacts.js**
**Say:** "This routes file contains my two required GET endpoints. The first one handles GET /contacts to return all contacts, and the second handles GET /contacts/:id for individual contacts. Both use async/await to interact with MongoDB."

**Click on db/conn.js**
**Say:** "And here's my database connection file that establishes the connection to MongoDB using the connection string from environment variables."

### 5. Explain Security Implementation (60 seconds)

**Say:** "Let me explain how I handle security properly. My MongoDB connection string contains sensitive information like my username and password, so I store it in a .env file locally.

As you saw, there's no .env file in my GitHub repository - it's excluded by my .gitignore file to prevent accidentally committing credentials.

For my Render deployment, I added the MONGODB_URI as an environment variable in the Render dashboard. This way, my deployed application can connect to MongoDB without exposing credentials in the code.

This approach follows security best practices for handling sensitive configuration data."

### 6. Demonstrate Local Development (30 seconds)

**Say:** "Locally, I can run 'npm start' to start my server, and I use the contacts.rest file for testing my endpoints during development. The seed script helps me populate my database with sample data."

### 7. Wrap Up (45 seconds)

**Say:** "Let me summarize what I've demonstrated for Week 01 requirements:

✓ GET all contacts endpoint working on deployed site
✓ GET single contact endpoint working with MongoDB ObjectId
✓ Application successfully deployed on Render cloud platform
✓ Proper MVC architecture with separated concerns
✓ Secure credential handling - no sensitive data in repository
✓ MongoDB database with required contact fields
✓ More than 3 contacts in my database

All Week 01 requirements are complete and functional.

The links I'm submitting are:

- GitHub repository: https://github.com/kendychae/cse341
- Render deployment: https://cse341-al36.onrender.com/
- This YouTube video demonstrating the functionality

Thank you for watching!"

---

## URLs to Copy-Paste:

- **GET All:** https://cse341-al36.onrender.com/contacts
- **GET Single:** https://cse341-al36.onrender.com/contacts/68b7627b0f7282e4198f94d9
- **GitHub:** https://github.com/kendychae/cse341

## Recording Tips:

- **Total time**: 5-6 minutes (meets minimum requirement)
- **Speak clearly** and at a steady pace - don't rush
- **Show your screen clearly** - make sure text is readable
- **Navigate slowly** between pages so viewers can follow
- **Pause briefly** after each main point to let it sink in
- **Be confident** - you've built a working application!

## What Makes This a Strong Submission:

✅ **Demonstrates all grading criteria**
✅ **Shows both required GET endpoints working**  
✅ **Proves deployment is successful**
✅ **Explains architecture clearly**
✅ **Addresses security properly**
✅ **Professional presentation**
✅ **Meets 5-minute minimum length**

Your project exceeds Week 01 requirements - you're ready for full credit!
