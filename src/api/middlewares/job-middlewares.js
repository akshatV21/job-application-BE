const CONTENTS = require("../../contents")

const validateJobPostingRequest = (req, res, next) => {
  if (!req.body.company.name) return res.status(400).json({ success: false, message: CONTENTS.NULL_COMP_NAME_MSG })
  if (!req.body.company.location["*"]) return res.status(400).json({ success: false, message: CONTENTS.NULL_COMP_LOCATION_MSG })
  if (!req.body.title) return res.status(400).json({ success: false, message: CONTENTS.NULL_TITLE_MSG })
  if (!req.body.description) return res.status(400).json({ success: false, message: CONTENTS.NULL_DESCRIPTION_MSG })
  if (!req.body.skills) return res.status(400).json({ success: false, message: CONTENTS.NULL_SKILLS_MSG })
  if (!req.body.jobType) return res.status(400).json({ success: false, message: CONTENTS.NULL_JOBTYPE_MSG })
  if (!req.body.schedule) return res.status(400).json({ success: false, message: CONTENTS.NULL_SCHEDULE_MSG })
  if (!req.body.remoteWork) return res.status(400).json({ success: false, message: CONTENTS.NULL_REMOTE_MSG })

  req.jobPost = req.body
  next()
}

const validateQueryParameters = (req, res, next) => {
  const skillsQuery = req.query.skills

  req.skills = skillsQuery ? skillsQuery.split(",") : req.user
  req.remote = typeof req.remote === "boolean" ? req.query.remote : undefined
  next()
}

module.exports = { validateJobPostingRequest, validateQueryParameters }
