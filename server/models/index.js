const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
	cooperation: [{ type: mongoose.Schema.Types.ObjectID, ref: "Cooperation" }],
})

const noteSchema = new mongoose.Schema({
	category: { type: String, required: true, unique: true },
	title: { type: String, required: true },
	content: { type: String, required: true },
})

const cooperationSchema = new mongoose.Schema({
	notesId: { type: String, required: true },
	userId: { type: String, required: true },
})

const User = mongoose.model("User", userSchema)
const Note = mongoose.model("Note", noteSchema)
const Cooperation = mongoose.model("Cooperation", cooperationSchema)

module.exports = { User, Note, Cooperation }
