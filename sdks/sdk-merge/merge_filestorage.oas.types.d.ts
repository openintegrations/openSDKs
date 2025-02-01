export interface paths {
  '/account-details': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get details for a linked account. */
    get: operations['account_details_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/account-token/{public_token}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns the account token for the end user with the provided public token. */
    get: operations['account_token_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/async-passthrough': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Asynchronously pull data from an endpoint not currently supported by Merge. */
    post: operations['async_passthrough_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/async-passthrough/{async_passthrough_receipt_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Retrieves data from earlier async-passthrough POST request */
    get: operations['async_passthrough_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/audit-trail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a list of audit trail events. */
    get: operations['audit_trail_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/available-actions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of models and actions available for an account. */
    get: operations['available_actions_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/default-scopes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes). */
    get: operations['default_scopes_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delete-account': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Delete a linked account. */
    post: operations['delete_account_delete']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/drives': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Drive` objects. */
    get: operations['drives_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/drives/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Drive` object with the given `id`. */
    get: operations['drives_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/field-mappings': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get all Field Mappings for this Linked Account. Field Mappings are mappings between third-party Remote Fields and user defined Merge fields. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/). */
    get: operations['field_mappings_retrieve']
    put?: never
    /** @description Create new Field Mappings that will be available after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start. */
    post: operations['field_mappings_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/field-mappings/{field_mapping_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** @description Deletes Field Mappings for a Linked Account. All data related to this Field Mapping will be deleted and these changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start. */
    delete: operations['field_mappings_destroy']
    options?: never
    head?: never
    /** @description Create or update existing Field Mappings for a Linked Account. Changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start. */
    patch: operations['field_mappings_partial_update']
    trace?: never
  }
  '/files': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `File` objects. */
    get: operations['files_list']
    put?: never
    /** @description Creates a `File` object with the given values. */
    post: operations['files_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `File` object with the given `id`. */
    get: operations['files_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{id}/download': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns the `File` content with the given `id` as a stream of bytes. */
    get: operations['files_download_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `FileStorageFile` POSTs. */
    get: operations['files_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/folders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Folder` objects. */
    get: operations['folders_list']
    put?: never
    /** @description Creates a `Folder` object with the given values. */
    post: operations['folders_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/folders/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Folder` object with the given `id`. */
    get: operations['folders_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/folders/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `FileStorageFolder` POSTs. */
    get: operations['folders_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/generate-key': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Create a remote key. */
    post: operations['generate_key_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/groups': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Group` objects. */
    get: operations['groups_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/groups/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Group` object with the given `id`. */
    get: operations['groups_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/issues': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets all issues for Organization. */
    get: operations['issues_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/issues/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get a specific issue. */
    get: operations['issues_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/link-token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Creates a link token to be used when linking a new end user. */
    post: operations['link_token_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/linked-account-scopes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes). */
    get: operations['linked_account_scopes_retrieve']
    put?: never
    /** @description Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes) */
    post: operations['linked_account_scopes_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/linked-accounts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description List linked accounts for your organization. */
    get: operations['linked_accounts_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/passthrough': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Pull data from an endpoint not currently supported by Merge. */
    post: operations['passthrough_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/regenerate-key': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Exchange remote keys. */
    post: operations['regenerate_key_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/remote-fields': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get all remote fields for a Linked Account. Remote fields are third-party fields that are accessible after initial sync if remote_data is enabled. You can use remote fields to override existing Merge fields or map a new Merge field. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/). */
    get: operations['remote_fields_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sync-status': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses). */
    get: operations['sync_status_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sync-status/resync': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account. */
    post: operations['sync_status_resync_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/target-fields': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get all organization-wide Target Fields, this will not include any Linked Account specific Target Fields. Organization-wide Target Fields are additional fields appended to the Merge Common Model for all Linked Accounts in a category. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/target-fields/). */
    get: operations['target_fields_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `User` objects. */
    get: operations['users_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `User` object with the given `id`. */
    get: operations['users_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/webhook-receivers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `WebhookReceiver` objects. */
    get: operations['webhook_receivers_list']
    put?: never
    /** @description Creates a `WebhookReceiver` object with the given values. */
    post: operations['webhook_receivers_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    AccountDetails: {
      /**
       * Format: uuid
       * @example 0496d4c2-42e6-4072-80b3-7b69bfdc76fd
       */
      readonly id?: string
      /** @example BambooHR */
      readonly integration?: string
      /** @example bamboohr */
      readonly integration_slug?: string
      /** @example hris */
      category?: components['schemas']['CategoryEnum'] | null
      /** @example 3fa85f64-5717-4562-b3fc-2c963f66afa6 */
      readonly end_user_origin_id?: string
      /** @example Waystar Royco */
      readonly end_user_organization_name?: string
      /**
       * Format: email
       * @example kendall.roy@waystar-royco.com
       */
      readonly end_user_email_address?: string
      /** @example COMPLETE */
      readonly status?: string
      /**
       * Format: uri
       * @example https://api.merge.dev/api/integrations/webhook-listener/7fc3mee0UW8ecV4
       */
      readonly webhook_listener_url?: string
      /**
       * @description Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets.
       * @example true
       */
      readonly is_duplicate?: boolean | null
      /** @example PRODUCTION */
      readonly account_type?: string
      /**
       * Format: date-time
       * @description The time at which account completes the linking flow.
       * @example 2024-08-26T20:11:19.277118Z
       */
      completed_at?: string | null
    }
    /** @description # The LinkedAccount Object
     *     ### Description
     *     The `LinkedAccount` object is used to represent an end user's link with a specific integration.
     *
     *     ### Usage Example
     *     View a list of your organization's `LinkedAccount` objects. */
    AccountDetailsAndActions: {
      /** @example e59b1821-f85c-4e28-a6b3-1804156f3563 */
      id: string
      /** @example hris */
      category?: components['schemas']['CategoryEnum']
      /** @example INCOMPLETE */
      status: components['schemas']['AccountDetailsAndActionsStatusEnum']
      /** @example Invalid login credentials */
      status_detail?: string
      /** @example 3ac95cde-6c7f-4eef-afec-be710b42308d */
      end_user_origin_id?: string
      /** @example Foo Bar, LLC */
      end_user_organization_name: string
      /** @example hradmin@foobar.dev */
      end_user_email_address: string
      /**
       * @description The tenant or domain the customer has provided access to.
       * @example foobar
       */
      subdomain?: string
      /** @example https://api.merge.dev/api/integrations/webhook-listener/7fc3mee0UW8ecV4 */
      webhook_listener_url: string
      /**
       * @description Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets.
       * @example true
       */
      is_duplicate?: boolean | null
      /** @example {
       *       "name": "SAP SuccessFactors",
       *       "categories": [
       *         "hris",
       *         "ats"
       *       ],
       *       "image": "https://cdn.merge.dev/SuccessFactors_Logo.png",
       *       "square_image": "https://cdn.merge.dev/SuccessFactors_Square_Logo.jpg",
       *       "color": "#F6A704",
       *       "slug": "sap-successfactors",
       *       "passthrough_available": true,
       *       "available_model_operations": [
       *         {
       *           "model_name": "Candidate",
       *           "available_operations": [
       *             "FETCH",
       *             "CREATE"
       *           ],
       *           "required_post_parameters": [
       *             "remote_user_id"
       *           ],
       *           "supported_fields": [
       *             "first_name",
       *             "last_name",
       *             "company",
       *             "title"
       *           ]
       *         }
       *       ]
       *     } */
      integration?: components['schemas']['AccountDetailsAndActionsIntegration']
      /** @example PRODUCTION */
      account_type: string
      /**
       * Format: date-time
       * @example 2024-08-26T20:11:19.277118Z
       */
      completed_at: string
    }
    AccountDetailsAndActionsIntegration: {
      name: string
      categories: components['schemas']['CategoriesEnum'][]
      image?: string
      square_image?: string
      color: string
      slug: string
      passthrough_available: boolean
      available_model_operations?: components['schemas']['ModelOperation'][]
    }
    /**
     * @description * `COMPLETE` - COMPLETE
     *     * `INCOMPLETE` - INCOMPLETE
     *     * `RELINK_NEEDED` - RELINK_NEEDED
     *     * `IDLE` - IDLE
     * @enum {string}
     */
    AccountDetailsAndActionsStatusEnum:
      | 'COMPLETE'
      | 'INCOMPLETE'
      | 'RELINK_NEEDED'
      | 'IDLE'
    AccountIntegration: {
      /** @description Company name. */
      name: string
      /** @description Optional. This shortened name appears in places with limited space, usually in conjunction with the platform's logo (e.g., Merge Link menu).<br><br>Example: <i>Workforce Now (in lieu of ADP Workforce Now), SuccessFactors (in lieu of SAP SuccessFactors)</i> */
      abbreviated_name?: string | null
      /** @description Category or categories this integration belongs to. Multiple categories should be comma separated, i.e. [ats, hris]. */
      readonly categories?: components['schemas']['CategoriesEnum'][]
      /**
       * Format: uri
       * @description Company logo in rectangular shape.
       */
      image?: string | null
      /**
       * Format: uri
       * @description Company logo in square shape.
       */
      square_image?: string | null
      /** @description The color of this integration used for buttons and text throughout the app and landing pages. <b>Choose a darker, saturated color.</b> */
      color?: string
      readonly slug?: string
      /** @description Mapping of API endpoints to documentation urls for support. Example: {'GET': [['/common-model-scopes', 'https://docs.merge.dev/accounting/common-model-scopes/#common_model_scopes_retrieve'],['/common-model-actions', 'https://docs.merge.dev/accounting/common-model-actions/#common_model_actions_retrieve']], 'POST': []} */
      api_endpoints_to_documentation_urls?: {
        [key: string]: unknown
      }
      /** @description Setup guide URL for third party webhook creation. Exposed in Merge Docs. */
      webhook_setup_guide_url?: string | null
      /** @description Category or categories this integration is in beta status for. */
      readonly category_beta_status?: Record<string, never>
    }
    AccountToken: {
      /** @example T9klMDQrcHdm9jrtHuOS2Nf06BIHwMNjpPXPMB */
      account_token: string
      /** @example {
       *       "name": "SAP SuccessFactors",
       *       "categories": [
       *         "hris",
       *         "ats"
       *       ],
       *       "image": "https://cdn.merge.dev/SuccessFactors_Logo.png",
       *       "square_image": "https://cdn.merge.dev/SuccessFactors_Square_Logo.jpg",
       *       "color": "#F6A704",
       *       "slug": "sap-successfactors"
       *     } */
      integration: components['schemas']['AccountIntegration']
    }
    AdvancedMetadata: {
      /** Format: uuid */
      id: string
      display_name?: string
      description?: string
      is_required?: boolean
      is_custom?: boolean
      field_choices?: unknown[]
    }
    AsyncPassthroughReciept: {
      /**
       * Format: uuid
       * @example fd29020f-2695-445e-922e-dcd5e81903fd
       */
      async_passthrough_receipt_id: string
    }
    AuditLogEvent: {
      /**
       * Format: uuid
       * @example b5ceea2a-7171-47ce-8090-165cfce5572c
       */
      readonly id?: string
      /**
       * @description The User's full name at the time of this Event occurring.
       * @example Gil Feig
       */
      user_name?: string | null
      /**
       * Format: email
       * @description The User's email at the time of this Event occurring.
       * @example hello@merge.dev
       */
      user_email?: string | null
      /**
       * @description Designates the role of the user (or SYSTEM/API if action not taken by a user) at the time of this Event occurring.
       *
       *     * `ADMIN` - ADMIN
       *     * `DEVELOPER` - DEVELOPER
       *     * `MEMBER` - MEMBER
       *     * `API` - API
       *     * `SYSTEM` - SYSTEM
       *     * `MERGE_TEAM` - MERGE_TEAM
       * @example ADMIN
       */
      role: components['schemas']['RoleEnum']
      /** @example 192.0.2.123 */
      ip_address: string
      /**
       * @description Designates the type of event that occurred.
       *
       *     * `CREATED_REMOTE_PRODUCTION_API_KEY` - CREATED_REMOTE_PRODUCTION_API_KEY
       *     * `DELETED_REMOTE_PRODUCTION_API_KEY` - DELETED_REMOTE_PRODUCTION_API_KEY
       *     * `CREATED_TEST_API_KEY` - CREATED_TEST_API_KEY
       *     * `DELETED_TEST_API_KEY` - DELETED_TEST_API_KEY
       *     * `REGENERATED_PRODUCTION_API_KEY` - REGENERATED_PRODUCTION_API_KEY
       *     * `INVITED_USER` - INVITED_USER
       *     * `TWO_FACTOR_AUTH_ENABLED` - TWO_FACTOR_AUTH_ENABLED
       *     * `TWO_FACTOR_AUTH_DISABLED` - TWO_FACTOR_AUTH_DISABLED
       *     * `DELETED_LINKED_ACCOUNT` - DELETED_LINKED_ACCOUNT
       *     * `CREATED_DESTINATION` - CREATED_DESTINATION
       *     * `DELETED_DESTINATION` - DELETED_DESTINATION
       *     * `CHANGED_DESTINATION` - CHANGED_DESTINATION
       *     * `CHANGED_SCOPES` - CHANGED_SCOPES
       *     * `CHANGED_PERSONAL_INFORMATION` - CHANGED_PERSONAL_INFORMATION
       *     * `CHANGED_ORGANIZATION_SETTINGS` - CHANGED_ORGANIZATION_SETTINGS
       *     * `ENABLED_INTEGRATION` - ENABLED_INTEGRATION
       *     * `DISABLED_INTEGRATION` - DISABLED_INTEGRATION
       *     * `ENABLED_CATEGORY` - ENABLED_CATEGORY
       *     * `DISABLED_CATEGORY` - DISABLED_CATEGORY
       *     * `CHANGED_PASSWORD` - CHANGED_PASSWORD
       *     * `RESET_PASSWORD` - RESET_PASSWORD
       *     * `ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
       *     * `ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
       *     * `DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
       *     * `DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
       *     * `CREATED_INTEGRATION_WIDE_FIELD_MAPPING` - CREATED_INTEGRATION_WIDE_FIELD_MAPPING
       *     * `CREATED_LINKED_ACCOUNT_FIELD_MAPPING` - CREATED_LINKED_ACCOUNT_FIELD_MAPPING
       *     * `CHANGED_INTEGRATION_WIDE_FIELD_MAPPING` - CHANGED_INTEGRATION_WIDE_FIELD_MAPPING
       *     * `CHANGED_LINKED_ACCOUNT_FIELD_MAPPING` - CHANGED_LINKED_ACCOUNT_FIELD_MAPPING
       *     * `DELETED_INTEGRATION_WIDE_FIELD_MAPPING` - DELETED_INTEGRATION_WIDE_FIELD_MAPPING
       *     * `DELETED_LINKED_ACCOUNT_FIELD_MAPPING` - DELETED_LINKED_ACCOUNT_FIELD_MAPPING
       *     * `CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
       *     * `CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
       *     * `DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
       *     * `FORCED_LINKED_ACCOUNT_RESYNC` - FORCED_LINKED_ACCOUNT_RESYNC
       *     * `MUTED_ISSUE` - MUTED_ISSUE
       *     * `GENERATED_MAGIC_LINK` - GENERATED_MAGIC_LINK
       *     * `ENABLED_MERGE_WEBHOOK` - ENABLED_MERGE_WEBHOOK
       *     * `DISABLED_MERGE_WEBHOOK` - DISABLED_MERGE_WEBHOOK
       *     * `MERGE_WEBHOOK_TARGET_CHANGED` - MERGE_WEBHOOK_TARGET_CHANGED
       *     * `END_USER_CREDENTIALS_ACCESSED` - END_USER_CREDENTIALS_ACCESSED
       * @example CHANGED_SCOPES
       */
      event_type: components['schemas']['EventTypeEnum']
      /** @example Organization-wide Scopes for model hris.Employee updated from Read to Read+Write */
      event_description: string
      /** Format: date-time */
      readonly created_at?: string
    }
    /** @description # The AvailableActions Object
     *     ### Description
     *     The `Activity` object is used to see all available model/operation combinations for an integration.
     *
     *     ### Usage Example
     *     Fetch all the actions available for the `Zenefits` integration. */
    AvailableActions: {
      /** @example {
       *       "name": "Lever",
       *       "categories": [
       *         "ats"
       *       ],
       *       "image": "https://merge-api-production.s3.amazonaws.com/media/Lever_Logo.png",
       *       "square_image": "https://merge-api-production.s3.amazonaws.com/media/Lever_Square_Logo.png",
       *       "color": "#262A34",
       *       "is_in_beta": "true",
       *       "api_endpoints_to_documentation_urls": "{'GET': [('/common-model-scopes', 'https://docs.merge.dev/accounting/common-model-scopes/#common_model_scopes_retrieve')], 'POST': []}"
       *     } */
      integration: components['schemas']['AccountIntegration']
      /** @example true */
      passthrough_available: boolean
      /** @example [
       *       {
       *         "model_name": "Candidate",
       *         "available_operations": [
       *           "FETCH",
       *           "CREATE"
       *         ],
       *         "required_post_parameters": [
       *           "remote_user_id"
       *         ],
       *         "supported_fields": [
       *           "first_name",
       *           "last_name",
       *           "company",
       *           "title"
       *         ]
       *       }
       *     ] */
      available_model_operations?: components['schemas']['ModelOperation'][]
    }
    /**
     * @description * `hris` - hris
     *     * `ats` - ats
     *     * `accounting` - accounting
     *     * `ticketing` - ticketing
     *     * `crm` - crm
     *     * `mktg` - mktg
     *     * `filestorage` - filestorage
     * @enum {string}
     */
    CategoriesEnum:
      | 'hris'
      | 'ats'
      | 'accounting'
      | 'ticketing'
      | 'crm'
      | 'mktg'
      | 'filestorage'
    /**
     * @description * `hris` - hris
     *     * `ats` - ats
     *     * `accounting` - accounting
     *     * `ticketing` - ticketing
     *     * `crm` - crm
     *     * `mktg` - mktg
     *     * `filestorage` - filestorage
     * @enum {string}
     */
    CategoryEnum:
      | 'hris'
      | 'ats'
      | 'accounting'
      | 'ticketing'
      | 'crm'
      | 'mktg'
      | 'filestorage'
    CommonModelScopeAPI: {
      /**
       * @description The common models you want to update the scopes for
       * @example [
       *       {
       *         "model_name": "Employee",
       *         "model_permissions": {
       *           "READ": {
       *             "is_enabled": true
       *           },
       *           "WRITE": {
       *             "is_enabled": false
       *           }
       *         },
       *         "field_permissions": {
       *           "enabled_fields": [
       *             "avatar",
       *             "created_at",
       *             "custom_fields",
       *             "date_of_birth",
       *             "first_name",
       *             "gender",
       *             "remote_created_at",
       *             "remote_data"
       *           ],
       *           "disabled_fields": [
       *             "company",
       *             "employments",
       *             "groups",
       *             "home_location",
       *             "manager",
       *             "work_location"
       *           ]
       *         }
       *       }
       *     ]
       */
      common_models: components['schemas']['IndividualCommonModelScopeDeserializer'][]
    }
    CommonModelScopesBodyRequest: {
      /** @example hris.Employee */
      model_id: string
      /** @example [
       *       "READ",
       *       "WRITE"
       *     ] */
      enabled_actions: components['schemas']['EnabledActionsEnum'][]
      /** @example [
       *       "first_name"
       *     ] */
      disabled_fields: string[]
    }
    CreateFieldMappingRequest: {
      /**
       * @description The name of the target field you want this remote field to map to.
       * @example example_target_field_name
       */
      target_field_name: string
      /**
       * @description The description of the target field you want this remote field to map to.
       * @example this is a example description of the target field
       */
      target_field_description: string
      /**
       * @description The field traversal path of the remote field listed when you hit the GET /remote-fields endpoint.
       * @example [
       *       "example_remote_field"
       *     ]
       */
      remote_field_traversal_path: unknown[]
      /**
       * @description The method of the remote endpoint where the remote field is coming from.
       * @example GET
       */
      remote_method: string
      /**
       * @description The path of the remote endpoint where the remote field is coming from.
       * @example /example-url-path
       */
      remote_url_path: string
      /**
       * @description The name of the Common Model that the remote field corresponds to in a given category.
       * @example ExampleCommonModel
       */
      common_model_name: string
    }
    /** @description # The DataPassthrough Object
     *     ### Description
     *     The `DataPassthrough` object is used to send information to an otherwise-unsupported third-party endpoint.
     *
     *     ### Usage Example
     *     Create a `DataPassthrough` to get team hierarchies from your Rippling integration. */
    DataPassthroughRequest: {
      /** @example POST */
      method: components['schemas']['MethodEnum']
      /**
       * @description The path of the request in the third party's platform.
       * @example /scooters
       */
      path: string
      /**
       * @description An optional override of the third party's base url for the request.
       * @example https://api.example.com
       */
      base_url_override?: string | null
      /**
       * @description The data with the request. You must include a `request_format` parameter matching the data's format
       * @example {"company": "Lime", "model": "Gen 2.5"}
       */
      data?: string | null
      /** @description Pass an array of `MultipartFormField` objects in here instead of using the `data` param if `request_format` is set to `MULTIPART`. */
      multipart_form_data?:
        | components['schemas']['MultipartFormFieldRequest'][]
        | null
      /**
       * @description The headers to use for the request (Merge will handle the account's authorization headers). `Content-Type` header is required for passthrough. Choose content type corresponding to expected format of receiving server.
       * @example {
       *       "EXTRA-HEADER": "value"
       *     }
       */
      headers?: {
        [key: string]: unknown
      } | null
      /** @example JSON */
      request_format?: components['schemas']['RequestFormatEnum'] | null
      /** @description Optional. If true, the response will always be an object of the form `{"type": T, "value": ...}` where `T` will be one of `string, boolean, number, null, array, object`. */
      normalize_response?: boolean
    }
    DebugModeLog: {
      /** @example 99433219-8017-4acd-bb3c-ceb23d663832 */
      log_id: string
      /** @example https://app.merge.dev/logs/99433219-8017-4acd-bb3c-ceb23d663832 */
      dashboard_view: string
      /** @example {
       *       "url": "www.exampleintegration.com/api/v1/exampleapi",
       *       "method": "POST",
       *       "status_code": 200
       *     } */
      log_summary: components['schemas']['DebugModelLogSummary']
    }
    DebugModelLogSummary: {
      /** @example www.exampleintegration.com/api/v1/exampleapi */
      url: string
      /** @example POST */
      method: string
      /** @example 200 */
      status_code: number
    }
    /** @description # The Drive Object
     *     ### Description
     *     The `Drive` object is used to represent a drive that contains the folders and files in the user's workspace.
     *     ### Usage Example
     *     Fetch from the `GET /api/filestorage/v1/drives` endpoint and view their drives. */
    Drive: {
      /**
       * Format: uuid
       * @example f9e3d315-d6c2-458e-85c4-fa773d6ff4a6
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 2039348
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The drive's name.
       * @example My Drive
       */
      name?: string | null
      /**
       * Format: date-time
       * @description When the third party's drive was created.
       */
      remote_created_at?: string | null
      /**
       * @description The drive's url.
       * @example https://drive.com/drives/2039349
       */
      drive_url?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      /** @example [
       *       {
       *         "path": "/drives",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `READ` - READ
     *     * `WRITE` - WRITE
     * @enum {string}
     */
    EnabledActionsEnum: 'READ' | 'WRITE'
    /**
     * @description * `RAW` - RAW
     *     * `BASE64` - BASE64
     *     * `GZIP_BASE64` - GZIP_BASE64
     * @enum {string}
     */
    EncodingEnum: 'RAW' | 'BASE64' | 'GZIP_BASE64'
    EndUserDetailsRequest: {
      /**
       * @description Your end user's email address. This is purely for identification purposes - setting this value will not cause any emails to be sent.
       * @example example@gmail.com
       */
      end_user_email_address: string
      /**
       * @description Your end user's organization.
       * @example Test Organization
       */
      end_user_organization_name: string
      /**
       * @description This unique identifier typically represents the ID for your end user in your product's database. This value must be distinct from other Linked Accounts' unique identifiers.
       * @example 12345
       */
      end_user_origin_id: string
      /**
       * @description The integration categories to show in Merge Link.
       * @example [
       *       "hris",
       *       "ats"
       *     ]
       */
      categories: components['schemas']['CategoriesEnum'][]
      /**
       * @description The slug of a specific pre-selected integration for this linking flow token. For examples of slugs, see https://docs.merge.dev/guides/merge-link/single-integration/.
       * @example bamboohr
       */
      integration?: string | null
      /**
       * @description An integer number of minutes between [30, 720 or 10080 if for a Magic Link URL] for how long this token is valid. Defaults to 30.
       * @default 30
       */
      link_expiry_mins: number
      /**
       * @description Whether to generate a Magic Link URL. Defaults to false. For more information on Magic Link, see https://merge.dev/blog/integrations-fast-say-hello-to-magic-link.
       * @default false
       */
      should_create_magic_link_url: boolean | null
      /**
       * @description Whether to generate a Magic Link URL on the Admin Needed screen during the linking flow. Defaults to false. For more information on Magic Link, see https://merge.dev/blog/integrations-fast-say-hello-to-magic-link.
       * @default false
       */
      hide_admin_magic_link: boolean | null
      /** @description An array of objects to specify the models and fields that will be disabled for a given Linked Account. Each object uses model_id, enabled_actions, and disabled_fields to specify the model, method, and fields that are scoped for a given Linked Account. */
      common_models?:
        | components['schemas']['CommonModelScopesBodyRequest'][]
        | null
      /**
       * @description When creating a Link Token, you can set permissions for Common Models that will apply to the account that is going to be linked. Any model or field not specified in link token payload will default to existing settings.
       * @example {
       *       "hris": [
       *         {
       *           "model_name": "Employee",
       *           "model_permissions": {
       *             "READ": {
       *               "is_enabled": true
       *             },
       *             "WRITE": {
       *               "is_enabled": true
       *             }
       *           },
       *           "field_permissions": {
       *             "enabled_fields": [
       *               "first_name",
       *               "last_name",
       *               "personal_email"
       *             ],
       *             "disabled_fields": [
       *               "preferred_name"
       *             ]
       *           }
       *         },
       *         {
       *           "model_name": "Employment",
       *           "model_permissions": {
       *             "READ": {
       *               "is_enabled": false
       *             },
       *             "WRITE": {
       *               "is_enabled": false
       *             }
       *           },
       *           "field_permissions": {
       *             "enabled_fields": [
       *               "effective_date"
       *             ]
       *           }
       *         }
       *       ],
       *       "ats": [
       *         {
       *           "model_name": "Job",
       *           "model_permissions": {
       *             "READ": {
       *               "is_enabled": true
       *             },
       *             "WRITE": {
       *               "is_enabled": true
       *             }
       *           },
       *           "field_permissions": {
       *             "enabled_fields": [
       *               "name"
       *             ],
       *             "disabled_fields": [
       *               "description"
       *             ]
       *           }
       *         },
       *         {
       *           "model_name": "Department",
       *           "model_permissions": {
       *             "READ": {
       *               "is_enabled": true
       *             },
       *             "WRITE": {
       *               "is_enabled": true
       *             }
       *           }
       *         }
       *       ]
       *     }
       */
      category_common_model_scopes?: {
        [
          key: string
        ]: components['schemas']['IndividualCommonModelScopeDeserializerRequest'][]
      } | null
      /**
       * @description The following subset of IETF language tags can be used to configure localization.
       *
       *     * `en` - en
       *     * `de` - de
       * @example en
       */
      language?: components['schemas']['LanguageEnum'] | null
      /**
       * @description The boolean that indicates whether initial, periodic, and force syncs will be disabled.
       * @default false
       */
      are_syncs_disabled: boolean | null
      /**
       * @description A JSON object containing integration-specific configuration options.
       * @example {
       *       "rippling": {
       *         "oauth_code": "3h1jj8ssdf31dfji3o1jjdfjasd"
       *       }
       *     }
       */
      integration_specific_config?: {
        [key: string]: unknown
      } | null
    }
    ErrorValidationProblem: {
      /** @example {
       *       "pointer": "/model/custom_fields"
       *     } */
      source?: components['schemas']['ValidationProblemSource']
      /** @example Missing Required Field */
      title: string
      /** @example custom_fields is a required field on model. */
      detail: string
      /** @example MISSING_REQUIRED_FIELD */
      problem_type: string
    }
    /**
     * @description * `CREATED_REMOTE_PRODUCTION_API_KEY` - CREATED_REMOTE_PRODUCTION_API_KEY
     *     * `DELETED_REMOTE_PRODUCTION_API_KEY` - DELETED_REMOTE_PRODUCTION_API_KEY
     *     * `CREATED_TEST_API_KEY` - CREATED_TEST_API_KEY
     *     * `DELETED_TEST_API_KEY` - DELETED_TEST_API_KEY
     *     * `REGENERATED_PRODUCTION_API_KEY` - REGENERATED_PRODUCTION_API_KEY
     *     * `INVITED_USER` - INVITED_USER
     *     * `TWO_FACTOR_AUTH_ENABLED` - TWO_FACTOR_AUTH_ENABLED
     *     * `TWO_FACTOR_AUTH_DISABLED` - TWO_FACTOR_AUTH_DISABLED
     *     * `DELETED_LINKED_ACCOUNT` - DELETED_LINKED_ACCOUNT
     *     * `CREATED_DESTINATION` - CREATED_DESTINATION
     *     * `DELETED_DESTINATION` - DELETED_DESTINATION
     *     * `CHANGED_DESTINATION` - CHANGED_DESTINATION
     *     * `CHANGED_SCOPES` - CHANGED_SCOPES
     *     * `CHANGED_PERSONAL_INFORMATION` - CHANGED_PERSONAL_INFORMATION
     *     * `CHANGED_ORGANIZATION_SETTINGS` - CHANGED_ORGANIZATION_SETTINGS
     *     * `ENABLED_INTEGRATION` - ENABLED_INTEGRATION
     *     * `DISABLED_INTEGRATION` - DISABLED_INTEGRATION
     *     * `ENABLED_CATEGORY` - ENABLED_CATEGORY
     *     * `DISABLED_CATEGORY` - DISABLED_CATEGORY
     *     * `CHANGED_PASSWORD` - CHANGED_PASSWORD
     *     * `RESET_PASSWORD` - RESET_PASSWORD
     *     * `ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
     *     * `ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
     *     * `DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
     *     * `DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
     *     * `CREATED_INTEGRATION_WIDE_FIELD_MAPPING` - CREATED_INTEGRATION_WIDE_FIELD_MAPPING
     *     * `CREATED_LINKED_ACCOUNT_FIELD_MAPPING` - CREATED_LINKED_ACCOUNT_FIELD_MAPPING
     *     * `CHANGED_INTEGRATION_WIDE_FIELD_MAPPING` - CHANGED_INTEGRATION_WIDE_FIELD_MAPPING
     *     * `CHANGED_LINKED_ACCOUNT_FIELD_MAPPING` - CHANGED_LINKED_ACCOUNT_FIELD_MAPPING
     *     * `DELETED_INTEGRATION_WIDE_FIELD_MAPPING` - DELETED_INTEGRATION_WIDE_FIELD_MAPPING
     *     * `DELETED_LINKED_ACCOUNT_FIELD_MAPPING` - DELETED_LINKED_ACCOUNT_FIELD_MAPPING
     *     * `CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
     *     * `CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
     *     * `DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
     *     * `FORCED_LINKED_ACCOUNT_RESYNC` - FORCED_LINKED_ACCOUNT_RESYNC
     *     * `MUTED_ISSUE` - MUTED_ISSUE
     *     * `GENERATED_MAGIC_LINK` - GENERATED_MAGIC_LINK
     *     * `ENABLED_MERGE_WEBHOOK` - ENABLED_MERGE_WEBHOOK
     *     * `DISABLED_MERGE_WEBHOOK` - DISABLED_MERGE_WEBHOOK
     *     * `MERGE_WEBHOOK_TARGET_CHANGED` - MERGE_WEBHOOK_TARGET_CHANGED
     *     * `END_USER_CREDENTIALS_ACCESSED` - END_USER_CREDENTIALS_ACCESSED
     * @enum {string}
     */
    EventTypeEnum:
      | 'CREATED_REMOTE_PRODUCTION_API_KEY'
      | 'DELETED_REMOTE_PRODUCTION_API_KEY'
      | 'CREATED_TEST_API_KEY'
      | 'DELETED_TEST_API_KEY'
      | 'REGENERATED_PRODUCTION_API_KEY'
      | 'INVITED_USER'
      | 'TWO_FACTOR_AUTH_ENABLED'
      | 'TWO_FACTOR_AUTH_DISABLED'
      | 'DELETED_LINKED_ACCOUNT'
      | 'CREATED_DESTINATION'
      | 'DELETED_DESTINATION'
      | 'CHANGED_DESTINATION'
      | 'CHANGED_SCOPES'
      | 'CHANGED_PERSONAL_INFORMATION'
      | 'CHANGED_ORGANIZATION_SETTINGS'
      | 'ENABLED_INTEGRATION'
      | 'DISABLED_INTEGRATION'
      | 'ENABLED_CATEGORY'
      | 'DISABLED_CATEGORY'
      | 'CHANGED_PASSWORD'
      | 'RESET_PASSWORD'
      | 'ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION'
      | 'ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT'
      | 'DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION'
      | 'DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT'
      | 'CREATED_INTEGRATION_WIDE_FIELD_MAPPING'
      | 'CREATED_LINKED_ACCOUNT_FIELD_MAPPING'
      | 'CHANGED_INTEGRATION_WIDE_FIELD_MAPPING'
      | 'CHANGED_LINKED_ACCOUNT_FIELD_MAPPING'
      | 'DELETED_INTEGRATION_WIDE_FIELD_MAPPING'
      | 'DELETED_LINKED_ACCOUNT_FIELD_MAPPING'
      | 'CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE'
      | 'CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE'
      | 'DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE'
      | 'FORCED_LINKED_ACCOUNT_RESYNC'
      | 'MUTED_ISSUE'
      | 'GENERATED_MAGIC_LINK'
      | 'ENABLED_MERGE_WEBHOOK'
      | 'DISABLED_MERGE_WEBHOOK'
      | 'MERGE_WEBHOOK_TARGET_CHANGED'
      | 'END_USER_CREDENTIALS_ACCESSED'
    ExternalTargetFieldAPI: {
      /** @example example_target_field_name */
      readonly name?: string | null
      /** @example this is a example description of a target field */
      readonly description?: string | null
      /** @example true */
      readonly is_mapped?: string | null
    }
    ExternalTargetFieldAPIResponse: {
      File?: components['schemas']['ExternalTargetFieldAPI'][]
      Folder?: components['schemas']['ExternalTargetFieldAPI'][]
      Drive?: components['schemas']['ExternalTargetFieldAPI'][]
      Group?: components['schemas']['ExternalTargetFieldAPI'][]
      User?: components['schemas']['ExternalTargetFieldAPI'][]
    }
    FieldMappingApiInstance: {
      /**
       * Format: uuid
       * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
       */
      readonly id?: string
      readonly is_integration_wide?: boolean
      /** @example {
       *       "name": "example_target_field_name",
       *       "description": "this is a example description of a target field",
       *       "is_organization_wide": true
       *     } */
      readonly target_field?: {
        name: string
        description: string
        is_organization_wide: boolean
      } | null
      /** @example {
       *       "remote_key_name": "example_remote_field_key",
       *       "schema": {
       *         "type": "string"
       *       },
       *       "remote_endpoint_info": {
       *         "method": "GET",
       *         "url_path": "/example-url-path",
       *         "field_traversal_path": [
       *           "example_remote_field_key"
       *         ]
       *       }
       *     } */
      readonly remote_field?: {
        remote_key_name: string | null
        schema: {
          [key: string]: unknown
        } | null
        remote_endpoint_info: {
          method: string | null
          url_path: string | null
          field_traversal_path: string[] | null
        }
      } | null
    }
    FieldMappingApiInstanceResponse: {
      File?: components['schemas']['FieldMappingApiInstance'][]
      Folder?: components['schemas']['FieldMappingApiInstance'][]
      Drive?: components['schemas']['FieldMappingApiInstance'][]
      Group?: components['schemas']['FieldMappingApiInstance'][]
      User?: components['schemas']['FieldMappingApiInstance'][]
    }
    FieldMappingInstanceResponse: {
      model: components['schemas']['FieldMappingApiInstance']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    FieldPermissionDeserializer: {
      enabled_fields?: unknown[]
      disabled_fields?: unknown[]
    }
    FieldPermissionDeserializerRequest: {
      enabled_fields?: unknown[]
      disabled_fields?: unknown[]
    }
    /** @description # The File Object
     *     ### Description
     *     The `File` object is used to represent a file in the workspace. The Object typically exists under a folder or drive, if it exists.
     *     ### Usage Example
     *     Fetch from the `GET /api/filestorage/v1/files` endpoint and view their files. */
    File: {
      /**
       * Format: uuid
       * @example 45ce474c-dhcj-43a6-754r-629f799f7d68
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 12
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The file's name.
       * @example merge_file_storage_launch.docx
       */
      name?: string | null
      /**
       * @description The URL to access the file.
       * @example https://drive.com/1234
       */
      file_url?: string | null
      /**
       * @description The URL that produces a thumbnail preview of the file. Typically an image.
       * @example https://drive.com/1234/thumbnail.png
       */
      file_thumbnail_url?: string | null
      /**
       * Format: int64
       * @description The file's size, in bytes.
       * @example 254
       */
      size?: number | null
      /**
       * @description The file's mime type.
       * @example application/vnd.openxmlformats-officedocument.wordprocessingml.document
       */
      mime_type?: string | null
      /**
       * @description The file's description.
       * @example Use common model scopes to redact data returned in Merge's Common Models!
       */
      description?: string | null
      /**
       * Format: uuid
       * @description The folder that the file belongs to.
       * @example 8e889422-e086-42dc-b99e-24d732039b0b
       */
      folder?: string | null
      /** @example [
       *       {
       *         "id": "31ce489c-asdf-68b1-754r-629f799f7123",
       *         "remote_id": "102895",
       *         "created_at": "2020-03-31T00:00:00Z",
       *         "modified_at": "2020-06-20T00:00:00Z",
       *         "user": "21ce474c-asdf-34a2-754r-629f799f7d12",
       *         "group": null,
       *         "type": "USER",
       *         "roles": [
       *           "OWNER"
       *         ],
       *         "remote_data": null
       *       },
       *       {
       *         "id": "2ea7db93-1ae9-4686-82c9-35c768000736",
       *         "remote_id": null,
       *         "created_at": "2020-03-31T00:00:00Z",
       *         "modified_at": "2020-06-20T00:00:00Z",
       *         "user": null,
       *         "group": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
       *         "type": "GROUP",
       *         "roles": [
       *           "READ"
       *         ],
       *         "remote_data": null
       *       }
       *     ] */
      permissions?: components['schemas']['Permission'][]
      /**
       * Format: uuid
       * @description The drive that the file belongs to.
       * @example 204ca79c-0c86-4f6c-9ca6-61b946a4708a
       */
      drive?: string | null
      /**
       * Format: date-time
       * @description When the third party's file was created.
       * @example 2022-02-02T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's file was updated.
       * @example 2022-02-03T00:00:00Z
       */
      remote_updated_at?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      /** @example [
       *       {
       *         "path": "/files",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The File Object
     *     ### Description
     *     The `File` object is used to represent a file in the workspace. The Object typically exists under a folder or drive, if it exists.
     *     ### Usage Example
     *     Fetch from the `GET /api/filestorage/v1/files` endpoint and view their files. */
    FileRequest: {
      /**
       * @description The file's name.
       * @example merge_file_storage_launch.docx
       */
      name?: string | null
      /**
       * @description The URL to access the file.
       * @example https://drive.com/1234
       */
      file_url?: string | null
      /**
       * @description The URL that produces a thumbnail preview of the file. Typically an image.
       * @example https://drive.com/1234/thumbnail.png
       */
      file_thumbnail_url?: string | null
      /**
       * Format: int64
       * @description The file's size, in bytes.
       * @example 254
       */
      size?: number | null
      /**
       * @description The file's mime type.
       * @example application/vnd.openxmlformats-officedocument.wordprocessingml.document
       */
      mime_type?: string | null
      /**
       * @description The file's description.
       * @example Use common model scopes to redact data returned in Merge's Common Models!
       */
      description?: string | null
      /**
       * Format: uuid
       * @description The folder that the file belongs to.
       * @example 8e889422-e086-42dc-b99e-24d732039b0b
       */
      folder?: string | null
      /** @example [
       *       {
       *         "id": "31ce489c-asdf-68b1-754r-629f799f7123",
       *         "remote_id": "102895",
       *         "created_at": "2020-03-31T00:00:00Z",
       *         "modified_at": "2020-06-20T00:00:00Z",
       *         "user": "21ce474c-asdf-34a2-754r-629f799f7d12",
       *         "group": null,
       *         "type": "USER",
       *         "roles": [
       *           "OWNER"
       *         ],
       *         "remote_data": null
       *       },
       *       {
       *         "id": "2ea7db93-1ae9-4686-82c9-35c768000736",
       *         "remote_id": null,
       *         "created_at": "2020-03-31T00:00:00Z",
       *         "modified_at": "2020-06-20T00:00:00Z",
       *         "user": null,
       *         "group": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
       *         "type": "GROUP",
       *         "roles": [
       *           "READ"
       *         ],
       *         "remote_data": null
       *       }
       *     ] */
      permissions?: components['schemas']['PermissionRequest'][]
      /**
       * Format: uuid
       * @description The drive that the file belongs to.
       * @example 204ca79c-0c86-4f6c-9ca6-61b946a4708a
       */
      drive?: string | null
      /** @example {
       *       "unique_integration_field": "unique_integration_field_value"
       *     } */
      integration_params?: {
        [key: string]: unknown
      } | null
      /** @example {
       *       "unique_linked_account_field": "unique_linked_account_field_value"
       *     } */
      linked_account_params?: {
        [key: string]: unknown
      } | null
    }
    FileStorageFileEndpointRequest: {
      model: components['schemas']['FileRequest']
    }
    FileStorageFileResponse: {
      model: components['schemas']['File']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    FileStorageFolderEndpointRequest: {
      model: components['schemas']['FolderRequest']
    }
    FileStorageFolderResponse: {
      model: components['schemas']['Folder']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /** @description # The Folder Object
     *     ### Description
     *     The `Folder` object is used to represent a collection of files and/or folders in the workspace. Could be within a drive, if it exists.
     *     ### Usage Example
     *     Fetch from the `GET /api/filestorage/v1/folders` endpoint and view their folders. */
    Folder: {
      /**
       * Format: uuid
       * @example e021f7a7-74fc-4487-8e12-14180c92d3b7
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 14
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The folder's name.
       * @example R&D
       */
      name?: string | null
      /**
       * @description The URL to access the folder.
       * @example https://drive.com/1234
       */
      folder_url?: string | null
      /**
       * Format: int64
       * @description The folder's size, in bytes.
       * @example 2738000
       */
      size?: number | null
      /**
       * @description The folder's description.
       * @example All things R&D related at Merge!
       */
      description?: string | null
      /**
       * Format: uuid
       * @description The folder that the folder belongs to.
       * @example 47ce474c-asdf-34a2-754r-629f799f7d31
       */
      parent_folder?: string | null
      /**
       * Format: uuid
       * @description The drive that the folder belongs to.
       * @example 31ce474c-asdf-34a2-754r-629f799f7d12
       */
      drive?: string | null
      /** @example [
       *       {
       *         "id": "105b9265-0d52-4e5c-bb88-0cb681ec77f6",
       *         "remote_id": "102895",
       *         "created_at": "2020-03-31T00:00:00Z",
       *         "modified_at": "2020-06-20T00:00:00Z",
       *         "user": "21ce474c-asdf-34a2-754r-629f799f7d12",
       *         "group": null,
       *         "type": "USER",
       *         "roles": [
       *           "OWNER"
       *         ],
       *         "remote_data": null
       *       },
       *       {
       *         "id": "a77ac1b4-a04f-4baa-a388-de3c0c173e1c",
       *         "remote_id": null,
       *         "created_at": "2020-03-31T00:00:00Z",
       *         "modified_at": "2020-06-20T00:00:00Z",
       *         "user": null,
       *         "group": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
       *         "type": "GROUP",
       *         "roles": [
       *           "READ"
       *         ],
       *         "remote_data": null
       *       }
       *     ] */
      permissions?: components['schemas']['Permission'][]
      /**
       * Format: date-time
       * @description When the third party's folder was created.
       * @example 2024-02-02T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's folder was updated.
       * @example 2024-06-10T00:00:00Z
       */
      remote_updated_at?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      /** @example [
       *       {
       *         "path": "/folders",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Folder Object
     *     ### Description
     *     The `Folder` object is used to represent a collection of files and/or folders in the workspace. Could be within a drive, if it exists.
     *     ### Usage Example
     *     Fetch from the `GET /api/filestorage/v1/folders` endpoint and view their folders. */
    FolderRequest: {
      /**
       * @description The folder's name.
       * @example R&D
       */
      name?: string | null
      /**
       * @description The URL to access the folder.
       * @example https://drive.com/1234
       */
      folder_url?: string | null
      /**
       * Format: int64
       * @description The folder's size, in bytes.
       * @example 2738000
       */
      size?: number | null
      /**
       * @description The folder's description.
       * @example All things R&D related at Merge!
       */
      description?: string | null
      /**
       * Format: uuid
       * @description The folder that the folder belongs to.
       * @example 47ce474c-asdf-34a2-754r-629f799f7d31
       */
      parent_folder?: string | null
      /**
       * Format: uuid
       * @description The drive that the folder belongs to.
       * @example 31ce474c-asdf-34a2-754r-629f799f7d12
       */
      drive?: string | null
      /** @example [
       *       {
       *         "id": "105b9265-0d52-4e5c-bb88-0cb681ec77f6",
       *         "remote_id": "102895",
       *         "created_at": "2020-03-31T00:00:00Z",
       *         "modified_at": "2020-06-20T00:00:00Z",
       *         "user": "21ce474c-asdf-34a2-754r-629f799f7d12",
       *         "group": null,
       *         "type": "USER",
       *         "roles": [
       *           "OWNER"
       *         ],
       *         "remote_data": null
       *       },
       *       {
       *         "id": "a77ac1b4-a04f-4baa-a388-de3c0c173e1c",
       *         "remote_id": null,
       *         "created_at": "2020-03-31T00:00:00Z",
       *         "modified_at": "2020-06-20T00:00:00Z",
       *         "user": null,
       *         "group": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
       *         "type": "GROUP",
       *         "roles": [
       *           "READ"
       *         ],
       *         "remote_data": null
       *       }
       *     ] */
      permissions?: components['schemas']['PermissionRequest'][]
      /** @example {
       *       "unique_integration_field": "unique_integration_field_value"
       *     } */
      integration_params?: {
        [key: string]: unknown
      } | null
      /** @example {
       *       "unique_linked_account_field": "unique_linked_account_field_value"
       *     } */
      linked_account_params?: {
        [key: string]: unknown
      } | null
    }
    /** @description # The GenerateRemoteKey Object
     *     ### Description
     *     The `GenerateRemoteKey` object is used to represent a request for a new remote key.
     *
     *     ### Usage Example
     *     Post a `GenerateRemoteKey` to create a new remote key. */
    GenerateRemoteKeyRequest: {
      /**
       * @description The name of the remote key
       * @example Remote Deployment Key 1
       */
      name: string
    }
    /** @description # The Group Object
     *     ### Description
     *     The `Group` object is used to represent any subset of `Users`. This can extend to company domains as well.
     *     ### Usage Example
     *     Fetch from the `GET /api/filestorage/v1/groups` endpoint and view their groups. */
    Group: {
      /**
       * Format: uuid
       * @example 5624aceb-0ea2-4864-ba08-354ac56b9884
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The group's name.
       * @example Administrators
       */
      name?: string | null
      /**
       * @description The users that belong in the group. If null, this typically means it's either a domain or the third-party platform does not surface this information.
       * @example [
       *       "6e93361b-8ae7-444b-bfa2-71206cbbee24"
       *     ]
       */
      users: string[]
      /**
       * @description Groups that inherit the permissions of the parent group.
       * @example [
       *       "a1f90b3c-633d-404e-a696-05cd54808676"
       *     ]
       */
      readonly child_groups?: string[]
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      /** @example [
       *       {
       *         "path": "/groups",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    IndividualCommonModelScopeDeserializer: {
      model_name: string
      model_permissions?: {
        [key: string]: components['schemas']['ModelPermissionDeserializer']
      }
      field_permissions?: components['schemas']['FieldPermissionDeserializer']
    }
    IndividualCommonModelScopeDeserializerRequest: {
      model_name: string
      model_permissions?: {
        [
          key: string
        ]: components['schemas']['ModelPermissionDeserializerRequest']
      }
      field_permissions?: components['schemas']['FieldPermissionDeserializerRequest']
    }
    Issue: {
      /**
       * Format: uuid
       * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
       */
      readonly id?: string
      /**
       * @description Status of the issue. Options: ('ONGOING', 'RESOLVED')
       *
       *     * `ONGOING` - ONGOING
       *     * `RESOLVED` - RESOLVED
       * @example ONGOING
       */
      status?: components['schemas']['IssueStatusEnum']
      /** @example Missing Permissions */
      error_description: string
      /** @example b82302de-852e-4e60-b050-edf9da3b7c02 */
      readonly end_user?: {
        [key: string]: unknown
      }
      /**
       * Format: date-time
       * @example 2022-12-05T16:19:15.161Z
       */
      first_incident_time?: string | null
      /**
       * Format: date-time
       * @example 2022-12-05T16:19:15.161Z
       */
      last_incident_time?: string | null
      /** @example true */
      readonly is_muted?: boolean
      /** @example [
       *       "Missing employee permissions.",
       *       "Missing time off permissions."
       *     ] */
      readonly error_details?: string[]
    }
    /**
     * @description * `ONGOING` - ONGOING
     *     * `RESOLVED` - RESOLVED
     * @enum {string}
     */
    IssueStatusEnum: 'ONGOING' | 'RESOLVED'
    /**
     * @description * `en` - en
     *     * `de` - de
     * @enum {string}
     */
    LanguageEnum: 'en' | 'de'
    LinkToken: {
      /** @example necdP7FtdASl1fQwm62be2_dM4wBG8_GactqoUV0 */
      link_token: string
      /** @example Lever */
      integration_name?: string
      /** @example https://link.merge.dev/asdfjkl12345jsndfgi2i83n */
      magic_link_url?: string
    }
    LinkedAccountCommonModelScopeDeserializerRequest: {
      /**
       * @description The common models you want to update the scopes for
       * @example [
       *       {
       *         "model_name": "Employee",
       *         "model_permissions": {
       *           "READ": {
       *             "is_enabled": true
       *           },
       *           "WRITE": {
       *             "is_enabled": false
       *           }
       *         },
       *         "field_permissions": {
       *           "enabled_fields": [
       *             "avatar",
       *             "home_location"
       *           ],
       *           "disabled_fields": [
       *             "work_location"
       *           ]
       *         }
       *       },
       *       {
       *         "model_name": "Benefit",
       *         "model_permissions": {
       *           "WRITE": {
       *             "is_enabled": false
       *           }
       *         }
       *       }
       *     ]
       */
      common_models: components['schemas']['IndividualCommonModelScopeDeserializerRequest'][]
    }
    LinkedAccountStatus: {
      linked_account_status: string
      can_make_request: boolean
    }
    MetaResponse: {
      /** @example {
       *       "type": "object",
       *       "properties": {
       *         "model": {
       *           "type": "object",
       *           "required": [
       *             "last_name",
       *             "first_name",
       *             "merge_categories",
       *             "new_york_city_neighborhood",
       *             "favorite_tv_shows",
       *             "favorite_watch"
       *           ],
       *           "properties": {
       *             "email_addresses": {
       *               "type": "array",
       *               "items": {
       *                 "type": "object",
       *                 "properties": {
       *                   "value": {
       *                     "type": "string",
       *                     "title": "value"
       *                   },
       *                   "email_address_type": {
       *                     "type": "string",
       *                     "title": "email_address_type"
       *                   },
       *                   "integration_params": {
       *                     "type": "object",
       *                     "title": "integration_params",
       *                     "properties": {}
       *                   },
       *                   "linked_account_params": {
       *                     "type": "object",
       *                     "title": "linked_account_params",
       *                     "properties": {}
       *                   }
       *                 }
       *               },
       *               "title": "email_addresses",
       *               "description": "Array of email_addresses objects"
       *             },
       *             "urls": {
       *               "type": "array",
       *               "items": {
       *                 "type": "object",
       *                 "properties": {
       *                   "value": {
       *                     "type": "string",
       *                     "title": "value"
       *                   },
       *                   "url_type": {
       *                     "type": "string",
       *                     "title": "url_type"
       *                   },
       *                   "integration_params": {
       *                     "type": "object",
       *                     "title": "integration_params",
       *                     "properties": {}
       *                   },
       *                   "linked_account_params": {
       *                     "type": "object",
       *                     "title": "linked_account_params",
       *                     "properties": {}
       *                   }
       *                 }
       *               },
       *               "title": "urls",
       *               "description": "Array of urls objects"
       *             },
       *             "first_name": {
       *               "type": "string",
       *               "title": "first_name",
       *               "description": "The first name."
       *             },
       *             "last_name": {
       *               "type": "string",
       *               "title": "last_name",
       *               "description": "The last name."
       *             },
       *             "phone_numbers": {
       *               "type": "array",
       *               "items": {
       *                 "type": "object",
       *                 "properties": {
       *                   "value": {
       *                     "type": "string",
       *                     "title": "value"
       *                   },
       *                   "phone_number_type": {
       *                     "type": "string",
       *                     "title": "phone_number_type"
       *                   },
       *                   "integration_params": {
       *                     "type": "object",
       *                     "title": "integration_params",
       *                     "properties": {}
       *                   },
       *                   "linked_account_params": {
       *                     "type": "object",
       *                     "title": "linked_account_params",
       *                     "properties": {}
       *                   }
       *                 }
       *               },
       *               "title": "phone_numbers",
       *               "description": "Array of phone_numbers objects"
       *             },
       *             "tags": {
       *               "type": "array",
       *               "items": {
       *                 "type": "string",
       *                 "format": "uuid"
       *               },
       *               "title": "tags",
       *               "description": "Array of tags names"
       *             },
       *             "attachments": {
       *               "type": "array",
       *               "items": {
       *                 "type": "object",
       *                 "properties": {
       *                   "id": {
       *                     "type": "string",
       *                     "title": "id"
       *                   },
       *                   "file_url": {
       *                     "type": "string",
       *                     "title": "file_url"
       *                   },
       *                   "file_name": {
       *                     "type": "string",
       *                     "title": "file_name"
       *                   },
       *                   "attachment_type": {
       *                     "type": "string",
       *                     "title": "attachment_type"
       *                   },
       *                   "integration_params": {
       *                     "type": "object",
       *                     "title": "integration_params",
       *                     "properties": {}
       *                   },
       *                   "linked_account_params": {
       *                     "type": "object",
       *                     "title": "linked_account_params",
       *                     "properties": {}
       *                   }
       *                 }
       *               },
       *               "title": "attachments",
       *               "description": "Array of attachments objects "
       *             },
       *             "merge_categories": {
       *               "type": "array",
       *               "categories": {
       *                 "type": "string",
       *                 "enum": [
       *                   "HRIS",
       *                   "ATS",
       *                   "Accounting",
       *                   "Ticketing",
       *                   "File Storage",
       *                   "CRM",
       *                   "Marketing Automation"
       *                 ],
       *                 "enum_information": [
       *                   {
       *                     "value": "HRIS",
       *                     "description": "Merge HRIS Category"
       *                   },
       *                   {
       *                     "value": "ATS",
       *                     "description": "Merge ATS Category"
       *                   },
       *                   {
       *                     "value": "Accounting",
       *                     "description": "Merge Accounting Category"
       *                   },
       *                   {
       *                     "value": "Ticketing",
       *                     "description": "Merge Ticketing Category"
       *                   },
       *                   {
       *                     "value": "File Storage",
       *                     "description": "Merge File Storage Category"
       *                   },
       *                   {
       *                     "value": "CRM",
       *                     "description": "Merge CRM Category"
       *                   },
       *                   {
       *                     "value": "Marketing Automation",
       *                     "description": "Merge Marketing Automation Category"
       *                   }
       *                 ]
       *               },
       *               "title": "Merge Categories",
       *               "description": "Array of Merge's Unified API Categories"
       *             },
       *             "new_york_city_neighborhood": {
       *               "type": "string",
       *               "title": "Borough",
       *               "description": "One of the 5 Boroughs of New York City"
       *             },
       *             "favorite_tv_shows": {
       *               "type": "array",
       *               "items": {
       *                 "type": "string",
       *                 "format": "uuid"
       *               },
       *               "title": "Favorite TV Shows",
       *               "description": "Array of TV Show objects on merge.tv_shows"
       *             },
       *             "favorite_watch": {
       *               "type": "string",
       *               "title": "Favorite Watch",
       *               "description": "Favorite watch of all time"
       *             }
       *           }
       *         }
       *       }
       *     } */
      request_schema: {
        [key: string]: unknown
      }
      remote_field_classes?: {
        [key: string]: unknown
      }
      /** @example {
       *       "linked_account_status": "COMPLETE",
       *       "can_make_request": true
       *     } */
      status?: components['schemas']['LinkedAccountStatus']
      has_conditional_params: boolean
      has_required_linked_account_params: boolean
    }
    /**
     * @description * `GET` - GET
     *     * `OPTIONS` - OPTIONS
     *     * `HEAD` - HEAD
     *     * `POST` - POST
     *     * `PUT` - PUT
     *     * `PATCH` - PATCH
     *     * `DELETE` - DELETE
     * @enum {string}
     */
    MethodEnum: 'GET' | 'OPTIONS' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    /** @description # The ModelOperation Object
     *     ### Description
     *     The `ModelOperation` object is used to represent the operations that are currently supported for a given model.
     *
     *     ### Usage Example
     *     View what operations are supported for the `Candidate` endpoint. */
    ModelOperation: {
      /** @example Candidate */
      model_name: string
      /** @example [
       *       "FETCH",
       *       "CREATE"
       *     ] */
      available_operations: string[]
      /** @example [
       *       "remote_user_id"
       *     ] */
      required_post_parameters: string[]
      /** @example [
       *       "first_name",
       *       "last_name",
       *       "company",
       *       "title"
       *     ] */
      supported_fields: string[]
    }
    ModelPermissionDeserializer: {
      is_enabled?: boolean
    }
    ModelPermissionDeserializerRequest: {
      is_enabled?: boolean
    }
    /** @description # The MultipartFormField Object
     *     ### Description
     *     The `MultipartFormField` object is used to represent fields in an HTTP request using `multipart/form-data`.
     *
     *     ### Usage Example
     *     Create a `MultipartFormField` to define a multipart form entry. */
    MultipartFormFieldRequest: {
      /**
       * @description The name of the form field
       * @example resume
       */
      name: string
      /**
       * @description The data for the form field.
       * @example SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=
       */
      data: string
      /**
       * @description The encoding of the value of `data`. Defaults to `RAW` if not defined.
       *
       *     * `RAW` - RAW
       *     * `BASE64` - BASE64
       *     * `GZIP_BASE64` - GZIP_BASE64
       * @default RAW
       * @example BASE64
       */
      encoding: components['schemas']['EncodingEnum']
      /**
       * @description The file name of the form field, if the field is for a file.
       * @example resume.pdf
       */
      file_name?: string | null
      /**
       * @description The MIME type of the file, if the field is for a file.
       * @example application/pdf
       */
      content_type?: string | null
    }
    PaginatedAccountDetailsAndActionsList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AccountDetailsAndActions'][]
    }
    PaginatedAuditLogEventList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AuditLogEvent'][]
    }
    PaginatedDriveList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Drive'][]
    }
    PaginatedFileList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['File'][]
    }
    PaginatedFolderList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Folder'][]
    }
    PaginatedGroupList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Group'][]
    }
    PaginatedIssueList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Issue'][]
    }
    PaginatedSyncStatusList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['SyncStatus'][]
    }
    PaginatedUserList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['User'][]
    }
    PatchedEditFieldMappingRequest: {
      /**
       * @description The field traversal path of the remote field listed when you hit the GET /remote-fields endpoint.
       * @example [
       *       "example_remote_field_name"
       *     ]
       */
      remote_field_traversal_path?: unknown[]
      /**
       * @description The method of the remote endpoint where the remote field is coming from.
       * @example GET
       */
      remote_method?: string
      /**
       * @description The path of the remote endpoint where the remote field is coming from.
       * @example /example-url-path
       */
      remote_url_path?: string
    }
    /** @description # The Permission Object
     *     ### Description
     *     The Permission object is used to represent a user's or group's access to a File or Folder. Permissions are unexpanded by default.
     *
     *     ### Usage Example
     *     Fetch from the `GET Files` or `GET Folders` endpoint. Permissions are unexpanded by default. Use the query param `expand=permissions` to see more details. */
    Permission: {
      /**
       * Format: uuid
       * @example ecbe05ac-62a3-46c5-ab31-4b478b37d1b4
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 340
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * Format: uuid
       * @description The user that is granted this permission. This will only be populated if the type is `USER`.
       * @example 755e0a8e-1c04-444b-980f-51b1c0bdde8a
       */
      user?: string | null
      /**
       * Format: uuid
       * @description The group that is granted this permission. This will only be populated if the type is `GROUP`.
       */
      group?: string | null
      /**
       * @description Denotes what type of people have access to the file.
       *
       *     * `USER` - USER
       *     * `GROUP` - GROUP
       *     * `COMPANY` - COMPANY
       *     * `ANYONE` - ANYONE
       * @example USER
       */
      type?: components['schemas']['TypeEnum'] | null
      /**
       * @description The permissions that the user or group has for the File or Folder. It is possible for a user or group to have multiple roles, such as viewing & uploading. Possible values include: `READ`, `WRITE`, `OWNER`. In cases where there is no clear mapping, the original value passed through will be returned.
       * @example [
       *       "OWNER"
       *     ]
       */
      roles?: (components['schemas']['RolesEnum'] | null)[] | null
    }
    /** @description # The Permission Object
     *     ### Description
     *     The Permission object is used to represent a user's or group's access to a File or Folder. Permissions are unexpanded by default.
     *
     *     ### Usage Example
     *     Fetch from the `GET Files` or `GET Folders` endpoint. Permissions are unexpanded by default. Use the query param `expand=permissions` to see more details. */
    PermissionRequest: {
      /**
       * @description The third-party API ID of the matching object.
       * @example 340
       */
      remote_id?: string | null
      /**
       * Format: uuid
       * @description The user that is granted this permission. This will only be populated if the type is `USER`.
       * @example 755e0a8e-1c04-444b-980f-51b1c0bdde8a
       */
      user?: string | null
      /**
       * Format: uuid
       * @description The group that is granted this permission. This will only be populated if the type is `GROUP`.
       */
      group?: string | null
      /**
       * @description Denotes what type of people have access to the file.
       *
       *     * `USER` - USER
       *     * `GROUP` - GROUP
       *     * `COMPANY` - COMPANY
       *     * `ANYONE` - ANYONE
       * @example USER
       */
      type?: components['schemas']['TypeEnum'] | null
      /**
       * @description The permissions that the user or group has for the File or Folder. It is possible for a user or group to have multiple roles, such as viewing & uploading. Possible values include: `READ`, `WRITE`, `OWNER`. In cases where there is no clear mapping, the original value passed through will be returned.
       * @example [
       *       "OWNER"
       *     ]
       */
      roles?: (components['schemas']['RolesEnum'] | null)[] | null
      /** @example {
       *       "unique_integration_field": "unique_integration_field_value"
       *     } */
      integration_params?: {
        [key: string]: unknown
      } | null
      /** @example {
       *       "unique_linked_account_field": "unique_linked_account_field_value"
       *     } */
      linked_account_params?: {
        [key: string]: unknown
      } | null
    }
    /** @description # The RemoteData Object
     *     ### Description
     *     The `RemoteData` object is used to represent the full data pulled from the third-party API for an object.
     *
     *     ### Usage Example
     *     TODO */
    RemoteData: {
      /**
       * @description The third-party API path that is being called.
       * @example /platform-endpoint
       */
      path: string
      /**
       * @description The data returned from the third-party for this object in its original, unnormalized format.
       * @example [
       *       "Varies by platform"
       *     ]
       */
      readonly data?: unknown
    }
    RemoteEndpointInfo: {
      /** @example GET */
      method: string
      /** @example /example-url-path */
      url_path: string
      /** @example [
       *       "example_key_name"
       *     ] */
      field_traversal_path: unknown[]
    }
    RemoteFieldAPI: {
      /** @example {
       *       "type": "string"
       *     } */
      schema: {
        [key: string]: unknown
      }
      /** @example example_remote_key_name */
      remote_key_name: string
      /** @example {
       *       "method": "GET",
       *       "url_path": "/example-url-path",
       *       "field_traversal_path": [
       *         "example_key_name"
       *       ]
       *     } */
      remote_endpoint_info: components['schemas']['RemoteEndpointInfo']
      /** @example [
       *       "example"
       *     ] */
      example_values?: unknown[] | null
      advanced_metadata: components['schemas']['AdvancedMetadata'] | null
      /** @example 0.33 */
      readonly coverage?: number | null
    }
    RemoteFieldAPIResponse: {
      File?: components['schemas']['RemoteFieldAPI'][]
      Folder?: components['schemas']['RemoteFieldAPI'][]
      Drive?: components['schemas']['RemoteFieldAPI'][]
      Group?: components['schemas']['RemoteFieldAPI'][]
      User?: components['schemas']['RemoteFieldAPI'][]
    }
    /** @description # The RemoteKey Object
     *     ### Description
     *     The `RemoteKey` object is used to represent a request for a new remote key.
     *
     *     ### Usage Example
     *     Post a `GenerateRemoteKey` to receive a new `RemoteKey`. */
    RemoteKey: {
      /** @example Remote Deployment Key 1 */
      name: string
      /** @example hXY57W0g0WkdRHjCaPvwijK63fwfN-o_Wh7f30SLTq_uPCOLo-WFcA */
      key: string
    }
    /** @description # The RemoteKeyForRegeneration Object
     *     ### Description
     *     The `RemoteKeyForRegeneration` object is used to exchange an old remote key for a new one
     *
     *     ### Usage Example
     *     Post a `RemoteKeyForRegeneration` to swap out an old remote key for a new one */
    RemoteKeyForRegenerationRequest: {
      /**
       * @description The name of the remote key
       * @example Remote Deployment Key 1
       */
      name: string
    }
    /** @description # The RemoteResponse Object
     *     ### Description
     *     The `RemoteResponse` object is used to represent information returned from a third-party endpoint.
     *
     *     ### Usage Example
     *     View the `RemoteResponse` returned from your `DataPassthrough`. */
    RemoteResponse: {
      /** @example GET */
      method: string
      /** @example /scooters */
      path: string
      /** @example 200 */
      status: number
      /** @example {
       *       "scooters": [
       *         {
       *           "company": "Lime",
       *           "model": "Gen 2.5"
       *         },
       *         {
       *           "company": "Bird",
       *           "model": "Bird Zero"
       *         }
       *       ]
       *     } */
      response: unknown
      /** @example {
       *       "X-Page-Token": "value"
       *     } */
      response_headers?: {
        [key: string]: unknown
      }
      /** @example JSON */
      response_type?: components['schemas']['ResponseTypeEnum']
      /** @example {
       *       "EXTRA-HEADER": "value",
       *       "Authorization": "<redacted>"
       *     } */
      headers?: {
        [key: string]: unknown
      }
    }
    /**
     * @description * `JSON` - JSON
     *     * `XML` - XML
     *     * `MULTIPART` - MULTIPART
     * @enum {string}
     */
    RequestFormatEnum: 'JSON' | 'XML' | 'MULTIPART'
    /**
     * @description * `JSON` - JSON
     *     * `BASE64_GZIP` - BASE64_GZIP
     * @enum {string}
     */
    ResponseTypeEnum: 'JSON' | 'BASE64_GZIP'
    /**
     * @description * `ADMIN` - ADMIN
     *     * `DEVELOPER` - DEVELOPER
     *     * `MEMBER` - MEMBER
     *     * `API` - API
     *     * `SYSTEM` - SYSTEM
     *     * `MERGE_TEAM` - MERGE_TEAM
     * @enum {string}
     */
    RoleEnum: 'ADMIN' | 'DEVELOPER' | 'MEMBER' | 'API' | 'SYSTEM' | 'MERGE_TEAM'
    /**
     * @description * `READ` - READ
     *     * `WRITE` - WRITE
     *     * `OWNER` - OWNER
     * @enum {string}
     */
    RolesEnum: 'READ' | 'WRITE' | 'OWNER'
    /**
     * @description * `IN_NEXT_SYNC` - IN_NEXT_SYNC
     *     * `IN_LAST_SYNC` - IN_LAST_SYNC
     * @enum {string}
     */
    SelectiveSyncConfigurationsUsageEnum: 'IN_NEXT_SYNC' | 'IN_LAST_SYNC'
    /** @description # The SyncStatus Object
     *     ### Description
     *     The `SyncStatus` object is used to represent the syncing state of an account
     *
     *     ### Usage Example
     *     View the `SyncStatus` for an account to see how recently its models were synced. */
    SyncStatus: {
      /** @example File */
      model_name: string
      /** @example filestorage.FileStorageFile */
      model_id: string
      /**
       * Format: date-time
       * @example 2021-03-30T19:44:18.695973Z
       */
      last_sync_start?: string
      /**
       * Format: date-time
       * @example 2021-03-30T20:44:18.662942Z
       */
      next_sync_start?: string
      /** @example SYNCING */
      status: components['schemas']['SyncStatusStatusEnum']
      /** @example true */
      is_initial_sync: boolean
      selective_sync_configurations_usage?: components['schemas']['SelectiveSyncConfigurationsUsageEnum']
    }
    /**
     * @description * `SYNCING` - SYNCING
     *     * `DONE` - DONE
     *     * `FAILED` - FAILED
     *     * `DISABLED` - DISABLED
     *     * `PAUSED` - PAUSED
     *     * `PARTIALLY_SYNCED` - PARTIALLY_SYNCED
     * @enum {string}
     */
    SyncStatusStatusEnum:
      | 'SYNCING'
      | 'DONE'
      | 'FAILED'
      | 'DISABLED'
      | 'PAUSED'
      | 'PARTIALLY_SYNCED'
    /**
     * @description * `USER` - USER
     *     * `GROUP` - GROUP
     *     * `COMPANY` - COMPANY
     *     * `ANYONE` - ANYONE
     * @enum {string}
     */
    TypeEnum: 'USER' | 'GROUP' | 'COMPANY' | 'ANYONE'
    /** @description # The User Object
     *     ### Description
     *     The `User` object is used to represent a user within the File Storage account.
     *     ### Usage Example
     *     Fetch from the `GET /api/filestorage/v1/users` endpoint and view their users. */
    User: {
      /**
       * Format: uuid
       * @example 83902e75-4362-4803-b76c-a7d6be292cbd
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 2039349
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The user's name.
       * @example Gil Feig
       */
      name?: string | null
      /**
       * @description The user's email address. This is typically used to identify a user across linked accounts.
       * @example hello@merge.dev
       */
      email_address?: string | null
      /**
       * @description Whether the user is the one who linked this account.
       * @example true
       */
      is_me?: boolean
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      /** @example [
       *       {
       *         "path": "/users",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    ValidationProblemSource: {
      pointer: string
    }
    WarningValidationProblem: {
      /** @example {
       *       "pointer": "/age"
       *     } */
      source?: components['schemas']['ValidationProblemSource']
      /** @example Unrecognized Field */
      title: string
      /** @example An unrecognized field, age, was passed in with request data. */
      detail: string
      /** @example UNRECOGNIZED_FIELD */
      problem_type: string
    }
    WebhookReceiver: {
      event: string
      is_active: boolean
      key?: string
    }
    WebhookReceiverRequest: {
      event: string
      is_active: boolean
      key?: string
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  account_details_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AccountDetails']
        }
      }
    }
  }
  account_token_retrieve: {
    parameters: {
      query?: never
      header?: never
      path: {
        public_token: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AccountToken']
        }
      }
    }
  }
  async_passthrough_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DataPassthroughRequest']
        'application/x-www-form-urlencoded': components['schemas']['DataPassthroughRequest']
        'multipart/form-data': components['schemas']['DataPassthroughRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AsyncPassthroughReciept']
        }
      }
    }
  }
  async_passthrough_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        async_passthrough_receipt_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteResponse']
        }
      }
    }
  }
  audit_trail_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If included, will only include audit trail events that occurred before this time */
        end_date?: string
        /** @description If included, will only include events with the given event type. Possible values include: `CREATED_REMOTE_PRODUCTION_API_KEY`, `DELETED_REMOTE_PRODUCTION_API_KEY`, `CREATED_TEST_API_KEY`, `DELETED_TEST_API_KEY`, `REGENERATED_PRODUCTION_API_KEY`, `INVITED_USER`, `TWO_FACTOR_AUTH_ENABLED`, `TWO_FACTOR_AUTH_DISABLED`, `DELETED_LINKED_ACCOUNT`, `CREATED_DESTINATION`, `DELETED_DESTINATION`, `CHANGED_DESTINATION`, `CHANGED_SCOPES`, `CHANGED_PERSONAL_INFORMATION`, `CHANGED_ORGANIZATION_SETTINGS`, `ENABLED_INTEGRATION`, `DISABLED_INTEGRATION`, `ENABLED_CATEGORY`, `DISABLED_CATEGORY`, `CHANGED_PASSWORD`, `RESET_PASSWORD`, `ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION`, `ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT`, `DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION`, `DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT`, `CREATED_INTEGRATION_WIDE_FIELD_MAPPING`, `CREATED_LINKED_ACCOUNT_FIELD_MAPPING`, `CHANGED_INTEGRATION_WIDE_FIELD_MAPPING`, `CHANGED_LINKED_ACCOUNT_FIELD_MAPPING`, `DELETED_INTEGRATION_WIDE_FIELD_MAPPING`, `DELETED_LINKED_ACCOUNT_FIELD_MAPPING`, `CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE`, `CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE`, `DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE`, `FORCED_LINKED_ACCOUNT_RESYNC`, `MUTED_ISSUE`, `GENERATED_MAGIC_LINK`, `ENABLED_MERGE_WEBHOOK`, `DISABLED_MERGE_WEBHOOK`, `MERGE_WEBHOOK_TARGET_CHANGED`, `END_USER_CREDENTIALS_ACCESSED` */
        event_type?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If included, will only include audit trail events that occurred after this time */
        start_date?: string
        /** @description If provided, this will return events associated with the specified user email. Please note that the email address reflects the user's email at the time of the event, and may not be their current email. */
        user_email?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedAuditLogEventList']
        }
      }
    }
  }
  available_actions_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AvailableActions']
        }
      }
    }
  }
  default_scopes_retrieve: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonModelScopeAPI']
        }
      }
    }
  }
  delete_account_delete: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description No response body */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  drives_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return drives with this name. This performs an exact match. */
        name?: string | null
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedDriveList']
        }
      }
    }
  }
  drives_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Drive']
        }
      }
    }
  }
  field_mappings_retrieve: {
    parameters: {
      query?: {
        /** @description If `true`, remote fields metadata is excluded from each field mapping instance (i.e. `remote_fields.remote_key_name` and `remote_fields.schema` will be null). This will increase the speed of the request since these fields require some calculations. */
        exclude_remote_field_metadata?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldMappingApiInstanceResponse']
        }
      }
    }
  }
  field_mappings_create: {
    parameters: {
      query?: {
        /** @description If `true`, remote fields metadata is excluded from each field mapping instance (i.e. `remote_fields.remote_key_name` and `remote_fields.schema` will be null). This will increase the speed of the request since these fields require some calculations. */
        exclude_remote_field_metadata?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateFieldMappingRequest']
        'application/x-www-form-urlencoded': components['schemas']['CreateFieldMappingRequest']
        'multipart/form-data': components['schemas']['CreateFieldMappingRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldMappingInstanceResponse']
        }
      }
    }
  }
  field_mappings_destroy: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        field_mapping_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      204: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldMappingInstanceResponse']
        }
      }
    }
  }
  field_mappings_partial_update: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        field_mapping_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['PatchedEditFieldMappingRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedEditFieldMappingRequest']
        'multipart/form-data': components['schemas']['PatchedEditFieldMappingRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldMappingInstanceResponse']
        }
      }
    }
  }
  files_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Specifying a drive id returns only the files in that drive. Specifying null returns only the files outside the top-level drive. */
        drive_id?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'drive'
          | 'folder'
          | 'folder,drive'
          | 'permissions'
          | 'permissions,drive'
          | 'permissions,folder'
          | 'permissions,folder,drive'
        /** @description Specifying a folder id returns only the files in that folder. Specifying null returns only the files in root directory. */
        folder_id?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return files with these mime_types. Multiple values can be separated by commas. */
        mime_type?: string
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return files with this name. This performs an exact match. */
        name?: string | null
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedFileList']
        }
      }
    }
  }
  files_create: {
    parameters: {
      query?: {
        /** @description Whether to include debug fields (such as log file links) in the response. */
        is_debug_mode?: boolean
        /** @description Whether or not third-party updates should be run asynchronously. */
        run_async?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['FileStorageFileEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['FileStorageFileEndpointRequest']
        'multipart/form-data': components['schemas']['FileStorageFileEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FileStorageFileResponse']
        }
      }
    }
  }
  files_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'drive'
          | 'folder'
          | 'folder,drive'
          | 'permissions'
          | 'permissions,drive'
          | 'permissions,folder'
          | 'permissions,folder,drive'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['File']
        }
      }
    }
  }
  files_download_retrieve: {
    parameters: {
      query?: {
        /** @description If provided, specifies the export format of the file to be downloaded. For information on supported export formats, please refer to our <a href='https://help.merge.dev/en/articles/8615316-file-export-and-download-specification' target='_blank'>export format help center article</a>. */
        mime_type?: string
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': string
        }
      }
    }
  }
  files_meta_post_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MetaResponse']
        }
      }
    }
  }
  folders_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return folders in this drive. */
        drive_id?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'drive'
          | 'parent_folder'
          | 'parent_folder,drive'
          | 'permissions'
          | 'permissions,drive'
          | 'permissions,parent_folder'
          | 'permissions,parent_folder,drive'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return folders with this name. This performs an exact match. */
        name?: string | null
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return folders in this parent folder. If null, will return folders in root directory. */
        parent_folder_id?: string
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedFolderList']
        }
      }
    }
  }
  folders_create: {
    parameters: {
      query?: {
        /** @description Whether to include debug fields (such as log file links) in the response. */
        is_debug_mode?: boolean
        /** @description Whether or not third-party updates should be run asynchronously. */
        run_async?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['FileStorageFolderEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['FileStorageFolderEndpointRequest']
        'multipart/form-data': components['schemas']['FileStorageFolderEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FileStorageFolderResponse']
        }
      }
    }
  }
  folders_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'drive'
          | 'parent_folder'
          | 'parent_folder,drive'
          | 'permissions'
          | 'permissions,drive'
          | 'permissions,parent_folder'
          | 'permissions,parent_folder,drive'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Folder']
        }
      }
    }
  }
  folders_meta_post_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MetaResponse']
        }
      }
    }
  }
  generate_key_create: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GenerateRemoteKeyRequest']
        'application/x-www-form-urlencoded': components['schemas']['GenerateRemoteKeyRequest']
        'multipart/form-data': components['schemas']['GenerateRemoteKeyRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteKey']
        }
      }
    }
  }
  groups_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'child_groups'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedGroupList']
        }
      }
    }
  }
  groups_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'child_groups'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Group']
        }
      }
    }
  }
  issues_list: {
    parameters: {
      query?: {
        account_token?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If included, will only include issues whose most recent action occurred before this time */
        end_date?: string
        end_user_organization_name?: string
        /** @description If provided, will only return issues whose first incident time was after this datetime. */
        first_incident_time_after?: string | null
        /** @description If provided, will only return issues whose first incident time was before this datetime. */
        first_incident_time_before?: string | null
        /** @description If true, will include muted issues */
        include_muted?: string
        integration_name?: string
        /** @description If provided, will only return issues whose last incident time was after this datetime. */
        last_incident_time_after?: string | null
        /** @description If provided, will only return issues whose last incident time was before this datetime. */
        last_incident_time_before?: string | null
        /** @description If provided, will only include issues pertaining to the linked account passed in. */
        linked_account_id?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If included, will only include issues whose most recent action occurred after this time */
        start_date?: string
        /** @description Status of the issue. Options: ('ONGOING', 'RESOLVED')
         *
         *     * `ONGOING` - ONGOING
         *     * `RESOLVED` - RESOLVED */
        status?: 'ONGOING' | 'RESOLVED'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedIssueList']
        }
      }
    }
  }
  issues_retrieve: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Issue']
        }
      }
    }
  }
  link_token_create: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['EndUserDetailsRequest']
        'application/x-www-form-urlencoded': components['schemas']['EndUserDetailsRequest']
        'multipart/form-data': components['schemas']['EndUserDetailsRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['LinkToken']
        }
      }
    }
  }
  linked_account_scopes_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonModelScopeAPI']
        }
      }
    }
  }
  linked_account_scopes_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['LinkedAccountCommonModelScopeDeserializerRequest']
        'application/x-www-form-urlencoded': components['schemas']['LinkedAccountCommonModelScopeDeserializerRequest']
        'multipart/form-data': components['schemas']['LinkedAccountCommonModelScopeDeserializerRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonModelScopeAPI']
        }
      }
    }
  }
  linked_accounts_list: {
    parameters: {
      query?: {
        /** @description Options: `accounting`, `ats`, `crm`, `filestorage`, `hris`, `mktg`, `ticketing`
         *
         *     * `hris` - hris
         *     * `ats` - ats
         *     * `accounting` - accounting
         *     * `ticketing` - ticketing
         *     * `crm` - crm
         *     * `mktg` - mktg
         *     * `filestorage` - filestorage
         *     * `datawarehouse` - datawarehouse */
        category?:
          | 'accounting'
          | 'ats'
          | 'crm'
          | 'datawarehouse'
          | 'filestorage'
          | 'hris'
          | 'mktg'
          | 'ticketing'
          | null
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return linked accounts associated with the given email address. */
        end_user_email_address?: string
        /** @description If provided, will only return linked accounts associated with the given organization name. */
        end_user_organization_name?: string
        /** @description If provided, will only return linked accounts associated with the given origin ID. */
        end_user_origin_id?: string
        /** @description Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once. */
        end_user_origin_ids?: string
        id?: string
        /** @description Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once. */
        ids?: string
        /** @description If `true`, will include complete production duplicates of the account specified by the `id` query parameter in the response. `id` must be for a complete production linked account. */
        include_duplicates?: boolean
        /** @description If provided, will only return linked accounts associated with the given integration name. */
        integration_name?: string
        /** @description If included, will only include test linked accounts. If not included, will only include non-test linked accounts. */
        is_test_account?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Filter by status. Options: `COMPLETE`, `IDLE`, `INCOMPLETE`, `RELINK_NEEDED` */
        status?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedAccountDetailsAndActionsList']
        }
      }
    }
  }
  passthrough_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DataPassthroughRequest']
        'application/x-www-form-urlencoded': components['schemas']['DataPassthroughRequest']
        'multipart/form-data': components['schemas']['DataPassthroughRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteResponse']
        }
      }
    }
  }
  regenerate_key_create: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoteKeyForRegenerationRequest']
        'application/x-www-form-urlencoded': components['schemas']['RemoteKeyForRegenerationRequest']
        'multipart/form-data': components['schemas']['RemoteKeyForRegenerationRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteKey']
        }
      }
    }
  }
  remote_fields_retrieve: {
    parameters: {
      query?: {
        /** @description A comma seperated list of Common Model names. If included, will only return Remote Fields for those Common Models. */
        common_models?: string
        /** @description If true, will include example values, where available, for remote fields in the 3rd party platform. These examples come from active data from your customers. */
        include_example_values?: string
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteFieldAPIResponse']
        }
      }
    }
  }
  sync_status_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedSyncStatusList']
        }
      }
    }
  }
  sync_status_resync_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SyncStatus'][]
        }
      }
    }
  }
  target_fields_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ExternalTargetFieldAPIResponse']
        }
      }
    }
  }
  users_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return the user object for requestor. */
        is_me?: string
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedUserList']
        }
      }
    }
  }
  users_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['User']
        }
      }
    }
  }
  webhook_receivers_list: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['WebhookReceiver'][]
        }
      }
    }
  }
  webhook_receivers_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['WebhookReceiverRequest']
        'application/x-www-form-urlencoded': components['schemas']['WebhookReceiverRequest']
        'multipart/form-data': components['schemas']['WebhookReceiverRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['WebhookReceiver']
        }
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
