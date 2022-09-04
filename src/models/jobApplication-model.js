const { Schema, Types, model } = require("mongoose")

const jobApplicationSchema = new Schema(
  {
    applicant: { type: Types.ObjectId, required: true },
    jobPost: { type: Types.ObjectId, required: true },
    links: {
      github: { type: String },
      linkedin: { type: String },
      portfolio: { type: String },
      other: { type: String },
    },
  },
  { timestamps: true }
)

const JobApplicationModel = model("application", jobApplicationSchema)
