const express = require("express")
const router = express.Router()
const { decodeToken } = require("../middleware/authMiddleware")
const { newNote } = require("../controllers/noteController")

router.patch("/notes", decodeToken, newNote)

module.exports = router
