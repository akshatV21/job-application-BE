const CONTENTS = require("../../contents/index")

const validateRegisterRequest = (req, res, next) => {
  if (!req.body.firstName) return res.status(400).json({ success: false, message: CONTENTS.NULL_USERNAME_MSG })
  if (!req.body.lastName) return res.status(400).json({ success: false, message: CONTENTS.NULL_USERNAME_MSG })
  if (!req.body.skills) return res.status(400).json({ success: false, message: CONTENTS.NULL_USERNAME_MSG })
  if (!req.body.username) return res.status(400).json({ success: false, message: CONTENTS.NULL_USERNAME_MSG })
  if (!req.body.email) return res.status(400).json({ success: false, message: CONTENTS.NULL_EMAIL_MSG })
  if (!req.body.password) return res.status(400).json({ success: false, message: CONTENTS.NULL_PASSWORD_MSG })

  if (!Array.isArray(req.body.skills)) req.body.skills = String(req.body.skills).join()

  req.user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    skills: req.body.skills,
  }
  next()
}

module.exports = { validateRegisterRequest }
