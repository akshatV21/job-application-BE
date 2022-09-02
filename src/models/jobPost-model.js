const { Schema, Types, model } = require("mongoose")

const jobPostSchema = new Schema(
  {
    userID: { type: Types.ObjectId, required: true },
    company: {
      name: { type: String, required: true },
      email: { type: String },
      phoneNumber: { type: String },
      location: {
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
      },
      officialWebsite: { type: String },
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [String], required: true },
    jobType: { type: [String], required: true },
    salary: { type: Number },
    schedule: { type: String, required: true },
    remoteWork: { type: Boolean, required: true },
    experience: { type: Number },
    education: { type: String },
    vacancies: { type: Number },
    applicants: { type: [Types.ObjectId], default: [], ref: "users" },
    applications: { type: [Types.ObjectId], default: [], ref: "applications" },
  },
  { timestamps: true }
)

const JobPostModel = model("post", jobPostSchema)

module.exports = JobPostModel
