import { getTenantId } from "hyinsit-backend-core/tenancy"
import { getAllApps } from "hyinsit-backend-core/db"
// import { quotas } from "hyinsit-pro"
// import { QuotaUsageType, StaticQuotaName } from "hyinsit-types"

export const run = async () => {
  // get app count
  // @ts-ignore
  const devApps = await getAllApps({ dev: true })
  const appCount = devApps ? devApps.length : 0

  // sync app count
  const tenantId = getTenantId()
  console.log(`[Tenant: ${tenantId}] Syncing app count: ${appCount}`)
  // await quotas.setUsage(appCount, StaticQuotaName.APPS, QuotaUsageType.STATIC)
}
