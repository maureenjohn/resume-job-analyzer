const mongoose = require('mongoose');

const ResumeVersionSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  baseResumeId: { type: String, required: true },
  versionName: String,
  versionType: {
    type: String,
    enum: ['skills-focused', 'experience-focused', 'keyword-optimized', 'achievement-focused', 'custom'],
    default: 'custom'
  },
  content: String,
  targetJob: {
    jobId: String,
    title: String,
    company: String
  },
  optimizationFocus: [String],
  created: { type: Date, default: Date.now },
  performance: {
    views: { type: Number, default: 0 },
    responses: { type: Number, default: 0 },
    interviews: { type: Number, default: 0 },
    offers: { type: Number, default: 0 },
    responseRate: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('ResumeVersion', ResumeVersionSchema);