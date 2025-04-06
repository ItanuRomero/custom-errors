import { CustomError } from "custom-errors"

export function run() {
  throw new CustomError("This is an example error")
}

if (import.meta.url === `file://${process.argv[1]}`) {
    run()
  }