const CONTENTS = require("../../contents/index")

const validateRegisterRequest = (req, res, next) => {
  if (!req.body.username) return res.status(400).json({ success: false, message: CONTENTS.NULL_USERNAME_MSG })
  if (!req.body.email) return res.status(400).json({ success: false, message: CONTENTS.NULL_EMAIL_MSG })
  if (!req.body.password) return res.status(400).json({ success: false, message: CONTENTS.NULL_PASSWORD_MSG })

  req.user = { username: req.body.username, email: req.body.email, password: req.body.password }
  next()
}

module.exports = { validateRegisterRequest }
