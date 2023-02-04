const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
