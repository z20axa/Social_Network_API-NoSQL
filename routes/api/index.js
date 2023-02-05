// pacakges and module imports
const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

// api/users
router.use('/users', userRoutes);

// api/thoughts
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
