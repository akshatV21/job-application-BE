const { Router } = require("express")
const authRouter = require("./routes/auth-router")
const jobPostRouter = require("./routes/jobPost-router")
const userRouter = require("./routes/user-router")

const api = Router()

api.use("/auth", authRouter)
api.use("/job_posts", jobPostRouter)
api.use("/user", userRouter)

module.exports = api
