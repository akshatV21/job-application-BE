const CONTENTS = {}

CONTENTS.SERVER_START_MSG = port => `Listening to requests on port: ${port}`
CONTENTS.MONGO_CONN_SUCCESS_MSG = `Connected to mongo database!!`

// success msgs
CONTENTS.REGISTER_SUCCESS_MSG = username => `Successfully registered ${username}`

// error msgs
CONTENTS.NULL_USERNAME_MSG = "Please enter a username!!"
CONTENTS.NULL_EMAIL_MSG = "Please enter a email!!"
CONTENTS.NULL_PASSWORD_MSG = "Please enter a password!!"
CONTENTS.REGISTER_ERR_MSG = username => `Could not register ${username}!!`

module.exports = CONTENTS
