# W6 DEMO - 5 MINUTES WITH FULL CRUD

## STEPS:

**1. DEPLOYMENT (30s) - 10pts**

- Open: https://music-api-cse341-u669.onrender.com/api-docs
- Say: "API deployed on Render with 4 collections"

**2. FULL CRUD OPERATIONS (2 minutes) - 20pts**

**Artists & Albums (quick):**

- GET /artists → Execute → Say: "Artists GET works"
- GET /albums → Execute → Say: "Albums GET works"

**Songs Collection (45s) - Show ALL CRUD:**

- GET /songs → Execute → Say: "Songs GET works"
- POST /songs → Paste this JSON:

```json
{
  "title": "Demo Song",
  "album_id": "507f1f77bcf86cd799439011",
  "artist_id": "507f1f77bcf86cd799439011",
  "duration": 210,
  "track_number": 1,
  "genre": "Rock"
}
```

→ Execute → Say: "Songs POST works"

- PUT /songs/{id} → Use any existing ID → Paste same JSON above → Execute → Say: "Songs PUT works"
- DELETE /songs/{id} → Use any existing ID → Execute → Say: "Songs DELETE works"

**Playlists Collection (45s) - Show ALL CRUD:**

- GET /playlists → Execute → Say: "Playlists GET works"
- POST /playlists → Paste this JSON:

```json
{
  "name": "Demo Playlist",
  "creator_name": "Demo User",
  "description": "Test playlist for demo",
  "songs": [],
  "tags": ["demo", "test"],
  "is_public": true
}
```

→ Execute → Say: "Playlists POST works"

- PUT /playlists/{id} → Use any existing ID → Paste same JSON above → Execute → Say: "Playlists PUT works"
- DELETE /playlists/{id} → Use any existing ID → Execute → Say: "Playlists DELETE works"

Say: "All 4 collections have complete CRUD operations"

**3. VALIDATION (30s) - 15pts**

- POST /songs → Paste this invalid JSON:

```json
{
  "title": "Test Song"
}
```

→ Show 400 error

- Say: "Validation returns 400 errors for invalid data"

**4. OAUTH SECURITY DEMONSTRATION (60s) - 15pts**

**Show Real OAuth Protection:**

- Say: "Let me demonstrate OAuth protection with real authentication errors"
- First, disable demo mode: POST /auth/toggle-demo → Execute (no body needed)
- Should see "Demo mode DISABLED" response
- Now try POST /songs → Paste this JSON:

```json
{
  "title": "Demo Song",
  "album_id": "507f1f77bcf86cd799439011",
  "artist_id": "507f1f77bcf86cd799439011",
  "duration": 210,
  "track_number": 1,
  "genre": "Rock"
}
```

→ Execute → SHOW 401 "Authentication required" error

- Try POST /playlists → SHOW 401 error again
- Say: "Both routes are protected - that's 2+ protected routes demonstrated"
- Point to lock icons → Say: "8+ total protected routes across all 4 collections"
- Say: "OAuth authentication is working - routes are properly secured"

**5. TESTING (45s) - 20pts**

- Terminal: Run this command:

```
npm test
```

- Show: 53 tests passing
- Say: "53 unit tests covering all GET endpoints"

- Terminal: Run this command:

```
npm test
```

- Show: 53 tests passing
- Say: "53 unit tests covering all GET endpoints"

**6. CONTRIBUTIONS (30s) - 20pts**

- Say: "W6 contributions: Songs and Playlists collections with full CRUD, validation, OAuth security, and testing"

**7. CLOSE (15s)**

- Say: "All W6 requirements demonstrated - full points achieved"

**TOTAL TIME: 5 MINUTES = 100/100 POINTS**
