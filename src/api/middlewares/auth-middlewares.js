const { verify } = require("jsonwebtoken")
const UserModel = require("../../models/user-model")
const CONFIG = require("../../config/config")
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

const validateLoginRequest = (req, res, next) => {
  if (!req.body.input) return res.status(400).json({ success: false, message: CONTENTS.NULL_INPUT_MSG })
  if (!req.body.password) return res.status(400).json({ success: false, message: CONTENTS.NULL_PASSWORD_MSG })

  req.user = { input: req.body.input, pwd: req.body.password }
  next()
}

const authorizeUser = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  if (!authHeader) return res.status(401).json({ success: false, message: CONTENTS.NULL_AUTH_HEADER })

  const token = authHeader.split(" ")[1]
  verify(token, CONFIG.JWT_SECRET_KEY, (err, token) => {
    if (err) {
      res.status(401).json({ success: false, message: CONTENTS.INVALID_TOKEN_MSG })
      return
    }

    const user = await UserModel.findById(token)
    req.user = user
    next()
  })
}

module.exports = { validateRegisterRequest, validateLoginRequest, authorizeUser }
