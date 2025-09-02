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

"Hi, I'm [your name]. This is my CSE 341 Contacts API project. I'll demonstrate all the requirements:

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

### Demonstrate POST (60 seconds)

In PowerShell, run:

```powershell
Invoke-RestMethod -Uri https://cse341-al36.onrender.com/contacts -Method Post -ContentType 'application/json' -Body (@{firstName='Demo'; lastName='User'; email='demo@example.com'; favoriteColor='Purple'; birthday='1995-05-15'} | ConvertTo-Json)
```

"POST creates a new contact. Here's the response with the new ID."

### Demonstrate PUT (60 seconds)

Using the ID from POST response:

```powershell
Invoke-RestMethod -Uri https://cse341-al36.onrender.com/contacts/[NEW_ID] -Method Put -ContentType 'application/json' -Body (@{favoriteColor='Orange'} | ConvertTo-Json)
```

"PUT updates the contact. The favoriteColor changed from Purple to Orange."

### Demonstrate DELETE (45 seconds)

```powershell
Invoke-RestMethod -Uri https://cse341-al36.onrender.com/contacts/[NEW_ID] -Method Delete
```

"DELETE removes the contact. Response shows success: true."

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

## Quick Test Commands for Video

Test POST:

```powershell
$new = Invoke-RestMethod -Uri https://cse341-al36.onrender.com/contacts -Method Post -ContentType 'application/json' -Body (@{firstName='Demo'; lastName='User'; email='demo@example.com'; favoriteColor='Purple'; birthday='1995-05-15'} | ConvertTo-Json)
$newId = $new._id
Write-Host "Created ID: $newId"
```

Test PUT:

```powershell
Invoke-RestMethod -Uri "https://cse341-al36.onrender.com/contacts/$newId" -Method Put -ContentType 'application/json' -Body (@{favoriteColor='Orange'} | ConvertTo-Json)
```

Test DELETE:

```powershell
Invoke-RestMethod -Uri "https://cse341-al36.onrender.com/contacts/$newId" -Method Delete
```

## Tips

- Speak clearly and at normal pace
- Show each endpoint working
- Don't spend too much time on setup/navigation
- Focus on demonstrating functionality
- Keep within 5-8 minute limit
