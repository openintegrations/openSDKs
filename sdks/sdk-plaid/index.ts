import type {OpenAPISpec, SdkDefinition, SDKTypes} from '@opensdks/core'
import type {ClientOptions} from '@opensdks/core/createClient'
import type {
  components,
  external,
  operations,
  paths,
  webhooks,
} from './plaid.oas'
import {default as plaidOas} from './plaid.oas.json'

// Does this work with tree-shaking?
export {plaidOas as plaidOas}

export interface plaidTypes {
  components: components
  external: external
  operations: operations
  paths: paths
  webhooks: webhooks
}

export type PlaidSDKTypes = SDKTypes<
  plaidTypes,
  ClientOptions & {
    headers: {
      'PLAID-CLIENT-ID': string
      'PLAID-SECRET': string
    }
  }
>

export const plaidSdkDef = {
  types: {} as PlaidSDKTypes,
  oas: plaidOas as {} as OpenAPISpec,
} satisfies SdkDefinition<PlaidSDKTypes>

export default plaidSdkDef

// codegen:start {preset: barrel, include: "./{*.{ts,tsx},*/index.{ts,tsx}}", exclude: "*.{spec,test,fixture,d}.{ts,tsx}"}

// codegen:end
