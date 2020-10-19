let mongoose = require('mongoose');
let db = require('../model');
require('dotenv').config();

// console.log(process.env);
// console.log(process.env.NODE_ENV);
console.log(process.env.DB_NAME);
console.log(process.env.DB_PASS);

mongoose.connect(
	// process.env.MONGODB_URI || 'mongodb://localhost/fitnesstrackerdb',
	`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.stmxy.mongodb.net/fitnesstrackerdb?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	}
);

let workoutSeed = [
	{
		day: new Date().setDate(new Date().getDate() - 10),
		exercises: [
			{
				type: 'resistance',
				name: 'Bicep Curl',
				duration: 20,
				weight: 100,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date().setDate(new Date().getDate() - 9),
		exercises: [
			{
				type: 'resistance',
				name: 'Lateral Pull',
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date().setDate(new Date().getDate() - 8),
		exercises: [
			{
				type: 'resistance',
				name: 'Push Press',
				duration: 25,
				weight: 185,
				reps: 8,
				sets: 4,
			},
		],
	},
	{
		day: new Date().setDate(new Date().getDate() - 7),
		exercises: [
			{
				type: 'cardio',
				name: 'Running',
				duration: 25,
				distance: 4,
			},
			{
				type: 'cardio',
				name: 'Swimming',
				duration: 30,
				distance: 4,
			},
		],
	},
	{
		day: new Date().setDate(new Date().getDate() - 6),
		exercises: [
			{
				type: 'resistance',
				name: 'Bench Press',
				duration: 20,
				weight: 285,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date().setDate(new Date().getDate() - 5),
		exercises: [
			{
				type: 'resistance',
				name: 'Bench Press',
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 4)),
		exercises: [
			{
				type: 'resistance',
				name: 'Quad Press',
				duration: 30,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 3)),
		exercises: [
			{
				type: 'resistance',
				name: 'Bench Press',
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 2)),
		exercises: [
			{
				type: 'resistance',
				name: 'Military Press',
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4,
			},
			{
				type: 'cardio',
				name: 'Swimming',
				duration: 30,
				distance: 4,
			},
		],
	},
];

// db.Exercise.deleteMany({})
// .then(db.Workout.deleteMany({}))
db.Workout.deleteMany({})
	.then(() => db.Workout.insertMany(workoutSeed))
	.then((data) => {
		console.log(data);
		console.log(`${data.length} records inserted!`);
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
