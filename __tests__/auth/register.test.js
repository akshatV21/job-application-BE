const { Types } = require("mongoose")
const app = require("../../src/app")
const { connectToMongo, disconnectToMongo } = require("../../src/mongo")
const CONTENTS = require("../../src/contents")
const request = require("supertest")(app)

describe("POST /api/auth/register", () => {
  beforeAll(async () => await connectToMongo())
  afterAll(async () => await disconnectToMongo())

  it("returns error object when username/email/password is null", async () => {
    const response = await request.post("/api/auth/register").send({
      username: "",
      email: "some@email.com",
      password: "somepassword",
      firstName: "first",
      lastName: "last",
      skills: ["coding"],
    })
    const expected = { success: false, message: CONTENTS.NULL_USERNAME_MSG }
    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual(expected)
  })

  it("returns user object when everything is OK", async () => {
    const response = await request
      .post("/api/auth/register")
      .send({ username: "username", email: "email", password: "password", firstName: "first", lastName: "last", skills: ["coding"] })

    const expected = {
      success: true,
      message: CONTENTS.REGISTER_SUCCESS_MSG("username"),
      user: {
        _id: expect.any(String),
        username: "username",
        email: "email",
        firstName: "first",
        lastName: "last",
        __v: 0,
        jobsApplied: [],
        jobsPosted: [],
        savedJobPosts: [],
        skills: ["coding"],
        lookingFor: [],
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      },
    }

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual(expected)
  })
})
