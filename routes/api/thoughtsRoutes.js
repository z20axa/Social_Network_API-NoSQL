const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addnewReaction,
  removeReaction
} = require('../../controllers/thoughtsController.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

  // api.thoughts
  // get all
  // get single id
  // post
  // put
  // delete 

  // api/thougths/:thoughtId/reactions/:reactionId
  // post
  // delete

module.exports = router;
