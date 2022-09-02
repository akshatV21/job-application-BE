const CONTENTS = require("../../contents")

const httpGetUser = (req, res) => {
  res.status(200).json({ success: true, message: CONTENTS.GET_USER_SUCCESS_MSG, user: req.user })
}

const httpGetUserPostedJobs = (req, res) => {
  const user = req.user
  const userPostedJobs = user.populate("posts").jobsPosted.reverse()

  res.status(200).json({ success: true, message: CONTENTS.GET_JOBPOSTS_SUCCESS_MSG, posts: userPostedJobs })
}

const httpGetUserAppliedJobs = (req, res) => {
  const user = req.user
  const userAppliedJobs = user.populate("posts").jobsApplied.reverse()

  res.status(200).json({ success: true, message: CONTENTS.GET_JOBPOSTS_SUCCESS_MSG, posts: userAppliedJobs })
}

module.exports = { httpGetUser, httpGetUserPostedJobs }
