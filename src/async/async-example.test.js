import {
  it,
  describe,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

beforeAll(() => {
  console.log("before All");
});

beforeEach(() => {
  console.log("before each");
});

afterAll(() => {
  console.log("after All");
});

afterEach(() => {
  console.log("after each");
});

describe("generateToken()", () => {
  it("should call callbck function", (done) => {
    const email = "rbhanu@abc.com";
    generateToken(email, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

describe("generateTokenPromise", () => {
  it("should generate token", () => {
    const email = "rbhanu@abc.com";
    return expect(generateTokenPromise(email)).resolves.toBeDefined();
  });
});
