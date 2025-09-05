const express = require('express');
const router = express.Router();
const { passport } = require('../middleware/auth');

/**
 * @swagger
 * /auth/login:
 *   get:
 *     tags: [Authentication]
 *     summary: Initiate login process
 *     description: Redirects to Google OAuth login or shows demo login info
 *     responses:
 *       200:
 *         description: Login information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "OAuth login available at /auth/google"
 *                 demo:
 *                   type: string
 *                   example: "Demo mode active - authentication simulated"
 */
router.get('/login', (req, res) => {
  res.json({
    message: 'OAuth authentication available',
    googleLogin: '/auth/google',
    demo: 'Demo mode active - authentication is simulated for video demonstration',
    user: req.user || null
  });
});

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     tags: [Authentication]
 *     summary: Logout user
 *     description: Logs out the current user and destroys session
 *     responses:
 *       200:
 *         description: Successfully logged out
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged out successfully"
 */
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ message: 'Logged out successfully' });
  });
});

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     tags: [Authentication]
 *     summary: Get current user profile
 *     description: Returns the profile of the currently authenticated user
 *     security:
 *       - OAuth: []
 *     responses:
 *       200:
 *         description: User profile information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                 authenticated:
 *                   type: boolean
 *       401:
 *         description: Not authenticated
 */
router.get('/profile', (req, res) => {
  if (req.isAuthenticated() || req.user) {
    res.json({
      user: req.user,
      authenticated: true,
      demo: 'Demo mode - OAuth authentication simulated'
    });
  } else {
    res.status(401).json({
      error: 'Not authenticated',
      message: 'Please login to access profile'
    });
  }
});

// Google OAuth routes
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (req, res) => {
    res.redirect('/auth/profile');
  }
);

module.exports = router;
