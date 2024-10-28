const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    text: String,
    type: { type: String, enum: ['text', 'multiple', 'radio'], required: true },
    options: [String],  // Для вопросов с множественным выбором или радиокнопками
});
module.exports = mongoose.model('Question', questionSchema);