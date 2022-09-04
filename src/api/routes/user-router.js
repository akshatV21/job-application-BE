const { Router } = require("express")
const {
  httpGetUser,
  httpGetUserPostedJobs,
  httpGetUserAppliedJobs,
  httpSaveJobPost,
  httpRemoveSavedJobPost,
  httpGetUserApplications,
} = require("../controllers/user-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")
const { validatePostIdParameter } = require("../middlewares/user-middlewares")

const userRouter = Router()

userRouter.get("/", authorizeUser, httpGetUser)
userRouter.get("/jobsPosted", authorizeUser, httpGetUserPostedJobs)
userRouter.get("/jobsApplied", authorizeUser, httpGetUserAppliedJobs)
userRouter.get("/applications", authorizeUser, httpGetUserApplications)

userRouter.patch("/saveJob/:jobPostId", authorizeUser, validatePostIdParameter, httpSaveJobPost)
userRouter.patch("/unsavePost/:jobPostId", authorizeUser, validatePostIdParameter, httpRemoveSavedJobPost)

module.exports = userRouter
