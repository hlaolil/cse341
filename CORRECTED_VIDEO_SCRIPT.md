# 🔥 CORRECTED VIDEO SCRIPT - FIXES PROFESSOR FEEDBACK

## ⚠️ ADDRESSES: "Video missing PUT and DELETE requests"

---

## 🎬 **NEW 5-MINUTE SCRIPT - CLEAR PUT & DELETE DEMOS**

### **⏱️ 0:00-0:15 INTRO (15 seconds)**

1. **Go to**: `https://cse341-al36.onrender.com/api-docs`
2. **Start recording**
3. **Say**: "CSE 341 Week 02 API demonstrating all CRUD operations including PUT and DELETE"

### **⏱️ 0:15-0:45 GET OPERATIONS (30 seconds)**

1. **Click** `GET /contacts` → Try it out → Execute
2. **Say**: "GET all contacts - Status 200"
3. **Click** `GET /contacts/{id}` → Try it out
4. **Paste**: `68b7627b0f7282e4198f94d9` → Execute
5. **Say**: "GET single contact - Status 200"

### **⏱️ 0:45-1:30 CREATE FOR PUT/DELETE DEMO (45 seconds)**

1. **Click** `POST /contacts` → Try it out
2. **Say**: "Creating contact for PUT and DELETE demonstration"
3. **Paste JSON**:

```json
{
  "firstName": "VideoDemo",
  "lastName": "Test",
  "email": "demo@video.com",
  "favoriteColor": "Green",
  "birthday": "1992-05-15"
}
```

4. **Execute** → **Say**: "POST successful - Status 201"
5. **COPY the insertedId** (highlight and copy the long ID)
6. **Say**: "Contact created, ID copied for PUT and DELETE operations"

### **⏱️ 1:30-2:30 PUT DEMONSTRATION (60 seconds)**

1. **Click** `PUT /contacts/{id}` → Try it out
2. **Say**: "Demonstrating PUT update operation"
3. **Paste the copied ID** into the id parameter field
4. **Paste updated JSON**:

```json
{
  "firstName": "UPDATED",
  "lastName": "Test",
  "email": "updated@video.com",
  "favoriteColor": "Purple",
  "birthday": "1992-05-15"
}
```

5. **Execute** → **Say**: "PUT executed - Status 204 No Content indicates success"
6. **Say**: "Contact updated in database"

### **⏱️ 2:30-3:15 VERIFY PUT WORKED (45 seconds)**

1. **Go back to** `GET /contacts/{id}` → Try it out
2. **Paste the SAME ID** → Execute
3. **Say**: "Verifying PUT worked - firstName changed from 'VideoDemo' to 'UPDATED'"
4. **Point to the response** showing the updated data
5. **Say**: "PUT operation successfully modified the database"

### **⏱️ 3:15-4:00 DELETE DEMONSTRATION (45 seconds)**

1. **Click** `DELETE /contacts/{id}` → Try it out
2. **Say**: "Demonstrating DELETE operation"
3. **Paste the SAME ID** → Execute
4. **Say**: "DELETE executed - Status 200 indicates successful deletion"
5. **Say**: "Contact removed from database"

### **⏱️ 4:00-4:45 VERIFY DELETE WORKED (45 seconds)**

1. **Try GET with the same ID** → Execute
2. **Say**: "Verifying DELETE worked - Status 404 means contact not found"
3. **Say**: "Contact successfully deleted from database"
4. **Optional**: Show GET all contacts to confirm count decreased

### **⏱️ 4:45-5:00 CONCLUSION (15 seconds)**

**Say**: "All CRUD operations demonstrated: POST creates, GET reads, PUT updates, DELETE removes. All working on deployed Render API."
**Stop recording**

---

## 📋 **EXACT COPY-PASTE VALUES**

**URL**: `https://cse341-al36.onrender.com/api-docs`

**GET ID**: `68b7627b0f7282e4198f94d9`

**POST JSON**:

```
{"firstName":"VideoDemo","lastName":"Test","email":"demo@video.com","favoriteColor":"Green","birthday":"1992-05-15"}
```

**PUT JSON**:

```
{"firstName":"UPDATED","lastName":"Test","email":"updated@video.com","favoriteColor":"Purple","birthday":"1992-05-15"}
```

---

## 🎯 **WHY THIS FIXES THE FEEDBACK:**

### ✅ **PUT Operation Clearly Demonstrated:**

- Shows the PUT request being executed
- Shows Status 204 response
- Verifies the update by getting the contact again
- Shows actual data change (VideoDemo → UPDATED)

### ✅ **DELETE Operation Clearly Demonstrated:**

- Shows the DELETE request being executed
- Shows Status 200 response
- Verifies deletion by showing 404 when trying to get the deleted contact

### ✅ **Uses Same Contact for Both:**

- Creates one contact with POST
- Updates it with PUT
- Deletes it with DELETE
- Shows complete lifecycle

### ✅ **Clear Status Codes:**

- POST: 201 (Created)
- GET: 200 (OK)
- PUT: 204 (No Content)
- DELETE: 200 (OK)
- GET deleted: 404 (Not Found)

## 🏆 **PROFESSOR WILL SEE:**

1. **Clear PUT demonstration** with before/after verification
2. **Clear DELETE demonstration** with verification
3. **Proper status codes** for all operations
4. **Database interaction** (create → update → delete)
5. **Deployed Render API** (not localhost)

**This directly addresses the missing PUT and DELETE feedback!** 🎯
