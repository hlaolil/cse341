# Deployment Instructions for Render

## 🚀 Deploy to Render

### 1. Create New Web Service

1. Go to [Render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `kendychae/cse341`

### 2. Configure Deployment Settings

```
Name: recipe-meal-planner-api
Region: Oregon (US West)
Branch: main
Root Directory: recipe-meal-planner
Runtime: Node
Build Command: npm install
Start Command: npm start
```

### 3. Environment Variables

Add these in Render dashboard:

```
MONGODB_URI = YOUR_MONGODB_CONNECTION_STRING_FROM_ATLAS
PORT = 10000
```

**Important:** Use your actual MongoDB Atlas connection string, not the example above.

### 4. Deploy

Click "Create Web Service" and wait for deployment to complete.

### 5. Test Your Deployed API

Your API will be available at:

- Main API: https://YOUR-APP-NAME.onrender.com
- Documentation: https://YOUR-APP-NAME.onrender.com/api-docs

## 📹 For Your Video

Use the deployed Render URL in your video demonstration, not localhost.

## 📝 Update Video Script

Replace `http://localhost:3001` with your actual Render URL in the video script.
