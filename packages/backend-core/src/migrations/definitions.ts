import {
  MigrationType,
  MigrationName,
  MigrationDefinition,
} from "hyinsit-types"

export const DEFINITIONS: MigrationDefinition[] = [
  {
    type: MigrationType.GLOBAL,
    name: MigrationName.USER_EMAIL_VIEW_CASING,
  },
  {
    type: MigrationType.GLOBAL,
    name: MigrationName.QUOTAS_1,
  },
  {
    type: MigrationType.APP,
    name: MigrationName.APP_URLS,
  },
  {
    type: MigrationType.APP,
    name: MigrationName.EVENT_APP_BACKFILL,
  },
  {
    type: MigrationType.GLOBAL,
    name: MigrationName.EVENT_GLOBAL_BACKFILL,
  },
  {
    type: MigrationType.INSTALLATION,
    name: MigrationName.EVENT_INSTALLATION_BACKFILL,
  },
  {
    type: MigrationType.GLOBAL,
    name: MigrationName.GLOBAL_INFO_SYNC_USERS,
  },
  {
    type: MigrationType.GLOBAL,
    name: MigrationName.PLUGIN_COUNT,
  },
]
