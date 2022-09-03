const { Router } = require("express")
const { httpRegisterNewJobPost, httpGetJobPostsForUser } = require("../controllers/jobPost-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")
const { validateJobPostingRequest, validateQueryParameters } = require("../middlewares/job-middlewares")

const jobPostRouter = Router()

jobPostRouter.post("/new", authorizeUser, validateJobPostingRequest, httpRegisterNewJobPost)

jobPostRouter.get("/", authorizeUser, validateQueryParameters, httpGetJobPostsForUser)

module.exports = jobPostRouter

// --------------------------------------------------------------------------------------------------------------------
const upn = "7 9 0 7 3 3"
const pin = "U K Q K"
