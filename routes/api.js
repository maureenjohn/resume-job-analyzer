const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// These routes are mostly placeholder as the functionality
// is currently implemented directly in netflixEffect.js

// Application routes
router.post('/applications/track', applicationController.trackApplication);
router.get('/applications/:userId', applicationController.getApplications);
router.get('/applications/:id', applicationController.getApplicationById);
router.put('/applications/:id', applicationController.updateApplication);

module.exports = router;