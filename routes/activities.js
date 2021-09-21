const express = require('express');
const router = express.Router();
const { getActivities, addActivity, deleteActivity } = require('../controllers/activities');


router
  .route('/')
  .get(getActivities)
  .post(addActivity);

router
  .route('/:id')
  .delete(deleteActivity)

module.exports = router;