const { getGlobalDB } = require("hyinsit-backend-core/tenancy")
const { getGlobalUserParams } = require("hyinsit-backend-core/db")

exports.checkAnyUserExists = async () => {
  try {
    const db = getGlobalDB()
    const users = await db.allDocs(
      getGlobalUserParams(null, {
        include_docs: true,
        limit: 1,
      })
    )
    return users && users.rows.length >= 1
  } catch (err) {
    throw new Error("Unable to retrieve user list")
  }
}
