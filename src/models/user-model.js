const { hashSync } = require("bcrypt")
const { Schema, Types, model } = require("mongoose")

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
  },
  { timestamps: true }
)

// encrypt password
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next()
  this.password = hashSync(this.password, 4)
  next()
})

// virtauls
userSchema.virtual("fullName").get(() => `${this.firstName} ${this.lastName}}`)

const UserModel = model("user", userSchema)

module.exports = UserModel
