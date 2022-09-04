const { Router } = require("express")
const { httpRegisterNewJobPost, httpGetJobPostsForUser, httpApplyToJobPost } = require("../controllers/jobPost-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")
const { validateJobPostingRequest, validateQueryParameters } = require("../middlewares/job-middlewares")
const { validatePostIdParameter } = require("../middlewares/user-middlewares")

const jobPostRouter = Router()

jobPostRouter.post("/new", authorizeUser, validateJobPostingRequest, httpRegisterNewJobPost)
jobPostRouter.post("/apply", authorizeUser, validatePostIdParameter, httpApplyToJobPost)

jobPostRouter.get("/", authorizeUser, validateQueryParameters, httpGetJobPostsForUser)

module.exports = jobPostRouter
