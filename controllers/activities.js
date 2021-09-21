const Activity = require('../models/Activity');

// @description Get all activities
// @route GET /api/v1/activities
// @access Public

exports.getActivities = async (req,res,next) => {
  try {
    const activities = await Activity.find();

    return res.status(200).json({
      success: true,
      count: activities.length,
      data: activities
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
}

// @description add activities
// @route POST /api/v1/activities
// @access Public

exports.addActivity = async (req,res,next) => {

  try {
    const { text, amount } = req.body;  
  
    const activity = await Activity.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: activity,
    })
    
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server error'
      })
    }
  }
}

// @description Delete activities
// @route DEL /api/v1/activities/:id
// @access Public

exports.deleteActivity = async (req,res,next) => {
  try {
    const activity = await Activity.findById(req.params.id);

    if(!activity) {
      return res.status(404).json({
        success: false,
        error: 'No activity found'
      });
    }

    await activity.remove();

    return res.status(200).json({
      success: true,
      data: {}
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
}