const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const videoRoutes = require('./videoRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/videos', videoRoutes);

module.exports = router;