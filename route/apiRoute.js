// get the workout model
const Workout = require('../model/index')['Workout'];
// use the router
const express = require('express');
const { db } = require('../model/workout');
const router = express.Router();

// get all workout
router.get('/api/workouts', (req, res) => {
	let resultWithTotalDuration = [];
	var date = new Date();
	// minus 30 day
	date.setDate(date.getDate() - 30);
	Workout.find({})
		.where({ day: { $gt: date } })
		.then((dbWorkout) => {
			// test 1 - instance method
			for (let i = 0; i < dbWorkout.length; i++) {
				const workout = new Workout(dbWorkout[i]);
				workout.findTotalDuration();
				resultWithTotalDuration.push(workout);
			}
			console.log(resultWithTotalDuration);
			res.json(resultWithTotalDuration);
			// test 1 end
			// test 2 - vistual method
			// res.json(dbWorkout);
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

// add a new day for the workout
router.post('/api/workouts', (req, res) => {
	Workout.create({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
