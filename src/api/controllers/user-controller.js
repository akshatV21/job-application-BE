const CONTENTS = require("../../contents")

const httpGetUser = (req, res) => {
  res.status(200).json({ success: true, message: CONTENTS.GET_USER_SUCCESS_MSG, user: req.user })
}

const httpGetUserPostedJobs = async (req, res) => {
  try {
    const user = req.user
    const userPostedJobs = await user.populate("posts").jobsPosted.reverse()

    res.status(200).json({ success: true, message: CONTENTS.GET_JOBPOSTS_SUCCESS_MSG, posts: userPostedJobs })
  } catch (error) {
    console.log("[ERROR] - Error while fetching user posted jobs")
    console.error(error)
    res.status(500).json({ success: false, message: CONTENTS.GET_JOBPOSTS_ERR_MSG })
  }
}

const httpGetUserAppliedJobs = async (req, res) => {
  try {
    const user = req.user
    const userAppliedJobs = await user.populate("posts").jobsApplied.reverse()

    res.status(200).json({ success: true, message: CONTENTS.GET_JOBPOSTS_SUCCESS_MSG, posts: userAppliedJobs })
  } catch (error) {
    console.log("[ERROR] - Error while fetching user applied jobs")
    console.error(error)
    res.status(500).json({ success: false, message: CONTENTS.GET_JOBPOSTS_ERR_MSG })
  }
}

const httpSaveJobPost = async (req, res) => {
  try {
    const user = req.user
    const postId = req.postId

    user.savedJobPosts.push(postId)
    await user.save()
    res.status(200).json({ success: true, message: CONTENTS.SAVED_POST_SUCCESS_MSG, user: user })
  } catch (error) {
    console.log("[ERROR] - Error while saving a job post")
    console.error(error)
    res.status(500).json({ success: false, message: CONTENTS.SAVED_POST_ERR_MSG })
  }
}

module.exports = { httpGetUser, httpGetUserPostedJobs, httpGetUserAppliedJobs, httpSaveJobPost }