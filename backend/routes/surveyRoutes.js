const express = require('express');
const { createSurvey, getSurveys, submitResponse } = require('../controllers/surveyController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createSurvey);
router.get('/', getSurveys);
router.post('/:id/submit', authMiddleware, submitResponse);

module.exports = router;