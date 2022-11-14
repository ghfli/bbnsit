const email = require("./email")
import { mocks as coreMocks } from "hyinsit-backend-core/tests"

export = {
  email,
  ...coreMocks,
}
