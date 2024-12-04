import type {ClientOptions, OpenIntProxyLinkOptions, SdkDefinition, SDKTypes} from '@opensdks/runtime'
import {initSDK} from '@opensdks/runtime'
import type openintTypes from '../openint.oas.types.js'
import {default as openintOasMeta} from './openint.oas.meta.js'

export type OpenIntSDKTypes = SDKTypes<
  openintTypes,
  Omit<ClientOptions, 'headers'> & {
    headers: {
      /** For passthrough and resource specific api */
      'x-resource-id'?: string
      /** Alternative ways to pass the resource id, works in case there is a single connector */
      'x-resource-connector-name'?: string
      'x-resource-connector-config-id'?: string
      /**
       * Implied (and thus noop) in end user authentication.
       * Typically used together with x-connector-name for admin level auth
       */
      'x-resource-end-user-id'?: string
      [k: string]: string | undefined
    }
  } & OpenIntProxyLinkOptions
>

export const openintSdkDef = {
  types: {} as OpenIntSDKTypes,
  oasMeta: openintOasMeta,
} satisfies SdkDefinition<OpenIntSDKTypes>

export function initOpenIntSDK(opts: OpenIntSDKTypes['options']) {
  return initSDK(openintSdkDef, {
    ...opts,
    // new way of passing auth options
    auth: {
      openInt: {
        token: opts.token,
        apiKey: opts.apiKey,
        resourceId: opts.resourceId,
        endUserId: opts.endUserId,
        connectorName: opts.connectorName,
      }
    }
  })
}

export type OpenIntSDK = ReturnType<typeof initOpenIntSDK>

export default initOpenIntSDK
