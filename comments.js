// Create web server

// Import modules
const express = require('express');
const router = express.Router();



// Import controllers
const commentsController = require('../controllers/commentsController');

// Import middlewares
const auth = require('../middlewares/auth');

