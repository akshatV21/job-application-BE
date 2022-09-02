const { Router } = require("express")
const { httpGetUser, httpGetUserPostedJobs, httpGetUserAppliedJobs, httpSaveJobPost } = require("../controllers/user-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")

const userRouter = Router()

userRouter.get("/", authorizeUser, httpGetUser)
userRouter.get("/jobsPosted", authorizeUser, httpGetUserPostedJobs)
userRouter.get("/jobsApplied", authorizeUser, httpGetUserAppliedJobs)

userRouter.patch("/saveJob/:jobPostId", authorizeUser, httpSaveJobPost)

module.exports = userRouter
