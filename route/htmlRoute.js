const express = require('express');
const router = express.Router();
const path = require('path');

// the route for the index.html (the landing page)
router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});
// the route for the stats.html
router.get('/stats', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/stats.html'));
});
// the route for the exercise.html
router.get('/exercise', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;
