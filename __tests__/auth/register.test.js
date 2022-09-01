const app = require("../../src/app")
const CONTENTS = require("../../src/contents")
const request = require("supertest")(app)

describe("POST /api/auth/register", () => {
  it("returns error object when username/email/password is null", async () => {
    const response = await request.post("/api/auth/register").send({ username: "", email: "some@email.com", password: "somepassword" })
    const expected = { success: false, message: CONTENTS.NULL_USERNAME_MSG }
    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual(expected)
  })
})
