# Week 02 Video Demo Script - Contacts API CRUD Operations

## Assignment Overview

**CSE 341 Week 02 Project**: Complete CRUD Operations with Swagger Documentation
**Live API**: https://cse341-al36.onrender.com/
**Swagger Documentation**: https://cse341-al36.onrender.com/api-docs
**GitHub Repository**: https://github.com/kendychae/cse341

---

## Simple Video Script (3-4 minutes)

### 1. Introduction (20 seconds)

**Say**: "This is my CSE 341 Week 02 Contacts API with full CRUD operations and Swagger documentation."

**Show**: Open https://cse341-al36.onrender.com/api-docs

---

### 2. Show All Endpoints (20 seconds)

**Say**: "Here are all five endpoints: GET all contacts, GET by ID, POST to create, PUT to update, and DELETE."

**Show**: Point to each endpoint in Swagger UI

---

### 3. GET Operations (30 seconds)

**Demonstrate**:

1. Click `GET /contacts` → Try it out → Execute
2. **Say**: "Status 200, shows all contacts"
3. **Copy this existing ID**: `68b7627b0f7282e4198f94d9` (or copy any \_id from the response)
4. Click `GET /contacts/{id}` → Try it out
5. **Paste this ID**: `68b7627b0f7282e4198f94d9` into the "id" parameter field
6. Execute → **Say**: "Status 200, single contact"

---

### 4. CREATE (40 seconds)

**Demonstrate**:

1. Click `POST /contacts` → Try it out
2. Use this JSON:

```json
{
  "firstName": "Test",
  "lastName": "User",
  "email": "test@example.com",
  "favoriteColor": "Blue",
  "birthday": "1990-01-01"
}
```

3. Execute → **Say**: "Status 201, contact created"
4. **IMPORTANT**: In the response, you'll see "insertedId" - **copy this new ID**

---

### 5. UPDATE (40 seconds)

**Demonstrate**:

1. Click `PUT /contacts/{id}` → Try it out
2. **Paste the NEW contact ID** (from step 4) into the "id" parameter field
3. In the JSON body, change firstName to "Updated":

```json
{
  "firstName": "Updated",
  "lastName": "User",
  "email": "test@example.com",
  "favoriteColor": "Blue",
  "birthday": "1990-01-01"
}
```

4. Execute → **Say**: "Status 204, contact updated"

---

### 6. DELETE (30 seconds)

**Demonstrate**:

1. Click `DELETE /contacts/{id}` → Try it out
2. **Use the SAME contact ID** (the one you just updated)
3. Execute → **Say**: "Status 200, contact deleted"

---

### 7. Error Demo (20 seconds)

**Demonstrate**:

1. Try POST with empty JSON `{}` → **Say**: "Status 400, validation error"
2. Try GET with fake ID: `123456789012345678901234` → **Say**: "Status 404, not found"

---

## 📋 **Copy-Paste Cheat Sheet**

**For GET by ID**: `68b7627b0f7282e4198f94d9`

**For POST JSON**:

```json
{
  "firstName": "Test",
  "lastName": "User",
  "email": "test@example.com",
  "favoriteColor": "Blue",
  "birthday": "1990-01-01"
}
```

**For PUT JSON** (after getting new ID from POST):

```json
{
  "firstName": "Updated",
  "lastName": "User",
  "email": "test@example.com",
  "favoriteColor": "Blue",
  "birthday": "1990-01-01"
}
```

**For Error Demo**:

- Empty JSON: `{}`
- Fake ID: `123456789012345678901234`

---

### 8. Conclusion (20 seconds)

**Say**: "Complete CRUD API with proper validation, deployed on Render with MongoDB. All requirements met."

**Show**: Display the URLs one final time.

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

**3-4 minutes total** - Quick, efficient demonstration of all CRUD operations

## Quick Reference

- **GET /contacts** → Status 200 (all contacts)
- **GET /contacts/{id}** → Status 200 (single contact)
- **POST /contacts** → Status 201 (created)
- **PUT /contacts/{id}** → Status 204 (updated)
- **DELETE /contacts/{id}** → Status 200 (deleted)
- **Error handling** → Status 400/404
