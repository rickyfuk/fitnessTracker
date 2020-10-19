// get the workout model
const Workout = require('../model/index')['Workout'];
// use the router
const express = require('express');
const router = express.Router();

// get all workout
router.get('/api/workouts', (req, res) => {
	Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// add exercise
router.put('/api/workouts/:id', ({ body, params }, res) => {});
module.exports = router;
