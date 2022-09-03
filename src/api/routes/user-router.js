const { Router } = require("express")
const {
  httpGetUser,
  httpGetUserPostedJobs,
  httpGetUserAppliedJobs,
  httpSaveJobPost,
  httpRemoveSavedJobPost,
} = require("../controllers/user-controller")
const { authorizeUser } = require("../middlewares/auth-middlewares")
const { validatePostIdParamter } = require("../middlewares/user-middlewares")

const userRouter = Router()

userRouter.get("/", authorizeUser, httpGetUser)
userRouter.get("/jobsPosted", authorizeUser, httpGetUserPostedJobs)
userRouter.get("/jobsApplied", authorizeUser, httpGetUserAppliedJobs)

userRouter.patch("/saveJob/:jobPostId", authorizeUser, validatePostIdParamter, httpSaveJobPost)
userRouter.patch("/unsavePost/:jobPostId", authorizeUser, validatePostIdParamter, httpRemoveSavedJobPost)

module.exports = userRouter
