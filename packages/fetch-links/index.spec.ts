import axios from 'axios'
import type {HTTPMethod} from './link.js'
import {applyLinks} from './link.js'
import {axiosLink} from './links/axiosLink.js'
import {
  authLink,
  echoLink,
  fetchLink,
  logLink,
  retryLink,
  throwLink,
} from './links/index.js'
import {modifyRequest, modifyResponse} from './modifyRequestResponse.js'

const req = new Request('https://httpbin.org/anything', {method: 'GET'})

describe('applyLinks', () => {
  test('Throw if no links provided', () => {
    expect(() => applyLinks(req, [])).toThrow('Terminating link missing')
  })

  test('Throw if missing terminating link', () => {
    expect(() => applyLinks(req, [(req, next) => next(req)])).toThrow(
      'Terminating link missing',
    )
  })
})

test('logLink', async () => {
  const lines: unknown[] = []
  const res = await applyLinks(req, [
    logLink({log: (...args) => lines.push(args)}),
    () => Promise.resolve(new Response(null, {status: 404})),
  ])
  expect(res.status).toEqual(404)
  expect(lines).toEqual([
    ['[#1 Request]', 'GET', 'https://httpbin.org/anything'],
    ['[#1 Response]', '', 404],
  ])
})

test('throwLink', async () => {
  await expect(
    applyLinks(req, [
      throwLink({maxCount: 1}),
      () => Promise.resolve(new Response(null, {status: 200})),
    ]),
  ).rejects.toThrow('Throwing #1')
})

describe('retryLink', () => {
  test('success', async () => {
    await expect(
      applyLinks(req, [
        retryLink({maxCount: 1}),
        throwLink({maxCount: 1}),
        () => Promise.resolve(new Response(null, {status: 200})),
      ]),
    ).resolves.toMatchObject({status: 200})
  })

  test('exhausted max tries', async () => {
    await expect(
      applyLinks(req, [
        retryLink({maxCount: 2}),
        throwLink({maxCount: 3}),
        () => Promise.resolve(new Response(null, {status: 200})),
      ]),
    ).rejects.toThrow('Throwing #3')
  })
})

test('modify header link', async () => {
  const randomStr = Math.random().toString(36)
  const res = await applyLinks(req, [
    (req, next) => {
      req.headers.set('x-modified-header', randomStr)
      return next(req)
    },
    fetchLink(),
  ])

  const data = await res.json<HTTPBinResponse>()
  expect(data.headers['X-Modified-Header']).toEqual(randomStr)
})

test('modify response link', async () => {
  const res = await applyLinks(req, [fetchLink()])

  expect(res.headers.get('Content-Type')).toContain('application/json')

  const res2 = await applyLinks(req, [
    async (req, next) =>
      modifyResponse(await next(req), {
        headers: {'Content-Type': 'text/plain'},
      }),
    fetchLink(),
  ])
  expect(res2.headers.get('Content-Type')).toEqual('text/plain')

  const res3 = await applyLinks(req, [
    async (req, next) =>
      modifyResponse(await next(req), {
        headers: (h) => h.delete('content-type'),
      }),
    fetchLink(),
  ])
  expect(res3.headers.get('Content-Type')).toEqual(null)
  expect(res3.headers.get('x-random')).toEqual(null)
  expect(Object.fromEntries(res3.headers.entries())['content-type']).toEqual(
    undefined,
  )
})

interface HTTPBinResponse {
  headers: Record<string, string>
  json: unknown
  data: string | null
  method: HTTPMethod
}

