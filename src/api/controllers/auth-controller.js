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

module.exports = { httpRegisterUser }
