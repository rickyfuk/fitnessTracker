const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now(),
	},
	exercises: [
		{
			// type: Schema.Types.ObjectId,
			// ref: 'Exercise',
			workoutType: String,
			name: String,
			distance: Number,
			duration: Number,
			weight: Number,
			sets: Number,
			reps: Number,
		},
	],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
