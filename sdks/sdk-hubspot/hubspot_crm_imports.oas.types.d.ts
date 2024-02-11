/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/crm/v3/imports/{importId}/cancel': {
    /**
     * Cancel an active import
     * @description This allows a developer to cancel an active import.
     */
    post: operations['post-/crm/v3/imports/{importId}/cancel_cancel']
  }
  '/crm/v3/imports/{importId}': {
    /**
     * Get the information on any import
     * @description A complete summary of an import record, including any updates.
     */
    get: operations['get-/crm/v3/imports/{importId}_getById']
  }
  '/crm/v3/imports/{importId}/errors': {
    get: operations['get-/crm/v3/imports/{importId}/errors_getErrors']
  }
  '/crm/v3/imports/': {
    /**
     * Get active imports
     * @description Returns a paged list of active imports for this account.
     */
    get: operations['get-/crm/v3/imports/_getPage']
    /**
     * Start a new import
     * @description Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     */
    post: operations['post-/crm/v3/imports/_create']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    CollectionResponsePublicImportResponse: {
      paging?: components['schemas']['Paging']
      results: components['schemas']['PublicImportResponse'][]
    }
    Paging: {
      next?: components['schemas']['NextPage']
      prev?: components['schemas']['PreviousPage']
    }
    /**
     * @description A summary detailing which list contains the imported objects.
     * @example {
     *   "objectType": "contacts",
     *   "listId": "3"
     * }
     */
    PublicObjectListRecord: {
      /**
       * @description The ID of the list containing the imported objects.
       * @example 3
       */
      listId: string
      /**
       * @description The type of object contained in the list.
       * @example contacts
       */
      objectType: string
    }
    /**
     * @example {
     *   "message": "Invalid input (details will vary based on the error)",
     *   "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
     *   "category": "VALIDATION_ERROR",
     *   "links": {
     *     "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
     *   }
     * }
     */
    Error: {
      /** @description A specific category that contains more specific detail about the error */
      subCategory?: string
      /**
       * @description Context about the error condition
       * @example {
       *   "missingScopes": [
       *     "scope1",
       *     "scope2"
       *   ],
       *   "invalidPropertyName": [
       *     "propertyValue"
       *   ]
       * }
       */
      context?: {
        [key: string]: string[]
      }
      /**
       * Format: uuid
       * @description A unique identifier for the request. Include this value with any error reports or support tickets
       * @example aeb5f871-7f07-4993-9211-075dc63e7cbf
       */
      correlationId: string
      /**
       * @description A map of link names to associated URIs containing documentation about the error or recommended remediation steps
       * @example {
       *   "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
       * }
       */
      links?: {
        [key: string]: string
      }
      /**
       * @description A human readable message describing the error along with remediation steps where appropriate
       * @example Invalid input (details will vary based on the error)
       */
      message: string
      /**
       * @description The error category
       * @example VALIDATION_ERROR
       */
      category: string
      /** @description further information about the error */
      errors?: components['schemas']['ErrorDetail'][]
    }
    ImportRowCore: {
      rowData: string[]
      /** Format: int32 */
      lineNumber: number
      pageName?: string
      /** Format: int32 */
      fileId: number
    }
    ImportTemplate: {
      /** @enum {string} */
      templateType: 'admin_defined' | 'previous_import' | 'user_file'
      /** Format: int32 */
      templateId: number
    }
    ActionResponse: {
      /** Format: date-time */
      completedAt: string
      /** Format: date-time */
      requestedAt?: string
      /** Format: date-time */
      startedAt: string
      links?: {
        [key: string]: string
      }
      /** @enum {string} */
      status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE'
    }
    ErrorDetail: {
      /** @description A specific category that contains more specific detail about the error */
      subCategory?: string
      /** @description The status code associated with the error detail */
      code?: string
      /** @description The name of the field or parameter in which the error was found. */
      in?: string
      /**
       * @description Context about the error condition
       * @example {
       *   "missingScopes": [
       *     "scope1",
       *     "scope2"
       *   ]
       * }
       */
      context?: {
        [key: string]: string[]
      }
      /** @description A human readable message describing the error along with remediation steps where appropriate */
      message: string
    }
    ForwardPaging: {
      next?: components['schemas']['NextPage']
    }
    PublicImportError: {
      /** Format: int32 */
      createdAt: number
      extraContext?: string
      objectTypeId?: string
      /** @enum {string} */
      errorType:
        | 'INCORRECT_NUMBER_OF_COLUMNS'
        | 'INVALID_OBJECT_ID'
        | 'INVALID_ASSOCIATION_IDENTIFIER'
        | 'NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER'
        | 'MULTIPLE_COMPANIES_WITH_THIS_DOMAIN'
        | 'PROPERTY_DEFINITION_NOT_FOUND'
        | 'PROPERTY_VALUE_NOT_FOUND'
        | 'COULD_NOT_FIND_OWNER'
        | 'MULTIPLE_OWNERS_FOUND'
        | 'COULD_NOT_FIND_BUSINESS_UNIT'
        | 'COULD_NOT_PARSE_NUMBER'
        | 'COULD_NOT_PARSE_DATE'
        | 'COULD_NOT_PARSE_TERM'
        | 'OUTSIDE_VALID_TIME_RANGE'
        | 'OUTSIDE_VALID_TERM_RANGE'
        | 'COULD_NOT_PARSE_ROW'
        | 'INVALID_ENUMERATION_OPTION'
        | 'AMBIGUOUS_ENUMERATION_OPTION'
        | 'FAILED_VALIDATION'
        | 'FAILED_TO_CREATE_ASSOCIATION'
        | 'FILE_NOT_FOUND'
        | 'INVALID_COLUMN_CONFIGURATION'
        | 'INVALID_FILE_TYPE'
        | 'INVALID_SPREADSHEET'
        | 'INVALID_SHEET_COUNT'
        | 'FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES'
        | 'UNKNOWN_BAD_REQUEST'
        | 'GDPR_BLACKLISTED_EMAIL'
        | 'DUPLICATE_ASSOCIATION_ID'
        | 'LIMIT_EXCEEDED'
        | 'PORTAL_WIDE_CUSTOM_OBJECT_LIMIT_EXCEEDED'
        | 'INVALID_ALTERNATE_ID'
        | 'INVALID_EMAIL'
        | 'INVALID_DOMAIN'
        | 'DUPLICATE_ROW_CONTENT'
        | 'INVALID_NUMBER_SIZE'
        | 'UNKNOWN_ERROR'
        | 'FAILED_TO_OPT_OUT_CONTACT'
        | 'INVALID_REQUIRED_PROPERTY'
        | 'MISSING_REQUIRED_PROPERTY'
        | 'DUPLICATE_ALTERNATE_ID'
        | 'DUPLICATE_OBJECT_ID'
        | 'DUPLICATE_UNIQUE_PROPERTY_VALUE'
        | 'BLANK_VALUE_PROVIDED'
        | 'UNKNOWN_ASSOCIATION_RECORD_ID'
        | 'INVALID_RECORD_ID'
        | 'DUPLICATE_RECORD_ID'
        | 'INVALID_CUSTOM_PROPERTY_VALIDATION'
        | 'CREATE_ONLY_IMPORT'
        | 'UPDATE_ONLY_IMPORT'
        | 'COLUMN_TOO_LARGE'
        | 'ROW_DATA_TOO_LARGE'
        | 'INVALID_EVENT_TIMESTAMP'
        | 'INVALID_EVENT'
        | 'DUPLICATE_EVENT'
        | 'MISSING_EVENT_DEFINITION'
      /** Format: int32 */
      knownColumnNumber?: number
      id: string
      sourceData: components['schemas']['ImportRowCore']
      /** @enum {string} */
      objectType?:
        | 'CONTACT'
        | 'COMPANY'
        | 'DEAL'
        | 'ENGAGEMENT'
        | 'TICKET'
        | 'OWNER'
        | 'PRODUCT'
        | 'LINE_ITEM'
        | 'BET_DELIVERABLE_SERVICE'
        | 'CONTENT'
        | 'CONVERSATION'
        | 'BET_ALERT'
        | 'PORTAL'
        | 'QUOTE'
        | 'FORM_SUBMISSION_INBOUNDDB'
        | 'QUOTA'
        | 'UNSUBSCRIBE'
        | 'COMMUNICATION'
        | 'FEEDBACK_SUBMISSION'
        | 'ATTRIBUTION'
        | 'SALESFORCE_SYNC_ERROR'
        | 'RESTORABLE_CRM_OBJECT'
        | 'HUB'
        | 'LANDING_PAGE'
        | 'PRODUCT_OR_FOLDER'
        | 'TASK'
        | 'FORM'
        | 'MARKETING_EMAIL'
        | 'AD_ACCOUNT'
        | 'AD_CAMPAIGN'
        | 'AD_GROUP'
        | 'AD'
        | 'KEYWORD'
        | 'CAMPAIGN'
        | 'SOCIAL_CHANNEL'
        | 'SOCIAL_POST'
        | 'SITE_PAGE'
        | 'BLOG_POST'
        | 'IMPORT'
        | 'EXPORT'
        | 'CTA'
        | 'TASK_TEMPLATE'
        | 'AUTOMATION_PLATFORM_FLOW'
        | 'OBJECT_LIST'
        | 'NOTE'
        | 'MEETING_EVENT'
        | 'CALL'
        | 'EMAIL'
        | 'PUBLISHING_TASK'
        | 'CONVERSATION_SESSION'
        | 'CONTACT_CREATE_ATTRIBUTION'
        | 'INVOICE'
        | 'MARKETING_EVENT'
        | 'CONVERSATION_INBOX'
        | 'CHATFLOW'
        | 'MEDIA_BRIDGE'
        | 'SEQUENCE'
        | 'SEQUENCE_STEP'
        | 'FORECAST'
        | 'SNIPPET'
        | 'TEMPLATE'
        | 'DEAL_CREATE_ATTRIBUTION'
        | 'QUOTE_TEMPLATE'
        | 'QUOTE_MODULE'
        | 'QUOTE_MODULE_FIELD'
        | 'QUOTE_FIELD'
        | 'SEQUENCE_ENROLLMENT'
        | 'SUBSCRIPTION'
        | 'ACCEPTANCE_TEST'
        | 'SOCIAL_BROADCAST'
        | 'DEAL_SPLIT'
        | 'DEAL_REGISTRATION'
        | 'GOAL_TARGET'
        | 'GOAL_TARGET_GROUP'
        | 'PORTAL_OBJECT_SYNC_MESSAGE'
        | 'FILE_MANAGER_FILE'
        | 'FILE_MANAGER_FOLDER'
        | 'SEQUENCE_STEP_ENROLLMENT'
        | 'APPROVAL'
        | 'APPROVAL_STEP'
        | 'CTA_VARIANT'
        | 'SALES_DOCUMENT'
        | 'DISCOUNT'
        | 'FEE'
        | 'TAX'
        | 'MARKETING_CALENDAR'
        | 'PERMISSIONS_TESTING'
        | 'PRIVACY_SCANNER_COOKIE'
        | 'DATA_SYNC_STATE'
        | 'WEB_INTERACTIVE'
        | 'PLAYBOOK'
        | 'FOLDER'
        | 'PLAYBOOK_QUESTION'
        | 'PLAYBOOK_SUBMISSION'
        | 'PLAYBOOK_SUBMISSION_ANSWER'
        | 'COMMERCE_PAYMENT'
        | 'GSC_PROPERTY'
        | 'SOX_PROTECTED_DUMMY_TYPE'
        | 'BLOG_LISTING_PAGE'
        | 'QUARANTINED_SUBMISSION'
        | 'PAYMENT_SCHEDULE'
        | 'PAYMENT_SCHEDULE_INSTALLMENT'
        | 'MARKETING_CAMPAIGN_UTM'
        | 'DISCOUNT_TEMPLATE'
        | 'DISCOUNT_CODE'
        | 'FEEDBACK_SURVEY'
        | 'CMS_URL'
        | 'SALES_TASK'
        | 'SALES_WORKLOAD'
        | 'USER'
        | 'POSTAL_MAIL'
        | 'SCHEMAS_BACKEND_TEST'
        | 'PAYMENT_LINK'
        | 'SUBMISSION_TAG'
        | 'CAMPAIGN_STEP'
        | 'SCHEDULING_PAGE'
        | 'SOX_PROTECTED_TEST_TYPE'
        | 'ORDER'
        | 'MARKETING_SMS'
        | 'PARTNER_ACCOUNT'
        | 'CAMPAIGN_TEMPLATE'
        | 'CAMPAIGN_TEMPLATE_STEP'
        | 'PLAYLIST'
        | 'CLIP'
        | 'CAMPAIGN_BUDGET_ITEM'
        | 'CAMPAIGN_SPEND_ITEM'
        | 'MIC'
        | 'CONTENT_AUDIT'
        | 'CONTENT_AUDIT_PAGE'
        | 'PLAYLIST_FOLDER'
        | 'LEAD'
        | 'ABANDONED_CART'
        | 'EXTERNAL_WEB_URL'
        | 'VIEW'
        | 'VIEW_BLOCK'
        | 'ROSTER'
        | 'CART'
        | 'AUTOMATION_PLATFORM_FLOW_ACTION'
        | 'SOCIAL_PROFILE'
        | 'PARTNER_CLIENT'
        | 'ROSTER_MEMBER'
        | 'MARKETING_EVENT_ATTENDANCE'
        | 'ALL_PAGES'
        | 'AI_FORECAST'
        | 'CRM_PIPELINES_DUMMY_TYPE'
        | 'UNKNOWN'
      invalidValue?: string
    }
    PreviousPage: {
      before: string
      link?: string
    }
    /**
     * @description An object detailing a summary of the import record outputs
     * @example {
     *   "objectLists": [
     *     {
     *       "objectType": "contacts",
     *       "listId": "3"
     *     }
     *   ],
     *   "counters": {
     *     "TOTAL_ROWS": 2,
     *     "PROPERTY_VALUES_EMITTED": 2,
     *     "CREATED_OBJECTS": 1,
     *     "UPDATED_OBJECTS": 1,
     *     "UNIQUE_OBJECTS_WRITTEN": 2
     *   },
     *   "fileIds": [
     *     "3579849"
     *   ]
     * }
     */
    PublicImportMetadata: {
      /**
       * @description Summarized outcomes of each row a developer attempted to import into HubSpot.
       * @example {
       *   "TOTAL_ROWS": 2,
       *   "CREATED_OBJECTS": 1,
       *   "UPDATED_OBJECTS": 1,
       *   "UNIQUE_OBJECTS_WRITTEN": 2,
       *   "PROPERTY_VALUES_EMITTED": 2
       * }
       */
      counters: {
        [key: string]: number
      }
      /**
       * @description The IDs of files uploaded in the File Manager API.
       * @example [
       *   "3579849"
       * ]
       */
      fileIds: string[]
      /**
       * @description The lists containing the imported objects.
       * @example [
       *   {
       *     "listId": "3",
       *     "objectType": "contacts"
       *   }
       * ]
       */
      objectLists: components['schemas']['PublicObjectListRecord'][]
    }
    CollectionResponsePublicImportErrorForwardPaging: {
      paging?: components['schemas']['ForwardPaging']
      results: components['schemas']['PublicImportError'][]
    }
    /**
     * @description A current summary of the import, whether complete or not.
     * @example {
     *   "id": "1471",
     *   "createdAt": "2020-01-14T22:45:00.153Z",
     *   "updatedAt": "2020-01-14T22:45:00.153Z",
     *   "state": "DONE",
     *   "optOutImport": false,
     *   "metadata": {
     *     "objectLists": [
     *       {
     *         "objectType": "contacts",
     *         "listId": "3"
     *       }
     *     ],
     *     "counters": {
     *       "TOTAL_ROWS": 1000,
     *       "PROPERTY_VALUES_EMITTED": 1000,
     *       "CREATED_OBJECTS": 1000,
     *       "UNIQUE_OBJECTS_WRITTEN": 1000
     *     },
     *     "fileIds": [
     *       "32938649"
     *     ]
     *   }
     * }
     */
    PublicImportResponse: {
      importTemplate?: components['schemas']['ImportTemplate']
      /** Format: date-time */
      createdAt: string
      metadata: components['schemas']['PublicImportMetadata']
      importRequestJson?: Record<string, never>
      /** @enum {string} */
      importSource?:
        | 'API'
        | 'CRM_UI'
        | 'IMPORT'
        | 'MOBILE_ANDROID'
        | 'MOBILE_IOS'
        | 'SALESFORCE'
      importName?: string
      /**
       * @description The status of the import.
       * @example DONE
       * @enum {string}
       */
      state:
        | 'STARTED'
        | 'PROCESSING'
        | 'DONE'
        | 'FAILED'
        | 'CANCELED'
        | 'DEFERRED'
        | 'REVERTED'
      /** @example 1471 */
      id: string
      /**
       * @description Whether or not the import is a list of people disqualified from receiving emails.
       * @example false
       */
      optOutImport: boolean
      /** Format: date-time */
      updatedAt: string
    }
    NextPage: {
      link?: string
      after: string
    }
  }
  responses: {
    /** @description An error occurred. */
    Error: {
      content: {
        '*/*': components['schemas']['Error']
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
  /**
   * Cancel an active import
   * @description This allows a developer to cancel an active import.
   */
  'post-/crm/v3/imports/{importId}/cancel_cancel': {
    parameters: {
      path: {
        importId: number
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['ActionResponse']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Get the information on any import
   * @description A complete summary of an import record, including any updates.
   */
  'get-/crm/v3/imports/{importId}_getById': {
    parameters: {
      path: {
        importId: number
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['PublicImportResponse']
        }
      }
      default: components['responses']['Error']
    }
  }
  'get-/crm/v3/imports/{importId}/errors_getErrors': {
    parameters: {
      query?: {
        /** @description The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results. */
        after?: string
        /** @description The maximum number of results to display per page. */
        limit?: number
      }
      path: {
        importId: number
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponsePublicImportErrorForwardPaging']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Get active imports
   * @description Returns a paged list of active imports for this account.
   */
  'get-/crm/v3/imports/_getPage': {
    parameters: {
      query?: {
        /** @description The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results. */
        after?: string
        before?: string
        /** @description The maximum number of results to display per page. */
        limit?: number
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['CollectionResponsePublicImportResponse']
        }
      }
      default: components['responses']['Error']
    }
  }
  /**
   * Start a new import
   * @description Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
   */
  'post-/crm/v3/imports/_create': {
    requestBody?: {
      content: {
        'multipart/form-data': {
          /**
           * Format: binary
           * @description A list of files containing the data to import
           */
          files?: string
          /** @description JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format. */
          importRequest?: string
        }
      }
    }
    responses: {
      /** @description successful operation */
      200: {
        content: {
          'application/json': components['schemas']['PublicImportResponse']
        }
      }
      default: components['responses']['Error']
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