const CONTENTS = {}

CONTENTS.SERVER_START_MSG = port => `Listening to requests on port: ${port}`
CONTENTS.MONGO_CONN_SUCCESS_MSG = `Connected to mongo database!!`

// success msgs
CONTENTS.REGISTER_SUCCESS_MSG = username => `Successfully registered ${username}`
CONTENTS.LOGGEDIN_SUCCESS_MSG = username => `Successfully logged in! ${username}`
CONTENTS.JOBPOST_REG_SUCCESS_MSG = "Job post saved successfully!"
CONTENTS.GET_JOBS_SUCCESS_MSG = "Job posts fetched successfully!"
CONTENTS.GET_USER_SUCCESS_MSG = "User fetched successfully!"
CONTENTS.GET_JOBPOSTS_SUCCESS_MSG = "Job posts fetched successfully!"
CONTENTS.SAVED_POST_SUCCESS_MSG = "Job post saved successfully!"

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
CONTENTS.NULL_COMP_NAME_MSG = "Please enter company name!"
CONTENTS.NULL_COMP_LOCATION_MSG = "Please enter company location!"
CONTENTS.NULL_TITLE_MSG = "Please enter title!"
CONTENTS.NULL_DESCRIPTION_MSG = "Please enter description!"
CONTENTS.NULL_SKILLS_MSG = "Please enter skills!"
CONTENTS.NULL_JOBTYPE_MSG = "Please enter job type!"
CONTENTS.NULL_REMOTE_MSG = "Please enter remote work!"
CONTENTS.NULL_SCHEDULE_MSG = "Please enter schedule!"
CONTENTS.NEW_POST_ERR_MSG = "Error creating new job post!"
CONTENTS.GET_JOBS_ERR_MSG = "Error getting job posts!"
CONTENTS.GET_USER_ERR_MSG = "Cannot fetch user data!"
CONTENTS.GET_JOBPOSTS_ERR_MSG = "Cannot fetch user job posts!"
CONTENTS.SAVED_POST_ERR_MSG = "Error saving the job post!"

module.exports = CONTENTS
