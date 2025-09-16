const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configure Google OAuth strategy
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  }, (accessToken, refreshToken, profile, done) => {
    // In a real app, you would save user to database
    const user = {
      id: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos[0].value
    };
    return done(null, user);
  }));
} else {
  console.warn('⚠️  Google OAuth not configured - missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET');
}

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Global demo mode state (can be toggled at runtime)
let isDemoMode = false; // Start with demo mode OFF by default

// Function to toggle demo mode
const toggleDemoMode = (enable = null) => {
  try {
    if (enable !== null) {
      isDemoMode = enable;
    } else {
      isDemoMode = !isDemoMode;
    }
    console.log(`🔄 Demo mode ${isDemoMode ? 'ENABLED' : 'DISABLED'}`);
    return isDemoMode;
  } catch (error) {
    console.error('Error toggling demo mode:', error);
    return isDemoMode;
  }
};

// Get current demo mode status
const getDemoMode = () => {
  try {
    return isDemoMode;
  } catch (error) {
    console.error('Error getting demo mode:', error);
    return false;
  }
};

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
  try {
    // If demo mode is enabled, bypass real authentication
    if (isDemoMode) {
      // Apply mock user if not already authenticated
      if (!req.user) {
        req.user = {
          id: 'demo-user-12345',
          name: 'Demo User',
          email: 'demo@cse341.com',
          photo: 'https://via.placeholder.com/150'
        };
      }
      return next();
    }
    
    // Real authentication check
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    }
    
    // Block access - routes are actually protected
    return res.status(401).json({
      error: 'Authentication required',
      message: 'You must be logged in to access this resource',
      loginUrl: '/auth/google',
      demoMode: false
    });
  } catch (error) {
    console.error('Error in requireAuth middleware:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Authentication middleware error'
    });
  }
};

// Mock authentication for demo (when OAuth not configured)
const mockAuth = (req, res, next) => {
  if (!req.user) {
    req.user = {
      id: 'demo-user',
      name: 'Demo User',
      email: 'demo@example.com'
    };
  }
  next();
};

module.exports = {
  passport,
  requireAuth,
  mockAuth,
  toggleDemoMode,
  getDemoMode
};
