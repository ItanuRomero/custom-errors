import { describe, it, expect } from "vitest"
import { run } from "../src/index"
import { CustomError } from "custom-errors"

describe("example run()", () => {
  it("should throw CustomError", () => {
    expect(() => run()).toThrow(CustomError)
  })
})
