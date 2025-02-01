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
  '/actions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Action` objects. */
    get: operations['actions_list']
    put?: never
    /** @description Creates an `Action` object with the given values. */
    post: operations['actions_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/actions/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Action` object with the given `id`. */
    get: operations['actions_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/actions/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `MKTGAction` POSTs. */
    get: operations['actions_meta_post_retrieve']
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
  '/automations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Automation` objects. */
    get: operations['automations_list']
    put?: never
    /** @description Creates an `Automation` object with the given values. */
    post: operations['automations_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/automations/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Automation` object with the given `id`. */
    get: operations['automations_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/automations/{parent_id}/recipients': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Contact` objects. */
    get: operations['automations_recipients_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/automations/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `MKTGAutomation` POSTs. */
    get: operations['automations_meta_post_retrieve']
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
  '/campaigns': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Campaign` objects. */
    get: operations['campaigns_list']
    put?: never
    /** @description Creates a `Campaign` object with the given values. */
    post: operations['campaigns_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/campaigns/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Campaign` object with the given `id`. */
    get: operations['campaigns_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/campaigns/{parent_id}/contacts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Contact` objects. */
    get: operations['campaigns_contacts_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/campaigns/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `MKTGCampaign` POSTs. */
    get: operations['campaigns_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/contacts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Contact` objects. */
    get: operations['contacts_list']
    put?: never
    /** @description Creates a `Contact` object with the given values. */
    post: operations['contacts_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/contacts/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Contact` object with the given `id`. */
    get: operations['contacts_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/contacts/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `MKTGContact` POSTs. */
    get: operations['contacts_meta_post_retrieve']
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
  '/emails': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `MarketingEmail` objects. */
    get: operations['emails_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/emails/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `MarketingEmail` object with the given `id`. */
    get: operations['emails_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/emails/{parent_id}/recipients': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Contact` objects. */
    get: operations['emails_recipients_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/events': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Event` objects. */
    get: operations['events_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/events/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Event` object with the given `id`. */
    get: operations['events_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/events/{parent_id}/contacts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Contact` objects. */
    get: operations['events_contacts_list']
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
  '/lists': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `List` objects. */
    get: operations['lists_list']
    put?: never
    /** @description Creates a `List` object with the given values. */
    post: operations['lists_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/lists/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `List` object with the given `id`. */
    get: operations['lists_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/lists/{parent_id}/subscribers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Contact` objects. */
    get: operations['lists_subscribers_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/lists/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `MKTGList` POSTs. */
    get: operations['lists_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messages': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Message` objects. */
    get: operations['messages_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messages/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Message` object with the given `id`. */
    get: operations['messages_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messages/{parent_id}/recipients': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Contact` objects. */
    get: operations['messages_recipients_list']
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
  '/templates': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Template` objects. */
    get: operations['templates_list']
    put?: never
    /** @description Creates a `Template` object with the given values. */
    post: operations['templates_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/templates/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Template` object with the given `id`. */
    get: operations['templates_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/templates/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `MKTGTemplate` POSTs. */
    get: operations['templates_meta_post_retrieve']
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
    /** @description # The Action Object
     *     ### Description
     *     The `Action` object is used to represent an action executed within an automation.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/actions` endpoint and view their types. */
    Action: {
      /**
       * Format: uuid
       * @example 52ce940b-ecfe-43a6-955f-629f799f7f73
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 1234
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
       * @description The action's name.
       * @example Welcome Email
       */
      name?: string | null
      /**
       * @description The marketing emails sent by this action.
       * @example [
       *       "2634cbc6-6040-430a-475r-aafacbadf9he"
       *     ]
       */
      emails: string[]
      /**
       * @description The messages sent by this action.
       * @example [
       *       "3734cbc6-6040-430a-475r-aafacbadr6wq"
       *     ]
       */
      messages: string[]
      /**
       * @description The action's type.
       *
       *     * `EMAIL` - EMAIL
       *     * `MESSAGE` - MESSAGE
       * @example EMAIL
       */
      type?: components['schemas']['TypeEnum'] | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/actions",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Action Object
     *     ### Description
     *     The `Action` object is used to represent an action executed within an automation.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/actions` endpoint and view their types. */
    ActionRequest: {
      /**
       * @description The action's name.
       * @example Welcome Email
       */
      name?: string | null
      /**
       * @description The marketing emails sent by this action.
       * @example [
       *       "2634cbc6-6040-430a-475r-aafacbadf9he"
       *     ]
       */
      emails: string[]
      /**
       * @description The messages sent by this action.
       * @example [
       *       "3734cbc6-6040-430a-475r-aafacbadr6wq"
       *     ]
       */
      messages: string[]
      /**
       * @description The action's type.
       *
       *     * `EMAIL` - EMAIL
       *     * `MESSAGE` - MESSAGE
       * @example EMAIL
       */
      type?: components['schemas']['TypeEnum'] | null
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
      role: components['schemas']['AuditLogEventRoleEnum']
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
    /**
     * @description * `ADMIN` - ADMIN
     *     * `DEVELOPER` - DEVELOPER
     *     * `MEMBER` - MEMBER
     *     * `API` - API
     *     * `SYSTEM` - SYSTEM
     *     * `MERGE_TEAM` - MERGE_TEAM
     * @enum {string}
     */
    AuditLogEventRoleEnum:
      | 'ADMIN'
      | 'DEVELOPER'
      | 'MEMBER'
      | 'API'
      | 'SYSTEM'
      | 'MERGE_TEAM'
    /** @description # The Automation Object
     *     ### Description
     *     The `Automation` object is used to represent an automation, workflow or custom event in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/automations` endpoint and view their automation_trigger configurations. */
    Automation: {
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
       * @description The automation's name.
       * @example Welcome Email
       */
      name?: string | null
      /**
       * @description The trigger type for running this automation.
       *
       *     * `TRIGGER_EVENT` - TRIGGER_EVENT
       *     * `RECURRENCE` - RECURRENCE
       * @example RECURRENCE
       */
      trigger_type?: components['schemas']['TriggerTypeEnum'] | null
      /**
       * Format: date-time
       * @description The automation's start date.
       * @example 2022-12-23T00:00:00Z
       */
      start_date?: string | null
      /**
       * Format: date-time
       * @description The automation's end date.
       * @example 2022-12-23T00:00:00Z
       */
      end_date?: string | null
      /**
       * @description The automation’s description.
       * @example This sends a welcome email to new customers.
       */
      description?: string | null
      /**
       * @description The automation's status.
       * @example Published
       */
      status?: string | null
      /**
       * @description The trigger configuraton for the automation.
       * @example {
       *       "recurrence_schedule": {
       *         "days": [
       *           "Sunday"
       *         ],
       *         "hours": {
       *           "type": "send_asap"
       *         }
       *       },
       *       "trigger_settings": {
       *         "trigger_event": "NEW_CUSTOMER"
       *       }
       *     }
       */
      automation_trigger?: {
        [key: string]: unknown
      } | null
      /**
       * @description The actions performed by this automation.
       * @example [
       *       "52ce940b-ecfe-43a6-955f-629f799f7f73"
       *     ]
       */
      actions: string[]
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/automations",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Automation Object
     *     ### Description
     *     The `Automation` object is used to represent an automation, workflow or custom event in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/automations` endpoint and view their automation_trigger configurations. */
    AutomationRequest: {
      /**
       * @description The automation's name.
       * @example Welcome Email
       */
      name?: string | null
      /**
       * @description The trigger type for running this automation.
       *
       *     * `TRIGGER_EVENT` - TRIGGER_EVENT
       *     * `RECURRENCE` - RECURRENCE
       * @example RECURRENCE
       */
      trigger_type?: components['schemas']['TriggerTypeEnum'] | null
      /**
       * Format: date-time
       * @description The automation's start date.
       * @example 2022-12-23T00:00:00Z
       */
      start_date?: string | null
      /**
       * Format: date-time
       * @description The automation's end date.
       * @example 2022-12-23T00:00:00Z
       */
      end_date?: string | null
      /**
       * @description The automation’s description.
       * @example This sends a welcome email to new customers.
       */
      description?: string | null
      /**
       * @description The automation's status.
       * @example Published
       */
      status?: string | null
      /**
       * @description The trigger configuraton for the automation.
       * @example {
       *       "recurrence_schedule": {
       *         "days": [
       *           "Sunday"
       *         ],
       *         "hours": {
       *           "type": "send_asap"
       *         }
       *       },
       *       "trigger_settings": {
       *         "trigger_event": "NEW_CUSTOMER"
       *       }
       *     }
       */
      automation_trigger?: {
        [key: string]: unknown
      } | null
      /**
       * @description The actions performed by this automation.
       * @example [
       *       "52ce940b-ecfe-43a6-955f-629f799f7f73"
       *     ]
       */
      actions: string[]
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
    /** @description # The Campaign Object
     *     ### Description
     *     The `Campaign` object is used to represent a marketing campaign in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/campaigns` endpoint and view their unique opens. */
    Campaign: {
      /**
       * Format: uuid
       * @example 3737cbc6-6040-430a-475r-aafacbadrf47
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 30
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
       * @description The campaign's name.
       * @example New Customer Campaign
       */
      name?: string | null
      /**
       * @description The campaign's unique opens.
       * @example 190
       */
      unique_opens?: number | null
      /**
       * Format: date-time
       * @description When the campaign was created in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * @description The campaign's number of emails sent.
       * @example 200
       */
      emails_sent?: number | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/campaigns",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Campaign Object
     *     ### Description
     *     The `Campaign` object is used to represent a marketing campaign in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/campaigns` endpoint and view their unique opens. */
    CampaignRequest: {
      /**
       * @description The campaign's name.
       * @example New Customer Campaign
       */
      name?: string | null
      /**
       * @description The campaign's unique opens.
       * @example 190
       */
      unique_opens?: number | null
      /**
       * @description The campaign's number of emails sent.
       * @example 200
       */
      emails_sent?: number | null
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
    /** @description # The Contact Object
     *     ### Description
     *     The `Contact` object is used to represent a contact in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/contact` endpoint and view their phone numbers. */
    Contact: {
      /**
       * Format: uuid
       * @example 5858cbc6-6040-430a-475r-aafacbadrg64
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 35
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
       * @description The contact's first name.
       * @example Gil
       */
      first_name?: string | null
      /**
       * @description The contact's last name.
       * @example Feig
       */
      last_name?: string | null
      /**
       * @description The contact's email.
       * @example hello@merge.dev
       */
      email?: string | null
      /**
       * @description The contact's phone.
       * @example +13785579223
       */
      phone?: string | null
      /**
       * @description The contact's state.
       * @example NY
       */
      state?: string | null
      /**
       * @description The contact's country.
       *
       *     * `AF` - Afghanistan
       *     * `AX` - Åland Islands
       *     * `AL` - Albania
       *     * `DZ` - Algeria
       *     * `AS` - American Samoa
       *     * `AD` - Andorra
       *     * `AO` - Angola
       *     * `AI` - Anguilla
       *     * `AQ` - Antarctica
       *     * `AG` - Antigua and Barbuda
       *     * `AR` - Argentina
       *     * `AM` - Armenia
       *     * `AW` - Aruba
       *     * `AU` - Australia
       *     * `AT` - Austria
       *     * `AZ` - Azerbaijan
       *     * `BS` - Bahamas
       *     * `BH` - Bahrain
       *     * `BD` - Bangladesh
       *     * `BB` - Barbados
       *     * `BY` - Belarus
       *     * `BE` - Belgium
       *     * `BZ` - Belize
       *     * `BJ` - Benin
       *     * `BM` - Bermuda
       *     * `BT` - Bhutan
       *     * `BO` - Bolivia
       *     * `BQ` - Bonaire, Sint Eustatius and Saba
       *     * `BA` - Bosnia and Herzegovina
       *     * `BW` - Botswana
       *     * `BV` - Bouvet Island
       *     * `BR` - Brazil
       *     * `IO` - British Indian Ocean Territory
       *     * `BN` - Brunei
       *     * `BG` - Bulgaria
       *     * `BF` - Burkina Faso
       *     * `BI` - Burundi
       *     * `CV` - Cabo Verde
       *     * `KH` - Cambodia
       *     * `CM` - Cameroon
       *     * `CA` - Canada
       *     * `KY` - Cayman Islands
       *     * `CF` - Central African Republic
       *     * `TD` - Chad
       *     * `CL` - Chile
       *     * `CN` - China
       *     * `CX` - Christmas Island
       *     * `CC` - Cocos (Keeling) Islands
       *     * `CO` - Colombia
       *     * `KM` - Comoros
       *     * `CG` - Congo
       *     * `CD` - Congo (the Democratic Republic of the)
       *     * `CK` - Cook Islands
       *     * `CR` - Costa Rica
       *     * `CI` - Côte d'Ivoire
       *     * `HR` - Croatia
       *     * `CU` - Cuba
       *     * `CW` - Curaçao
       *     * `CY` - Cyprus
       *     * `CZ` - Czechia
       *     * `DK` - Denmark
       *     * `DJ` - Djibouti
       *     * `DM` - Dominica
       *     * `DO` - Dominican Republic
       *     * `EC` - Ecuador
       *     * `EG` - Egypt
       *     * `SV` - El Salvador
       *     * `GQ` - Equatorial Guinea
       *     * `ER` - Eritrea
       *     * `EE` - Estonia
       *     * `SZ` - Eswatini
       *     * `ET` - Ethiopia
       *     * `FK` - Falkland Islands (Malvinas)
       *     * `FO` - Faroe Islands
       *     * `FJ` - Fiji
       *     * `FI` - Finland
       *     * `FR` - France
       *     * `GF` - French Guiana
       *     * `PF` - French Polynesia
       *     * `TF` - French Southern Territories
       *     * `GA` - Gabon
       *     * `GM` - Gambia
       *     * `GE` - Georgia
       *     * `DE` - Germany
       *     * `GH` - Ghana
       *     * `GI` - Gibraltar
       *     * `GR` - Greece
       *     * `GL` - Greenland
       *     * `GD` - Grenada
       *     * `GP` - Guadeloupe
       *     * `GU` - Guam
       *     * `GT` - Guatemala
       *     * `GG` - Guernsey
       *     * `GN` - Guinea
       *     * `GW` - Guinea-Bissau
       *     * `GY` - Guyana
       *     * `HT` - Haiti
       *     * `HM` - Heard Island and McDonald Islands
       *     * `VA` - Holy See
       *     * `HN` - Honduras
       *     * `HK` - Hong Kong
       *     * `HU` - Hungary
       *     * `IS` - Iceland
       *     * `IN` - India
       *     * `ID` - Indonesia
       *     * `IR` - Iran
       *     * `IQ` - Iraq
       *     * `IE` - Ireland
       *     * `IM` - Isle of Man
       *     * `IL` - Israel
       *     * `IT` - Italy
       *     * `JM` - Jamaica
       *     * `JP` - Japan
       *     * `JE` - Jersey
       *     * `JO` - Jordan
       *     * `KZ` - Kazakhstan
       *     * `KE` - Kenya
       *     * `KI` - Kiribati
       *     * `KW` - Kuwait
       *     * `KG` - Kyrgyzstan
       *     * `LA` - Laos
       *     * `LV` - Latvia
       *     * `LB` - Lebanon
       *     * `LS` - Lesotho
       *     * `LR` - Liberia
       *     * `LY` - Libya
       *     * `LI` - Liechtenstein
       *     * `LT` - Lithuania
       *     * `LU` - Luxembourg
       *     * `MO` - Macao
       *     * `MG` - Madagascar
       *     * `MW` - Malawi
       *     * `MY` - Malaysia
       *     * `MV` - Maldives
       *     * `ML` - Mali
       *     * `MT` - Malta
       *     * `MH` - Marshall Islands
       *     * `MQ` - Martinique
       *     * `MR` - Mauritania
       *     * `MU` - Mauritius
       *     * `YT` - Mayotte
       *     * `MX` - Mexico
       *     * `FM` - Micronesia (Federated States of)
       *     * `MD` - Moldova
       *     * `MC` - Monaco
       *     * `MN` - Mongolia
       *     * `ME` - Montenegro
       *     * `MS` - Montserrat
       *     * `MA` - Morocco
       *     * `MZ` - Mozambique
       *     * `MM` - Myanmar
       *     * `NA` - Namibia
       *     * `NR` - Nauru
       *     * `NP` - Nepal
       *     * `NL` - Netherlands
       *     * `NC` - New Caledonia
       *     * `NZ` - New Zealand
       *     * `NI` - Nicaragua
       *     * `NE` - Niger
       *     * `NG` - Nigeria
       *     * `NU` - Niue
       *     * `NF` - Norfolk Island
       *     * `KP` - North Korea
       *     * `MK` - North Macedonia
       *     * `MP` - Northern Mariana Islands
       *     * `NO` - Norway
       *     * `OM` - Oman
       *     * `PK` - Pakistan
       *     * `PW` - Palau
       *     * `PS` - Palestine, State of
       *     * `PA` - Panama
       *     * `PG` - Papua New Guinea
       *     * `PY` - Paraguay
       *     * `PE` - Peru
       *     * `PH` - Philippines
       *     * `PN` - Pitcairn
       *     * `PL` - Poland
       *     * `PT` - Portugal
       *     * `PR` - Puerto Rico
       *     * `QA` - Qatar
       *     * `RE` - Réunion
       *     * `RO` - Romania
       *     * `RU` - Russia
       *     * `RW` - Rwanda
       *     * `BL` - Saint Barthélemy
       *     * `SH` - Saint Helena, Ascension and Tristan da Cunha
       *     * `KN` - Saint Kitts and Nevis
       *     * `LC` - Saint Lucia
       *     * `MF` - Saint Martin (French part)
       *     * `PM` - Saint Pierre and Miquelon
       *     * `VC` - Saint Vincent and the Grenadines
       *     * `WS` - Samoa
       *     * `SM` - San Marino
       *     * `ST` - Sao Tome and Principe
       *     * `SA` - Saudi Arabia
       *     * `SN` - Senegal
       *     * `RS` - Serbia
       *     * `SC` - Seychelles
       *     * `SL` - Sierra Leone
       *     * `SG` - Singapore
       *     * `SX` - Sint Maarten (Dutch part)
       *     * `SK` - Slovakia
       *     * `SI` - Slovenia
       *     * `SB` - Solomon Islands
       *     * `SO` - Somalia
       *     * `ZA` - South Africa
       *     * `GS` - South Georgia and the South Sandwich Islands
       *     * `KR` - South Korea
       *     * `SS` - South Sudan
       *     * `ES` - Spain
       *     * `LK` - Sri Lanka
       *     * `SD` - Sudan
       *     * `SR` - Suriname
       *     * `SJ` - Svalbard and Jan Mayen
       *     * `SE` - Sweden
       *     * `CH` - Switzerland
       *     * `SY` - Syria
       *     * `TW` - Taiwan
       *     * `TJ` - Tajikistan
       *     * `TZ` - Tanzania
       *     * `TH` - Thailand
       *     * `TL` - Timor-Leste
       *     * `TG` - Togo
       *     * `TK` - Tokelau
       *     * `TO` - Tonga
       *     * `TT` - Trinidad and Tobago
       *     * `TN` - Tunisia
       *     * `TR` - Turkey
       *     * `TM` - Turkmenistan
       *     * `TC` - Turks and Caicos Islands
       *     * `TV` - Tuvalu
       *     * `UG` - Uganda
       *     * `UA` - Ukraine
       *     * `AE` - United Arab Emirates
       *     * `GB` - United Kingdom
       *     * `UM` - United States Minor Outlying Islands
       *     * `US` - United States of America
       *     * `UY` - Uruguay
       *     * `UZ` - Uzbekistan
       *     * `VU` - Vanuatu
       *     * `VE` - Venezuela
       *     * `VN` - Vietnam
       *     * `VG` - Virgin Islands (British)
       *     * `VI` - Virgin Islands (U.S.)
       *     * `WF` - Wallis and Futuna
       *     * `EH` - Western Sahara
       *     * `YE` - Yemen
       *     * `ZM` - Zambia
       *     * `ZW` - Zimbabwe
       * @example US
       */
      country?: components['schemas']['CountryEnum'] | null
      /** @description The contact's postal code. */
      postal_code?: string | null
      /**
       * Format: date-time
       * @description When the contact was created in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the contact was last updated in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_updated_at?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/contacts",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Contact Object
     *     ### Description
     *     The `Contact` object is used to represent a contact in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/contact` endpoint and view their phone numbers. */
    ContactRequest: {
      /**
       * @description The contact's first name.
       * @example Gil
       */
      first_name?: string | null
      /**
       * @description The contact's last name.
       * @example Feig
       */
      last_name?: string | null
      /**
       * @description The contact's email.
       * @example hello@merge.dev
       */
      email?: string | null
      /**
       * @description The contact's phone.
       * @example +13785579223
       */
      phone?: string | null
      /**
       * @description The contact's state.
       * @example NY
       */
      state?: string | null
      /**
       * @description The contact's country.
       *
       *     * `AF` - Afghanistan
       *     * `AX` - Åland Islands
       *     * `AL` - Albania
       *     * `DZ` - Algeria
       *     * `AS` - American Samoa
       *     * `AD` - Andorra
       *     * `AO` - Angola
       *     * `AI` - Anguilla
       *     * `AQ` - Antarctica
       *     * `AG` - Antigua and Barbuda
       *     * `AR` - Argentina
       *     * `AM` - Armenia
       *     * `AW` - Aruba
       *     * `AU` - Australia
       *     * `AT` - Austria
       *     * `AZ` - Azerbaijan
       *     * `BS` - Bahamas
       *     * `BH` - Bahrain
       *     * `BD` - Bangladesh
       *     * `BB` - Barbados
       *     * `BY` - Belarus
       *     * `BE` - Belgium
       *     * `BZ` - Belize
       *     * `BJ` - Benin
       *     * `BM` - Bermuda
       *     * `BT` - Bhutan
       *     * `BO` - Bolivia
       *     * `BQ` - Bonaire, Sint Eustatius and Saba
       *     * `BA` - Bosnia and Herzegovina
       *     * `BW` - Botswana
       *     * `BV` - Bouvet Island
       *     * `BR` - Brazil
       *     * `IO` - British Indian Ocean Territory
       *     * `BN` - Brunei
       *     * `BG` - Bulgaria
       *     * `BF` - Burkina Faso
       *     * `BI` - Burundi
       *     * `CV` - Cabo Verde
       *     * `KH` - Cambodia
       *     * `CM` - Cameroon
       *     * `CA` - Canada
       *     * `KY` - Cayman Islands
       *     * `CF` - Central African Republic
       *     * `TD` - Chad
       *     * `CL` - Chile
       *     * `CN` - China
       *     * `CX` - Christmas Island
       *     * `CC` - Cocos (Keeling) Islands
       *     * `CO` - Colombia
       *     * `KM` - Comoros
       *     * `CG` - Congo
       *     * `CD` - Congo (the Democratic Republic of the)
       *     * `CK` - Cook Islands
       *     * `CR` - Costa Rica
       *     * `CI` - Côte d'Ivoire
       *     * `HR` - Croatia
       *     * `CU` - Cuba
       *     * `CW` - Curaçao
       *     * `CY` - Cyprus
       *     * `CZ` - Czechia
       *     * `DK` - Denmark
       *     * `DJ` - Djibouti
       *     * `DM` - Dominica
       *     * `DO` - Dominican Republic
       *     * `EC` - Ecuador
       *     * `EG` - Egypt
       *     * `SV` - El Salvador
       *     * `GQ` - Equatorial Guinea
       *     * `ER` - Eritrea
       *     * `EE` - Estonia
       *     * `SZ` - Eswatini
       *     * `ET` - Ethiopia
       *     * `FK` - Falkland Islands (Malvinas)
       *     * `FO` - Faroe Islands
       *     * `FJ` - Fiji
       *     * `FI` - Finland
       *     * `FR` - France
       *     * `GF` - French Guiana
       *     * `PF` - French Polynesia
       *     * `TF` - French Southern Territories
       *     * `GA` - Gabon
       *     * `GM` - Gambia
       *     * `GE` - Georgia
       *     * `DE` - Germany
       *     * `GH` - Ghana
       *     * `GI` - Gibraltar
       *     * `GR` - Greece
       *     * `GL` - Greenland
       *     * `GD` - Grenada
       *     * `GP` - Guadeloupe
       *     * `GU` - Guam
       *     * `GT` - Guatemala
       *     * `GG` - Guernsey
       *     * `GN` - Guinea
       *     * `GW` - Guinea-Bissau
       *     * `GY` - Guyana
       *     * `HT` - Haiti
       *     * `HM` - Heard Island and McDonald Islands
       *     * `VA` - Holy See
       *     * `HN` - Honduras
       *     * `HK` - Hong Kong
       *     * `HU` - Hungary
       *     * `IS` - Iceland
       *     * `IN` - India
       *     * `ID` - Indonesia
       *     * `IR` - Iran
       *     * `IQ` - Iraq
       *     * `IE` - Ireland
       *     * `IM` - Isle of Man
       *     * `IL` - Israel
       *     * `IT` - Italy
       *     * `JM` - Jamaica
       *     * `JP` - Japan
       *     * `JE` - Jersey
       *     * `JO` - Jordan
       *     * `KZ` - Kazakhstan
       *     * `KE` - Kenya
       *     * `KI` - Kiribati
       *     * `KW` - Kuwait
       *     * `KG` - Kyrgyzstan
       *     * `LA` - Laos
       *     * `LV` - Latvia
       *     * `LB` - Lebanon
       *     * `LS` - Lesotho
       *     * `LR` - Liberia
       *     * `LY` - Libya
       *     * `LI` - Liechtenstein
       *     * `LT` - Lithuania
       *     * `LU` - Luxembourg
       *     * `MO` - Macao
       *     * `MG` - Madagascar
       *     * `MW` - Malawi
       *     * `MY` - Malaysia
       *     * `MV` - Maldives
       *     * `ML` - Mali
       *     * `MT` - Malta
       *     * `MH` - Marshall Islands
       *     * `MQ` - Martinique
       *     * `MR` - Mauritania
       *     * `MU` - Mauritius
       *     * `YT` - Mayotte
       *     * `MX` - Mexico
       *     * `FM` - Micronesia (Federated States of)
       *     * `MD` - Moldova
       *     * `MC` - Monaco
       *     * `MN` - Mongolia
       *     * `ME` - Montenegro
       *     * `MS` - Montserrat
       *     * `MA` - Morocco
       *     * `MZ` - Mozambique
       *     * `MM` - Myanmar
       *     * `NA` - Namibia
       *     * `NR` - Nauru
       *     * `NP` - Nepal
       *     * `NL` - Netherlands
       *     * `NC` - New Caledonia
       *     * `NZ` - New Zealand
       *     * `NI` - Nicaragua
       *     * `NE` - Niger
       *     * `NG` - Nigeria
       *     * `NU` - Niue
       *     * `NF` - Norfolk Island
       *     * `KP` - North Korea
       *     * `MK` - North Macedonia
       *     * `MP` - Northern Mariana Islands
       *     * `NO` - Norway
       *     * `OM` - Oman
       *     * `PK` - Pakistan
       *     * `PW` - Palau
       *     * `PS` - Palestine, State of
       *     * `PA` - Panama
       *     * `PG` - Papua New Guinea
       *     * `PY` - Paraguay
       *     * `PE` - Peru
       *     * `PH` - Philippines
       *     * `PN` - Pitcairn
       *     * `PL` - Poland
       *     * `PT` - Portugal
       *     * `PR` - Puerto Rico
       *     * `QA` - Qatar
       *     * `RE` - Réunion
       *     * `RO` - Romania
       *     * `RU` - Russia
       *     * `RW` - Rwanda
       *     * `BL` - Saint Barthélemy
       *     * `SH` - Saint Helena, Ascension and Tristan da Cunha
       *     * `KN` - Saint Kitts and Nevis
       *     * `LC` - Saint Lucia
       *     * `MF` - Saint Martin (French part)
       *     * `PM` - Saint Pierre and Miquelon
       *     * `VC` - Saint Vincent and the Grenadines
       *     * `WS` - Samoa
       *     * `SM` - San Marino
       *     * `ST` - Sao Tome and Principe
       *     * `SA` - Saudi Arabia
       *     * `SN` - Senegal
       *     * `RS` - Serbia
       *     * `SC` - Seychelles
       *     * `SL` - Sierra Leone
       *     * `SG` - Singapore
       *     * `SX` - Sint Maarten (Dutch part)
       *     * `SK` - Slovakia
       *     * `SI` - Slovenia
       *     * `SB` - Solomon Islands
       *     * `SO` - Somalia
       *     * `ZA` - South Africa
       *     * `GS` - South Georgia and the South Sandwich Islands
       *     * `KR` - South Korea
       *     * `SS` - South Sudan
       *     * `ES` - Spain
       *     * `LK` - Sri Lanka
       *     * `SD` - Sudan
       *     * `SR` - Suriname
       *     * `SJ` - Svalbard and Jan Mayen
       *     * `SE` - Sweden
       *     * `CH` - Switzerland
       *     * `SY` - Syria
       *     * `TW` - Taiwan
       *     * `TJ` - Tajikistan
       *     * `TZ` - Tanzania
       *     * `TH` - Thailand
       *     * `TL` - Timor-Leste
       *     * `TG` - Togo
       *     * `TK` - Tokelau
       *     * `TO` - Tonga
       *     * `TT` - Trinidad and Tobago
       *     * `TN` - Tunisia
       *     * `TR` - Turkey
       *     * `TM` - Turkmenistan
       *     * `TC` - Turks and Caicos Islands
       *     * `TV` - Tuvalu
       *     * `UG` - Uganda
       *     * `UA` - Ukraine
       *     * `AE` - United Arab Emirates
       *     * `GB` - United Kingdom
       *     * `UM` - United States Minor Outlying Islands
       *     * `US` - United States of America
       *     * `UY` - Uruguay
       *     * `UZ` - Uzbekistan
       *     * `VU` - Vanuatu
       *     * `VE` - Venezuela
       *     * `VN` - Vietnam
       *     * `VG` - Virgin Islands (British)
       *     * `VI` - Virgin Islands (U.S.)
       *     * `WF` - Wallis and Futuna
       *     * `EH` - Western Sahara
       *     * `YE` - Yemen
       *     * `ZM` - Zambia
       *     * `ZW` - Zimbabwe
       * @example US
       */
      country?: components['schemas']['CountryEnum'] | null
      /** @description The contact's postal code. */
      postal_code?: string | null
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
    /**
     * @description * `AF` - Afghanistan
     *     * `AX` - Åland Islands
     *     * `AL` - Albania
     *     * `DZ` - Algeria
     *     * `AS` - American Samoa
     *     * `AD` - Andorra
     *     * `AO` - Angola
     *     * `AI` - Anguilla
     *     * `AQ` - Antarctica
     *     * `AG` - Antigua and Barbuda
     *     * `AR` - Argentina
     *     * `AM` - Armenia
     *     * `AW` - Aruba
     *     * `AU` - Australia
     *     * `AT` - Austria
     *     * `AZ` - Azerbaijan
     *     * `BS` - Bahamas
     *     * `BH` - Bahrain
     *     * `BD` - Bangladesh
     *     * `BB` - Barbados
     *     * `BY` - Belarus
     *     * `BE` - Belgium
     *     * `BZ` - Belize
     *     * `BJ` - Benin
     *     * `BM` - Bermuda
     *     * `BT` - Bhutan
     *     * `BO` - Bolivia
     *     * `BQ` - Bonaire, Sint Eustatius and Saba
     *     * `BA` - Bosnia and Herzegovina
     *     * `BW` - Botswana
     *     * `BV` - Bouvet Island
     *     * `BR` - Brazil
     *     * `IO` - British Indian Ocean Territory
     *     * `BN` - Brunei
     *     * `BG` - Bulgaria
     *     * `BF` - Burkina Faso
     *     * `BI` - Burundi
     *     * `CV` - Cabo Verde
     *     * `KH` - Cambodia
     *     * `CM` - Cameroon
     *     * `CA` - Canada
     *     * `KY` - Cayman Islands
     *     * `CF` - Central African Republic
     *     * `TD` - Chad
     *     * `CL` - Chile
     *     * `CN` - China
     *     * `CX` - Christmas Island
     *     * `CC` - Cocos (Keeling) Islands
     *     * `CO` - Colombia
     *     * `KM` - Comoros
     *     * `CG` - Congo
     *     * `CD` - Congo (the Democratic Republic of the)
     *     * `CK` - Cook Islands
     *     * `CR` - Costa Rica
     *     * `CI` - Côte d'Ivoire
     *     * `HR` - Croatia
     *     * `CU` - Cuba
     *     * `CW` - Curaçao
     *     * `CY` - Cyprus
     *     * `CZ` - Czechia
     *     * `DK` - Denmark
     *     * `DJ` - Djibouti
     *     * `DM` - Dominica
     *     * `DO` - Dominican Republic
     *     * `EC` - Ecuador
     *     * `EG` - Egypt
     *     * `SV` - El Salvador
     *     * `GQ` - Equatorial Guinea
     *     * `ER` - Eritrea
     *     * `EE` - Estonia
     *     * `SZ` - Eswatini
     *     * `ET` - Ethiopia
     *     * `FK` - Falkland Islands (Malvinas)
     *     * `FO` - Faroe Islands
     *     * `FJ` - Fiji
     *     * `FI` - Finland
     *     * `FR` - France
     *     * `GF` - French Guiana
     *     * `PF` - French Polynesia
     *     * `TF` - French Southern Territories
     *     * `GA` - Gabon
     *     * `GM` - Gambia
     *     * `GE` - Georgia
     *     * `DE` - Germany
     *     * `GH` - Ghana
     *     * `GI` - Gibraltar
     *     * `GR` - Greece
     *     * `GL` - Greenland
     *     * `GD` - Grenada
     *     * `GP` - Guadeloupe
     *     * `GU` - Guam
     *     * `GT` - Guatemala
     *     * `GG` - Guernsey
     *     * `GN` - Guinea
     *     * `GW` - Guinea-Bissau
     *     * `GY` - Guyana
     *     * `HT` - Haiti
     *     * `HM` - Heard Island and McDonald Islands
     *     * `VA` - Holy See
     *     * `HN` - Honduras
     *     * `HK` - Hong Kong
     *     * `HU` - Hungary
     *     * `IS` - Iceland
     *     * `IN` - India
     *     * `ID` - Indonesia
     *     * `IR` - Iran
     *     * `IQ` - Iraq
     *     * `IE` - Ireland
     *     * `IM` - Isle of Man
     *     * `IL` - Israel
     *     * `IT` - Italy
     *     * `JM` - Jamaica
     *     * `JP` - Japan
     *     * `JE` - Jersey
     *     * `JO` - Jordan
     *     * `KZ` - Kazakhstan
     *     * `KE` - Kenya
     *     * `KI` - Kiribati
     *     * `KW` - Kuwait
     *     * `KG` - Kyrgyzstan
     *     * `LA` - Laos
     *     * `LV` - Latvia
     *     * `LB` - Lebanon
     *     * `LS` - Lesotho
     *     * `LR` - Liberia
     *     * `LY` - Libya
     *     * `LI` - Liechtenstein
     *     * `LT` - Lithuania
     *     * `LU` - Luxembourg
     *     * `MO` - Macao
     *     * `MG` - Madagascar
     *     * `MW` - Malawi
     *     * `MY` - Malaysia
     *     * `MV` - Maldives
     *     * `ML` - Mali
     *     * `MT` - Malta
     *     * `MH` - Marshall Islands
     *     * `MQ` - Martinique
     *     * `MR` - Mauritania
     *     * `MU` - Mauritius
     *     * `YT` - Mayotte
     *     * `MX` - Mexico
     *     * `FM` - Micronesia (Federated States of)
     *     * `MD` - Moldova
     *     * `MC` - Monaco
     *     * `MN` - Mongolia
     *     * `ME` - Montenegro
     *     * `MS` - Montserrat
     *     * `MA` - Morocco
     *     * `MZ` - Mozambique
     *     * `MM` - Myanmar
     *     * `NA` - Namibia
     *     * `NR` - Nauru
     *     * `NP` - Nepal
     *     * `NL` - Netherlands
     *     * `NC` - New Caledonia
     *     * `NZ` - New Zealand
     *     * `NI` - Nicaragua
     *     * `NE` - Niger
     *     * `NG` - Nigeria
     *     * `NU` - Niue
     *     * `NF` - Norfolk Island
     *     * `KP` - North Korea
     *     * `MK` - North Macedonia
     *     * `MP` - Northern Mariana Islands
     *     * `NO` - Norway
     *     * `OM` - Oman
     *     * `PK` - Pakistan
     *     * `PW` - Palau
     *     * `PS` - Palestine, State of
     *     * `PA` - Panama
     *     * `PG` - Papua New Guinea
     *     * `PY` - Paraguay
     *     * `PE` - Peru
     *     * `PH` - Philippines
     *     * `PN` - Pitcairn
     *     * `PL` - Poland
     *     * `PT` - Portugal
     *     * `PR` - Puerto Rico
     *     * `QA` - Qatar
     *     * `RE` - Réunion
     *     * `RO` - Romania
     *     * `RU` - Russia
     *     * `RW` - Rwanda
     *     * `BL` - Saint Barthélemy
     *     * `SH` - Saint Helena, Ascension and Tristan da Cunha
     *     * `KN` - Saint Kitts and Nevis
     *     * `LC` - Saint Lucia
     *     * `MF` - Saint Martin (French part)
     *     * `PM` - Saint Pierre and Miquelon
     *     * `VC` - Saint Vincent and the Grenadines
     *     * `WS` - Samoa
     *     * `SM` - San Marino
     *     * `ST` - Sao Tome and Principe
     *     * `SA` - Saudi Arabia
     *     * `SN` - Senegal
     *     * `RS` - Serbia
     *     * `SC` - Seychelles
     *     * `SL` - Sierra Leone
     *     * `SG` - Singapore
     *     * `SX` - Sint Maarten (Dutch part)
     *     * `SK` - Slovakia
     *     * `SI` - Slovenia
     *     * `SB` - Solomon Islands
     *     * `SO` - Somalia
     *     * `ZA` - South Africa
     *     * `GS` - South Georgia and the South Sandwich Islands
     *     * `KR` - South Korea
     *     * `SS` - South Sudan
     *     * `ES` - Spain
     *     * `LK` - Sri Lanka
     *     * `SD` - Sudan
     *     * `SR` - Suriname
     *     * `SJ` - Svalbard and Jan Mayen
     *     * `SE` - Sweden
     *     * `CH` - Switzerland
     *     * `SY` - Syria
     *     * `TW` - Taiwan
     *     * `TJ` - Tajikistan
     *     * `TZ` - Tanzania
     *     * `TH` - Thailand
     *     * `TL` - Timor-Leste
     *     * `TG` - Togo
     *     * `TK` - Tokelau
     *     * `TO` - Tonga
     *     * `TT` - Trinidad and Tobago
     *     * `TN` - Tunisia
     *     * `TR` - Turkey
     *     * `TM` - Turkmenistan
     *     * `TC` - Turks and Caicos Islands
     *     * `TV` - Tuvalu
     *     * `UG` - Uganda
     *     * `UA` - Ukraine
     *     * `AE` - United Arab Emirates
     *     * `GB` - United Kingdom
     *     * `UM` - United States Minor Outlying Islands
     *     * `US` - United States of America
     *     * `UY` - Uruguay
     *     * `UZ` - Uzbekistan
     *     * `VU` - Vanuatu
     *     * `VE` - Venezuela
     *     * `VN` - Vietnam
     *     * `VG` - Virgin Islands (British)
     *     * `VI` - Virgin Islands (U.S.)
     *     * `WF` - Wallis and Futuna
     *     * `EH` - Western Sahara
     *     * `YE` - Yemen
     *     * `ZM` - Zambia
     *     * `ZW` - Zimbabwe
     * @enum {string}
     */
    CountryEnum:
      | 'AF'
      | 'AX'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BQ'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'CV'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CW'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'SZ'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GG'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IM'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JE'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'ME'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'KP'
      | 'MK'
      | 'MP'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'BL'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'MF'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'RS'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SX'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'KR'
      | 'SS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'UM'
      | 'US'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
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
    /** @description # The Event Object
     *     ### Description
     *     The `Event` object is used to represent a marketing event, such as a webinar or email, in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/events` endpoint and view their type properties. */
    Event: {
      /**
       * Format: uuid
       * @example 5648cbc6-6040-430a-475r-aafacbadf8ry
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 10
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
       * @description The event's name.
       * @example New Customer Webinar
       */
      name?: string | null
      /**
       * @description The event's description.
       * @example Webinar for new customers to learn more about the product.
       */
      description?: string | null
      /**
       * Format: date-time
       * @description When the event was created in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * @description The marketing emails about this event.
       * @example [
       *       "2634cbc6-6040-430a-475r-aafacbadf9he"
       *     ]
       */
      emails: string[]
      /**
       * @description The messages about this event.
       * @example [
       *       "3734cbc6-6040-430a-475r-aafacbadr6wq"
       *     ]
       */
      messages: string[]
      /**
       * Format: date-time
       * @description When the event starts.
       * @example 2022-01-03T00:00:00Z
       */
      start_time?: string | null
      /**
       * Format: date-time
       * @description When the event ends.
       * @example 2022-01-03T01:00:00Z
       */
      end_time?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/events",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
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
      User?: components['schemas']['ExternalTargetFieldAPI'][]
      Contact?: components['schemas']['ExternalTargetFieldAPI'][]
      Campaign?: components['schemas']['ExternalTargetFieldAPI'][]
      List?: components['schemas']['ExternalTargetFieldAPI'][]
      Message?: components['schemas']['ExternalTargetFieldAPI'][]
      Template?: components['schemas']['ExternalTargetFieldAPI'][]
      MarketingEmail?: components['schemas']['ExternalTargetFieldAPI'][]
      Event?: components['schemas']['ExternalTargetFieldAPI'][]
      Action?: components['schemas']['ExternalTargetFieldAPI'][]
      Automation?: components['schemas']['ExternalTargetFieldAPI'][]
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
      User?: components['schemas']['FieldMappingApiInstance'][]
      Contact?: components['schemas']['FieldMappingApiInstance'][]
      Campaign?: components['schemas']['FieldMappingApiInstance'][]
      List?: components['schemas']['FieldMappingApiInstance'][]
      Message?: components['schemas']['FieldMappingApiInstance'][]
      Template?: components['schemas']['FieldMappingApiInstance'][]
      MarketingEmail?: components['schemas']['FieldMappingApiInstance'][]
      Event?: components['schemas']['FieldMappingApiInstance'][]
      Action?: components['schemas']['FieldMappingApiInstance'][]
      Automation?: components['schemas']['FieldMappingApiInstance'][]
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
    /** @description # The List Object
     *     ### Description
     *     The `List` object is used to represent a list of contacts in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/lists` endpoint and view their names. */
    List: {
      /**
       * Format: uuid
       * @example 4747cbc6-6040-430a-475r-aafacbadrt36
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 25
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
       * @description The list's name.
       * @example New Customer List
       */
      name?: string | null
      /**
       * @description The list's type.
       * @example Static
       */
      type?: string | null
      /**
       * Format: date-time
       * @description When the list was created in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the list was last updated in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_updated_at?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/lists",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The List Object
     *     ### Description
     *     The `List` object is used to represent a list of contacts in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/lists` endpoint and view their names. */
    ListRequest: {
      /**
       * @description The list's name.
       * @example New Customer List
       */
      name?: string | null
      /**
       * @description The list's type.
       * @example Static
       */
      type?: string | null
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
    MKTGActionEndpointRequest: {
      model: components['schemas']['ActionRequest']
    }
    MKTGActionResponse: {
      model: components['schemas']['Action']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    MKTGAutomationEndpointRequest: {
      model: components['schemas']['AutomationRequest']
    }
    MKTGAutomationResponse: {
      model: components['schemas']['Automation']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    MKTGCampaignEndpointRequest: {
      model: components['schemas']['CampaignRequest']
    }
    MKTGCampaignResponse: {
      model: components['schemas']['Campaign']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    MKTGContactEndpointRequest: {
      model: components['schemas']['ContactRequest']
    }
    MKTGContactResponse: {
      model: components['schemas']['Contact']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    MKTGListEndpointRequest: {
      model: components['schemas']['ListRequest']
    }
    MKTGListResponse: {
      model: components['schemas']['List']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    MKTGTemplateEndpointRequest: {
      model: components['schemas']['TemplateRequest']
    }
    MKTGTemplateResponse: {
      model: components['schemas']['Template']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /** @description # The Marketing Email Object
     *     ### Description
     *     The `MarketingEmail` object is used to represent a marketing email in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/emails` endpoint and view their html_body properties. */
    MarketingEmail: {
      /**
       * Format: uuid
       * @example 2634cbc6-6040-430a-475r-aafacbadf9he
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 15
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
       * @description The marketing email's name.
       * @example Welcome Email
       */
      name?: string | null
      /**
       * @description The marketing email's subject.
       * @example Welcome onboard!
       */
      subject?: string | null
      /**
       * @description The marketing email's body.
       * @example Welcome onboard! Stay connected and find out more.
       */
      body?: string | null
      /**
       * @description The marketing email's html body.
       * @example <b>Welcome onboard</b>! Stay connected and find out more.
       */
      html_body?: string | null
      /**
       * @description The marketing email's from name.
       * @example Merge
       */
      from_name?: string | null
      /**
       * @description The marketing email's from email.
       * @example hello@merge.dev
       */
      from_email?: string | null
      /**
       * @description The marketing email's preview.
       * @example Welcome onboard!
       */
      preview?: string | null
      /**
       * @description The marketing email's reply-to.
       * @example hello@merge.dev
       */
      reply_to?: string | null
      /**
       * Format: date-time
       * @description When the marketing email was created in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the marketing email was last updated in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_updated_at?: string | null
      /**
       * @description The marketing email's status.
       *
       *     * `DRAFT` - DRAFT
       *     * `QUEUED` - QUEUED
       *     * `SENT` - SENT
       * @example SENT
       */
      status?: components['schemas']['MarketingEmailStatusEnum'] | null
      /**
       * Format: date-time
       * @description When the marketing email was sent.
       * @example 2022-12-25T00:00:00Z
       */
      send_date?: string | null
      /**
       * Format: uuid
       * @description The marketing email's template.
       * @example 4958cbc6-4874-430a-475r-aafacbadd5ty
       */
      template?: string | null
      /**
       * @description The campaigns receiving this marketing email.
       * @example 3737cbc6-6040-430a-475r-aafacbadrf47
       */
      campaigns: string[]
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/emails",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `DRAFT` - DRAFT
     *     * `QUEUED` - QUEUED
     *     * `SENT` - SENT
     * @enum {string}
     */
    MarketingEmailStatusEnum: 'DRAFT' | 'QUEUED' | 'SENT'
    /** @description # The Message Object
     *     ### Description
     *     The `Message` object is used to represent a text message, in-app message or a message sent via another channel in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/messages` endpoint and view their body properties. */
    Message: {
      /**
       * Format: uuid
       * @example 3734cbc6-6040-430a-475r-aafacbadr6wq
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 20
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
       * @description The message's from-name.
       * @example Merge
       */
      from_name?: string | null
      /**
       * Format: date-time
       * @description When the message was sent.
       * @example 2022-12-23T00:00:00Z
       */
      send_date?: string | null
      /**
       * @description The message's body.
       * @example Here's what's new in December!
       */
      body?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/messages",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
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
    PaginatedActionList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Action'][]
    }
    PaginatedAuditLogEventList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AuditLogEvent'][]
    }
    PaginatedAutomationList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Automation'][]
    }
    PaginatedCampaignList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Campaign'][]
    }
    PaginatedContactList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Contact'][]
    }
    PaginatedEventList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Event'][]
    }
    PaginatedIssueList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Issue'][]
    }
    PaginatedListList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['List'][]
    }
    PaginatedMarketingEmailList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['MarketingEmail'][]
    }
    PaginatedMessageList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Message'][]
    }
    PaginatedSyncStatusList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['SyncStatus'][]
    }
    PaginatedTemplateList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Template'][]
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
      User?: components['schemas']['RemoteFieldAPI'][]
      Contact?: components['schemas']['RemoteFieldAPI'][]
      Campaign?: components['schemas']['RemoteFieldAPI'][]
      List?: components['schemas']['RemoteFieldAPI'][]
      Message?: components['schemas']['RemoteFieldAPI'][]
      Template?: components['schemas']['RemoteFieldAPI'][]
      MarketingEmail?: components['schemas']['RemoteFieldAPI'][]
      Event?: components['schemas']['RemoteFieldAPI'][]
      Action?: components['schemas']['RemoteFieldAPI'][]
      Automation?: components['schemas']['RemoteFieldAPI'][]
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
      /** @example Automation */
      model_name: string
      /** @example mktg.MKTGAutomation */
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
    /** @description # The Template Object
     *     ### Description
     *     The `Template` object is used to represent a template for a marketing asset in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/templates` endpoint and view their content properties. */
    Template: {
      /**
       * Format: uuid
       * @example 4958cbc6-4874-430a-475r-aafacbadd5ty
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 40
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
       * @description The template's name.
       * @example Welcome Email Template
       */
      name?: string | null
      /**
       * @description The template's type.
       *
       *     * `EMAIL` - EMAIL
       *     * `MESSAGE` - MESSAGE
       * @example Email
       */
      type?: components['schemas']['TypeEnum'] | null
      /**
       * @description The template contents.
       * @example Welcome onboard! Stay connected and find out more.
       */
      contents?: string | null
      /**
       * Format: uuid
       * @description The template's owner.
       * @example 991ecb4a-b2be-4dd6-9777-f091e937cad9
       */
      owner?: string | null
      /**
       * Format: date-time
       * @description When the template was created in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the template was last updated in the remote system.
       * @example 2022-12-23T00:00:00Z
       */
      remote_updated_at?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
       *         "path": "/templates",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Template Object
     *     ### Description
     *     The `Template` object is used to represent a template for a marketing asset in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/templates` endpoint and view their content properties. */
    TemplateRequest: {
      /**
       * @description The template's name.
       * @example Welcome Email Template
       */
      name?: string | null
      /**
       * @description The template's type.
       *
       *     * `EMAIL` - EMAIL
       *     * `MESSAGE` - MESSAGE
       * @example Email
       */
      type?: components['schemas']['TypeEnum'] | null
      /**
       * @description The template contents.
       * @example Welcome onboard! Stay connected and find out more.
       */
      contents?: string | null
      /**
       * Format: uuid
       * @description The template's owner.
       * @example 991ecb4a-b2be-4dd6-9777-f091e937cad9
       */
      owner?: string | null
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
    /**
     * @description * `TRIGGER_EVENT` - TRIGGER_EVENT
     *     * `RECURRENCE` - RECURRENCE
     * @enum {string}
     */
    TriggerTypeEnum: 'TRIGGER_EVENT' | 'RECURRENCE'
    /**
     * @description * `EMAIL` - EMAIL
     *     * `MESSAGE` - MESSAGE
     * @enum {string}
     */
    TypeEnum: 'EMAIL' | 'MESSAGE'
    /** @description # The User Object
     *     ### Description
     *     The `User` object is used to represent a user in the remote system.
     *     ### Usage Example
     *     Fetch from the `GET /api/mktg/v1/users` endpoint and view their email addresses. */
    User: {
      /**
       * Format: uuid
       * @example aafb4c06-ed3b-4f68-a936-5bb4c415c224
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 1
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
       * @description The user's full name.
       * @example Gil Feig
       */
      name?: string | null
      /**
       * @description The user's username.
       * @example gilfeig
       */
      username?: string | null
      /**
       * @description The user's email.
       * @example merge_is_hiring@merge.dev
       */
      email?: string | null
      /**
       * @description The user's role.
       *
       *     * `ADMIN` - ADMIN
       *     * `MANAGER` - MANAGER
       *     * `CONTRIBUTOR` - CONTRIBUTOR
       *     * `VIEWER` - VIEWER
       * @example ADMIN
       */
      role?: components['schemas']['UserRoleEnum'] | null
      /**
       * @description The user's timezone.
       * @example New York/EST
       */
      timezone?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
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
    /**
     * @description * `ADMIN` - ADMIN
     *     * `MANAGER` - MANAGER
     *     * `CONTRIBUTOR` - CONTRIBUTOR
     *     * `VIEWER` - VIEWER
     * @enum {string}
     */
    UserRoleEnum: 'ADMIN' | 'MANAGER' | 'CONTRIBUTOR' | 'VIEWER'
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
  actions_list: {
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
          'application/json': components['schemas']['PaginatedActionList']
        }
      }
    }
  }
  actions_create: {
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
        'application/json': components['schemas']['MKTGActionEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['MKTGActionEndpointRequest']
        'multipart/form-data': components['schemas']['MKTGActionEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MKTGActionResponse']
        }
      }
    }
  }
  actions_retrieve: {
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
          'application/json': components['schemas']['Action']
        }
      }
    }
  }
  actions_meta_post_retrieve: {
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
  automations_list: {
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
          'application/json': components['schemas']['PaginatedAutomationList']
        }
      }
    }
  }
  automations_create: {
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
        'application/json': components['schemas']['MKTGAutomationEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['MKTGAutomationEndpointRequest']
        'multipart/form-data': components['schemas']['MKTGAutomationEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MKTGAutomationResponse']
        }
      }
    }
  }
  automations_retrieve: {
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
          'application/json': components['schemas']['Automation']
        }
      }
    }
  }
  automations_recipients_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        parent_id: string
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
          'application/json': components['schemas']['PaginatedContactList']
        }
      }
    }
  }
  automations_meta_post_retrieve: {
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
  campaigns_list: {
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
          'application/json': components['schemas']['PaginatedCampaignList']
        }
      }
    }
  }
  campaigns_create: {
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
        'application/json': components['schemas']['MKTGCampaignEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['MKTGCampaignEndpointRequest']
        'multipart/form-data': components['schemas']['MKTGCampaignEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MKTGCampaignResponse']
        }
      }
    }
  }
  campaigns_retrieve: {
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
          'application/json': components['schemas']['Campaign']
        }
      }
    }
  }
  campaigns_contacts_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        parent_id: string
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
          'application/json': components['schemas']['PaginatedContactList']
        }
      }
    }
  }
  campaigns_meta_post_retrieve: {
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
  contacts_list: {
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
          'application/json': components['schemas']['PaginatedContactList']
        }
      }
    }
  }
  contacts_create: {
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
        'application/json': components['schemas']['MKTGContactEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['MKTGContactEndpointRequest']
        'multipart/form-data': components['schemas']['MKTGContactEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MKTGContactResponse']
        }
      }
    }
  }
  contacts_retrieve: {
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
          'application/json': components['schemas']['Contact']
        }
      }
    }
  }
  contacts_meta_post_retrieve: {
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
  emails_list: {
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
          'application/json': components['schemas']['PaginatedMarketingEmailList']
        }
      }
    }
  }
  emails_retrieve: {
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
          'application/json': components['schemas']['MarketingEmail']
        }
      }
    }
  }
  emails_recipients_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        parent_id: string
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
          'application/json': components['schemas']['PaginatedContactList']
        }
      }
    }
  }
  events_list: {
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
          'application/json': components['schemas']['PaginatedEventList']
        }
      }
    }
  }
  events_retrieve: {
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
          'application/json': components['schemas']['Event']
        }
      }
    }
  }
  events_contacts_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        parent_id: string
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
          'application/json': components['schemas']['PaginatedContactList']
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
  lists_list: {
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
          'application/json': components['schemas']['PaginatedListList']
        }
      }
    }
  }
  lists_create: {
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
        'application/json': components['schemas']['MKTGListEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['MKTGListEndpointRequest']
        'multipart/form-data': components['schemas']['MKTGListEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MKTGListResponse']
        }
      }
    }
  }
  lists_retrieve: {
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
          'application/json': components['schemas']['List']
        }
      }
    }
  }
  lists_subscribers_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        parent_id: string
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
          'application/json': components['schemas']['PaginatedContactList']
        }
      }
    }
  }
  lists_meta_post_retrieve: {
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
  messages_list: {
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
          'application/json': components['schemas']['PaginatedMessageList']
        }
      }
    }
  }
  messages_retrieve: {
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
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  messages_recipients_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        parent_id: string
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
          'application/json': components['schemas']['PaginatedContactList']
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
  templates_list: {
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
          'application/json': components['schemas']['PaginatedTemplateList']
        }
      }
    }
  }
  templates_create: {
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
        'application/json': components['schemas']['MKTGTemplateEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['MKTGTemplateEndpointRequest']
        'multipart/form-data': components['schemas']['MKTGTemplateEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MKTGTemplateResponse']
        }
      }
    }
  }
  templates_retrieve: {
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
          'application/json': components['schemas']['Template']
        }
      }
    }
  }
  templates_meta_post_retrieve: {
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
