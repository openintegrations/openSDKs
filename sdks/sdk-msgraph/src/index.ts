/**
 * This file was generated by @opensdks/cli, do not edit manually.
 * For bugs & feature requests, please open an issue on the [GitHub](https://github.com/tonyxiao/openSDKs)
 */

import type {ClientOptions, SdkDefinition, SDKTypes} from '@opensdks/runtime'
import {initSDK} from '@opensdks/runtime'
import type {oasTypes} from '../msgraph.oas.types.js'
import {oasMeta} from './msgraph.oas.meta.js'

export type MsgraphSDKTypes = SDKTypes<oasTypes, ClientOptions>

export const msgraphSdkDef = {
  types: {} as MsgraphSDKTypes,
  oasMeta,
} satisfies SdkDefinition<MsgraphSDKTypes>

export function initMsgraphSDK(opts: MsgraphSDKTypes['options']) {
  return initSDK(msgraphSdkDef, opts)
}

export type MsgraphSDK = ReturnType<typeof initMsgraphSDK>

export default initMsgraphSDK
