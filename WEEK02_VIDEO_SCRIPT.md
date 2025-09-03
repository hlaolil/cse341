# Week 02 Video Demo Script - Contacts API CRUD Operations

## Assignment Overview

**CSE 341 Week 02 Project**: Complete CRUD Operations with Swagger Documentation
**Live API**: https://cse341-al36.onrender.com/
**Swagger Documentation**: https://cse341-al36.onrender.com/api-docs
**GitHub Repository**: https://github.com/kendychae/cse341

---

## Video Script (5-7 minutes)

### 1. Introduction (30 seconds)

**Say**: "Hello! This is my demonstration of the CSE 341 Week 02 Contacts API project. I've implemented a complete REST API with full CRUD operations - Create, Read, Update, and Delete - deployed on Render with comprehensive Swagger documentation."

**Show**:

- Open browser to https://cse341-al36.onrender.com/api-docs
- Display the Swagger UI interface

---

### 2. Swagger Documentation Overview (1 minute)

**Say**: "Let me show you the API documentation. As you can see, we have all four CRUD endpoints implemented with proper HTTP methods and status codes."

**Demonstrate**:

1. Scroll through the Swagger interface
2. Point out the endpoints:
   - `GET /contacts` - Retrieve all contacts
   - `GET /contacts/{id}` - Retrieve single contact
   - `POST /contacts` - Create new contact
   - `PUT /contacts/{id}` - Update existing contact
   - `DELETE /contacts/{id}` - Delete contact

**Say**: "Each endpoint has detailed schemas showing the required fields and example responses. Notice the Contact schema requires firstName, lastName, email, favoriteColor, and birthday."

---

### 3. READ Operations (1 minute)

**Say**: "Let's start with the READ operations. First, I'll get all contacts."

**Demonstrate**:

1. Click on `GET /contacts`
2. Click "Try it out"
3. Click "Execute"
4. Show the response with status 200 and the array of contacts

**Say**: "Great! We can see all contacts in the database. Now let me get a specific contact by ID."

**Demonstrate**:

1. Copy an ID from the previous response
2. Click on `GET /contacts/{id}`
3. Click "Try it out"
4. Paste the ID in the parameter field
5. Click "Execute"
6. Show the single contact response

---

### 4. CREATE Operation (1.5 minutes)

**Say**: "Now let's create a new contact using the POST endpoint. All five fields are required for Week 02."

**Demonstrate**:

1. Click on `POST /contacts`
2. Click "Try it out"
3. Show the example JSON structure
4. Modify the example with new data:

```json
{
  "firstName": "Demo",
  "lastName": "User",
  "email": "demo.user@example.com",
  "favoriteColor": "Orange",
  "birthday": "1992-03-15"
}
```

5. Click "Execute"
6. Show the 201 status code and the inserted ID

**Say**: "Perfect! Status 201 indicates successful creation, and we get back the new contact's ID."

---

### 5. UPDATE Operation (1.5 minutes)

**Say**: "Let's update this contact we just created using the PUT endpoint."

**Demonstrate**:

1. Copy the new contact's ID from the previous response
2. Click on `PUT /contacts/{id}`
3. Click "Try it out"
4. Paste the ID in the parameter field
5. Update the JSON with new information:

```json
{
  "firstName": "Demo Updated",
  "lastName": "User Updated",
  "email": "demo.updated@example.com",
  "favoriteColor": "Magenta",
  "birthday": "1992-03-15"
}
```

6. Click "Execute"
7. Show the 204 status code (No Content)

**Say**: "Status 204 means the update was successful with no content returned, which is the proper response for PUT operations."

**Verify**:

1. Go back to `GET /contacts/{id}`
2. Use the same ID to verify the changes
3. Show the updated contact data

---

### 6. DELETE Operation (1 minute)

**Say**: "Finally, let's delete this test contact using the DELETE endpoint."

**Demonstrate**:

1. Click on `DELETE /contacts/{id}`
2. Click "Try it out"
3. Use the same contact ID
4. Click "Execute"
5. Show the 200 status code

**Say**: "Status 200 confirms successful deletion."

**Verify**:

1. Try to GET the same contact ID
2. Show the 404 error response
3. Or get all contacts to show the count decreased

---

### 7. Error Handling Demo (30 seconds)

**Say**: "Let me demonstrate proper error handling."

**Demonstrate**:

1. Try to POST a contact missing required fields
2. Show the 400 Bad Request response
3. Try to GET a non-existent contact ID
4. Show the 404 Not Found response

---

### 8. Technical Implementation Summary (30 seconds)

**Say**: "This API is built with Node.js and Express, connected to MongoDB Atlas, and deployed on Render. The code includes proper validation, error handling, and follows REST conventions with appropriate HTTP status codes."

**Show**: Briefly mention the key features:

- All CRUD operations implemented
- Proper HTTP status codes (200, 201, 204, 400, 404, 500)
- Required field validation
- MongoDB integration
- Professional Swagger documentation
- Live deployment on Render

---

### 9. Conclusion (30 seconds)

**Say**: "This completes the Week 02 assignment demonstrating a fully functional REST API with comprehensive CRUD operations, proper documentation, and professional deployment. All endpoints are working correctly with appropriate validation and error handling."

**Final Show**: Display the GitHub repository and deployed API URLs one more time.

---

## Testing Checklist

Before recording, verify:

- ✅ All endpoints work in Swagger UI
- ✅ POST validates all required fields
- ✅ PUT returns 204 status
- ✅ DELETE returns 200 status
- ✅ Error handling works (400, 404)
- ✅ GET operations return proper data
- ✅ Swagger documentation is complete

## Key URLs for Video

- **API Base**: https://cse341-al36.onrender.com/
- **Swagger Docs**: https://cse341-al36.onrender.com/api-docs
- **GitHub Repo**: https://github.com/kendychae/cse341

## Video Duration Target

5-7 minutes total, ensuring all CRUD operations are demonstrated with proper status codes and validation.
