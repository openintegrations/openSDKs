/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/permissions/{permissionId}': {
    /** Get Permission details */
    get: operations['getPermission']
    /** Delete a Permission */
    delete: operations['deletePermission']
    /** Update a permission */
    patch: operations['updatePermission']
    parameters: {
      path: {
        permissionId: string
      }
    }
  }
  '/permissions': {
    /** List Permissions by user id */
    get: operations['listPermissions']
    /** Create a permission */
    post: operations['createPermission']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    /** Format: uuid */
    WorkspaceId: string
    /** Format: uuid */
    OrganizationId: string
    /**
     * @description Describes what actions/endpoints the permission entitles to
     * @enum {string}
     */
    PermissionType:
      | 'instance_admin'
      | 'organization_admin'
      | 'organization_editor'
      | 'organization_reader'
      | 'organization_member'
      | 'workspace_owner'
      | 'workspace_admin'
      | 'workspace_editor'
      | 'workspace_reader'
    /**
     * @description Subset of `PermissionType` (removing `instance_admin`), could be used in public-api.
     * @enum {string}
     */
    PublicPermissionType:
      | 'organization_admin'
      | 'organization_editor'
      | 'organization_reader'
      | 'organization_member'
      | 'workspace_admin'
      | 'workspace_editor'
      | 'workspace_reader'
    /**
     * Format: uuid
     * @description Internal Airbyte user ID
     */
    UserId: string
    /**
     * @description Auth Provider
     * @default airbyte
     * @enum {string}
     */
    AuthProvider: 'airbyte' | 'google_identity_platform' | 'keycloak'
    /**
     * @description user status
     * @enum {string}
     */
    UserStatus: 'invited' | 'registered' | 'disabled'
    /** @description Path to a field/column/property in a stream to be selected. For example, if the field to be selected is a database column called "foo", this will be ["foo"]. Use multiple path elements for nested schemas. */
    SelectedFieldInfo: {
      fieldPath?: string[]
    }
    /** @description Paths to the fields that will be included in the configured catalog. */
    SelectedFields: components['schemas']['SelectedFieldInfo'][]
    /** @description The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema. */
    OAuthConfiguration: unknown
    OAuthInputConfiguration: components['schemas']['OAuthConfiguration']
    /**
     * Root Type for RedirectUrlResponse
     * @example {
     *   "redirectUrl": "https://example.com"
     * }
     */
    RedirectUrlResponse: {
      /** Format: url */
      redirectUrl?: string
    }
    /**
     * Root Type for JobResponse
     * @description Provides details of a single job.
     * @example {
     *   "id": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826",
     *   "status": "running",
     *   "jobType": "sync",
     *   "startTime": "2023-03-25T01:30:50Z",
     *   "duration": "PT8H6M12S"
     * }
     */
    JobResponse: {
      /** Format: int64 */
      jobId: number
      status: components['schemas']['JobStatusEnum']
      jobType: components['schemas']['JobTypeEnum']
      startTime: string
      /** Format: UUID */
      connectionId: string
      lastUpdatedAt?: string
      /** @description Duration of a sync in ISO_8601 format */
      duration?: string
      /** Format: int64 */
      bytesSynced?: number
      /** Format: int64 */
      rowsSynced?: number
    }
    /**
     * Root Type for JobsResponse
     * @example {
     *   "next": "https://api.airbyte.com/v1/jobs?limit=5&offset=10",
     *   "previous": "https://api.airbyte.com/v1/jobs?limit=5&offset=0",
     *   "data": [
     *     {
     *       "id": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826",
     *       "status": "running",
     *       "jobType": "sync",
     *       "startTime": "2023-03-25T01:30:50Z"
     *     }
     *   ]
     * }
     */
    JobsResponse: {
      previous?: string
      next?: string
      data: components['schemas']['JobResponse'][]
    }
    ConnectionCreateRequest: {
      /** @description Optional name of the connection */
      name?: string
      /** Format: uuid */
      sourceId: string
      /** Format: uuid */
      destinationId: string
      configurations?: components['schemas']['StreamConfigurations']
      schedule?: components['schemas']['AirbyteApiConnectionSchedule']
      dataResidency?: components['schemas']['GeographyEnum']
      namespaceDefinition?: components['schemas']['NamespaceDefinitionEnum']
      /**
       * @description Used when namespaceDefinition is 'custom_format'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
       * @default null
       * @example ${SOURCE_NAMESPACE}
       */
      namespaceFormat?: string
      /** @description Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_” causes “projects” => “airbyte_projects”). */
      prefix?: string
      nonBreakingSchemaUpdatesBehavior?: components['schemas']['NonBreakingSchemaUpdatesBehaviorEnum']
      status?: components['schemas']['ConnectionStatusEnum']
    }
    ConnectionPatchRequest: {
      /** @description Optional name of the connection */
      name?: string
      configurations?: components['schemas']['StreamConfigurations']
      schedule?: components['schemas']['AirbyteApiConnectionSchedule']
      dataResidency?: components['schemas']['GeographyEnumNoDefault']
      namespaceDefinition?: components['schemas']['NamespaceDefinitionEnumNoDefault']
      /**
       * @description Used when namespaceDefinition is 'custom_format'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
       * @default null
       * @example ${SOURCE_NAMESPACE}
       */
      namespaceFormat?: string
      /** @description Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_” causes “projects” => “airbyte_projects”). */
      prefix?: string
      nonBreakingSchemaUpdatesBehavior?: components['schemas']['NonBreakingSchemaUpdatesBehaviorEnumNoDefault']
      status?: components['schemas']['ConnectionStatusEnum']
    }
    /**
     * Root Type for JobCreate
     * @description Creates a new Job from the configuration provided in the request body.
     * @example {
     *   "connectionId": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826",
     *   "jobType": "sync"
     * }
     */
    JobCreateRequest: {
      /** Format: UUID */
      connectionId: string
      jobType: components['schemas']['JobTypeEnum']
    }
    /** @enum {string} */
    JobStatusEnum:
      | 'pending'
      | 'running'
      | 'incomplete'
      | 'failed'
      | 'succeeded'
      | 'cancelled'
    /**
     * @description Enum that describes the different types of jobs that the platform runs.
     * @enum {string}
     */
    JobTypeEnum: 'sync' | 'reset'
    SourceCreateRequest: {
      /** @description Name of the source e.g. dev-mysql-instance. */
      name: string
      /**
       * Format: uuid
       * @description The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided.
       */
      definitionId?: string
      /** Format: uuid */
      workspaceId: string
      configuration: components['schemas']['SourceConfiguration']
      /** @description Optional secretID obtained through the  OAuth redirect flow. */
      secretId?: string
    }
    SourcePutRequest: {
      name: string
      configuration: components['schemas']['SourceConfiguration']
    }
    SourcePatchRequest: {
      /** @example My source */
      name?: string
      /** Format: uuid */
      workspaceId?: string
      configuration?: components['schemas']['SourceConfiguration']
      /** @description Optional secretID obtained through the  OAuth redirect flow. */
      secretId?: string
    }
    /**
     * Root Type for ConnectionResponse
     * @description Provides details of a single connection.
     */
    ConnectionResponse: {
      /** Format: UUID */
      connectionId: string
      name: string
      /** Format: UUID */
      sourceId: string
      /** Format: UUID */
      destinationId: string
      /** Format: UUID */
      workspaceId: string
      status: components['schemas']['ConnectionStatusEnum']
      schedule: components['schemas']['ConnectionScheduleResponse']
      dataResidency: components['schemas']['GeographyEnum']
      nonBreakingSchemaUpdatesBehavior?: components['schemas']['NonBreakingSchemaUpdatesBehaviorEnum']
      namespaceDefinition?: components['schemas']['NamespaceDefinitionEnum']
      namespaceFormat?: string
      prefix?: string
      configurations: components['schemas']['StreamConfigurations']
    }
    /** @description schedule for when the the connection should run, per the schedule type */
    AirbyteApiConnectionSchedule: {
      scheduleType: components['schemas']['ScheduleTypeEnum']
      cronExpression?: string
    }
    /** @enum {string} */
    ScheduleTypeEnum: 'manual' | 'cron'
    /** @description schedule for when the the connection should run, per the schedule type */
    ConnectionScheduleResponse: {
      scheduleType: components['schemas']['ScheduleTypeWithBasicEnum']
      cronExpression?: string
      basicTiming?: string
    }
    /** @enum {string} */
    ScheduleTypeWithBasicEnum: 'manual' | 'cron' | 'basic'
    /**
     * @default auto
     * @enum {string}
     */
    GeographyEnum: 'auto' | 'us' | 'eu'
    /** @enum {string} */
    GeographyEnumNoDefault: 'auto' | 'us' | 'eu'
    /** @enum {string} */
    ConnectionStatusEnum: 'active' | 'inactive' | 'deprecated'
    /**
     * @description Define the location where the data will be stored in the destination
     * @default destination
     * @enum {string}
     */
    NamespaceDefinitionEnum: 'source' | 'destination' | 'custom_format'
    /**
     * @description Set how Airbyte handles syncs when it detects a non-breaking schema change in the source
     * @default ignore
     * @enum {string}
     */
    NonBreakingSchemaUpdatesBehaviorEnum:
      | 'ignore'
      | 'disable_connection'
      | 'propagate_columns'
      | 'propagate_fully'
    /**
     * @description Define the location where the data will be stored in the destination
     * @enum {string}
     */
    NamespaceDefinitionEnumNoDefault: 'source' | 'destination' | 'custom_format'
    /**
     * @description Set how Airbyte handles syncs when it detects a non-breaking schema change in the source
     * @enum {string}
     */
    NonBreakingSchemaUpdatesBehaviorEnumNoDefault:
      | 'ignore'
      | 'disable_connection'
      | 'propagate_columns'
      | 'propagate_fully'
    /**
     * Root Type for DestinationResponse
     * @description Provides details of a single destination.
     * @example {
     *   "destinationId": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826",
     *   "name": "Analytics Team Postgres",
     *   "destinationType": "postgres",
     *   "workspaceId": "871d9b60-11d1-44cb-8c92-c246d53bf87e"
     * }
     */
    DestinationResponse: {
      /** Format: UUID */
      destinationId: string
      name: string
      destinationType: string
      /** Format: UUID */
      workspaceId: string
      configuration: components['schemas']['DestinationConfiguration']
    }
    /**
     * Root Type for SourceResponse
     * @description Provides details of a single source.
     * @example {
     *   "sourceId": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826",
     *   "name": "Analytics Team Postgres",
     *   "sourceType": "postgres",
     *   "workspaceId": "871d9b60-11d1-44cb-8c92-c246d53bf87e"
     * }
     */
    SourceResponse: {
      /** Format: UUID */
      sourceId: string
      name: string
      sourceType: string
      /** Format: UUID */
      workspaceId: string
      configuration: components['schemas']['SourceConfiguration']
    }
    DestinationCreateRequest: {
      /** @description Name of the destination e.g. dev-mysql-instance. */
      name: string
      /**
       * Format: uuid
       * @description The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided.
       */
      definitionId?: string
      /** Format: uuid */
      workspaceId: string
      configuration: components['schemas']['DestinationConfiguration']
    }
    DestinationPatchRequest: {
      name?: string
      configuration?: components['schemas']['DestinationConfiguration']
    }
    DestinationPutRequest: {
      name: string
      configuration: components['schemas']['DestinationConfiguration']
    }
    WorkspaceCreateRequest: {
      /** @description Name of the workspace */
      name: string
      /**
       * Format: uuid
       * @description ID of organization to add workspace to.
       */
      organizationId?: string
    }
    WorkspaceUpdateRequest: {
      /** @description Name of the workspace */
      name: string
    }
    /**
     * Root Type for WorkspaceResponse
     * @description Provides details of a single workspace.
     */
    WorkspaceResponse: {
      /** Format: UUID */
      workspaceId: string
      name: string
      dataResidency: components['schemas']['GeographyEnum']
    }
    /**
     * Root Type for UserResponse
     * @description Provides details of a single user.
     */
    UserResponse: {
      /** @description Name of the user */
      name?: string
      userId: components['schemas']['UserId']
      /** Format: email */
      email: string
    }
    /**
     * Root Type for UsersResponse
     * @description List/Array of multiple users
     */
    UsersResponse: {
      data: components['schemas']['UserResponse'][]
    }
    PermissionCreateRequest: {
      permissionType: components['schemas']['PublicPermissionType']
      userId: components['schemas']['UserId']
      workspaceId?: components['schemas']['WorkspaceId']
      organizationId?: components['schemas']['OrganizationId']
    }
    PermissionUpdateRequest: {
      permissionType: components['schemas']['PermissionType']
    }
    /**
     * Root Type for PermissionResponse
     * @description Provides details of a single permission.
     */
    PermissionResponse: {
      /** Format: uuid */
      permissionId: string
      permissionType: components['schemas']['PermissionType']
      userId: components['schemas']['UserId']
      workspaceId?: components['schemas']['WorkspaceId']
      organizationId?: components['schemas']['OrganizationId']
    }
    /**
     * @description Scope of a single permission, e.g. workspace, organization
     * @enum {string}
     */
    PermissionScope: 'workspace' | 'organization' | 'none'
    /**
     * Root type for PermissionResponseRead
     * @description Reformat PermissionResponse with permission scope
     */
    PermissionResponseRead: {
      /** Format: uuid */
      permissionId: string
      permissionType: components['schemas']['PermissionType']
      userId: components['schemas']['UserId']
      /** Format: uuid */
      scopeId: string
      scope: components['schemas']['PermissionScope']
    }
    /**
     * Root Type for PermissionsResponse
     * @description List/Array of multiple permissions
     */
    PermissionsResponse: {
      data: components['schemas']['PermissionResponseRead'][]
    }
    /**
     * Root Type for ConnectionsResponse
     * @example {
     *   "next": "https://api.airbyte.com/v1/connections?limit=5&offset=10",
     *   "previous": "https://api.airbyte.com/v1/connections?limit=5&offset=0",
     *   "data": [
     *     {
     *       "name": "test-connection"
     *     },
     *     {
     *       "connection_id": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826"
     *     },
     *     {
     *       "sourceId": "49237019-645d-47d4-b45b-5eddf97775ce"
     *     },
     *     {
     *       "destinationId": "al312fs-0ab1-4f72-9ed7-0b8fc27c5826"
     *     },
     *     {
     *       "schedule": {
     *         "scheduleType": "manual"
     *       }
     *     },
     *     {
     *       "status": "active"
     *     },
     *     {
     *       "dataResidency": "auto"
     *     }
     *   ]
     * }
     */
    ConnectionsResponse: {
      previous?: string
      next?: string
      /** @default [] */
      data: components['schemas']['ConnectionResponse'][]
    }
    /**
     * Root Type for SourcesResponse
     * @example {
     *   "next": "https://api.airbyte.com/v1/sources?limit=5&offset=10",
     *   "previous": "https://api.airbyte.com/v1/sources?limit=5&offset=0",
     *   "data": {
     *     "sourceId": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826",
     *     "name": "Analytics Team Postgres",
     *     "sourceType": "postgres",
     *     "workspaceId": "871d9b60-11d1-44cb-8c92-c246d53bf87e"
     *   }
     * }
     */
    SourcesResponse: {
      previous?: string
      next?: string
      data: components['schemas']['SourceResponse'][]
    }
    /**
     * Root Type for DestinationsResponse
     * @example {
     *   "next": "https://api.airbyte.com/v1/destinations?limit=5&offset=10",
     *   "previous": "https://api.airbyte.com/v1/destinations?limit=5&offset=0",
     *   "data": {
     *     "destinationId": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826",
     *     "name": "Analytics Team Postgres",
     *     "destinationType": "postgres",
     *     "workspaceId": "871d9b60-11d1-44cb-8c92-c246d53bf87e"
     *   }
     * }
     */
    DestinationsResponse: {
      previous?: string
      next?: string
      data: components['schemas']['DestinationResponse'][]
    }
    /**
     * Root Type for WorkspacesResponse
     * @example {
     *   "next": "https://api.airbyte.com/v1/workspaces?limit=5&offset=10",
     *   "previous": "https://api.airbyte.com/v1/workspaces?limit=5&offset=0",
     *   "data": {
     *     "workspaceId": "18dccc91-0ab1-4f72-9ed7-0b8fc27c5826",
     *     "name": "Acme Company",
     *     "dataResidency": "auto"
     *   }
     * }
     */
    WorkspacesResponse: {
      previous?: string
      next?: string
      data: components['schemas']['WorkspaceResponse'][]
    }
    /** @description Configurations for a single stream. */
    StreamConfiguration: {
      name: string
      syncMode?: components['schemas']['ConnectionSyncModeEnum']
      /** @description Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental` unless there is a default. */
      cursorField?: string[]
      /** @description Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup` unless it is already supplied by the source schema. */
      primaryKey?: string[][]
      selectedFields?: components['schemas']['SelectedFields']
    }
    /** @description A list of configured stream options for a connection. */
    StreamConfigurations: {
      streams?: components['schemas']['StreamConfiguration'][]
    }
    /** @description A list of stream properties. */
    StreamPropertiesResponse: components['schemas']['StreamProperties'][]
    /** @description The stream properties associated with a connection. */
    StreamProperties: {
      streamName?: string
      syncModes?: components['schemas']['ConnectionSyncModeEnum'][]
      defaultCursorField?: string[]
      sourceDefinedCursorField?: boolean
      sourceDefinedPrimaryKey?: string[][]
      propertyFields?: string[][]
    }
    /** @enum {unknown} */
    ConnectionSyncModeEnum:
      | 'full_refresh_overwrite'
      | 'full_refresh_append'
      | 'incremental_append'
      | 'incremental_deduped_history'
    /**
     * @description Whether you're setting this override for a source or destination
     * @enum {unknown}
     */
    ActorTypeEnum: 'source' | 'destination'
    /**
     * @description The values required to configure the source.
     * @example {
     *   "user": "charles"
     * }
     */
    SourceConfiguration: unknown
    /**
     * @description The values required to configure the destination.
     * @example {
     *   "user": "charles"
     * }
     */
    DestinationConfiguration: unknown
  }
  responses: {
    /** @description Response from the initiate OAuth call should be an object with a single property which will be the `redirect_url`. If a user is redirected to this URL, they'll be prompted by the identity provider to authenticate. */
    InitiateOauthResponse: {
      content: {
        'application/json': unknown
      }
    }
  }
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  /** Get Permission details */
  getPermission: {
    parameters: {
      path: {
        permissionId: string
      }
    }
    responses: {
      /** @description Get a Permission by the id in the path. */
      200: {
        content: {
          'application/json': components['schemas']['PermissionResponse']
        }
      }
      /** @description Not allowed */
      403: {
        content: never
      }
      /** @description Not found */
      404: {
        content: never
      }
      /** @description Data issue */
      422: {
        content: never
      }
    }
  }
  /** Delete a Permission */
  deletePermission: {
    parameters: {
      path: {
        permissionId: string
      }
    }
    responses: {
      /** @description The resource was deleted successfully */
      204: {
        content: never
      }
      /** @description Not allowed */
      403: {
        content: never
      }
      /** @description Not found */
      404: {
        content: never
      }
      /** @description Data issue */
      422: {
        content: never
      }
    }
  }
  /** Update a permission */
  updatePermission: {
    parameters: {
      path: {
        permissionId: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PermissionUpdateRequest']
      }
    }
    responses: {
      /** @description Successful updated */
      200: {
        content: {
          'application/json': components['schemas']['PermissionResponse']
        }
      }
      /** @description Invalid data */
      400: {
        content: never
      }
      /** @description Not allowed */
      403: {
        content: never
      }
      /** @description Not found */
      404: {
        content: never
      }
      /** @description Data issue */
      422: {
        content: never
      }
    }
  }
  /** List Permissions by user id */
  listPermissions: {
    parameters: {
      query?: {
        /** @description User Id in permission. */
        userId?: string
      }
    }
    responses: {
      /** @description List Permissions. */
      200: {
        content: {
          'application/json': components['schemas']['PermissionsResponse']
        }
      }
      /** @description Not allowed */
      403: {
        content: never
      }
      /** @description Not found */
      404: {
        content: never
      }
    }
  }
  /** Create a permission */
  createPermission: {
    requestBody: {
      content: {
        'application/json': components['schemas']['PermissionCreateRequest']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          'application/json': components['schemas']['PermissionResponse']
        }
      }
      /** @description Invalid data */
      400: {
        content: never
      }
      /** @description Not allowed */
      403: {
        content: never
      }
    }
  }
}

export interface oasTypes {
  components: components
  external: external
  operations: operations
  paths: paths
  webhooks: webhooks
}

export default oasTypes
