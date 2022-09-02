const CONTENTS = require("../../contents")
const UserModel = require("../../models/user-model")

const httpRegisterUser = async (req, res) => {
  const user = new UserModel(req.user)
  try {
    await user.save()
    const { password, ...rest } = user._doc

    res.status(200).json({ success: true, message: CONTENTS.REGISTER_SUCCESS_MSG(user.username), user: rest })
  } catch (error) {
    console.log("[ERROR] - Error while registering user")
    console.error(error)
    res.status(500).json({ success: false, message: CONTENTS.REGISTER_ERR_MSG(user.username) })
  }
}

const httpLoginUser = async (req, res) => {
  const { input, pwd } = req.user
  const user = await UserModel.findByInput(input)

  if (!user) return res.status(404).json({ success: false, message: CONTENTS.USER_NOT_FOUND_MSG })
  if (!user.passwordMatches(pwd)) return res.status(400).json({ success: false, message: CONTENTS.INVALID_PASSWORD_MSG })

  user._doc.token = user.generateToken()
  const { password, ...rest } = user._doc

  res.status(200).json({ success: true, message: CONTENTS.LOGGEDIN_SUCCESS_MSG(user.username), user: rest })
}

module.exports = { httpRegisterUser, httpLoginUser }
