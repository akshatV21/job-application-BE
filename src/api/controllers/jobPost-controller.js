const JobPostModel = require("../../models/jobPost-model")
const JobApplicationModel = require("../../models/jobApplication-model")
const CONTENTS = require("../../contents/index")

const httpRegisterNewJobPost = async (req, res) => {
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

const httpApplyToJobPost = async (req, res) => {
  try {
    const user = req.user
    const post = req.post
    const application = await new JobApplicationModel({ user: req.user._id, jobPost: req.postId, links: req.body.links })
      .populate("users")
      .populate("posts")

    user.applications.push(application._id)
    post.applications.push(application._id)

    await Promise.all([user.save(), application.save(), post.save()])
    res.status(201).json({ success: true, message: CONTENTS.APPLICATION_SUCCESS_MSG, application: application })
  } catch (error) {
    console.log("[ERROR] - Error while saving job application!")
    console.error(error)
    res.status(500).json({ success: false, message: CONTENTS.APPLICATION_ERR_MSG })
  }
}

module.exports = { httpRegisterNewJobPost, httpGetJobPostsForUser, httpApplyToJobPost }
