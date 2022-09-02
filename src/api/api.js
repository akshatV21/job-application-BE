const { Router } = require("express")
const authRouter = require("./routes/auth-router")
const jobPostRouter = require("./routes/jobPost-router")

const api = Router()

api.use("/auth", authRouter)
api.use("/job_posts", jobPostRouter)

module.exports = api
