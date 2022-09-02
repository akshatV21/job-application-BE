const { hashSync, compareSync } = require("bcrypt")
const { sign } = require("jsonwebtoken")
const { Schema, Types, model } = require("mongoose")
const CONFIG = require("../config/config")

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    jobsPosted: { type: [Types.ObjectId], default: [], ref: "job_posts" },
    jobsApplied: { type: [Types.ObjectId], default: [], ref: "job_posts" },
    savedJobPosts: { type: [Types.ObjectId], default: [], ref: "job_posts" },
    skills: { type: [String], required: true },
    experience: { type: String },
    lookingFor: { type: [String] },
  },
  { timestamps: true }
)

// encrypt password
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next()
  this.password = hashSync(this.password, 4)
  next()
})

// statics
userSchema.statics.findByInput = async function (input) {
  const userSearchByUsername = await this.findOne({ username: input })
  if (userSearchByUsername) return userSearchByUsername

  const userSearchByEmail = await this.findOne({ email: input })
  if (userSearchByEmail) return userSearchByEmail

  return null
}

// methods
userSchema.methods.passwordMatches = function (password) {
  return compareSync(password, this.password)
}

userSchema.methods.generateToken = function () {
  const token = sign(this._id.toString(), CONFIG.JWT_SECRET_KEY)
  return token
}

// virtauls
userSchema.virtual("fullName").get(() => `${this.firstName} ${this.lastName}}`)

const UserModel = model("user", userSchema)

module.exports = UserModel
