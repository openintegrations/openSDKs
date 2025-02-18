/* eslint-disable jest/no-standalone-expect */
import {initSDK} from '@opensdks/runtime'
import qboSdkDef from './index.js'

const realmId = process.env['QBO_REALM_ID']!
/** TODO: Setup qbo access + refresh token on CI  */
const accessToken = process.env['QBO_ACCESS_TOKEN']!
const qboEnv = process.env['QBO_ENV']! as 'sandbox' | 'production'
const maybeTest = realmId ? test : test.skip

maybeTest('get QBO company directly with access token', async () => {
  const qbo = initSDK(qboSdkDef, {
    realmId,
    envName: qboEnv,
    auth: {oauth: {accessToken}},
  })

  const res = await qbo.GET('/companyinfo/{id}', {
    params: {path: {id: realmId}},
  })

  expect(res.response.status).toEqual(200)
  expect(res.data.CompanyInfo.CompanyName).toEqual(expect.any(String))
})

const connectionId = process.env['QBO_CONNECTION_ID']!
const apiKey = process.env['OPENINT_API_KEY']!
maybeTest(
  'get QBO company via proxy with api key and resource id',
  async () => {
    const qbo = initSDK(qboSdkDef, {
      realmId,
      envName: qboEnv,
      auth: {openInt: {apiKey, connectionId}},
    })

    const res = await qbo.GET('/companyinfo/{id}', {
      params: {path: {id: realmId}},
    })

    expect(res.response.status).toEqual(200)
    expect(res.data.CompanyInfo.CompanyName).toEqual(expect.any(String))
  },
)

const connectorName = 'qbo'
const token = process.env['OPENINT_CUSTOMER_AUTH_TOKEN']!
maybeTest(
  'get QBO company via proxy with token and connector name',
  async () => {
    const qbo = initSDK(qboSdkDef, {
      realmId,
      envName: qboEnv,
      auth: {openInt: {token, connectorName}},
    })

    const res = await qbo.GET('/companyinfo/{id}', {
      params: {path: {id: realmId}},
    })

    expect(res.response.status).toEqual(200)
    expect(res.data.CompanyInfo.CompanyName).toEqual(expect.any(String))
  },
)
