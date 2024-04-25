import {OpenAPISpec} from '@opensdks/runtime'
import {createDocument, jsonOperation, z} from '@opensdks/util-zod'

const locationSchema = z.object({
  address: z.string(),
})

const sourceSchema = z.object({
  id: z.number(),
  public_name: z.string(),
})

const creditedToSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  name: z.string(),
  employee_id: z.string(),
})

const jobSchema = z.object({
  id: z.number(),
  name: z.string(),
})

const currentStageSchema = z.object({
  id: z.number(),
  name: z.string(),
})

const answerSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

const attachmentSchema = z
  .object({
    filename: z.string(),
    url: z.string(),
    type: z.string(),
    created_at: z.string(),
  })
  .openapi({ref: 'attachment'})

const rejectionReasonSchema = z.union([z.null(), z.string()])
const rejectionDetailsSchema = z.union([z.null(), z.string()])
const prospectiveOfficeSchema = z.union([z.null(), z.string()])
const prospectiveDepartmentSchema = z.union([z.null(), z.string()])
const prospectPoolSchema = z.union([z.null(), z.string()])
const prospectStageSchema = z.union([z.null(), z.string()])
const prospectOwnerSchema = z.union([z.null(), z.string()])

const applicationCustomTestSchema = z.union([z.null(), z.string()])
const applicationCustomTestKeyedSchema = z.object({
  name: z.string(),
  type: z.string(),
  value: z.string(),
})

const greenhouseApplication = z
  .object({
    id: z.number(),
    candidate_id: z.number(),
    prospect: z.boolean(),
    applied_at: z.string(),
    rejected_at: rejectionReasonSchema,
    last_activity_at: z.string(),
    location: locationSchema,
    source: sourceSchema,
    credited_to: creditedToSchema,
    rejection_reason: rejectionReasonSchema,
    rejection_details: rejectionDetailsSchema,
    jobs: z.array(jobSchema),
    job_post_id: z.number(),
    status: z.string(),
    current_stage: currentStageSchema,
    answers: z.array(answerSchema),
    prospective_office: prospectiveOfficeSchema,
    prospective_department: prospectiveDepartmentSchema,
    prospect_detail: z.object({
      prospect_pool: prospectPoolSchema,
      prospect_stage: prospectStageSchema,
      prospect_owner: prospectOwnerSchema,
    }),
    custom_fields: z.object({
      application_custom_test: applicationCustomTestSchema,
    }),
    keyed_custom_fields: z.object({
      application_custom_test: applicationCustomTestKeyedSchema,
    }),
    attachments: z.array(attachmentSchema),
  })
  .openapi({ref: 'application'})

const greenhouseDepartment = z
  .object({
    id: z.number(),
    name: z.string(),
    parent_id: z.string().nullish(),
    parent_department_external_ids: z.string().nullish(),
    child_ids: z.array(z.number()).nullish(),
    child_department_external_ids: z.array(z.number()).nullish(),
    external_id: z.string(),
    // TODO: Support children field recursively whenever available in zodapi. More: https://github.com/asteasolutions/zod-to-openapi/discussions/191
    children: z.array(z.any()),
  })
  .catchall(z.unknown())
  .openapi({ref: 'department'})

const candidateValueTypePair = z.object({
  value: z.string(),
  type: z.string().nullish(),
})
const hiringTeamInstance = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  name: z.string(),
  employee_id: z.string(),
  responsible: z.boolean().nullish(),
})

