const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addnewFriend,
  removeFriend
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUsers)

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:usertId
router.route('/:userId').get(getSingleUser).post(updateUser);

// /api/users/:usertId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/new
router.route('/:userId/friends/:friendId').post(addnewFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
