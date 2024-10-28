const mongoose = require('mongoose');
const responseSchema = new mongoose.Schema({
    survey: { type: mongoose.Schema.Types.ObjectId, ref: 'Survey' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    answers: [{ question: String, answer: String }],
});
module.exports = mongoose.model('Response', responseSchema);