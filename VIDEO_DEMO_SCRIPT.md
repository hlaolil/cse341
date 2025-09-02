# CSE 341 Video Demo Script (5-8 minutes)

## Before Recording

- Have these open in separate browser tabs:
  - GitHub repo: https://github.com/kendychae/cse341
  - Render app: https://cse341-al36.onrender.com/
  - Swagger docs: https://cse341-al36.onrender.com/docs
- Have VS Code open with your project
- Have PowerShell ready for API testing

## Script Timeline

### Intro (30 seconds)

"Hi, I'm Kendahl. This is my CSE 341 Contacts API project. I'll demonstrate all the requirements:

- GitHub repo with Node.js project
- MongoDB connection and data
- GET, POST, PUT, DELETE endpoints
- Swagger documentation
- Deployed on Render

Links I'll submit:

- GitHub: https://github.com/kendychae/cse341
- Render: https://cse341-al36.onrender.com/
- This video on YouTube"

### Show GitHub Repo (60 seconds)

Navigate to: https://github.com/kendychae/cse341
"Here's my GitHub repository showing:

- server.js - Express server setup
- routes/contacts.js - all CRUD endpoints
- db/conn.js - MongoDB connection
- scripts/seed.js - database seeding
- swagger.json - API documentation
- .gitignore - excludes .env for security
- README.md - setup instructions"

### Show Deployed App (90 seconds)

Navigate to: https://cse341-al36.onrender.com/contacts
"The app is deployed on Render. GET /contacts returns all contacts from MongoDB:"
[Show the JSON response with 4 contacts]

Navigate to: https://cse341-al36.onrender.com/docs
"Swagger UI shows professional API documentation with all endpoints."

### Demonstrate GET by ID (30 seconds)

Navigate to: https://cse341-al36.onrender.com/contacts/68b7627b0f7282e4198f94d9
"GET /contacts/:id returns a single contact by MongoDB ObjectId."

### Demonstrate POST/PUT/DELETE (60 seconds) - OPTIONAL

**Note: Week 01 only requires GET endpoints, but you can show these for extra credit**

Option 1 - Use Swagger UI (Easiest):
Navigate to: https://cse341-al36.onrender.com/docs
"I can test POST, PUT, DELETE right in the Swagger interface by clicking 'Try it out'"

Option 2 - Skip PowerShell commands:
"I've implemented POST, PUT, and DELETE endpoints. You can see them in the code and Swagger docs, but Week 01 only requires GET endpoints which I've demonstrated."

### Show Local Development (45 seconds)

In VS Code:
"Locally, I have:

- .env file with MongoDB connection (not in GitHub)
- npm start runs the server
- contacts.rest file for testing endpoints"

### Wrap Up (30 seconds)

"All requirements completed:
✓ Node project connects to MongoDB
✓ GET, POST, PUT, DELETE fully functional
✓ Professional Swagger documentation
✓ Deployed on Render
✓ Available on GitHub

Links to submit:

- GitHub: https://github.com/kendychae/cse341
- Render: https://cse341-al36.onrender.com/
- YouTube: [will be this video]"

## SIMPLIFIED Commands (if you want to show POST/PUT/DELETE)

**Easiest way**: Use Swagger UI at https://cse341-al36.onrender.com/docs

- Click on POST /contacts → "Try it out" → Fill in sample data → Execute
- Copy the returned ID
- Click on PUT /contacts/{id} → "Try it out" → Paste ID → Execute
- Click on DELETE /contacts/{id} → "Try it out" → Paste ID → Execute

**Alternative**: Just mention you implemented them but focus on GET for Week 01.

## Tips

- Speak clearly and at normal pace
- Show each endpoint working
- Don't spend too much time on setup/navigation
- Focus on demonstrating functionality
- Keep within 5-8 minute limit
