const { User } = require("../models")

const newNote = async (req, res) => {
	const { category, title, content } = req.body

	try {
		const userId = req.user._id

		const note = {
			category,
			note: { title, content },
		}

		const updatedUser = await User.findByIdAndUpdate(
			userId,
			{ $push: { notes: note } },
			{ new: true }
		)

		res.send(updatedUser)
	} catch (error) {
		console.log(error)
		res.status(500).send("Error occurred while adding a new note")
	}
}

module.exports = { newNote }
