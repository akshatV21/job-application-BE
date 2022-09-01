const CONTENTS = {}

CONTENTS.SERVER_START_MSG = port => `Listening to requests on port: ${port}`
CONTENTS.MONGO_CONN_SUCCESS_MSG = `Connected to mongo database!!`

// success msgs
CONTENTS.REGISTER_SUCCESS_MSG = username => `Successfully registered ${username}`
CONTENTS.LOGGEDIN_SUCCESS_MSG = username => `Successfully logged in! ${username}`

// error msgs
CONTENTS.NULL_USERNAME_MSG = "Please enter a username!!"
CONTENTS.NULL_EMAIL_MSG = "Please enter a email!!"
CONTENTS.NULL_PASSWORD_MSG = "Please enter a password!!"
CONTENTS.NULL_FIRSTNAME_MSG = "Please enter your first name!!"
CONTENTS.NULL_LASTNAME_MSG = "Please enter last name!!"
CONTENTS.NULL_SKILLS_MSG = "Please enter atleast one skill!!"
CONTENTS.NULL_INPUT_MSG = "Please enter your username or email!!"
CONTENTS.REGISTER_ERR_MSG = username => `Could not register ${username}!!`
CONTENTS.USER_NOT_FOUND_MSG = "Cannot find user"
CONTENTS.INVALID_PASSWORD_MSG = "Invalid password"
CONTENTS.NULL_AUTH_HEADER = "Please log in first!!"
CONTENTS.INVALID_TOKEN_MSG = "You are unauthorized!!"

module.exports = CONTENTS
