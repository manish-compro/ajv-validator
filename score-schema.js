const scoreRequestSchema = {
    type: 'object',
    properties: {
      scoreGiven: { type: 'number' },
      scoreMaximum: { type: 'number' },
      userId: { type: 'string' },
      comment: { type: 'string' },
      activityProgress: {
        type: 'string',
        enum: [
          'Initialized',
          'Started',
          'InProgress',
          'Submitted',
          'Completed'
        ]
      },
      gradingProgress: {
        type: 'string',
        enum: [
          'FullyGraded',
          'Pending',
          'PendingManual',
          'Failed',
          'NotReady'
        ]
      },
      timestamp: {
        type: 'string',
        format: 'date-time'
      }
    },
    required: ['userId', 'activityProgress', 'gradingProgress', 'timestamp'],
    dependencies: {
      scoreGiven: ['scoreMaximum']
    },
    errorMessage: {
      properties: {
        scoreGiven: 'Value of scoreGiven should be a number',
        scoreMaximum: 'Value of scoreMaximum should be a number',
        activityProgress: 'Value of activityProgress parameter is not valid',
        gradingProgress: 'Value of gradingProgress parameter is not valid',
        timestamp: 'Value of timestamp parameter should be in ISO 8601 format'
      },
      required: {
        userId: 'Missing required parameter: userId',
        activityProgress: 'Missing required parameter: activityProgress',
        gradingProgress: 'Missing required parameter: gradingProgress',
        timestamp: 'Missing required parameter: timestamp'
      },
      dependencies: {
        scoreGiven: 'scoreMaximum parameter should be present when scoreGiven is provided'
      }
    }
  };

  module.exports = scoreRequestSchema;
