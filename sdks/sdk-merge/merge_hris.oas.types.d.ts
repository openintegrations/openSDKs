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
  '/bank-info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `BankInfo` objects. */
    get: operations['bank_info_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/bank-info/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `BankInfo` object with the given `id`. */
    get: operations['bank_info_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/benefits': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Benefit` objects. */
    get: operations['benefits_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/benefits/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Benefit` object with the given `id`. */
    get: operations['benefits_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/companies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Company` objects. */
    get: operations['companies_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/companies/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Company` object with the given `id`. */
    get: operations['companies_retrieve']
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
  '/dependents': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Dependent` objects. */
    get: operations['dependents_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/dependents/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Dependent` object with the given `id`. */
    get: operations['dependents_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employee-payroll-runs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `EmployeePayrollRun` objects. */
    get: operations['employee_payroll_runs_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employee-payroll-runs/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `EmployeePayrollRun` object with the given `id`. */
    get: operations['employee_payroll_runs_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employees': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Employee` objects. */
    get: operations['employees_list']
    put?: never
    /** @description Creates an `Employee` object with the given values. */
    post: operations['employees_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employees/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Employee` object with the given `id`. */
    get: operations['employees_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employees/ignore/{model_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes. */
    post: operations['employees_ignore_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employees/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Employee` POSTs. */
    get: operations['employees_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employer-benefits': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `EmployerBenefit` objects. */
    get: operations['employer_benefits_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employer-benefits/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `EmployerBenefit` object with the given `id`. */
    get: operations['employer_benefits_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employments': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Employment` objects. */
    get: operations['employments_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/employments/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Employment` object with the given `id`. */
    get: operations['employments_retrieve']
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
  '/locations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Location` objects. */
    get: operations['locations_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/locations/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Location` object with the given `id`. */
    get: operations['locations_retrieve']
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
  '/pay-groups': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `PayGroup` objects. */
    get: operations['pay_groups_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/pay-groups/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `PayGroup` object with the given `id`. */
    get: operations['pay_groups_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/payroll-runs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `PayrollRun` objects. */
    get: operations['payroll_runs_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/payroll-runs/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `PayrollRun` object with the given `id`. */
    get: operations['payroll_runs_retrieve']
    put?: never
    post?: never
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
  '/teams': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Team` objects. */
    get: operations['teams_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/teams/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Team` object with the given `id`. */
    get: operations['teams_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/time-off': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `TimeOff` objects. */
    get: operations['time_off_list']
    put?: never
    /** @description Creates a `TimeOff` object with the given values. */
    post: operations['time_off_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/time-off-balances': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `TimeOffBalance` objects. */
    get: operations['time_off_balances_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/time-off-balances/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `TimeOffBalance` object with the given `id`. */
    get: operations['time_off_balances_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/time-off/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `TimeOff` object with the given `id`. */
    get: operations['time_off_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/time-off/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `TimeOff` POSTs. */
    get: operations['time_off_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/timesheet-entries': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `TimesheetEntry` objects. */
    get: operations['timesheet_entries_list']
    put?: never
    /** @description Creates a `TimesheetEntry` object with the given values. */
    post: operations['timesheet_entries_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/timesheet-entries/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `TimesheetEntry` object with the given `id`. */
    get: operations['timesheet_entries_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/timesheet-entries/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `TimesheetEntry` POSTs. */
    get: operations['timesheet_entries_meta_post_retrieve']
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
    /**
     * @description * `SAVINGS` - SAVINGS
     *     * `CHECKING` - CHECKING
     * @enum {string}
     */
    AccountTypeEnum: 'SAVINGS' | 'CHECKING'
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
    /** @description # The BankInfo Object
     *     ### Description
     *     The `BankInfo` object is used to represent the Bank Account information for an Employee.
     *
     *     ### Usage Example
     *     Fetch from the `LIST BankInfo` endpoint and filter by `ID` to show all bank information. */
    BankInfo: {
      /**
       * Format: uuid
       * @example fd1e0fb5-8f92-4ec9-9f32-179cf732867d
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 123234
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
       * @description The employee with this bank account.
       * @example a3617eb4-dfe3-426f-921e-a65fc1661e10
       */
      employee?: string | null
      /**
       * @description The account number.
       * @example 439291590
       */
      account_number?: string | null
      /**
       * @description The routing number.
       * @example 089690059
       */
      routing_number?: string | null
      /**
       * @description The bank name.
       * @example Chase
       */
      bank_name?: string | null
      /**
       * @description The bank account type
       *
       *     * `SAVINGS` - SAVINGS
       *     * `CHECKING` - CHECKING
       * @example CHECKING
       */
      account_type?: components['schemas']['AccountTypeEnum'] | null
      /**
       * Format: date-time
       * @description When the matching bank object was created in the third party system.
       * @example 2021-12-06T10:11:26Z
       */
      remote_created_at?: string | null
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
       *         "path": "/bank-info",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Benefit Object
     *     ### Description
     *     The `Benefit` object is used to represent a benefit that an employee has enrolled in.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Benefits` endpoint and filter by `ID` to show all benefits. */
    Benefit: {
      /**
       * Format: uuid
       * @example 3fe5ae7a-f1ba-4529-b7af-84e86dc6d232
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
       * Format: uuid
       * @description The employee on the plan.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      employee?: string | null
      /**
       * @description The name of the benefit provider.
       * @example Blue Shield of California
       */
      provider_name?: string | null
      /**
       * @deprecated
       * @description The type of benefit plan
       */
      benefit_plan_type?: string | null
      /**
       * Format: double
       * @description The employee's contribution.
       * @example 23.65
       */
      employee_contribution?: number | null
      /**
       * Format: double
       * @description The company's contribution.
       * @example 150
       */
      company_contribution?: number | null
      /**
       * Format: date-time
       * @description The day and time the benefit started.
       * @example 2020-11-15 00:59:25.309761+00:00
       */
      start_date?: string | null
      /**
       * Format: date-time
       * @description The day and time the benefit ended.
       * @example 2021-10-15 00:23:25.309761+00:00
       */
      end_date?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
      /**
       * Format: uuid
       * @description The employer benefit plan the employee is enrolled in.
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      employer_benefit?: string | null
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
       *         "path": "/benefits",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `MEDICAL` - MEDICAL
     *     * `HEALTH_SAVINGS` - HEALTH_SAVINGS
     *     * `INSURANCE` - INSURANCE
     *     * `RETIREMENT` - RETIREMENT
     *     * `OTHER` - OTHER
     * @enum {string}
     */
    BenefitPlanTypeEnum:
      | 'MEDICAL'
      | 'HEALTH_SAVINGS'
      | 'INSURANCE'
      | 'RETIREMENT'
      | 'OTHER'
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
    /** @description # The Company Object
     *     ### Description
     *     The `Company` object is used to represent a company within the HRIS / Payroll system.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Companies` endpoint and filter by `ID` to show all companies. */
    Company: {
      /**
       * Format: uuid
       * @example 1b998423-db0a-4037-a4cf-f79c60cb67b3
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
       * @description The company's legal name.
       * @example Waystar Royco, Inc.
       */
      legal_name?: string | null
      /**
       * @description The company's display name.
       * @example Waystar Royco
       */
      display_name?: string | null
      /**
       * @description The company's Employer Identification Numbers.
       * @example [
       *       "12-3456789",
       *       "12-3451111",
       *       "11-0011000"
       *     ]
       */
      eins?: (string | null)[] | null
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
       *         "path": "/companies",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
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
    /** @description # The Deduction Object
     *     ### Description
     *     The `Deduction` object is used to represent an array of the wages withheld from total earnings for the purpose of paying taxes.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Deductions` endpoint and filter by `ID` to show all deductions. */
    Deduction: {
      /**
       * Format: uuid
       * @example 5fd439fc-1b64-4755-b275-64918936c365
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 93478612
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
       * @example 35347df1-95e7-46e2-93cc-66f1191edca5
       */
      employee_payroll_run?: string | null
      /**
       * @description The deduction's name.
       * @example Social Security
       */
      name?: string | null
      /**
       * Format: double
       * @description The amount of money that is withheld from an employee's gross pay by the employee.
       * @example 34.54
       */
      employee_deduction?: number | null
      /**
       * Format: double
       * @description The amount of money that is withheld on behalf of an employee by the company.
       * @example 78.78
       */
      company_deduction?: number | null
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
       *         "path": "/payroll-deduction",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Dependent Object
     *     ### Description
     *     The `Dependent` object is used to represent a dependent (e.g. child, spouse, domestic partner, etc) of an `Employee`
     *
     *     ### Usage Example
     *     Fetch from the `LIST Dependents` endpoint and filter by `ID` to show all dependents. */
    Dependent: {
      /**
       * Format: uuid
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202940
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
       * @description The dependents's first name.
       * @example Greg
       */
      first_name?: string | null
      /**
       * @description The dependents's middle name.
       * @example A
       */
      middle_name?: string | null
      /**
       * @description The dependents's last name.
       * @example Hirsch
       */
      last_name?: string | null
      /**
       * @description The dependent's relationship to the employee.
       *
       *     * `CHILD` - CHILD
       *     * `SPOUSE` - SPOUSE
       *     * `DOMESTIC_PARTNER` - DOMESTIC_PARTNER
       * @example CHILD
       */
      relationship?: components['schemas']['RelationshipEnum'] | null
      /**
       * Format: uuid
       * @description The employee this person is a dependent of.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      employee?: string | null
      /**
       * Format: date-time
       * @description The dependent's date of birth.
       * @example 1990-11-10T00:00:00Z
       */
      date_of_birth?: string | null
      /**
       * @description The dependent's gender.
       *
       *     * `MALE` - MALE
       *     * `FEMALE` - FEMALE
       *     * `NON-BINARY` - NON-BINARY
       *     * `OTHER` - OTHER
       *     * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
       * @example MALE
       */
      gender?: components['schemas']['GenderEnum'] | null
      /**
       * @description The dependent's phone number.
       * @example +1234567890
       */
      phone_number?: string | null
      /**
       * Format: uuid
       * @description The dependents's home address.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      home_location?: string | null
      /** @description Whether or not the dependent is a student */
      is_student?: boolean | null
      /**
       * @description The dependents's social security number.
       * @example 1234567890
       */
      ssn?: string | null
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
       *         "path": "/dependent",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Earning Object
     *     ### Description
     *     The `Earning` object is used to represent an array of different compensations that an employee receives within specific wage categories.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Earnings` endpoint and filter by `ID` to show all earnings. */
    Earning: {
      /**
       * Format: uuid
       * @example babbced6-3a81-4775-8da2-490dc6385259
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 52802
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
       * @example 35347df1-95e7-46e2-93cc-66f1191edca5
       */
      employee_payroll_run?: string | null
      /**
       * Format: double
       * @description The amount earned.
       * @example 1002.34
       */
      amount?: number | null
      /**
       * @description The type of earning.
       *
       *     * `SALARY` - SALARY
       *     * `REIMBURSEMENT` - REIMBURSEMENT
       *     * `OVERTIME` - OVERTIME
       *     * `BONUS` - BONUS
       * @example SALARY
       */
      type?: components['schemas']['EarningTypeEnum'] | null
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
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `SALARY` - SALARY
     *     * `REIMBURSEMENT` - REIMBURSEMENT
     *     * `OVERTIME` - OVERTIME
     *     * `BONUS` - BONUS
     * @enum {string}
     */
    EarningTypeEnum: 'SALARY' | 'REIMBURSEMENT' | 'OVERTIME' | 'BONUS'
    /** @description # The Employee Object
     *     ### Description
     *     The `Employee` object is used to represent any person who has been employed by a company. By default, it returns all employees. To filter for only active employees, set the `employment_status` query parameter to `ACTIVE`.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees. */
    Employee: {
      /**
       * Format: uuid
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
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
       * @description The employee's number that appears in the third-party integration's UI.
       * @example 2
       */
      employee_number?: string | null
      /**
       * Format: uuid
       * @description The ID of the employee's company.
       * @example 8d9fd929-436c-4fd4-a48b-0c61f68d6178
       */
      company?: string | null
      /**
       * @description The employee's first name.
       * @example Greg
       */
      first_name?: string | null
      /**
       * @description The employee's last name.
       * @example Hirsch
       */
      last_name?: string | null
      /**
       * @description The employee's preferred first name.
       * @example Greg the egg
       */
      preferred_name?: string | null
      /**
       * @description The employee's full name, to use for display purposes. If a preferred first name is available, the full name will include the preferred first name.
       * @example Cousin Greg Hirsch
       */
      display_full_name?: string | null
      /**
       * @description The employee's username that appears in the remote UI.
       * @example cousingreg
       */
      username?: string | null
      /** @example [
       *       "21a54124-397f-494d-985e-3c5b330b8a68"
       *     ] */
      groups?: (string | null)[]
      /**
       * Format: email
       * @description The employee's work email.
       * @example greg@merge.dev
       */
      work_email?: string | null
      /**
       * Format: email
       * @description The employee's personal email.
       * @example greg@gmail.com
       */
      personal_email?: string | null
      /**
       * @description The employee's mobile phone number.
       * @example +1234567890
       */
      mobile_phone_number?: string | null
      /**
       * @description Array of `Employment` IDs for this Employee.
       * @example [
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ]
       */
      employments?: (string | null)[]
      /**
       * Format: uuid
       * @description The employee's home address.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      home_location?: string | null
      /**
       * Format: uuid
       * @description The employee's work address.
       * @example 9efbc633-3387-4306-aa55-e2c635e6bb4f
       */
      work_location?: string | null
      /**
       * Format: uuid
       * @description The employee ID of the employee's manager.
       * @example 0048ea5b-911e-4dff-9364-92070dea62ff
       */
      manager?: string | null
      /**
       * Format: uuid
       * @deprecated
       * @description The employee's team.
       */
      team?: string | null
      /**
       * Format: uuid
       * @description The employee's pay group
       * @example ad1264e2-39be-4787-b749-f1aade9e3405
       */
      pay_group?: string | null
      /**
       * @description The employee's social security number.
       * @example 1234567890
       */
      ssn?: string | null
      /**
       * @description The employee's gender.
       *
       *     * `MALE` - MALE
       *     * `FEMALE` - FEMALE
       *     * `NON-BINARY` - NON-BINARY
       *     * `OTHER` - OTHER
       *     * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
       * @example MALE
       */
      gender?: components['schemas']['GenderEnum'] | null
      /**
       * @description The employee's ethnicity.
       *
       *     * `AMERICAN_INDIAN_OR_ALASKA_NATIVE` - AMERICAN_INDIAN_OR_ALASKA_NATIVE
       *     * `ASIAN_OR_INDIAN_SUBCONTINENT` - ASIAN_OR_INDIAN_SUBCONTINENT
       *     * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
       *     * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
       *     * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
       *     * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
       *     * `WHITE` - WHITE
       *     * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
       * @example WHITE
       */
      ethnicity?: components['schemas']['EthnicityEnum'] | null
      /**
       * @description The employee's filing status as related to marital status.
       *
       *     * `SINGLE` - SINGLE
       *     * `MARRIED_FILING_JOINTLY` - MARRIED_FILING_JOINTLY
       *     * `MARRIED_FILING_SEPARATELY` - MARRIED_FILING_SEPARATELY
       *     * `HEAD_OF_HOUSEHOLD` - HEAD_OF_HOUSEHOLD
       *     * `QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD` - QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD
       * @example SINGLE
       */
      marital_status?: components['schemas']['MaritalStatusEnum'] | null
      /**
       * Format: date-time
       * @description The employee's date of birth.
       * @example 1990-11-10T00:00:00Z
       */
      date_of_birth?: string | null
      /**
       * Format: date-time
       * @deprecated
       * @description The date that the employee was hired, usually the day that an offer letter is signed. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. Note: If you're looking for the employee's start date, refer to the start_date field.
       * @example 2020-10-10T00:00:00Z
       */
      hire_date?: string | null
      /**
       * Format: date-time
       * @description The date that the employee started working. If an employee was rehired, the most recent start date will be returned.
       * @example 2020-10-11T00:00:00Z
       */
      start_date?: string | null
      /**
       * Format: date-time
       * @description When the third party's employee was created.
       * @example 2020-10-11T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * @description The employment status of the employee.
       *
       *     * `ACTIVE` - ACTIVE
       *     * `PENDING` - PENDING
       *     * `INACTIVE` - INACTIVE
       * @example INACTIVE
       */
      employment_status?: components['schemas']['EmploymentStatusEnum'] | null
      /**
       * Format: date-time
       * @description The employee's termination date.
       * @example 2021-10-12T00:00:00Z
       */
      termination_date?: string | null
      /**
       * Format: uri
       * @description The URL of the employee's avatar image.
       * @example http://alturl.com/h2h8m
       */
      avatar?: string | null
      /** @description Custom fields configured for a given model. */
      custom_fields?: {
        [key: string]: unknown
      } | null
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
       *         "path": "/people",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    EmployeeEndpointRequest: {
      model: components['schemas']['EmployeeRequest']
    }
    /** @description # The EmployeePayrollRun Object
     *     ### Description
     *     The `EmployeePayrollRun` object is used to represent an employee's pay statement for a specific payroll run.
     *
     *     ### Usage Example
     *     Fetch from the `LIST EmployeePayrollRun` endpoint and filter by `ID` to show all employee payroll runs. */
    EmployeePayrollRun: {
      /**
       * Format: uuid
       * @example fb8c55b6-1cb8-4b4c-9fb6-17924231619d
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
       * Format: uuid
       * @description The employee whose payroll is being run.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      employee?: string | null
      /**
       * Format: uuid
       * @description The payroll being run.
       * @example 35347df1-95e7-46e2-93cc-66f1191edca5
       */
      payroll_run?: string | null
      /**
       * Format: double
       * @description The total earnings throughout a given period for an employee before any deductions are made.
       * @example 1342.67
       */
      gross_pay?: number | null
      /**
       * Format: double
       * @description The take-home pay throughout a given period for an employee after deductions are made.
       * @example 865.78
       */
      net_pay?: number | null
      /**
       * Format: date-time
       * @description The day and time the payroll run started.
       * @example 2020-11-08T00:00:00Z
       */
      start_date?: string | null
      /**
       * Format: date-time
       * @description The day and time the payroll run ended.
       * @example 2020-11-09T00:00:00Z
       */
      end_date?: string | null
      /**
       * Format: date-time
       * @description The day and time the payroll run was checked.
       * @example 2020-11-10T00:00:00Z
       */
      check_date?: string | null
      /** @example [
       *       {
       *         "employee_payroll_run": "35347df1-95e7-46e2-93cc-66f1191edca5",
       *         "amount": 1002.34,
       *         "type": "SALARY"
       *       },
       *       {
       *         "employee_payroll_run": "35347df1-95e7-46e2-93cc-66f1191edca5",
       *         "amount": 8342.34,
       *         "type": "OVERTIME"
       *       }
       *     ] */
      readonly earnings?: components['schemas']['Earning'][]
      /** @example [
       *       {
       *         "employee_payroll_run": "35347df1-95e7-46e2-93cc-66f1191edca5",
       *         "name": "Social Security",
       *         "employee_deduction": 34.54,
       *         "company_deduction": 78.78
       *       }
       *     ] */
      readonly deductions?: components['schemas']['Deduction'][]
      /** @example [
       *       {
       *         "employee_payroll_run": "35347df1-95e7-46e2-93cc-66f1191edca5",
       *         "name": "California State Income Tax",
       *         "amount": 100.25,
       *         "employer_tax": "False"
       *       }
       *     ] */
      readonly taxes?: components['schemas']['Tax'][]
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
       *         "path": "/employee-payroll",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Employee Object
     *     ### Description
     *     The `Employee` object is used to represent any person who has been employed by a company. By default, it returns all employees. To filter for only active employees, set the `employment_status` query parameter to `ACTIVE`.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees. */
    EmployeeRequest: {
      /**
       * @description The employee's number that appears in the third-party integration's UI.
       * @example 2
       */
      employee_number?: string | null
      /**
       * Format: uuid
       * @description The ID of the employee's company.
       * @example 8d9fd929-436c-4fd4-a48b-0c61f68d6178
       */
      company?: string | null
      /**
       * @description The employee's first name.
       * @example Greg
       */
      first_name?: string | null
      /**
       * @description The employee's last name.
       * @example Hirsch
       */
      last_name?: string | null
      /**
       * @description The employee's preferred first name.
       * @example Greg the egg
       */
      preferred_name?: string | null
      /**
       * @description The employee's full name, to use for display purposes. If a preferred first name is available, the full name will include the preferred first name.
       * @example Cousin Greg Hirsch
       */
      display_full_name?: string | null
      /**
       * @description The employee's username that appears in the remote UI.
       * @example cousingreg
       */
      username?: string | null
      /** @example [
       *       "21a54124-397f-494d-985e-3c5b330b8a68"
       *     ] */
      groups?: (string | null)[]
      /**
       * Format: email
       * @description The employee's work email.
       * @example greg@merge.dev
       */
      work_email?: string | null
      /**
       * Format: email
       * @description The employee's personal email.
       * @example greg@gmail.com
       */
      personal_email?: string | null
      /**
       * @description The employee's mobile phone number.
       * @example +1234567890
       */
      mobile_phone_number?: string | null
      /**
       * @description Array of `Employment` IDs for this Employee.
       * @example [
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ]
       */
      employments?: (string | null)[]
      /**
       * Format: uuid
       * @description The employee's home address.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      home_location?: string | null
      /**
       * Format: uuid
       * @description The employee's work address.
       * @example 9efbc633-3387-4306-aa55-e2c635e6bb4f
       */
      work_location?: string | null
      /**
       * Format: uuid
       * @description The employee ID of the employee's manager.
       * @example 0048ea5b-911e-4dff-9364-92070dea62ff
       */
      manager?: string | null
      /**
       * Format: uuid
       * @deprecated
       * @description The employee's team.
       */
      team?: string | null
      /**
       * Format: uuid
       * @description The employee's pay group
       * @example ad1264e2-39be-4787-b749-f1aade9e3405
       */
      pay_group?: string | null
      /**
       * @description The employee's social security number.
       * @example 1234567890
       */
      ssn?: string | null
      /**
       * @description The employee's gender.
       *
       *     * `MALE` - MALE
       *     * `FEMALE` - FEMALE
       *     * `NON-BINARY` - NON-BINARY
       *     * `OTHER` - OTHER
       *     * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
       * @example MALE
       */
      gender?: components['schemas']['GenderEnum'] | null
      /**
       * @description The employee's ethnicity.
       *
       *     * `AMERICAN_INDIAN_OR_ALASKA_NATIVE` - AMERICAN_INDIAN_OR_ALASKA_NATIVE
       *     * `ASIAN_OR_INDIAN_SUBCONTINENT` - ASIAN_OR_INDIAN_SUBCONTINENT
       *     * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
       *     * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
       *     * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
       *     * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
       *     * `WHITE` - WHITE
       *     * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
       * @example WHITE
       */
      ethnicity?: components['schemas']['EthnicityEnum'] | null
      /**
       * @description The employee's filing status as related to marital status.
       *
       *     * `SINGLE` - SINGLE
       *     * `MARRIED_FILING_JOINTLY` - MARRIED_FILING_JOINTLY
       *     * `MARRIED_FILING_SEPARATELY` - MARRIED_FILING_SEPARATELY
       *     * `HEAD_OF_HOUSEHOLD` - HEAD_OF_HOUSEHOLD
       *     * `QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD` - QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD
       * @example SINGLE
       */
      marital_status?: components['schemas']['MaritalStatusEnum'] | null
      /**
       * Format: date-time
       * @description The employee's date of birth.
       * @example 1990-11-10T00:00:00Z
       */
      date_of_birth?: string | null
      /**
       * Format: date-time
       * @deprecated
       * @description The date that the employee was hired, usually the day that an offer letter is signed. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. Note: If you're looking for the employee's start date, refer to the start_date field.
       * @example 2020-10-10T00:00:00Z
       */
      hire_date?: string | null
      /**
       * Format: date-time
       * @description The date that the employee started working. If an employee was rehired, the most recent start date will be returned.
       * @example 2020-10-11T00:00:00Z
       */
      start_date?: string | null
      /**
       * @description The employment status of the employee.
       *
       *     * `ACTIVE` - ACTIVE
       *     * `PENDING` - PENDING
       *     * `INACTIVE` - INACTIVE
       * @example INACTIVE
       */
      employment_status?: components['schemas']['EmploymentStatusEnum'] | null
      /**
       * Format: date-time
       * @description The employee's termination date.
       * @example 2021-10-12T00:00:00Z
       */
      termination_date?: string | null
      /**
       * Format: uri
       * @description The URL of the employee's avatar image.
       * @example http://alturl.com/h2h8m
       */
      avatar?: string | null
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
    EmployeeResponse: {
      model: components['schemas']['Employee']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /** @description # The EmployerBenefit Object
     *     ### Description
     *     The `Employer Benefit` object is used to represent a benefit plan offered by a company.
     *
     *     ### Usage Example
     *     Fetch from the `LIST EmployerBenefits` endpoint and filter by `ID` to show all EmployerBenefits. */
    EmployerBenefit: {
      /**
       * Format: uuid
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fele
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202939
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
       * @description The type of benefit plan.
       *
       *     * `MEDICAL` - MEDICAL
       *     * `HEALTH_SAVINGS` - HEALTH_SAVINGS
       *     * `INSURANCE` - INSURANCE
       *     * `RETIREMENT` - RETIREMENT
       *     * `OTHER` - OTHER
       * @example MEDICAL
       */
      benefit_plan_type?: components['schemas']['BenefitPlanTypeEnum'] | null
      /**
       * @description The employer benefit's name - typically the carrier or network name.
       * @example Kaiser Permanente Medical Plan
       */
      name?: string | null
      /**
       * @description The employer benefit's description.
       * @example HDHP Silver Plan
       */
      description?: string | null
      /**
       * @description The employer benefit's deduction code.
       * @example COL
       */
      deduction_code?: string | null
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
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Employment Object
     *     ### Description
     *     The `Employment` object is used to represent a job position at a company.
     *
     *     If an integration supports historical tracking of employments, it will be reflected in the data. If not, a new `Employment` object will be created whenever there is a change in job title or pay. The `effective_date` field should be used to order `Employment` objects, with the most recent date corresponding to the latest employment record for an employee.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Employments` endpoint and filter by `ID` to show all employees. */
    Employment: {
      /**
       * Format: uuid
       * @example 65d8ffd0-211b-4ba4-b85a-fbe2ce220982
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
       * Format: uuid
       * @description The employee holding this position.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      employee?: string | null
      /**
       * @description The position's title.
       * @example Executive Assistant to Tom Wambsgans
       */
      job_title?: string | null
      /**
       * Format: double
       * @description The position's pay rate.
       * @example 50000.00
       */
      pay_rate?: number | null
      /**
       * @description The time period this pay rate encompasses.
       *
       *     * `HOUR` - HOUR
       *     * `DAY` - DAY
       *     * `WEEK` - WEEK
       *     * `EVERY_TWO_WEEKS` - EVERY_TWO_WEEKS
       *     * `SEMIMONTHLY` - SEMIMONTHLY
       *     * `MONTH` - MONTH
       *     * `QUARTER` - QUARTER
       *     * `EVERY_SIX_MONTHS` - EVERY_SIX_MONTHS
       *     * `YEAR` - YEAR
       * @example YEAR
       */
      pay_period?: components['schemas']['PayPeriodEnum'] | null
      /**
       * @description The position's pay frequency.
       *
       *     * `WEEKLY` - WEEKLY
       *     * `BIWEEKLY` - BIWEEKLY
       *     * `MONTHLY` - MONTHLY
       *     * `QUARTERLY` - QUARTERLY
       *     * `SEMIANNUALLY` - SEMIANNUALLY
       *     * `ANNUALLY` - ANNUALLY
       *     * `THIRTEEN-MONTHLY` - THIRTEEN-MONTHLY
       *     * `PRO_RATA` - PRO_RATA
       *     * `SEMIMONTHLY` - SEMIMONTHLY
       * @example BIWEEKLY
       */
      pay_frequency?: components['schemas']['PayFrequencyEnum'] | null
      /**
       * @description The position's currency code.
       *
       *     * `XUA` - ADB Unit of Account
       *     * `AFN` - Afghan Afghani
       *     * `AFA` - Afghan Afghani (1927–2002)
       *     * `ALL` - Albanian Lek
       *     * `ALK` - Albanian Lek (1946–1965)
       *     * `DZD` - Algerian Dinar
       *     * `ADP` - Andorran Peseta
       *     * `AOA` - Angolan Kwanza
       *     * `AOK` - Angolan Kwanza (1977–1991)
       *     * `AON` - Angolan New Kwanza (1990–2000)
       *     * `AOR` - Angolan Readjusted Kwanza (1995–1999)
       *     * `ARA` - Argentine Austral
       *     * `ARS` - Argentine Peso
       *     * `ARM` - Argentine Peso (1881–1970)
       *     * `ARP` - Argentine Peso (1983–1985)
       *     * `ARL` - Argentine Peso Ley (1970–1983)
       *     * `AMD` - Armenian Dram
       *     * `AWG` - Aruban Florin
       *     * `AUD` - Australian Dollar
       *     * `ATS` - Austrian Schilling
       *     * `AZN` - Azerbaijani Manat
       *     * `AZM` - Azerbaijani Manat (1993–2006)
       *     * `BSD` - Bahamian Dollar
       *     * `BHD` - Bahraini Dinar
       *     * `BDT` - Bangladeshi Taka
       *     * `BBD` - Barbadian Dollar
       *     * `BYN` - Belarusian Ruble
       *     * `BYB` - Belarusian Ruble (1994–1999)
       *     * `BYR` - Belarusian Ruble (2000–2016)
       *     * `BEF` - Belgian Franc
       *     * `BEC` - Belgian Franc (convertible)
       *     * `BEL` - Belgian Franc (financial)
       *     * `BZD` - Belize Dollar
       *     * `BMD` - Bermudan Dollar
       *     * `BTN` - Bhutanese Ngultrum
       *     * `BOB` - Bolivian Boliviano
       *     * `BOL` - Bolivian Boliviano (1863–1963)
       *     * `BOV` - Bolivian Mvdol
       *     * `BOP` - Bolivian Peso
       *     * `BAM` - Bosnia-Herzegovina Convertible Mark
       *     * `BAD` - Bosnia-Herzegovina Dinar (1992–1994)
       *     * `BAN` - Bosnia-Herzegovina New Dinar (1994–1997)
       *     * `BWP` - Botswanan Pula
       *     * `BRC` - Brazilian Cruzado (1986–1989)
       *     * `BRZ` - Brazilian Cruzeiro (1942–1967)
       *     * `BRE` - Brazilian Cruzeiro (1990–1993)
       *     * `BRR` - Brazilian Cruzeiro (1993–1994)
       *     * `BRN` - Brazilian New Cruzado (1989–1990)
       *     * `BRB` - Brazilian New Cruzeiro (1967–1986)
       *     * `BRL` - Brazilian Real
       *     * `GBP` - British Pound
       *     * `BND` - Brunei Dollar
       *     * `BGL` - Bulgarian Hard Lev
       *     * `BGN` - Bulgarian Lev
       *     * `BGO` - Bulgarian Lev (1879–1952)
       *     * `BGM` - Bulgarian Socialist Lev
       *     * `BUK` - Burmese Kyat
       *     * `BIF` - Burundian Franc
       *     * `XPF` - CFP Franc
       *     * `KHR` - Cambodian Riel
       *     * `CAD` - Canadian Dollar
       *     * `CVE` - Cape Verdean Escudo
       *     * `KYD` - Cayman Islands Dollar
       *     * `XAF` - Central African CFA Franc
       *     * `CLE` - Chilean Escudo
       *     * `CLP` - Chilean Peso
       *     * `CLF` - Chilean Unit of Account (UF)
       *     * `CNX` - Chinese People’s Bank Dollar
       *     * `CNY` - Chinese Yuan
       *     * `CNH` - Chinese Yuan (offshore)
       *     * `COP` - Colombian Peso
       *     * `COU` - Colombian Real Value Unit
       *     * `KMF` - Comorian Franc
       *     * `CDF` - Congolese Franc
       *     * `CRC` - Costa Rican Colón
       *     * `HRD` - Croatian Dinar
       *     * `HRK` - Croatian Kuna
       *     * `CUC` - Cuban Convertible Peso
       *     * `CUP` - Cuban Peso
       *     * `CYP` - Cypriot Pound
       *     * `CZK` - Czech Koruna
       *     * `CSK` - Czechoslovak Hard Koruna
       *     * `DKK` - Danish Krone
       *     * `DJF` - Djiboutian Franc
       *     * `DOP` - Dominican Peso
       *     * `NLG` - Dutch Guilder
       *     * `XCD` - East Caribbean Dollar
       *     * `DDM` - East German Mark
       *     * `ECS` - Ecuadorian Sucre
       *     * `ECV` - Ecuadorian Unit of Constant Value
       *     * `EGP` - Egyptian Pound
       *     * `GQE` - Equatorial Guinean Ekwele
       *     * `ERN` - Eritrean Nakfa
       *     * `EEK` - Estonian Kroon
       *     * `ETB` - Ethiopian Birr
       *     * `EUR` - Euro
       *     * `XBA` - European Composite Unit
       *     * `XEU` - European Currency Unit
       *     * `XBB` - European Monetary Unit
       *     * `XBC` - European Unit of Account (XBC)
       *     * `XBD` - European Unit of Account (XBD)
       *     * `FKP` - Falkland Islands Pound
       *     * `FJD` - Fijian Dollar
       *     * `FIM` - Finnish Markka
       *     * `FRF` - French Franc
       *     * `XFO` - French Gold Franc
       *     * `XFU` - French UIC-Franc
       *     * `GMD` - Gambian Dalasi
       *     * `GEK` - Georgian Kupon Larit
       *     * `GEL` - Georgian Lari
       *     * `DEM` - German Mark
       *     * `GHS` - Ghanaian Cedi
       *     * `GHC` - Ghanaian Cedi (1979–2007)
       *     * `GIP` - Gibraltar Pound
       *     * `XAU` - Gold
       *     * `GRD` - Greek Drachma
       *     * `GTQ` - Guatemalan Quetzal
       *     * `GWP` - Guinea-Bissau Peso
       *     * `GNF` - Guinean Franc
       *     * `GNS` - Guinean Syli
       *     * `GYD` - Guyanaese Dollar
       *     * `HTG` - Haitian Gourde
       *     * `HNL` - Honduran Lempira
       *     * `HKD` - Hong Kong Dollar
       *     * `HUF` - Hungarian Forint
       *     * `IMP` - IMP
       *     * `ISK` - Icelandic Króna
       *     * `ISJ` - Icelandic Króna (1918–1981)
       *     * `INR` - Indian Rupee
       *     * `IDR` - Indonesian Rupiah
       *     * `IRR` - Iranian Rial
       *     * `IQD` - Iraqi Dinar
       *     * `IEP` - Irish Pound
       *     * `ILS` - Israeli New Shekel
       *     * `ILP` - Israeli Pound
       *     * `ILR` - Israeli Shekel (1980–1985)
       *     * `ITL` - Italian Lira
       *     * `JMD` - Jamaican Dollar
       *     * `JPY` - Japanese Yen
       *     * `JOD` - Jordanian Dinar
       *     * `KZT` - Kazakhstani Tenge
       *     * `KES` - Kenyan Shilling
       *     * `KWD` - Kuwaiti Dinar
       *     * `KGS` - Kyrgystani Som
       *     * `LAK` - Laotian Kip
       *     * `LVL` - Latvian Lats
       *     * `LVR` - Latvian Ruble
       *     * `LBP` - Lebanese Pound
       *     * `LSL` - Lesotho Loti
       *     * `LRD` - Liberian Dollar
       *     * `LYD` - Libyan Dinar
       *     * `LTL` - Lithuanian Litas
       *     * `LTT` - Lithuanian Talonas
       *     * `LUL` - Luxembourg Financial Franc
       *     * `LUC` - Luxembourgian Convertible Franc
       *     * `LUF` - Luxembourgian Franc
       *     * `MOP` - Macanese Pataca
       *     * `MKD` - Macedonian Denar
       *     * `MKN` - Macedonian Denar (1992–1993)
       *     * `MGA` - Malagasy Ariary
       *     * `MGF` - Malagasy Franc
       *     * `MWK` - Malawian Kwacha
       *     * `MYR` - Malaysian Ringgit
       *     * `MVR` - Maldivian Rufiyaa
       *     * `MVP` - Maldivian Rupee (1947–1981)
       *     * `MLF` - Malian Franc
       *     * `MTL` - Maltese Lira
       *     * `MTP` - Maltese Pound
       *     * `MRU` - Mauritanian Ouguiya
       *     * `MRO` - Mauritanian Ouguiya (1973–2017)
       *     * `MUR` - Mauritian Rupee
       *     * `MXV` - Mexican Investment Unit
       *     * `MXN` - Mexican Peso
       *     * `MXP` - Mexican Silver Peso (1861–1992)
       *     * `MDC` - Moldovan Cupon
       *     * `MDL` - Moldovan Leu
       *     * `MCF` - Monegasque Franc
       *     * `MNT` - Mongolian Tugrik
       *     * `MAD` - Moroccan Dirham
       *     * `MAF` - Moroccan Franc
       *     * `MZE` - Mozambican Escudo
       *     * `MZN` - Mozambican Metical
       *     * `MZM` - Mozambican Metical (1980–2006)
       *     * `MMK` - Myanmar Kyat
       *     * `NAD` - Namibian Dollar
       *     * `NPR` - Nepalese Rupee
       *     * `ANG` - Netherlands Antillean Guilder
       *     * `TWD` - New Taiwan Dollar
       *     * `NZD` - New Zealand Dollar
       *     * `NIO` - Nicaraguan Córdoba
       *     * `NIC` - Nicaraguan Córdoba (1988–1991)
       *     * `NGN` - Nigerian Naira
       *     * `KPW` - North Korean Won
       *     * `NOK` - Norwegian Krone
       *     * `OMR` - Omani Rial
       *     * `PKR` - Pakistani Rupee
       *     * `XPD` - Palladium
       *     * `PAB` - Panamanian Balboa
       *     * `PGK` - Papua New Guinean Kina
       *     * `PYG` - Paraguayan Guarani
       *     * `PEI` - Peruvian Inti
       *     * `PEN` - Peruvian Sol
       *     * `PES` - Peruvian Sol (1863–1965)
       *     * `PHP` - Philippine Peso
       *     * `XPT` - Platinum
       *     * `PLN` - Polish Zloty
       *     * `PLZ` - Polish Zloty (1950–1995)
       *     * `PTE` - Portuguese Escudo
       *     * `GWE` - Portuguese Guinea Escudo
       *     * `QAR` - Qatari Rial
       *     * `XRE` - RINET Funds
       *     * `RHD` - Rhodesian Dollar
       *     * `RON` - Romanian Leu
       *     * `ROL` - Romanian Leu (1952–2006)
       *     * `RUB` - Russian Ruble
       *     * `RUR` - Russian Ruble (1991–1998)
       *     * `RWF` - Rwandan Franc
       *     * `SVC` - Salvadoran Colón
       *     * `WST` - Samoan Tala
       *     * `SAR` - Saudi Riyal
       *     * `RSD` - Serbian Dinar
       *     * `CSD` - Serbian Dinar (2002–2006)
       *     * `SCR` - Seychellois Rupee
       *     * `SLL` - Sierra Leonean Leone
       *     * `XAG` - Silver
       *     * `SGD` - Singapore Dollar
       *     * `SKK` - Slovak Koruna
       *     * `SIT` - Slovenian Tolar
       *     * `SBD` - Solomon Islands Dollar
       *     * `SOS` - Somali Shilling
       *     * `ZAR` - South African Rand
       *     * `ZAL` - South African Rand (financial)
       *     * `KRH` - South Korean Hwan (1953–1962)
       *     * `KRW` - South Korean Won
       *     * `KRO` - South Korean Won (1945–1953)
       *     * `SSP` - South Sudanese Pound
       *     * `SUR` - Soviet Rouble
       *     * `ESP` - Spanish Peseta
       *     * `ESA` - Spanish Peseta (A account)
       *     * `ESB` - Spanish Peseta (convertible account)
       *     * `XDR` - Special Drawing Rights
       *     * `LKR` - Sri Lankan Rupee
       *     * `SHP` - St. Helena Pound
       *     * `XSU` - Sucre
       *     * `SDD` - Sudanese Dinar (1992–2007)
       *     * `SDG` - Sudanese Pound
       *     * `SDP` - Sudanese Pound (1957–1998)
       *     * `SRD` - Surinamese Dollar
       *     * `SRG` - Surinamese Guilder
       *     * `SZL` - Swazi Lilangeni
       *     * `SEK` - Swedish Krona
       *     * `CHF` - Swiss Franc
       *     * `SYP` - Syrian Pound
       *     * `STN` - São Tomé & Príncipe Dobra
       *     * `STD` - São Tomé & Príncipe Dobra (1977–2017)
       *     * `TVD` - TVD
       *     * `TJR` - Tajikistani Ruble
       *     * `TJS` - Tajikistani Somoni
       *     * `TZS` - Tanzanian Shilling
       *     * `XTS` - Testing Currency Code
       *     * `THB` - Thai Baht
       *     * `XXX` - The codes assigned for transactions where no currency is involved
       *     * `TPE` - Timorese Escudo
       *     * `TOP` - Tongan Paʻanga
       *     * `TTD` - Trinidad & Tobago Dollar
       *     * `TND` - Tunisian Dinar
       *     * `TRY` - Turkish Lira
       *     * `TRL` - Turkish Lira (1922–2005)
       *     * `TMT` - Turkmenistani Manat
       *     * `TMM` - Turkmenistani Manat (1993–2009)
       *     * `USD` - US Dollar
       *     * `USN` - US Dollar (Next day)
       *     * `USS` - US Dollar (Same day)
       *     * `UGX` - Ugandan Shilling
       *     * `UGS` - Ugandan Shilling (1966–1987)
       *     * `UAH` - Ukrainian Hryvnia
       *     * `UAK` - Ukrainian Karbovanets
       *     * `AED` - United Arab Emirates Dirham
       *     * `UYW` - Uruguayan Nominal Wage Index Unit
       *     * `UYU` - Uruguayan Peso
       *     * `UYP` - Uruguayan Peso (1975–1993)
       *     * `UYI` - Uruguayan Peso (Indexed Units)
       *     * `UZS` - Uzbekistani Som
       *     * `VUV` - Vanuatu Vatu
       *     * `VES` - Venezuelan Bolívar
       *     * `VEB` - Venezuelan Bolívar (1871–2008)
       *     * `VEF` - Venezuelan Bolívar (2008–2018)
       *     * `VND` - Vietnamese Dong
       *     * `VNN` - Vietnamese Dong (1978–1985)
       *     * `CHE` - WIR Euro
       *     * `CHW` - WIR Franc
       *     * `XOF` - West African CFA Franc
       *     * `YDD` - Yemeni Dinar
       *     * `YER` - Yemeni Rial
       *     * `YUN` - Yugoslavian Convertible Dinar (1990–1992)
       *     * `YUD` - Yugoslavian Hard Dinar (1966–1990)
       *     * `YUM` - Yugoslavian New Dinar (1994–2002)
       *     * `YUR` - Yugoslavian Reformed Dinar (1992–1993)
       *     * `ZWN` - ZWN
       *     * `ZRN` - Zairean New Zaire (1993–1998)
       *     * `ZRZ` - Zairean Zaire (1971–1993)
       *     * `ZMW` - Zambian Kwacha
       *     * `ZMK` - Zambian Kwacha (1968–2012)
       *     * `ZWD` - Zimbabwean Dollar (1980–2008)
       *     * `ZWR` - Zimbabwean Dollar (2008)
       *     * `ZWL` - Zimbabwean Dollar (2009)
       * @example USD
       */
      pay_currency?: components['schemas']['PayCurrencyEnum'] | null
      /**
       * Format: uuid
       * @description The employment's pay group
       * @example d4e4837f-9900-484c-ac40-528365bb08ef
       */
      pay_group?: string | null
      /**
       * @description The position's FLSA status.
       *
       *     * `EXEMPT` - EXEMPT
       *     * `SALARIED_NONEXEMPT` - SALARIED_NONEXEMPT
       *     * `NONEXEMPT` - NONEXEMPT
       *     * `OWNER` - OWNER
       * @example EXEMPT
       */
      flsa_status?: components['schemas']['FlsaStatusEnum'] | null
      /**
       * Format: date-time
       * @description The position's effective date.
       * @example 2023-10-06T18:42:34Z
       */
      effective_date?: string | null
      /**
       * @description The position's type of employment.
       *
       *     * `FULL_TIME` - FULL_TIME
       *     * `PART_TIME` - PART_TIME
       *     * `INTERN` - INTERN
       *     * `CONTRACTOR` - CONTRACTOR
       *     * `FREELANCE` - FREELANCE
       * @example FULL TIME
       */
      employment_type?: components['schemas']['EmploymentTypeEnum'] | null
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
       *         "path": "/jobs",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `ACTIVE` - ACTIVE
     *     * `PENDING` - PENDING
     *     * `INACTIVE` - INACTIVE
     * @enum {string}
     */
    EmploymentStatusEnum: 'ACTIVE' | 'PENDING' | 'INACTIVE'
    /**
     * @description * `FULL_TIME` - FULL_TIME
     *     * `PART_TIME` - PART_TIME
     *     * `INTERN` - INTERN
     *     * `CONTRACTOR` - CONTRACTOR
     *     * `FREELANCE` - FREELANCE
     * @enum {string}
     */
    EmploymentTypeEnum:
      | 'FULL_TIME'
      | 'PART_TIME'
      | 'INTERN'
      | 'CONTRACTOR'
      | 'FREELANCE'
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
     * @description * `AMERICAN_INDIAN_OR_ALASKA_NATIVE` - AMERICAN_INDIAN_OR_ALASKA_NATIVE
     *     * `ASIAN_OR_INDIAN_SUBCONTINENT` - ASIAN_OR_INDIAN_SUBCONTINENT
     *     * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
     *     * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
     *     * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
     *     * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
     *     * `WHITE` - WHITE
     *     * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     * @enum {string}
     */
    EthnicityEnum:
      | 'AMERICAN_INDIAN_OR_ALASKA_NATIVE'
      | 'ASIAN_OR_INDIAN_SUBCONTINENT'
      | 'BLACK_OR_AFRICAN_AMERICAN'
      | 'HISPANIC_OR_LATINO'
      | 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER'
      | 'TWO_OR_MORE_RACES'
      | 'WHITE'
      | 'PREFER_NOT_TO_DISCLOSE'
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
      Benefit?: components['schemas']['ExternalTargetFieldAPI'][]
      EmployerBenefit?: components['schemas']['ExternalTargetFieldAPI'][]
      Company?: components['schemas']['ExternalTargetFieldAPI'][]
      EmployeePayrollRun?: components['schemas']['ExternalTargetFieldAPI'][]
      Employee?: components['schemas']['ExternalTargetFieldAPI'][]
      Employment?: components['schemas']['ExternalTargetFieldAPI'][]
      Location?: components['schemas']['ExternalTargetFieldAPI'][]
      PayrollRun?: components['schemas']['ExternalTargetFieldAPI'][]
      Team?: components['schemas']['ExternalTargetFieldAPI'][]
      TimeOff?: components['schemas']['ExternalTargetFieldAPI'][]
      TimeOffBalance?: components['schemas']['ExternalTargetFieldAPI'][]
      BankInfo?: components['schemas']['ExternalTargetFieldAPI'][]
      PayGroup?: components['schemas']['ExternalTargetFieldAPI'][]
      Group?: components['schemas']['ExternalTargetFieldAPI'][]
      Dependent?: components['schemas']['ExternalTargetFieldAPI'][]
      TimesheetEntry?: components['schemas']['ExternalTargetFieldAPI'][]
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
      Benefit?: components['schemas']['FieldMappingApiInstance'][]
      EmployerBenefit?: components['schemas']['FieldMappingApiInstance'][]
      Company?: components['schemas']['FieldMappingApiInstance'][]
      EmployeePayrollRun?: components['schemas']['FieldMappingApiInstance'][]
      Employee?: components['schemas']['FieldMappingApiInstance'][]
      Employment?: components['schemas']['FieldMappingApiInstance'][]
      Location?: components['schemas']['FieldMappingApiInstance'][]
      PayrollRun?: components['schemas']['FieldMappingApiInstance'][]
      Team?: components['schemas']['FieldMappingApiInstance'][]
      TimeOff?: components['schemas']['FieldMappingApiInstance'][]
      TimeOffBalance?: components['schemas']['FieldMappingApiInstance'][]
      BankInfo?: components['schemas']['FieldMappingApiInstance'][]
      PayGroup?: components['schemas']['FieldMappingApiInstance'][]
      Group?: components['schemas']['FieldMappingApiInstance'][]
      Dependent?: components['schemas']['FieldMappingApiInstance'][]
      TimesheetEntry?: components['schemas']['FieldMappingApiInstance'][]
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
    /**
     * @description * `EXEMPT` - EXEMPT
     *     * `SALARIED_NONEXEMPT` - SALARIED_NONEXEMPT
     *     * `NONEXEMPT` - NONEXEMPT
     *     * `OWNER` - OWNER
     * @enum {string}
     */
    FlsaStatusEnum: 'EXEMPT' | 'SALARIED_NONEXEMPT' | 'NONEXEMPT' | 'OWNER'
    /**
     * @description * `MALE` - MALE
     *     * `FEMALE` - FEMALE
     *     * `NON-BINARY` - NON-BINARY
     *     * `OTHER` - OTHER
     *     * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     * @enum {string}
     */
    GenderEnum:
      | 'MALE'
      | 'FEMALE'
      | 'NON-BINARY'
      | 'OTHER'
      | 'PREFER_NOT_TO_DISCLOSE'
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
     *     The `Group` object is used to represent any subset of employees across, for example, `DEPARTMENT` or `TEAM`. Employees can be in multiple Groups.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Employee` endpoint and expand groups to view an employee's groups. */
    Group: {
      /**
       * Format: uuid
       * @example 134e0111-0f67-44f6-98f0-597000290bb3
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 800293
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
       * @description The parent group for this group.
       * @example 2ef51b11-2c4e-4b02-8d1d-50592d9e96ef
       */
      parent_group?: string | null
      /**
       * @description The group name.
       * @example COST_CENTER_US
       */
      name?: string | null
      /**
       * @description The Group type returned directly from the third-party.
       *
       *     * `TEAM` - TEAM
       *     * `DEPARTMENT` - DEPARTMENT
       *     * `COST_CENTER` - COST_CENTER
       *     * `BUSINESS_UNIT` - BUSINESS_UNIT
       *     * `GROUP` - GROUP
       * @example COST_CENTER
       */
      type?: components['schemas']['GroupTypeEnum'] | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
      /**
       * @description Indicates whether the Group refers to a team in the third party platform. Note that this is an opinionated view based on how Merge observes most organizations representing teams in each third party platform. If your customer uses a platform different from most, there is a chance this will not be correct.
       * @example true
       */
      is_commonly_used_as_team?: boolean | null
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
       *         "path": "/group",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `TEAM` - TEAM
     *     * `DEPARTMENT` - DEPARTMENT
     *     * `COST_CENTER` - COST_CENTER
     *     * `BUSINESS_UNIT` - BUSINESS_UNIT
     *     * `GROUP` - GROUP
     * @enum {string}
     */
    GroupTypeEnum:
      | 'TEAM'
      | 'DEPARTMENT'
      | 'COST_CENTER'
      | 'BUSINESS_UNIT'
      | 'GROUP'
    IgnoreCommonModelRequest: {
      /** @example GENERAL_CUSTOMER_REQUEST */
      reason: components['schemas']['ReasonEnum']
      /** @example deletion request by user id 51903790-7dfe-4053-8d63-5a10cc4ffd39 */
      message?: string
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
    /** @description # The Location Object
     *     ### Description
     *     The `Location` object is used to represent an address that can be associated with an employee.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Locations` endpoint and filter by `ID` to show all office locations. */
    Location: {
      /**
       * Format: uuid
       * @example f5e6a151-f44e-449a-afb1-8fd781905958
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 93018402
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
       * @description The location's name.
       * @example NYC Office
       */
      name?: string | null
      /**
       * @description The location's phone number.
       * @example +1111111111
       */
      phone_number?: string | null
      /**
       * @description Line 1 of the location's street address.
       * @example 2920 Broadway
       */
      street_1?: string | null
      /**
       * @description Line 2 of the location's street address.
       * @example 2nd Floor
       */
      street_2?: string | null
      /**
       * @description The location's city.
       * @example New York
       */
      city?: string | null
      /**
       * @description The location's state. Represents a region if outside of the US.
       * @example NY
       */
      state?: string | null
      /**
       * @description The location's zip code or postal code.
       * @example 10027
       */
      zip_code?: string | null
      /**
       * @description The location's country.
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
      /**
       * @description The location's type. Can be either WORK or HOME
       *
       *     * `HOME` - HOME
       *     * `WORK` - WORK
       * @example WORK
       */
      location_type?: components['schemas']['LocationTypeEnum'] | null
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
       *         "path": "/locations",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `HOME` - HOME
     *     * `WORK` - WORK
     * @enum {string}
     */
    LocationTypeEnum: 'HOME' | 'WORK'
    /**
     * @description * `SINGLE` - SINGLE
     *     * `MARRIED_FILING_JOINTLY` - MARRIED_FILING_JOINTLY
     *     * `MARRIED_FILING_SEPARATELY` - MARRIED_FILING_SEPARATELY
     *     * `HEAD_OF_HOUSEHOLD` - HEAD_OF_HOUSEHOLD
     *     * `QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD` - QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD
     * @enum {string}
     */
    MaritalStatusEnum:
      | 'SINGLE'
      | 'MARRIED_FILING_JOINTLY'
      | 'MARRIED_FILING_SEPARATELY'
      | 'HEAD_OF_HOUSEHOLD'
      | 'QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD'
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
    PaginatedBankInfoList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['BankInfo'][]
    }
    PaginatedBenefitList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Benefit'][]
    }
    PaginatedCompanyList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Company'][]
    }
    PaginatedDependentList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Dependent'][]
    }
    PaginatedEmployeeList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Employee'][]
    }
    PaginatedEmployeePayrollRunList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['EmployeePayrollRun'][]
    }
    PaginatedEmployerBenefitList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['EmployerBenefit'][]
    }
    PaginatedEmploymentList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Employment'][]
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
    PaginatedLocationList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Location'][]
    }
    PaginatedPayGroupList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['PayGroup'][]
    }
    PaginatedPayrollRunList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['PayrollRun'][]
    }
    PaginatedSyncStatusList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['SyncStatus'][]
    }
    PaginatedTeamList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Team'][]
    }
    PaginatedTimeOffBalanceList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['TimeOffBalance'][]
    }
    PaginatedTimeOffList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['TimeOff'][]
    }
    PaginatedTimesheetEntryList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['TimesheetEntry'][]
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
    /**
     * @description * `XUA` - ADB Unit of Account
     *     * `AFN` - Afghan Afghani
     *     * `AFA` - Afghan Afghani (1927–2002)
     *     * `ALL` - Albanian Lek
     *     * `ALK` - Albanian Lek (1946–1965)
     *     * `DZD` - Algerian Dinar
     *     * `ADP` - Andorran Peseta
     *     * `AOA` - Angolan Kwanza
     *     * `AOK` - Angolan Kwanza (1977–1991)
     *     * `AON` - Angolan New Kwanza (1990–2000)
     *     * `AOR` - Angolan Readjusted Kwanza (1995–1999)
     *     * `ARA` - Argentine Austral
     *     * `ARS` - Argentine Peso
     *     * `ARM` - Argentine Peso (1881–1970)
     *     * `ARP` - Argentine Peso (1983–1985)
     *     * `ARL` - Argentine Peso Ley (1970–1983)
     *     * `AMD` - Armenian Dram
     *     * `AWG` - Aruban Florin
     *     * `AUD` - Australian Dollar
     *     * `ATS` - Austrian Schilling
     *     * `AZN` - Azerbaijani Manat
     *     * `AZM` - Azerbaijani Manat (1993–2006)
     *     * `BSD` - Bahamian Dollar
     *     * `BHD` - Bahraini Dinar
     *     * `BDT` - Bangladeshi Taka
     *     * `BBD` - Barbadian Dollar
     *     * `BYN` - Belarusian Ruble
     *     * `BYB` - Belarusian Ruble (1994–1999)
     *     * `BYR` - Belarusian Ruble (2000–2016)
     *     * `BEF` - Belgian Franc
     *     * `BEC` - Belgian Franc (convertible)
     *     * `BEL` - Belgian Franc (financial)
     *     * `BZD` - Belize Dollar
     *     * `BMD` - Bermudan Dollar
     *     * `BTN` - Bhutanese Ngultrum
     *     * `BOB` - Bolivian Boliviano
     *     * `BOL` - Bolivian Boliviano (1863–1963)
     *     * `BOV` - Bolivian Mvdol
     *     * `BOP` - Bolivian Peso
     *     * `BAM` - Bosnia-Herzegovina Convertible Mark
     *     * `BAD` - Bosnia-Herzegovina Dinar (1992–1994)
     *     * `BAN` - Bosnia-Herzegovina New Dinar (1994–1997)
     *     * `BWP` - Botswanan Pula
     *     * `BRC` - Brazilian Cruzado (1986–1989)
     *     * `BRZ` - Brazilian Cruzeiro (1942–1967)
     *     * `BRE` - Brazilian Cruzeiro (1990–1993)
     *     * `BRR` - Brazilian Cruzeiro (1993–1994)
     *     * `BRN` - Brazilian New Cruzado (1989–1990)
     *     * `BRB` - Brazilian New Cruzeiro (1967–1986)
     *     * `BRL` - Brazilian Real
     *     * `GBP` - British Pound
     *     * `BND` - Brunei Dollar
     *     * `BGL` - Bulgarian Hard Lev
     *     * `BGN` - Bulgarian Lev
     *     * `BGO` - Bulgarian Lev (1879–1952)
     *     * `BGM` - Bulgarian Socialist Lev
     *     * `BUK` - Burmese Kyat
     *     * `BIF` - Burundian Franc
     *     * `XPF` - CFP Franc
     *     * `KHR` - Cambodian Riel
     *     * `CAD` - Canadian Dollar
     *     * `CVE` - Cape Verdean Escudo
     *     * `KYD` - Cayman Islands Dollar
     *     * `XAF` - Central African CFA Franc
     *     * `CLE` - Chilean Escudo
     *     * `CLP` - Chilean Peso
     *     * `CLF` - Chilean Unit of Account (UF)
     *     * `CNX` - Chinese People’s Bank Dollar
     *     * `CNY` - Chinese Yuan
     *     * `CNH` - Chinese Yuan (offshore)
     *     * `COP` - Colombian Peso
     *     * `COU` - Colombian Real Value Unit
     *     * `KMF` - Comorian Franc
     *     * `CDF` - Congolese Franc
     *     * `CRC` - Costa Rican Colón
     *     * `HRD` - Croatian Dinar
     *     * `HRK` - Croatian Kuna
     *     * `CUC` - Cuban Convertible Peso
     *     * `CUP` - Cuban Peso
     *     * `CYP` - Cypriot Pound
     *     * `CZK` - Czech Koruna
     *     * `CSK` - Czechoslovak Hard Koruna
     *     * `DKK` - Danish Krone
     *     * `DJF` - Djiboutian Franc
     *     * `DOP` - Dominican Peso
     *     * `NLG` - Dutch Guilder
     *     * `XCD` - East Caribbean Dollar
     *     * `DDM` - East German Mark
     *     * `ECS` - Ecuadorian Sucre
     *     * `ECV` - Ecuadorian Unit of Constant Value
     *     * `EGP` - Egyptian Pound
     *     * `GQE` - Equatorial Guinean Ekwele
     *     * `ERN` - Eritrean Nakfa
     *     * `EEK` - Estonian Kroon
     *     * `ETB` - Ethiopian Birr
     *     * `EUR` - Euro
     *     * `XBA` - European Composite Unit
     *     * `XEU` - European Currency Unit
     *     * `XBB` - European Monetary Unit
     *     * `XBC` - European Unit of Account (XBC)
     *     * `XBD` - European Unit of Account (XBD)
     *     * `FKP` - Falkland Islands Pound
     *     * `FJD` - Fijian Dollar
     *     * `FIM` - Finnish Markka
     *     * `FRF` - French Franc
     *     * `XFO` - French Gold Franc
     *     * `XFU` - French UIC-Franc
     *     * `GMD` - Gambian Dalasi
     *     * `GEK` - Georgian Kupon Larit
     *     * `GEL` - Georgian Lari
     *     * `DEM` - German Mark
     *     * `GHS` - Ghanaian Cedi
     *     * `GHC` - Ghanaian Cedi (1979–2007)
     *     * `GIP` - Gibraltar Pound
     *     * `XAU` - Gold
     *     * `GRD` - Greek Drachma
     *     * `GTQ` - Guatemalan Quetzal
     *     * `GWP` - Guinea-Bissau Peso
     *     * `GNF` - Guinean Franc
     *     * `GNS` - Guinean Syli
     *     * `GYD` - Guyanaese Dollar
     *     * `HTG` - Haitian Gourde
     *     * `HNL` - Honduran Lempira
     *     * `HKD` - Hong Kong Dollar
     *     * `HUF` - Hungarian Forint
     *     * `IMP` - IMP
     *     * `ISK` - Icelandic Króna
     *     * `ISJ` - Icelandic Króna (1918–1981)
     *     * `INR` - Indian Rupee
     *     * `IDR` - Indonesian Rupiah
     *     * `IRR` - Iranian Rial
     *     * `IQD` - Iraqi Dinar
     *     * `IEP` - Irish Pound
     *     * `ILS` - Israeli New Shekel
     *     * `ILP` - Israeli Pound
     *     * `ILR` - Israeli Shekel (1980–1985)
     *     * `ITL` - Italian Lira
     *     * `JMD` - Jamaican Dollar
     *     * `JPY` - Japanese Yen
     *     * `JOD` - Jordanian Dinar
     *     * `KZT` - Kazakhstani Tenge
     *     * `KES` - Kenyan Shilling
     *     * `KWD` - Kuwaiti Dinar
     *     * `KGS` - Kyrgystani Som
     *     * `LAK` - Laotian Kip
     *     * `LVL` - Latvian Lats
     *     * `LVR` - Latvian Ruble
     *     * `LBP` - Lebanese Pound
     *     * `LSL` - Lesotho Loti
     *     * `LRD` - Liberian Dollar
     *     * `LYD` - Libyan Dinar
     *     * `LTL` - Lithuanian Litas
     *     * `LTT` - Lithuanian Talonas
     *     * `LUL` - Luxembourg Financial Franc
     *     * `LUC` - Luxembourgian Convertible Franc
     *     * `LUF` - Luxembourgian Franc
     *     * `MOP` - Macanese Pataca
     *     * `MKD` - Macedonian Denar
     *     * `MKN` - Macedonian Denar (1992–1993)
     *     * `MGA` - Malagasy Ariary
     *     * `MGF` - Malagasy Franc
     *     * `MWK` - Malawian Kwacha
     *     * `MYR` - Malaysian Ringgit
     *     * `MVR` - Maldivian Rufiyaa
     *     * `MVP` - Maldivian Rupee (1947–1981)
     *     * `MLF` - Malian Franc
     *     * `MTL` - Maltese Lira
     *     * `MTP` - Maltese Pound
     *     * `MRU` - Mauritanian Ouguiya
     *     * `MRO` - Mauritanian Ouguiya (1973–2017)
     *     * `MUR` - Mauritian Rupee
     *     * `MXV` - Mexican Investment Unit
     *     * `MXN` - Mexican Peso
     *     * `MXP` - Mexican Silver Peso (1861–1992)
     *     * `MDC` - Moldovan Cupon
     *     * `MDL` - Moldovan Leu
     *     * `MCF` - Monegasque Franc
     *     * `MNT` - Mongolian Tugrik
     *     * `MAD` - Moroccan Dirham
     *     * `MAF` - Moroccan Franc
     *     * `MZE` - Mozambican Escudo
     *     * `MZN` - Mozambican Metical
     *     * `MZM` - Mozambican Metical (1980–2006)
     *     * `MMK` - Myanmar Kyat
     *     * `NAD` - Namibian Dollar
     *     * `NPR` - Nepalese Rupee
     *     * `ANG` - Netherlands Antillean Guilder
     *     * `TWD` - New Taiwan Dollar
     *     * `NZD` - New Zealand Dollar
     *     * `NIO` - Nicaraguan Córdoba
     *     * `NIC` - Nicaraguan Córdoba (1988–1991)
     *     * `NGN` - Nigerian Naira
     *     * `KPW` - North Korean Won
     *     * `NOK` - Norwegian Krone
     *     * `OMR` - Omani Rial
     *     * `PKR` - Pakistani Rupee
     *     * `XPD` - Palladium
     *     * `PAB` - Panamanian Balboa
     *     * `PGK` - Papua New Guinean Kina
     *     * `PYG` - Paraguayan Guarani
     *     * `PEI` - Peruvian Inti
     *     * `PEN` - Peruvian Sol
     *     * `PES` - Peruvian Sol (1863–1965)
     *     * `PHP` - Philippine Peso
     *     * `XPT` - Platinum
     *     * `PLN` - Polish Zloty
     *     * `PLZ` - Polish Zloty (1950–1995)
     *     * `PTE` - Portuguese Escudo
     *     * `GWE` - Portuguese Guinea Escudo
     *     * `QAR` - Qatari Rial
     *     * `XRE` - RINET Funds
     *     * `RHD` - Rhodesian Dollar
     *     * `RON` - Romanian Leu
     *     * `ROL` - Romanian Leu (1952–2006)
     *     * `RUB` - Russian Ruble
     *     * `RUR` - Russian Ruble (1991–1998)
     *     * `RWF` - Rwandan Franc
     *     * `SVC` - Salvadoran Colón
     *     * `WST` - Samoan Tala
     *     * `SAR` - Saudi Riyal
     *     * `RSD` - Serbian Dinar
     *     * `CSD` - Serbian Dinar (2002–2006)
     *     * `SCR` - Seychellois Rupee
     *     * `SLL` - Sierra Leonean Leone
     *     * `XAG` - Silver
     *     * `SGD` - Singapore Dollar
     *     * `SKK` - Slovak Koruna
     *     * `SIT` - Slovenian Tolar
     *     * `SBD` - Solomon Islands Dollar
     *     * `SOS` - Somali Shilling
     *     * `ZAR` - South African Rand
     *     * `ZAL` - South African Rand (financial)
     *     * `KRH` - South Korean Hwan (1953–1962)
     *     * `KRW` - South Korean Won
     *     * `KRO` - South Korean Won (1945–1953)
     *     * `SSP` - South Sudanese Pound
     *     * `SUR` - Soviet Rouble
     *     * `ESP` - Spanish Peseta
     *     * `ESA` - Spanish Peseta (A account)
     *     * `ESB` - Spanish Peseta (convertible account)
     *     * `XDR` - Special Drawing Rights
     *     * `LKR` - Sri Lankan Rupee
     *     * `SHP` - St. Helena Pound
     *     * `XSU` - Sucre
     *     * `SDD` - Sudanese Dinar (1992–2007)
     *     * `SDG` - Sudanese Pound
     *     * `SDP` - Sudanese Pound (1957–1998)
     *     * `SRD` - Surinamese Dollar
     *     * `SRG` - Surinamese Guilder
     *     * `SZL` - Swazi Lilangeni
     *     * `SEK` - Swedish Krona
     *     * `CHF` - Swiss Franc
     *     * `SYP` - Syrian Pound
     *     * `STN` - São Tomé & Príncipe Dobra
     *     * `STD` - São Tomé & Príncipe Dobra (1977–2017)
     *     * `TVD` - TVD
     *     * `TJR` - Tajikistani Ruble
     *     * `TJS` - Tajikistani Somoni
     *     * `TZS` - Tanzanian Shilling
     *     * `XTS` - Testing Currency Code
     *     * `THB` - Thai Baht
     *     * `XXX` - The codes assigned for transactions where no currency is involved
     *     * `TPE` - Timorese Escudo
     *     * `TOP` - Tongan Paʻanga
     *     * `TTD` - Trinidad & Tobago Dollar
     *     * `TND` - Tunisian Dinar
     *     * `TRY` - Turkish Lira
     *     * `TRL` - Turkish Lira (1922–2005)
     *     * `TMT` - Turkmenistani Manat
     *     * `TMM` - Turkmenistani Manat (1993–2009)
     *     * `USD` - US Dollar
     *     * `USN` - US Dollar (Next day)
     *     * `USS` - US Dollar (Same day)
     *     * `UGX` - Ugandan Shilling
     *     * `UGS` - Ugandan Shilling (1966–1987)
     *     * `UAH` - Ukrainian Hryvnia
     *     * `UAK` - Ukrainian Karbovanets
     *     * `AED` - United Arab Emirates Dirham
     *     * `UYW` - Uruguayan Nominal Wage Index Unit
     *     * `UYU` - Uruguayan Peso
     *     * `UYP` - Uruguayan Peso (1975–1993)
     *     * `UYI` - Uruguayan Peso (Indexed Units)
     *     * `UZS` - Uzbekistani Som
     *     * `VUV` - Vanuatu Vatu
     *     * `VES` - Venezuelan Bolívar
     *     * `VEB` - Venezuelan Bolívar (1871–2008)
     *     * `VEF` - Venezuelan Bolívar (2008–2018)
     *     * `VND` - Vietnamese Dong
     *     * `VNN` - Vietnamese Dong (1978–1985)
     *     * `CHE` - WIR Euro
     *     * `CHW` - WIR Franc
     *     * `XOF` - West African CFA Franc
     *     * `YDD` - Yemeni Dinar
     *     * `YER` - Yemeni Rial
     *     * `YUN` - Yugoslavian Convertible Dinar (1990–1992)
     *     * `YUD` - Yugoslavian Hard Dinar (1966–1990)
     *     * `YUM` - Yugoslavian New Dinar (1994–2002)
     *     * `YUR` - Yugoslavian Reformed Dinar (1992–1993)
     *     * `ZWN` - ZWN
     *     * `ZRN` - Zairean New Zaire (1993–1998)
     *     * `ZRZ` - Zairean Zaire (1971–1993)
     *     * `ZMW` - Zambian Kwacha
     *     * `ZMK` - Zambian Kwacha (1968–2012)
     *     * `ZWD` - Zimbabwean Dollar (1980–2008)
     *     * `ZWR` - Zimbabwean Dollar (2008)
     *     * `ZWL` - Zimbabwean Dollar (2009)
     * @enum {string}
     */
    PayCurrencyEnum:
      | 'XUA'
      | 'AFN'
      | 'AFA'
      | 'ALL'
      | 'ALK'
      | 'DZD'
      | 'ADP'
      | 'AOA'
      | 'AOK'
      | 'AON'
      | 'AOR'
      | 'ARA'
      | 'ARS'
      | 'ARM'
      | 'ARP'
      | 'ARL'
      | 'AMD'
      | 'AWG'
      | 'AUD'
      | 'ATS'
      | 'AZN'
      | 'AZM'
      | 'BSD'
      | 'BHD'
      | 'BDT'
      | 'BBD'
      | 'BYN'
      | 'BYB'
      | 'BYR'
      | 'BEF'
      | 'BEC'
      | 'BEL'
      | 'BZD'
      | 'BMD'
      | 'BTN'
      | 'BOB'
      | 'BOL'
      | 'BOV'
      | 'BOP'
      | 'BAM'
      | 'BAD'
      | 'BAN'
      | 'BWP'
      | 'BRC'
      | 'BRZ'
      | 'BRE'
      | 'BRR'
      | 'BRN'
      | 'BRB'
      | 'BRL'
      | 'GBP'
      | 'BND'
      | 'BGL'
      | 'BGN'
      | 'BGO'
      | 'BGM'
      | 'BUK'
      | 'BIF'
      | 'XPF'
      | 'KHR'
      | 'CAD'
      | 'CVE'
      | 'KYD'
      | 'XAF'
      | 'CLE'
      | 'CLP'
      | 'CLF'
      | 'CNX'
      | 'CNY'
      | 'CNH'
      | 'COP'
      | 'COU'
      | 'KMF'
      | 'CDF'
      | 'CRC'
      | 'HRD'
      | 'HRK'
      | 'CUC'
      | 'CUP'
      | 'CYP'
      | 'CZK'
      | 'CSK'
      | 'DKK'
      | 'DJF'
      | 'DOP'
      | 'NLG'
      | 'XCD'
      | 'DDM'
      | 'ECS'
      | 'ECV'
      | 'EGP'
      | 'GQE'
      | 'ERN'
      | 'EEK'
      | 'ETB'
      | 'EUR'
      | 'XBA'
      | 'XEU'
      | 'XBB'
      | 'XBC'
      | 'XBD'
      | 'FKP'
      | 'FJD'
      | 'FIM'
      | 'FRF'
      | 'XFO'
      | 'XFU'
      | 'GMD'
      | 'GEK'
      | 'GEL'
      | 'DEM'
      | 'GHS'
      | 'GHC'
      | 'GIP'
      | 'XAU'
      | 'GRD'
      | 'GTQ'
      | 'GWP'
      | 'GNF'
      | 'GNS'
      | 'GYD'
      | 'HTG'
      | 'HNL'
      | 'HKD'
      | 'HUF'
      | 'IMP'
      | 'ISK'
      | 'ISJ'
      | 'INR'
      | 'IDR'
      | 'IRR'
      | 'IQD'
      | 'IEP'
      | 'ILS'
      | 'ILP'
      | 'ILR'
      | 'ITL'
      | 'JMD'
      | 'JPY'
      | 'JOD'
      | 'KZT'
      | 'KES'
      | 'KWD'
      | 'KGS'
      | 'LAK'
      | 'LVL'
      | 'LVR'
      | 'LBP'
      | 'LSL'
      | 'LRD'
      | 'LYD'
      | 'LTL'
      | 'LTT'
      | 'LUL'
      | 'LUC'
      | 'LUF'
      | 'MOP'
      | 'MKD'
      | 'MKN'
      | 'MGA'
      | 'MGF'
      | 'MWK'
      | 'MYR'
      | 'MVR'
      | 'MVP'
      | 'MLF'
      | 'MTL'
      | 'MTP'
      | 'MRU'
      | 'MRO'
      | 'MUR'
      | 'MXV'
      | 'MXN'
      | 'MXP'
      | 'MDC'
      | 'MDL'
      | 'MCF'
      | 'MNT'
      | 'MAD'
      | 'MAF'
      | 'MZE'
      | 'MZN'
      | 'MZM'
      | 'MMK'
      | 'NAD'
      | 'NPR'
      | 'ANG'
      | 'TWD'
      | 'NZD'
      | 'NIO'
      | 'NIC'
      | 'NGN'
      | 'KPW'
      | 'NOK'
      | 'OMR'
      | 'PKR'
      | 'XPD'
      | 'PAB'
      | 'PGK'
      | 'PYG'
      | 'PEI'
      | 'PEN'
      | 'PES'
      | 'PHP'
      | 'XPT'
      | 'PLN'
      | 'PLZ'
      | 'PTE'
      | 'GWE'
      | 'QAR'
      | 'XRE'
      | 'RHD'
      | 'RON'
      | 'ROL'
      | 'RUB'
      | 'RUR'
      | 'RWF'
      | 'SVC'
      | 'WST'
      | 'SAR'
      | 'RSD'
      | 'CSD'
      | 'SCR'
      | 'SLL'
      | 'XAG'
      | 'SGD'
      | 'SKK'
      | 'SIT'
      | 'SBD'
      | 'SOS'
      | 'ZAR'
      | 'ZAL'
      | 'KRH'
      | 'KRW'
      | 'KRO'
      | 'SSP'
      | 'SUR'
      | 'ESP'
      | 'ESA'
      | 'ESB'
      | 'XDR'
      | 'LKR'
      | 'SHP'
      | 'XSU'
      | 'SDD'
      | 'SDG'
      | 'SDP'
      | 'SRD'
      | 'SRG'
      | 'SZL'
      | 'SEK'
      | 'CHF'
      | 'SYP'
      | 'STN'
      | 'STD'
      | 'TVD'
      | 'TJR'
      | 'TJS'
      | 'TZS'
      | 'XTS'
      | 'THB'
      | 'XXX'
      | 'TPE'
      | 'TOP'
      | 'TTD'
      | 'TND'
      | 'TRY'
      | 'TRL'
      | 'TMT'
      | 'TMM'
      | 'USD'
      | 'USN'
      | 'USS'
      | 'UGX'
      | 'UGS'
      | 'UAH'
      | 'UAK'
      | 'AED'
      | 'UYW'
      | 'UYU'
      | 'UYP'
      | 'UYI'
      | 'UZS'
      | 'VUV'
      | 'VES'
      | 'VEB'
      | 'VEF'
      | 'VND'
      | 'VNN'
      | 'CHE'
      | 'CHW'
      | 'XOF'
      | 'YDD'
      | 'YER'
      | 'YUN'
      | 'YUD'
      | 'YUM'
      | 'YUR'
      | 'ZWN'
      | 'ZRN'
      | 'ZRZ'
      | 'ZMW'
      | 'ZMK'
      | 'ZWD'
      | 'ZWR'
      | 'ZWL'
    /**
     * @description * `WEEKLY` - WEEKLY
     *     * `BIWEEKLY` - BIWEEKLY
     *     * `MONTHLY` - MONTHLY
     *     * `QUARTERLY` - QUARTERLY
     *     * `SEMIANNUALLY` - SEMIANNUALLY
     *     * `ANNUALLY` - ANNUALLY
     *     * `THIRTEEN-MONTHLY` - THIRTEEN-MONTHLY
     *     * `PRO_RATA` - PRO_RATA
     *     * `SEMIMONTHLY` - SEMIMONTHLY
     * @enum {string}
     */
    PayFrequencyEnum:
      | 'WEEKLY'
      | 'BIWEEKLY'
      | 'MONTHLY'
      | 'QUARTERLY'
      | 'SEMIANNUALLY'
      | 'ANNUALLY'
      | 'THIRTEEN-MONTHLY'
      | 'PRO_RATA'
      | 'SEMIMONTHLY'
    /** @description # The PayGroup Object
     *     ### Description
     *     The `PayGroup` object is used to represent a subset of employees that are put together for payroll processing purposes.
     *
     *     ### Usage Example
     *     Fetch from the `LIST PayGroup` endpoint and filter by `ID` to show all pay group information. */
    PayGroup: {
      /**
       * Format: uuid
       * @example fd1e0fb5-8f92-4ec9-9f32-179cf732867d
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 800293
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
       * @description The pay group name.
       * @example contractor
       */
      pay_group_name?: string | null
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
       *         "path": "/pay-group",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `HOUR` - HOUR
     *     * `DAY` - DAY
     *     * `WEEK` - WEEK
     *     * `EVERY_TWO_WEEKS` - EVERY_TWO_WEEKS
     *     * `SEMIMONTHLY` - SEMIMONTHLY
     *     * `MONTH` - MONTH
     *     * `QUARTER` - QUARTER
     *     * `EVERY_SIX_MONTHS` - EVERY_SIX_MONTHS
     *     * `YEAR` - YEAR
     * @enum {string}
     */
    PayPeriodEnum:
      | 'HOUR'
      | 'DAY'
      | 'WEEK'
      | 'EVERY_TWO_WEEKS'
      | 'SEMIMONTHLY'
      | 'MONTH'
      | 'QUARTER'
      | 'EVERY_SIX_MONTHS'
      | 'YEAR'
    /** @description # The PayrollRun Object
     *     ### Description
     *     The `PayrollRun` object is used to represent a group of pay statements for a specific pay schedule.
     *
     *     ### Usage Example
     *     Fetch from the `LIST PayrollRuns` endpoint and filter by `ID` to show all payroll runs. */
    PayrollRun: {
      /**
       * Format: uuid
       * @example 37336947-b3d4-4a4c-a310-ab6ab510e079
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
       * @description The state of the payroll run
       *
       *     * `PAID` - PAID
       *     * `DRAFT` - DRAFT
       *     * `APPROVED` - APPROVED
       *     * `FAILED` - FAILED
       *     * `CLOSED` - CLOSED
       * @example PAID
       */
      run_state?: components['schemas']['RunStateEnum'] | null
      /**
       * @description The type of the payroll run
       *
       *     * `REGULAR` - REGULAR
       *     * `OFF_CYCLE` - OFF_CYCLE
       *     * `CORRECTION` - CORRECTION
       *     * `TERMINATION` - TERMINATION
       *     * `SIGN_ON_BONUS` - SIGN_ON_BONUS
       * @example REGULAR
       */
      run_type?: components['schemas']['RunTypeEnum'] | null
      /**
       * Format: date-time
       * @description The day and time the payroll run started.
       * @example 2020-11-08T00:00:00Z
       */
      start_date?: string | null
      /**
       * Format: date-time
       * @description The day and time the payroll run ended.
       * @example 2020-11-15T00:00:00Z
       */
      end_date?: string | null
      /**
       * Format: date-time
       * @description The day and time the payroll run was checked.
       * @example 2020-11-15T00:00:00Z
       */
      check_date?: string | null
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
       *         "path": "/payroll",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `VACATION` - VACATION
     *     * `SICK` - SICK
     *     * `PERSONAL` - PERSONAL
     *     * `JURY_DUTY` - JURY_DUTY
     *     * `VOLUNTEER` - VOLUNTEER
     *     * `BEREAVEMENT` - BEREAVEMENT
     * @enum {string}
     */
    PolicyTypeEnum:
      | 'VACATION'
      | 'SICK'
      | 'PERSONAL'
      | 'JURY_DUTY'
      | 'VOLUNTEER'
      | 'BEREAVEMENT'
    /**
     * @description * `GENERAL_CUSTOMER_REQUEST` - GENERAL_CUSTOMER_REQUEST
     *     * `GDPR` - GDPR
     *     * `OTHER` - OTHER
     * @enum {string}
     */
    ReasonEnum: 'GENERAL_CUSTOMER_REQUEST' | 'GDPR' | 'OTHER'
    /**
     * @description * `CHILD` - CHILD
     *     * `SPOUSE` - SPOUSE
     *     * `DOMESTIC_PARTNER` - DOMESTIC_PARTNER
     * @enum {string}
     */
    RelationshipEnum: 'CHILD' | 'SPOUSE' | 'DOMESTIC_PARTNER'
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
      Benefit?: components['schemas']['RemoteFieldAPI'][]
      EmployerBenefit?: components['schemas']['RemoteFieldAPI'][]
      Company?: components['schemas']['RemoteFieldAPI'][]
      EmployeePayrollRun?: components['schemas']['RemoteFieldAPI'][]
      Employee?: components['schemas']['RemoteFieldAPI'][]
      Employment?: components['schemas']['RemoteFieldAPI'][]
      Location?: components['schemas']['RemoteFieldAPI'][]
      PayrollRun?: components['schemas']['RemoteFieldAPI'][]
      Team?: components['schemas']['RemoteFieldAPI'][]
      TimeOff?: components['schemas']['RemoteFieldAPI'][]
      TimeOffBalance?: components['schemas']['RemoteFieldAPI'][]
      BankInfo?: components['schemas']['RemoteFieldAPI'][]
      PayGroup?: components['schemas']['RemoteFieldAPI'][]
      Group?: components['schemas']['RemoteFieldAPI'][]
      Dependent?: components['schemas']['RemoteFieldAPI'][]
      TimesheetEntry?: components['schemas']['RemoteFieldAPI'][]
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
     * @description * `VACATION` - VACATION
     *     * `SICK` - SICK
     *     * `PERSONAL` - PERSONAL
     *     * `JURY_DUTY` - JURY_DUTY
     *     * `VOLUNTEER` - VOLUNTEER
     *     * `BEREAVEMENT` - BEREAVEMENT
     * @enum {string}
     */
    RequestTypeEnum:
      | 'VACATION'
      | 'SICK'
      | 'PERSONAL'
      | 'JURY_DUTY'
      | 'VOLUNTEER'
      | 'BEREAVEMENT'
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
     * @description * `PAID` - PAID
     *     * `DRAFT` - DRAFT
     *     * `APPROVED` - APPROVED
     *     * `FAILED` - FAILED
     *     * `CLOSED` - CLOSED
     * @enum {string}
     */
    RunStateEnum: 'PAID' | 'DRAFT' | 'APPROVED' | 'FAILED' | 'CLOSED'
    /**
     * @description * `REGULAR` - REGULAR
     *     * `OFF_CYCLE` - OFF_CYCLE
     *     * `CORRECTION` - CORRECTION
     *     * `TERMINATION` - TERMINATION
     *     * `SIGN_ON_BONUS` - SIGN_ON_BONUS
     * @enum {string}
     */
    RunTypeEnum:
      | 'REGULAR'
      | 'OFF_CYCLE'
      | 'CORRECTION'
      | 'TERMINATION'
      | 'SIGN_ON_BONUS'
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
      /** @example Employee */
      model_name: string
      /** @example hris.Employee */
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
    /** @description # The Tax Object
     *     ### Description
     *     The `Tax` object is used to represent an array of the tax deductions for a given employee's payroll run.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Taxes` endpoint and filter by `ID` to show all taxes. */
    Tax: {
      /**
       * Format: uuid
       * @example e3a825fd-c38d-4095-a717-df98c4cb9ebc
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 26806834
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
       * @example 35347df1-95e7-46e2-93cc-66f1191edca5
       */
      employee_payroll_run?: string | null
      /**
       * @description The tax's name.
       * @example California State Income Tax
       */
      name?: string | null
      /**
       * Format: double
       * @description The tax amount.
       * @example 100.25
       */
      amount?: number | null
      /**
       * @description Whether or not the employer is responsible for paying the tax.
       * @example False
       */
      employer_tax?: boolean | null
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
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Team Object
     *     ### Description
     *     The `Team` object is used to represent a subdivision of the company, usually a department. Each employee will be grouped into one specific Team.
     *
     *     ### Usage Example
     *     If you're building a way to filter by `Team`, you'd hit the `GET Teams` endpoint to fetch the `Teams`, and then use the `ID` of the team your user selects to filter the `GET Employees` endpoint. */
    Team: {
      /**
       * Format: uuid
       * @example 13a72919-9fae-4f54-81ca-ddfd8712a1ba
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
       * @description The team's name.
       * @example Engineering
       */
      name?: string | null
      /**
       * Format: uuid
       * @description The team's parent team.
       * @example 1b998423-db0a-4037-a4cf-f79c60cb67b3
       */
      parent_team?: string | null
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
       *         "path": "/teams",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The TimeOff Object
     *     ### Description
     *     The `TimeOff` object is used to represent all employees' Time Off entries.
     *
     *     ### Usage Example
     *     Fetch from the `LIST TimeOffs` endpoint and filter by `ID` to show all time off requests. */
    TimeOff: {
      /**
       * Format: uuid
       * @example 91b2b905-e866-40c8-8be2-efe53827a0aa
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
       * Format: uuid
       * @description The employee requesting time off.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      employee?: string | null
      /**
       * Format: uuid
       * @description The Merge ID of the employee with the ability to approve the time off request.
       * @example 9efbc633-3387-4306-aa55-e2c635e6bb4f
       */
      approver?: string | null
      /**
       * @description The status of this time off request.
       *
       *     * `REQUESTED` - REQUESTED
       *     * `APPROVED` - APPROVED
       *     * `DECLINED` - DECLINED
       *     * `CANCELLED` - CANCELLED
       *     * `DELETED` - DELETED
       * @example APPROVED
       */
      status?: components['schemas']['TimeOffStatusEnum'] | null
      /**
       * @description The employee note for this time off request.
       * @example Moving into the new apartment Kendall Roy gave me!
       */
      employee_note?: string | null
      /**
       * @description The measurement that the third-party integration uses to count time requested.
       *
       *     * `HOURS` - HOURS
       *     * `DAYS` - DAYS
       * @example DAYS
       */
      units?: components['schemas']['UnitsEnum'] | null
      /**
       * Format: double
       * @description The time off quantity measured by the prescribed “units”.
       * @example 3
       */
      amount?: number | null
      /**
       * @description The type of time off request.
       *
       *     * `VACATION` - VACATION
       *     * `SICK` - SICK
       *     * `PERSONAL` - PERSONAL
       *     * `JURY_DUTY` - JURY_DUTY
       *     * `VOLUNTEER` - VOLUNTEER
       *     * `BEREAVEMENT` - BEREAVEMENT
       * @example VACATION
       */
      request_type?: components['schemas']['RequestTypeEnum'] | null
      /**
       * Format: date-time
       * @description The day and time of the start of the time requested off.
       * @example 2020-11-10T00:00:00Z
       */
      start_time?: string | null
      /**
       * Format: date-time
       * @description The day and time of the end of the time requested off.
       * @example 2020-11-17T00:00:00Z
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
       *         "path": "/leave",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The TimeOffBalance Object
     *     ### Description
     *     The `TimeOffBalance` object is used to represent current balances for an employee's Time Off plan.
     *
     *     ### Usage Example
     *     Fetch from the `LIST TimeOffBalances` endpoint and filter by `ID` to show all time off balances. */
    TimeOffBalance: {
      /**
       * Format: uuid
       * @example 91b2b905-e866-40c8-8be2-efe53827a0aa
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
       * Format: uuid
       * @description The employee the balance belongs to.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      employee?: string | null
      /**
       * Format: double
       * @description The current remaining PTO balance, measured in hours. For integrations that return this value in days, Merge multiplies by 8 to calculate hours.
       * @example 60.0
       */
      balance?: number | null
      /**
       * Format: double
       * @description The amount of PTO used in terms of hours. For integrations that return this value in days, Merge multiplies by 8 to calculate hours.
       * @example 45.0
       */
      used?: number | null
      /**
       * @description The policy type of this time off balance.
       *
       *     * `VACATION` - VACATION
       *     * `SICK` - SICK
       *     * `PERSONAL` - PERSONAL
       *     * `JURY_DUTY` - JURY_DUTY
       *     * `VOLUNTEER` - VOLUNTEER
       *     * `BEREAVEMENT` - BEREAVEMENT
       * @example VACATION
       */
      policy_type?: components['schemas']['PolicyTypeEnum'] | null
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
       *         "path": "/leave",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    TimeOffEndpointRequest: {
      model: components['schemas']['TimeOffRequest']
    }
    /** @description # The TimeOff Object
     *     ### Description
     *     The `TimeOff` object is used to represent all employees' Time Off entries.
     *
     *     ### Usage Example
     *     Fetch from the `LIST TimeOffs` endpoint and filter by `ID` to show all time off requests. */
    TimeOffRequest: {
      /**
       * Format: uuid
       * @description The employee requesting time off.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      employee?: string | null
      /**
       * Format: uuid
       * @description The Merge ID of the employee with the ability to approve the time off request.
       * @example 9efbc633-3387-4306-aa55-e2c635e6bb4f
       */
      approver?: string | null
      /**
       * @description The status of this time off request.
       *
       *     * `REQUESTED` - REQUESTED
       *     * `APPROVED` - APPROVED
       *     * `DECLINED` - DECLINED
       *     * `CANCELLED` - CANCELLED
       *     * `DELETED` - DELETED
       * @example APPROVED
       */
      status?: components['schemas']['TimeOffStatusEnum'] | null
      /**
       * @description The employee note for this time off request.
       * @example Moving into the new apartment Kendall Roy gave me!
       */
      employee_note?: string | null
      /**
       * @description The measurement that the third-party integration uses to count time requested.
       *
       *     * `HOURS` - HOURS
       *     * `DAYS` - DAYS
       * @example DAYS
       */
      units?: components['schemas']['UnitsEnum'] | null
      /**
       * Format: double
       * @description The time off quantity measured by the prescribed “units”.
       * @example 3
       */
      amount?: number | null
      /**
       * @description The type of time off request.
       *
       *     * `VACATION` - VACATION
       *     * `SICK` - SICK
       *     * `PERSONAL` - PERSONAL
       *     * `JURY_DUTY` - JURY_DUTY
       *     * `VOLUNTEER` - VOLUNTEER
       *     * `BEREAVEMENT` - BEREAVEMENT
       * @example VACATION
       */
      request_type?: components['schemas']['RequestTypeEnum'] | null
      /**
       * Format: date-time
       * @description The day and time of the start of the time requested off.
       * @example 2020-11-10T00:00:00Z
       */
      start_time?: string | null
      /**
       * Format: date-time
       * @description The day and time of the end of the time requested off.
       * @example 2020-11-17T00:00:00Z
       */
      end_time?: string | null
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
    TimeOffResponse: {
      model: components['schemas']['TimeOff']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `REQUESTED` - REQUESTED
     *     * `APPROVED` - APPROVED
     *     * `DECLINED` - DECLINED
     *     * `CANCELLED` - CANCELLED
     *     * `DELETED` - DELETED
     * @enum {string}
     */
    TimeOffStatusEnum:
      | 'REQUESTED'
      | 'APPROVED'
      | 'DECLINED'
      | 'CANCELLED'
      | 'DELETED'
    /** @description # The Timesheet Entry Object
     *     ### Description
     *     The `Timesheet Entry` object is used to track coverage for hours worked by an 'Employee'.
     *
     *
     *     ### Usage Example
     *     GET and POST Timesheet Entries */
    TimesheetEntry: {
      /**
       * Format: uuid
       * @example 91b2b905-e866-40c8-8be2-efe53827a0aa
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
       * Format: uuid
       * @description The employee the timesheet entry is for.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      employee?: string | null
      /**
       * Format: double
       * @description The number of hours logged by the employee.
       * @example 10
       */
      hours_worked?: number | null
      /**
       * Format: date-time
       * @description The time at which the employee started work.
       * @example 2020-11-10T00:00:00Z
       */
      start_time?: string | null
      /**
       * Format: date-time
       * @description The time at which the employee ended work.
       * @example 2020-11-10T00:10:00Z
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
       *         "path": "/dependent",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    TimesheetEntryEndpointRequest: {
      model: components['schemas']['TimesheetEntryRequest']
    }
    /** @description # The Timesheet Entry Object
     *     ### Description
     *     The `Timesheet Entry` object is used to track coverage for hours worked by an 'Employee'.
     *
     *
     *     ### Usage Example
     *     GET and POST Timesheet Entries */
    TimesheetEntryRequest: {
      /**
       * Format: uuid
       * @description The employee the timesheet entry is for.
       * @example d2f972d0-2526-434b-9409-4c3b468e08f0
       */
      employee?: string | null
      /**
       * Format: double
       * @description The number of hours logged by the employee.
       * @example 10
       */
      hours_worked?: number | null
      /**
       * Format: date-time
       * @description The time at which the employee started work.
       * @example 2020-11-10T00:00:00Z
       */
      start_time?: string | null
      /**
       * Format: date-time
       * @description The time at which the employee ended work.
       * @example 2020-11-10T00:10:00Z
       */
      end_time?: string | null
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
    TimesheetEntryResponse: {
      model: components['schemas']['TimesheetEntry']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `HOURS` - HOURS
     *     * `DAYS` - DAYS
     * @enum {string}
     */
    UnitsEnum: 'HOURS' | 'DAYS'
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
  bank_info_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return BankInfo's with this account type. Options: ('SAVINGS', 'CHECKING')
         *
         *     * `SAVINGS` - SAVINGS
         *     * `CHECKING` - CHECKING */
        account_type?: 'CHECKING' | 'SAVINGS' | null
        /** @description If provided, will only return BankInfo's with this bank name. */
        bank_name?: string | null
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return bank accounts for this employee. */
        employee_id?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee'
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
        /** @description Overrides the default ordering for this endpoint. Possible values include: remote_created_at, -remote_created_at. */
        order_by?: '-remote_created_at' | 'remote_created_at'
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'account_type'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'account_type'
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
          'application/json': components['schemas']['PaginatedBankInfoList']
        }
      }
    }
  }
  bank_info_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'account_type'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'account_type'
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
          'application/json': components['schemas']['BankInfo']
        }
      }
    }
  }
  benefits_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will return the benefits associated with the employee. */
        employee_id?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee'
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
          'application/json': components['schemas']['PaginatedBenefitList']
        }
      }
    }
  }
  benefits_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee'
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
          'application/json': components['schemas']['Benefit']
        }
      }
    }
  }
  companies_list: {
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
          'application/json': components['schemas']['PaginatedCompanyList']
        }
      }
    }
  }
  companies_retrieve: {
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
          'application/json': components['schemas']['Company']
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
  dependents_list: {
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
        /** @description Whether to include sensitive fields (such as social security numbers) in the response. */
        include_sensitive_fields?: boolean
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
          'application/json': components['schemas']['PaginatedDependentList']
        }
      }
    }
  }
  dependents_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include sensitive fields (such as social security numbers) in the response. */
        include_sensitive_fields?: boolean
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
          'application/json': components['schemas']['Dependent']
        }
      }
    }
  }
  employee_payroll_runs_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return employee payroll runs for this employee. */
        employee_id?: string
        /** @description If provided, will only return employee payroll runs ended after this datetime. */
        ended_after?: string | null
        /** @description If provided, will only return employee payroll runs ended before this datetime. */
        ended_before?: string | null
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee' | 'employee,payroll_run' | 'payroll_run'
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
        /** @description If provided, will only return employee payroll runs for this employee. */
        payroll_run_id?: string
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return employee payroll runs started after this datetime. */
        started_after?: string | null
        /** @description If provided, will only return employee payroll runs started before this datetime. */
        started_before?: string | null
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
          'application/json': components['schemas']['PaginatedEmployeePayrollRunList']
        }
      }
    }
  }
  employee_payroll_runs_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee' | 'employee,payroll_run' | 'payroll_run'
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
          'application/json': components['schemas']['EmployeePayrollRun']
        }
      }
    }
  }
  employees_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return employees for this company. */
        company_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return employees with this display name. */
        display_full_name?: string | null
        /** @description If provided, will only return employees with this employment status.
         *
         *     * `ACTIVE` - ACTIVE
         *     * `PENDING` - PENDING
         *     * `INACTIVE` - INACTIVE */
        employment_status?: 'ACTIVE' | 'INACTIVE' | 'PENDING' | null
        /** @description If provided, will only return employees that have an employment of the specified employment_type. */
        employment_type?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'company'
          | 'company,pay_group'
          | 'employments'
          | 'employments,company'
          | 'employments,company,pay_group'
          | 'employments,groups'
          | 'employments,groups,company'
          | 'employments,groups,company,pay_group'
          | 'employments,groups,home_location'
          | 'employments,groups,home_location,company'
          | 'employments,groups,home_location,company,pay_group'
          | 'employments,groups,home_location,manager'
          | 'employments,groups,home_location,manager,company'
          | 'employments,groups,home_location,manager,company,pay_group'
          | 'employments,groups,home_location,manager,pay_group'
          | 'employments,groups,home_location,manager,team'
          | 'employments,groups,home_location,manager,team,company'
          | 'employments,groups,home_location,manager,team,company,pay_group'
          | 'employments,groups,home_location,manager,team,pay_group'
          | 'employments,groups,home_location,pay_group'
          | 'employments,groups,home_location,team'
          | 'employments,groups,home_location,team,company'
          | 'employments,groups,home_location,team,company,pay_group'
          | 'employments,groups,home_location,team,pay_group'
          | 'employments,groups,home_location,work_location'
          | 'employments,groups,home_location,work_location,company'
          | 'employments,groups,home_location,work_location,company,pay_group'
          | 'employments,groups,home_location,work_location,manager'
          | 'employments,groups,home_location,work_location,manager,company'
          | 'employments,groups,home_location,work_location,manager,company,pay_group'
          | 'employments,groups,home_location,work_location,manager,pay_group'
          | 'employments,groups,home_location,work_location,manager,team'
          | 'employments,groups,home_location,work_location,manager,team,company'
          | 'employments,groups,home_location,work_location,manager,team,company,pay_group'
          | 'employments,groups,home_location,work_location,manager,team,pay_group'
          | 'employments,groups,home_location,work_location,pay_group'
          | 'employments,groups,home_location,work_location,team'
          | 'employments,groups,home_location,work_location,team,company'
          | 'employments,groups,home_location,work_location,team,company,pay_group'
          | 'employments,groups,home_location,work_location,team,pay_group'
          | 'employments,groups,manager'
          | 'employments,groups,manager,company'
          | 'employments,groups,manager,company,pay_group'
          | 'employments,groups,manager,pay_group'
          | 'employments,groups,manager,team'
          | 'employments,groups,manager,team,company'
          | 'employments,groups,manager,team,company,pay_group'
          | 'employments,groups,manager,team,pay_group'
          | 'employments,groups,pay_group'
          | 'employments,groups,team'
          | 'employments,groups,team,company'
          | 'employments,groups,team,company,pay_group'
          | 'employments,groups,team,pay_group'
          | 'employments,groups,work_location'
          | 'employments,groups,work_location,company'
          | 'employments,groups,work_location,company,pay_group'
          | 'employments,groups,work_location,manager'
          | 'employments,groups,work_location,manager,company'
          | 'employments,groups,work_location,manager,company,pay_group'
          | 'employments,groups,work_location,manager,pay_group'
          | 'employments,groups,work_location,manager,team'
          | 'employments,groups,work_location,manager,team,company'
          | 'employments,groups,work_location,manager,team,company,pay_group'
          | 'employments,groups,work_location,manager,team,pay_group'
          | 'employments,groups,work_location,pay_group'
          | 'employments,groups,work_location,team'
          | 'employments,groups,work_location,team,company'
          | 'employments,groups,work_location,team,company,pay_group'
          | 'employments,groups,work_location,team,pay_group'
          | 'employments,home_location'
          | 'employments,home_location,company'
          | 'employments,home_location,company,pay_group'
          | 'employments,home_location,manager'
          | 'employments,home_location,manager,company'
          | 'employments,home_location,manager,company,pay_group'
          | 'employments,home_location,manager,pay_group'
          | 'employments,home_location,manager,team'
          | 'employments,home_location,manager,team,company'
          | 'employments,home_location,manager,team,company,pay_group'
          | 'employments,home_location,manager,team,pay_group'
          | 'employments,home_location,pay_group'
          | 'employments,home_location,team'
          | 'employments,home_location,team,company'
          | 'employments,home_location,team,company,pay_group'
          | 'employments,home_location,team,pay_group'
          | 'employments,home_location,work_location'
          | 'employments,home_location,work_location,company'
          | 'employments,home_location,work_location,company,pay_group'
          | 'employments,home_location,work_location,manager'
          | 'employments,home_location,work_location,manager,company'
          | 'employments,home_location,work_location,manager,company,pay_group'
          | 'employments,home_location,work_location,manager,pay_group'
          | 'employments,home_location,work_location,manager,team'
          | 'employments,home_location,work_location,manager,team,company'
          | 'employments,home_location,work_location,manager,team,company,pay_group'
          | 'employments,home_location,work_location,manager,team,pay_group'
          | 'employments,home_location,work_location,pay_group'
          | 'employments,home_location,work_location,team'
          | 'employments,home_location,work_location,team,company'
          | 'employments,home_location,work_location,team,company,pay_group'
          | 'employments,home_location,work_location,team,pay_group'
          | 'employments,manager'
          | 'employments,manager,company'
          | 'employments,manager,company,pay_group'
          | 'employments,manager,pay_group'
          | 'employments,manager,team'
          | 'employments,manager,team,company'
          | 'employments,manager,team,company,pay_group'
          | 'employments,manager,team,pay_group'
          | 'employments,pay_group'
          | 'employments,team'
          | 'employments,team,company'
          | 'employments,team,company,pay_group'
          | 'employments,team,pay_group'
          | 'employments,work_location'
          | 'employments,work_location,company'
          | 'employments,work_location,company,pay_group'
          | 'employments,work_location,manager'
          | 'employments,work_location,manager,company'
          | 'employments,work_location,manager,company,pay_group'
          | 'employments,work_location,manager,pay_group'
          | 'employments,work_location,manager,team'
          | 'employments,work_location,manager,team,company'
          | 'employments,work_location,manager,team,company,pay_group'
          | 'employments,work_location,manager,team,pay_group'
          | 'employments,work_location,pay_group'
          | 'employments,work_location,team'
          | 'employments,work_location,team,company'
          | 'employments,work_location,team,company,pay_group'
          | 'employments,work_location,team,pay_group'
          | 'groups'
          | 'groups,company'
          | 'groups,company,pay_group'
          | 'groups,home_location'
          | 'groups,home_location,company'
          | 'groups,home_location,company,pay_group'
          | 'groups,home_location,manager'
          | 'groups,home_location,manager,company'
          | 'groups,home_location,manager,company,pay_group'
          | 'groups,home_location,manager,pay_group'
          | 'groups,home_location,manager,team'
          | 'groups,home_location,manager,team,company'
          | 'groups,home_location,manager,team,company,pay_group'
          | 'groups,home_location,manager,team,pay_group'
          | 'groups,home_location,pay_group'
          | 'groups,home_location,team'
          | 'groups,home_location,team,company'
          | 'groups,home_location,team,company,pay_group'
          | 'groups,home_location,team,pay_group'
          | 'groups,home_location,work_location'
          | 'groups,home_location,work_location,company'
          | 'groups,home_location,work_location,company,pay_group'
          | 'groups,home_location,work_location,manager'
          | 'groups,home_location,work_location,manager,company'
          | 'groups,home_location,work_location,manager,company,pay_group'
          | 'groups,home_location,work_location,manager,pay_group'
          | 'groups,home_location,work_location,manager,team'
          | 'groups,home_location,work_location,manager,team,company'
          | 'groups,home_location,work_location,manager,team,company,pay_group'
          | 'groups,home_location,work_location,manager,team,pay_group'
          | 'groups,home_location,work_location,pay_group'
          | 'groups,home_location,work_location,team'
          | 'groups,home_location,work_location,team,company'
          | 'groups,home_location,work_location,team,company,pay_group'
          | 'groups,home_location,work_location,team,pay_group'
          | 'groups,manager'
          | 'groups,manager,company'
          | 'groups,manager,company,pay_group'
          | 'groups,manager,pay_group'
          | 'groups,manager,team'
          | 'groups,manager,team,company'
          | 'groups,manager,team,company,pay_group'
          | 'groups,manager,team,pay_group'
          | 'groups,pay_group'
          | 'groups,team'
          | 'groups,team,company'
          | 'groups,team,company,pay_group'
          | 'groups,team,pay_group'
          | 'groups,work_location'
          | 'groups,work_location,company'
          | 'groups,work_location,company,pay_group'
          | 'groups,work_location,manager'
          | 'groups,work_location,manager,company'
          | 'groups,work_location,manager,company,pay_group'
          | 'groups,work_location,manager,pay_group'
          | 'groups,work_location,manager,team'
          | 'groups,work_location,manager,team,company'
          | 'groups,work_location,manager,team,company,pay_group'
          | 'groups,work_location,manager,team,pay_group'
          | 'groups,work_location,pay_group'
          | 'groups,work_location,team'
          | 'groups,work_location,team,company'
          | 'groups,work_location,team,company,pay_group'
          | 'groups,work_location,team,pay_group'
          | 'home_location'
          | 'home_location,company'
          | 'home_location,company,pay_group'
          | 'home_location,manager'
          | 'home_location,manager,company'
          | 'home_location,manager,company,pay_group'
          | 'home_location,manager,pay_group'
          | 'home_location,manager,team'
          | 'home_location,manager,team,company'
          | 'home_location,manager,team,company,pay_group'
          | 'home_location,manager,team,pay_group'
          | 'home_location,pay_group'
          | 'home_location,team'
          | 'home_location,team,company'
          | 'home_location,team,company,pay_group'
          | 'home_location,team,pay_group'
          | 'home_location,work_location'
          | 'home_location,work_location,company'
          | 'home_location,work_location,company,pay_group'
          | 'home_location,work_location,manager'
          | 'home_location,work_location,manager,company'
          | 'home_location,work_location,manager,company,pay_group'
          | 'home_location,work_location,manager,pay_group'
          | 'home_location,work_location,manager,team'
          | 'home_location,work_location,manager,team,company'
          | 'home_location,work_location,manager,team,company,pay_group'
          | 'home_location,work_location,manager,team,pay_group'
          | 'home_location,work_location,pay_group'
          | 'home_location,work_location,team'
          | 'home_location,work_location,team,company'
          | 'home_location,work_location,team,company,pay_group'
          | 'home_location,work_location,team,pay_group'
          | 'manager'
          | 'manager,company'
          | 'manager,company,pay_group'
          | 'manager,pay_group'
          | 'manager,team'
          | 'manager,team,company'
          | 'manager,team,company,pay_group'
          | 'manager,team,pay_group'
          | 'pay_group'
          | 'team'
          | 'team,company'
          | 'team,company,pay_group'
          | 'team,pay_group'
          | 'work_location'
          | 'work_location,company'
          | 'work_location,company,pay_group'
          | 'work_location,manager'
          | 'work_location,manager,company'
          | 'work_location,manager,company,pay_group'
          | 'work_location,manager,pay_group'
          | 'work_location,manager,team'
          | 'work_location,manager,team,company'
          | 'work_location,manager,team,company,pay_group'
          | 'work_location,manager,team,pay_group'
          | 'work_location,pay_group'
          | 'work_location,team'
          | 'work_location,team,company'
          | 'work_location,team,company,pay_group'
          | 'work_location,team,pay_group'
        /** @description If provided, will only return employees with this first name. */
        first_name?: string | null
        /** @description If provided, will only return employees matching the group ids; multiple groups can be separated by commas. */
        groups?: string
        /** @description If provided, will only return employees for this home location. */
        home_location_id?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include sensitive fields (such as social security numbers) in the response. */
        include_sensitive_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return employees that have an employment of the specified job_title. */
        job_title?: string
        /** @description If provided, will only return employees with this last name. */
        last_name?: string | null
        /** @description If provided, will only return employees for this manager. */
        manager_id?: string
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return employees for this pay group */
        pay_group_id?: string
        /** @description If provided, will only return Employees with this personal email */
        personal_email?: string | null
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'employment_status'
          | 'employment_status,ethnicity'
          | 'employment_status,ethnicity,gender'
          | 'employment_status,ethnicity,gender,marital_status'
          | 'employment_status,ethnicity,marital_status'
          | 'employment_status,gender'
          | 'employment_status,gender,marital_status'
          | 'employment_status,marital_status'
          | 'ethnicity'
          | 'ethnicity,gender'
          | 'ethnicity,gender,marital_status'
          | 'ethnicity,marital_status'
          | 'gender'
          | 'gender,marital_status'
          | 'marital_status'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'employment_status'
          | 'employment_status,ethnicity'
          | 'employment_status,ethnicity,gender'
          | 'employment_status,ethnicity,gender,marital_status'
          | 'employment_status,ethnicity,marital_status'
          | 'employment_status,gender'
          | 'employment_status,gender,marital_status'
          | 'employment_status,marital_status'
          | 'ethnicity'
          | 'ethnicity,gender'
          | 'ethnicity,gender,marital_status'
          | 'ethnicity,marital_status'
          | 'gender'
          | 'gender,marital_status'
          | 'marital_status'
        /** @description If provided, will only return employees that started after this datetime. */
        started_after?: string | null
        /** @description If provided, will only return employees that started before this datetime. */
        started_before?: string | null
        /** @description If provided, will only return employees for this team. */
        team_id?: string
        /** @description If provided, will only return employees that were terminated after this datetime. */
        terminated_after?: string | null
        /** @description If provided, will only return employees that were terminated before this datetime. */
        terminated_before?: string | null
        /** @description If provided, will only return Employees with this work email */
        work_email?: string | null
        /** @description If provided, will only return employees for this location. */
        work_location_id?: string
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
          'application/json': components['schemas']['PaginatedEmployeeList']
        }
      }
    }
  }
  employees_create: {
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
        'application/json': components['schemas']['EmployeeEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['EmployeeEndpointRequest']
        'multipart/form-data': components['schemas']['EmployeeEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmployeeResponse']
        }
      }
    }
  }
  employees_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'company'
          | 'company,pay_group'
          | 'employments'
          | 'employments,company'
          | 'employments,company,pay_group'
          | 'employments,groups'
          | 'employments,groups,company'
          | 'employments,groups,company,pay_group'
          | 'employments,groups,home_location'
          | 'employments,groups,home_location,company'
          | 'employments,groups,home_location,company,pay_group'
          | 'employments,groups,home_location,manager'
          | 'employments,groups,home_location,manager,company'
          | 'employments,groups,home_location,manager,company,pay_group'
          | 'employments,groups,home_location,manager,pay_group'
          | 'employments,groups,home_location,manager,team'
          | 'employments,groups,home_location,manager,team,company'
          | 'employments,groups,home_location,manager,team,company,pay_group'
          | 'employments,groups,home_location,manager,team,pay_group'
          | 'employments,groups,home_location,pay_group'
          | 'employments,groups,home_location,team'
          | 'employments,groups,home_location,team,company'
          | 'employments,groups,home_location,team,company,pay_group'
          | 'employments,groups,home_location,team,pay_group'
          | 'employments,groups,home_location,work_location'
          | 'employments,groups,home_location,work_location,company'
          | 'employments,groups,home_location,work_location,company,pay_group'
          | 'employments,groups,home_location,work_location,manager'
          | 'employments,groups,home_location,work_location,manager,company'
          | 'employments,groups,home_location,work_location,manager,company,pay_group'
          | 'employments,groups,home_location,work_location,manager,pay_group'
          | 'employments,groups,home_location,work_location,manager,team'
          | 'employments,groups,home_location,work_location,manager,team,company'
          | 'employments,groups,home_location,work_location,manager,team,company,pay_group'
          | 'employments,groups,home_location,work_location,manager,team,pay_group'
          | 'employments,groups,home_location,work_location,pay_group'
          | 'employments,groups,home_location,work_location,team'
          | 'employments,groups,home_location,work_location,team,company'
          | 'employments,groups,home_location,work_location,team,company,pay_group'
          | 'employments,groups,home_location,work_location,team,pay_group'
          | 'employments,groups,manager'
          | 'employments,groups,manager,company'
          | 'employments,groups,manager,company,pay_group'
          | 'employments,groups,manager,pay_group'
          | 'employments,groups,manager,team'
          | 'employments,groups,manager,team,company'
          | 'employments,groups,manager,team,company,pay_group'
          | 'employments,groups,manager,team,pay_group'
          | 'employments,groups,pay_group'
          | 'employments,groups,team'
          | 'employments,groups,team,company'
          | 'employments,groups,team,company,pay_group'
          | 'employments,groups,team,pay_group'
          | 'employments,groups,work_location'
          | 'employments,groups,work_location,company'
          | 'employments,groups,work_location,company,pay_group'
          | 'employments,groups,work_location,manager'
          | 'employments,groups,work_location,manager,company'
          | 'employments,groups,work_location,manager,company,pay_group'
          | 'employments,groups,work_location,manager,pay_group'
          | 'employments,groups,work_location,manager,team'
          | 'employments,groups,work_location,manager,team,company'
          | 'employments,groups,work_location,manager,team,company,pay_group'
          | 'employments,groups,work_location,manager,team,pay_group'
          | 'employments,groups,work_location,pay_group'
          | 'employments,groups,work_location,team'
          | 'employments,groups,work_location,team,company'
          | 'employments,groups,work_location,team,company,pay_group'
          | 'employments,groups,work_location,team,pay_group'
          | 'employments,home_location'
          | 'employments,home_location,company'
          | 'employments,home_location,company,pay_group'
          | 'employments,home_location,manager'
          | 'employments,home_location,manager,company'
          | 'employments,home_location,manager,company,pay_group'
          | 'employments,home_location,manager,pay_group'
          | 'employments,home_location,manager,team'
          | 'employments,home_location,manager,team,company'
          | 'employments,home_location,manager,team,company,pay_group'
          | 'employments,home_location,manager,team,pay_group'
          | 'employments,home_location,pay_group'
          | 'employments,home_location,team'
          | 'employments,home_location,team,company'
          | 'employments,home_location,team,company,pay_group'
          | 'employments,home_location,team,pay_group'
          | 'employments,home_location,work_location'
          | 'employments,home_location,work_location,company'
          | 'employments,home_location,work_location,company,pay_group'
          | 'employments,home_location,work_location,manager'
          | 'employments,home_location,work_location,manager,company'
          | 'employments,home_location,work_location,manager,company,pay_group'
          | 'employments,home_location,work_location,manager,pay_group'
          | 'employments,home_location,work_location,manager,team'
          | 'employments,home_location,work_location,manager,team,company'
          | 'employments,home_location,work_location,manager,team,company,pay_group'
          | 'employments,home_location,work_location,manager,team,pay_group'
          | 'employments,home_location,work_location,pay_group'
          | 'employments,home_location,work_location,team'
          | 'employments,home_location,work_location,team,company'
          | 'employments,home_location,work_location,team,company,pay_group'
          | 'employments,home_location,work_location,team,pay_group'
          | 'employments,manager'
          | 'employments,manager,company'
          | 'employments,manager,company,pay_group'
          | 'employments,manager,pay_group'
          | 'employments,manager,team'
          | 'employments,manager,team,company'
          | 'employments,manager,team,company,pay_group'
          | 'employments,manager,team,pay_group'
          | 'employments,pay_group'
          | 'employments,team'
          | 'employments,team,company'
          | 'employments,team,company,pay_group'
          | 'employments,team,pay_group'
          | 'employments,work_location'
          | 'employments,work_location,company'
          | 'employments,work_location,company,pay_group'
          | 'employments,work_location,manager'
          | 'employments,work_location,manager,company'
          | 'employments,work_location,manager,company,pay_group'
          | 'employments,work_location,manager,pay_group'
          | 'employments,work_location,manager,team'
          | 'employments,work_location,manager,team,company'
          | 'employments,work_location,manager,team,company,pay_group'
          | 'employments,work_location,manager,team,pay_group'
          | 'employments,work_location,pay_group'
          | 'employments,work_location,team'
          | 'employments,work_location,team,company'
          | 'employments,work_location,team,company,pay_group'
          | 'employments,work_location,team,pay_group'
          | 'groups'
          | 'groups,company'
          | 'groups,company,pay_group'
          | 'groups,home_location'
          | 'groups,home_location,company'
          | 'groups,home_location,company,pay_group'
          | 'groups,home_location,manager'
          | 'groups,home_location,manager,company'
          | 'groups,home_location,manager,company,pay_group'
          | 'groups,home_location,manager,pay_group'
          | 'groups,home_location,manager,team'
          | 'groups,home_location,manager,team,company'
          | 'groups,home_location,manager,team,company,pay_group'
          | 'groups,home_location,manager,team,pay_group'
          | 'groups,home_location,pay_group'
          | 'groups,home_location,team'
          | 'groups,home_location,team,company'
          | 'groups,home_location,team,company,pay_group'
          | 'groups,home_location,team,pay_group'
          | 'groups,home_location,work_location'
          | 'groups,home_location,work_location,company'
          | 'groups,home_location,work_location,company,pay_group'
          | 'groups,home_location,work_location,manager'
          | 'groups,home_location,work_location,manager,company'
          | 'groups,home_location,work_location,manager,company,pay_group'
          | 'groups,home_location,work_location,manager,pay_group'
          | 'groups,home_location,work_location,manager,team'
          | 'groups,home_location,work_location,manager,team,company'
          | 'groups,home_location,work_location,manager,team,company,pay_group'
          | 'groups,home_location,work_location,manager,team,pay_group'
          | 'groups,home_location,work_location,pay_group'
          | 'groups,home_location,work_location,team'
          | 'groups,home_location,work_location,team,company'
          | 'groups,home_location,work_location,team,company,pay_group'
          | 'groups,home_location,work_location,team,pay_group'
          | 'groups,manager'
          | 'groups,manager,company'
          | 'groups,manager,company,pay_group'
          | 'groups,manager,pay_group'
          | 'groups,manager,team'
          | 'groups,manager,team,company'
          | 'groups,manager,team,company,pay_group'
          | 'groups,manager,team,pay_group'
          | 'groups,pay_group'
          | 'groups,team'
          | 'groups,team,company'
          | 'groups,team,company,pay_group'
          | 'groups,team,pay_group'
          | 'groups,work_location'
          | 'groups,work_location,company'
          | 'groups,work_location,company,pay_group'
          | 'groups,work_location,manager'
          | 'groups,work_location,manager,company'
          | 'groups,work_location,manager,company,pay_group'
          | 'groups,work_location,manager,pay_group'
          | 'groups,work_location,manager,team'
          | 'groups,work_location,manager,team,company'
          | 'groups,work_location,manager,team,company,pay_group'
          | 'groups,work_location,manager,team,pay_group'
          | 'groups,work_location,pay_group'
          | 'groups,work_location,team'
          | 'groups,work_location,team,company'
          | 'groups,work_location,team,company,pay_group'
          | 'groups,work_location,team,pay_group'
          | 'home_location'
          | 'home_location,company'
          | 'home_location,company,pay_group'
          | 'home_location,manager'
          | 'home_location,manager,company'
          | 'home_location,manager,company,pay_group'
          | 'home_location,manager,pay_group'
          | 'home_location,manager,team'
          | 'home_location,manager,team,company'
          | 'home_location,manager,team,company,pay_group'
          | 'home_location,manager,team,pay_group'
          | 'home_location,pay_group'
          | 'home_location,team'
          | 'home_location,team,company'
          | 'home_location,team,company,pay_group'
          | 'home_location,team,pay_group'
          | 'home_location,work_location'
          | 'home_location,work_location,company'
          | 'home_location,work_location,company,pay_group'
          | 'home_location,work_location,manager'
          | 'home_location,work_location,manager,company'
          | 'home_location,work_location,manager,company,pay_group'
          | 'home_location,work_location,manager,pay_group'
          | 'home_location,work_location,manager,team'
          | 'home_location,work_location,manager,team,company'
          | 'home_location,work_location,manager,team,company,pay_group'
          | 'home_location,work_location,manager,team,pay_group'
          | 'home_location,work_location,pay_group'
          | 'home_location,work_location,team'
          | 'home_location,work_location,team,company'
          | 'home_location,work_location,team,company,pay_group'
          | 'home_location,work_location,team,pay_group'
          | 'manager'
          | 'manager,company'
          | 'manager,company,pay_group'
          | 'manager,pay_group'
          | 'manager,team'
          | 'manager,team,company'
          | 'manager,team,company,pay_group'
          | 'manager,team,pay_group'
          | 'pay_group'
          | 'team'
          | 'team,company'
          | 'team,company,pay_group'
          | 'team,pay_group'
          | 'work_location'
          | 'work_location,company'
          | 'work_location,company,pay_group'
          | 'work_location,manager'
          | 'work_location,manager,company'
          | 'work_location,manager,company,pay_group'
          | 'work_location,manager,pay_group'
          | 'work_location,manager,team'
          | 'work_location,manager,team,company'
          | 'work_location,manager,team,company,pay_group'
          | 'work_location,manager,team,pay_group'
          | 'work_location,pay_group'
          | 'work_location,team'
          | 'work_location,team,company'
          | 'work_location,team,company,pay_group'
          | 'work_location,team,pay_group'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include sensitive fields (such as social security numbers) in the response. */
        include_sensitive_fields?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'employment_status'
          | 'employment_status,ethnicity'
          | 'employment_status,ethnicity,gender'
          | 'employment_status,ethnicity,gender,marital_status'
          | 'employment_status,ethnicity,marital_status'
          | 'employment_status,gender'
          | 'employment_status,gender,marital_status'
          | 'employment_status,marital_status'
          | 'ethnicity'
          | 'ethnicity,gender'
          | 'ethnicity,gender,marital_status'
          | 'ethnicity,marital_status'
          | 'gender'
          | 'gender,marital_status'
          | 'marital_status'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'employment_status'
          | 'employment_status,ethnicity'
          | 'employment_status,ethnicity,gender'
          | 'employment_status,ethnicity,gender,marital_status'
          | 'employment_status,ethnicity,marital_status'
          | 'employment_status,gender'
          | 'employment_status,gender,marital_status'
          | 'employment_status,marital_status'
          | 'ethnicity'
          | 'ethnicity,gender'
          | 'ethnicity,gender,marital_status'
          | 'ethnicity,marital_status'
          | 'gender'
          | 'gender,marital_status'
          | 'marital_status'
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
          'application/json': components['schemas']['Employee']
        }
      }
    }
  }
  employees_ignore_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        model_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['IgnoreCommonModelRequest']
        'application/x-www-form-urlencoded': components['schemas']['IgnoreCommonModelRequest']
        'multipart/form-data': components['schemas']['IgnoreCommonModelRequest']
      }
    }
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
  employees_meta_post_retrieve: {
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
  employer_benefits_list: {
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
          'application/json': components['schemas']['PaginatedEmployerBenefitList']
        }
      }
    }
  }
  employer_benefits_retrieve: {
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
          'application/json': components['schemas']['EmployerBenefit']
        }
      }
    }
  }
  employments_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return employments for this employee. */
        employee_id?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee' | 'employee,pay_group' | 'pay_group'
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
        /** @description Overrides the default ordering for this endpoint. Possible values include: effective_date, -effective_date. */
        order_by?: '-effective_date' | 'effective_date'
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'employment_type'
          | 'employment_type,flsa_status'
          | 'employment_type,flsa_status,pay_frequency'
          | 'employment_type,flsa_status,pay_frequency,pay_period'
          | 'employment_type,flsa_status,pay_period'
          | 'employment_type,pay_frequency'
          | 'employment_type,pay_frequency,pay_period'
          | 'employment_type,pay_period'
          | 'flsa_status'
          | 'flsa_status,pay_frequency'
          | 'flsa_status,pay_frequency,pay_period'
          | 'flsa_status,pay_period'
          | 'pay_frequency'
          | 'pay_frequency,pay_period'
          | 'pay_period'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'employment_type'
          | 'employment_type,flsa_status'
          | 'employment_type,flsa_status,pay_frequency'
          | 'employment_type,flsa_status,pay_frequency,pay_period'
          | 'employment_type,flsa_status,pay_period'
          | 'employment_type,pay_frequency'
          | 'employment_type,pay_frequency,pay_period'
          | 'employment_type,pay_period'
          | 'flsa_status'
          | 'flsa_status,pay_frequency'
          | 'flsa_status,pay_frequency,pay_period'
          | 'flsa_status,pay_period'
          | 'pay_frequency'
          | 'pay_frequency,pay_period'
          | 'pay_period'
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
          'application/json': components['schemas']['PaginatedEmploymentList']
        }
      }
    }
  }
  employments_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee' | 'employee,pay_group' | 'pay_group'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'employment_type'
          | 'employment_type,flsa_status'
          | 'employment_type,flsa_status,pay_frequency'
          | 'employment_type,flsa_status,pay_frequency,pay_period'
          | 'employment_type,flsa_status,pay_period'
          | 'employment_type,pay_frequency'
          | 'employment_type,pay_frequency,pay_period'
          | 'employment_type,pay_period'
          | 'flsa_status'
          | 'flsa_status,pay_frequency'
          | 'flsa_status,pay_frequency,pay_period'
          | 'flsa_status,pay_period'
          | 'pay_frequency'
          | 'pay_frequency,pay_period'
          | 'pay_period'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'employment_type'
          | 'employment_type,flsa_status'
          | 'employment_type,flsa_status,pay_frequency'
          | 'employment_type,flsa_status,pay_frequency,pay_period'
          | 'employment_type,flsa_status,pay_period'
          | 'employment_type,pay_frequency'
          | 'employment_type,pay_frequency,pay_period'
          | 'employment_type,pay_period'
          | 'flsa_status'
          | 'flsa_status,pay_frequency'
          | 'flsa_status,pay_frequency,pay_period'
          | 'flsa_status,pay_period'
          | 'pay_frequency'
          | 'pay_frequency,pay_period'
          | 'pay_period'
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
          'application/json': components['schemas']['Employment']
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
  groups_list: {
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
        /** @description If provided, specifies whether to return only Group objects which refer to a team in the third party platform. Note that this is an opinionated view based on how a team may be represented in the third party platform. */
        is_commonly_used_as_team?: string
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return groups with these names. Multiple values can be separated by commas. */
        names?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'type'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'type'
        /** @description If provided, will only return groups of these types. Multiple values can be separated by commas. */
        types?: string
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
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'type'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'type'
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
  locations_list: {
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
        /** @description If provided, will only return locations with this location_type
         *
         *     * `HOME` - HOME
         *     * `WORK` - WORK */
        location_type?: 'HOME' | 'WORK' | null
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'country' | 'country,location_type' | 'location_type'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'country'
          | 'country,location_type'
          | 'location_type'
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
          'application/json': components['schemas']['PaginatedLocationList']
        }
      }
    }
  }
  locations_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'country' | 'country,location_type' | 'location_type'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'country'
          | 'country,location_type'
          | 'location_type'
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
          'application/json': components['schemas']['Location']
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
  pay_groups_list: {
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
          'application/json': components['schemas']['PaginatedPayGroupList']
        }
      }
    }
  }
  pay_groups_retrieve: {
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
          'application/json': components['schemas']['PayGroup']
        }
      }
    }
  }
  payroll_runs_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return payroll runs ended after this datetime. */
        ended_after?: string | null
        /** @description If provided, will only return payroll runs ended before this datetime. */
        ended_before?: string | null
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
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'run_state' | 'run_state,run_type' | 'run_type'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return PayrollRun's with this status. Options: ('REGULAR', 'OFF_CYCLE', 'CORRECTION', 'TERMINATION', 'SIGN_ON_BONUS')
         *
         *     * `REGULAR` - REGULAR
         *     * `OFF_CYCLE` - OFF_CYCLE
         *     * `CORRECTION` - CORRECTION
         *     * `TERMINATION` - TERMINATION
         *     * `SIGN_ON_BONUS` - SIGN_ON_BONUS */
        run_type?:
          | 'CORRECTION'
          | 'OFF_CYCLE'
          | 'REGULAR'
          | 'SIGN_ON_BONUS'
          | 'TERMINATION'
          | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'run_state' | 'run_state,run_type' | 'run_type'
        /** @description If provided, will only return payroll runs started after this datetime. */
        started_after?: string | null
        /** @description If provided, will only return payroll runs started before this datetime. */
        started_before?: string | null
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
          'application/json': components['schemas']['PaginatedPayrollRunList']
        }
      }
    }
  }
  payroll_runs_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'run_state' | 'run_state,run_type' | 'run_type'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'run_state' | 'run_state,run_type' | 'run_type'
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
          'application/json': components['schemas']['PayrollRun']
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
  teams_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'parent_team'
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
        /** @description If provided, will only return teams with this parent team. */
        parent_team_id?: string
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
          'application/json': components['schemas']['PaginatedTeamList']
        }
      }
    }
  }
  teams_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'parent_team'
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
          'application/json': components['schemas']['Team']
        }
      }
    }
  }
  time_off_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return time off for this approver. */
        approver_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return time off for this employee. */
        employee_id?: string
        /** @description If provided, will only return employees that ended after this datetime. */
        ended_after?: string | null
        /** @description If provided, will only return time-offs that ended before this datetime. */
        ended_before?: string | null
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'approver' | 'employee' | 'employee,approver'
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
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'request_type'
          | 'request_type,status'
          | 'request_type,status,units'
          | 'request_type,units'
          | 'status'
          | 'status,units'
          | 'units'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return TimeOff with this request type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
         *
         *     * `VACATION` - VACATION
         *     * `SICK` - SICK
         *     * `PERSONAL` - PERSONAL
         *     * `JURY_DUTY` - JURY_DUTY
         *     * `VOLUNTEER` - VOLUNTEER
         *     * `BEREAVEMENT` - BEREAVEMENT */
        request_type?:
          | 'BEREAVEMENT'
          | 'JURY_DUTY'
          | 'PERSONAL'
          | 'SICK'
          | 'VACATION'
          | 'VOLUNTEER'
          | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'request_type'
          | 'request_type,status'
          | 'request_type,status,units'
          | 'request_type,units'
          | 'status'
          | 'status,units'
          | 'units'
        /** @description If provided, will only return time-offs that started after this datetime. */
        started_after?: string | null
        /** @description If provided, will only return time-offs that started before this datetime. */
        started_before?: string | null
        /** @description If provided, will only return TimeOff with this status. Options: ('REQUESTED', 'APPROVED', 'DECLINED', 'CANCELLED', 'DELETED')
         *
         *     * `REQUESTED` - REQUESTED
         *     * `APPROVED` - APPROVED
         *     * `DECLINED` - DECLINED
         *     * `CANCELLED` - CANCELLED
         *     * `DELETED` - DELETED */
        status?:
          | 'APPROVED'
          | 'CANCELLED'
          | 'DECLINED'
          | 'DELETED'
          | 'REQUESTED'
          | null
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
          'application/json': components['schemas']['PaginatedTimeOffList']
        }
      }
    }
  }
  time_off_create: {
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
        'application/json': components['schemas']['TimeOffEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['TimeOffEndpointRequest']
        'multipart/form-data': components['schemas']['TimeOffEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TimeOffResponse']
        }
      }
    }
  }
  time_off_balances_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return time off balances for this employee. */
        employee_id?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee'
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
        /** @description If provided, will only return TimeOffBalance with this policy type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
         *
         *     * `VACATION` - VACATION
         *     * `SICK` - SICK
         *     * `PERSONAL` - PERSONAL
         *     * `JURY_DUTY` - JURY_DUTY
         *     * `VOLUNTEER` - VOLUNTEER
         *     * `BEREAVEMENT` - BEREAVEMENT */
        policy_type?:
          | 'BEREAVEMENT'
          | 'JURY_DUTY'
          | 'PERSONAL'
          | 'SICK'
          | 'VACATION'
          | 'VOLUNTEER'
          | null
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'policy_type'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'policy_type'
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
          'application/json': components['schemas']['PaginatedTimeOffBalanceList']
        }
      }
    }
  }
  time_off_balances_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'policy_type'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'policy_type'
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
          'application/json': components['schemas']['TimeOffBalance']
        }
      }
    }
  }
  time_off_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'approver' | 'employee' | 'employee,approver'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'request_type'
          | 'request_type,status'
          | 'request_type,status,units'
          | 'request_type,units'
          | 'status'
          | 'status,units'
          | 'units'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'request_type'
          | 'request_type,status'
          | 'request_type,status,units'
          | 'request_type,units'
          | 'status'
          | 'status,units'
          | 'units'
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
          'application/json': components['schemas']['TimeOff']
        }
      }
    }
  }
  time_off_meta_post_retrieve: {
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
  timesheet_entries_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return timesheet entries for this employee. */
        employee_id?: string
        /** @description If provided, will only return timesheet entries ended after this datetime. */
        ended_after?: string | null
        /** @description If provided, will only return timesheet entries ended before this datetime. */
        ended_before?: string | null
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee'
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
        /** @description Overrides the default ordering for this endpoint. Possible values include: start_time, -start_time. */
        order_by?: '-start_time' | 'start_time'
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return timesheet entries started after this datetime. */
        started_after?: string | null
        /** @description If provided, will only return timesheet entries started before this datetime. */
        started_before?: string | null
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
          'application/json': components['schemas']['PaginatedTimesheetEntryList']
        }
      }
    }
  }
  timesheet_entries_create: {
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
        'application/json': components['schemas']['TimesheetEntryEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['TimesheetEntryEndpointRequest']
        'multipart/form-data': components['schemas']['TimesheetEntryEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TimesheetEntryResponse']
        }
      }
    }
  }
  timesheet_entries_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'employee'
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
          'application/json': components['schemas']['TimesheetEntry']
        }
      }
    }
  }
  timesheet_entries_meta_post_retrieve: {
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
