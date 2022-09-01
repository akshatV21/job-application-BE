const app = require("../../src/app")
const { connectToMongo, disconnectToMongo } = require("../../src/mongo")
const CONTENTS = require("../../src/contents")
const request = require("supertest")(app)

describe("POST /api/auth/login", () => {
  beforeAll(async () => await connectToMongo())
  afterAll(async () => await disconnectToMongo())

  it("returns error object when input or password is null", async () => {
    const response = await request.post(`/api/auth/login`).send({ input: "", password: "" })
    const expected = { success: false, message: CONTENTS.NULL_INPUT_MSG }

    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual(expected)
  })

  it("returns error object when invalid input is passed", async () => {
    const response = await request.post(`/api/auth/login`).send({ input: "invalidUser", password: "password" })
    const expected = { success: false, message: CONTENTS.USER_NOT_FOUND_MSG }

    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual(expected)
  })

  it("returns error object when invalid password is passed", async () => {
    const response = await request.post(`/api/auth/login`).send({ input: "username", password: "invalid" })
    const expected = { success: false, message: CONTENTS.INVALID_PASSWORD_MSG }

    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual(expected)
  })

  it("returns user object when everything is OK", async () => {
    const response = await request.post(`/api/auth/login`).send({ input: "username", password: "password" })
    const expected = {
      success: true,
      message: CONTENTS.LOGGEDIN_SUCCESS_MSG("username"),
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
        token: expect.any(String),
      },
    }

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual(expected)
  })
})
