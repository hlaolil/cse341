const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configure Google OAuth strategy
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

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  
  // Actually block access - this is what makes routes protected
  return res.status(401).json({
    error: 'Authentication required',
    message: 'You must be logged in to access this resource',
    loginUrl: '/auth/google'
  });
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
  mockAuth
};
