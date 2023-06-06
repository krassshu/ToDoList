const jwt = require("jsonwebtoken")
const { User } = require("../models")

const login = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) return res.status(400).send("This user does not exist.")

    const validPassword = await User.findOne({ password })
    if (!validPassword) return res.status(400).send("This password is invalid.")

    const token = jwt.sign(
        {
            _id: user._id,
            username: user.username,
            email: user.email,
        },
        process.env.JWT_PRIVATE_KEY,
        { expiresIn: "7d" }
    )

    const userId = user._id.slice(0, -4)

    res.cookie("userId", userId, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    res.send({
        message: "Login successful",
    })
}

module.exports = { login }