const greenhouseCandidate = z
  .object({
    id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    company: z.string(),
    title: z.string(),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    last_activity: z.coerce.date(),
    is_private: z.boolean(),
    photo_url: z.string().nullable(),
    application_ids: z.array(z.number()),
    can_email: z.boolean(),
    tags: z.array(z.string()),
    attachments: z.array(
      z.object({
        filename: z.string(),
        url: z.string(),
        type: z.string(),
        created_at: z.coerce.date(),
      }),
    ),
    phone_numbers: z.array(candidateValueTypePair),
    addresses: z.array(candidateValueTypePair),
    email_addresses: z.array(candidateValueTypePair),
    website_addresses: z.array(candidateValueTypePair),
    social_media_addresses: z.array(candidateValueTypePair),
    recruiter: hiringTeamInstance,
    coordinator: hiringTeamInstance,
    applications: z.array(greenhouseApplication),
  })
  .catchall(z.unknown())
  .openapi({ref: 'candidate'})

const greenhouseOffice = z
  .object({
    id: z.number(),
    name: z.string(),
    location: z.object({
      name: z.string(),
    }),
    parent_id: z.number(),
    child_ids: z.array(z.number()).nullish(),
    external_id: z.string(),
  })
  .openapi({ref: 'office'})

const greenhouseOpening = z
  .object({
    id: z.number(),
    opening_id: z.string().nullable(),
    status: z.string(),
    opened_at: z.coerce.date(),
    closed_at: z.coerce.date(),
    application_id: z.number(),
    close_reason: z
      .object({
        id: z.number(),
        name: z.string(),
      })
      .nullable(),
  })
  .openapi({ref: 'opening'})

const customFieldValue = z
  .object({
    name: z.string(),
    type: z.string(),
    value: z.string(),
  })
  .openapi({ref: 'keyedCustomFields'})

const hiringTeam = z
  .object({
    hiring_managers: z.array(hiringTeamInstance),
    recruiters: z.array(hiringTeamInstance),
    coordinators: z.array(hiringTeamInstance),
    sourcers: z.array(hiringTeamInstance),
  })
  .openapi({ref: 'hiringTeam'})

const greenhouseOffer = z
  .object({
    id: z.number(),
    version: z.number(),
    application_id: z.number(),
    job_id: z.number(),
    candidate_id: z.number(),
    opening: greenhouseOpening,
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    sent_at: z.string(),
    resolved_at: z.coerce.date(),
    starts_at: z.string(),
    status: z.string(),
    custom_fields: z.record(z.string(), z.any()),
    keyed_custom_fields: z.record(z.string(), customFieldValue),
  })
  .openapi({ref: 'offer'})

const greenhouseJob = z
  .object({
    id: z.number().describe('The job’s unique identifier'),
    name: z.string(),
    requisition_id: z
      .string()
      .describe(
        'An arbitrary ID provided by an external source; does not map to another entity within Greenhouse.',
      ),
    notes: z.string(),
    confidential: z
      .boolean()
      .describe('One of true, false. If the job is confidential or not.'),
    status: z.enum(['open', 'closed', 'draft']),
    created_at: z.coerce.date(),
    opened_at: z.coerce.date(),
    closed_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    is_template: z
      .boolean()
      .describe(
        'Is this job designated as a template used to create other jobs. This may be true, false, or null. Null is an indication this job was created before template job feature.',
      )
      .nullable(),
    copied_from_id: z
      .number()
      .describe(
        'If this job was copied from another job, this field contains the id of the source job.',
      ),
    departments: z.array(greenhouseDepartment),
    offices: z.array(greenhouseOffice),
    openings: z.array(greenhouseOpening),
    custom_fields: z.record(z.string(), z.any()),
    keyed_custom_fields: z.record(z.string(), customFieldValue),
    hiring_team: hiringTeam,
  })
  .catchall(z.unknown())
  .openapi({ref: 'job'})

