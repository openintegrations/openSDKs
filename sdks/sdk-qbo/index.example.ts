import {initSDK} from '@opensdks/core'
import {qboSdkDef} from './index'

const realmId = process.env['QBO_REALM_ID']!

const qbo = initSDK(qboSdkDef, {
  realmId: '12345',
  accessToken: process.env['QBO_ACCESS_TOKEN']!,
})

void qbo.GET('/companyinfo/{id}', {params: {path: {id: realmId}}}).then((r) => {
  console.log(r.data)
})

void qbo.GET('/account/{id}', {params: {path: {id: '33'}}})

void qbo.query('SELECT * FROM Account')

// qbo.GET('/preferences').then((r) => {
//   console.log(r.data)
// })