describe.each([
  ['fetch', fetchLink()],
  ['axios', axiosLink({axios})],
])('%s links', (_, link) => {
  test('GET anything', async () => {
    const res = await applyLinks(req, [link])
    expect(res.status).toEqual(200)
    const data = await res.json<HTTPBinResponse>()
    expect(data).toMatchObject({url: req.url})
    expect(data.headers['Content-Type']).toBeUndefined()
  })

  test('POST json body', async () => {
    const res = await applyLinks(
      modifyRequest(req, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({hello: 'world'}),
      }),
      [link],
    )
    const data = await res.json<HTTPBinResponse>()
    expect(data.method).toEqual('POST')
    expect(data.json).toEqual({hello: 'world'})
    expect(data.headers['Content-Type']).toContain('application/json')
  })

  test('POST text body', async () => {
    const res = await applyLinks(
      modifyRequest(req, {method: 'POST', body: 'hello world'}),
      [link],
    )
    const data = await res.json<HTTPBinResponse>()
    expect(data.method).toEqual('POST')
    expect(data.data).toEqual('hello world')
    expect(data.headers['Content-Type']).toContain('text/plain')
  })

  // TODO: Test error handling for both 4xx and 5xx errors
})

describe('authLink', () => {
  test('openInt user auth fails with no connectionId', () => {
    expect(() =>
      applyLinks(req, [
        authLink({openInt: {token: '123'}}, 'https://httpbin.org'),
        fetchLink(),
      ]),
    ).toThrow()
  })

  test('OpenInt user auth succeeds with connectionId', async () => {
    const res = await applyLinks(req, [
      authLink(
        {openInt: {token: '123', connectionId: '123'}},
        'https://httpbin.org',
      ),
      echoLink(),
    ])
    const json: {headers: Record<string, unknown>; url: string} =
      await res.json()
    expect(json.headers['authorization']).toEqual('Bearer 123')
    expect(json.headers['x-connection-id']).toEqual('123')
    expect(json.headers['x-connection-connector-name']).toEqual(undefined)
    expect(json.headers['x-connection-connector-config-id']).toEqual(undefined)
    expect(json.headers['x-connection-customer-id']).toEqual(undefined)
    expect(json.url).toContain('openint.dev')
  })

  test('openInt admin auth', async () => {
    const res = await applyLinks(req, [
      authLink(
        {openInt: {apiKey: '123', connectionId: '456'}},
        'https://httpbin.org',
      ),
      echoLink(),
    ])
    const json: {headers: Record<string, unknown>; url: string} =
      await res.json()
    expect(json.headers['x-apikey']).toEqual('123')
    expect(json.headers['x-connection-id']).toEqual('456')
    expect(json.headers['x-connection-connector-name']).toEqual(undefined)
    expect(json.headers['x-connection-connector-config-id']).toEqual(undefined)
    expect(json.headers['x-connection-customer-id']).toEqual(undefined)
    expect(json.url).toContain('openint.dev')
  })

  test('openInt user auth fails with token and no connectorName', () => {
    expect(() =>
      applyLinks(req, [
        authLink({openInt: {token: '123'}}, 'https://httpbin.org'),
        fetchLink(),
      ]),
    ).toThrow()
  })

  test('openInt user auth succeeds with token and connectorName', async () => {
    const res = await applyLinks(req, [
      authLink(
        {openInt: {token: '123', connectorName: 'myConnector'}},
        'https://httpbin.org',
      ),
      echoLink(),
    ])
    const json: any = await res.json()
    expect(json.headers['authorization']).toEqual('Bearer 123')
    expect(json.headers['x-connection-connector-name']).toEqual('myConnector')
  })

  test('openInt admin auth fails with apiKey and no customerId or connectorName', () => {
    expect(() =>
      applyLinks(req, [
        authLink({openInt: {apiKey: '123'}}, 'https://httpbin.org'),
        fetchLink(),
      ]),
    ).toThrow()
  })

  test('openInt admin auth succeeds with apiKey, customerId, and connectorName', async () => {
    const res = await applyLinks(req, [
      authLink(
        {
          openInt: {
            apiKey: '123',
            customerId: '789',
            connectorName: 'myConnector',
          },
        },
        'https://httpbin.org',
      ),
      echoLink(),
    ])
    const json: {headers: Record<string, unknown>; url: string} =
      await res.json()
    expect(json.headers['x-apikey']).toEqual('123')
    expect(json.headers['x-connection-customer-id']).toEqual('789')
    expect(json.headers['x-connection-connector-name']).toEqual('myConnector')
  })
})
