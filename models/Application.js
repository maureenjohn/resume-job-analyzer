const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  jobId: { type: String, required: true },
  jobTitle: String,
  company: String,
  status: {
    type: String,
    enum: ['viewed', 'saved', 'applied', 'screening', 'interview', 'offer', 'rejected', 'accepted'],
    default: 'viewed'
  },
  statusHistory: [{
    status: String,
    timestamp: { type: Date, default: Date.now }
  }],
  predictedResponseTime: Number,
  similarApplicationsStats: {
    totalSimilarApplications: Number,
    averageTimeToResponse: Number,
    successRate: Number
  },
  nextActions: [String],
  resumeVersion: { type: String, ref: 'ResumeVersion' },
  matchScore: Number,
  employerInteractions: [{
    type: { type: String, enum: ['viewed', 'downloaded', 'contacted'] },
    timestamp: Date
  }]
});

module.exports = mongoose.model('Application', ApplicationSchema);