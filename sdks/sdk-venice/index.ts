import type {OpenAPISpec, SdkDefinition, SDKTypes} from '@opensdks/core'
import type {ClientOptions} from '@opensdks/core/createClient'
import type {
  components,
  external,
  operations,
  paths,
  webhooks,
} from './venice.oas'
import {default as veniceOas} from './venice.oas.json'

// Does this work with tree-shaking?
export {veniceOas as veniceOas}

export interface veniceTypes {
  components: components
  external: external
  operations: operations
  paths: paths
  webhooks: webhooks
}

export type VeniceSDKTypes = SDKTypes<
  veniceTypes,
  ClientOptions & {
    headers: {
      'x-apikey'?: string
      'x-resource-id'?: string
      /** Bearer token */
      Authorization?: string
    }
  }
>

export const veniceSdkDef = {
  types: {} as VeniceSDKTypes,
  oas: veniceOas as {} as OpenAPISpec,
} satisfies SdkDefinition<VeniceSDKTypes>

export default veniceSdkDef

// codegen:start {preset: barrel, include: "./{*.{ts,tsx},*/index.{ts,tsx}}", exclude: "*.{spec,test,fixture,d}.{ts,tsx}"}

// codegen:end
