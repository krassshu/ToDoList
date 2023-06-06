const bcrypt = require("bcrypt")
const { User } = require("../models")

const registration = async (req, res) => {
	const { username, password, email } = req.body

	let user = await User.findOne({ username })
	if (user) return res.status(400).send("That user is already register.")

	let mail = await User.findOne({ email })
	if (mail) return res.status(400).send("This e-mail is already used.")

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	user = new User({ username, email, password: hashedPassword })
	await user.save()
	res.send({
		message: "Registration succesful",
		username: user.username,
		email: user.email,
	})
}

module.exports = { registration }
