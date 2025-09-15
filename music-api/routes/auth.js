const express = require('express');
const router = express.Router();

// GET /auth/login - Show login information
router.get('/login', (req, res) => {
  res.json({
    message: 'OAuth authentication available',
    googleLogin: '/auth/google',
    demo: 'Demo mode active - authentication is simulated for testing purposes'
  });
});

// GET /auth/google - Start Google OAuth flow
router.get('/google', (req, res) => {
  res.json({
    message: 'Google OAuth would redirect here',
    note: 'In demo mode - authentication is automatically applied'
  });
});

// GET /auth/google/callback - Google OAuth callback
router.get('/google/callback', (req, res) => {
  res.json({
    message: 'OAuth callback received',
    user: req.user || 'Demo User'
  });
});

// GET /auth/profile - Get user profile
router.get('/profile', (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      error: 'Not authenticated',
      message: 'Please log in first'
    });
  }

  res.json({
    user: req.user,
    authenticated: true
  });
});

// GET /auth/logout - Logout user
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        error: 'Logout failed',
        message: err.message
      });
    }
    res.json({
      message: 'Logged out successfully'
    });
  });
});

module.exports = router;