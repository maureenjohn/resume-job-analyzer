const mongoose = require('mongoose');

const ResumeEngagementSchema = new mongoose.Schema({
  resumeVersionId: { type: String, required: true, index: true },
  employerId: String,
  company: String,
  engagementSessions: [{
    sessionId: String,
    timestamp: { type: Date, default: Date.now },
    duration: Number, // in seconds
    sectionFocus: [{
      section: String,
      duration: Number, // in seconds
      hovered: Boolean,
      clicked: Boolean
    }]
  }],
  overallEngagement: {
    totalViewTime: Number, // in seconds
    averageViewTime: Number, // in seconds
    sectionHeatmap: {
      type: Map,
      of: Number
    }
  }
});

module.exports = mongoose.model('ResumeEngagement', ResumeEngagementSchema);