const { Router } = require("express")
const { httpRegisterUser } = require("../controllers/auth-controller")
const { validateRegisterRequest } = require("../middlewares/auth-middlewares")

const authRouter = Router()

authRouter.post("/register", validateRegisterRequest, httpRegisterUser)

module.exports = authRouter
