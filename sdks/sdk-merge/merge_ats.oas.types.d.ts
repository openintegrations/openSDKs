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
  '/activities': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Activity` objects. */
    get: operations['activities_list']
    put?: never
    /** @description Creates an `Activity` object with the given values. */
    post: operations['activities_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/activities/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Activity` object with the given `id`. */
    get: operations['activities_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/activities/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Activity` POSTs. */
    get: operations['activities_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/applications': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Application` objects. */
    get: operations['applications_list']
    put?: never
    /** @description Creates an `Application` object with the given values.
     *     For certain integrations, but not all, our API detects duplicate candidates and will associate applications with existing records in the third-party. New candidates are created and automatically linked to the application.
     *
     *     See our [Help Center article](https://help.merge.dev/en/articles/10012366-updates-to-post-applications-oct-2024) for detailed support per integration.
     *      */
    post: operations['applications_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/applications/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Application` object with the given `id`. */
    get: operations['applications_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/applications/{id}/change-stage': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Updates the `current_stage` field of an `Application` object */
    post: operations['applications_change_stage_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/applications/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Application` POSTs. */
    get: operations['applications_meta_post_retrieve']
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
  '/attachments': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Attachment` objects. */
    get: operations['attachments_list']
    put?: never
    /** @description Creates an `Attachment` object with the given values. */
    post: operations['attachments_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/attachments/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Attachment` object with the given `id`. */
    get: operations['attachments_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/attachments/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Attachment` POSTs. */
    get: operations['attachments_meta_post_retrieve']
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
  '/candidates': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Candidate` objects. */
    get: operations['candidates_list']
    put?: never
    /** @description Creates a `Candidate` object with the given values. */
    post: operations['candidates_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/candidates/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Candidate` object with the given `id`. */
    get: operations['candidates_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description Updates a `Candidate` object with the given `id`. */
    patch: operations['candidates_partial_update']
    trace?: never
  }
  '/candidates/ignore/{model_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes. */
    post: operations['candidates_ignore_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/candidates/meta/patch/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Candidate` PATCHs. */
    get: operations['candidates_meta_patch_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/candidates/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Candidate` POSTs. */
    get: operations['candidates_meta_post_retrieve']
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
  '/departments': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Department` objects. */
    get: operations['departments_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/departments/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Department` object with the given `id`. */
    get: operations['departments_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/eeocs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `EEOC` objects. */
    get: operations['eeocs_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/eeocs/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `EEOC` object with the given `id`. */
    get: operations['eeocs_retrieve']
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
  '/interviews': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `ScheduledInterview` objects. */
    get: operations['interviews_list']
    put?: never
    /** @description Creates a `ScheduledInterview` object with the given values. */
    post: operations['interviews_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/interviews/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `ScheduledInterview` object with the given `id`. */
    get: operations['interviews_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/interviews/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `ScheduledInterview` POSTs. */
    get: operations['interviews_meta_post_retrieve']
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
  '/job-interview-stages': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `JobInterviewStage` objects. */
    get: operations['job_interview_stages_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job-interview-stages/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `JobInterviewStage` object with the given `id`. */
    get: operations['job_interview_stages_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job-postings': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `JobPosting` objects. */
    get: operations['job_postings_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job-postings/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `JobPosting` object with the given `id`. */
    get: operations['job_postings_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/jobs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Job` objects. */
    get: operations['jobs_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/jobs/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Job` object with the given `id`. */
    get: operations['jobs_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/jobs/{job_id}/screening-questions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `ScreeningQuestion` objects. */
    get: operations['jobs_screening_questions_list']
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
  '/offers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Offer` objects. */
    get: operations['offers_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/offers/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Offer` object with the given `id`. */
    get: operations['offers_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/offices': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Office` objects. */
    get: operations['offices_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/offices/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Office` object with the given `id`. */
    get: operations['offices_retrieve']
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
  '/reject-reasons': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RejectReason` objects. */
    get: operations['reject_reasons_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/reject-reasons/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `RejectReason` object with the given `id`. */
    get: operations['reject_reasons_retrieve']
    put?: never
    post?: never
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
  '/scorecards': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Scorecard` objects. */
    get: operations['scorecards_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/scorecards/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Scorecard` object with the given `id`. */
    get: operations['scorecards_retrieve']
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
  '/tags': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Tag` objects. */
    get: operations['tags_list']
    put?: never
    post?: never
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
    /** @description Returns a list of `RemoteUser` objects. */
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
    /** @description Returns a `RemoteUser` object with the given `id`. */
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
    /**
     * @description * `SUPER_ADMIN` - SUPER_ADMIN
     *     * `ADMIN` - ADMIN
     *     * `TEAM_MEMBER` - TEAM_MEMBER
     *     * `LIMITED_TEAM_MEMBER` - LIMITED_TEAM_MEMBER
     *     * `INTERVIEWER` - INTERVIEWER
     * @enum {string}
     */
    AccessRoleEnum:
      | 'SUPER_ADMIN'
      | 'ADMIN'
      | 'TEAM_MEMBER'
      | 'LIMITED_TEAM_MEMBER'
      | 'INTERVIEWER'
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
    /** @description # The Activity Object
     *     ### Description
     *     The `Activity` object is used to represent an activity for a candidate performed by a user.
     *     ### Usage Example
     *     Fetch from the `LIST Activities` endpoint and filter by `ID` to show all activities. */
    Activity: {
      /**
       * Format: uuid
       * @example ecbe05ac-62a3-46c5-ab31-4b478b37d1b4
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 198123
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
       * @description The user that performed the action.
       * @example 9d892439-5fab-4dbb-8bd8-34f7f96c7912
       */
      user?: string | null
      /**
       * Format: date-time
       * @description When the third party's activity was created.
       * @example 2021-10-15T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * @description The activity's type.
       *
       *     * `NOTE` - NOTE
       *     * `EMAIL` - EMAIL
       *     * `OTHER` - OTHER
       * @example NOTE
       */
      activity_type?: components['schemas']['ActivityTypeEnum'] | null
      /**
       * @description The activity's subject.
       * @example Gil Feig's interview
       */
      subject?: string | null
      /**
       * @description The activity's body.
       * @example Candidate loves integrations!
       */
      body?: string | null
      /**
       * @description The activity's visibility.
       *
       *     * `ADMIN_ONLY` - ADMIN_ONLY
       *     * `PUBLIC` - PUBLIC
       *     * `PRIVATE` - PRIVATE
       * @example PRIVATE
       */
      visibility?: components['schemas']['VisibilityEnum'] | null
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
       */
      candidate?: string | null
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
    ActivityEndpointRequest: {
      model: components['schemas']['ActivityRequest']
      remote_user_id: string
    }
    /** @description # The Activity Object
     *     ### Description
     *     The `Activity` object is used to represent an activity for a candidate performed by a user.
     *     ### Usage Example
     *     Fetch from the `LIST Activities` endpoint and filter by `ID` to show all activities. */
    ActivityRequest: {
      /**
       * Format: uuid
       * @description The user that performed the action.
       * @example 9d892439-5fab-4dbb-8bd8-34f7f96c7912
       */
      user?: string | null
      /**
       * @description The activity's type.
       *
       *     * `NOTE` - NOTE
       *     * `EMAIL` - EMAIL
       *     * `OTHER` - OTHER
       * @example NOTE
       */
      activity_type?: components['schemas']['ActivityTypeEnum'] | null
      /**
       * @description The activity's subject.
       * @example Gil Feig's interview
       */
      subject?: string | null
      /**
       * @description The activity's body.
       * @example Candidate loves integrations!
       */
      body?: string | null
      /**
       * @description The activity's visibility.
       *
       *     * `ADMIN_ONLY` - ADMIN_ONLY
       *     * `PUBLIC` - PUBLIC
       *     * `PRIVATE` - PRIVATE
       * @example PRIVATE
       */
      visibility?: components['schemas']['VisibilityEnum'] | null
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
       */
      candidate?: string | null
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
    ActivityResponse: {
      model: components['schemas']['Activity']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `NOTE` - NOTE
     *     * `EMAIL` - EMAIL
     *     * `OTHER` - OTHER
     * @enum {string}
     */
    ActivityTypeEnum: 'NOTE' | 'EMAIL' | 'OTHER'
    AdvancedMetadata: {
      /** Format: uuid */
      id: string
      display_name?: string
      description?: string
      is_required?: boolean
      is_custom?: boolean
      field_choices?: unknown[]
    }
    /** @description # The Application Object
     *     ### Description
     *     The Application Object is used to represent a candidate's journey through a particular Job's recruiting process. If a Candidate applies for multiple Jobs, there will be a separate Application for each Job if the third-party integration allows it.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Applications` endpoint and filter by `ID` to show all applications. */
    Application: {
      /**
       * Format: uuid
       * @example 92e8a369-fffe-430d-b93a-f7e8a16563f1
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 98796
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
       * @description The candidate applying.
       * @example 2872ba14-4084-492b-be96-e5eee6fc33ef
       */
      candidate?: string | null
      /**
       * Format: uuid
       * @description The job being applied for.
       * @example 52bf9b5e-0beb-4f6f-8a72-cd4dca7ca633
       */
      job?: string | null
      /**
       * Format: date-time
       * @description When the application was submitted.
       * @example 2021-10-15T00:00:00Z
       */
      applied_at?: string | null
      /**
       * Format: date-time
       * @description When the application was rejected.
       * @example 2021-11-15T00:00:00Z
       */
      rejected_at?: string | null
      /** @example [
       *       "e9b5c11d-c588-468e-8567-cd6992e42b62"
       *     ] */
      offers?: (string | null)[]
      /**
       * @description The application's source.
       * @example Campus recruiting event
       */
      source?: string | null
      /**
       * Format: uuid
       * @description The user credited for this application.
       * @example 58166795-8d68-4b30-9bfb-bfd402479484
       */
      credited_to?: string | null
      /** @example [
       *       {
       *         "question": "0238cbc6-6040-430a-848e-aaiehfhdbadf4ae",
       *         "answer": "5+ years experience"
       *       },
       *       {
       *         "question": "59982bf6-7c54-4ff8-ab60-ced0bb644b84",
       *         "answer": "New york city"
       *       }
       *     ] */
      screening_question_answers?: components['schemas']['ScreeningQuestionAnswer'][]
      /**
       * Format: uuid
       * @description The application's current stage.
       * @example d578dfdc-7b0a-4ab6-a2b0-4b40f20eb9ea
       */
      current_stage?: string | null
      /**
       * Format: uuid
       * @description The application's reason for rejection.
       * @example 59b25f2b-da02-40f5-9656-9fa0db555784
       */
      reject_reason?: string | null
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
       *         "path": "/candidacies",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    ApplicationEndpointRequest: {
      model: components['schemas']['ApplicationRequest']
      remote_user_id: string
    }
    /** @description # The Application Object
     *     ### Description
     *     The Application Object is used to represent a candidate's journey through a particular Job's recruiting process. If a Candidate applies for multiple Jobs, there will be a separate Application for each Job if the third-party integration allows it.
     *
     *     ### Usage Example
     *     Fetch from the `LIST Applications` endpoint and filter by `ID` to show all applications. */
    ApplicationRequest: {
      /**
       * Format: uuid
       * @description The candidate applying.
       * @example 2872ba14-4084-492b-be96-e5eee6fc33ef
       */
      candidate?: string | null
      /**
       * Format: uuid
       * @description The job being applied for.
       * @example 52bf9b5e-0beb-4f6f-8a72-cd4dca7ca633
       */
      job?: string | null
      /**
       * Format: date-time
       * @description When the application was submitted.
       * @example 2021-10-15T00:00:00Z
       */
      applied_at?: string | null
      /**
       * Format: date-time
       * @description When the application was rejected.
       * @example 2021-11-15T00:00:00Z
       */
      rejected_at?: string | null
      /** @example [
       *       "e9b5c11d-c588-468e-8567-cd6992e42b62"
       *     ] */
      offers?: (string | null)[]
      /**
       * @description The application's source.
       * @example Campus recruiting event
       */
      source?: string | null
      /**
       * Format: uuid
       * @description The user credited for this application.
       * @example 58166795-8d68-4b30-9bfb-bfd402479484
       */
      credited_to?: string | null
      /** @example [
       *       {
       *         "question": "0238cbc6-6040-430a-848e-aaiehfhdbadf4ae",
       *         "answer": "5+ years experience"
       *       },
       *       {
       *         "question": "59982bf6-7c54-4ff8-ab60-ced0bb644b84",
       *         "answer": "New york city"
       *       }
       *     ] */
      screening_question_answers?: components['schemas']['ScreeningQuestionAnswerRequest'][]
      /**
       * Format: uuid
       * @description The application's current stage.
       * @example d578dfdc-7b0a-4ab6-a2b0-4b40f20eb9ea
       */
      current_stage?: string | null
      /**
       * Format: uuid
       * @description The application's reason for rejection.
       * @example 59b25f2b-da02-40f5-9656-9fa0db555784
       */
      reject_reason?: string | null
      /** @example 92830948203 */
      remote_template_id?: string | null
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
    ApplicationResponse: {
      model: components['schemas']['Application']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    AsyncPassthroughReciept: {
      /**
       * Format: uuid
       * @example fd29020f-2695-445e-922e-dcd5e81903fd
       */
      async_passthrough_receipt_id: string
    }
    /** @description # The Attachment Object
     *     ### Description
     *     The `Attachment` object is used to represent a file attached to a candidate.
     *     ### Usage Example
     *     Fetch from the `LIST Attachments` endpoint and view attachments accessible by a company. */
    Attachment: {
      /**
       * Format: uuid
       * @example c640b80b-fac9-409f-aa19-1f9221aec445
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 11167
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
       * @description The attachment's name.
       * @example Candidate Resume
       */
      file_name?: string | null
      /**
       * Format: uri
       * @description The attachment's url.
       * @example http://alturl.com/p749b
       */
      file_url?: string | null
      /**
       * Format: uuid
       * @example 2872ba14-4084-492b-be96-e5eee6fc33ef
       */
      candidate?: string | null
      /**
       * @description The attachment's type.
       *
       *     * `RESUME` - RESUME
       *     * `COVER_LETTER` - COVER_LETTER
       *     * `OFFER_LETTER` - OFFER_LETTER
       *     * `OTHER` - OTHER
       * @example RESUME
       */
      attachment_type?: components['schemas']['AttachmentTypeEnum'] | null
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
       *         "path": "/attachments",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    AttachmentEndpointRequest: {
      model: components['schemas']['AttachmentRequest']
      remote_user_id: string
    }
    /** @description # The Attachment Object
     *     ### Description
     *     The `Attachment` object is used to represent a file attached to a candidate.
     *     ### Usage Example
     *     Fetch from the `LIST Attachments` endpoint and view attachments accessible by a company. */
    AttachmentRequest: {
      /**
       * @description The attachment's name.
       * @example Candidate Resume
       */
      file_name?: string | null
      /**
       * Format: uri
       * @description The attachment's url.
       * @example http://alturl.com/p749b
       */
      file_url?: string | null
      /**
       * Format: uuid
       * @example 2872ba14-4084-492b-be96-e5eee6fc33ef
       */
      candidate?: string | null
      /**
       * @description The attachment's type.
       *
       *     * `RESUME` - RESUME
       *     * `COVER_LETTER` - COVER_LETTER
       *     * `OFFER_LETTER` - OFFER_LETTER
       *     * `OTHER` - OTHER
       * @example RESUME
       */
      attachment_type?: components['schemas']['AttachmentTypeEnum'] | null
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
    AttachmentResponse: {
      model: components['schemas']['Attachment']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `RESUME` - RESUME
     *     * `COVER_LETTER` - COVER_LETTER
     *     * `OFFER_LETTER` - OFFER_LETTER
     *     * `OTHER` - OTHER
     * @enum {string}
     */
    AttachmentTypeEnum: 'RESUME' | 'COVER_LETTER' | 'OFFER_LETTER' | 'OTHER'
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
    /** @description # The Candidate Object
     *     ### Description
     *     The `Candidate` object is used to represent profile information about a given Candidate. Because it is specific to a Candidate, this information stays constant across applications.
     *     ### Usage Example
     *     Fetch from the `LIST Candidates` endpoint and filter by `ID` to show all candidates. */
    Candidate: {
      /**
       * Format: uuid
       * @example 521b18c2-4d01-4297-b451-19858d07c133
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 21198
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
       * @description The candidate's first name.
       * @example Gil
       */
      first_name?: string | null
      /**
       * @description The candidate's last name.
       * @example Feig
       */
      last_name?: string | null
      /**
       * @description The candidate's current company.
       * @example Columbia Dining App.
       */
      company?: string | null
      /**
       * @description The candidate's current title.
       * @example Software Engineer
       */
      title?: string | null
      /**
       * Format: date-time
       * @description When the third party's candidate was created.
       * @example 2021-10-15T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's candidate was updated.
       * @example 2021-10-16T00:00:00Z
       */
      remote_updated_at?: string | null
      /**
       * Format: date-time
       * @description When the most recent interaction with the candidate occurred.
       * @example 2021-10-17T00:00:00Z
       */
      last_interaction_at?: string | null
      /**
       * @description Whether or not the candidate is private.
       * @example true
       */
      is_private?: boolean | null
      /**
       * @description Whether or not the candidate can be emailed.
       * @example true
       */
      can_email?: boolean | null
      /**
       * @description The candidate's locations.
       * @example [
       *       "San Francisco",
       *       "New York",
       *       "Miami"
       *     ]
       */
      locations?: (string | null)[] | null
      /** @example [
       *       {
       *         "value": "+1234567890",
       *         "phone_number_type": "MOBILE"
       *       }
       *     ] */
      phone_numbers?: components['schemas']['PhoneNumber'][]
      /** @example [
       *       {
       *         "value": "hello@merge.dev",
       *         "email_address_type": "PERSONAL"
       *       }
       *     ] */
      email_addresses?: components['schemas']['EmailAddress'][]
      /** @example [
       *       {
       *         "value": "http://alturl.com/p749b",
       *         "url_type": "BLOG"
       *       }
       *     ] */
      urls?: components['schemas']['Url'][]
      /**
       * @description Array of `Tag` names as strings.
       * @example [
       *       "High-Priority"
       *     ]
       */
      tags?: (string | null)[]
      /**
       * @description Array of `Application` object IDs.
       * @example [
       *       "29eb9867-ce2a-403f-b8ce-f2844b89f078",
       *       "b4d08e5c-de00-4d64-a29f-66addac9af99",
       *       "4ff877d2-fb3e-4a5b-a7a5-168ddf2ffa56"
       *     ]
       */
      applications?: (string | null)[]
      /**
       * @description Array of `Attachment` object IDs.
       * @example [
       *       "bea08964-32b4-4a20-8bb4-2612ba09de1d"
       *     ]
       */
      attachments?: (string | null)[]
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
       *         "path": "/candidates",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    CandidateEndpointRequest: {
      model: components['schemas']['CandidateRequest']
      remote_user_id: string
    }
    /** @description # The Candidate Object
     *     ### Description
     *     The `Candidate` object is used to represent profile information about a given Candidate. Because it is specific to a Candidate, this information stays constant across applications.
     *     ### Usage Example
     *     Fetch from the `LIST Candidates` endpoint and filter by `ID` to show all candidates. */
    CandidateRequest: {
      /**
       * @description The candidate's first name.
       * @example Gil
       */
      first_name?: string | null
      /**
       * @description The candidate's last name.
       * @example Feig
       */
      last_name?: string | null
      /**
       * @description The candidate's current company.
       * @example Columbia Dining App.
       */
      company?: string | null
      /**
       * @description The candidate's current title.
       * @example Software Engineer
       */
      title?: string | null
      /**
       * Format: date-time
       * @description When the most recent interaction with the candidate occurred.
       * @example 2021-10-17T00:00:00Z
       */
      last_interaction_at?: string | null
      /**
       * @description Whether or not the candidate is private.
       * @example true
       */
      is_private?: boolean | null
      /**
       * @description Whether or not the candidate can be emailed.
       * @example true
       */
      can_email?: boolean | null
      /**
       * @description The candidate's locations.
       * @example [
       *       "San Francisco",
       *       "New York",
       *       "Miami"
       *     ]
       */
      locations?: (string | null)[] | null
      /** @example [
       *       {
       *         "value": "+1234567890",
       *         "phone_number_type": "MOBILE"
       *       }
       *     ] */
      phone_numbers?: components['schemas']['PhoneNumberRequest'][]
      /** @example [
       *       {
       *         "value": "hello@merge.dev",
       *         "email_address_type": "PERSONAL"
       *       }
       *     ] */
      email_addresses?: components['schemas']['EmailAddressRequest'][]
      /** @example [
       *       {
       *         "value": "http://alturl.com/p749b",
       *         "url_type": "BLOG"
       *       }
       *     ] */
      urls?: components['schemas']['UrlRequest'][]
      /**
       * @description Array of `Tag` names as strings.
       * @example [
       *       "High-Priority"
       *     ]
       */
      tags?: (string | null)[]
      /**
       * @description Array of `Application` object IDs.
       * @example [
       *       "29eb9867-ce2a-403f-b8ce-f2844b89f078",
       *       "b4d08e5c-de00-4d64-a29f-66addac9af99",
       *       "4ff877d2-fb3e-4a5b-a7a5-168ddf2ffa56"
       *     ]
       */
      applications?: (string | null)[]
      /**
       * @description Array of `Attachment` object IDs.
       * @example [
       *       "bea08964-32b4-4a20-8bb4-2612ba09de1d"
       *     ]
       */
      attachments?: (string | null)[]
      /** @example 92830948203 */
      remote_template_id?: string | null
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
    CandidateResponse: {
      model: components['schemas']['Candidate']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
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
    /** @description # The Department Object
     *     ### Description
     *     The `Department` object is used to represent a department within a company.
     *     ### Usage Example
     *     Fetch from the `LIST Departments` endpoint and view the departments within a company. */
    Department: {
      /**
       * Format: uuid
       * @example 5b3c1341-a20f-4e51-b72c-f3830a16c97b
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 23456
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
       * @description The department's name.
       * @example Engineering
       */
      name?: string | null
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
       *         "path": "/departments",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY` - YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY
     *     * `NO_I_DONT_HAVE_A_DISABILITY` - NO_I_DONT_HAVE_A_DISABILITY
     *     * `I_DONT_WISH_TO_ANSWER` - I_DONT_WISH_TO_ANSWER
     * @enum {string}
     */
    DisabilityStatusEnum:
      | 'YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY'
      | 'NO_I_DONT_HAVE_A_DISABILITY'
      | 'I_DONT_WISH_TO_ANSWER'
    /** @description # The EEOC Object
     *     ### Description
     *     The `EEOC` object is used to represent the Equal Employment Opportunity Commission information for a candidate (race, gender, veteran status, disability status).
     *     ### Usage Example
     *     Fetch from the `LIST EEOCs` endpoint and filter by `candidate` to show all EEOC information for a candidate. */
    EEOC: {
      /**
       * Format: uuid
       * @example f7dd7b4f-237e-4772-8bd4-3246384c6c58
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 76
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
       * @description The candidate being represented.
       * @example f963f34d-3d2f-4f77-b557-cf36bc7e6498
       */
      candidate?: string | null
      /**
       * Format: date-time
       * @description When the information was submitted.
       * @example 2021-10-15T00:00:00Z
       */
      submitted_at?: string | null
      /**
       * @description The candidate's race.
       *
       *     * `AMERICAN_INDIAN_OR_ALASKAN_NATIVE` - AMERICAN_INDIAN_OR_ALASKAN_NATIVE
       *     * `ASIAN` - ASIAN
       *     * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
       *     * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
       *     * `WHITE` - WHITE
       *     * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
       *     * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
       *     * `DECLINE_TO_SELF_IDENTIFY` - DECLINE_TO_SELF_IDENTIFY
       * @example HISPANIC_OR_LATINO
       */
      race?: components['schemas']['RaceEnum'] | null
      /**
       * @description The candidate's gender.
       *
       *     * `MALE` - MALE
       *     * `FEMALE` - FEMALE
       *     * `NON-BINARY` - NON-BINARY
       *     * `OTHER` - OTHER
       *     * `DECLINE_TO_SELF_IDENTIFY` - DECLINE_TO_SELF_IDENTIFY
       * @example FEMALE
       */
      gender?: components['schemas']['GenderEnum'] | null
      /**
       * @description The candidate's veteran status.
       *
       *     * `I_AM_NOT_A_PROTECTED_VETERAN` - I_AM_NOT_A_PROTECTED_VETERAN
       *     * `I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN` - I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN
       *     * `I_DONT_WISH_TO_ANSWER` - I_DONT_WISH_TO_ANSWER
       * @example I_AM_NOT_A_PROTECTED_VETERAN
       */
      veteran_status?: components['schemas']['VeteranStatusEnum'] | null
      /**
       * @description The candidate's disability status.
       *
       *     * `YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY` - YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY
       *     * `NO_I_DONT_HAVE_A_DISABILITY` - NO_I_DONT_HAVE_A_DISABILITY
       *     * `I_DONT_WISH_TO_ANSWER` - I_DONT_WISH_TO_ANSWER
       * @example I_DONT_WISH_TO_ANSWER
       */
      disability_status?: components['schemas']['DisabilityStatusEnum'] | null
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
       *         "path": "/eeoc",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The EmailAddress Object
     *     ### Description
     *     The `EmailAddress` object is used to represent a candidate's email address.
     *     ### Usage Example
     *     Fetch from the `GET Candidate` endpoint and view their email addresses. */
    EmailAddress: {
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
       * Format: email
       * @description The email address.
       * @example merge_is_hiring@merge.dev
       */
      value?: string | null
      /**
       * @description The type of email address.
       *
       *     * `PERSONAL` - PERSONAL
       *     * `WORK` - WORK
       *     * `OTHER` - OTHER
       * @example PERSONAL
       */
      email_address_type?: components['schemas']['EmailAddressTypeEnum'] | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
    }
    /** @description # The EmailAddress Object
     *     ### Description
     *     The `EmailAddress` object is used to represent a candidate's email address.
     *     ### Usage Example
     *     Fetch from the `GET Candidate` endpoint and view their email addresses. */
    EmailAddressRequest: {
      /**
       * Format: email
       * @description The email address.
       * @example merge_is_hiring@merge.dev
       */
      value?: string | null
      /**
       * @description The type of email address.
       *
       *     * `PERSONAL` - PERSONAL
       *     * `WORK` - WORK
       *     * `OTHER` - OTHER
       * @example PERSONAL
       */
      email_address_type?: components['schemas']['EmailAddressTypeEnum'] | null
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
     * @description * `PERSONAL` - PERSONAL
     *     * `WORK` - WORK
     *     * `OTHER` - OTHER
     * @enum {string}
     */
    EmailAddressTypeEnum: 'PERSONAL' | 'WORK' | 'OTHER'
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
      Activity?: components['schemas']['ExternalTargetFieldAPI'][]
      Application?: components['schemas']['ExternalTargetFieldAPI'][]
      Attachment?: components['schemas']['ExternalTargetFieldAPI'][]
      Candidate?: components['schemas']['ExternalTargetFieldAPI'][]
      Department?: components['schemas']['ExternalTargetFieldAPI'][]
      EEOC?: components['schemas']['ExternalTargetFieldAPI'][]
      ScheduledInterview?: components['schemas']['ExternalTargetFieldAPI'][]
      Job?: components['schemas']['ExternalTargetFieldAPI'][]
      JobPosting?: components['schemas']['ExternalTargetFieldAPI'][]
      JobInterviewStage?: components['schemas']['ExternalTargetFieldAPI'][]
      Offer?: components['schemas']['ExternalTargetFieldAPI'][]
      Office?: components['schemas']['ExternalTargetFieldAPI'][]
      RejectReason?: components['schemas']['ExternalTargetFieldAPI'][]
      Scorecard?: components['schemas']['ExternalTargetFieldAPI'][]
      Tag?: components['schemas']['ExternalTargetFieldAPI'][]
      RemoteUser?: components['schemas']['ExternalTargetFieldAPI'][]
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
      Activity?: components['schemas']['FieldMappingApiInstance'][]
      Application?: components['schemas']['FieldMappingApiInstance'][]
      Attachment?: components['schemas']['FieldMappingApiInstance'][]
      Candidate?: components['schemas']['FieldMappingApiInstance'][]
      Department?: components['schemas']['FieldMappingApiInstance'][]
      EEOC?: components['schemas']['FieldMappingApiInstance'][]
      ScheduledInterview?: components['schemas']['FieldMappingApiInstance'][]
      Job?: components['schemas']['FieldMappingApiInstance'][]
      JobPosting?: components['schemas']['FieldMappingApiInstance'][]
      JobInterviewStage?: components['schemas']['FieldMappingApiInstance'][]
      Offer?: components['schemas']['FieldMappingApiInstance'][]
      Office?: components['schemas']['FieldMappingApiInstance'][]
      RejectReason?: components['schemas']['FieldMappingApiInstance'][]
      Scorecard?: components['schemas']['FieldMappingApiInstance'][]
      Tag?: components['schemas']['FieldMappingApiInstance'][]
      RemoteUser?: components['schemas']['FieldMappingApiInstance'][]
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
     * @description * `MALE` - MALE
     *     * `FEMALE` - FEMALE
     *     * `NON-BINARY` - NON-BINARY
     *     * `OTHER` - OTHER
     *     * `DECLINE_TO_SELF_IDENTIFY` - DECLINE_TO_SELF_IDENTIFY
     * @enum {string}
     */
    GenderEnum:
      | 'MALE'
      | 'FEMALE'
      | 'NON-BINARY'
      | 'OTHER'
      | 'DECLINE_TO_SELF_IDENTIFY'
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
    /** @description # The Job Object
     *     ### Description
     *     The `Job` object can be used to track any jobs that are currently or will be open/closed for applications.
     *     ### Usage Example
     *     Fetch from the `LIST Jobs` endpoint to show all job postings. */
    Job: {
      /**
       * Format: uuid
       * @example 022a2bef-57e5-4def-8ed2-7c41bd9a5ed8
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 8765432
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
       * @description The job's name.
       * @example Software Engineer (Merge is actually hiring btw)
       */
      name?: string | null
      /**
       * @description The job's description.
       * @example <b>If you're reading this documentation, you might be a good fit for Merge!</b>
       */
      description?: string | null
      /**
       * @description The job's code. Typically an additional identifier used to reference the particular job that is displayed on the ATS.
       * @example C0025
       */
      code?: string | null
      /**
       * @description The job's status.
       *
       *     * `OPEN` - OPEN
       *     * `CLOSED` - CLOSED
       *     * `DRAFT` - DRAFT
       *     * `ARCHIVED` - ARCHIVED
       *     * `PENDING` - PENDING
       * @example OPEN
       */
      status?: components['schemas']['JobStatusEnum'] | null
      /**
       * @description The job's type.
       *
       *     * `POSTING` - POSTING
       *     * `REQUISITION` - REQUISITION
       *     * `PROFILE` - PROFILE
       * @example POSTING
       */
      type?: components['schemas']['JobTypeEnum'] | null
      /**
       * @description IDs of `JobPosting` objects that serve as job postings for this `Job`.
       * @example [
       *       "2r3c1341-a20f-4e51-b72c-f3830a16c97b",
       *       "543ed912-33ec-444e-a215-8d71cc42fc12"
       *     ]
       */
      job_postings?: (string | null)[]
      /** @example [
       *       {
       *         "value": "https://merge.dev/careers",
       *         "url_type": "JOB_POSTING"
       *       }
       *     ] */
      job_posting_urls?: components['schemas']['Url'][]
      /**
       * Format: date-time
       * @description When the third party's job was created.
       * @example 2021-10-15T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's job was updated.
       * @example 2021-10-16T00:00:00Z
       */
      remote_updated_at?: string | null
      /**
       * @description Whether the job is confidential.
       * @example true
       */
      confidential?: boolean | null
      /**
       * @description IDs of `Department` objects for this `Job`.
       * @example [
       *       "5b3c1341-a20f-4e51-b72c-f3830a16c97b",
       *       "d6e687d6-0c36-48a1-8114-35324b5cb38f"
       *     ]
       */
      departments?: (string | null)[]
      /**
       * @description IDs of `Office` objects for this `Job`.
       * @example [
       *       "9871b4a9-f5d2-4f3b-a66b-dfedbed42c46"
       *     ]
       */
      offices?: (string | null)[]
      /**
       * @description IDs of `RemoteUser` objects that serve as hiring managers for this `Job`.
       * @example [
       *       "787ed912-33ec-444e-a215-8d71cc42fc12"
       *     ]
       */
      hiring_managers?: (string | null)[]
      /**
       * @description IDs of `RemoteUser` objects that serve as recruiters for this `Job`.
       * @example [
       *       "787ed912-33ec-444e-a215-8d71cc42fc12"
       *     ]
       */
      recruiters?: (string | null)[]
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
       *         "path": "/positions",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The JobInterviewStage Object
     *     ### Description
     *     The `JobInterviewStage` object is used to represent a particular recruiting stage for an `Application`. A given `Application` typically has the `JobInterviewStage` object represented in the current_stage field.
     *     ### Usage Example
     *     Fetch from the `LIST JobInterviewStages` endpoint and view the job interview stages used by a company. */
    JobInterviewStage: {
      /**
       * Format: uuid
       * @example f9813dd5-e70b-484c-91d8-00acd6065b07
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 876556788
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
       * @description Standard stage names are offered by ATS systems but can be modified by users.
       * @example Phone Screen
       */
      name?: string | null
      /**
       * Format: uuid
       * @description This field is populated only if the stage is specific to a particular job. If the stage is generic, this field will not be populated.
       * @example ba7d9648-5316-4a80-8d73-4e636cef5a90
       */
      job?: string | null
      /**
       * @description The stage’s order, with the lowest values ordered first. If the third-party does not return details on the order of stages, this field will not be populated.
       * @example 2
       */
      stage_order?: number | null
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
       *         "path": "/interview-stages",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The JobPosting Object
     *     ### Description
     *     The `JobPosting` object represents an external announcement on a job board created by an organization to attract qualified candidates to apply for a specific `Job` opening
     *     ### Usage Example
     *     Fetch from the `LIST JobPostings` endpoint to show all job postings. */
    JobPosting: {
      /**
       * Format: uuid
       * @example 156a2bef-57e5-4def-8ed2-7c41bd9a554t
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 1341324
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
       * @description The job posting’s title.
       * @example Platform - NYC
       */
      title?: string | null
      /**
       * @description The Url object is used to represent hyperlinks for a candidate to apply to a given job.
       * @example [
       *       {
       *         "value": "https://merge.dev/careers",
       *         "url_type": "JOB_POSTING"
       *       }
       *     ]
       */
      job_posting_urls?: components['schemas']['Url'][]
      /**
       * Format: uuid
       * @description ID of `Job` object for this `JobPosting`.
       * @example 022a2bef-57e5-4def-8ed2-7c41bd9a5ed8
       */
      job?: string | null
      /**
       * @description The job posting's status.
       *
       *     * `PUBLISHED` - PUBLISHED
       *     * `CLOSED` - CLOSED
       *     * `DRAFT` - DRAFT
       *     * `INTERNAL` - INTERNAL
       *     * `PENDING` - PENDING
       * @example PUBLISHED
       */
      status?: components['schemas']['JobPostingStatusEnum'] | null
      /**
       * @description The job posting’s content.
       * @example Apply at https://merge.dev/careers
       */
      content?: string | null
      /**
       * Format: date-time
       * @description When the third party's job posting was created.
       * @example 2021-10-15T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's job posting was updated.
       * @example 2021-10-16T00:00:00Z
       */
      remote_updated_at?: string | null
      /** @description Indicates whether the job posting is internal or external. */
      is_internal?: boolean | null
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
       *         "path": "/positions",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `PUBLISHED` - PUBLISHED
     *     * `CLOSED` - CLOSED
     *     * `DRAFT` - DRAFT
     *     * `INTERNAL` - INTERNAL
     *     * `PENDING` - PENDING
     * @enum {string}
     */
    JobPostingStatusEnum:
      | 'PUBLISHED'
      | 'CLOSED'
      | 'DRAFT'
      | 'INTERNAL'
      | 'PENDING'
    /**
     * @description * `OPEN` - OPEN
     *     * `CLOSED` - CLOSED
     *     * `DRAFT` - DRAFT
     *     * `ARCHIVED` - ARCHIVED
     *     * `PENDING` - PENDING
     * @enum {string}
     */
    JobStatusEnum: 'OPEN' | 'CLOSED' | 'DRAFT' | 'ARCHIVED' | 'PENDING'
    /**
     * @description * `POSTING` - POSTING
     *     * `REQUISITION` - REQUISITION
     *     * `PROFILE` - PROFILE
     * @enum {string}
     */
    JobTypeEnum: 'POSTING' | 'REQUISITION' | 'PROFILE'
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
    /** @description # The Offer Object
     *     ### Description
     *     The `Offer` object is used to represent an offer for a candidate's application specific to a job.
     *     ### Usage Example
     *     Fetch from the `LIST Offers` endpoint and filter by `ID` to show all offers. */
    Offer: {
      /**
       * Format: uuid
       * @example dd85625c-6a59-446f-a317-6de64d83bae7
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 9876
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
       * @description The application who is receiving the offer.
       * @example 2872ba14-4084-492b-be96-e5eee6fc33ef
       */
      application?: string | null
      /**
       * Format: uuid
       * @description The user who created the offer.
       * @example 52bf9b5e-0beb-4f6f-8a72-cd4dca7ca633
       */
      creator?: string | null
      /**
       * Format: date-time
       * @description When the third party's offer was created.
       * @example 2021-10-15T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the offer was closed.
       * @example 2021-10-16T00:00:00Z
       */
      closed_at?: string | null
      /**
       * Format: date-time
       * @description When the offer was sent.
       * @example 2021-10-15T00:00:00Z
       */
      sent_at?: string | null
      /**
       * Format: date-time
       * @description The employment start date on the offer.
       * @example 2021-11-15T00:00:00Z
       */
      start_date?: string | null
      /**
       * @description The offer's status.
       *
       *     * `DRAFT` - DRAFT
       *     * `APPROVAL-SENT` - APPROVAL-SENT
       *     * `APPROVED` - APPROVED
       *     * `SENT` - SENT
       *     * `SENT-MANUALLY` - SENT-MANUALLY
       *     * `OPENED` - OPENED
       *     * `DENIED` - DENIED
       *     * `SIGNED` - SIGNED
       *     * `DEPRECATED` - DEPRECATED
       * @example SENT
       */
      status?: components['schemas']['OfferStatusEnum'] | null
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
       *         "path": "/offers",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `DRAFT` - DRAFT
     *     * `APPROVAL-SENT` - APPROVAL-SENT
     *     * `APPROVED` - APPROVED
     *     * `SENT` - SENT
     *     * `SENT-MANUALLY` - SENT-MANUALLY
     *     * `OPENED` - OPENED
     *     * `DENIED` - DENIED
     *     * `SIGNED` - SIGNED
     *     * `DEPRECATED` - DEPRECATED
     * @enum {string}
     */
    OfferStatusEnum:
      | 'DRAFT'
      | 'APPROVAL-SENT'
      | 'APPROVED'
      | 'SENT'
      | 'SENT-MANUALLY'
      | 'OPENED'
      | 'DENIED'
      | 'SIGNED'
      | 'DEPRECATED'
    /** @description # The Office Object
     *     ### Description
     *     The `Office` object is used to represent an office within a company. A given `Job` has the `Office` ID in its offices field.
     *     ### Usage Example
     *     Fetch from the `LIST Offices` endpoint and view the offices within a company. */
    Office: {
      /**
       * Format: uuid
       * @example 9871b4a9-f5d2-4f3b-a66b-dfedbed42c46
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 876556788
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
       * @description The office's name.
       * @example SF Office
       */
      name?: string | null
      /**
       * @description The office's location.
       * @example Embarcadero Center 2
       */
      location?: string | null
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
     * @description * `DEFINITELY_NO` - DEFINITELY_NO
     *     * `NO` - NO
     *     * `YES` - YES
     *     * `STRONG_YES` - STRONG_YES
     *     * `NO_DECISION` - NO_DECISION
     * @enum {string}
     */
    OverallRecommendationEnum:
      | 'DEFINITELY_NO'
      | 'NO'
      | 'YES'
      | 'STRONG_YES'
      | 'NO_DECISION'
    PaginatedAccountDetailsAndActionsList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AccountDetailsAndActions'][]
    }
    PaginatedActivityList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Activity'][]
    }
    PaginatedApplicationList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Application'][]
    }
    PaginatedAttachmentList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Attachment'][]
    }
    PaginatedAuditLogEventList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AuditLogEvent'][]
    }
    PaginatedCandidateList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Candidate'][]
    }
    PaginatedDepartmentList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Department'][]
    }
    PaginatedEEOCList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['EEOC'][]
    }
    PaginatedIssueList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Issue'][]
    }
    PaginatedJobInterviewStageList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['JobInterviewStage'][]
    }
    PaginatedJobList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Job'][]
    }
    PaginatedJobPostingList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['JobPosting'][]
    }
    PaginatedOfferList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Offer'][]
    }
    PaginatedOfficeList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Office'][]
    }
    PaginatedRejectReasonList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['RejectReason'][]
    }
    PaginatedRemoteUserList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['RemoteUser'][]
    }
    PaginatedScheduledInterviewList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['ScheduledInterview'][]
    }
    PaginatedScorecardList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Scorecard'][]
    }
    PaginatedScreeningQuestionList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['ScreeningQuestion'][]
    }
    PaginatedSyncStatusList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['SyncStatus'][]
    }
    PaginatedTagList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Tag'][]
    }
    PatchedCandidateEndpointRequest: {
      model: components['schemas']['PatchedCandidateRequest']
      remote_user_id: string
    }
    /** @description # The Candidate Object
     *     ### Description
     *     The `Candidate` object is used to represent profile information about a given Candidate. Because it is specific to a Candidate, this information stays constant across applications.
     *     ### Usage Example
     *     Fetch from the `LIST Candidates` endpoint and filter by `ID` to show all candidates. */
    PatchedCandidateRequest: {
      /**
       * @description The candidate's first name.
       * @example Gil
       */
      first_name?: string | null
      /**
       * @description The candidate's last name.
       * @example Feig
       */
      last_name?: string | null
      /**
       * @description The candidate's current company.
       * @example Columbia Dining App.
       */
      company?: string | null
      /**
       * @description The candidate's current title.
       * @example Software Engineer
       */
      title?: string | null
      /**
       * Format: date-time
       * @description When the most recent interaction with the candidate occurred.
       * @example 2021-10-17T00:00:00Z
       */
      last_interaction_at?: string | null
      /**
       * @description Whether or not the candidate is private.
       * @example true
       */
      is_private?: boolean | null
      /**
       * @description Whether or not the candidate can be emailed.
       * @example true
       */
      can_email?: boolean | null
      /**
       * @description The candidate's locations.
       * @example [
       *       "San Francisco",
       *       "New York",
       *       "Miami"
       *     ]
       */
      locations?: (string | null)[] | null
      /** @example [
       *       {
       *         "value": "+1234567890",
       *         "phone_number_type": "MOBILE"
       *       }
       *     ] */
      phone_numbers?: components['schemas']['PhoneNumberRequest'][]
      /** @example [
       *       {
       *         "value": "hello@merge.dev",
       *         "email_address_type": "PERSONAL"
       *       }
       *     ] */
      email_addresses?: components['schemas']['EmailAddressRequest'][]
      /** @example [
       *       {
       *         "value": "http://alturl.com/p749b",
       *         "url_type": "BLOG"
       *       }
       *     ] */
      urls?: components['schemas']['UrlRequest'][]
      /**
       * @description Array of `Tag` names as strings.
       * @example [
       *       "High-Priority"
       *     ]
       */
      tags?: (string | null)[]
      /**
       * @description Array of `Application` object IDs.
       * @example [
       *       "29eb9867-ce2a-403f-b8ce-f2844b89f078",
       *       "b4d08e5c-de00-4d64-a29f-66addac9af99",
       *       "4ff877d2-fb3e-4a5b-a7a5-168ddf2ffa56"
       *     ]
       */
      applications?: (string | null)[]
      /**
       * @description Array of `Attachment` object IDs.
       * @example [
       *       "bea08964-32b4-4a20-8bb4-2612ba09de1d"
       *     ]
       */
      attachments?: (string | null)[]
      /** @example 92830948203 */
      remote_template_id?: string | null
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
    /** @description # The PhoneNumber Object
     *     ### Description
     *     The `PhoneNumber` object is used to represent a candidate's phone number.
     *     ### Usage Example
     *     Fetch from the `GET Candidate` endpoint and view their phone numbers. */
    PhoneNumber: {
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
       * @description The phone number.
       * @example +3198675309
       */
      value?: string | null
      /**
       * @description The type of phone number.
       *
       *     * `HOME` - HOME
       *     * `WORK` - WORK
       *     * `MOBILE` - MOBILE
       *     * `SKYPE` - SKYPE
       *     * `OTHER` - OTHER
       * @example HOME
       */
      phone_number_type?: components['schemas']['PhoneNumberTypeEnum'] | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
    }
    /** @description # The PhoneNumber Object
     *     ### Description
     *     The `PhoneNumber` object is used to represent a candidate's phone number.
     *     ### Usage Example
     *     Fetch from the `GET Candidate` endpoint and view their phone numbers. */
    PhoneNumberRequest: {
      /**
       * @description The phone number.
       * @example +3198675309
       */
      value?: string | null
      /**
       * @description The type of phone number.
       *
       *     * `HOME` - HOME
       *     * `WORK` - WORK
       *     * `MOBILE` - MOBILE
       *     * `SKYPE` - SKYPE
       *     * `OTHER` - OTHER
       * @example HOME
       */
      phone_number_type?: components['schemas']['PhoneNumberTypeEnum'] | null
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
     * @description * `HOME` - HOME
     *     * `WORK` - WORK
     *     * `MOBILE` - MOBILE
     *     * `SKYPE` - SKYPE
     *     * `OTHER` - OTHER
     * @enum {string}
     */
    PhoneNumberTypeEnum: 'HOME' | 'WORK' | 'MOBILE' | 'SKYPE' | 'OTHER'
    /**
     * @description * `AMERICAN_INDIAN_OR_ALASKAN_NATIVE` - AMERICAN_INDIAN_OR_ALASKAN_NATIVE
     *     * `ASIAN` - ASIAN
     *     * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
     *     * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
     *     * `WHITE` - WHITE
     *     * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
     *     * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
     *     * `DECLINE_TO_SELF_IDENTIFY` - DECLINE_TO_SELF_IDENTIFY
     * @enum {string}
     */
    RaceEnum:
      | 'AMERICAN_INDIAN_OR_ALASKAN_NATIVE'
      | 'ASIAN'
      | 'BLACK_OR_AFRICAN_AMERICAN'
      | 'HISPANIC_OR_LATINO'
      | 'WHITE'
      | 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER'
      | 'TWO_OR_MORE_RACES'
      | 'DECLINE_TO_SELF_IDENTIFY'
    /**
     * @description * `GENERAL_CUSTOMER_REQUEST` - GENERAL_CUSTOMER_REQUEST
     *     * `GDPR` - GDPR
     *     * `OTHER` - OTHER
     * @enum {string}
     */
    ReasonEnum: 'GENERAL_CUSTOMER_REQUEST' | 'GDPR' | 'OTHER'
    /** @description # The RejectReason Object
     *     ### Description
     *     The `RejectReason` object is used to represent a reason for rejecting an application. These can typically be configured within an ATS system.
     *     ### Usage Example
     *     Fetch from the `LIST RejectReasons` endpoint and filter by `ID` to show all reasons. */
    RejectReason: {
      /**
       * Format: uuid
       * @example 8be99a4a-f8d4-4339-bf1e-30eac970e217
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 876556788
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
       * @description The rejection reason’s name.
       * @example Not passionate enough about APIs.
       */
      name?: string | null
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
       *         "path": "/rejection-reasons",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
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
      Activity?: components['schemas']['RemoteFieldAPI'][]
      Application?: components['schemas']['RemoteFieldAPI'][]
      Attachment?: components['schemas']['RemoteFieldAPI'][]
      Candidate?: components['schemas']['RemoteFieldAPI'][]
      Department?: components['schemas']['RemoteFieldAPI'][]
      EEOC?: components['schemas']['RemoteFieldAPI'][]
      ScheduledInterview?: components['schemas']['RemoteFieldAPI'][]
      Job?: components['schemas']['RemoteFieldAPI'][]
      JobPosting?: components['schemas']['RemoteFieldAPI'][]
      JobInterviewStage?: components['schemas']['RemoteFieldAPI'][]
      Offer?: components['schemas']['RemoteFieldAPI'][]
      Office?: components['schemas']['RemoteFieldAPI'][]
      RejectReason?: components['schemas']['RemoteFieldAPI'][]
      Scorecard?: components['schemas']['RemoteFieldAPI'][]
      Tag?: components['schemas']['RemoteFieldAPI'][]
      RemoteUser?: components['schemas']['RemoteFieldAPI'][]
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
    /** @description # The RemoteUser Object
     *     ### Description
     *     The `RemoteUser` object is used to represent a user with a login to the ATS system.
     *     ### Usage Example
     *     Fetch from the `LIST RemoteUsers` endpoint to show all users for a third party. */
    RemoteUser: {
      /**
       * Format: uuid
       * @example b82302de-852e-4e60-b050-edf9da3b7c02
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 344321
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
       * @description The user's first name.
       * @example Shensi
       */
      first_name?: string | null
      /**
       * @description The user's last name.
       * @example Ding
       */
      last_name?: string | null
      /**
       * Format: email
       * @description The user's email.
       * @example hello@merge.dev
       */
      email?: string | null
      /** @description Whether the user's account had been disabled. */
      disabled?: boolean | null
      /**
       * Format: date-time
       * @description When the third party's user was created.
       * @example 2020-11-10T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * @description The user's role.
       *
       *     * `SUPER_ADMIN` - SUPER_ADMIN
       *     * `ADMIN` - ADMIN
       *     * `TEAM_MEMBER` - TEAM_MEMBER
       *     * `LIMITED_TEAM_MEMBER` - LIMITED_TEAM_MEMBER
       *     * `INTERVIEWER` - INTERVIEWER
       * @example SUPER_ADMIN
       */
      access_role?: components['schemas']['AccessRoleEnum'] | null
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
    /** @description # The ScheduledInterview Object
     *     ### Description
     *     The `ScheduledInterview` object is used to represent a scheduled interview for a given candidate’s application to a job. An `Application` can have multiple `ScheduledInterview`s depending on the particular hiring process.
     *     ### Usage Example
     *     Fetch from the `LIST ScheduledInterviews` endpoint and filter by `interviewers` to show all office locations. */
    ScheduledInterview: {
      /**
       * Format: uuid
       * @example b8faf072-98b9-4445-8a9a-6b4950efca19
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 3
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
       * @description The application being interviewed.
       * @example 92e8a369-fffe-430d-b93a-f7e8a16563f1
       */
      application?: string | null
      /**
       * Format: uuid
       * @description The stage of the interview.
       * @example 2f7adb59-3fe6-4b5b-aef6-563f72bd13dc
       */
      job_interview_stage?: string | null
      /**
       * Format: uuid
       * @description The user organizing the interview.
       * @example 52bf9b5e-0beb-4f6f-8a72-cd4dca7ca633
       */
      organizer?: string | null
      /**
       * @description Array of `RemoteUser` IDs.
       * @example [
       *       "f9813dd5-e70b-484c-91d8-00acd6065b07",
       *       "89a86fcf-d540-4e6b-ac3d-ce07c4ec9b3c"
       *     ]
       */
      interviewers?: (string | null)[]
      /**
       * @description The interview's location.
       * @example Embarcadero Center 2
       */
      location?: string | null
      /**
       * Format: date-time
       * @description When the interview was started.
       * @example 2021-10-15T00:00:00Z
       */
      start_at?: string | null
      /**
       * Format: date-time
       * @description When the interview was ended.
       * @example 2021-10-15T02:00:00Z
       */
      end_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's interview was created.
       * @example 2021-10-15T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's interview was updated.
       * @example 2021-10-15T00:00:00Z
       */
      remote_updated_at?: string | null
      /**
       * @description The interview's status.
       *
       *     * `SCHEDULED` - SCHEDULED
       *     * `AWAITING_FEEDBACK` - AWAITING_FEEDBACK
       *     * `COMPLETE` - COMPLETE
       * @example SCHEDULED
       */
      status?: components['schemas']['ScheduledInterviewStatusEnum'] | null
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
       *         "path": "/interviews",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    ScheduledInterviewEndpointRequest: {
      model: components['schemas']['ScheduledInterviewRequest']
      remote_user_id: string
    }
    /** @description # The ScheduledInterview Object
     *     ### Description
     *     The `ScheduledInterview` object is used to represent a scheduled interview for a given candidate’s application to a job. An `Application` can have multiple `ScheduledInterview`s depending on the particular hiring process.
     *     ### Usage Example
     *     Fetch from the `LIST ScheduledInterviews` endpoint and filter by `interviewers` to show all office locations. */
    ScheduledInterviewRequest: {
      /**
       * Format: uuid
       * @description The application being interviewed.
       * @example 92e8a369-fffe-430d-b93a-f7e8a16563f1
       */
      application?: string | null
      /**
       * Format: uuid
       * @description The stage of the interview.
       * @example 2f7adb59-3fe6-4b5b-aef6-563f72bd13dc
       */
      job_interview_stage?: string | null
      /**
       * Format: uuid
       * @description The user organizing the interview.
       * @example 52bf9b5e-0beb-4f6f-8a72-cd4dca7ca633
       */
      organizer?: string | null
      /**
       * @description Array of `RemoteUser` IDs.
       * @example [
       *       "f9813dd5-e70b-484c-91d8-00acd6065b07",
       *       "89a86fcf-d540-4e6b-ac3d-ce07c4ec9b3c"
       *     ]
       */
      interviewers?: (string | null)[]
      /**
       * @description The interview's location.
       * @example Embarcadero Center 2
       */
      location?: string | null
      /**
       * Format: date-time
       * @description When the interview was started.
       * @example 2021-10-15T00:00:00Z
       */
      start_at?: string | null
      /**
       * Format: date-time
       * @description When the interview was ended.
       * @example 2021-10-15T02:00:00Z
       */
      end_at?: string | null
      /**
       * @description The interview's status.
       *
       *     * `SCHEDULED` - SCHEDULED
       *     * `AWAITING_FEEDBACK` - AWAITING_FEEDBACK
       *     * `COMPLETE` - COMPLETE
       * @example SCHEDULED
       */
      status?: components['schemas']['ScheduledInterviewStatusEnum'] | null
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
    ScheduledInterviewResponse: {
      model: components['schemas']['ScheduledInterview']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `SCHEDULED` - SCHEDULED
     *     * `AWAITING_FEEDBACK` - AWAITING_FEEDBACK
     *     * `COMPLETE` - COMPLETE
     * @enum {string}
     */
    ScheduledInterviewStatusEnum: 'SCHEDULED' | 'AWAITING_FEEDBACK' | 'COMPLETE'
    /** @description # The Scorecard Object
     *     ### Description
     *     The `Scorecard` object is used to represent an interviewer's candidate recommendation based on a particular interview.
     *     ### Usage Example
     *     Fetch from the `LIST Scorecards` endpoint and filter by `application` to show all scorecard for an applicant. */
    Scorecard: {
      /**
       * Format: uuid
       * @example 3eab2f17-eeb1-450d-97f0-029d8be1e06f
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 22234
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
       * @description The application being scored.
       * @example 2872ba14-4084-492b-be96-e5eee6fc33ef
       */
      application?: string | null
      /**
       * Format: uuid
       * @description The interview being scored.
       * @example 52bf9b5e-0beb-4f6f-8a72-cd4dca7ca633
       */
      interview?: string | null
      /**
       * Format: uuid
       * @description The interviewer doing the scoring.
       * @example bbb519a3-246e-4b95-b6b3-dba16107ba6b
       */
      interviewer?: string | null
      /**
       * Format: date-time
       * @description When the third party's scorecard was created.
       * @example 2021-10-15T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the scorecard was submitted.
       * @example 2021-10-15T00:00:00Z
       */
      submitted_at?: string | null
      /**
       * @description The inteviewer's recommendation.
       *
       *     * `DEFINITELY_NO` - DEFINITELY_NO
       *     * `NO` - NO
       *     * `YES` - YES
       *     * `STRONG_YES` - STRONG_YES
       *     * `NO_DECISION` - NO_DECISION
       * @example STRONG_YES
       */
      overall_recommendation?:
        | components['schemas']['OverallRecommendationEnum']
        | null
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
       *         "path": "/ratings",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The ScreeningQuestion Object
     *     ### Description
     *     The `ScreeningQuestion` object is used to represent questions asked to screen candidates for a job.
     *
     *     ### Usage Example
     *     TODO */
    ScreeningQuestion: {
      /**
       * Format: uuid
       * @example 0238cbc6-6040-430a-848e-aaiehfhdbadf4ae
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 23729392
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
       * @description The job associated with the screening question.
       * @example 92e8a369-fffe-430d-b93a-f7e8a16563f1
       */
      job?: string | null
      /**
       * @description The description of the screening question
       * @example Are you currently authorized to work for any employer in the country outlined for this role?
       */
      description?: string | null
      /**
       * @description The title of the screening question
       * @example Work Authorisation
       */
      title?: string | null
      /**
       * @description The data type for the screening question.
       *
       *     * `DATE` - DATE
       *     * `FILE` - FILE
       *     * `SINGLE_SELECT` - SINGLE_SELECT
       *     * `MULTI_SELECT` - MULTI_SELECT
       *     * `SINGLE_LINE_TEXT` - SINGLE_LINE_TEXT
       *     * `MULTI_LINE_TEXT` - MULTI_LINE_TEXT
       *     * `NUMERIC` - NUMERIC
       *     * `BOOLEAN` - BOOLEAN
       * @example SINGLE_SELECT
       */
      type?: components['schemas']['ScreeningQuestionTypeEnum'] | null
      /**
       * @description Whether or not the screening question is required.
       * @example true
       */
      required?: boolean | null
      /** @example [
       *       {
       *         "remote_id": "19281",
       *         "label": "I am currently authorised"
       *       },
       *       {
       *         "remote_id": "38372",
       *         "label": "I am currently not eligible"
       *       }
       *     ] */
      options?: components['schemas']['ScreeningQuestionOption'][]
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
    }
    /** @description # The ScreeningQuestionAnswer Object
     *     ### Description
     *     The `ScreeningQuestionAnswer` object is used to represent candidate responses to a screening question, for a specific application.
     *
     *     ### Usage Example
     *     TODO */
    ScreeningQuestionAnswer: {
      /**
       * Format: uuid
       * @example ecbe05ac-62a3-46c5-ab31-4b478b37d1b4
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 088899
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
       * @description The screening question associated with the candidate’s answer. To determine the data type of the answer, you can expand on the screening question by adding `screening_question_answers.question` to the `expand` query parameter.
       * @example 0238cbc6-6040-430a-848e-aaiehfhdbadf4ae
       */
      question?: string | null
      /**
       * @description The candidate’s response to the screening question.
       * @example 5+ years experience
       */
      answer?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
    }
    /** @description # The ScreeningQuestionAnswer Object
     *     ### Description
     *     The `ScreeningQuestionAnswer` object is used to represent candidate responses to a screening question, for a specific application.
     *
     *     ### Usage Example
     *     TODO */
    ScreeningQuestionAnswerRequest: {
      /**
       * @description The third-party API ID of the matching object.
       * @example 088899
       */
      remote_id?: string | null
      /**
       * Format: uuid
       * @description The screening question associated with the candidate’s answer. To determine the data type of the answer, you can expand on the screening question by adding `screening_question_answers.question` to the `expand` query parameter.
       * @example 0238cbc6-6040-430a-848e-aaiehfhdbadf4ae
       */
      question?: string | null
      /**
       * @description The candidate’s response to the screening question.
       * @example 5+ years experience
       */
      answer?: string | null
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
    /** @description # The ScreeningQuestionOption Object
     *     ### Description
     *     The `ScreeningQuestionOption` object is used to represent options for a `ScreeningQuestion` object
     *
     *     ### Usage Example
     *     TODO */
    ScreeningQuestionOption: {
      /**
       * Format: uuid
       * @example ecbe05ac-62a3-46c5-ab31-4b478b37d1b4
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
       * @description Available response options
       * @example 5+ years experience
       */
      label?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
    }
    /**
     * @description * `DATE` - DATE
     *     * `FILE` - FILE
     *     * `SINGLE_SELECT` - SINGLE_SELECT
     *     * `MULTI_SELECT` - MULTI_SELECT
     *     * `SINGLE_LINE_TEXT` - SINGLE_LINE_TEXT
     *     * `MULTI_LINE_TEXT` - MULTI_LINE_TEXT
     *     * `NUMERIC` - NUMERIC
     *     * `BOOLEAN` - BOOLEAN
     * @enum {string}
     */
    ScreeningQuestionTypeEnum:
      | 'DATE'
      | 'FILE'
      | 'SINGLE_SELECT'
      | 'MULTI_SELECT'
      | 'SINGLE_LINE_TEXT'
      | 'MULTI_LINE_TEXT'
      | 'NUMERIC'
      | 'BOOLEAN'
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
      /** @example Candidate */
      model_name: string
      /** @example ats.Candidate */
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
    /** @description # The Tag Object
     *     ### Description
     *     The `Tag` object is used to represent a tag for a candidate.
     *     ### Usage Example
     *     Fetch from the `LIST Tags` endpoint and view the tags used within a company. */
    Tag: {
      /**
       * @description The third-party API ID of the matching object.
       * @example 4567
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
       * @description The tag's name.
       * @example High-Priority
       */
      name?: string | null
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
       *         "path": "/tags",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      remote_data?:
        | ({
            [key: string]: unknown
          } | null)[]
        | null
    }
    UpdateApplicationStageRequest: {
      /**
       * Format: uuid
       * @description The interview stage to move the application to.
       */
      job_interview_stage?: string | null
      remote_user_id?: string
    }
    /** @description # The Url Object
     *     ### Description
     *     The `Url` object is used to represent hyperlinks associated with the parent model.
     *     ### Usage Example
     *     Fetch from the `GET Candidate` endpoint and view their website urls. */
    Url: {
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
       * Format: uri
       * @description The site's url.
       * @example http://alturl.com/p749b
       */
      value?: string | null
      /**
       * @description The type of site.
       *
       *     * `PERSONAL` - PERSONAL
       *     * `COMPANY` - COMPANY
       *     * `PORTFOLIO` - PORTFOLIO
       *     * `BLOG` - BLOG
       *     * `SOCIAL_MEDIA` - SOCIAL_MEDIA
       *     * `OTHER` - OTHER
       *     * `JOB_POSTING` - JOB_POSTING
       * @example PERSONAL
       */
      url_type?: components['schemas']['UrlTypeEnum'] | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
    }
    /** @description # The Url Object
     *     ### Description
     *     The `Url` object is used to represent hyperlinks associated with the parent model.
     *     ### Usage Example
     *     Fetch from the `GET Candidate` endpoint and view their website urls. */
    UrlRequest: {
      /**
       * Format: uri
       * @description The site's url.
       * @example http://alturl.com/p749b
       */
      value?: string | null
      /**
       * @description The type of site.
       *
       *     * `PERSONAL` - PERSONAL
       *     * `COMPANY` - COMPANY
       *     * `PORTFOLIO` - PORTFOLIO
       *     * `BLOG` - BLOG
       *     * `SOCIAL_MEDIA` - SOCIAL_MEDIA
       *     * `OTHER` - OTHER
       *     * `JOB_POSTING` - JOB_POSTING
       * @example PERSONAL
       */
      url_type?: components['schemas']['UrlTypeEnum'] | null
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
     * @description * `PERSONAL` - PERSONAL
     *     * `COMPANY` - COMPANY
     *     * `PORTFOLIO` - PORTFOLIO
     *     * `BLOG` - BLOG
     *     * `SOCIAL_MEDIA` - SOCIAL_MEDIA
     *     * `OTHER` - OTHER
     *     * `JOB_POSTING` - JOB_POSTING
     * @enum {string}
     */
    UrlTypeEnum:
      | 'PERSONAL'
      | 'COMPANY'
      | 'PORTFOLIO'
      | 'BLOG'
      | 'SOCIAL_MEDIA'
      | 'OTHER'
      | 'JOB_POSTING'
    ValidationProblemSource: {
      pointer: string
    }
    /**
     * @description * `I_AM_NOT_A_PROTECTED_VETERAN` - I_AM_NOT_A_PROTECTED_VETERAN
     *     * `I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN` - I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN
     *     * `I_DONT_WISH_TO_ANSWER` - I_DONT_WISH_TO_ANSWER
     * @enum {string}
     */
    VeteranStatusEnum:
      | 'I_AM_NOT_A_PROTECTED_VETERAN'
      | 'I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN'
      | 'I_DONT_WISH_TO_ANSWER'
    /**
     * @description * `ADMIN_ONLY` - ADMIN_ONLY
     *     * `PUBLIC` - PUBLIC
     *     * `PRIVATE` - PRIVATE
     * @enum {string}
     */
    VisibilityEnum: 'ADMIN_ONLY' | 'PUBLIC' | 'PRIVATE'
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
  activities_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'user'
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
          | 'activity_type'
          | 'activity_type,visibility'
          | 'visibility'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'activity_type'
          | 'activity_type,visibility'
          | 'visibility'
        /** @description If provided, will only return activities done by this user. */
        user_id?: string
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
          'application/json': components['schemas']['PaginatedActivityList']
        }
      }
    }
  }
  activities_create: {
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
        'application/json': components['schemas']['ActivityEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['ActivityEndpointRequest']
        'multipart/form-data': components['schemas']['ActivityEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ActivityResponse']
        }
      }
    }
  }
  activities_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'user'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'activity_type'
          | 'activity_type,visibility'
          | 'visibility'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'activity_type'
          | 'activity_type,visibility'
          | 'visibility'
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
          'application/json': components['schemas']['Activity']
        }
      }
    }
  }
  activities_meta_post_retrieve: {
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
  applications_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return applications for this candidate. */
        candidate_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description If provided, will only return applications credited to this user. */
        credited_to_id?: string
        /** @description If provided, will only return applications at this interview stage. */
        current_stage_id?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'candidate'
          | 'candidate,credited_to'
          | 'candidate,credited_to,current_stage'
          | 'candidate,credited_to,current_stage,reject_reason'
          | 'candidate,credited_to,reject_reason'
          | 'candidate,current_stage'
          | 'candidate,current_stage,reject_reason'
          | 'candidate,job'
          | 'candidate,job,credited_to'
          | 'candidate,job,credited_to,current_stage'
          | 'candidate,job,credited_to,current_stage,reject_reason'
          | 'candidate,job,credited_to,reject_reason'
          | 'candidate,job,current_stage'
          | 'candidate,job,current_stage,reject_reason'
          | 'candidate,job,reject_reason'
          | 'candidate,reject_reason'
          | 'credited_to'
          | 'credited_to,current_stage'
          | 'credited_to,current_stage,reject_reason'
          | 'credited_to,reject_reason'
          | 'current_stage'
          | 'current_stage,reject_reason'
          | 'job'
          | 'job,credited_to'
          | 'job,credited_to,current_stage'
          | 'job,credited_to,current_stage,reject_reason'
          | 'job,credited_to,reject_reason'
          | 'job,current_stage'
          | 'job,current_stage,reject_reason'
          | 'job,reject_reason'
          | 'offers'
          | 'offers,candidate'
          | 'offers,candidate,credited_to'
          | 'offers,candidate,credited_to,current_stage'
          | 'offers,candidate,credited_to,current_stage,reject_reason'
          | 'offers,candidate,credited_to,reject_reason'
          | 'offers,candidate,current_stage'
          | 'offers,candidate,current_stage,reject_reason'
          | 'offers,candidate,job'
          | 'offers,candidate,job,credited_to'
          | 'offers,candidate,job,credited_to,current_stage'
          | 'offers,candidate,job,credited_to,current_stage,reject_reason'
          | 'offers,candidate,job,credited_to,reject_reason'
          | 'offers,candidate,job,current_stage'
          | 'offers,candidate,job,current_stage,reject_reason'
          | 'offers,candidate,job,reject_reason'
          | 'offers,candidate,reject_reason'
          | 'offers,credited_to'
          | 'offers,credited_to,current_stage'
          | 'offers,credited_to,current_stage,reject_reason'
          | 'offers,credited_to,reject_reason'
          | 'offers,current_stage'
          | 'offers,current_stage,reject_reason'
          | 'offers,job'
          | 'offers,job,credited_to'
          | 'offers,job,credited_to,current_stage'
          | 'offers,job,credited_to,current_stage,reject_reason'
          | 'offers,job,credited_to,reject_reason'
          | 'offers,job,current_stage'
          | 'offers,job,current_stage,reject_reason'
          | 'offers,job,reject_reason'
          | 'offers,reject_reason'
          | 'offers,screening_question_answers'
          | 'offers,screening_question_answers,candidate'
          | 'offers,screening_question_answers,candidate,credited_to'
          | 'offers,screening_question_answers,candidate,credited_to,current_stage'
          | 'offers,screening_question_answers,candidate,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,candidate,credited_to,reject_reason'
          | 'offers,screening_question_answers,candidate,current_stage'
          | 'offers,screening_question_answers,candidate,current_stage,reject_reason'
          | 'offers,screening_question_answers,candidate,job'
          | 'offers,screening_question_answers,candidate,job,credited_to'
          | 'offers,screening_question_answers,candidate,job,credited_to,current_stage'
          | 'offers,screening_question_answers,candidate,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,candidate,job,credited_to,reject_reason'
          | 'offers,screening_question_answers,candidate,job,current_stage'
          | 'offers,screening_question_answers,candidate,job,current_stage,reject_reason'
          | 'offers,screening_question_answers,candidate,job,reject_reason'
          | 'offers,screening_question_answers,candidate,reject_reason'
          | 'offers,screening_question_answers,credited_to'
          | 'offers,screening_question_answers,credited_to,current_stage'
          | 'offers,screening_question_answers,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,credited_to,reject_reason'
          | 'offers,screening_question_answers,current_stage'
          | 'offers,screening_question_answers,current_stage,reject_reason'
          | 'offers,screening_question_answers,job'
          | 'offers,screening_question_answers,job,credited_to'
          | 'offers,screening_question_answers,job,credited_to,current_stage'
          | 'offers,screening_question_answers,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,job,credited_to,reject_reason'
          | 'offers,screening_question_answers,job,current_stage'
          | 'offers,screening_question_answers,job,current_stage,reject_reason'
          | 'offers,screening_question_answers,job,reject_reason'
          | 'offers,screening_question_answers,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,credited_to'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,credited_to'
          | 'offers,screening_question_answers,screening_question_answers.question,credited_to,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,credited_to,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,job'
          | 'offers,screening_question_answers,screening_question_answers.question,job,credited_to'
          | 'offers,screening_question_answers,screening_question_answers.question,job,credited_to,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,job,credited_to,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,job,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,job,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,job,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,reject_reason'
          | 'offers,screening_question_answers.question'
          | 'offers,screening_question_answers.question,candidate'
          | 'offers,screening_question_answers.question,candidate,credited_to'
          | 'offers,screening_question_answers.question,candidate,credited_to,current_stage'
          | 'offers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,candidate,credited_to,reject_reason'
          | 'offers,screening_question_answers.question,candidate,current_stage'
          | 'offers,screening_question_answers.question,candidate,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,candidate,job'
          | 'offers,screening_question_answers.question,candidate,job,credited_to'
          | 'offers,screening_question_answers.question,candidate,job,credited_to,current_stage'
          | 'offers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,candidate,job,credited_to,reject_reason'
          | 'offers,screening_question_answers.question,candidate,job,current_stage'
          | 'offers,screening_question_answers.question,candidate,job,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,candidate,job,reject_reason'
          | 'offers,screening_question_answers.question,candidate,reject_reason'
          | 'offers,screening_question_answers.question,credited_to'
          | 'offers,screening_question_answers.question,credited_to,current_stage'
          | 'offers,screening_question_answers.question,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,credited_to,reject_reason'
          | 'offers,screening_question_answers.question,current_stage'
          | 'offers,screening_question_answers.question,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,job'
          | 'offers,screening_question_answers.question,job,credited_to'
          | 'offers,screening_question_answers.question,job,credited_to,current_stage'
          | 'offers,screening_question_answers.question,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,job,credited_to,reject_reason'
          | 'offers,screening_question_answers.question,job,current_stage'
          | 'offers,screening_question_answers.question,job,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,job,reject_reason'
          | 'offers,screening_question_answers.question,reject_reason'
          | 'reject_reason'
          | 'screening_question_answers'
          | 'screening_question_answers,candidate'
          | 'screening_question_answers,candidate,credited_to'
          | 'screening_question_answers,candidate,credited_to,current_stage'
          | 'screening_question_answers,candidate,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,candidate,credited_to,reject_reason'
          | 'screening_question_answers,candidate,current_stage'
          | 'screening_question_answers,candidate,current_stage,reject_reason'
          | 'screening_question_answers,candidate,job'
          | 'screening_question_answers,candidate,job,credited_to'
          | 'screening_question_answers,candidate,job,credited_to,current_stage'
          | 'screening_question_answers,candidate,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,candidate,job,credited_to,reject_reason'
          | 'screening_question_answers,candidate,job,current_stage'
          | 'screening_question_answers,candidate,job,current_stage,reject_reason'
          | 'screening_question_answers,candidate,job,reject_reason'
          | 'screening_question_answers,candidate,reject_reason'
          | 'screening_question_answers,credited_to'
          | 'screening_question_answers,credited_to,current_stage'
          | 'screening_question_answers,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,credited_to,reject_reason'
          | 'screening_question_answers,current_stage'
          | 'screening_question_answers,current_stage,reject_reason'
          | 'screening_question_answers,job'
          | 'screening_question_answers,job,credited_to'
          | 'screening_question_answers,job,credited_to,current_stage'
          | 'screening_question_answers,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,job,credited_to,reject_reason'
          | 'screening_question_answers,job,current_stage'
          | 'screening_question_answers,job,current_stage,reject_reason'
          | 'screening_question_answers,job,reject_reason'
          | 'screening_question_answers,reject_reason'
          | 'screening_question_answers,screening_question_answers.question'
          | 'screening_question_answers,screening_question_answers.question,candidate'
          | 'screening_question_answers,screening_question_answers.question,candidate,credited_to'
          | 'screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage'
          | 'screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,credited_to,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,current_stage'
          | 'screening_question_answers,screening_question_answers.question,candidate,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,job'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,credited_to'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,credited_to,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,current_stage'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,credited_to'
          | 'screening_question_answers,screening_question_answers.question,credited_to,current_stage'
          | 'screening_question_answers,screening_question_answers.question,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,credited_to,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,current_stage'
          | 'screening_question_answers,screening_question_answers.question,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,job'
          | 'screening_question_answers,screening_question_answers.question,job,credited_to'
          | 'screening_question_answers,screening_question_answers.question,job,credited_to,current_stage'
          | 'screening_question_answers,screening_question_answers.question,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,job,credited_to,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,job,current_stage'
          | 'screening_question_answers,screening_question_answers.question,job,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,job,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,reject_reason'
          | 'screening_question_answers.question'
          | 'screening_question_answers.question,candidate'
          | 'screening_question_answers.question,candidate,credited_to'
          | 'screening_question_answers.question,candidate,credited_to,current_stage'
          | 'screening_question_answers.question,candidate,credited_to,current_stage,reject_reason'
          | 'screening_question_answers.question,candidate,credited_to,reject_reason'
          | 'screening_question_answers.question,candidate,current_stage'
          | 'screening_question_answers.question,candidate,current_stage,reject_reason'
          | 'screening_question_answers.question,candidate,job'
          | 'screening_question_answers.question,candidate,job,credited_to'
          | 'screening_question_answers.question,candidate,job,credited_to,current_stage'
          | 'screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers.question,candidate,job,credited_to,reject_reason'
          | 'screening_question_answers.question,candidate,job,current_stage'
          | 'screening_question_answers.question,candidate,job,current_stage,reject_reason'
          | 'screening_question_answers.question,candidate,job,reject_reason'
          | 'screening_question_answers.question,candidate,reject_reason'
          | 'screening_question_answers.question,credited_to'
          | 'screening_question_answers.question,credited_to,current_stage'
          | 'screening_question_answers.question,credited_to,current_stage,reject_reason'
          | 'screening_question_answers.question,credited_to,reject_reason'
          | 'screening_question_answers.question,current_stage'
          | 'screening_question_answers.question,current_stage,reject_reason'
          | 'screening_question_answers.question,job'
          | 'screening_question_answers.question,job,credited_to'
          | 'screening_question_answers.question,job,credited_to,current_stage'
          | 'screening_question_answers.question,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers.question,job,credited_to,reject_reason'
          | 'screening_question_answers.question,job,current_stage'
          | 'screening_question_answers.question,job,current_stage,reject_reason'
          | 'screening_question_answers.question,job,reject_reason'
          | 'screening_question_answers.question,reject_reason'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return applications for this job. */
        job_id?: string
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return applications with this reject reason. */
        reject_reason_id?: string
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return applications with this source. */
        source?: string | null
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
          'application/json': components['schemas']['PaginatedApplicationList']
        }
      }
    }
  }
  applications_create: {
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
        'application/json': components['schemas']['ApplicationEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['ApplicationEndpointRequest']
        'multipart/form-data': components['schemas']['ApplicationEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ApplicationResponse']
        }
      }
    }
  }
  applications_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'candidate'
          | 'candidate,credited_to'
          | 'candidate,credited_to,current_stage'
          | 'candidate,credited_to,current_stage,reject_reason'
          | 'candidate,credited_to,reject_reason'
          | 'candidate,current_stage'
          | 'candidate,current_stage,reject_reason'
          | 'candidate,job'
          | 'candidate,job,credited_to'
          | 'candidate,job,credited_to,current_stage'
          | 'candidate,job,credited_to,current_stage,reject_reason'
          | 'candidate,job,credited_to,reject_reason'
          | 'candidate,job,current_stage'
          | 'candidate,job,current_stage,reject_reason'
          | 'candidate,job,reject_reason'
          | 'candidate,reject_reason'
          | 'credited_to'
          | 'credited_to,current_stage'
          | 'credited_to,current_stage,reject_reason'
          | 'credited_to,reject_reason'
          | 'current_stage'
          | 'current_stage,reject_reason'
          | 'job'
          | 'job,credited_to'
          | 'job,credited_to,current_stage'
          | 'job,credited_to,current_stage,reject_reason'
          | 'job,credited_to,reject_reason'
          | 'job,current_stage'
          | 'job,current_stage,reject_reason'
          | 'job,reject_reason'
          | 'offers'
          | 'offers,candidate'
          | 'offers,candidate,credited_to'
          | 'offers,candidate,credited_to,current_stage'
          | 'offers,candidate,credited_to,current_stage,reject_reason'
          | 'offers,candidate,credited_to,reject_reason'
          | 'offers,candidate,current_stage'
          | 'offers,candidate,current_stage,reject_reason'
          | 'offers,candidate,job'
          | 'offers,candidate,job,credited_to'
          | 'offers,candidate,job,credited_to,current_stage'
          | 'offers,candidate,job,credited_to,current_stage,reject_reason'
          | 'offers,candidate,job,credited_to,reject_reason'
          | 'offers,candidate,job,current_stage'
          | 'offers,candidate,job,current_stage,reject_reason'
          | 'offers,candidate,job,reject_reason'
          | 'offers,candidate,reject_reason'
          | 'offers,credited_to'
          | 'offers,credited_to,current_stage'
          | 'offers,credited_to,current_stage,reject_reason'
          | 'offers,credited_to,reject_reason'
          | 'offers,current_stage'
          | 'offers,current_stage,reject_reason'
          | 'offers,job'
          | 'offers,job,credited_to'
          | 'offers,job,credited_to,current_stage'
          | 'offers,job,credited_to,current_stage,reject_reason'
          | 'offers,job,credited_to,reject_reason'
          | 'offers,job,current_stage'
          | 'offers,job,current_stage,reject_reason'
          | 'offers,job,reject_reason'
          | 'offers,reject_reason'
          | 'offers,screening_question_answers'
          | 'offers,screening_question_answers,candidate'
          | 'offers,screening_question_answers,candidate,credited_to'
          | 'offers,screening_question_answers,candidate,credited_to,current_stage'
          | 'offers,screening_question_answers,candidate,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,candidate,credited_to,reject_reason'
          | 'offers,screening_question_answers,candidate,current_stage'
          | 'offers,screening_question_answers,candidate,current_stage,reject_reason'
          | 'offers,screening_question_answers,candidate,job'
          | 'offers,screening_question_answers,candidate,job,credited_to'
          | 'offers,screening_question_answers,candidate,job,credited_to,current_stage'
          | 'offers,screening_question_answers,candidate,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,candidate,job,credited_to,reject_reason'
          | 'offers,screening_question_answers,candidate,job,current_stage'
          | 'offers,screening_question_answers,candidate,job,current_stage,reject_reason'
          | 'offers,screening_question_answers,candidate,job,reject_reason'
          | 'offers,screening_question_answers,candidate,reject_reason'
          | 'offers,screening_question_answers,credited_to'
          | 'offers,screening_question_answers,credited_to,current_stage'
          | 'offers,screening_question_answers,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,credited_to,reject_reason'
          | 'offers,screening_question_answers,current_stage'
          | 'offers,screening_question_answers,current_stage,reject_reason'
          | 'offers,screening_question_answers,job'
          | 'offers,screening_question_answers,job,credited_to'
          | 'offers,screening_question_answers,job,credited_to,current_stage'
          | 'offers,screening_question_answers,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,job,credited_to,reject_reason'
          | 'offers,screening_question_answers,job,current_stage'
          | 'offers,screening_question_answers,job,current_stage,reject_reason'
          | 'offers,screening_question_answers,job,reject_reason'
          | 'offers,screening_question_answers,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,credited_to'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,credited_to,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,credited_to,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,job,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,candidate,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,credited_to'
          | 'offers,screening_question_answers,screening_question_answers.question,credited_to,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,credited_to,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,job'
          | 'offers,screening_question_answers,screening_question_answers.question,job,credited_to'
          | 'offers,screening_question_answers,screening_question_answers.question,job,credited_to,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,job,credited_to,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,job,current_stage'
          | 'offers,screening_question_answers,screening_question_answers.question,job,current_stage,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,job,reject_reason'
          | 'offers,screening_question_answers,screening_question_answers.question,reject_reason'
          | 'offers,screening_question_answers.question'
          | 'offers,screening_question_answers.question,candidate'
          | 'offers,screening_question_answers.question,candidate,credited_to'
          | 'offers,screening_question_answers.question,candidate,credited_to,current_stage'
          | 'offers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,candidate,credited_to,reject_reason'
          | 'offers,screening_question_answers.question,candidate,current_stage'
          | 'offers,screening_question_answers.question,candidate,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,candidate,job'
          | 'offers,screening_question_answers.question,candidate,job,credited_to'
          | 'offers,screening_question_answers.question,candidate,job,credited_to,current_stage'
          | 'offers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,candidate,job,credited_to,reject_reason'
          | 'offers,screening_question_answers.question,candidate,job,current_stage'
          | 'offers,screening_question_answers.question,candidate,job,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,candidate,job,reject_reason'
          | 'offers,screening_question_answers.question,candidate,reject_reason'
          | 'offers,screening_question_answers.question,credited_to'
          | 'offers,screening_question_answers.question,credited_to,current_stage'
          | 'offers,screening_question_answers.question,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,credited_to,reject_reason'
          | 'offers,screening_question_answers.question,current_stage'
          | 'offers,screening_question_answers.question,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,job'
          | 'offers,screening_question_answers.question,job,credited_to'
          | 'offers,screening_question_answers.question,job,credited_to,current_stage'
          | 'offers,screening_question_answers.question,job,credited_to,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,job,credited_to,reject_reason'
          | 'offers,screening_question_answers.question,job,current_stage'
          | 'offers,screening_question_answers.question,job,current_stage,reject_reason'
          | 'offers,screening_question_answers.question,job,reject_reason'
          | 'offers,screening_question_answers.question,reject_reason'
          | 'reject_reason'
          | 'screening_question_answers'
          | 'screening_question_answers,candidate'
          | 'screening_question_answers,candidate,credited_to'
          | 'screening_question_answers,candidate,credited_to,current_stage'
          | 'screening_question_answers,candidate,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,candidate,credited_to,reject_reason'
          | 'screening_question_answers,candidate,current_stage'
          | 'screening_question_answers,candidate,current_stage,reject_reason'
          | 'screening_question_answers,candidate,job'
          | 'screening_question_answers,candidate,job,credited_to'
          | 'screening_question_answers,candidate,job,credited_to,current_stage'
          | 'screening_question_answers,candidate,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,candidate,job,credited_to,reject_reason'
          | 'screening_question_answers,candidate,job,current_stage'
          | 'screening_question_answers,candidate,job,current_stage,reject_reason'
          | 'screening_question_answers,candidate,job,reject_reason'
          | 'screening_question_answers,candidate,reject_reason'
          | 'screening_question_answers,credited_to'
          | 'screening_question_answers,credited_to,current_stage'
          | 'screening_question_answers,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,credited_to,reject_reason'
          | 'screening_question_answers,current_stage'
          | 'screening_question_answers,current_stage,reject_reason'
          | 'screening_question_answers,job'
          | 'screening_question_answers,job,credited_to'
          | 'screening_question_answers,job,credited_to,current_stage'
          | 'screening_question_answers,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,job,credited_to,reject_reason'
          | 'screening_question_answers,job,current_stage'
          | 'screening_question_answers,job,current_stage,reject_reason'
          | 'screening_question_answers,job,reject_reason'
          | 'screening_question_answers,reject_reason'
          | 'screening_question_answers,screening_question_answers.question'
          | 'screening_question_answers,screening_question_answers.question,candidate'
          | 'screening_question_answers,screening_question_answers.question,candidate,credited_to'
          | 'screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage'
          | 'screening_question_answers,screening_question_answers.question,candidate,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,credited_to,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,current_stage'
          | 'screening_question_answers,screening_question_answers.question,candidate,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,job'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,credited_to'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,credited_to,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,current_stage'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,job,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,candidate,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,credited_to'
          | 'screening_question_answers,screening_question_answers.question,credited_to,current_stage'
          | 'screening_question_answers,screening_question_answers.question,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,credited_to,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,current_stage'
          | 'screening_question_answers,screening_question_answers.question,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,job'
          | 'screening_question_answers,screening_question_answers.question,job,credited_to'
          | 'screening_question_answers,screening_question_answers.question,job,credited_to,current_stage'
          | 'screening_question_answers,screening_question_answers.question,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,job,credited_to,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,job,current_stage'
          | 'screening_question_answers,screening_question_answers.question,job,current_stage,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,job,reject_reason'
          | 'screening_question_answers,screening_question_answers.question,reject_reason'
          | 'screening_question_answers.question'
          | 'screening_question_answers.question,candidate'
          | 'screening_question_answers.question,candidate,credited_to'
          | 'screening_question_answers.question,candidate,credited_to,current_stage'
          | 'screening_question_answers.question,candidate,credited_to,current_stage,reject_reason'
          | 'screening_question_answers.question,candidate,credited_to,reject_reason'
          | 'screening_question_answers.question,candidate,current_stage'
          | 'screening_question_answers.question,candidate,current_stage,reject_reason'
          | 'screening_question_answers.question,candidate,job'
          | 'screening_question_answers.question,candidate,job,credited_to'
          | 'screening_question_answers.question,candidate,job,credited_to,current_stage'
          | 'screening_question_answers.question,candidate,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers.question,candidate,job,credited_to,reject_reason'
          | 'screening_question_answers.question,candidate,job,current_stage'
          | 'screening_question_answers.question,candidate,job,current_stage,reject_reason'
          | 'screening_question_answers.question,candidate,job,reject_reason'
          | 'screening_question_answers.question,candidate,reject_reason'
          | 'screening_question_answers.question,credited_to'
          | 'screening_question_answers.question,credited_to,current_stage'
          | 'screening_question_answers.question,credited_to,current_stage,reject_reason'
          | 'screening_question_answers.question,credited_to,reject_reason'
          | 'screening_question_answers.question,current_stage'
          | 'screening_question_answers.question,current_stage,reject_reason'
          | 'screening_question_answers.question,job'
          | 'screening_question_answers.question,job,credited_to'
          | 'screening_question_answers.question,job,credited_to,current_stage'
          | 'screening_question_answers.question,job,credited_to,current_stage,reject_reason'
          | 'screening_question_answers.question,job,credited_to,reject_reason'
          | 'screening_question_answers.question,job,current_stage'
          | 'screening_question_answers.question,job,current_stage,reject_reason'
          | 'screening_question_answers.question,job,reject_reason'
          | 'screening_question_answers.question,reject_reason'
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
          'application/json': components['schemas']['Application']
        }
      }
    }
  }
  applications_change_stage_create: {
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
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['UpdateApplicationStageRequest']
        'application/x-www-form-urlencoded': components['schemas']['UpdateApplicationStageRequest']
        'multipart/form-data': components['schemas']['UpdateApplicationStageRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ApplicationResponse']
        }
      }
    }
  }
  applications_meta_post_retrieve: {
    parameters: {
      query?: {
        /** @description The template ID associated with the nested application in the request. */
        application_remote_template_id?: string
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
  attachments_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return attachments for this candidate. */
        candidate_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'candidate'
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
        remote_fields?: 'attachment_type'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'attachment_type'
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
          'application/json': components['schemas']['PaginatedAttachmentList']
        }
      }
    }
  }
  attachments_create: {
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
        'application/json': components['schemas']['AttachmentEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['AttachmentEndpointRequest']
        'multipart/form-data': components['schemas']['AttachmentEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AttachmentResponse']
        }
      }
    }
  }
  attachments_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'candidate'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'attachment_type'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'attachment_type'
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
          'application/json': components['schemas']['Attachment']
        }
      }
    }
  }
  attachments_meta_post_retrieve: {
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
  candidates_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return candidates with these email addresses; multiple addresses can be separated by commas. */
        email_addresses?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'applications' | 'applications,attachments' | 'attachments'
        /** @description If provided, will only return candidates with this first name. */
        first_name?: string | null
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return candidates with this last name. */
        last_name?: string | null
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return candidates with these tags; multiple tags can be separated by commas. */
        tags?: string
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
          'application/json': components['schemas']['PaginatedCandidateList']
        }
      }
    }
  }
  candidates_create: {
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
        'application/json': components['schemas']['CandidateEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['CandidateEndpointRequest']
        'multipart/form-data': components['schemas']['CandidateEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CandidateResponse']
        }
      }
    }
  }
  candidates_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'applications' | 'applications,attachments' | 'attachments'
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
          'application/json': components['schemas']['Candidate']
        }
      }
    }
  }
  candidates_partial_update: {
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
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PatchedCandidateEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedCandidateEndpointRequest']
        'multipart/form-data': components['schemas']['PatchedCandidateEndpointRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CandidateResponse']
        }
      }
    }
  }
  candidates_ignore_create: {
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
  candidates_meta_patch_retrieve: {
    parameters: {
      query?: never
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
          'application/json': components['schemas']['MetaResponse']
        }
      }
    }
  }
  candidates_meta_post_retrieve: {
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
  departments_list: {
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
          'application/json': components['schemas']['PaginatedDepartmentList']
        }
      }
    }
  }
  departments_retrieve: {
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
          'application/json': components['schemas']['Department']
        }
      }
    }
  }
  eeocs_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return EEOC info for this candidate. */
        candidate_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'candidate'
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
          | 'disability_status'
          | 'disability_status,gender'
          | 'disability_status,gender,race'
          | 'disability_status,gender,race,veteran_status'
          | 'disability_status,gender,veteran_status'
          | 'disability_status,race'
          | 'disability_status,race,veteran_status'
          | 'disability_status,veteran_status'
          | 'gender'
          | 'gender,race'
          | 'gender,race,veteran_status'
          | 'gender,veteran_status'
          | 'race'
          | 'race,veteran_status'
          | 'veteran_status'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'disability_status'
          | 'disability_status,gender'
          | 'disability_status,gender,race'
          | 'disability_status,gender,race,veteran_status'
          | 'disability_status,gender,veteran_status'
          | 'disability_status,race'
          | 'disability_status,race,veteran_status'
          | 'disability_status,veteran_status'
          | 'gender'
          | 'gender,race'
          | 'gender,race,veteran_status'
          | 'gender,veteran_status'
          | 'race'
          | 'race,veteran_status'
          | 'veteran_status'
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
          'application/json': components['schemas']['PaginatedEEOCList']
        }
      }
    }
  }
  eeocs_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'candidate'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'disability_status'
          | 'disability_status,gender'
          | 'disability_status,gender,race'
          | 'disability_status,gender,race,veteran_status'
          | 'disability_status,gender,veteran_status'
          | 'disability_status,race'
          | 'disability_status,race,veteran_status'
          | 'disability_status,veteran_status'
          | 'gender'
          | 'gender,race'
          | 'gender,race,veteran_status'
          | 'gender,veteran_status'
          | 'race'
          | 'race,veteran_status'
          | 'veteran_status'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'disability_status'
          | 'disability_status,gender'
          | 'disability_status,gender,race'
          | 'disability_status,gender,race,veteran_status'
          | 'disability_status,gender,veteran_status'
          | 'disability_status,race'
          | 'disability_status,race,veteran_status'
          | 'disability_status,veteran_status'
          | 'gender'
          | 'gender,race'
          | 'gender,race,veteran_status'
          | 'gender,veteran_status'
          | 'race'
          | 'race,veteran_status'
          | 'veteran_status'
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
          'application/json': components['schemas']['EEOC']
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
  interviews_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return interviews for this application. */
        application_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'application'
          | 'application,job_interview_stage'
          | 'interviewers'
          | 'interviewers,application'
          | 'interviewers,application,job_interview_stage'
          | 'interviewers,job_interview_stage'
          | 'interviewers,organizer'
          | 'interviewers,organizer,application'
          | 'interviewers,organizer,application,job_interview_stage'
          | 'interviewers,organizer,job_interview_stage'
          | 'job_interview_stage'
          | 'organizer'
          | 'organizer,application'
          | 'organizer,application,job_interview_stage'
          | 'organizer,job_interview_stage'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, wll only return interviews organized for this job. */
        job_id?: string
        /** @description If provided, will only return interviews at this stage. */
        job_interview_stage_id?: string
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return interviews organized by this user. */
        organizer_id?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'status'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'status'
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
          'application/json': components['schemas']['PaginatedScheduledInterviewList']
        }
      }
    }
  }
  interviews_create: {
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
        'application/json': components['schemas']['ScheduledInterviewEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['ScheduledInterviewEndpointRequest']
        'multipart/form-data': components['schemas']['ScheduledInterviewEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ScheduledInterviewResponse']
        }
      }
    }
  }
  interviews_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'application'
          | 'application,job_interview_stage'
          | 'interviewers'
          | 'interviewers,application'
          | 'interviewers,application,job_interview_stage'
          | 'interviewers,job_interview_stage'
          | 'interviewers,organizer'
          | 'interviewers,organizer,application'
          | 'interviewers,organizer,application,job_interview_stage'
          | 'interviewers,organizer,job_interview_stage'
          | 'job_interview_stage'
          | 'organizer'
          | 'organizer,application'
          | 'organizer,application,job_interview_stage'
          | 'organizer,job_interview_stage'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'status'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'status'
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
          'application/json': components['schemas']['ScheduledInterview']
        }
      }
    }
  }
  interviews_meta_post_retrieve: {
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
  job_interview_stages_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'job'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return interview stages for this job. */
        job_id?: string
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
          'application/json': components['schemas']['PaginatedJobInterviewStageList']
        }
      }
    }
  }
  job_interview_stages_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'job'
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
          'application/json': components['schemas']['JobInterviewStage']
        }
      }
    }
  }
  job_postings_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'job'
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
        /** @description If provided, will only return Job Postings with this status. Options: ('PUBLISHED', 'CLOSED', 'DRAFT', 'INTERNAL', 'PENDING')
         *
         *     * `PUBLISHED` - PUBLISHED
         *     * `CLOSED` - CLOSED
         *     * `DRAFT` - DRAFT
         *     * `INTERNAL` - INTERNAL
         *     * `PENDING` - PENDING */
        status?:
          | 'CLOSED'
          | 'DRAFT'
          | 'INTERNAL'
          | 'PENDING'
          | 'PUBLISHED'
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
          'application/json': components['schemas']['PaginatedJobPostingList']
        }
      }
    }
  }
  job_postings_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'job'
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
          'application/json': components['schemas']['JobPosting']
        }
      }
    }
  }
  jobs_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return jobs with this code. */
        code?: string | null
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'departments'
          | 'departments,hiring_managers'
          | 'departments,hiring_managers,job_postings'
          | 'departments,hiring_managers,job_postings,recruiters'
          | 'departments,hiring_managers,recruiters'
          | 'departments,job_postings'
          | 'departments,job_postings,recruiters'
          | 'departments,offices'
          | 'departments,offices,hiring_managers'
          | 'departments,offices,hiring_managers,job_postings'
          | 'departments,offices,hiring_managers,job_postings,recruiters'
          | 'departments,offices,hiring_managers,recruiters'
          | 'departments,offices,job_postings'
          | 'departments,offices,job_postings,recruiters'
          | 'departments,offices,recruiters'
          | 'departments,recruiters'
          | 'hiring_managers'
          | 'hiring_managers,job_postings'
          | 'hiring_managers,job_postings,recruiters'
          | 'hiring_managers,recruiters'
          | 'job_postings'
          | 'job_postings,recruiters'
          | 'offices'
          | 'offices,hiring_managers'
          | 'offices,hiring_managers,job_postings'
          | 'offices,hiring_managers,job_postings,recruiters'
          | 'offices,hiring_managers,recruiters'
          | 'offices,job_postings'
          | 'offices,job_postings,recruiters'
          | 'offices,recruiters'
          | 'recruiters'
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
        /** @description If provided, will only return jobs for this office; multiple offices can be separated by commas. */
        offices?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'status'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'status'
        /** @description If provided, will only return jobs with this status. Options: ('OPEN', 'CLOSED', 'DRAFT', 'ARCHIVED', 'PENDING')
         *
         *     * `OPEN` - OPEN
         *     * `CLOSED` - CLOSED
         *     * `DRAFT` - DRAFT
         *     * `ARCHIVED` - ARCHIVED
         *     * `PENDING` - PENDING */
        status?: 'ARCHIVED' | 'CLOSED' | 'DRAFT' | 'OPEN' | 'PENDING' | null
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
          'application/json': components['schemas']['PaginatedJobList']
        }
      }
    }
  }
  jobs_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'departments'
          | 'departments,hiring_managers'
          | 'departments,hiring_managers,job_postings'
          | 'departments,hiring_managers,job_postings,recruiters'
          | 'departments,hiring_managers,recruiters'
          | 'departments,job_postings'
          | 'departments,job_postings,recruiters'
          | 'departments,offices'
          | 'departments,offices,hiring_managers'
          | 'departments,offices,hiring_managers,job_postings'
          | 'departments,offices,hiring_managers,job_postings,recruiters'
          | 'departments,offices,hiring_managers,recruiters'
          | 'departments,offices,job_postings'
          | 'departments,offices,job_postings,recruiters'
          | 'departments,offices,recruiters'
          | 'departments,recruiters'
          | 'hiring_managers'
          | 'hiring_managers,job_postings'
          | 'hiring_managers,job_postings,recruiters'
          | 'hiring_managers,recruiters'
          | 'job_postings'
          | 'job_postings,recruiters'
          | 'offices'
          | 'offices,hiring_managers'
          | 'offices,hiring_managers,job_postings'
          | 'offices,hiring_managers,job_postings,recruiters'
          | 'offices,hiring_managers,recruiters'
          | 'offices,job_postings'
          | 'offices,job_postings,recruiters'
          | 'offices,recruiters'
          | 'recruiters'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'status'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'status'
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
          'application/json': components['schemas']['Job']
        }
      }
    }
  }
  jobs_screening_questions_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'job' | 'options' | 'options,job'
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
        job_id: string
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
          'application/json': components['schemas']['PaginatedScreeningQuestionList']
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
  offers_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return offers for this application. */
        application_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description If provided, will only return offers created by this user. */
        creator_id?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'application' | 'application,creator' | 'creator'
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
        remote_fields?: 'status'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'status'
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
          'application/json': components['schemas']['PaginatedOfferList']
        }
      }
    }
  }
  offers_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'application' | 'application,creator' | 'creator'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'status'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'status'
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
          'application/json': components['schemas']['Offer']
        }
      }
    }
  }
  offices_list: {
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
          'application/json': components['schemas']['PaginatedOfficeList']
        }
      }
    }
  }
  offices_retrieve: {
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
          'application/json': components['schemas']['Office']
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
  reject_reasons_list: {
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
          'application/json': components['schemas']['PaginatedRejectReasonList']
        }
      }
    }
  }
  reject_reasons_retrieve: {
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
          'application/json': components['schemas']['RejectReason']
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
  scorecards_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return scorecards for this application. */
        application_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'application'
          | 'application,interview'
          | 'application,interview,interviewer'
          | 'application,interviewer'
          | 'interview'
          | 'interview,interviewer'
          | 'interviewer'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return scorecards for this interview. */
        interview_id?: string
        /** @description If provided, will only return scorecards for this interviewer. */
        interviewer_id?: string
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'overall_recommendation'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'overall_recommendation'
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
          'application/json': components['schemas']['PaginatedScorecardList']
        }
      }
    }
  }
  scorecards_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'application'
          | 'application,interview'
          | 'application,interview,interviewer'
          | 'application,interviewer'
          | 'interview'
          | 'interview,interviewer'
          | 'interviewer'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'overall_recommendation'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'overall_recommendation'
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
          'application/json': components['schemas']['Scorecard']
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
  tags_list: {
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
          'application/json': components['schemas']['PaginatedTagList']
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
        /** @description If provided, will only return remote users with the given email address */
        email?: string | null
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
        remote_fields?: 'access_role'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'access_role'
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
          'application/json': components['schemas']['PaginatedRemoteUserList']
        }
      }
    }
  }
  users_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'access_role'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'access_role'
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
          'application/json': components['schemas']['RemoteUser']
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
