const { Router } = require("express")
const { httpRegisterNewJobPost } = require("../controllers/jobPost-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")
const { validateJobPostingRequest } = require("../middlewares/job-middlewares")

const jobPostRouter = Router()

jobPostRouter.post("/new", authorizeUser, validateJobPostingRequest, httpRegisterNewJobPost)

module.exports = jobPostRouter
