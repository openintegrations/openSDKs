/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** OneOf type helpers */
type Without<T, U> = {[P in Exclude<keyof T, keyof U>]?: never}
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
    ? OneOf<[XOR<A, B>, ...Rest]>
    : never

export interface paths {
  '/ledger': {
    /**
     * Ledger / Disbursement History
     * @description This API enable you to get transactions from certain interval and do transaction reconciliation in real time
     */
    get: operations['ledger-api']
  }
  '/disbursements/transaction?referenceId={{referenceId}}': {
    /**
     * Get Disbursement using Reference ID From Client
     * @description This API enables you to check the transaction status before and after created using Reference ID given by Client
     */
    get: operations['retrieve-disbursement-using']
  }
  '/balance': {
    /**
     * Account Balance
     * @description This API enable you to check current balance of Brick Pay, Brick Flex & Total Available Balance
     */
    get: operations['current-balance-api']
  }
  '/disbursements/transaction?referenceId={{referenceId}} (COPY)': {
    /**
     * Get Disbursement using Reference ID From Client
     * @description This API enables you to check the transaction status before and after created using Reference ID given by Client
     */
    get: operations['get-disbursement-using-reference-id-from-client-copy']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: never
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  /**
   * Ledger / Disbursement History
   * @description This API enable you to get transactions from certain interval and do transaction reconciliation in real time
   */
  'ledger-api': {
    parameters: {
      query?: {
        /** @description From when the transaction should be retrieved. Format is YYYY-MM-DD */
        startDate?: string
        /** @description Until when the transaction should be retrieved. format is YYYY-MM-DD */
        endDate?: string
        /** @description Status of transaction. either completed or processing or pending or failed. always lower case */
        status?: string
        /** @description Look for specific transaction ID or referenceId */
        search?: string
        /** @description Which page of the data should be retrieved */
        page?: number
        /** @description how many records need to be retrieved per page. Maximum record is 2000 & default is 100 per page */
        size?: number
      }
      header: {
        /** @description Unique Identifier for Client(Public access token), It should be called with bearer */
        publicAccessToken: string
      }
    }
    responses: {
      /** @description 200 */
      200: {
        content: {
          'application/json': {
            /**
             * @default 0
             * @example 200
             */
            status?: number
            data?: {
              /** @example We are successfully able to get the data */
              message?: string
              transactions?: {
                /** @example ref-1 */
                refId?: string
                /** @example 2022-10-03T15:17:44.000+07:00 */
                date?: string
                /** @example test-123 */
                accountHolderName?: string
                /** @example 12345678 */
                accountNumber?: string
                /** @example Bank Artos Indonesia */
                bankName?: string
                /** @example Demo-1 */
                description?: string
                /**
                 * @default 0
                 * @example 20000
                 */
                amount?: number
                /**
                 * @default 0
                 * @example 4500
                 */
                fees?: number
                /** @example completed */
                status?: string
              }[]
            }
            metaData?: {
              /** @example API */
              source?: string
              /** @example Payment */
              entity?: string
            }
            error?: unknown
          }
        }
      }
      /** @description 401 */
      401: {
        content: {
          'application/json': {
            /**
             * @default 0
             * @example 401
             */
            status?: number
            error?: {
              /** @example invalid_parameters_in_headers */
              code?: string
              /** @example Please use valid Public_access_token in headers */
              message?: string
              /** @example Please generate valid public access token via /v2/payments/auth/token APIs or contact to Brick sales team */
              action?: string
              /** @example Invalid public_access_token in headers */
              reason?: string
            }
            metaData?: {
              /** @example API */
              source?: string
              /** @example Payment */
              entity?: string
            }
            data?: unknown
          }
        }
      }
    }
  }
  /**
   * Get Disbursement using Reference ID From Client
   * @description This API enables you to check the transaction status before and after created using Reference ID given by Client
   */
  'retrieve-disbursement-using': {
    parameters: {
      query?: {
        /** @description Reference ID from given from Client Side */
        referenceId?: string
      }
      header: {
        /** @description Unique Identifier for Client(Public access token), It should be called with bearer */
        publicAccessToken: string
      }
    }
    responses: {
      /** @description 200 */
      200: {
        content: {
          'application/json': {
            /**
             * @default 0
             * @example 200
             */
            status?: number
            data?: {
              /** @example We have successfuly retrieve your disbursement */
              message?: string
              /** @example c8836b555a8842b2ac20fef1a */
              id?: string
              /** @example disbursement */
              type?: string
              attributes?: {
                /** @example 182y1841 */
                referenceId?: string
                /** @example Disbursement */
                description?: string
                /** @example 29999 */
                amount?: string
                /** @example failed */
                status?: string
                /** @example 2030-12-22T10:12:08.000+07:00 */
                createdAt?: string
                disbursementMethod?: {
                  /** @example bank_transfer */
                  type?: string
                  /** @example 78472 */
                  bankAccountNo?: string
                  /** @example MANDIRI */
                  bankShortCode?: string
                  /** @example Test */
                  bankAccountHolderName?: string
                  /** @example Bank Mandiri */
                  bankName?: string
                }
                /** @example */
                errorCode?: string
                /** @example */
                errorReason?: string
              }
            }
            metaData?: {
              /** @example API */
              source?: string
              /** @example Payment */
              entity?: string
            }
            error?: unknown
          }
        }
      }
      /** @description 401 */
      401: {
        content: {
          'application/json': {
            /**
             * @default 0
             * @example 401
             */
            status?: number
            error?: {
              /** @example invalid_parameters_in_headers */
              code?: string
              /** @example Please use valid Public_access_token in headers */
              message?: string
              /** @example Please generate valid public access token via /v2/payments/auth/token APIs or contact to Brick sales team */
              action?: string
              /** @example Invalid public_access_token in headers */
              reason?: string
            }
            metaData?: {
              /** @example API */
              source?: string
              /** @example Payment */
              entity?: string
            }
            data?: unknown
          }
        }
      }
    }
  }
  /**
   * Account Balance
   * @description This API enable you to check current balance of Brick Pay, Brick Flex & Total Available Balance
   */
  'current-balance-api': {
    parameters: {
      header: {
        /** @description Unique Identifier for Client(Public access token), It should be called with bearer */
        publicAccessToken: string
      }
    }
    responses: {
      /** @description 200 */
      200: {
        content: {
          'application/json': {
            /**
             * @default 0
             * @example 200
             */
            status?: number
            data?: {
              brickPay?: {
                /**
                 * @default 0
                 * @example 3000000
                 */
                balance?: number
              }
              brickFlex?: {
                /**
                 * @default 0
                 * @example 0
                 */
                balance?: number
              }
              /**
               * @default 0
               * @example 3000000
               */
              totalAvailableBalance?: number
            }
            metaData?: {
              /** @example API */
              source?: string
              /** @example Payment */
              entity?: string
            }
            error?: unknown
          }
        }
      }
      /** @description 401 */
      401: {
        content: {
          'application/json': OneOf<
            [
              {
                /**
                 * @default 0
                 * @example 401
                 */
                status?: number
                error?: {
                  /** @example invalid_parameters_in_headers */
                  code?: string
                  /** @example Please use valid Public_access_token in headers */
                  message?: string
                  /** @example Please generate valid public access token via /v2/payments/auth/token APIs or contact to Brick sales team */
                  action?: string
                  /** @example Invalid public_access_token in headers */
                  reason?: string
                }
                metaData?: {
                  /** @example API */
                  source?: string
                  /** @example Payment */
                  entity?: string
                }
                data?: unknown
              },
              {
                /**
                 * @default 0
                 * @example 401
                 */
                status?: number
                error?: {
                  /** @example expired_parameters_in_headers */
                  code?: string
                  /** @example Please use live publicAccessToken in headers */
                  message?: string
                  /** @example Please generate valid public access token via /v2/payments/auth/token APIs or contact to Brick sales team */
                  action?: string
                  /** @example publicAccessToken is expired */
                  reason?: string
                }
                metaData?: {
                  /** @example API */
                  source?: string
                  /** @example Payment */
                  entity?: string
                }
                data?: unknown
              },
            ]
          >
        }
      }
    }
  }
  /**
   * Get Disbursement using Reference ID From Client
   * @description This API enables you to check the transaction status before and after created using Reference ID given by Client
   */
  'get-disbursement-using-reference-id-from-client-copy': {
    parameters: {
      query?: {
        /** @description Reference ID from given from Client Side */
        referenceId?: string
      }
      header: {
        /** @description Unique Identifier for Client(Public access token), It should be called with bearer */
        publicAccessToken: string
      }
    }
    responses: {
      /** @description 200 */
      200: {
        content: {
          'application/json': {
            /**
             * @default 0
             * @example 200
             */
            status?: number
            data?: {
              /** @example We have successfuly retrieve your disbursement */
              message?: string
              /** @example c8836b555a8842b2ac20fef1a */
              id?: string
              /** @example disbursement */
              type?: string
              attributes?: {
                /** @example 182y1841 */
                referenceId?: string
                /** @example Disbursement */
                description?: string
                /** @example 29999 */
                amount?: string
                /** @example failed */
                status?: string
                /** @example 2030-12-22T10:12:08.000+07:00 */
                createdAt?: string
                disbursementMethod?: {
                  /** @example bank_transfer */
                  type?: string
                  /** @example 78472 */
                  bankAccountNo?: string
                  /** @example MANDIRI */
                  bankShortCode?: string
                  /** @example Test */
                  bankAccountHolderName?: string
                  /** @example Bank Mandiri */
                  bankName?: string
                }
                /** @example */
                errorCode?: string
                /** @example */
                errorReason?: string
              }
            }
            metaData?: {
              /** @example API */
              source?: string
              /** @example Payment */
              entity?: string
            }
            error?: unknown
          }
        }
      }
      /** @description 401 */
      401: {
        content: {
          'application/json': {
            /**
             * @default 0
             * @example 401
             */
            status?: number
            error?: {
              /** @example invalid_parameters_in_headers */
              code?: string
              /** @example Please use valid Public_access_token in headers */
              message?: string
              /** @example Please generate valid public access token via /v2/payments/auth/token APIs or contact to Brick sales team */
              action?: string
              /** @example Invalid public_access_token in headers */
              reason?: string
            }
            metaData?: {
              /** @example API */
              source?: string
              /** @example Payment */
              entity?: string
            }
            data?: unknown
          }
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
