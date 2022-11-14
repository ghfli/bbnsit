import Router from "@koa/router"
import * as migrationsController from "../../controllers/system/migrations"
import { auth } from "hyinsit-backend-core"

const router = new Router()

router
  .post(
    "/api/system/migrations/run",
    auth.internalApi,
    migrationsController.runMigrations
  )
  .get(
    "/api/system/migrations/definitions",
    auth.internalApi,
    migrationsController.fetchDefinitions
  )

export = router
