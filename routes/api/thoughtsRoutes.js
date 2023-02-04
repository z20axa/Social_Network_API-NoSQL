const router = require('express').Router();
const {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../../controllers/courseController.js');

// /api/courses
router.route('/').get(getCourses).post(createCourse);

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
