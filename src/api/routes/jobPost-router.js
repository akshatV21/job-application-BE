const { Router } = require("express")
const { httpRegisterNewJobPost, httpGetJobPostsForUser } = require("../controllers/jobPost-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")
const { validateJobPostingRequest, validateQueryParameters } = require("../middlewares/job-middlewares")

const jobPostRouter = Router()

jobPostRouter.post("/new", authorizeUser, validateJobPostingRequest, httpRegisterNewJobPost)

jobPostRouter.get("/", authorizeUser, validateQueryParameters, httpGetJobPostsForUser)

module.exports = jobPostRouter
