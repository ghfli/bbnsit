import { QueryJson, Datasource } from "hyinsit-types"
const { getIntegration } = require("../index")

export async function makeExternalQuery(
  datasource: Datasource,
  json: QueryJson
) {
  const Integration = await getIntegration(datasource.source)
  // query is the opinionated function
  if (Integration.prototype.query) {
    const integration = new Integration(datasource.config)
    return integration.query(json)
  } else {
    throw "Datasource does not support query."
  }
}
