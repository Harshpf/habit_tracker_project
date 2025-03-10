const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String },
  // completed: { type: Boolean, default: false },
},{timestamps:true});

module.exports = mongoose.model('Habit', habitSchema);