const { Router } = require("express")
const { httpGetUser, httpGetUserPostedJobs, httpGetUserAppliedJobs } = require("../controllers/user-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")

const userRouter = Router()

userRouter.get("/", authorizeUser, httpGetUser)
userRouter.get("/jobsPosted", authorizeUser, httpGetUserPostedJobs)
userRouter.get("/jobsApplied", authorizeUser, httpGetUserAppliedJobs)

module.exports = userRouter
