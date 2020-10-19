const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
	{
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
		totalduration: Number,
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

// WorkoutSchema.methods.findTotalDuration = function () {
// 	let result = 0;
// 	for (let i = 0; i < this.exercises.length; i++) {
// 		result = result + this.exercises[i].duration;
// 	}
// 	console.log('total Duration' + result);
// 	this.totalDuration = result;
// 	return this.totalDuration;
// };

WorkoutSchema.virtual('totalDuration').get(function () {
	let result = 0;
	for (let i = 0; i < this.exercises.length; i++) {
		result = result + this.exercises[i].duration;
	}
	console.log('total Duration' + result);
	this.totalduration = result;
	return this.totalduration;
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
