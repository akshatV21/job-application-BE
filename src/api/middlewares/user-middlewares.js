const CONTENTS = require("../../contents")
const JobPostModel = require("../../models/jobPost-model")

const validatePostIdParameter = async (req, res, next) => {
  const postId = req.params.postId
  if (!postId) return res.status(400).json({ success: false, message: CONTENTS.NULL_POSTID_MSG })

  const post = await JobPostModel.findById(postId)
  if (!post) return res.status(404).json({ success: false, message: CONTENTS.POST_NOT_FOUND_ERR_MSG })

  req.postId = post._id
  next()
}

module.exports = { validatePostIdParameter }
