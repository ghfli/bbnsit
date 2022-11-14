import Router from "@koa/router"
import * as controller from "../../controllers/system/accounts"
import { middleware } from "hyinsit-backend-core"

const router = new Router()

router
  .put(
    "/api/system/accounts/:accountId/metadata",
    middleware.internalApi,
    controller.save
  )
  .delete(
    "/api/system/accounts/:accountId/metadata",
    middleware.internalApi,
    controller.destroy
  )

export = router