export const oas: OpenAPISpec = createDocument({
  openapi: '3.1.0',
  info: {title: 'Greenhouse Harvest API', version: '0.0.0'},
  servers: [{url: 'https://harvest.greenhouse.io'}],
  paths: {
    '/v1/departments/{id}': {
      get: jsonOperation('getDepartment', {
        path: z.object({
          id: z.string().describe('The ID of the department to retrieve'),
        }),
        response: greenhouseDepartment,
        query: z.object({
          render_as: z
            .enum(['list', 'tree'])
            .default('list')
            .nullish()
            .describe(
              "This parameter defines how to represent the list of departments. The default value is 'list’, which returns a flat list of departments. If this is set to 'tree’, departments are represented in a tree-like structure where they may include sub-departments as children.",
            ),
        }),
      }),
    },
    '/v1/departments': {
      get: jsonOperation('getDepartments', {
        response: z.array(greenhouseDepartment),
        query: z.object({
          render_as: z
            .enum(['list', 'tree'])
            .default('list')
            .nullish()
            .describe(
              "This parameter defines how to represent the list of departments. The default value is 'list’, which returns a flat list of departments. If this is set to 'tree’, departments are represented in a tree-like structure where they may include sub-departments as children.",
            ),
          per_page: z
            .number()
            .min(1)
            .max(500)
            .optional()
            .describe(
              'Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.',
            )
            .default(100),
          page: z
            .number()
            .optional()
            .describe(
              'A cursor for use in pagination. Returns the n-th chunk of per_page objects.',
            ),
          external_id: z
            .string()
            .optional()
            .describe(
              'If supplied, only return department(s) with that external ID.',
            ),
        }),
      }),
    },
    '/v1/jobs/{id}': {
      get: jsonOperation('getJob', {
        path: z.object({
          id: z.string().describe('The ID of the job to retrieve'),
        }),
        response: greenhouseJob,
      }),
    },
    '/v1/jobs': {
      get: jsonOperation('getJobs', {
        query: z.object({
          // TODO: Support other parameters
          per_page: z
            .number()
            .min(1)
            .max(500)
            .optional()
            .describe(
              'Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.',
            )
            .default(100),
          page: z
            .number()
            .optional()
            .describe(
              'A cursor for use in pagination. Returns the n-th chunk of per_page objects.',
            ),
          external_id: z
            .string()
            .optional()
            .describe(
              'If supplied, only return department(s) with that external ID.',
            ),
        }),
        response: z.array(greenhouseJob),
      }),
    },
    '/v1/offers/{id}': {
      get: jsonOperation('getOffer', {
        path: z.object({
          id: z.string().describe('The ID of the offer to retrieve'),
        }),
        response: greenhouseOffer,
      }),
    },
    '/v1/offers': {
      get: jsonOperation('getOffers', {
        query: z.object({
          // TODO: Support other parameters
          per_page: z
            .number()
            .min(1)
            .max(500)
            .optional()
            .describe(
              'Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.',
            )
            .default(100),
          page: z
            .number()
            .optional()
            .describe(
              'A cursor for use in pagination. Returns the n-th chunk of per_page objects.',
            ),
          external_id: z
            .string()
            .optional()
            .describe(
              'If supplied, only return department(s) with that external ID.',
            ),
        }),
        response: z.array(greenhouseOffer),
      }),
    },
    '/v1/candidates/{id}': {
      get: jsonOperation('getCandidate', {
        path: z.object({
          id: z.string().describe('The ID of the candidate to retrieve'),
        }),
        response: greenhouseCandidate,
      }),
    },
    '/v1/candidates': {
      get: jsonOperation('getCandidates', {
        query: z.object({
          // TODO: Support other parameters
          per_page: z
            .number()
            .min(1)
            .max(500)
            .optional()
            .describe(
              'Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.',
            )
            .default(100),
          page: z
            .number()
            .optional()
            .describe(
              'A cursor for use in pagination. Returns the n-th chunk of per_page objects.',
            ),
          external_id: z
            .string()
            .optional()
            .describe(
              'If supplied, only return department(s) with that external ID.',
            ),
        }),
        response: z.array(greenhouseCandidate),
      }),
    },
  },
})

export default oas

if (import.meta.url.endsWith(process.argv[1]!)) {
  console.log(JSON.stringify(oas, null, 2))
}
