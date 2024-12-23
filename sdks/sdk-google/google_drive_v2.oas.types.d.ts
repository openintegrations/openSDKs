export interface paths {
  '/about': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the information about the current user along with Drive API settings */
    get: operations['drive.about.get']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/apps': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists a user's installed apps. */
    get: operations['drive.apps.list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/apps/{appId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a specific app. */
    get: operations['drive.apps.get']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/changes': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the changes for a user or shared drive. */
    get: operations['drive.changes.list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/changes/startPageToken': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the starting pageToken for listing future changes. */
    get: operations['drive.changes.getStartPageToken']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/changes/watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Subscribe to changes for a user. */
    post: operations['drive.changes.watch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/changes/{changeId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes. */
    get: operations['drive.changes.get']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/channels/stop': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Stop watching resources through this channel */
    post: operations['drive.channels.stop']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/drives': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the user's shared drives. */
    get: operations['drive.drives.list']
    put?: never
    /** @description Creates a new shared drive. */
    post: operations['drive.drives.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/drives/{driveId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a shared drive's metadata by ID. */
    get: operations['drive.drives.get']
    /** @description Updates the metadata for a shared drive. */
    put: operations['drive.drives.update']
    post?: never
    /** @description Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items. */
    delete: operations['drive.drives.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/drives/{driveId}/hide': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Hides a shared drive from the default view. */
    post: operations['drive.drives.hide']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/drives/{driveId}/unhide': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Restores a shared drive to the default view. */
    post: operations['drive.drives.unhide']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the user's files. */
    get: operations['drive.files.list']
    put?: never
    /** @description Insert a new file. */
    post: operations['drive.files.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/generateIds': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Generates a set of file IDs which can be provided in insert or copy requests. */
    get: operations['drive.files.generateIds']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/trash': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** @description Permanently deletes all of the user's trashed files. */
    delete: operations['drive.files.emptyTrash']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a file's metadata or content by ID. */
    get: operations['drive.files.get']
    /** @description Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics. */
    put: operations['drive.files.update']
    post?: never
    /** @description Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files. */
    delete: operations['drive.files.delete']
    options?: never
    head?: never
    /** @description Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics. */
    patch: operations['drive.files.patch']
    trace?: never
  }
  '/files/{fileId}/comments': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists a file's comments. */
    get: operations['drive.comments.list']
    put?: never
    /** @description Creates a new comment on the given file. */
    post: operations['drive.comments.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/comments/{commentId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a comment by ID. */
    get: operations['drive.comments.get']
    /** @description Updates an existing comment. */
    put: operations['drive.comments.update']
    post?: never
    /** @description Deletes a comment. */
    delete: operations['drive.comments.delete']
    options?: never
    head?: never
    /** @description Updates an existing comment. */
    patch: operations['drive.comments.patch']
    trace?: never
  }
  '/files/{fileId}/comments/{commentId}/replies': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists all of the replies to a comment. */
    get: operations['drive.replies.list']
    put?: never
    /** @description Creates a new reply to the given comment. */
    post: operations['drive.replies.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/comments/{commentId}/replies/{replyId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a reply. */
    get: operations['drive.replies.get']
    /** @description Updates an existing reply. */
    put: operations['drive.replies.update']
    post?: never
    /** @description Deletes a reply. */
    delete: operations['drive.replies.delete']
    options?: never
    head?: never
    /** @description Updates an existing reply. */
    patch: operations['drive.replies.patch']
    trace?: never
  }
  '/files/{fileId}/copy': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Creates a copy of the specified file. Folders cannot be copied. */
    post: operations['drive.files.copy']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/export': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB. */
    get: operations['drive.files.export']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/listLabels': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the labels on a file. */
    get: operations['drive.files.listLabels']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/modifyLabels': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Modifies the set of labels on a file. */
    post: operations['drive.files.modifyLabels']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/parents': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists a file's parents. */
    get: operations['drive.parents.list']
    put?: never
    /** @description Adds a parent folder for a file. */
    post: operations['drive.parents.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/parents/{parentId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a specific parent reference. */
    get: operations['drive.parents.get']
    put?: never
    post?: never
    /** @description Removes a parent from a file. */
    delete: operations['drive.parents.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/permissions': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists a file's or shared drive's permissions. */
    get: operations['drive.permissions.list']
    put?: never
    /** @description Inserts a permission for a file or shared drive. */
    post: operations['drive.permissions.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/permissions/{permissionId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a permission by ID. */
    get: operations['drive.permissions.get']
    /** @description Updates a permission. */
    put: operations['drive.permissions.update']
    post?: never
    /** @description Deletes a permission from a file or shared drive. */
    delete: operations['drive.permissions.delete']
    options?: never
    head?: never
    /** @description Updates a permission using patch semantics. */
    patch: operations['drive.permissions.patch']
    trace?: never
  }
  '/files/{fileId}/properties': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists a file's properties. */
    get: operations['drive.properties.list']
    put?: never
    /** @description Adds a property to a file, or updates it if it already exists. */
    post: operations['drive.properties.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/properties/{propertyKey}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a property by its key. */
    get: operations['drive.properties.get']
    /** @description Updates a property. */
    put: operations['drive.properties.update']
    post?: never
    /** @description Deletes a property. */
    delete: operations['drive.properties.delete']
    options?: never
    head?: never
    /** @description Updates a property. */
    patch: operations['drive.properties.patch']
    trace?: never
  }
  '/files/{fileId}/revisions': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists a file's revisions. */
    get: operations['drive.revisions.list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/revisions/{revisionId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a specific revision. */
    get: operations['drive.revisions.get']
    /** @description Updates a revision. */
    put: operations['drive.revisions.update']
    post?: never
    /** @description Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. */
    delete: operations['drive.revisions.delete']
    options?: never
    head?: never
    /** @description Updates a revision. */
    patch: operations['drive.revisions.patch']
    trace?: never
  }
  '/files/{fileId}/touch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Set the file's updated time to the current server time. */
    post: operations['drive.files.touch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/trash': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file. */
    post: operations['drive.files.trash']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/untrash': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file. */
    post: operations['drive.files.untrash']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{fileId}/watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification. */
    post: operations['drive.files.watch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{folderId}/children': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists a folder's children. */
    get: operations['drive.children.list']
    put?: never
    /** @description Inserts a file into a folder. */
    post: operations['drive.children.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{folderId}/children/{childId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a specific child reference. */
    get: operations['drive.children.get']
    put?: never
    post?: never
    /** @description Removes a child from a folder. */
    delete: operations['drive.children.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/permissionIds/{email}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns the permission ID for an email address. */
    get: operations['drive.permissions.getIdForEmail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/teamdrives': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Deprecated use drives.list instead. */
    get: operations['drive.teamdrives.list']
    put?: never
    /** @description Deprecated use drives.insert instead. */
    post: operations['drive.teamdrives.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/teamdrives/{teamDriveId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Deprecated use drives.get instead. */
    get: operations['drive.teamdrives.get']
    /** @description Deprecated use drives.update instead. */
    put: operations['drive.teamdrives.update']
    post?: never
    /** @description Deprecated use drives.delete instead. */
    delete: operations['drive.teamdrives.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    /** @description An item with user information and settings. */
    About: {
      /** @description Information about supported additional roles per file type. The most specific type takes precedence. */
      additionalRoleInfo?: {
        /** @description The supported additional roles per primary role. */
        roleSets?: {
          /** @description The supported additional roles with the primary role. */
          additionalRoles?: string[]
          /** @description A primary permission role. */
          primaryRole?: string
        }[]
        /** @description The content type that this additional role info applies to. */
        type?: string
      }[]
      /** @description Whether the user can create shared drives. */
      canCreateDrives?: boolean
      /** @description Deprecated - use canCreateDrives instead. */
      canCreateTeamDrives?: boolean
      /** @description The domain sharing policy for the current user. Possible values are:
       *     - allowed
       *     - allowedWithWarning
       *     - incomingOnly
       *     - disallowed */
      domainSharingPolicy?: string
      /** @description A list of themes that are supported for shared drives. */
      driveThemes?: {
        /** @description A link to this theme's background image. */
        backgroundImageLink?: string
        /** @description The color of this theme as an RGB hex string. */
        colorRgb?: string
        /** @description The ID of the theme. */
        id?: string
      }[]
      /** @description The ETag of the item. */
      etag?: string
      /** @description The allowable export formats. */
      exportFormats?: {
        /** @description The content type to convert from. */
        source?: string
        /** @description The possible content types to convert to. */
        targets?: string[]
      }[]
      /** @description List of additional features enabled on this account. */
      features?: {
        /** @description The name of the feature. */
        featureName?: string
        /**
         * Format: double
         * @description The request limit rate for this feature, in queries per second.
         */
        featureRate?: number
      }[]
      /** @description The palette of allowable folder colors as RGB hex strings. */
      folderColorPalette?: string[]
      /** @description The allowable import formats. */
      importFormats?: {
        /** @description The imported file's content type to convert from. */
        source?: string
        /** @description The possible content types to convert to. */
        targets?: string[]
      }[]
      /** @description A boolean indicating whether the authenticated app is installed by the authenticated user. */
      isCurrentAppInstalled?: boolean
      /**
       * @description This is always drive#about.
       * @default drive#about
       */
      kind: string
      /** @description The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). */
      languageCode?: string
      /**
       * Format: int64
       * @description The largest change id.
       */
      largestChangeId?: string
      /** @description List of max upload sizes for each file type. The most specific type takes precedence. */
      maxUploadSizes?: {
        /**
         * Format: int64
         * @description The max upload size for this type.
         */
        size?: string
        /** @description The file type. */
        type?: string
      }[]
      /** @description The name of the current user. */
      name?: string
      /** @description The current user's ID as visible in the permissions collection. */
      permissionId?: string
      /** @description The amount of storage quota used by different Google services. */
      quotaBytesByService?: {
        /**
         * Format: int64
         * @description The storage quota bytes used by the service.
         */
        bytesUsed?: string
        /** @description The service's name, e.g. DRIVE, GMAIL, or PHOTOS. */
        serviceName?: string
      }[]
      /**
       * Format: int64
       * @description The total number of quota bytes. This is only relevant when quotaType is LIMITED.
       */
      quotaBytesTotal?: string
      /**
       * Format: int64
       * @description The number of quota bytes used by Google Drive.
       */
      quotaBytesUsed?: string
      /**
       * Format: int64
       * @description The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
       */
      quotaBytesUsedAggregate?: string
      /**
       * Format: int64
       * @description The number of quota bytes used by trashed items.
       */
      quotaBytesUsedInTrash?: string
      /** @description The type of the user's storage quota. Possible values are:
       *     - LIMITED
       *     - UNLIMITED */
      quotaType?: string
      /**
       * Format: int64
       * @description The number of remaining change ids, limited to no more than 2500.
       */
      remainingChangeIds?: string
      /** @description The id of the root folder. */
      rootFolderId?: string
      /** @description A link back to this item. */
      selfLink?: string
      /** @description Deprecated - use driveThemes instead. */
      teamDriveThemes?: {
        /** @description Deprecated - use driveThemes/backgroundImageLink instead. */
        backgroundImageLink?: string
        /** @description Deprecated - use driveThemes/colorRgb instead. */
        colorRgb?: string
        /** @description Deprecated - use driveThemes/id instead. */
        id?: string
      }[]
      /** @description The authenticated user. */
      user?: components['schemas']['User']
    }
    /** @description The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. */
    App: {
      /** @description Whether the app is authorized to access data on the user's Drive. */
      authorized?: boolean
      /** @description The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in. */
      createInFolderTemplate?: string
      /** @description The url to create a new file with this app. */
      createUrl?: string
      /** @description Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive. */
      hasDriveWideScope?: boolean
      /** @description The various icons for the app. */
      icons?: {
        /** @description Category of the icon. Allowed values are:
         *     - application - icon for the application
         *     - document - icon for a file associated with the app
         *     - documentShared - icon for a shared file associated with the app */
        category?: string
        /** @description URL for the icon. */
        iconUrl?: string
        /**
         * Format: int32
         * @description Size of the icon. Represented as the maximum of the width and height.
         */
        size?: number
      }[]
      /** @description The ID of the app. */
      id?: string
      /** @description Whether the app is installed. */
      installed?: boolean
      /**
       * @description This is always drive#app.
       * @default drive#app
       */
      kind: string
      /** @description A long description of the app. */
      longDescription?: string
      /** @description The name of the app. */
      name?: string
      /** @description The type of object this app creates (e.g. Chart). If empty, the app name should be used instead. */
      objectType?: string
      /** @description The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by the actual file ids. See  Open Files  for the full documentation. */
      openUrlTemplate?: string
      /** @description The list of primary file extensions. */
      primaryFileExtensions?: string[]
      /** @description The list of primary mime types. */
      primaryMimeTypes?: string[]
      /** @description The ID of the product listing for this app. */
      productId?: string
      /** @description A link to the product listing for this app. */
      productUrl?: string
      /** @description The list of secondary file extensions. */
      secondaryFileExtensions?: string[]
      /** @description The list of secondary mime types. */
      secondaryMimeTypes?: string[]
      /** @description A short description of the app. */
      shortDescription?: string
      /** @description Whether this app supports creating new objects. */
      supportsCreate?: boolean
      /** @description Whether this app supports importing from Docs Editors. */
      supportsImport?: boolean
      /** @description Whether this app supports opening more than one file. */
      supportsMultiOpen?: boolean
      /** @description Whether this app supports creating new files when offline. */
      supportsOfflineCreate?: boolean
      /** @description Whether the app is selected as the default handler for the types it supports. */
      useByDefault?: boolean
    }
    /** @description A list of third-party applications which the user has installed or given access to Google Drive. */
    AppList: {
      /** @description List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest). */
      defaultAppIds?: string[]
      /** @description The ETag of the list. */
      etag?: string
      /** @description The list of apps. */
      items?: components['schemas']['App'][]
      /**
       * @description This is always drive#appList.
       * @default drive#appList
       */
      kind: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    /** @description Representation of a change to a file or shared drive. */
    Change: {
      /** @description The type of the change. Possible values are file and drive. */
      changeType?: string
      /** @description Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
      deleted?: boolean
      /** @description The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. */
      drive?: components['schemas']['Drive']
      /** @description The ID of the shared drive associated with this change. */
      driveId?: string
      /** @description The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. */
      file?: components['schemas']['File']
      /** @description The ID of the file associated with this change. */
      fileId?: string
      /**
       * Format: int64
       * @description The ID of the change.
       */
      id?: string
      /**
       * @description This is always drive#change.
       * @default drive#change
       */
      kind: string
      /**
       * Format: date-time
       * @description The time of this modification.
       */
      modificationDate?: string
      /** @description A link back to this change. */
      selfLink?: string
      /** @description Deprecated - use drive instead. */
      teamDrive?: components['schemas']['TeamDrive']
      /** @description Deprecated - use driveId instead. */
      teamDriveId?: string
      /** @description Deprecated - use changeType instead. */
      type?: string
    }
    /** @description A list of changes for a user. */
    ChangeList: {
      /** @description The ETag of the list. */
      etag?: string
      /** @description The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      items?: components['schemas']['Change'][]
      /**
       * @description This is always drive#changeList.
       * @default drive#changeList
       */
      kind: string
      /**
       * Format: int64
       * @description The current largest change ID.
       */
      largestChangeId?: string
      /** @description The starting page token for future changes. This will be present only if the end of the current changes list has been reached. */
      newStartPageToken?: string
      /** @description A link to the next page of changes. */
      nextLink?: string
      /** @description The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    /** @description An notification channel used to watch for resource changes. */
    Channel: {
      /** @description The address where notifications are delivered for this channel. */
      address?: string
      /**
       * Format: int64
       * @description Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
       */
      expiration?: string
      /** @description A UUID or similar unique string that identifies this channel. */
      id?: string
      /**
       * @description Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
       * @default api#channel
       */
      kind: string
      /** @description Additional parameters controlling delivery channel behavior. Optional. */
      params?: {
        [key: string]: string
      }
      /** @description A Boolean value to indicate whether payload is wanted. Optional. */
      payload?: boolean
      /** @description An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
      resourceId?: string
      /** @description A version-specific identifier for the watched resource. */
      resourceUri?: string
      /** @description An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
      token?: string
      /** @description The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages. */
      type?: string
    }
    /** @description A list of children of a file. */
    ChildList: {
      /** @description The ETag of the list. */
      etag?: string
      /** @description The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      items?: components['schemas']['ChildReference'][]
      /**
       * @description This is always drive#childList.
       * @default drive#childList
       */
      kind: string
      /** @description A link to the next page of children. */
      nextLink?: string
      /** @description The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    /** @description A reference to a folder's child. */
    ChildReference: {
      /** @description A link to the child. */
      childLink?: string
      /** @description The ID of the child. */
      id?: string
      /**
       * @description This is always drive#childReference.
       * @default drive#childReference
       */
      kind: string
      /** @description A link back to this reference. */
      selfLink?: string
    }
    /** @description A comment on a file in Google Drive. */
    Comment: {
      /** @description A region of the document represented as a JSON string. For details on defining anchor properties, refer to  Add comments and replies. */
      anchor?: string
      /** @description The author of the comment. The author's email address and permission ID will not be populated. */
      author?: components['schemas']['User']
      /** @description The ID of the comment. */
      commentId?: string
      /** @description The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content. */
      content?: string
      /** @description The context of the file which is being commented on. */
      context?: {
        /** @description The MIME type of the context snippet. */
        type?: string
        /** @description Data representation of the segment of the file being commented on. In the case of a text file for example, this would be the actual text that the comment is about. */
        value?: string
      }
      /**
       * Format: date-time
       * @description The date when this comment was first created.
       */
      createdDate?: string
      /** @description Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed. */
      deleted?: boolean
      /** @description The file which this comment is addressing. */
      fileId?: string
      /** @description The title of the file which this comment is addressing. */
      fileTitle?: string
      /** @description HTML formatted content for this comment. */
      htmlContent?: string
      /**
       * @description This is always drive#comment.
       * @default drive#comment
       */
      kind: string
      /**
       * Format: date-time
       * @description The date when this comment or any of its replies were last modified.
       */
      modifiedDate?: string
      /** @description Replies to this post. */
      replies?: components['schemas']['CommentReply'][]
      /** @description A link back to this comment. */
      selfLink?: string
      /** @description The status of this comment. Status can be changed by posting a reply to a comment with the desired status.
       *     - "open" - The comment is still open.
       *     - "resolved" - The comment has been resolved by one of its replies. */
      status?: string
    }
    /** @description A list of comments on a file in Google Drive. */
    CommentList: {
      /** @description The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      items?: components['schemas']['Comment'][]
      /**
       * @description This is always drive#commentList.
       * @default drive#commentList
       */
      kind: string
      /** @description A link to the next page of comments. */
      nextLink?: string
      /** @description The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    /** @description A comment on a file in Google Drive. */
    CommentReply: {
      /** @description The author of the reply. The author's email address and permission ID will not be populated. */
      author?: components['schemas']['User']
      /** @description The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen). */
      content?: string
      /**
       * Format: date-time
       * @description The date when this reply was first created.
       */
      createdDate?: string
      /** @description Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed. */
      deleted?: boolean
      /** @description HTML formatted content for this reply. */
      htmlContent?: string
      /**
       * @description This is always drive#commentReply.
       * @default drive#commentReply
       */
      kind: string
      /**
       * Format: date-time
       * @description The date when this reply was last modified.
       */
      modifiedDate?: string
      /** @description The ID of the reply. */
      replyId?: string
      /** @description The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are:
       *     - "resolve" - To resolve a comment.
       *     - "reopen" - To reopen (un-resolve) a comment. */
      verb?: string
    }
    /** @description A list of replies to a comment on a file in Google Drive. */
    CommentReplyList: {
      /** @description The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      items?: components['schemas']['CommentReply'][]
      /**
       * @description This is always drive#commentReplyList.
       * @default drive#commentReplyList
       */
      kind: string
      /** @description A link to the next page of replies. */
      nextLink?: string
      /** @description The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    /** @description A restriction for accessing the content of the file. */
    ContentRestriction: {
      /** @description Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified. */
      readOnly?: boolean
      /** @description Reason for why the content of the file is restricted. This is only mutable on requests that also set readOnly=true. */
      reason?: string
      /** @description The user who set the content restriction. Only populated if readOnly is true. */
      restrictingUser?: components['schemas']['User']
      /**
       * Format: date-time
       * @description The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.
       */
      restrictionDate?: string
      /** @description The type of the content restriction. Currently the only possible value is globalContentRestriction. */
      type?: string
    }
    /** @description Representation of a shared drive. */
    Drive: {
      /** @description An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set. */
      backgroundImageFile?: {
        /** @description The ID of an image file in Google Drive to use for the background image. */
        id?: string
        /**
         * Format: float
         * @description The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.
         */
        width?: number
        /**
         * Format: float
         * @description The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.
         */
        xCoordinate?: number
        /**
         * Format: float
         * @description The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.
         */
        yCoordinate?: number
      }
      /** @description A short-lived link to this shared drive's background image. */
      backgroundImageLink?: string
      /** @description Capabilities the current user has on this shared drive. */
      capabilities?: {
        /** @description Whether the current user can add children to folders in this shared drive. */
        canAddChildren?: boolean
        /** @description Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive. */
        canChangeCopyRequiresWriterPermissionRestriction?: boolean
        /** @description Whether the current user can change the domainUsersOnly restriction of this shared drive. */
        canChangeDomainUsersOnlyRestriction?: boolean
        /** @description Whether the current user can change the background of this shared drive. */
        canChangeDriveBackground?: boolean
        /** @description Whether the current user can change the driveMembersOnly restriction of this shared drive. */
        canChangeDriveMembersOnlyRestriction?: boolean
        /** @description Whether the current user can change the sharingFoldersRequiresOrganizerPermission restriction of this shared drive. */
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean
        /** @description Whether the current user can comment on files in this shared drive. */
        canComment?: boolean
        /** @description Whether the current user can copy files in this shared drive. */
        canCopy?: boolean
        /** @description Whether the current user can delete children from folders in this shared drive. */
        canDeleteChildren?: boolean
        /** @description Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive. */
        canDeleteDrive?: boolean
        /** @description Whether the current user can download files in this shared drive. */
        canDownload?: boolean
        /** @description Whether the current user can edit files in this shared drive */
        canEdit?: boolean
        /** @description Whether the current user can list the children of folders in this shared drive. */
        canListChildren?: boolean
        /** @description Whether the current user can add members to this shared drive or remove them or change their role. */
        canManageMembers?: boolean
        /** @description Whether the current user can read the revisions resource of files in this shared drive. */
        canReadRevisions?: boolean
        /** @description Whether the current user can rename files or folders in this shared drive. */
        canRename?: boolean
        /** @description Whether the current user can rename this shared drive. */
        canRenameDrive?: boolean
        /** @description Whether the current user can reset the shared drive restrictions to defaults. */
        canResetDriveRestrictions?: boolean
        /** @description Whether the current user can share files or folders in this shared drive. */
        canShare?: boolean
        /** @description Whether the current user can trash children from folders in this shared drive. */
        canTrashChildren?: boolean
      }
      /** @description The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId. */
      colorRgb?: string
      /**
       * Format: date-time
       * @description The time at which the shared drive was created (RFC 3339 date-time).
       */
      createdDate?: string
      /** @description Whether the shared drive is hidden from default view. */
      hidden?: boolean
      /** @description The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
      id?: string
      /**
       * @description This is always drive#drive
       * @default drive#drive
       */
      kind: string
      /** @description The name of this shared drive. */
      name?: string
      /** @description The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is set to true. */
      orgUnitId?: string
      /** @description A set of restrictions that apply to this shared drive or items inside this shared drive. */
      restrictions?: {
        /** @description Whether administrative privileges on this shared drive are required to modify restrictions. */
        adminManagedRestrictions?: boolean
        /** @description Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive. */
        copyRequiresWriterPermission?: boolean
        /** @description Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive. */
        domainUsersOnly?: boolean
        /** @description Whether access to items inside this shared drive is restricted to its members. */
        driveMembersOnly?: boolean
        /** @description If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. */
        sharingFoldersRequiresOrganizerPermission?: boolean
      }
      /** @description The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.insert request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
      themeId?: string
    }
    /** @description A list of shared drives. */
    DriveList: {
      /** @description The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      items?: components['schemas']['Drive'][]
      /**
       * @description This is always drive#driveList
       * @default drive#driveList
       */
      kind: string
      /** @description The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
    }
    /** @description The metadata for a file. */
    File: {
      /** @description A link for opening the file in a relevant Google editor or viewer. */
      alternateLink?: string
      /** @description Whether this file is in the Application Data folder. */
      appDataContents?: boolean
      /** @description Deprecated: use capabilities/canComment. */
      canComment?: boolean
      /** @description Deprecated: use capabilities/canReadRevisions. */
      canReadRevisions?: boolean
      /** @description Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. */
      capabilities?: {
        /** @description Whether the current user is the pending owner of the file. Not populated for shared drive files. */
        canAcceptOwnership?: boolean
        /** @description Whether the current user can add children to this folder. This is always false when the item is not a folder. */
        canAddChildren?: boolean
        /** @description Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
        canAddFolderFromAnotherDrive?: boolean
        /** @description Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. */
        canAddMyDriveParent?: boolean
        /** @description Whether the current user can change the copyRequiresWriterPermission restriction of this file. */
        canChangeCopyRequiresWriterPermission?: boolean
        /** @description Deprecated */
        canChangeRestrictedDownload?: boolean
        /** @description Whether the current user can change the securityUpdateEnabled field on link share metadata. */
        canChangeSecurityUpdateEnabled?: boolean
        /** @description Whether the current user can comment on this file. */
        canComment?: boolean
        /** @description Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder. */
        canCopy?: boolean
        /** @description Whether the current user can delete this file. */
        canDelete?: boolean
        /** @description Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
        canDeleteChildren?: boolean
        /** @description Whether the current user can download this file. */
        canDownload?: boolean
        /** @description Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see canChangeCopyRequiresWriterPermission or canModifyContent. */
        canEdit?: boolean
        /** @description Whether the current user can list the children of this folder. This is always false when the item is not a folder. */
        canListChildren?: boolean
        /** @description Whether the current user can modify the content of this file. */
        canModifyContent?: boolean
        /** @description Whether the current user can modify restrictions on content of this file. */
        canModifyContentRestriction?: boolean
        /** @description Whether the current user can modify the labels on this file. */
        canModifyLabels?: boolean
        /** @description Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
        canMoveChildrenOutOfDrive?: boolean
        /** @description Deprecated - use canMoveChildrenOutOfDrive instead. */
        canMoveChildrenOutOfTeamDrive?: boolean
        /** @description Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder. */
        canMoveChildrenWithinDrive?: boolean
        /** @description Deprecated - use canMoveChildrenWithinDrive instead. */
        canMoveChildrenWithinTeamDrive?: boolean
        /** @description Deprecated - use canMoveItemOutOfDrive instead. */
        canMoveItemIntoTeamDrive?: boolean
        /** @description Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. */
        canMoveItemOutOfDrive?: boolean
        /** @description Deprecated - use canMoveItemOutOfDrive instead. */
        canMoveItemOutOfTeamDrive?: boolean
        /** @description Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed. */
        canMoveItemWithinDrive?: boolean
        /** @description Deprecated - use canMoveItemWithinDrive instead. */
        canMoveItemWithinTeamDrive?: boolean
        /** @description Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead. */
        canMoveTeamDriveItem?: boolean
        /** @description Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. */
        canReadDrive?: boolean
        /** @description Whether the current user can read the labels on this file. */
        canReadLabels?: boolean
        /** @description Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it isn't a folder, can be read. */
        canReadRevisions?: boolean
        /** @description Deprecated - use canReadDrive instead. */
        canReadTeamDrive?: boolean
        /** @description Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use canDeleteChildren or canTrashChildren instead. */
        canRemoveChildren?: boolean
        /** @description Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. */
        canRemoveMyDriveParent?: boolean
        /** @description Whether the current user can rename this file. */
        canRename?: boolean
        /** @description Whether the current user can modify the sharing settings for this file. */
        canShare?: boolean
        /** @description Whether the current user can move this file to trash. */
        canTrash?: boolean
        /** @description Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
        canTrashChildren?: boolean
        /** @description Whether the current user can restore this file from trash. */
        canUntrash?: boolean
      }
      /** @description Restrictions for accessing the content of the file. Only populated if such a restriction exists. */
      contentRestrictions?: components['schemas']['ContentRestriction'][]
      /** @description Whether the options to copy, print, or download this file, should be disabled for readers and commenters. */
      copyRequiresWriterPermission?: boolean
      /** @description Deprecated: use capabilities/canCopy. */
      copyable?: boolean
      /**
       * Format: date-time
       * @description Create time for this file (formatted RFC 3339 timestamp).
       */
      createdDate?: string
      /** @description A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used. */
      defaultOpenWithLink?: string
      /** @description A short description of the file. */
      description?: string
      /** @description Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files. */
      downloadUrl?: string
      /** @description ID of the shared drive the file resides in. Only populated for items in shared drives. */
      driveId?: string
      /** @description Deprecated: use capabilities/canEdit. */
      editable?: boolean
      /** @description A link for embedding the file. */
      embedLink?: string
      /** @description ETag of the file. */
      etag?: string
      /** @description Whether this file has been explicitly trashed, as opposed to recursively trashed. */
      explicitlyTrashed?: boolean
      /** @description Links for exporting Docs Editors files to specific formats. */
      readonly exportLinks?: {
        [key: string]: string
      }
      /** @description The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files. */
      fileExtension?: string
      /**
       * Format: int64
       * @description The size of the file's content in bytes. This field is populated for files with binary content stored in Google Drive and for Docs Editors files; it is not populated for shortcuts or folders.
       */
      fileSize?: string
      /** @description Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette. */
      folderColorRgb?: string
      /** @description The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files. */
      fullFileExtension?: string
      /** @description Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
      hasAugmentedPermissions?: boolean
      /** @description Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
      hasThumbnail?: boolean
      /** @description The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files. */
      headRevisionId?: string
      /** @description A link to the file's icon. */
      iconLink?: string
      /** @description The ID of the file. */
      id?: string
      /** @description Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content. */
      imageMediaMetadata?: {
        /**
         * Format: float
         * @description The aperture used to create the photo (f-number).
         */
        aperture?: number
        /** @description The make of the camera used to create the photo. */
        cameraMake?: string
        /** @description The model of the camera used to create the photo. */
        cameraModel?: string
        /** @description The color space of the photo. */
        colorSpace?: string
        /** @description The date and time the photo was taken (EXIF format timestamp). */
        date?: string
        /**
         * Format: float
         * @description The exposure bias of the photo (APEX value).
         */
        exposureBias?: number
        /** @description The exposure mode used to create the photo. */
        exposureMode?: string
        /**
         * Format: float
         * @description The length of the exposure, in seconds.
         */
        exposureTime?: number
        /** @description Whether a flash was used to create the photo. */
        flashUsed?: boolean
        /**
         * Format: float
         * @description The focal length used to create the photo, in millimeters.
         */
        focalLength?: number
        /**
         * Format: int32
         * @description The height of the image in pixels.
         */
        height?: number
        /**
         * Format: int32
         * @description The ISO speed used to create the photo.
         */
        isoSpeed?: number
        /** @description The lens used to create the photo. */
        lens?: string
        /** @description Geographic location information stored in the image. */
        location?: {
          /**
           * Format: double
           * @description The altitude stored in the image.
           */
          altitude?: number
          /**
           * Format: double
           * @description The latitude stored in the image.
           */
          latitude?: number
          /**
           * Format: double
           * @description The longitude stored in the image.
           */
          longitude?: number
        }
        /**
         * Format: float
         * @description The smallest f-number of the lens at the focal length used to create the photo (APEX value).
         */
        maxApertureValue?: number
        /** @description The metering mode used to create the photo. */
        meteringMode?: string
        /**
         * Format: int32
         * @description The number of clockwise 90 degree rotations applied from the image's original orientation.
         */
        rotation?: number
        /** @description The type of sensor used to create the photo. */
        sensor?: string
        /**
         * Format: int32
         * @description The distance to the subject of the photo, in meters.
         */
        subjectDistance?: number
        /** @description The white balance mode used to create the photo. */
        whiteBalance?: string
        /**
         * Format: int32
         * @description The width of the image in pixels.
         */
        width?: number
      }
      /** @description Indexable text attributes for the file (can only be written). For more information, see Manage file metadata. */
      indexableText?: {
        /** @description The text to be indexed for this file. */
        text?: string
      }
      /** @description Whether the file was created or opened by the requesting app. */
      isAppAuthorized?: boolean
      /**
       * @description The type of file. This is always drive#file.
       * @default drive#file
       */
      kind: string
      /** @description An overview of the labels on the file. */
      labelInfo?: {
        /** @description The set of labels on the file as requested by the label IDs in the includeLabels parameter. By default, no labels are returned. */
        labels?: components['schemas']['Label'][]
      }
      /** @description A group of labels for the file. */
      labels?: {
        /** @description Deprecated. */
        hidden?: boolean
        /** @description Whether the file has been modified by this user. */
        modified?: boolean
        /** @description Deprecated - use copyRequiresWriterPermission instead. */
        restricted?: boolean
        /** @description Whether this file is starred by the user. */
        starred?: boolean
        /** @description Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file. */
        trashed?: boolean
        /** @description Whether this file has been viewed by this user. */
        viewed?: boolean
      }
      /** @description The last user to modify this file. */
      lastModifyingUser?: components['schemas']['User']
      /** @description Name of the last user to modify this file. */
      lastModifyingUserName?: string
      /**
       * Format: date-time
       * @description Last time this file was viewed by the user (formatted RFC 3339 timestamp).
       */
      lastViewedByMeDate?: string
      /** @description Contains details about the link URLs that clients are using to refer to this item. */
      linkShareMetadata?: {
        /** @description Whether the file is eligible for security update. */
        securityUpdateEligible?: boolean
        /** @description Whether the security update is enabled for this file. */
        securityUpdateEnabled?: boolean
      }
      /**
       * Format: date-time
       * @description Deprecated.
       */
      markedViewedByMeDate?: string
      /** @description An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files. */
      md5Checksum?: string
      /** @description The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type. */
      mimeType?: string
      /**
       * Format: date-time
       * @description Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
       */
      modifiedByMeDate?: string
      /**
       * Format: date-time
       * @description Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
       */
      modifiedDate?: string
      /** @description A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used. */
      openWithLinks?: {
        [key: string]: string
      }
      /** @description The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Google Drive. */
      originalFilename?: string
      /** @description Whether the file is owned by the current user. Not populated for items in shared drives. */
      ownedByMe?: boolean
      /** @description Name(s) of the owner(s) of this file. Not populated for items in shared drives. */
      ownerNames?: string[]
      /** @description The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives. */
      owners?: components['schemas']['User'][]
      /** @description Collection of parent folders which contain this file.
       *     If not specified as part of an insert request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests can also use the addParents and removeParents parameters to modify the parents list. */
      parents?: components['schemas']['ParentReference'][]
      /** @description List of permission IDs for users with access to this file. */
      permissionIds?: string[]
      /** @description The list of permissions for users with access to this file. Not populated for items in shared drives. */
      permissions?: components['schemas']['Permission'][]
      /** @description The list of properties. */
      properties?: components['schemas']['Property'][]
      /**
       * Format: int64
       * @description The number of quota bytes used by this file.
       */
      quotaBytesUsed?: string
      /** @description A key needed to access the item via a shared link. */
      resourceKey?: string
      /** @description A link back to this file. */
      selfLink?: string
      /** @description The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files. */
      sha1Checksum?: string
      /** @description The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files. */
      sha256Checksum?: string
      /** @description Deprecated: use capabilities/canShare. */
      shareable?: boolean
      /** @description Whether the file has been shared. Not populated for items in shared drives. */
      shared?: boolean
      /**
       * Format: date-time
       * @description Time at which this file was shared with the user (formatted RFC 3339 timestamp).
       */
      sharedWithMeDate?: string
      /** @description User that shared the item with the current user, if available. */
      sharingUser?: components['schemas']['User']
      /** @description Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut. */
      shortcutDetails?: {
        /** @description The ID of the file that this shortcut points to. */
        targetId?: string
        /** @description The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created. */
        targetMimeType?: string
        /** @description The ResourceKey for the target file. */
        targetResourceKey?: string
      }
      /** @description The list of spaces which contain the file. Supported values are 'drive', 'appDataFolder' and 'photos'. */
      spaces?: string[]
      /** @description Deprecated - use driveId instead. */
      teamDriveId?: string
      /** @description A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated. */
      thumbnail?: {
        /**
         * Format: byte
         * @description The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.
         */
        image?: string
        /** @description The MIME type of the thumbnail. */
        mimeType?: string
      }
      /** @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be fetched using a credentialed request. */
      thumbnailLink?: string
      /**
       * Format: int64
       * @description The thumbnail version for use in thumbnail cache invalidation.
       */
      thumbnailVersion?: string
      /** @description The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant. */
      title?: string
      /**
       * Format: date-time
       * @description The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.
       */
      trashedDate?: string
      /** @description If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives. */
      trashingUser?: components['schemas']['User']
      /** @description The permissions for the authenticated user on this file. */
      userPermission?: components['schemas']['Permission']
      /**
       * Format: int64
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
       */
      version?: string
      /** @description Metadata about video media. This will only be present for video types. */
      videoMediaMetadata?: {
        /**
         * Format: int64
         * @description The duration of the video in milliseconds.
         */
        durationMillis?: string
        /**
         * Format: int32
         * @description The height of the video in pixels.
         */
        height?: number
        /**
         * Format: int32
         * @description The width of the video in pixels.
         */
        width?: number
      }
      /** @description A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials. */
      webContentLink?: string
      /** @description A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting. */
      webViewLink?: string
      /** @description Whether writers can share the document with other users. Not populated for items in shared drives. */
      writersCanShare?: boolean
    }
    /** @description A list of files. */
    FileList: {
      /** @description The ETag of the list. */
      etag?: string
      /** @description Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "default" or "drive". */
      incompleteSearch?: boolean
      /** @description The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      items?: components['schemas']['File'][]
      /**
       * @description This is always drive#fileList.
       * @default drive#fileList
       */
      kind: string
      /** @description A link to the next page of files. */
      nextLink?: string
      /** @description The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    /** @description A list of generated IDs which can be provided in insert requests */
    GeneratedIds: {
      /** @description The IDs generated for the requesting user in the specified space. */
      ids?: string[]
      /**
       * @description This is always drive#generatedIds
       * @default drive#generatedIds
       */
      kind: string
      /** @description The type of file that can be created with these IDs. */
      space?: string
    }
    /** @description Representation of a label and its fields. */
    Label: {
      /** @description A map of the label's fields keyed by the field ID. */
      fields?: {
        [key: string]: components['schemas']['LabelField']
      }
      /** @description The ID of the label. */
      id?: string
      /**
       * @description This is always drive#label
       * @default drive#label
       */
      kind: string
      /** @description The revision ID of the label. */
      revisionId?: string
    }
    /** @description Representation of a label field. */
    LabelField: {
      /** @description Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD. */
      dateString?: string[]
      /** @description The identifier of this field. */
      id?: string
      /** @description Only present if valueType is integer. */
      integer?: string[]
      /**
       * @description This is always drive#labelField.
       * @default drive#labelField
       */
      kind: string
      /** @description Only present if valueType is selection. */
      selection?: string[]
      /** @description Only present if valueType is text. */
      text?: string[]
      /** @description Only present if valueType is user. */
      user?: components['schemas']['User'][]
      /** @description The field type. While new values may be supported in the future, the following are currently allowed:
       *     - dateString
       *     - integer
       *     - selection
       *     - text
       *     - user */
      valueType?: string
    }
    /** @description A modification to a label's field. */
    LabelFieldModification: {
      /** @description The ID of the field to be modified. */
      fieldId?: string
      /**
       * @description This is always drive#labelFieldModification.
       * @default drive#labelFieldModification
       */
      kind: string
      /** @description Replaces a dateString field with these new values. The values must be strings in the RFC 3339 full-date format: YYYY-MM-DD. */
      setDateValues?: string[]
      /** @description Replaces an integer field with these new values. */
      setIntegerValues?: string[]
      /** @description Replaces a selection field with these new values. */
      setSelectionValues?: string[]
      /** @description Replaces a text field with these new values. */
      setTextValues?: string[]
      /** @description Replaces a user field with these new values. The values must be valid email addresses. */
      setUserValues?: string[]
      /** @description Unsets the values for this field. */
      unsetValues?: boolean
    }
    /** @description A list of labels. */
    LabelList: {
      /** @description The list of labels. */
      items?: components['schemas']['Label'][]
      /**
       * @description This is always drive#labelList
       * @default drive#labelList
       */
      kind: string
      /** @description The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
    }
    /** @description A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file. */
    LabelModification: {
      /** @description The list of modifications to this label's fields. */
      fieldModifications?: components['schemas']['LabelFieldModification'][]
      /**
       * @description This is always drive#labelModification.
       * @default drive#labelModification
       */
      kind: string
      /** @description The ID of the label to modify. */
      labelId?: string
      /** @description If true, the label will be removed from the file. */
      removeLabel?: boolean
    }
    /** @description A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally. */
    ModifyLabelsRequest: {
      /**
       * @description This is always drive#modifyLabelsRequest
       * @default drive#modifyLabelsRequest
       */
      kind: string
      /** @description The list of modifications to apply to the labels on the file. */
      labelModifications?: components['schemas']['LabelModification'][]
    }
    /** @description Response to a ModifyLabels request. This contains only those labels which were added or updated by the request. */
    ModifyLabelsResponse: {
      /**
       * @description This is always drive#modifyLabelsResponse
       * @default drive#modifyLabelsResponse
       */
      kind: string
      /** @description The list of labels which were added or updated by the request. */
      modifiedLabels?: components['schemas']['Label'][]
    }
    /** @description A list of a file's parents. */
    ParentList: {
      /** @description The ETag of the list. */
      etag?: string
      /** @description The list of parents. */
      items?: components['schemas']['ParentReference'][]
      /**
       * @description This is always drive#parentList.
       * @default drive#parentList
       */
      kind: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    /** @description A reference to a file's parent. */
    ParentReference: {
      /** @description The ID of the parent. */
      id?: string
      /** @description Whether or not the parent is the root folder. */
      isRoot?: boolean
      /**
       * @description This is always drive#parentReference.
       * @default drive#parentReference
       */
      kind: string
      /** @description A link to the parent. */
      parentLink?: string
      /** @description A link back to this reference. */
      selfLink?: string
    }
    /** @description A permission for a file. */
    Permission: {
      /** @description Additional roles for this user. Only commenter is currently allowed, though more may be supported in the future. */
      additionalRoles?: string[]
      /** @description Deprecated. */
      authKey?: string
      /** @description Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
      deleted?: boolean
      /** @description The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is user, group or domain. */
      domain?: string
      /** @description The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is user or group. */
      emailAddress?: string
      /** @description The ETag of the permission. */
      etag?: string
      /**
       * Format: date-time
       * @description The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:
       *     - They cannot be set on shared drive items
       *     - They can only be set on user and group permissions
       *     - The date must be in the future
       *     - The date cannot be more than a year in the future
       */
      expirationDate?: string
      /** @description The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored. */
      id?: string
      /**
       * @description This is always drive#permission.
       * @default drive#permission
       */
      kind: string
      /** @description The name for this permission. */
      name?: string
      /** @description Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive. */
      pendingOwner?: boolean
      /** @description Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items. */
      readonly permissionDetails?: {
        /** @description Additional roles for this user. Only commenter is currently possible, though more may be supported in the future. */
        additionalRoles?: string[]
        /** @description Whether this permission is inherited. This field is always populated. This is an output-only field. */
        inherited?: boolean
        /** @description The ID of the item from which this permission is inherited. This is an output-only field. */
        inheritedFrom?: string
        /** @description The permission type for this user. While new values may be added in future, the following are currently possible:
         *     - file
         *     - member */
        permissionType?: string
        /** @description The primary role for this user. While new values may be added in the future, the following are currently possible:
         *     - organizer
         *     - fileOrganizer
         *     - writer
         *     - reader */
        role?: string
      }[]
      /** @description A link to the profile photo, if available. */
      photoLink?: string
      /** @description The primary role for this user. While new values may be supported in the future, the following are currently allowed:
       *     - owner
       *     - organizer
       *     - fileOrganizer
       *     - writer
       *     - reader */
      role?: string
      /** @description A link back to this permission. */
      selfLink?: string
      /** @description Deprecated - use permissionDetails instead. */
      readonly teamDrivePermissionDetails?: {
        /** @description Deprecated - use permissionDetails/additionalRoles instead. */
        additionalRoles?: string[]
        /** @description Deprecated - use permissionDetails/inherited instead. */
        inherited?: boolean
        /** @description Deprecated - use permissionDetails/inheritedFrom instead. */
        inheritedFrom?: string
        /** @description Deprecated - use permissionDetails/role instead. */
        role?: string
        /** @description Deprecated - use permissionDetails/permissionType instead. */
        teamDrivePermissionType?: string
      }[]
      /** @description The account type. Allowed values are:
       *     - user
       *     - group
       *     - domain
       *     - anyone */
      type?: string
      /** @description The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored. */
      value?: string
      /** @description Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value. */
      view?: string
      /** @description Whether the link is required for this permission. */
      withLink?: boolean
    }
    /** @description An ID for a user or group as seen in Permission items. */
    PermissionId: {
      /** @description The permission ID. */
      id?: string
      /**
       * @description This is always drive#permissionId.
       * @default drive#permissionId
       */
      kind: string
    }
    /** @description A list of permissions associated with a file. */
    PermissionList: {
      /** @description The ETag of the list. */
      etag?: string
      /** @description The list of permissions. */
      items?: components['schemas']['Permission'][]
      /**
       * @description This is always drive#permissionList.
       * @default drive#permissionList
       */
      kind: string
      /** @description The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    /** @description A key-value pair attached to a file that is either public or private to an application.
     *     The following limits apply to file properties:
     *     - Maximum of 100 properties total per file
     *     - Maximum of 30 private properties per app
     *     - Maximum of 30 public properties
     *     - Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property. */
    Property: {
      /** @description ETag of the property. */
      etag?: string
      /** @description The key of this property. */
      key?: string
      /**
       * @description This is always drive#property.
       * @default drive#property
       */
      kind: string
      /** @description The link back to this property. */
      selfLink?: string
      /** @description The value of this property. */
      value?: string
      /** @description The visibility of this property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE). Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties. */
      visibility?: string
    }
    /** @description A collection of properties, key-value pairs that are either public or private to an application. */
    PropertyList: {
      /** @description The ETag of the list. */
      etag?: string
      /** @description The list of properties. */
      items?: components['schemas']['Property'][]
      /**
       * @description This is always drive#propertyList.
       * @default drive#propertyList
       */
      kind: string
      /** @description The link back to this list. */
      selfLink?: string
    }
    /** @description A revision of a file. */
    Revision: {
      downloadUrl?: string
      /** @description The ETag of the revision. */
      etag?: string
      /** @description Links for exporting Docs Editors files to specific formats. */
      exportLinks?: {
        [key: string]: string
      }
      /**
       * Format: int64
       * @description The size of the revision in bytes. This will only be populated on files with content stored in Drive.
       */
      fileSize?: string
      /** @description The ID of the revision. */
      id?: string
      /**
       * @description This is always drive#revision.
       * @default drive#revision
       */
      kind: string
      /** @description The last user to modify this revision. */
      lastModifyingUser?: components['schemas']['User']
      /** @description Name of the last user to modify this revision. */
      lastModifyingUserName?: string
      /** @description An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive. */
      md5Checksum?: string
      /** @description The MIME type of the revision. */
      mimeType?: string
      /**
       * Format: date-time
       * @description Last time this revision was modified (formatted RFC 3339 timestamp).
       */
      modifiedDate?: string
      /** @description The original filename when this revision was created. This will only be populated on files with content stored in Drive. */
      originalFilename?: string
      /** @description Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions. */
      pinned?: boolean
      /** @description Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files. */
      publishAuto?: boolean
      /** @description Whether this revision is published. This is only populated and can only be modified for Docs Editors files. */
      published?: boolean
      /** @description A link to the published revision. This is only populated for Google Sites files. */
      publishedLink?: string
      /** @description Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files. */
      publishedOutsideDomain?: boolean
      /** @description A link back to this revision. */
      selfLink?: string
    }
    /** @description A list of revisions of a file. */
    RevisionList: {
      /** @description The ETag of the list. */
      etag?: string
      /** @description The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      items?: components['schemas']['Revision'][]
      /**
       * @description This is always drive#revisionList.
       * @default drive#revisionList
       */
      kind: string
      /** @description The page token for the next page of revisions. This field will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description A link back to this list. */
      selfLink?: string
    }
    StartPageToken: {
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken".
       * @default drive#startPageToken
       */
      kind: string
      /** @description The starting page token for listing changes. */
      startPageToken?: string
    }
    /** @description Deprecated: use the drive collection instead. */
    TeamDrive: {
      /** @description An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set. */
      backgroundImageFile?: {
        /** @description The ID of an image file in Drive to use for the background image. */
        id?: string
        /**
         * Format: float
         * @description The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.
         */
        width?: number
        /**
         * Format: float
         * @description The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.
         */
        xCoordinate?: number
        /**
         * Format: float
         * @description The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.
         */
        yCoordinate?: number
      }
      /** @description A short-lived link to this Team Drive's background image. */
      backgroundImageLink?: string
      /** @description Capabilities the current user has on this Team Drive. */
      capabilities?: {
        /** @description Whether the current user can add children to folders in this Team Drive. */
        canAddChildren?: boolean
        /** @description Whether the current user can change the copyRequiresWriterPermission restriction of this Team Drive. */
        canChangeCopyRequiresWriterPermissionRestriction?: boolean
        /** @description Whether the current user can change the domainUsersOnly restriction of this Team Drive. */
        canChangeDomainUsersOnlyRestriction?: boolean
        /** @description Whether the current user can change the sharingFoldersRequiresOrganizerPermission restriction of this Team Drive. */
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean
        /** @description Whether the current user can change the background of this Team Drive. */
        canChangeTeamDriveBackground?: boolean
        /** @description Whether the current user can change the teamMembersOnly restriction of this Team Drive. */
        canChangeTeamMembersOnlyRestriction?: boolean
        /** @description Whether the current user can comment on files in this Team Drive. */
        canComment?: boolean
        /** @description Whether the current user can copy files in this Team Drive. */
        canCopy?: boolean
        /** @description Whether the current user can delete children from folders in this Team Drive. */
        canDeleteChildren?: boolean
        /** @description Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive. */
        canDeleteTeamDrive?: boolean
        /** @description Whether the current user can download files in this Team Drive. */
        canDownload?: boolean
        /** @description Whether the current user can edit files in this Team Drive */
        canEdit?: boolean
        /** @description Whether the current user can list the children of folders in this Team Drive. */
        canListChildren?: boolean
        /** @description Whether the current user can add members to this Team Drive or remove them or change their role. */
        canManageMembers?: boolean
        /** @description Whether the current user can read the revisions resource of files in this Team Drive. */
        canReadRevisions?: boolean
        /** @description Deprecated - use canDeleteChildren or canTrashChildren instead. */
        canRemoveChildren?: boolean
        /** @description Whether the current user can rename files or folders in this Team Drive. */
        canRename?: boolean
        /** @description Whether the current user can rename this Team Drive. */
        canRenameTeamDrive?: boolean
        /** @description Whether the current user can reset the Team Drive restrictions to defaults. */
        canResetTeamDriveRestrictions?: boolean
        /** @description Whether the current user can share files or folders in this Team Drive. */
        canShare?: boolean
        /** @description Whether the current user can trash children from folders in this Team Drive. */
        canTrashChildren?: boolean
      }
      /** @description The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId. */
      colorRgb?: string
      /**
       * Format: date-time
       * @description The time at which the Team Drive was created (RFC 3339 date-time).
       */
      createdDate?: string
      /** @description The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
      id?: string
      /**
       * @description This is always drive#teamDrive
       * @default drive#teamDrive
       */
      kind: string
      /** @description The name of this Team Drive. */
      name?: string
      /** @description The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is set to true. */
      orgUnitId?: string
      /** @description A set of restrictions that apply to this Team Drive or items inside this Team Drive. */
      restrictions?: {
        /** @description Whether administrative privileges on this Team Drive are required to modify restrictions. */
        adminManagedRestrictions?: boolean
        /** @description Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this Team Drive. */
        copyRequiresWriterPermission?: boolean
        /** @description Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive. */
        domainUsersOnly?: boolean
        /** @description If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. */
        sharingFoldersRequiresOrganizerPermission?: boolean
        /** @description Whether access to items inside this Team Drive is restricted to members of this Team Drive. */
        teamMembersOnly?: boolean
      }
      /** @description The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.insert request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
      themeId?: string
    }
    /** @description A list of Team Drives. */
    TeamDriveList: {
      /** @description The list of Team Drives. */
      items?: components['schemas']['TeamDrive'][]
      /**
       * @description This is always drive#teamDriveList
       * @default drive#teamDriveList
       */
      kind: string
      /** @description The page token for the next page of Team Drives. */
      nextPageToken?: string
    }
    /** @description Information about a Drive user. */
    User: {
      /** @description A plain text displayable name for this user. */
      displayName?: string
      /** @description The email address of the user. */
      emailAddress?: string
      /** @description Whether this user is the same as the authenticated user for whom the request was made. */
      isAuthenticatedUser?: boolean
      /**
       * @description This is always drive#user.
       * @default drive#user
       */
      kind: string
      /** @description The user's ID as visible in the permissions collection. */
      permissionId?: string
      /** @description The user's profile picture. */
      picture?: {
        /** @description A URL that points to a profile picture of this user. */
        url?: string
      }
    }
  }
  responses: never
  parameters: {
    /** @description Data format for the response. */
    alt: 'json'
    /** @description Selector specifying which fields to include in a partial response. */
    fields: string
    /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
    key: string
    /** @description OAuth 2.0 token for the current user. */
    oauth_token: string
    /** @description Returns response with indentations and line breaks. */
    prettyPrint: boolean
    /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
    quotaUser: string
    /** @description Deprecated. Please use quotaUser instead. */
    userIp: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  'drive.about.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the maxChangeIdCount. */
        includeSubscribed?: boolean
        /** @description Maximum number of remaining change IDs to count */
        maxChangeIdCount?: string
        /** @description Change ID to start counting from when calculating number of remaining change IDs */
        startChangeId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['About']
        }
      }
    }
  }
  'drive.apps.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists. */
        appFilterExtensions?: string
        /** @description A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists. */
        appFilterMimeTypes?: string
        /** @description A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). */
        languageCode?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AppList']
        }
      }
    }
  }
  'drive.apps.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the app. */
        appId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['App']
        }
      }
    }
  }
  'drive.changes.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The shared drive from which changes are returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
        driveId?: string
        /** @description Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
        includeCorpusRemovals?: boolean
        /** @description Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
        includeDeleted?: boolean
        /** @description Whether both My Drive and shared drive items should be included in results. */
        includeItemsFromAllDrives?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive are omitted from the result. */
        includeSubscribed?: boolean
        /** @description Deprecated use includeItemsFromAllDrives instead. */
        includeTeamDriveItems?: boolean
        /** @description Maximum number of changes to return. */
        maxResults?: number
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. */
        pageToken?: string
        /** @description A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'. */
        spaces?: string
        /** @description Deprecated - use pageToken instead. */
        startChangeId?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Deprecated use driveId instead. */
        teamDriveId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChangeList']
        }
      }
    }
  }
  'drive.changes.getStartPageToken': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive is returned. */
        driveId?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Deprecated use driveId instead. */
        teamDriveId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StartPageToken']
        }
      }
    }
  }
  'drive.changes.watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The shared drive from which changes are returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
        driveId?: string
        /** @description Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
        includeCorpusRemovals?: boolean
        /** @description Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
        includeDeleted?: boolean
        /** @description Whether both My Drive and shared drive items should be included in results. */
        includeItemsFromAllDrives?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive are omitted from the result. */
        includeSubscribed?: boolean
        /** @description Deprecated use includeItemsFromAllDrives instead. */
        includeTeamDriveItems?: boolean
        /** @description Maximum number of changes to return. */
        maxResults?: number
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. */
        pageToken?: string
        /** @description A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'. */
        spaces?: string
        /** @description Deprecated - use pageToken instead. */
        startChangeId?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Deprecated use driveId instead. */
        teamDriveId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Channel']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Channel']
        }
      }
    }
  }
  'drive.changes.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The shared drive from which the change is returned. */
        driveId?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Deprecated use driveId instead. */
        teamDriveId?: string
      }
      header?: never
      path: {
        /** @description The ID of the change. */
        changeId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Change']
        }
      }
    }
  }
  'drive.channels.stop': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Channel']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.drives.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of shared drives to return per page. */
        maxResults?: number
        /** @description Page token for shared drives. */
        pageToken?: string
        /** @description Query string for searching shared drives. */
        q?: string
        /** @description Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DriveList']
        }
      }
    }
  }
  'drive.drives.insert': {
    parameters: {
      query: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned. */
        requestId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Drive']
      }
    }
    responses: {
      /** @description Successful response */
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
  'drive.drives.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the shared drive. */
        driveId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
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
  'drive.drives.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the shared drive. */
        driveId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Drive']
      }
    }
    responses: {
      /** @description Successful response */
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
  'drive.drives.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether any items inside the shared drive should also be deleted. This option is only supported when useDomainAdminAccess is also set to true. */
        allowItemDeletion?: boolean
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the shared drive. */
        driveId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.drives.hide': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the shared drive. */
        driveId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
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
  'drive.drives.unhide': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the shared drive. */
        driveId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
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
  'drive.files.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Groupings of files to which the query applies. Supported groupings are: 'user' (files created by, opened by, or shared directly with the user), 'drive' (files in the specified shared drive as indicated by the 'driveId'), 'domain' (files shared to the user's domain), and 'allDrives' (A combination of 'user' and 'drive' for all drives where the user is a member). When able, use 'user' or 'drive', instead of 'allDrives', for efficiency. */
        corpora?: string
        /** @description The body of items (files/documents) to which the query applies. Deprecated: use 'corpora' instead. */
        corpus?: 'DEFAULT' | 'DOMAIN'
        /** @description ID of the shared drive to search. */
        driveId?: string
        /** @description Whether both My Drive and shared drive items should be included in results. */
        includeItemsFromAllDrives?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Deprecated use includeItemsFromAllDrives instead. */
        includeTeamDriveItems?: boolean
        /** @description The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. */
        maxResults?: number
        /** @description A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', 'title', and 'title_natural'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored. */
        orderBy?: string
        /** @description Page token for files. */
        pageToken?: string
        /** @description This parameter is deprecated and has no function. */
        projection?: 'BASIC' | 'FULL'
        /** @description Query string for searching files. */
        q?: string
        /** @description A comma-separated list of spaces to query. Supported values are 'drive' and 'appDataFolder'. */
        spaces?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Deprecated use driveId instead. */
        teamDriveId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FileList']
        }
      }
    }
  }
  'drive.files.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to convert this file to the corresponding Docs Editors format. */
        convert?: boolean
        /** @description Deprecated. Creating files in multiple folders is no longer supported. */
        enforceSingleParent?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. */
        ocr?: boolean
        /** @description If ocr is true, hints at the language to use. Valid values are BCP 47 codes. */
        ocrLanguage?: string
        /** @description Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions. */
        pinned?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description The language of the timed text. */
        timedTextLanguage?: string
        /** @description The timed text track name. */
        timedTextTrackName?: string
        /** @description Whether to use the content as indexable text. */
        useContentAsIndexableText?: boolean
        /** @description The visibility of the new file. This parameter is only relevant when convert=false. */
        visibility?: 'DEFAULT' | 'PRIVATE'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/octet-stream': components['schemas']['File']
      }
    }
    responses: {
      /** @description Successful response */
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
  'drive.files.generateIds': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of IDs to return. */
        maxResults?: number
        /** @description The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive') */
        space?: string
        /** @description The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the drive 'space'. (Default: 'files') */
        type?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GeneratedIds']
        }
      }
    }
  }
  'drive.files.emptyTrash': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description If set, empties the trash of the provided shared drive. */
        driveId?: string
        /** @description Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. */
        enforceSingleParent?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.files.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. */
        acknowledgeAbuse?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description This parameter is deprecated and has no function. */
        projection?: 'BASIC' | 'FULL'
        /** @description Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified. */
        revisionId?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body. */
        updateViewedDate?: boolean
      }
      header?: never
      path: {
        /** @description The ID for the file in question. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
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
  'drive.files.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Comma-separated list of parent IDs to add. */
        addParents?: string
        /** @description This parameter is deprecated and has no function. */
        convert?: boolean
        /** @description Deprecated. Adding files to multiple folders is no longer supported. Use shortcuts instead. */
        enforceSingleParent?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate. */
        modifiedDateBehavior?:
          | 'fromBody'
          | 'fromBodyIfNeeded'
          | 'fromBodyOrNow'
          | 'noChange'
          | 'now'
          | 'nowIfNeeded'
        /** @description Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center. Note that this field is ignored if there is no payload in the request. */
        newRevision?: boolean
        /** @description Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. */
        ocr?: boolean
        /** @description If ocr is true, hints at the language to use. Valid values are BCP 47 codes. */
        ocrLanguage?: string
        /** @description Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request. */
        pinned?: boolean
        /** @description Comma-separated list of parent IDs to remove. */
        removeParents?: string
        /** @description Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange. */
        setModifiedDate?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description The language of the timed text. */
        timedTextLanguage?: string
        /** @description The timed text track name. */
        timedTextTrackName?: string
        /** @description Whether to update the view date after successfully updating the file. */
        updateViewedDate?: boolean
        /** @description Whether to use the content as indexable text. */
        useContentAsIndexableText?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file to update. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/octet-stream': components['schemas']['File']
      }
    }
    responses: {
      /** @description Successful response */
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
  'drive.files.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. */
        enforceSingleParent?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file to delete. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.files.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Comma-separated list of parent IDs to add. */
        addParents?: string
        /** @description This parameter is deprecated and has no function. */
        convert?: boolean
        /** @description Deprecated. Adding files to multiple folders is no longer supported. Use shortcuts instead. */
        enforceSingleParent?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate. */
        modifiedDateBehavior?:
          | 'fromBody'
          | 'fromBodyIfNeeded'
          | 'fromBodyOrNow'
          | 'noChange'
          | 'now'
          | 'nowIfNeeded'
        /** @description Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center. Note that this field is ignored if there is no payload in the request. */
        newRevision?: boolean
        /** @description Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. */
        ocr?: boolean
        /** @description If ocr is true, hints at the language to use. Valid values are BCP 47 codes. */
        ocrLanguage?: string
        /** @description Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request. */
        pinned?: boolean
        /** @description Comma-separated list of parent IDs to remove. */
        removeParents?: string
        /** @description Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange. */
        setModifiedDate?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description The language of the timed text. */
        timedTextLanguage?: string
        /** @description The timed text track name. */
        timedTextTrackName?: string
        /** @description Whether to update the view date after successfully updating the file. */
        updateViewedDate?: boolean
        /** @description Whether to use the content as indexable text. */
        useContentAsIndexableText?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file to update. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['File']
      }
    }
    responses: {
      /** @description Successful response */
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
  'drive.comments.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned. */
        includeDeleted?: boolean
        /** @description The maximum number of discussions to include in the response, used for paging. */
        maxResults?: number
        /** @description The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. */
        pageToken?: string
        /** @description Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp. */
        updatedMin?: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommentList']
        }
      }
    }
  }
  'drive.comments.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Comment']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Comment']
        }
      }
    }
  }
  'drive.comments.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description If set, this will succeed when retrieving a deleted comment, and will include any deleted replies. */
        includeDeleted?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Comment']
        }
      }
    }
  }
  'drive.comments.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Comment']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Comment']
        }
      }
    }
  }
  'drive.comments.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.comments.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Comment']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Comment']
        }
      }
    }
  }
  'drive.replies.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description If set, all replies, including deleted replies (with content stripped) will be returned. */
        includeDeleted?: boolean
        /** @description The maximum number of replies to include in the response, used for paging. */
        maxResults?: number
        /** @description The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. */
        pageToken?: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommentReplyList']
        }
      }
    }
  }
  'drive.replies.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CommentReply']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommentReply']
        }
      }
    }
  }
  'drive.replies.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description If set, this will succeed when retrieving a deleted reply. */
        includeDeleted?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
        /** @description The ID of the reply. */
        replyId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommentReply']
        }
      }
    }
  }
  'drive.replies.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
        /** @description The ID of the reply. */
        replyId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CommentReply']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommentReply']
        }
      }
    }
  }
  'drive.replies.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
        /** @description The ID of the reply. */
        replyId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.replies.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the comment. */
        commentId: string
        /** @description The ID of the reply. */
        replyId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CommentReply']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommentReply']
        }
      }
    }
  }
  'drive.files.copy': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to convert this file to the corresponding Docs Editors format. */
        convert?: boolean
        /** @description Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead. */
        enforceSingleParent?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. */
        ocr?: boolean
        /** @description If ocr is true, hints at the language to use. Valid values are BCP 47 codes. */
        ocrLanguage?: string
        /** @description Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions. */
        pinned?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description The language of the timed text. */
        timedTextLanguage?: string
        /** @description The timed text track name. */
        timedTextTrackName?: string
        /** @description The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false. */
        visibility?: 'DEFAULT' | 'PRIVATE'
      }
      header?: never
      path: {
        /** @description The ID of the file to copy. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['File']
      }
    }
    responses: {
      /** @description Successful response */
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
  'drive.files.export': {
    parameters: {
      query: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The MIME type of the format requested for this export. */
        mimeType: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.files.listLabels': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The maximum number of labels to return per page. When not set, this defaults to 100. */
        maxResults?: number
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
        pageToken?: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['LabelList']
        }
      }
    }
  }
  'drive.files.modifyLabels': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file for which the labels are modified. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ModifyLabelsRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ModifyLabelsResponse']
        }
      }
    }
  }
  'drive.parents.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ParentList']
        }
      }
    }
  }
  'drive.parents.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated. Adding files to multiple folders is no longer supported. Use shortcuts instead. */
        enforceSingleParent?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ParentReference']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ParentReference']
        }
      }
    }
  }
  'drive.parents.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the parent. */
        parentId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ParentReference']
        }
      }
    }
  }
  'drive.parents.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. */
        enforceSingleParent?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the parent. */
        parentId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.permissions.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. */
        maxResults?: number
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
        pageToken?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID for the file or shared drive. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PermissionList']
        }
      }
    }
  }
  'drive.permissions.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description A plain text custom message to include in notification emails. */
        emailMessage?: string
        /** @description Deprecated. See moveToNewOwnersRoot for details. */
        enforceSingleParent?: boolean
        /** @description This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to true, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to false, parents are not changed. */
        moveToNewOwnersRoot?: boolean
        /** @description Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner. */
        sendNotificationEmails?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID for the file or shared drive. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Permission']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Permission']
        }
      }
    }
  }
  'drive.permissions.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID for the file or shared drive. */
        fileId: string
        /** @description The ID for the permission. */
        permissionId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Permission']
        }
      }
    }
  }
  'drive.permissions.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to remove the expiration date. */
        removeExpiration?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. File owners can only transfer ownership of files existing on My Drive. Files existing in a shared drive are owned by the organization that owns that shared drive. Ownership transfers are not supported for files and folders in shared drives. Organizers of a shared drive can move items from that shared drive into their My Drive which transfers the ownership to them. */
        transferOwnership?: boolean
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID for the file or shared drive. */
        fileId: string
        /** @description The ID for the permission. */
        permissionId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Permission']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Permission']
        }
      }
    }
  }
  'drive.permissions.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID for the file or shared drive. */
        fileId: string
        /** @description The ID for the permission. */
        permissionId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.permissions.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to remove the expiration date. */
        removeExpiration?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'. */
        transferOwnership?: boolean
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID for the file or shared drive. */
        fileId: string
        /** @description The ID for the permission. */
        permissionId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Permission']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Permission']
        }
      }
    }
  }
  'drive.properties.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PropertyList']
        }
      }
    }
  }
  'drive.properties.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Property']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Property']
        }
      }
    }
  }
  'drive.properties.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The visibility of the property. */
        visibility?: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The key of the property. */
        propertyKey: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Property']
        }
      }
    }
  }
  'drive.properties.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE) */
        visibility?: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The key of the property. */
        propertyKey: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Property']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Property']
        }
      }
    }
  }
  'drive.properties.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The visibility of the property. */
        visibility?: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The key of the property. */
        propertyKey: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.properties.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE) */
        visibility?: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The key of the property. */
        propertyKey: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Property']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Property']
        }
      }
    }
  }
  'drive.revisions.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of revisions to return. */
        maxResults?: number
        /** @description Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. */
        pageToken?: string
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RevisionList']
        }
      }
    }
  }
  'drive.revisions.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the revision. */
        revisionId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Revision']
        }
      }
    }
  }
  'drive.revisions.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID for the file. */
        fileId: string
        /** @description The ID for the revision. */
        revisionId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Revision']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Revision']
        }
      }
    }
  }
  'drive.revisions.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the revision. */
        revisionId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.revisions.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID for the file. */
        fileId: string
        /** @description The ID for the revision. */
        revisionId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Revision']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Revision']
        }
      }
    }
  }
  'drive.files.touch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file to update. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
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
  'drive.files.trash': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file to trash. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
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
  'drive.files.untrash': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the file to untrash. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
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
  'drive.files.watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. */
        acknowledgeAbuse?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description This parameter is deprecated and has no function. */
        projection?: 'BASIC' | 'FULL'
        /** @description Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified. */
        revisionId?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body. */
        updateViewedDate?: boolean
      }
      header?: never
      path: {
        /** @description The ID for the file in question. */
        fileId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Channel']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Channel']
        }
      }
    }
  }
  'drive.children.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of children to return. */
        maxResults?: number
        /** @description A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored. */
        orderBy?: string
        /** @description Page token for children. */
        pageToken?: string
        /** @description Query string for searching children. */
        q?: string
      }
      header?: never
      path: {
        /** @description The ID of the folder. */
        folderId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChildList']
        }
      }
    }
  }
  'drive.children.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated. Adding files to multiple folders is no longer supported. Use shortcuts instead. */
        enforceSingleParent?: boolean
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the folder. */
        folderId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ChildReference']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChildReference']
        }
      }
    }
  }
  'drive.children.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the folder. */
        folderId: string
        /** @description The ID of the child. */
        childId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChildReference']
        }
      }
    }
  }
  'drive.children.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. */
        enforceSingleParent?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the folder. */
        folderId: string
        /** @description The ID of the child. */
        childId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'drive.permissions.getIdForEmail': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The email address for which to return a permission ID */
        email: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PermissionId']
        }
      }
    }
  }
  'drive.teamdrives.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of Team Drives to return. */
        maxResults?: number
        /** @description Page token for Team Drives. */
        pageToken?: string
        /** @description Query string for searching Team Drives. */
        q?: string
        /** @description Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TeamDriveList']
        }
      }
    }
  }
  'drive.teamdrives.insert': {
    parameters: {
      query: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned. */
        requestId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['TeamDrive']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TeamDrive']
        }
      }
    }
  }
  'drive.teamdrives.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the Team Drive */
        teamDriveId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TeamDrive']
        }
      }
    }
  }
  'drive.teamdrives.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. */
        useDomainAdminAccess?: boolean
      }
      header?: never
      path: {
        /** @description The ID of the Team Drive */
        teamDriveId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['TeamDrive']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TeamDrive']
        }
      }
    }
  }
  'drive.teamdrives.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The ID of the Team Drive */
        teamDriveId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
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
