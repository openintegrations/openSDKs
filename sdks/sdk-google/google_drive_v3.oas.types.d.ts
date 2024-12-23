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
    /** @description Gets information about the user, the user's Drive, and system capabilities. */
    get: operations['drive.about.get']
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
    /** @description Subscribes to changes for a user. To use this method, you must include the pageToken query parameter. */
    post: operations['drive.changes.watch']
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
    /** @description Creates a shared drive. */
    post: operations['drive.drives.create']
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
    put?: never
    post?: never
    /** @description Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items. */
    delete: operations['drive.drives.delete']
    options?: never
    head?: never
    /** @description Updates the metadata for a shared drive. */
    patch: operations['drive.drives.update']
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
    /** @description Lists or searches files. */
    get: operations['drive.files.list']
    put?: never
    /** @description Creates a file. */
    post: operations['drive.files.create']
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
    /** @description Generates a set of file IDs which can be provided in create or copy requests. */
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
    put?: never
    post?: never
    /** @description Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted. */
    delete: operations['drive.files.delete']
    options?: never
    head?: never
    /** @description Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics. */
    patch: operations['drive.files.update']
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
    /** @description Creates a comment on a file. */
    post: operations['drive.comments.create']
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
    put?: never
    post?: never
    /** @description Deletes a comment. */
    delete: operations['drive.comments.delete']
    options?: never
    head?: never
    /** @description Updates a comment with patch semantics. */
    patch: operations['drive.comments.update']
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
    /** @description Lists a comment's replies. */
    get: operations['drive.replies.list']
    put?: never
    /** @description Creates a reply to a comment. */
    post: operations['drive.replies.create']
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
    /** @description Gets a reply by ID. */
    get: operations['drive.replies.get']
    put?: never
    post?: never
    /** @description Deletes a reply. */
    delete: operations['drive.replies.delete']
    options?: never
    head?: never
    /** @description Updates a reply with patch semantics. */
    patch: operations['drive.replies.update']
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
    /** @description Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied. */
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
    /** @description Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives. */
    post: operations['drive.permissions.create']
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
    put?: never
    post?: never
    /** @description Deletes a permission. */
    delete: operations['drive.permissions.delete']
    options?: never
    head?: never
    /** @description Updates a permission with patch semantics. */
    patch: operations['drive.permissions.update']
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
    /** @description Gets a revision's metadata or content by ID. */
    get: operations['drive.revisions.get']
    put?: never
    post?: never
    /** @description Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. */
    delete: operations['drive.revisions.delete']
    options?: never
    head?: never
    /** @description Updates a revision with patch semantics. */
    patch: operations['drive.revisions.update']
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
    /** @description Subscribes to changes to a file. */
    post: operations['drive.files.watch']
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
    /** @description Deprecated use drives.create instead. */
    post: operations['drive.teamdrives.create']
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
    put?: never
    post?: never
    /** @description Deprecated use drives.delete instead. */
    delete: operations['drive.teamdrives.delete']
    options?: never
    head?: never
    /** @description Deprecated use drives.update instead */
    patch: operations['drive.teamdrives.update']
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    /** @description Information about the user, the user's Drive, and system capabilities. */
    About: {
      /** @description Whether the user has installed the requesting app. */
      appInstalled?: boolean
      /** @description Whether the user can create shared drives. */
      canCreateDrives?: boolean
      /** @description Deprecated - use canCreateDrives instead. */
      canCreateTeamDrives?: boolean
      /** @description A list of themes that are supported for shared drives. */
      driveThemes?: {
        /** @description A link to this theme's background image. */
        backgroundImageLink?: string
        /** @description The color of this theme as an RGB hex string. */
        colorRgb?: string
        /** @description The ID of the theme. */
        id?: string
      }[]
      /** @description A map of source MIME type to possible targets for all supported exports. */
      exportFormats?: {
        [key: string]: string[]
      }
      /** @description The currently supported folder colors as RGB hex strings. */
      folderColorPalette?: string[]
      /** @description A map of source MIME type to possible targets for all supported imports. */
      importFormats?: {
        [key: string]: string[]
      }
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#about".
       * @default drive#about
       */
      kind: string
      /** @description A map of maximum import sizes by MIME type, in bytes. */
      maxImportSizes?: {
        [key: string]: string
      }
      /**
       * Format: int64
       * @description The maximum upload size in bytes.
       */
      maxUploadSize?: string
      /** @description The user's storage quota limits and usage. All fields are measured in bytes. */
      storageQuota?: {
        /**
         * Format: int64
         * @description The usage limit, if applicable. This will not be present if the user has unlimited storage.
         */
        limit?: string
        /**
         * Format: int64
         * @description The total usage across all services.
         */
        usage?: string
        /**
         * Format: int64
         * @description The usage by all files in Google Drive.
         */
        usageInDrive?: string
        /**
         * Format: int64
         * @description The usage by trashed files in Google Drive.
         */
        usageInDriveTrash?: string
      }
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
    /** @description A change to a file or shared drive. */
    Change: {
      /** @description The type of the change. Possible values are file and drive. */
      changeType?: string
      /** @description The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. */
      drive?: components['schemas']['Drive']
      /** @description The ID of the shared drive associated with this change. */
      driveId?: string
      /** @description The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. */
      file?: components['schemas']['File']
      /** @description The ID of the file which has changed. */
      fileId?: string
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#change".
       * @default drive#change
       */
      kind: string
      /** @description Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
      removed?: boolean
      /** @description Deprecated - use drive instead. */
      teamDrive?: components['schemas']['TeamDrive']
      /** @description Deprecated - use driveId instead. */
      teamDriveId?: string
      /**
       * Format: date-time
       * @description The time of this change (RFC 3339 date-time).
       */
      time?: string
      /** @description Deprecated - use changeType instead. */
      type?: string
    }
    /** @description A list of changes for a user. */
    ChangeList: {
      /** @description The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      changes?: components['schemas']['Change'][]
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#changeList".
       * @default drive#changeList
       */
      kind: string
      /** @description The starting page token for future changes. This will be present only if the end of the current changes list has been reached. */
      newStartPageToken?: string
      /** @description The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
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
    /** @description A comment on a file. */
    Comment: {
      /** @description A region of the document represented as a JSON string. For details on defining anchor properties, refer to  Add comments and replies. */
      anchor?: string
      /** @description The author of the comment. The author's email address and permission ID will not be populated. */
      author?: components['schemas']['User']
      /** @description The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed. */
      content?: string
      /**
       * Format: date-time
       * @description The time at which the comment was created (RFC 3339 date-time).
       */
      createdTime?: string
      /** @description Whether the comment has been deleted. A deleted comment has no content. */
      deleted?: boolean
      /** @description The content of the comment with HTML formatting. */
      htmlContent?: string
      /** @description The ID of the comment. */
      id?: string
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#comment".
       * @default drive#comment
       */
      kind: string
      /**
       * Format: date-time
       * @description The last time the comment or any of its replies was modified (RFC 3339 date-time).
       */
      modifiedTime?: string
      /** @description The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment. */
      quotedFileContent?: {
        /** @description The MIME type of the quoted content. */
        mimeType?: string
        /** @description The quoted content itself. This is interpreted as plain text if set through the API. */
        value?: string
      }
      /** @description The full list of replies to the comment in chronological order. */
      replies?: components['schemas']['Reply'][]
      /** @description Whether the comment has been resolved by one of its replies. */
      resolved?: boolean
    }
    /** @description A list of comments on a file. */
    CommentList: {
      /** @description The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      comments?: components['schemas']['Comment'][]
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#commentList".
       * @default drive#commentList
       */
      kind: string
      /** @description The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
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
      restrictionTime?: string
      /** @description The type of the content restriction. Currently the only possible value is globalContentRestriction. */
      type?: string
    }
    /** @description Representation of a shared drive. */
    Drive: {
      /** @description An image file and cropping parameters from which a background image for this shared drive is set. This is a write-only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set. */
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
      /** @description The color of this shared drive as an RGB hex string. It can only be set on drive.drives.update requests that don't set themeId. */
      colorRgb?: string
      /**
       * Format: date-time
       * @description The time at which the shared drive was created (RFC 3339 date-time).
       */
      createdTime?: string
      /** @description Whether the shared drive is hidden from default view. */
      hidden?: boolean
      /** @description The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
      id?: string
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
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
      /** @description The ID of the theme from which the background image and color are set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
      themeId?: string
    }
    /** @description A list of shared drives. */
    DriveList: {
      /** @description The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      drives?: components['schemas']['Drive'][]
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#driveList".
       * @default drive#driveList
       */
      kind: string
      /** @description The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
    }
    /** @description The metadata for a file. */
    File: {
      /** @description A collection of arbitrary key-value pairs that are private to the requesting app.
       *     Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with an OAuth 2 client ID. You cannot use an API key to retrieve private properties. */
      appProperties?: {
        [key: string]: string
      }
      /** @description Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user can take. */
      capabilities?: {
        /** @description Whether the current user is the pending owner of the file. Not populated for shared drive files. */
        canAcceptOwnership?: boolean
        /** @description Whether the current user can add children to this folder. This is always false when the item isn't a folder. */
        canAddChildren?: boolean
        /** @description Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item isn't a folder. Only populated for items in shared drives. */
        canAddFolderFromAnotherDrive?: boolean
        /** @description Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. */
        canAddMyDriveParent?: boolean
        /** @description Whether the current user can change the copyRequiresWriterPermission restriction of this file. */
        canChangeCopyRequiresWriterPermission?: boolean
        /** @description Whether the current user can change the securityUpdateEnabled field on link share metadata. */
        canChangeSecurityUpdateEnabled?: boolean
        /** @description Deprecated */
        canChangeViewersCanCopyContent?: boolean
        /** @description Whether the current user can comment on this file. */
        canComment?: boolean
        /** @description Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it's not a folder. */
        canCopy?: boolean
        /** @description Whether the current user can delete this file. */
        canDelete?: boolean
        /** @description Whether the current user can delete children of this folder. This is false when the item isn't a folder. Only populated for items in shared drives. */
        canDeleteChildren?: boolean
        /** @description Whether the current user can download this file. */
        canDownload?: boolean
        /** @description Whether the current user can edit this file. Other factors might limit the type of changes a user can make to a file. For example, see canChangeCopyRequiresWriterPermission or canModifyContent. */
        canEdit?: boolean
        /** @description Whether the current user can list the children of this folder. This is always false when the item isn't a folder. */
        canListChildren?: boolean
        /** @description Whether the current user can modify the content of this file. */
        canModifyContent?: boolean
        /** @description Whether the current user can modify restrictions on content of this file. */
        canModifyContentRestriction?: boolean
        /** @description Whether the current user can modify the labels on this file. */
        canModifyLabels?: boolean
        /** @description Whether the current user can move children of this folder outside of the shared drive. This is false when the item isn't a folder. Only populated for items in shared drives. */
        canMoveChildrenOutOfDrive?: boolean
        /** @description Deprecated - use canMoveChildrenOutOfDrive instead. */
        canMoveChildrenOutOfTeamDrive?: boolean
        /** @description Whether the current user can move children of this folder within this shared drive or My Drive. This is false when the item isn't a folder. Note that a request to move the child might still fail depending on the current user's access to the child and to the destination folder. */
        canMoveChildrenWithinDrive?: boolean
        /** @description Deprecated - use canMoveChildrenWithinDrive instead. */
        canMoveChildrenWithinTeamDrive?: boolean
        /** @description Deprecated - use canMoveItemOutOfDrive instead. */
        canMoveItemIntoTeamDrive?: boolean
        /** @description Whether the current user can move this item outside of this shared drive or My Drive by changing its parent. Note that a request to change the parent of the item might still fail depending on the new parent that's being added. */
        canMoveItemOutOfDrive?: boolean
        /** @description Deprecated - use canMoveItemOutOfDrive instead. */
        canMoveItemOutOfTeamDrive?: boolean
        /** @description Whether the current user can move this item within this shared drive or My Drive. Note that a request to change the parent of the item might still fail depending on the new parent that's being added and the parent that's being removed. */
        canMoveItemWithinDrive?: boolean
        /** @description Deprecated - use canMoveItemWithinDrive instead. */
        canMoveItemWithinTeamDrive?: boolean
        /** @description Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead. */
        canMoveTeamDriveItem?: boolean
        /** @description Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. */
        canReadDrive?: boolean
        /** @description Whether the current user can read the labels on this file. */
        canReadLabels?: boolean
        /** @description Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it's not a folder, can be read. */
        canReadRevisions?: boolean
        /** @description Deprecated - use canReadDrive instead. */
        canReadTeamDrive?: boolean
        /** @description Whether the current user can remove children from this folder. This is always false when the item isn't a folder. For a folder in a shared drive, use canDeleteChildren or canTrashChildren instead. */
        canRemoveChildren?: boolean
        /** @description Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. */
        canRemoveMyDriveParent?: boolean
        /** @description Whether the current user can rename this file. */
        canRename?: boolean
        /** @description Whether the current user can modify the sharing settings for this file. */
        canShare?: boolean
        /** @description Whether the current user can move this file to trash. */
        canTrash?: boolean
        /** @description Whether the current user can trash children of this folder. This is false when the item isn't a folder. Only populated for items in shared drives. */
        canTrashChildren?: boolean
        /** @description Whether the current user can restore this file from trash. */
        canUntrash?: boolean
      }
      /** @description Additional information about the content of the file. These fields are never populated in responses. */
      contentHints?: {
        /** @description Text to be indexed for the file to improve fullText queries. This is limited to 128 KB in length and might contain HTML elements. For more information, see Manage file metadata. */
        indexableText?: string
        /** @description A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail. */
        thumbnail?: {
          /**
           * Format: byte
           * @description The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).
           */
          image?: string
          /** @description The MIME type of the thumbnail. */
          mimeType?: string
        }
      }
      /** @description Restrictions for accessing the content of the file. Only populated if such a restriction exists. */
      contentRestrictions?: components['schemas']['ContentRestriction'][]
      /** @description Whether the options to copy, print, or download this file, should be disabled for readers and commenters. */
      copyRequiresWriterPermission?: boolean
      /**
       * Format: date-time
       * @description The time at which the file was created (RFC 3339 date-time).
       */
      createdTime?: string
      /** @description A short description of the file. */
      description?: string
      /** @description ID of the shared drive the file resides in. Only populated for items in shared drives. */
      driveId?: string
      /** @description Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder. */
      explicitlyTrashed?: boolean
      /** @description Links for exporting Docs Editors files to specific formats. */
      readonly exportLinks?: {
        [key: string]: string
      }
      /** @description The final component of fullFileExtension. This is only available for files with binary content in Google Drive. */
      fileExtension?: string
      /** @description The color for a folder or shortcut to a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
       *     If an unsupported color is specified, the closest color in the palette will be used instead. */
      folderColorRgb?: string
      /** @description The full file extension extracted from the name field. Can contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.
       *     This is automatically updated when the name field changes, however it's not cleared if the new name does not contain a valid extension. */
      fullFileExtension?: string
      /** @description Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
      hasAugmentedPermissions?: boolean
      /** @description Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
      hasThumbnail?: boolean
      /** @description The ID of the file's head revision. This is only available for files with binary content in Google Drive. */
      headRevisionId?: string
      /** @description A static, unauthenticated link to the file's icon. */
      iconLink?: string
      /** @description The ID of the file. */
      id?: string
      /** @description Additional metadata about image media, if available. */
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
         * @description The number of clockwise 90-degree rotations applied from the image's original orientation.
         */
        rotation?: number
        /** @description The type of sensor used to create the photo. */
        sensor?: string
        /**
         * Format: int32
         * @description The distance to the subject of the photo, in meters.
         */
        subjectDistance?: number
        /** @description The date and time the photo was taken (EXIF DateTime). */
        time?: string
        /** @description The white balance mode used to create the photo. */
        whiteBalance?: string
        /**
         * Format: int32
         * @description The width of the image in pixels.
         */
        width?: number
      }
      /** @description Whether the requesting app created or opened the file. */
      isAppAuthorized?: boolean
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
       * @default drive#file
       */
      kind: string
      /** @description An overview of the labels on the file. */
      labelInfo?: {
        /** @description The set of labels on the file as requested by the label IDs in the includeLabels parameter. By default, no labels are returned. */
        labels?: components['schemas']['Label'][]
      }
      /** @description The last user to modify the file. */
      lastModifyingUser?: components['schemas']['User']
      /** @description Contains details about the link URLs that clients are using to refer to this item. */
      linkShareMetadata?: {
        /** @description Whether the file is eligible for security update. */
        securityUpdateEligible?: boolean
        /** @description Whether the security update is enabled for this file. */
        securityUpdateEnabled?: boolean
      }
      /** @description The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive. */
      md5Checksum?: string
      /** @description The MIME type of the file.
       *     Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
       *     If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource. */
      mimeType?: string
      /** @description Whether this user has modified the file. */
      modifiedByMe?: boolean
      /**
       * Format: date-time
       * @description The last time the user modified the file (RFC 3339 date-time).
       */
      modifiedByMeTime?: string
      /**
       * Format: date-time
       * @description The last time anyone modified the file (RFC 3339 date-time).
       *     Note that setting modifiedTime will also update modifiedByMeTime for the user.
       */
      modifiedTime?: string
      /** @description The name of the file. This isn't necessarily unique within a folder. Note that for immutable items such as the top-level folders of shared drives, My Drive root folder, and Application Data folder the name is constant. */
      name?: string
      /** @description The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive. */
      originalFilename?: string
      /** @description Whether the user owns the file. Not populated for items in shared drives. */
      ownedByMe?: boolean
      /** @description The owner of this file. Only certain legacy files might have more than one owner. This field isn't populated for items in shared drives. */
      owners?: components['schemas']['User'][]
      /** @description The IDs of the parent folders that contain the file.
       *     If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list. */
      parents?: string[]
      /** @description List of permission IDs for users with access to this file. */
      permissionIds?: string[]
      /** @description The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives. */
      permissions?: components['schemas']['Permission'][]
      /** @description A collection of arbitrary key-value pairs that are visible to all apps.
       *     Entries with null values are cleared in update and copy requests. */
      properties?: {
        [key: string]: string
      }
      /**
       * Format: int64
       * @description The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
       */
      quotaBytesUsed?: string
      /** @description A key needed to access the item via a shared link. */
      resourceKey?: string
      /** @description The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files. */
      sha1Checksum?: string
      /** @description The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files. */
      sha256Checksum?: string
      /** @description Whether the file has been shared. Not populated for items in shared drives. */
      shared?: boolean
      /**
       * Format: date-time
       * @description The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
       */
      sharedWithMeTime?: string
      /** @description The user who shared the file with the requesting user, if applicable. */
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
      /**
       * Format: int64
       * @description The size of the file's content in bytes. This field is populated for files with binary content stored in Google Drive and for Docs Editors files; it's not populated for shortcuts or folders.
       */
      size?: string
      /** @description The list of spaces that contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'. */
      spaces?: string[]
      /** @description Whether the user has starred the file. */
      starred?: boolean
      /** @description Deprecated - use driveId instead. */
      teamDriveId?: string
      /** @description A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be fetched using a credentialed request. */
      thumbnailLink?: string
      /**
       * Format: int64
       * @description The thumbnail version for use in thumbnail cache invalidation.
       */
      thumbnailVersion?: string
      /** @description Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner can trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file. */
      trashed?: boolean
      /**
       * Format: date-time
       * @description The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
       */
      trashedTime?: string
      /** @description If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives. */
      trashingUser?: components['schemas']['User']
      /**
       * Format: int64
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       */
      version?: string
      /** @description Additional metadata about video media. This might not be available immediately upon upload. */
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
      /** @description Whether this user has viewed the file. */
      viewedByMe?: boolean
      /**
       * Format: date-time
       * @description The last time the user viewed the file (RFC 3339 date-time).
       */
      viewedByMeTime?: string
      /** @description Deprecated - use copyRequiresWriterPermission instead. */
      viewersCanCopyContent?: boolean
      /** @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive. */
      webContentLink?: string
      /** @description A link for opening the file in a relevant Google editor or viewer in a browser. */
      webViewLink?: string
      /** @description Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives. */
      writersCanShare?: boolean
    }
    /** @description A list of files. */
    FileList: {
      /** @description The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      files?: components['schemas']['File'][]
      /** @description Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "user" or "drive". */
      incompleteSearch?: boolean
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#fileList".
       * @default drive#fileList
       */
      kind: string
      /** @description The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
    }
    /** @description A list of generated file IDs which can be provided in create requests. */
    GeneratedIds: {
      /** @description The IDs generated for the requesting user in the specified space. */
      ids?: string[]
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#generatedIds".
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
      /** @description The ID of the Field to be modified. */
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
      /**
       * @description This is always drive#labelList
       * @default drive#labelList
       */
      kind: string
      /** @description The list of labels. */
      labels?: components['schemas']['Label'][]
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
    /** @description A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. */
    Permission: {
      /** @description Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone. */
      allowFileDiscovery?: boolean
      /** @description Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
      deleted?: boolean
      /** @description The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:
       *     - user - User's full name, as defined for their Google Account, such as "Joe Smith."
       *     - group - Name of the Google Group, such as "The Company Administrators."
       *     - domain - String domain name, such as "your-company.com."
       *     - anyone - No displayName is present. */
      displayName?: string
      /** @description The domain to which this permission refers. The following options are currently allowed:
       *     - The entire domain, such as "your-company.com."
       *     - A target audience, such as "ID.audience.googledomains.com." */
      domain?: string
      /** @description The email address of the user or group to which this permission refers. */
      emailAddress?: string
      /**
       * Format: date-time
       * @description The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:
       *     - They cannot be set on shared drive items.
       *     - They can only be set on user and group permissions.
       *     - The time must be in the future.
       *     - The time cannot be more than one year in the future.
       */
      expirationTime?: string
      /** @description The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId. IDs should be treated as opaque values. */
      id?: string
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#permission".
       * @default drive#permission
       */
      kind: string
      /** @description Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that aren't in a shared drive. */
      pendingOwner?: boolean
      /** @description Details of whether the permissions on this shared drive item are inherited or are directly on this item. This is an output-only field that's present only for shared drive items. */
      readonly permissionDetails?: {
        /** @description Whether this permission is inherited. This field is always populated. This is an output-only field. */
        inherited?: boolean
        /** @description The ID of the item from which this permission is inherited. This is an output-only field. */
        inheritedFrom?: string
        /** @description The permission type for this user. While new values may be added in future, the following are currently allowed:
         *     - file
         *     - member */
        permissionType?: string
        /** @description The primary role for this user. While new values may be added in the future, the following are currently allowed:
         *     - organizer
         *     - fileOrganizer
         *     - writer
         *     - commenter
         *     - reader */
        role?: string
      }[]
      /** @description A link to the user's profile photo, if available. */
      photoLink?: string
      /** @description The role granted by this permission. While new values may be supported in the future, the following are currently allowed:
       *     - owner
       *     - organizer
       *     - fileOrganizer
       *     - writer
       *     - commenter
       *     - reader */
      role?: string
      /** @description Deprecated - use permissionDetails instead. */
      readonly teamDrivePermissionDetails?: {
        /** @description Deprecated - use permissionDetails/inherited instead. */
        inherited?: boolean
        /** @description Deprecated - use permissionDetails/inheritedFrom instead. */
        inheritedFrom?: string
        /** @description Deprecated - use permissionDetails/role instead. */
        role?: string
        /** @description Deprecated - use permissionDetails/permissionType instead. */
        teamDrivePermissionType?: string
      }[]
      /** @description The type of the grantee. Valid values are:
       *     - user
       *     - group
       *     - domain
       *     - anyone  When creating a permission, if type is user or group, you must provide an emailAddress for the user or group. When type is domain, you must provide a domain. There isn't extra information required for the anyone type. */
      type?: string
      /** @description Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value. */
      view?: string
    }
    /** @description A list of permissions for a file. */
    PermissionList: {
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#permissionList".
       * @default drive#permissionList
       */
      kind: string
      /** @description The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      permissions?: components['schemas']['Permission'][]
    }
    /** @description A reply to a comment on a file. */
    Reply: {
      /** @description The action the reply performed to the parent comment. Valid values are:
       *     - resolve
       *     - reopen */
      action?: string
      /** @description The author of the reply. The author's email address and permission ID will not be populated. */
      author?: components['schemas']['User']
      /** @description The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified. */
      content?: string
      /**
       * Format: date-time
       * @description The time at which the reply was created (RFC 3339 date-time).
       */
      createdTime?: string
      /** @description Whether the reply has been deleted. A deleted reply has no content. */
      deleted?: boolean
      /** @description The content of the reply with HTML formatting. */
      htmlContent?: string
      /** @description The ID of the reply. */
      id?: string
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#reply".
       * @default drive#reply
       */
      kind: string
      /**
       * Format: date-time
       * @description The last time the reply was modified (RFC 3339 date-time).
       */
      modifiedTime?: string
    }
    /** @description A list of replies to a comment on a file. */
    ReplyList: {
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#replyList".
       * @default drive#replyList
       */
      kind: string
      /** @description The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      replies?: components['schemas']['Reply'][]
    }
    /** @description The metadata for a revision to a file. */
    Revision: {
      /** @description Links for exporting Docs Editors files to specific formats. */
      exportLinks?: {
        [key: string]: string
      }
      /** @description The ID of the revision. */
      id?: string
      /** @description Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
       *     This field is only applicable to files with binary content in Drive. */
      keepForever?: boolean
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#revision".
       * @default drive#revision
       */
      kind: string
      /** @description The last user to modify this revision. */
      lastModifyingUser?: components['schemas']['User']
      /** @description The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive. */
      md5Checksum?: string
      /** @description The MIME type of the revision. */
      mimeType?: string
      /**
       * Format: date-time
       * @description The last time the revision was modified (RFC 3339 date-time).
       */
      modifiedTime?: string
      /** @description The original filename used to create this revision. This is only applicable to files with binary content in Drive. */
      originalFilename?: string
      /** @description Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files. */
      publishAuto?: boolean
      /** @description Whether this revision is published. This is only applicable to Docs Editors files. */
      published?: boolean
      /** @description A link to the published revision. This is only populated for Google Sites files. */
      publishedLink?: string
      /** @description Whether this revision is published outside the domain. This is only applicable to Docs Editors files. */
      publishedOutsideDomain?: boolean
      /**
       * Format: int64
       * @description The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.
       */
      size?: string
    }
    /** @description A list of revisions of a file. */
    RevisionList: {
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#revisionList".
       * @default drive#revisionList
       */
      kind: string
      /** @description The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      revisions?: components['schemas']['Revision'][]
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
      createdTime?: string
      /** @description The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
      id?: string
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#teamDrive".
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
      /** @description The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
      themeId?: string
    }
    /** @description A list of Team Drives. */
    TeamDriveList: {
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#teamDriveList".
       * @default drive#teamDriveList
       */
      kind: string
      /** @description The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
      nextPageToken?: string
      /** @description The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
      teamDrives?: components['schemas']['TeamDrive'][]
    }
    /** @description Information about a Drive user. */
    User: {
      /** @description A plain text displayable name for this user. */
      displayName?: string
      /** @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. */
      emailAddress?: string
      /**
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
       * @default drive#user
       */
      kind: string
      /** @description Whether this user is the requesting user. */
      me?: boolean
      /** @description The user's ID as visible in Permission resources. */
      permissionId?: string
      /** @description A link to the user's profile photo, if available. */
      photoLink?: string
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
  'drive.changes.list': {
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
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. */
        pageToken: string
        /** @description The shared drive from which changes are returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
        driveId?: string
        /** @description Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
        includeCorpusRemovals?: boolean
        /** @description Whether both My Drive and shared drive items should be included in results. */
        includeItemsFromAllDrives?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
        includeRemoved?: boolean
        /** @description Deprecated use includeItemsFromAllDrives instead. */
        includeTeamDriveItems?: boolean
        /** @description The maximum number of changes to return per page. */
        pageSize?: number
        /** @description Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. */
        restrictToMyDrive?: boolean
        /** @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. */
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
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. */
        pageToken: string
        /** @description The shared drive from which changes are returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
        driveId?: string
        /** @description Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
        includeCorpusRemovals?: boolean
        /** @description Whether both My Drive and shared drive items should be included in results. */
        includeItemsFromAllDrives?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
        includeRemoved?: boolean
        /** @description Deprecated use includeItemsFromAllDrives instead. */
        includeTeamDriveItems?: boolean
        /** @description The maximum number of changes to return per page. */
        pageSize?: number
        /** @description Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. */
        restrictToMyDrive?: boolean
        /** @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. */
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
        pageSize?: number
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
  'drive.drives.create': {
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
        /** @description Issue the request as a domain administrator. If set to true, then the requester is granted access if they're an administrator of the domain to which the shared drive belongs. */
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
        /** @description The source of files to list. Deprecated: use 'corpora' instead. */
        corpus?: 'domain' | 'user'
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
        /** @description A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored. */
        orderBy?: string
        /** @description The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. */
        pageSize?: number
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
        pageToken?: string
        /** @description A query for filtering the file results. See the "Search for Files" guide for supported syntax. */
        q?: string
        /** @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. */
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
  'drive.files.create': {
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
        /** @description Deprecated. Creating files in multiple folders is no longer supported. */
        enforceSingleParent?: boolean
        /** @description Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. */
        ignoreDefaultVisibility?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
        keepRevisionForever?: boolean
        /** @description A language hint for OCR processing during image import (ISO 639-1 code). */
        ocrLanguage?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Whether to use the uploaded content as indexable text. */
        useContentAsIndexableText?: boolean
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
        /** @description The number of IDs to return. */
        count?: number
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
        /** @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media. */
        acknowledgeAbuse?: boolean
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
        /** @description A comma-separated list of parent IDs to add. */
        addParents?: string
        /** @description Deprecated. Adding files to multiple folders is no longer supported. Use shortcuts instead. */
        enforceSingleParent?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
        keepRevisionForever?: boolean
        /** @description A language hint for OCR processing during image import (ISO 639-1 code). */
        ocrLanguage?: string
        /** @description A comma-separated list of parent IDs to remove. */
        removeParents?: string
        /** @description Whether the requesting application supports both My Drives and shared drives. */
        supportsAllDrives?: boolean
        /** @description Deprecated use supportsAllDrives instead. */
        supportsTeamDrives?: boolean
        /** @description Whether to use the uploaded content as indexable text. */
        useContentAsIndexableText?: boolean
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
        /** @description Whether to include deleted comments. Deleted comments will not include their original content. */
        includeDeleted?: boolean
        /** @description The maximum number of comments to return per page. */
        pageSize?: number
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
        pageToken?: string
        /** @description The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time). */
        startModifiedTime?: string
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
  'drive.comments.create': {
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
        /** @description Whether to return deleted comments. Deleted comments will not include their original content. */
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
        /** @description Whether to include deleted replies. Deleted replies will not include their original content. */
        includeDeleted?: boolean
        /** @description The maximum number of replies to return per page. */
        pageSize?: number
        /** @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
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
          'application/json': components['schemas']['ReplyList']
        }
      }
    }
  }
  'drive.replies.create': {
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
        'application/json': components['schemas']['Reply']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Reply']
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
        /** @description Whether to return deleted replies. Deleted replies will not include their original content. */
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
          'application/json': components['schemas']['Reply']
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
        'application/json': components['schemas']['Reply']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Reply']
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
        /** @description Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead. */
        enforceSingleParent?: boolean
        /** @description Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. */
        ignoreDefaultVisibility?: boolean
        /** @description A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
        includeLabels?: string
        /** @description Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
        includePermissionsForView?: string
        /** @description Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
        keepRevisionForever?: boolean
        /** @description A language hint for OCR processing during image import (ISO 639-1 code). */
        ocrLanguage?: string
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
        pageSize?: number
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
        /** @description The ID of the file or shared drive. */
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
  'drive.permissions.create': {
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
        /** @description A plain text custom message to include in the notification email. */
        emailMessage?: string
        /** @description Deprecated. See moveToNewOwnersRoot for details. */
        enforceSingleParent?: boolean
        /** @description This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to true, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to false, parents are not changed. */
        moveToNewOwnersRoot?: boolean
        /** @description Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers. */
        sendNotificationEmail?: boolean
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
        /** @description The ID of the file or shared drive. */
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
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the permission. */
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
        /** @description The ID of the file or shared drive. */
        fileId: string
        /** @description The ID of the permission. */
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
        /** @description The ID of the file or shared drive. */
        fileId: string
        /** @description The ID of the permission. */
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
        /** @description The maximum number of revisions to return per page. */
        pageSize?: number
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
        /** @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media. */
        acknowledgeAbuse?: boolean
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
        /** @description The ID of the file. */
        fileId: string
        /** @description The ID of the revision. */
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
        /** @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media. */
        acknowledgeAbuse?: boolean
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
        /** @description The ID of the file. */
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
        pageSize?: number
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
  'drive.teamdrives.create': {
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
}

export interface oasTypes {
  components: components
  external: external
  operations: operations
  paths: paths
  webhooks: webhooks
}

export default oasTypes
