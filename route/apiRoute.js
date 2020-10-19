// get the workout model
const Workout = require('../model/index')['Workout'];
// use the router
const express = require('express');
const router = express.Router();

// get all workout
router.get('/api/workouts', (req, res) => {
	Workout.find({})
		.then((dbWorkout) => {
			// test 1
			for (let i = 0; i < dbWorkout.length; i++) {
				const workout = new Workout(dbWorkout[i]);
				workout.findTotalDuration();
			}
			// test 1 end
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// add exercise
router.put('/api/workouts/:id', ({ body, params }, res) => {
	Workout.findOneAndUpdate(
		{ _id: params.id },
		{ $push: { exercises: body } },
		// 'new' will return the update document
		// 'runValidators' will ensure new exercises meet our schema requirements
		{ new: true, runValidators: true }
	)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});
module.exports = router;
