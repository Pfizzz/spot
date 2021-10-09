const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./pet-routes');

router.use('/users', userRoutes);
router.use('/pet', postRoutes);

module.exports = router;
