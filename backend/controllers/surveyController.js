const Survey = require('../models/Survey');
const Response = require('../models/Response');

exports.createSurvey = async (req, res) => {
    try {
        const { title, description, questions } = req.body;
        const survey = await Survey.create({ title, description, questions, createdBy: req.user.id });
        res.status(201).json(survey);
    } catch (error) {
        res.status(400).json({ error: 'Error creating survey' });
    }
};

exports.getSurveys = async (req, res) => {
    try {
        const surveys = await Survey.find();
        res.json(surveys);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching surveys' });
    }
};

exports.submitResponse = async (req, res) => {
    try {
        const { id } = req.params;
        const { answers } = req.body;
        const response = await Response.create({ survey: id, user: req.user.id, answers });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error submitting response' });
    }
};