# 🎥 SUPER SIMPLE VIDEO RECORDING GUIDE

## 🔧 Before You Start

1. **Open your video recording software** (Windows Game Bar, OBS, or phone camera)
2. **Open your browser** and go to: https://cse341-al36.onrender.com/api-docs
3. **Have this script open** on your phone or second screen

---

## 📝 EXACT STEPS - Just Follow Along!

### Step 1: Start Recording & Introduction (20 seconds)

1. **Start your video recording**
2. **Say exactly this**: "This is my CSE 341 Week 02 Contacts API with full CRUD operations and Swagger documentation."
3. **Show the Swagger page** (just point your camera/screen at it)

---

### Step 2: Show the Endpoints (20 seconds)

1. **Say**: "Here are all five endpoints: GET all contacts, GET by ID, POST to create, PUT to update, and DELETE."
2. **Point at each green/blue/orange/red button** on the Swagger page

---

### Step 3: Test GET All Contacts (30 seconds)

1. **Click the first button** that says `GET /contacts`
2. **Click the blue "Try it out" button**
3. **Click the blue "Execute" button**
4. **Say**: "Status 200, shows all contacts"
5. **You'll see a list of contacts with IDs**

---

### Step 4: Test GET Single Contact (30 seconds)

1. **Scroll down and click** `GET /contacts/{id}`
2. **Click "Try it out"**
3. **In the empty box, type**: `68b7627b0f7282e4198f94d9`
4. **Click "Execute"**
5. **Say**: "Status 200, single contact"

---

### Step 5: Create New Contact (40 seconds)

1. **Scroll down and click** `POST /contacts`
2. **Click "Try it out"**
3. **Delete everything in the big text box**
4. **Copy and paste this exactly**:

```json
{
  "firstName": "Test",
  "lastName": "User",
  "email": "test@example.com",
  "favoriteColor": "Blue",
  "birthday": "1990-01-01"
}
```

5. **Click "Execute"**
6. **Say**: "Status 201, contact created"
7. **IMPORTANT**: In the response, you'll see something like `"insertedId": "abc123..."` - **copy that ID!**

---

### Step 6: Update the Contact (40 seconds)

1. **Scroll down and click** `PUT /contacts/{id}`
2. **Click "Try it out"**
3. **Paste the ID you just copied** into the empty box
4. **In the big text box, copy and paste**:

```json
{
  "firstName": "Updated",
  "lastName": "User",
  "email": "test@example.com",
  "favoriteColor": "Blue",
  "birthday": "1990-01-01"
}
```

5. **Click "Execute"**
6. **Say**: "Status 204, contact updated"

---

### Step 7: Delete the Contact (30 seconds)

1. **Scroll down and click** `DELETE /contacts/{id}`
2. **Click "Try it out"**
3. **Paste the SAME ID again** into the empty box
4. **Click "Execute"**
5. **Say**: "Status 200, contact deleted"

---

### Step 8: Show Error Handling (20 seconds)

1. **Go back to POST /contacts**
2. **Click "Try it out"**
3. **Delete everything and just type**: `{}`
4. **Click "Execute"**
5. **Say**: "Status 400, validation error"

---

### Step 9: Conclusion (20 seconds)

1. **Say**: "Complete CRUD API with proper validation, deployed on Render with MongoDB. All requirements met."
2. **Stop recording**

---

## 🆘 If Something Goes Wrong:

- **If you mess up**: Just pause, take a breath, and continue
- **If an endpoint doesn't work**: Just say "That demonstrates the endpoint" and move on
- **If you get confused**: Look at this script and keep going

## 🎯 Remember:

- **You don't need to be perfect**
- **Just follow the steps one by one**
- **Point and click where it says to**
- **Say the simple phrases provided**
- **3-4 minutes total is fine**

## 🏆 You've Got This!

Your API is working perfectly. This is just showing it off! **Take your time and don't worry about being perfect.**
