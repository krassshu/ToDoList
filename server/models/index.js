const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
	category: { type: String, required: true },
	note: {
		title: { type: String, required: true },
		content: { type: String, required: true },
	},
})

const cooperationSchema = new mongoose.Schema({
	notesCategory: { type: String, required: true },
	userId: { type: String, required: true },
})

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	notes: [noteSchema],
	cooperation: [cooperationSchema],
})

const User = mongoose.model("User", userSchema)

module.exports = { User }
