// Exporting an object containing all of our models
// **Note: 1st letter in the key must in capt letter for matching the module export from other file

module.exports = {
	Exercise: require('./exercise'),
	Workout: require('./workout'),
};
