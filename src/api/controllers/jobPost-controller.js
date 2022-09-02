const JobPostModel = require("../../models/jobPost-model")
const CONTENTS = require("../../contents/index")

const httpRegisterNewJobPost = async (req, res, next) => {
  try {
    const user = req.user
    const post = new JobPostModel(req.jobPost)

    user.jobsPosted.push(post._id)

    await user.save()
    await post.save()

    res.status(201).json({ success: true, message: CONTENTS.JOBPOST_REG_SUCCESS_MSG, post })
  } catch (error) {
    console.log("[ERROR] - Error while registering new post")
    console.error(error)
    res.status(500).json({ success: false, message: CONTENTS.REGISTER_ERR_MSG })
  }
}

const httpGetJobPostsForUser = async (req, res) => {
  try {
    const jobPostsBySkills = (await JobPostModel.find({ skills: { $in: req.skills } })).reverse()
    const finalJobPosts =
      typeof req.remote !== "undefined" ? jobPostsBySkills.map(post => post.remoteWork === req.remote) : jobPostsBySkills

    res.status(200).json({ success: true, message: CONTENTS.GET_JOBS_SUCCESS_MSG, posts: finalJobPosts })
  } catch (error) {
    console.log("[ERROR] - Error while fetching job posts!")
    console.error(error)
    res.status(500).json({ success: false, message: CONTENTS.GET_JOBS_ERR_MSG })
  }
}

module.exports = { httpRegisterNewJobPost, httpGetJobPostsForUser }
