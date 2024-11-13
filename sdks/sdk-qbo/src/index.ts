import type {ClientOptions, SdkDefinition, SDKTypes} from '@opensdks/runtime'
import type {default as qboOasTypes} from '../qbo.oas.types.js'
import {default as qboOasMeta} from './qbo.oas.meta.js'

export {qboOasTypes}
type components = qboOasTypes['components']

export type QBOSDKTypes = SDKTypes<
  qboOasTypes,
  ClientOptions & {
    realmId: string
    accessToken: string
    envName: 'sandbox' | 'production'
  }
>

/**
 * Quickbooks Online SDK.
 * TODO: handle oauth token refresh and working with links to do so.
 */
export const qboSdkDef = {
  types: {} as QBOSDKTypes,
  oasMeta: qboOasMeta,
  createClient: (ctx, {realmId, accessToken, envName, ...options}) => {
    const client = ctx.createClient({
      ...options,
      baseUrl: qboOasMeta.servers
        .find((s) => s.description === envName)
        ?.url?.replace('{realmId}', realmId),
      // TODO: Should probably extract this server name substitution into a generic function for interacting with oas
      headers: {
        authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
        ...options.headers,
      },
    })
    function query(
      query: string,
    ): Promise<components['schemas']['QueryResponse']> {
      return client
        .GET('/query', {params: {query: {query}}})
        .then((r) => r.data.QueryResponse)
    }

    const extension = {
      query,
      async count(entity: string) {
        return query(`SELECT count(*) FROM ${entity}`).then(
          (r) => r.totalCount ?? -1,
        )
      },
      async *getAll<T extends components['schemas']['EntityName']>(
        entityName: T,
        /** Range is inclusive, ISODateTime */
        params: {updatedSince?: string} = {},
      ) {
        let startPosition = 1 // QBO is 1 index based
        // Fetch 100 transactions only on the first request to optimize for incremental
        // sync scenarios
        let maxResults = 100
        while (true) {
          const res = await query(`SELECT * FROM ${entityName} ${
            params.updatedSince
              ? `WHERE MetaData.LastUpdatedTime >='${params.updatedSince}'`
              : ''
          } ORDERBY MetaData.LastUpdatedTime DESC
         STARTPOSITION ${startPosition} MAXRESULTS ${maxResults}`)

          const entities = res[entityName] ?? []
          yield {
            entities: entities as Exclude<typeof entities, never[]>,
            startPosition,
            maxResults,
          }
          // note: for some reason CompanyInfo keeps returning 1 result even where we used a greater start position.
          // Adding entities.length < maxResults check to break out of loop
          if (entities.length === 0 || entities.length < maxResults) {
            break
          }
          startPosition += entities.length
          maxResults = 500 // Then fetch 500 fo efficiency
        }
      },
    }
    return {...client, ...extension} as typeof client & typeof extension
  },
} satisfies SdkDefinition<QBOSDKTypes>

export default qboSdkDef
