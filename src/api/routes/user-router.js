const { Router } = require("express")
const { httpGetUser, httpGetUserPostedJobs } = require("../controllers/user-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")

const userRouter = Router()

userRouter.get("/", authorizeUser, httpGetUser)
userRouter.get("/jobsPosted", authorizeUser, httpGetUserPostedJobs)
userRouter.get("/jobsApplied", authorizeUser, httpGet)

module.exports = userRouter
