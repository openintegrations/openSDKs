import {initSDK} from '@opensdks/runtime'
import {veniceSdkDef} from './index.js'

const venice = initSDK(veniceSdkDef, {headers: {}})

test('healthcheck', async () => {
  expect(await venice.GET('/health').then((r) => r.data)).toBeTruthy()
})
