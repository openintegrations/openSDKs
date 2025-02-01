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
  '/accounts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Account` objects. */
    get: operations['accounts_list']
    put?: never
    /** @description Creates an `Account` object with the given values. */
    post: operations['accounts_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/accounts/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Account` object with the given `id`. */
    get: operations['accounts_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description Updates an `Account` object with the given `id`. */
    patch: operations['accounts_partial_update']
    trace?: never
  }
  '/accounts/meta/patch/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `CRMAccount` PATCHs. */
    get: operations['accounts_meta_patch_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/accounts/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `CRMAccount` POSTs. */
    get: operations['accounts_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/accounts/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['accounts_remote_field_classes_list']
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
    /** @description Updates a `Contact` object with the given `id`. */
    patch: operations['contacts_partial_update']
    trace?: never
  }
  '/contacts/ignore/{model_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes. */
    post: operations['contacts_ignore_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/contacts/meta/patch/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `CRMContact` PATCHs. */
    get: operations['contacts_meta_patch_retrieve']
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
    /** @description Returns metadata for `CRMContact` POSTs. */
    get: operations['contacts_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/contacts/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['contacts_remote_field_classes_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `CustomObjectClass` objects. */
    get: operations['custom_object_classes_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{custom_object_class_id}/association-types': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `AssociationType` objects. */
    get: operations['custom_object_classes_association_types_list']
    put?: never
    /** @description Creates an `AssociationType` object with the given values. */
    post: operations['custom_object_classes_association_types_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{custom_object_class_id}/association-types/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `AssociationType` object with the given `id`. */
    get: operations['custom_object_classes_association_types_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{custom_object_class_id}/association-types/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `CRMAssociationType` POSTs. */
    get: operations['custom_object_classes_association_types_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{custom_object_class_id}/custom-objects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `CustomObject` objects. */
    get: operations['custom_object_classes_custom_objects_list']
    put?: never
    /** @description Creates a `CustomObject` object with the given values. */
    post: operations['custom_object_classes_custom_objects_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{custom_object_class_id}/custom-objects/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `CustomObject` object with the given `id`. */
    get: operations['custom_object_classes_custom_objects_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{custom_object_class_id}/custom-objects/{object_id}/associations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Association` objects. */
    get: operations['custom_object_classes_custom_objects_associations_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{custom_object_class_id}/custom-objects/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `CRMCustomObject` POSTs. */
    get: operations['custom_object_classes_custom_objects_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `CustomObjectClass` object with the given `id`. */
    get: operations['custom_object_classes_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/{source_class_id}/custom-objects/{source_object_id}/associations/{target_class_id}/{target_object_id}/{association_type_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** @description Creates an Association between `source_object_id` and `target_object_id` of type `association_type_id`. */
    put: operations['custom_object_classes_custom_objects_associations_update']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/custom-object-classes/custom-objects/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['custom_object_classes_custom_objects_remote_field_classes_list']
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
  '/engagement-types': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `EngagementType` objects. */
    get: operations['engagement_types_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/engagement-types/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `EngagementType` object with the given `id`. */
    get: operations['engagement_types_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/engagement-types/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['engagement_types_remote_field_classes_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/engagements': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Engagement` objects. */
    get: operations['engagements_list']
    put?: never
    /** @description Creates an `Engagement` object with the given values. */
    post: operations['engagements_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/engagements/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Engagement` object with the given `id`. */
    get: operations['engagements_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description Updates an `Engagement` object with the given `id`. */
    patch: operations['engagements_partial_update']
    trace?: never
  }
  '/engagements/meta/patch/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Engagement` PATCHs. */
    get: operations['engagements_meta_patch_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/engagements/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Engagement` POSTs. */
    get: operations['engagements_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/engagements/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['engagements_remote_field_classes_list']
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
  '/leads': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Lead` objects. */
    get: operations['leads_list']
    put?: never
    /** @description Creates a `Lead` object with the given values. */
    post: operations['leads_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/leads/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Lead` object with the given `id`. */
    get: operations['leads_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/leads/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Lead` POSTs. */
    get: operations['leads_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/leads/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['leads_remote_field_classes_list']
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
  '/notes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Note` objects. */
    get: operations['notes_list']
    put?: never
    /** @description Creates a `Note` object with the given values. */
    post: operations['notes_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/notes/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Note` object with the given `id`. */
    get: operations['notes_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/notes/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Note` POSTs. */
    get: operations['notes_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/notes/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['notes_remote_field_classes_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/opportunities': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Opportunity` objects. */
    get: operations['opportunities_list']
    put?: never
    /** @description Creates an `Opportunity` object with the given values. */
    post: operations['opportunities_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/opportunities/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Opportunity` object with the given `id`. */
    get: operations['opportunities_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description Updates an `Opportunity` object with the given `id`. */
    patch: operations['opportunities_partial_update']
    trace?: never
  }
  '/opportunities/meta/patch/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Opportunity` PATCHs. */
    get: operations['opportunities_meta_patch_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/opportunities/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Opportunity` POSTs. */
    get: operations['opportunities_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/opportunities/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['opportunities_remote_field_classes_list']
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
  '/stages': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Stage` objects. */
    get: operations['stages_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/stages/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Stage` object with the given `id`. */
    get: operations['stages_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/stages/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['stages_remote_field_classes_list']
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
  '/tasks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Task` objects. */
    get: operations['tasks_list']
    put?: never
    /** @description Creates a `Task` object with the given values. */
    post: operations['tasks_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tasks/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Task` object with the given `id`. */
    get: operations['tasks_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description Updates a `Task` object with the given `id`. */
    patch: operations['tasks_partial_update']
    trace?: never
  }
  '/tasks/meta/patch/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Task` PATCHs. */
    get: operations['tasks_meta_patch_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tasks/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Task` POSTs. */
    get: operations['tasks_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tasks/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['tasks_remote_field_classes_list']
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
  '/users/ignore/{model_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes. */
    post: operations['users_ignore_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['users_remote_field_classes_list']
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
    /** @description # The Account Object
     *     ### Description
     *     The `Account` object is used to represent a company in a CRM system.
     *     ### Usage Example
     *     TODO */
    Account: {
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
       * Format: uuid
       * @description The account's owner.
       * @example 0258cbc6-6020-430a-848e-aafacbadf4ae
       */
      owner?: string | null
      /**
       * @description The account's name.
       * @example Merge API
       */
      name?: string | null
      /**
       * @description The account's description.
       * @example One API for all integrations
       */
      description?: string | null
      /**
       * @description The account's industry.
       * @example API's
       */
      industry?: string | null
      /**
       * Format: uri
       * @description The account's website.
       * @example https://merge.dev/
       */
      website?: string | null
      /**
       * @description The account's number of employees.
       * @example 276000
       */
      number_of_employees?: number | null
      /** @example [
       *       {
       *         "street_1": "50 Bowling Green Dr",
       *         "street_2": "Golden Gate Park",
       *         "city": "San Francisco",
       *         "state": "CA",
       *         "postal_code": "94122",
       *         "country": "US",
       *         "address_type": "Shipping",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      addresses?: components['schemas']['Address'][]
      /** @example [
       *       {
       *         "phone_number": "+16788879833",
       *         "phone_number_type": "Mobile",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      readonly phone_numbers?: components['schemas']['PhoneNumber'][]
      /**
       * Format: date-time
       * @description The last date (either most recent or furthest in the future) of when an activity occurs in an account.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
      /**
       * Format: date-time
       * @description When the CRM system account data was last modified by a user with a login.
       * @example 2022-01-09T00:00:00Z
       */
      remote_updated_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's account was created.
       * @example 2021-11-10T00:00:00Z
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
       *         "path": "/accounts",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
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
    /** @description # The Account Object
     *     ### Description
     *     The `Account` object is used to represent a company in a CRM system.
     *     ### Usage Example
     *     TODO */
    AccountRequest: {
      /**
       * Format: uuid
       * @description The account's owner.
       * @example 0258cbc6-6020-430a-848e-aafacbadf4ae
       */
      owner?: string | null
      /**
       * @description The account's name.
       * @example Merge API
       */
      name?: string | null
      /**
       * @description The account's description.
       * @example One API for all integrations
       */
      description?: string | null
      /**
       * @description The account's industry.
       * @example API's
       */
      industry?: string | null
      /**
       * Format: uri
       * @description The account's website.
       * @example https://merge.dev/
       */
      website?: string | null
      /**
       * @description The account's number of employees.
       * @example 276000
       */
      number_of_employees?: number | null
      /** @example [
       *       {
       *         "street_1": "50 Bowling Green Dr",
       *         "street_2": "Golden Gate Park",
       *         "city": "San Francisco",
       *         "state": "CA",
       *         "postal_code": "94122",
       *         "country": "US",
       *         "address_type": "Shipping",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      addresses?: components['schemas']['AddressRequest'][]
      /**
       * Format: date-time
       * @description The last date (either most recent or furthest in the future) of when an activity occurs in an account.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
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
     * @description * `CALL` - CALL
     *     * `MEETING` - MEETING
     *     * `EMAIL` - EMAIL
     * @enum {string}
     */
    ActivityTypeEnum: 'CALL' | 'MEETING' | 'EMAIL'
    /** @description # The Address Object
     *     ### Description
     *     The `Address` object is used to represent an entity's address.
     *     ### Usage Example
     *     TODO */
    Address: {
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
       * @description Line 1 of the address's street.
       * @example 50 Bowling Green Dr
       */
      street_1?: string | null
      /**
       * @description Line 2 of the address's street.
       * @example Golden Gate Park
       */
      street_2?: string | null
      /**
       * @description The address's city.
       * @example San Francisco
       */
      city?: string | null
      /**
       * @description The address's state.
       * @example CA
       */
      state?: string | null
      /**
       * @description The address's postal code.
       * @example 94122
       */
      postal_code?: string | null
      /**
       * @description The address's country.
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
       * @description The address type.
       *
       *     * `BILLING` - BILLING
       *     * `SHIPPING` - SHIPPING
       * @example Shipping
       */
      address_type?: components['schemas']['AddressTypeEnum'] | null
    }
    /** @description # The Address Object
     *     ### Description
     *     The `Address` object is used to represent an entity's address.
     *     ### Usage Example
     *     TODO */
    AddressRequest: {
      /**
       * @description Line 1 of the address's street.
       * @example 50 Bowling Green Dr
       */
      street_1?: string | null
      /**
       * @description Line 2 of the address's street.
       * @example Golden Gate Park
       */
      street_2?: string | null
      /**
       * @description The address's city.
       * @example San Francisco
       */
      city?: string | null
      /**
       * @description The address's state.
       * @example CA
       */
      state?: string | null
      /**
       * @description The address's postal code.
       * @example 94122
       */
      postal_code?: string | null
      /**
       * @description The address's country.
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
       * @description The address type.
       *
       *     * `BILLING` - BILLING
       *     * `SHIPPING` - SHIPPING
       * @example Shipping
       */
      address_type?: components['schemas']['AddressTypeEnum'] | null
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
     * @description * `BILLING` - BILLING
     *     * `SHIPPING` - SHIPPING
     * @enum {string}
     */
    AddressTypeEnum: 'BILLING' | 'SHIPPING'
    AdvancedMetadata: {
      /** Format: uuid */
      id: string
      display_name?: string
      description?: string
      is_required?: boolean
      is_custom?: boolean
      field_choices?: unknown[]
    }
    /** @description # The Association Object
     *     ### Description
     *     The `Association` record refers to an instance of an Association Type.
     *     ### Usage Example
     *     TODO */
    Association: {
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
       * @example a8f5d29f-4e50-473f-8f12-27128ffcd37a
       */
      readonly source_object?: string
      /**
       * Format: uuid
       * @example da0b1963-be70-469c-9f8c-06a81d0fe759
       */
      readonly target_object?: string
      /**
       * Format: uuid
       * @description The association type the association belongs to.
       * @example 88a71b5c-a3cc-4bce-84ff-d18b049a4081
       */
      association_type?: string | null
    }
    AssociationSubType: {
      readonly id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       */
      readonly modified_at?: string
      readonly origin_type?: string | null
    }
    /** @description # The AssociationType Object
     *     ### Description
     *     The `Association Type` object represents the relationship between two objects.
     *     ### Usage Example
     *     TODO */
    AssociationType: {
      /**
       * Format: uuid
       * @example 5bb73c32-3c6c-4757-ab7d-7d3540a1be31
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 93
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
       * @description The class of the source object (Custom Object or Common Model) for the association type.
       * @example {
       *       "id": "ff1ff4cb-a66b-47dc-8e2a-50388049e602",
       *       "origin_type": "CUSTOM_OBJECT"
       *     }
       */
      readonly source_object_class?: {
        [key: string]: unknown
      }
      /** @example [
       *       {
       *         "id": "Opportunity",
       *         "origin_type": "COMMON_MODEL"
       *       }
       *     ] */
      readonly target_object_classes?: components['schemas']['AssociationSubType'][]
      /** @example order_to_opportunity */
      remote_key_name?: string | null
      /** @example Order to Opportunity */
      display_name?: string | null
      /** @example ONE_TO_MANY */
      cardinality?: components['schemas']['CardinalityEnum'] | null
      is_required?: boolean
    }
    AssociationTypeRequestRequest: {
      source_object_class: components['schemas']['ObjectClassDescriptionRequest']
      target_object_classes: components['schemas']['ObjectClassDescriptionRequest'][]
      remote_key_name: string
      display_name?: string
      cardinality?: components['schemas']['CardinalityEnum']
      /** @default false */
      is_required: boolean
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
    CRMAccountEndpointRequest: {
      model: components['schemas']['AccountRequest']
    }
    CRMAccountResponse: {
      model: components['schemas']['Account']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    CRMAssociationTypeEndpointRequest: {
      model: components['schemas']['AssociationTypeRequestRequest']
    }
    CRMAssociationTypeResponse: {
      model: components['schemas']['AssociationType']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    CRMContactEndpointRequest: {
      model: components['schemas']['ContactRequest']
    }
    CRMContactResponse: {
      model: components['schemas']['Contact']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    CRMCustomObjectEndpointRequest: {
      model: components['schemas']['CustomObjectRequest']
    }
    CRMCustomObjectResponse: {
      model: components['schemas']['CustomObject']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `ONE_TO_ONE` - ONE_TO_ONE
     *     * `MANY_TO_ONE` - MANY_TO_ONE
     *     * `MANY_TO_MANY` - MANY_TO_MANY
     *     * `ONE_TO_MANY` - ONE_TO_MANY
     * @enum {string}
     */
    CardinalityEnum:
      | 'ONE_TO_ONE'
      | 'MANY_TO_ONE'
      | 'MANY_TO_MANY'
      | 'ONE_TO_MANY'
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
     *     The `Contact` object is used to represent an existing point of contact at a company in a CRM system.
     *     ### Usage Example
     *     TODO */
    Contact: {
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
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
       * Format: uuid
       * @description The contact's account.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The contact's owner.
       * @example b8fbfc30-0982-420e-8c20-dab07b70b9d6
       */
      owner?: string | null
      /** @example [
       *       {
       *         "street_1": "50 Bowling Green Dr",
       *         "street_2": "Golden Gate Park",
       *         "city": "San Francisco",
       *         "state": "CA",
       *         "postal_code": "94122",
       *         "country": "US",
       *         "address_type": "Shipping",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      addresses?: components['schemas']['Address'][]
      /** @example [
       *       {
       *         "email_address": "hello@merge.dev",
       *         "email_address_type": "Work"
       *       }
       *     ] */
      email_addresses?: components['schemas']['EmailAddress'][]
      /** @example [
       *       {
       *         "phone_number": "+13785579223",
       *         "phone_number_type": "Mobile",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      phone_numbers?: components['schemas']['PhoneNumber'][]
      /**
       * Format: date-time
       * @description When the contact's last activity occurred.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's contact was created.
       * @example 2021-11-10T00:00:00Z
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
       *         "path": "/contacts",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    /** @description # The Contact Object
     *     ### Description
     *     The `Contact` object is used to represent an existing point of contact at a company in a CRM system.
     *     ### Usage Example
     *     TODO */
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
       * Format: uuid
       * @description The contact's account.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The contact's owner.
       * @example b8fbfc30-0982-420e-8c20-dab07b70b9d6
       */
      owner?: string | null
      /** @example [
       *       {
       *         "street_1": "50 Bowling Green Dr",
       *         "street_2": "Golden Gate Park",
       *         "city": "San Francisco",
       *         "state": "CA",
       *         "postal_code": "94122",
       *         "country": "US",
       *         "address_type": "Shipping",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      addresses?: components['schemas']['AddressRequest'][]
      /** @example [
       *       {
       *         "email_address": "hello@merge.dev",
       *         "email_address_type": "Work"
       *       }
       *     ] */
      email_addresses?: components['schemas']['EmailAddressRequest'][]
      /** @example [
       *       {
       *         "phone_number": "+13785579223",
       *         "phone_number_type": "Mobile",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      phone_numbers?: components['schemas']['PhoneNumberRequest'][]
      /**
       * Format: date-time
       * @description When the contact's last activity occurred.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
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
    /** @description # The CustomObject Object
     *     ### Description
     *     The `Custom Object` record refers to an instance of a Custom Object Class.
     *     ### Usage Example
     *     TODO */
    CustomObject: {
      /**
       * Format: uuid
       * @example da0b1963-be70-469c-9f8c-06a81d0fe759
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 4183634295
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
       * @description The custom object class the custom object record belongs to.
       * @example ff1ff4cb-a66b-47dc-8e2a-50388049e602
       */
      object_class?: string | null
      /**
       * @description The fields and values contained within the custom object record.
       * @example {
       *       "order_id": "4183634295",
       *       "order_quantity": 50,
       *       "customer_type": "Returning"
       *     }
       */
      readonly fields?: {
        [key: string]: unknown
      }
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    /** @description # The Custom Object Class Object
     *     ### Description
     *     The `Custom Object Class` object is used to represent a Custom Object Schema in the remote system.
     *     ### Usage Example
     *     TODO */
    CustomObjectClass: {
      /**
       * Format: uuid
       * @example ff1ff4cb-a66b-47dc-8e2a-50388049e602
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 9579977
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The custom object class's name.
       * @example order
       */
      name?: string | null
      /**
       * @description The custom object class's description.
       * @example Order object
       */
      description?: string | null
      /**
       * @description The custom object class's singular and plural labels.
       * @example {
       *       "singular": "Order",
       *       "plural": "Orders"
       *     }
       */
      readonly labels?: {
        [key: string]: string | null
      }
      /** @example [
       *       {
       *         "display_name": "Order ID",
       *         "remote_key_name": "order_id",
       *         "description": "The unique ID for the order.",
       *         "is_required": true,
       *         "is_nested_list": false,
       *         "field_type": "string",
       *         "field_format": "string",
       *         "field_choices": [],
       *         "item_schema": "string"
       *       },
       *       {
       *         "display_name": "Order Quantity",
       *         "remote_key_name": "order_quantity",
       *         "description": "The number of items ordered.",
       *         "is_required": true,
       *         "is_nested_list": false,
       *         "field_type": "number",
       *         "field_format": "number",
       *         "field_choices": [],
       *         "item_schema": "string"
       *       },
       *       {
       *         "display_name": "Customer Type",
       *         "remote_key_name": "customer_type",
       *         "description": "The type of customer.",
       *         "is_required": true,
       *         "is_nested_list": false,
       *         "field_type": "string",
       *         "field_format": "enumeration",
       *         "field_choices": [
       *           "New",
       *           "Returning"
       *         ],
       *         "item_schema": null
       *       }
       *     ] */
      readonly fields?: components['schemas']['RemoteFieldClassForCustomObjectClass'][]
      /** @description The types of associations with other models that the custom object class can have. */
      readonly association_types?:
        | {
            [key: string]: unknown
          }[]
        | null
    }
    CustomObjectRequest: {
      /** @example {
       *       "test_field": "hello"
       *     } */
      fields: {
        [key: string]: unknown
      }
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
     * @description * `INBOUND` - INBOUND
     *     * `OUTBOUND` - OUTBOUND
     * @enum {string}
     */
    DirectionEnum: 'INBOUND' | 'OUTBOUND'
    /** @description # The EmailAddress Object
     *     ### Description
     *     The `EmailAddress` object is used to represent an entity's email address.
     *     ### Usage Example
     *     Fetch from the `GET Contact` endpoint and view their email addresses. */
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
       * @description The email address.
       * @example merge_is_hiring@merge.dev
       */
      email_address?: string | null
      /**
       * @description The email address's type.
       * @example Work
       */
      email_address_type?: string | null
    }
    /** @description # The EmailAddress Object
     *     ### Description
     *     The `EmailAddress` object is used to represent an entity's email address.
     *     ### Usage Example
     *     Fetch from the `GET Contact` endpoint and view their email addresses. */
    EmailAddressRequest: {
      /**
       * @description The email address.
       * @example merge_is_hiring@merge.dev
       */
      email_address?: string | null
      /**
       * @description The email address's type.
       * @example Work
       */
      email_address_type?: string | null
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
    /** @description # The Engagement Object
     *     ### Description
     *     The `Engagement` object is used to represent an interaction noted in a CRM system.
     *     ### Usage Example
     *     TODO */
    Engagement: {
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
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
       * @description The engagement's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * @description The engagement's content.
       * @example Call for negotiation
       */
      content?: string | null
      /**
       * @description The engagement's subject.
       * @example Call from customer
       */
      subject?: string | null
      /**
       * @description The engagement's direction.
       *
       *     * `INBOUND` - INBOUND
       *     * `OUTBOUND` - OUTBOUND
       * @example INBOUND
       */
      direction?: components['schemas']['DirectionEnum'] | null
      /**
       * Format: uuid
       * @description The engagement type of the engagement.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      engagement_type?: string | null
      /**
       * Format: date-time
       * @description The time at which the engagement started.
       * @example 2022-02-10T00:00:00Z
       */
      start_time?: string | null
      /**
       * Format: date-time
       * @description The time at which the engagement ended.
       * @example 2022-02-10T00:05:00Z
       */
      end_time?: string | null
      /**
       * Format: uuid
       * @description The account of the engagement.
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      account?: string | null
      /** @example [
       *       "a7c55bc6-2940-c80a-848e-bbfacbfdf4fg"
       *     ] */
      contacts?: (string | null)[]
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
       *         "path": "/engagements",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    EngagementEndpointRequest: {
      model: components['schemas']['EngagementRequest']
    }
    /** @description # The Engagement Object
     *     ### Description
     *     The `Engagement` object is used to represent an interaction noted in a CRM system.
     *     ### Usage Example
     *     TODO */
    EngagementRequest: {
      /**
       * Format: uuid
       * @description The engagement's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * @description The engagement's content.
       * @example Call for negotiation
       */
      content?: string | null
      /**
       * @description The engagement's subject.
       * @example Call from customer
       */
      subject?: string | null
      /**
       * @description The engagement's direction.
       *
       *     * `INBOUND` - INBOUND
       *     * `OUTBOUND` - OUTBOUND
       * @example INBOUND
       */
      direction?: components['schemas']['DirectionEnum'] | null
      /**
       * Format: uuid
       * @description The engagement type of the engagement.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      engagement_type?: string | null
      /**
       * Format: date-time
       * @description The time at which the engagement started.
       * @example 2022-02-10T00:00:00Z
       */
      start_time?: string | null
      /**
       * Format: date-time
       * @description The time at which the engagement ended.
       * @example 2022-02-10T00:05:00Z
       */
      end_time?: string | null
      /**
       * Format: uuid
       * @description The account of the engagement.
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      account?: string | null
      /** @example [
       *       "a7c55bc6-2940-c80a-848e-bbfacbfdf4fg"
       *     ] */
      contacts?: (string | null)[]
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    EngagementResponse: {
      model: components['schemas']['Engagement']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /** @description # The Engagement Type Object
     *     ### Description
     *     The `Engagement Type` object is used to represent an interaction activity. A given `Engagement` typically has an `Engagement Type` object represented in the engagement_type field.
     *     ### Usage Example
     *     TODO */
    EngagementType: {
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
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
       * @description The engagement type's activity type.
       *
       *     * `CALL` - CALL
       *     * `MEETING` - MEETING
       *     * `EMAIL` - EMAIL
       * @example CALL
       */
      activity_type?: components['schemas']['ActivityTypeEnum'] | null
      /**
       * @description The engagement type's name.
       * @example First Call
       */
      name?: string | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
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
      Account?: components['schemas']['ExternalTargetFieldAPI'][]
      Contact?: components['schemas']['ExternalTargetFieldAPI'][]
      Lead?: components['schemas']['ExternalTargetFieldAPI'][]
      Note?: components['schemas']['ExternalTargetFieldAPI'][]
      Opportunity?: components['schemas']['ExternalTargetFieldAPI'][]
      Stage?: components['schemas']['ExternalTargetFieldAPI'][]
      User?: components['schemas']['ExternalTargetFieldAPI'][]
      Task?: components['schemas']['ExternalTargetFieldAPI'][]
      Engagement?: components['schemas']['ExternalTargetFieldAPI'][]
    }
    /**
     * @description * `string` - string
     *     * `number` - number
     *     * `date` - date
     *     * `datetime` - datetime
     *     * `bool` - bool
     *     * `list` - list
     * @enum {string}
     */
    FieldFormatEnum: 'string' | 'number' | 'date' | 'datetime' | 'bool' | 'list'
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
      Account?: components['schemas']['FieldMappingApiInstance'][]
      Contact?: components['schemas']['FieldMappingApiInstance'][]
      Lead?: components['schemas']['FieldMappingApiInstance'][]
      Note?: components['schemas']['FieldMappingApiInstance'][]
      Opportunity?: components['schemas']['FieldMappingApiInstance'][]
      Stage?: components['schemas']['FieldMappingApiInstance'][]
      User?: components['schemas']['FieldMappingApiInstance'][]
      Task?: components['schemas']['FieldMappingApiInstance'][]
      Engagement?: components['schemas']['FieldMappingApiInstance'][]
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
     * @description * `string` - string
     *     * `number` - number
     *     * `date` - date
     *     * `datetime` - datetime
     *     * `bool` - bool
     *     * `list` - list
     * @enum {string}
     */
    FieldTypeEnum: 'string' | 'number' | 'date' | 'datetime' | 'bool' | 'list'
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
    /**
     * @description * `string` - uuid
     *     * `number` - url
     *     * `date` - email
     *     * `datetime` - phone
     *     * `bool` - currency
     *     * `list` - decimal
     * @enum {string}
     */
    ItemFormatEnum: 'string' | 'number' | 'date' | 'datetime' | 'bool' | 'list'
    ItemSchema: {
      item_type?: components['schemas']['ItemTypeEnum']
      item_format?: components['schemas']['ItemFormatEnum']
      item_choices?: string[]
    }
    /**
     * @description * `string` - string
     *     * `number` - number
     *     * `date` - date
     *     * `datetime` - datetime
     *     * `bool` - bool
     *     * `list` - list
     * @enum {string}
     */
    ItemTypeEnum: 'string' | 'number' | 'date' | 'datetime' | 'bool' | 'list'
    /**
     * @description * `en` - en
     *     * `de` - de
     * @enum {string}
     */
    LanguageEnum: 'en' | 'de'
    /** @description # The Lead Object
     *     ### Description
     *     The `Lead` object is used to represent an individual who is a potential customer.
     *     ### Usage Example
     *     TODO */
    Lead: {
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
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
       * @description The lead's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * @description The lead's source.
       * @example API Blogger
       */
      lead_source?: string | null
      /**
       * @description The lead's title.
       * @example Co-Founder
       */
      title?: string | null
      /**
       * @description The lead's company.
       * @example Merge API
       */
      company?: string | null
      /**
       * @description The lead's first name.
       * @example Gil
       */
      first_name?: string | null
      /**
       * @description The lead's last name.
       * @example Feig
       */
      last_name?: string | null
      /** @example [
       *       {
       *         "street_1": "50 Bowling Green Dr",
       *         "street_2": "Golden Gate Park",
       *         "city": "San Francisco",
       *         "state": "CA",
       *         "postal_code": "94122",
       *         "country": "US",
       *         "address_type": "Shipping",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      readonly addresses?: components['schemas']['Address'][]
      /** @example [
       *       {
       *         "email_address": "hello@merge.dev",
       *         "email_address_type": "Work"
       *       }
       *     ] */
      readonly email_addresses?: components['schemas']['EmailAddress'][]
      /** @example [
       *       {
       *         "phone_number": "+16789932455",
       *         "phone_number_type": "Mobile",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      readonly phone_numbers?: components['schemas']['PhoneNumber'][]
      /**
       * Format: date-time
       * @description When the third party's lead was updated.
       * @example 2022-02-10T00:00:00Z
       */
      remote_updated_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's lead was created.
       * @example 2021-11-10T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the lead was converted.
       * @example 2022-03-10T00:00:00Z
       */
      converted_date?: string | null
      /**
       * Format: uuid
       * @description The contact of the converted lead.
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      converted_contact?: string | null
      /**
       * Format: uuid
       * @description The account of the converted lead.
       * @example 9c9de072-29cf-48e3-9578-1ca5b145b40e
       */
      converted_account?: string | null
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
       *         "path": "/leads",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    LeadEndpointRequest: {
      model: components['schemas']['LeadRequest']
    }
    /** @description # The Lead Object
     *     ### Description
     *     The `Lead` object is used to represent an individual who is a potential customer.
     *     ### Usage Example
     *     TODO */
    LeadRequest: {
      /**
       * Format: uuid
       * @description The lead's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * @description The lead's source.
       * @example API Blogger
       */
      lead_source?: string | null
      /**
       * @description The lead's title.
       * @example Co-Founder
       */
      title?: string | null
      /**
       * @description The lead's company.
       * @example Merge API
       */
      company?: string | null
      /**
       * @description The lead's first name.
       * @example Gil
       */
      first_name?: string | null
      /**
       * @description The lead's last name.
       * @example Feig
       */
      last_name?: string | null
      /** @example [
       *       {
       *         "street_1": "50 Bowling Green Dr",
       *         "street_2": "Golden Gate Park",
       *         "city": "San Francisco",
       *         "state": "CA",
       *         "postal_code": "94122",
       *         "country": "US",
       *         "address_type": "Shipping",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      addresses?: components['schemas']['AddressRequest'][]
      /** @example [
       *       {
       *         "email_address": "hello@merge.dev",
       *         "email_address_type": "Work"
       *       }
       *     ] */
      email_addresses?: components['schemas']['EmailAddressRequest'][]
      /** @example [
       *       {
       *         "phone_number": "+16789932455",
       *         "phone_number_type": "Mobile",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      phone_numbers?: components['schemas']['PhoneNumberRequest'][]
      /**
       * Format: date-time
       * @description When the lead was converted.
       * @example 2022-03-10T00:00:00Z
       */
      converted_date?: string | null
      /**
       * Format: uuid
       * @description The contact of the converted lead.
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      converted_contact?: string | null
      /**
       * Format: uuid
       * @description The account of the converted lead.
       * @example 9c9de072-29cf-48e3-9578-1ca5b145b40e
       */
      converted_account?: string | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    LeadResponse: {
      model: components['schemas']['Lead']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
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
    /** @description # The Note Object
     *     ### Description
     *     The `Note` object is used to represent a note on another object.
     *     ### Usage Example
     *     TODO */
    Note: {
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
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
       * @description The note's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * @description The note's content.
       * @example Merge is hiring!
       */
      content?: string | null
      /**
       * Format: uuid
       * @description The note's contact.
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      contact?: string | null
      /**
       * Format: uuid
       * @description The note's account.
       * @example fba1fbc6-67c0-4cb2-a176-7896acd2ffd5
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The note's opportunity.
       * @example 754a244e-dd67-4731-a8d3-9bff9dc10465
       */
      opportunity?: string | null
      /**
       * Format: date-time
       * @description When the third party's lead was updated.
       * @example 2022-02-10T00:00:00Z
       */
      remote_updated_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's lead was created.
       * @example 2021-11-10T00:00:00Z
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
       *         "path": "/notes",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    NoteEndpointRequest: {
      model: components['schemas']['NoteRequest']
    }
    /** @description # The Note Object
     *     ### Description
     *     The `Note` object is used to represent a note on another object.
     *     ### Usage Example
     *     TODO */
    NoteRequest: {
      /**
       * Format: uuid
       * @description The note's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * @description The note's content.
       * @example Merge is hiring!
       */
      content?: string | null
      /**
       * Format: uuid
       * @description The note's contact.
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      contact?: string | null
      /**
       * Format: uuid
       * @description The note's account.
       * @example fba1fbc6-67c0-4cb2-a176-7896acd2ffd5
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The note's opportunity.
       * @example 754a244e-dd67-4731-a8d3-9bff9dc10465
       */
      opportunity?: string | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    NoteResponse: {
      model: components['schemas']['Note']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    ObjectClassDescriptionRequest: {
      id: string
      origin_type: components['schemas']['OriginTypeEnum']
    }
    /** @description # The Opportunity Object
     *     ### Description
     *     The `Opportunity` object is used to represent a deal opportunity in a CRM system.
     *     ### Usage Example
     *     TODO */
    Opportunity: {
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
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
       * @description The opportunity's name.
       * @example Needs Integrations
       */
      name?: string | null
      /**
       * @description The opportunity's description.
       * @example Needs a Unified API for Integrations!
       */
      description?: string | null
      /**
       * @description The opportunity's amount.
       * @example 100000
       */
      amount?: number | null
      /**
       * Format: uuid
       * @description The opportunity's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * Format: uuid
       * @description The account of the opportunity.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The stage of the opportunity.
       * @example 1968cbc6-6040-430a-848e-aafacbadf4ad
       */
      stage?: string | null
      /**
       * @description The opportunity's status.
       *
       *     * `OPEN` - OPEN
       *     * `WON` - WON
       *     * `LOST` - LOST
       * @example WON
       */
      status?: components['schemas']['OpportunityStatusEnum'] | null
      /**
       * Format: date-time
       * @description When the opportunity's last activity occurred.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
      /**
       * Format: date-time
       * @description When the opportunity was closed.
       * @example 2022-02-10T00:00:00Z
       */
      close_date?: string | null
      /**
       * Format: date-time
       * @description When the third party's opportunity was created.
       * @example 2021-11-10T00:00:00Z
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
       *         "path": "/opportunities",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    OpportunityEndpointRequest: {
      model: components['schemas']['OpportunityRequest']
    }
    /** @description # The Opportunity Object
     *     ### Description
     *     The `Opportunity` object is used to represent a deal opportunity in a CRM system.
     *     ### Usage Example
     *     TODO */
    OpportunityRequest: {
      /**
       * @description The opportunity's name.
       * @example Needs Integrations
       */
      name?: string | null
      /**
       * @description The opportunity's description.
       * @example Needs a Unified API for Integrations!
       */
      description?: string | null
      /**
       * @description The opportunity's amount.
       * @example 100000
       */
      amount?: number | null
      /**
       * Format: uuid
       * @description The opportunity's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * Format: uuid
       * @description The account of the opportunity.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The stage of the opportunity.
       * @example 1968cbc6-6040-430a-848e-aafacbadf4ad
       */
      stage?: string | null
      /**
       * @description The opportunity's status.
       *
       *     * `OPEN` - OPEN
       *     * `WON` - WON
       *     * `LOST` - LOST
       * @example WON
       */
      status?: components['schemas']['OpportunityStatusEnum'] | null
      /**
       * Format: date-time
       * @description When the opportunity's last activity occurred.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
      /**
       * Format: date-time
       * @description When the opportunity was closed.
       * @example 2022-02-10T00:00:00Z
       */
      close_date?: string | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    OpportunityResponse: {
      model: components['schemas']['Opportunity']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `OPEN` - OPEN
     *     * `WON` - WON
     *     * `LOST` - LOST
     * @enum {string}
     */
    OpportunityStatusEnum: 'OPEN' | 'WON' | 'LOST'
    /**
     * @description * `CUSTOM_OBJECT` - CUSTOM_OBJECT
     *     * `COMMON_MODEL` - COMMON_MODEL
     *     * `REMOTE_ONLY_MODEL` - REMOTE_ONLY_MODEL
     * @enum {string}
     */
    OriginTypeEnum: 'CUSTOM_OBJECT' | 'COMMON_MODEL' | 'REMOTE_ONLY_MODEL'
    PaginatedAccountDetailsAndActionsList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AccountDetailsAndActions'][]
    }
    PaginatedAccountList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Account'][]
    }
    PaginatedAssociationList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Association'][]
    }
    PaginatedAssociationTypeList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AssociationType'][]
    }
    PaginatedAuditLogEventList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AuditLogEvent'][]
    }
    PaginatedContactList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Contact'][]
    }
    PaginatedCustomObjectClassList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['CustomObjectClass'][]
    }
    PaginatedCustomObjectList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['CustomObject'][]
    }
    PaginatedEngagementList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Engagement'][]
    }
    PaginatedEngagementTypeList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['EngagementType'][]
    }
    PaginatedIssueList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Issue'][]
    }
    PaginatedLeadList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Lead'][]
    }
    PaginatedNoteList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Note'][]
    }
    PaginatedOpportunityList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Opportunity'][]
    }
    PaginatedRemoteFieldClassList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['RemoteFieldClass'][]
    }
    PaginatedStageList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Stage'][]
    }
    PaginatedSyncStatusList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['SyncStatus'][]
    }
    PaginatedTaskList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Task'][]
    }
    PaginatedUserList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['User'][]
    }
    /** @description # The Account Object
     *     ### Description
     *     The `Account` object is used to represent a company in a CRM system.
     *     ### Usage Example
     *     TODO */
    PatchedAccountRequest: {
      /**
       * Format: uuid
       * @description The account's owner.
       * @example 0258cbc6-6020-430a-848e-aafacbadf4ae
       */
      owner?: string | null
      /**
       * @description The account's name.
       * @example Merge API
       */
      name?: string | null
      /**
       * @description The account's description.
       * @example One API for all integrations
       */
      description?: string | null
      /**
       * @description The account's industry.
       * @example API's
       */
      industry?: string | null
      /**
       * Format: uri
       * @description The account's website.
       * @example https://merge.dev/
       */
      website?: string | null
      /**
       * @description The account's number of employees.
       * @example 276000
       */
      number_of_employees?: number | null
      /** @example [
       *       {
       *         "street_1": "50 Bowling Green Dr",
       *         "street_2": "Golden Gate Park",
       *         "city": "San Francisco",
       *         "state": "CA",
       *         "postal_code": "94122",
       *         "country": "US",
       *         "address_type": "Shipping",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      addresses?: components['schemas']['AddressRequest'][]
      /**
       * Format: date-time
       * @description The last date (either most recent or furthest in the future) of when an activity occurs in an account.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    PatchedCRMAccountEndpointRequest: {
      model: components['schemas']['PatchedAccountRequest']
    }
    PatchedCRMContactEndpointRequest: {
      model: components['schemas']['PatchedContactRequest']
    }
    /** @description # The Contact Object
     *     ### Description
     *     The `Contact` object is used to represent an existing point of contact at a company in a CRM system.
     *     ### Usage Example
     *     TODO */
    PatchedContactRequest: {
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
       * Format: uuid
       * @description The contact's account.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The contact's owner.
       * @example b8fbfc30-0982-420e-8c20-dab07b70b9d6
       */
      owner?: string | null
      /** @example [
       *       {
       *         "street_1": "50 Bowling Green Dr",
       *         "street_2": "Golden Gate Park",
       *         "city": "San Francisco",
       *         "state": "CA",
       *         "postal_code": "94122",
       *         "country": "US",
       *         "address_type": "Shipping",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      addresses?: components['schemas']['AddressRequest'][]
      /** @example [
       *       {
       *         "email_address": "hello@merge.dev",
       *         "email_address_type": "Work"
       *       }
       *     ] */
      email_addresses?: components['schemas']['EmailAddressRequest'][]
      /** @example [
       *       {
       *         "phone_number": "+13785579223",
       *         "phone_number_type": "Mobile",
       *         "created_at": "2021-09-15T00:00:00Z",
       *         "modified_at": "2021-10-16T00:00:00Z"
       *       }
       *     ] */
      phone_numbers?: components['schemas']['PhoneNumberRequest'][]
      /**
       * Format: date-time
       * @description When the contact's last activity occurred.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
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
    PatchedEngagementEndpointRequest: {
      model: components['schemas']['PatchedEngagementRequest']
    }
    /** @description # The Engagement Object
     *     ### Description
     *     The `Engagement` object is used to represent an interaction noted in a CRM system.
     *     ### Usage Example
     *     TODO */
    PatchedEngagementRequest: {
      /**
       * Format: uuid
       * @description The engagement's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * @description The engagement's content.
       * @example Call for negotiation
       */
      content?: string | null
      /**
       * @description The engagement's subject.
       * @example Call from customer
       */
      subject?: string | null
      /**
       * @description The engagement's direction.
       *
       *     * `INBOUND` - INBOUND
       *     * `OUTBOUND` - OUTBOUND
       * @example INBOUND
       */
      direction?: components['schemas']['DirectionEnum'] | null
      /**
       * Format: uuid
       * @description The engagement type of the engagement.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      engagement_type?: string | null
      /**
       * Format: date-time
       * @description The time at which the engagement started.
       * @example 2022-02-10T00:00:00Z
       */
      start_time?: string | null
      /**
       * Format: date-time
       * @description The time at which the engagement ended.
       * @example 2022-02-10T00:05:00Z
       */
      end_time?: string | null
      /**
       * Format: uuid
       * @description The account of the engagement.
       * @example 025fjlc6-6000-430a-848e-aafacbadf4fe
       */
      account?: string | null
      /** @example [
       *       "a7c55bc6-2940-c80a-848e-bbfacbfdf4fg"
       *     ] */
      contacts?: (string | null)[]
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    PatchedOpportunityEndpointRequest: {
      model: components['schemas']['PatchedOpportunityRequest']
    }
    /** @description # The Opportunity Object
     *     ### Description
     *     The `Opportunity` object is used to represent a deal opportunity in a CRM system.
     *     ### Usage Example
     *     TODO */
    PatchedOpportunityRequest: {
      /**
       * @description The opportunity's name.
       * @example Needs Integrations
       */
      name?: string | null
      /**
       * @description The opportunity's description.
       * @example Needs a Unified API for Integrations!
       */
      description?: string | null
      /**
       * @description The opportunity's amount.
       * @example 100000
       */
      amount?: number | null
      /**
       * Format: uuid
       * @description The opportunity's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * Format: uuid
       * @description The account of the opportunity.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The stage of the opportunity.
       * @example 1968cbc6-6040-430a-848e-aafacbadf4ad
       */
      stage?: string | null
      /**
       * @description The opportunity's status.
       *
       *     * `OPEN` - OPEN
       *     * `WON` - WON
       *     * `LOST` - LOST
       * @example WON
       */
      status?: components['schemas']['OpportunityStatusEnum'] | null
      /**
       * Format: date-time
       * @description When the opportunity's last activity occurred.
       * @example 2022-02-10T00:00:00Z
       */
      last_activity_at?: string | null
      /**
       * Format: date-time
       * @description When the opportunity was closed.
       * @example 2022-02-10T00:00:00Z
       */
      close_date?: string | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    PatchedTaskEndpointRequest: {
      model: components['schemas']['PatchedTaskRequest']
    }
    /** @description # The Task Object
     *     ### Description
     *     The `Task` object is used to represent a task, such as a to-do item.
     *     ### Usage Example
     *     TODO */
    PatchedTaskRequest: {
      /**
       * @description The task's subject.
       * @example Contact about Integration Strategy
       */
      subject?: string | null
      /**
       * @description The task's content.
       * @example Follow up to see whether they need integrations
       */
      content?: string | null
      /**
       * Format: uuid
       * @description The task's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * Format: uuid
       * @description The task's account.
       * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The task's opportunity.
       * @example 550e8400-e29b-41d4-a716-446655440000
       */
      opportunity?: string | null
      /**
       * Format: date-time
       * @description When the task is completed.
       * @example 2022-02-11T00:00:00Z
       */
      completed_date?: string | null
      /**
       * Format: date-time
       * @description When the task is due.
       * @example 2022-02-10T00:00:00Z
       */
      due_date?: string | null
      /**
       * @description The task's status.
       *
       *     * `OPEN` - OPEN
       *     * `CLOSED` - CLOSED
       * @example OPEN
       */
      status?: components['schemas']['TaskStatusEnum'] | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    /** @description # The PhoneNumber Object
     *     ### Description
     *     The `PhoneNumber` object is used to represent an entity's phone number.
     *     ### Usage Example
     *     Fetch from the `GET Contact` endpoint and view their phone numbers. */
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
      phone_number?: string | null
      /**
       * @description The phone number's type.
       * @example Mobile
       */
      phone_number_type?: string | null
    }
    /** @description # The PhoneNumber Object
     *     ### Description
     *     The `PhoneNumber` object is used to represent an entity's phone number.
     *     ### Usage Example
     *     Fetch from the `GET Contact` endpoint and view their phone numbers. */
    PhoneNumberRequest: {
      /**
       * @description The phone number.
       * @example +3198675309
       */
      phone_number?: string | null
      /**
       * @description The phone number's type.
       * @example Mobile
       */
      phone_number_type?: string | null
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
     * @description * `GENERAL_CUSTOMER_REQUEST` - GENERAL_CUSTOMER_REQUEST
     *     * `GDPR` - GDPR
     *     * `OTHER` - OTHER
     * @enum {string}
     */
    ReasonEnum: 'GENERAL_CUSTOMER_REQUEST' | 'GDPR' | 'OTHER'
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
    RemoteField: {
      remote_field_class: components['schemas']['RemoteFieldClass']
      /** @example string */
      value?: {
        [key: string]: unknown
      }
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
      Account?: components['schemas']['RemoteFieldAPI'][]
      Contact?: components['schemas']['RemoteFieldAPI'][]
      Lead?: components['schemas']['RemoteFieldAPI'][]
      Note?: components['schemas']['RemoteFieldAPI'][]
      Opportunity?: components['schemas']['RemoteFieldAPI'][]
      Stage?: components['schemas']['RemoteFieldAPI'][]
      User?: components['schemas']['RemoteFieldAPI'][]
      Task?: components['schemas']['RemoteFieldAPI'][]
      Engagement?: components['schemas']['RemoteFieldAPI'][]
    }
    RemoteFieldClass: {
      id?: string
      display_name?: string
      remote_key_name?: string
      description?: string
      is_custom?: boolean
      is_required?: boolean
      field_type?: components['schemas']['FieldTypeEnum']
      field_format?: components['schemas']['FieldFormatEnum']
      field_choices?: string[]
      item_schema?: components['schemas']['ItemSchema']
    }
    RemoteFieldClassForCustomObjectClass: {
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       */
      readonly modified_at?: string
      display_name?: string | null
      remote_key_name?: string | null
      description?: string | null
      is_required?: boolean
      readonly field_type?: components['schemas']['FieldTypeEnum']
      readonly field_format?: components['schemas']['FieldFormatEnum']
      readonly field_choices?: (string | null)[] | null
      readonly item_schema?: {
        item_type: string | null
        item_format: string | null
        item_choices: (string | null)[] | null
      } | null
    }
    RemoteFieldRequest: {
      /**
       * Format: uuid
       * @example b057d1d2-c204-4da8-a74c-c91d1a260614
       */
      remote_field_class: string
      /** @example string */
      value?: {
        [key: string]: unknown
      }
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
     * @description * `IN_NEXT_SYNC` - IN_NEXT_SYNC
     *     * `IN_LAST_SYNC` - IN_LAST_SYNC
     * @enum {string}
     */
    SelectiveSyncConfigurationsUsageEnum: 'IN_NEXT_SYNC' | 'IN_LAST_SYNC'
    /** @description # The Stage Object
     *     ### Description
     *     The `Stage` object is used to represent the stage of an opportunity.
     *     ### Usage Example
     *     TODO */
    Stage: {
      /**
       * Format: uuid
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
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
       * @description The stage's name.
       * @example Closed Won
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
       *         "path": "/stages",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    /** @description # The SyncStatus Object
     *     ### Description
     *     The `SyncStatus` object is used to represent the syncing state of an account
     *
     *     ### Usage Example
     *     View the `SyncStatus` for an account to see how recently its models were synced. */
    SyncStatus: {
      /** @example Account */
      model_name: string
      /** @example crm.Account */
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
    /** @description # The Task Object
     *     ### Description
     *     The `Task` object is used to represent a task, such as a to-do item.
     *     ### Usage Example
     *     TODO */
    Task: {
      /**
       * Format: uuid
       * @example 550e8400-e29b-41d4-a716-446655440000
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
       * @description The task's subject.
       * @example Contact about Integration Strategy
       */
      subject?: string | null
      /**
       * @description The task's content.
       * @example Follow up to see whether they need integrations
       */
      content?: string | null
      /**
       * Format: uuid
       * @description The task's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * Format: uuid
       * @description The task's account.
       * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The task's opportunity.
       * @example 550e8400-e29b-41d4-a716-446655440000
       */
      opportunity?: string | null
      /**
       * Format: date-time
       * @description When the task is completed.
       * @example 2022-02-11T00:00:00Z
       */
      completed_date?: string | null
      /**
       * Format: date-time
       * @description When the task is due.
       * @example 2022-02-10T00:00:00Z
       */
      due_date?: string | null
      /**
       * @description The task's status.
       *
       *     * `OPEN` - OPEN
       *     * `CLOSED` - CLOSED
       * @example OPEN
       */
      status?: components['schemas']['TaskStatusEnum'] | null
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
       *         "path": "/tasks",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    TaskEndpointRequest: {
      model: components['schemas']['TaskRequest']
    }
    /** @description # The Task Object
     *     ### Description
     *     The `Task` object is used to represent a task, such as a to-do item.
     *     ### Usage Example
     *     TODO */
    TaskRequest: {
      /**
       * @description The task's subject.
       * @example Contact about Integration Strategy
       */
      subject?: string | null
      /**
       * @description The task's content.
       * @example Follow up to see whether they need integrations
       */
      content?: string | null
      /**
       * Format: uuid
       * @description The task's owner.
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
       */
      owner?: string | null
      /**
       * Format: uuid
       * @description The task's account.
       * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The task's opportunity.
       * @example 550e8400-e29b-41d4-a716-446655440000
       */
      opportunity?: string | null
      /**
       * Format: date-time
       * @description When the task is completed.
       * @example 2022-02-11T00:00:00Z
       */
      completed_date?: string | null
      /**
       * Format: date-time
       * @description When the task is due.
       * @example 2022-02-10T00:00:00Z
       */
      due_date?: string | null
      /**
       * @description The task's status.
       *
       *     * `OPEN` - OPEN
       *     * `CLOSED` - CLOSED
       * @example OPEN
       */
      status?: components['schemas']['TaskStatusEnum'] | null
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
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    TaskResponse: {
      model: components['schemas']['Task']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `OPEN` - OPEN
     *     * `CLOSED` - CLOSED
     * @enum {string}
     */
    TaskStatusEnum: 'OPEN' | 'CLOSED'
    /** @description # The User Object
     *     ### Description
     *     The `User` object is used to represent a user with a login to the CRM system.
     *     ### Usage Example
     *     TODO */
    User: {
      /**
       * Format: uuid
       * @example 0358cbc6-2040-430a-848e-aafacbadf3aa
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
       * @description The user's name.
       * @example Gil Feig
       */
      name?: string | null
      /**
       * @description The user's email address.
       * @example merge_is_hiring@merge.dev
       */
      email?: string | null
      /**
       * @description Whether or not the user is active.
       * @example true
       */
      is_active?: boolean | null
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
      readonly remote_fields?: components['schemas']['RemoteField'][]
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
  accounts_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'owner'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return accounts with this name. */
        name?: string | null
        /** @description If provided, will only return accounts with this owner. */
        owner_id?: string
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
          'application/json': components['schemas']['PaginatedAccountList']
        }
      }
    }
  }
  accounts_create: {
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
        'application/json': components['schemas']['CRMAccountEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['CRMAccountEndpointRequest']
        'multipart/form-data': components['schemas']['CRMAccountEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CRMAccountResponse']
        }
      }
    }
  }
  accounts_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'owner'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['Account']
        }
      }
    }
  }
  accounts_partial_update: {
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
        'application/json': components['schemas']['PatchedCRMAccountEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedCRMAccountEndpointRequest']
        'multipart/form-data': components['schemas']['PatchedCRMAccountEndpointRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CRMAccountResponse']
        }
      }
    }
  }
  accounts_meta_patch_retrieve: {
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
  accounts_meta_post_retrieve: {
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
  accounts_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
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
  contacts_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return contacts with this account. */
        account_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return contacts matching the email addresses; multiple email_addresses can be separated by commas. */
        email_addresses?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'account' | 'account,owner' | 'owner'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return contacts matching the phone numbers; multiple phone numbers can be separated by commas. */
        phone_numbers?: string
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
        'application/json': components['schemas']['CRMContactEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['CRMContactEndpointRequest']
        'multipart/form-data': components['schemas']['CRMContactEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CRMContactResponse']
        }
      }
    }
  }
  contacts_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'account' | 'account,owner' | 'owner'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
  contacts_partial_update: {
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
        'application/json': components['schemas']['PatchedCRMContactEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedCRMContactEndpointRequest']
        'multipart/form-data': components['schemas']['PatchedCRMContactEndpointRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CRMContactResponse']
        }
      }
    }
  }
  contacts_ignore_create: {
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
  contacts_meta_patch_retrieve: {
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
  contacts_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
        }
      }
    }
  }
  custom_object_classes_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'fields'
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
          'application/json': components['schemas']['PaginatedCustomObjectClassList']
        }
      }
    }
  }
  custom_object_classes_association_types_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'target_object_classes'
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
      path: {
        custom_object_class_id: string
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
          'application/json': components['schemas']['PaginatedAssociationTypeList']
        }
      }
    }
  }
  custom_object_classes_association_types_create: {
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
        custom_object_class_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CRMAssociationTypeEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['CRMAssociationTypeEndpointRequest']
        'multipart/form-data': components['schemas']['CRMAssociationTypeEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CRMAssociationTypeResponse']
        }
      }
    }
  }
  custom_object_classes_association_types_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'target_object_classes'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        custom_object_class_id: string
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
          'application/json': components['schemas']['AssociationType']
        }
      }
    }
  }
  custom_object_classes_association_types_meta_post_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        custom_object_class_id: string
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
  custom_object_classes_custom_objects_list: {
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
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
      path: {
        custom_object_class_id: string
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
          'application/json': components['schemas']['PaginatedCustomObjectList']
        }
      }
    }
  }
  custom_object_classes_custom_objects_create: {
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
        custom_object_class_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CRMCustomObjectEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['CRMCustomObjectEndpointRequest']
        'multipart/form-data': components['schemas']['CRMCustomObjectEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CRMCustomObjectResponse']
        }
      }
    }
  }
  custom_object_classes_custom_objects_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        custom_object_class_id: string
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
          'application/json': components['schemas']['CustomObject']
        }
      }
    }
  }
  custom_object_classes_custom_objects_associations_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return opportunities with this association_type. */
        association_type_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'association_type'
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
      path: {
        custom_object_class_id: string
        object_id: string
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
          'application/json': components['schemas']['PaginatedAssociationList']
        }
      }
    }
  }
  custom_object_classes_custom_objects_meta_post_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        custom_object_class_id: string
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
  custom_object_classes_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'fields'
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
          'application/json': components['schemas']['CustomObjectClass']
        }
      }
    }
  }
  custom_object_classes_custom_objects_associations_update: {
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
        association_type_id: string
        source_class_id: string
        source_object_id: string
        target_class_id: string
        target_object_id: string
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
          'application/json': components['schemas']['Association']
        }
      }
    }
  }
  custom_object_classes_custom_objects_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
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
  engagement_types_list: {
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
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['PaginatedEngagementTypeList']
        }
      }
    }
  }
  engagement_types_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['EngagementType']
        }
      }
    }
  }
  engagement_types_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
        }
      }
    }
  }
  engagements_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'account,engagement_type'
          | 'contacts'
          | 'contacts,account'
          | 'contacts,account,engagement_type'
          | 'contacts,engagement_type'
          | 'contacts,owner'
          | 'contacts,owner,account'
          | 'contacts,owner,account,engagement_type'
          | 'contacts,owner,engagement_type'
          | 'engagement_type'
          | 'owner'
          | 'owner,account'
          | 'owner,account,engagement_type'
          | 'owner,engagement_type'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
        /** @description If provided, will only return engagements started after this datetime. */
        started_after?: string | null
        /** @description If provided, will only return engagements started before this datetime. */
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
          'application/json': components['schemas']['PaginatedEngagementList']
        }
      }
    }
  }
  engagements_create: {
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
        'application/json': components['schemas']['EngagementEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['EngagementEndpointRequest']
        'multipart/form-data': components['schemas']['EngagementEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EngagementResponse']
        }
      }
    }
  }
  engagements_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'account,engagement_type'
          | 'contacts'
          | 'contacts,account'
          | 'contacts,account,engagement_type'
          | 'contacts,engagement_type'
          | 'contacts,owner'
          | 'contacts,owner,account'
          | 'contacts,owner,account,engagement_type'
          | 'contacts,owner,engagement_type'
          | 'engagement_type'
          | 'owner'
          | 'owner,account'
          | 'owner,account,engagement_type'
          | 'owner,engagement_type'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['Engagement']
        }
      }
    }
  }
  engagements_partial_update: {
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
        'application/json': components['schemas']['PatchedEngagementEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedEngagementEndpointRequest']
        'multipart/form-data': components['schemas']['PatchedEngagementEndpointRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EngagementResponse']
        }
      }
    }
  }
  engagements_meta_patch_retrieve: {
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
  engagements_meta_post_retrieve: {
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
  engagements_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
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
  leads_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return leads with this account. */
        converted_account_id?: string
        /** @description If provided, will only return leads with this contact. */
        converted_contact_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return contacts matching the email addresses; multiple email_addresses can be separated by commas. */
        email_addresses?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'converted_account'
          | 'converted_contact'
          | 'converted_contact,converted_account'
          | 'owner'
          | 'owner,converted_account'
          | 'owner,converted_contact'
          | 'owner,converted_contact,converted_account'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return leads with this owner. */
        owner_id?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return contacts matching the phone numbers; multiple phone numbers can be separated by commas. */
        phone_numbers?: string
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
          'application/json': components['schemas']['PaginatedLeadList']
        }
      }
    }
  }
  leads_create: {
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
        'application/json': components['schemas']['LeadEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['LeadEndpointRequest']
        'multipart/form-data': components['schemas']['LeadEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['LeadResponse']
        }
      }
    }
  }
  leads_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'converted_account'
          | 'converted_contact'
          | 'converted_contact,converted_account'
          | 'owner'
          | 'owner,converted_account'
          | 'owner,converted_contact'
          | 'owner,converted_contact,converted_account'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['Lead']
        }
      }
    }
  }
  leads_meta_post_retrieve: {
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
  leads_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
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
  notes_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return notes with this account. */
        account_id?: string
        /** @description If provided, will only return notes with this contact. */
        contact_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'account,opportunity'
          | 'contact'
          | 'contact,account'
          | 'contact,account,opportunity'
          | 'contact,opportunity'
          | 'opportunity'
          | 'owner'
          | 'owner,account'
          | 'owner,account,opportunity'
          | 'owner,contact'
          | 'owner,contact,account'
          | 'owner,contact,account,opportunity'
          | 'owner,contact,opportunity'
          | 'owner,opportunity'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return notes with this opportunity. */
        opportunity_id?: string
        /** @description If provided, will only return notes with this owner. */
        owner_id?: string
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
          'application/json': components['schemas']['PaginatedNoteList']
        }
      }
    }
  }
  notes_create: {
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
        'application/json': components['schemas']['NoteEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['NoteEndpointRequest']
        'multipart/form-data': components['schemas']['NoteEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['NoteResponse']
        }
      }
    }
  }
  notes_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'account,opportunity'
          | 'contact'
          | 'contact,account'
          | 'contact,account,opportunity'
          | 'contact,opportunity'
          | 'opportunity'
          | 'owner'
          | 'owner,account'
          | 'owner,account,opportunity'
          | 'owner,contact'
          | 'owner,contact,account'
          | 'owner,contact,account,opportunity'
          | 'owner,contact,opportunity'
          | 'owner,opportunity'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['Note']
        }
      }
    }
  }
  notes_meta_post_retrieve: {
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
  notes_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
        }
      }
    }
  }
  opportunities_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return opportunities with this account. */
        account_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'owner'
          | 'owner,account'
          | 'owner,stage'
          | 'owner,stage,account'
          | 'stage'
          | 'stage,account'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description If provided, will only return opportunities with this owner. */
        owner_id?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return opportunities created in the third party platform after this datetime. */
        remote_created_after?: string | null
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'status'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'status'
        /** @description If provided, will only return opportunities with this stage. */
        stage_id?: string
        /** @description If provided, will only return opportunities with this status. Options: ('OPEN', 'WON', 'LOST')
         *
         *     * `OPEN` - OPEN
         *     * `WON` - WON
         *     * `LOST` - LOST */
        status?: 'LOST' | 'OPEN' | 'WON' | null
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
          'application/json': components['schemas']['PaginatedOpportunityList']
        }
      }
    }
  }
  opportunities_create: {
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
        'application/json': components['schemas']['OpportunityEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['OpportunityEndpointRequest']
        'multipart/form-data': components['schemas']['OpportunityEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpportunityResponse']
        }
      }
    }
  }
  opportunities_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'owner'
          | 'owner,account'
          | 'owner,stage'
          | 'owner,stage,account'
          | 'stage'
          | 'stage,account'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['Opportunity']
        }
      }
    }
  }
  opportunities_partial_update: {
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
        'application/json': components['schemas']['PatchedOpportunityEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedOpportunityEndpointRequest']
        'multipart/form-data': components['schemas']['PatchedOpportunityEndpointRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpportunityResponse']
        }
      }
    }
  }
  opportunities_meta_patch_retrieve: {
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
  opportunities_meta_post_retrieve: {
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
  opportunities_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
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
  stages_list: {
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
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['PaginatedStageList']
        }
      }
    }
  }
  stages_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['Stage']
        }
      }
    }
  }
  stages_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
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
  tasks_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'account,opportunity'
          | 'opportunity'
          | 'owner'
          | 'owner,account'
          | 'owner,account,opportunity'
          | 'owner,opportunity'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['PaginatedTaskList']
        }
      }
    }
  }
  tasks_create: {
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
        'application/json': components['schemas']['TaskEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['TaskEndpointRequest']
        'multipart/form-data': components['schemas']['TaskEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TaskResponse']
        }
      }
    }
  }
  tasks_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'account,opportunity'
          | 'opportunity'
          | 'owner'
          | 'owner,account'
          | 'owner,account,opportunity'
          | 'owner,opportunity'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
          'application/json': components['schemas']['Task']
        }
      }
    }
  }
  tasks_partial_update: {
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
        'application/json': components['schemas']['PatchedTaskEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedTaskEndpointRequest']
        'multipart/form-data': components['schemas']['PatchedTaskEndpointRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TaskResponse']
        }
      }
    }
  }
  tasks_meta_patch_retrieve: {
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
  tasks_meta_post_retrieve: {
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
  tasks_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
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
        /** @description If provided, will only return users with this email. */
        email?: string | null
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
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
  users_ignore_create: {
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
  users_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
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
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
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
