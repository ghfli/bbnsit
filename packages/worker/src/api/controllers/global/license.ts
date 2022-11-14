// import { licensing, quotas } from "hyinsit-pro"

// export const activate = async (ctx: any) => {
export const activate = (ctx: any) => {
  const { licenseKey } = ctx.request.body
  if (!licenseKey) {
    // ctx.throw(400, "licenseKey is required")
    console.log("ignoring lack of licensekey")
  }

  // await licensing.activateLicenseKey(licenseKey)
  console.log("skipping activateLicenseKey")
  ctx.status = 200
}

// export const refresh = async (ctx: any) => {
export const refresh = (ctx: any) => {
  // await licensing.cache.refresh()
  console.log("skipping licensing.cache.refresh()")
  ctx.status = 200
}

// export const getInfo = async (ctx: any) => {
export const getInfo = (ctx: any) => {
  // const licenseInfo = await licensing.getLicenseInfo()
  // if (licenseInfo) {
  //  licenseInfo.licenseKey = "*"
  //   ctx.body = licenseInfo
  //  }
  console.log("skipping licensing.getLicenseInfo()")
  ctx.status = 200
}

// export const deleteInfo = async (ctx: any) => {
export const deleteInfo = (ctx: any) => {
  // await licensing.deleteLicenseInfo()
  console.log("skipping licensing.deleteLicenseInfo()")
  ctx.status = 200
}

// export const getQuotaUsage = async (ctx: any) => {
export const getQuotaUsage = (ctx: any) => {
  // ctx.body = await quotas.getQuotaUsage()
  ctx.body = {}
  console.log("skipping quotas.getQuotaUsage()")
}
