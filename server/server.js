require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const loginRoutes = require("./router/loginRoutes")
const registrationRoutes = require("./router/registrationRoutes")
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/", loginRoutes)
app.use("/", registrationRoutes)

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Failed to connect to MongoDB", err))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
