# Contacts API (CSE 341 Week 01)

This small project provides a Contacts API backed by MongoDB. It satisfies the Week 01 project requirements: connect to MongoDB, import data, implement GET routes, and prepare for deployment.

Getting started (local)

1. Install dependencies (already done in this repo):

   npm install

2. Create a `.env` file in the project root with your MongoDB connection string:

   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xuqgkqh.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0

   Replace `<username>` and `<password>` with your cluster credentials. If your password contains special characters, URL-encode it. Example to encode in PowerShell:

   node -e "console.log(encodeURIComponent('yourPasswordHere'))"

3. Seed sample contacts (optional) and then start the server:

   node scripts/seed.js
   npm start

4. Test endpoints using the provided `contacts.rest` or a REST client:

   GET http://localhost:3000/contacts
   GET http://localhost:3000/contacts/<id>

Deploying to Render (summary)

1. Push repo to GitHub.
2. Create a new Web Service on Render, connect your GitHub repo and pick the `main` branch.
3. Under Environment > Environment Variables add `MONGODB_URI` with the same connection string (do not commit `.env` to GitHub).
4. Set the Build Command to `npm install` and Start Command to `npm start`.
5. Deploy and test the public URL.

Files of interest

- `server.js` - Express entry point
- `routes/contacts.js` - GET/all and GET/:id routes
- `db/conn.js` - database connection helper
- `scripts/seed.js` - small helper to insert example contacts
- `contacts.rest` - example requests you can use in VS Code REST client
