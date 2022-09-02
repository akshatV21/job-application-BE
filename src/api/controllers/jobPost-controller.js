const JobPostModel = require("../../models/jobPost-model")
const CONTENTS = require("../../contents/index")

const httpRegisterNewJobPost = async (req, res, next) => {
  const post = new JobPostModel(req.jobPost)
  await post.save()

  res.status(201).json({ success: true, message: CONTENTS.JOBPOST_REG_SUCCESS_MSG, post })
}

module.exports = { httpRegisterNewJobPost }
