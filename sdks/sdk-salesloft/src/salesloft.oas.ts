import {oas30, OpenAPISpec} from '@opensdks/runtime'
import {createDocument, jsonOperation, Oas30Schema, z} from '@opensdks/util-zod'
import _oas from '../salesloft.orig.oas.json' assert { type: 'json' }

const cadenceSettings = z
  .object({
    name: z.string(),
    target_daily_people: z.number(),
    remove_replied: z.boolean(),
    remove_bounced: z.boolean(),
    remove_people_when_meeting_booked: z.boolean().optional(),
    external_identifier: z.union([z.string(), z.number()]).nullable(),
    cadence_function: z
      .enum(['outbound', 'inbound', 'event', 'other'])
      .describe('https://share.cleanshot.com/1JmgKzwV'),
  })
  .openapi({ref: 'CadenceSettings'})

const cadenceSharingSettings = z
  .object({
    team_cadence: z.boolean(),
    shared: z.boolean(),
  })
  .openapi({ref: 'CadenceSharingSettings'})

const automatedSettingsSchema = z
  .object({
    allow_send_on_weekends: z
      .boolean()
      .optional()
      .describe(
        'Determines whether or not the step is able to be sent on weekends',
      ),
  })
  .and(
    z.discriminatedUnion('send_type', [
      z.object({
        send_type: z.literal('at_time')
          .describe(`Describes if the step is due immediately or not.
        Must be either "at_time" or "after_time_delay".`),
        time_of_day: z
          .string()
          .describe(
            'The time that the automated action will happen. e.g. 09:00',
          ),
        timezone_mode: z.union([z.literal('person'), z.literal('user')])
          .describe(`Specifies whether the email is sent after the person's timezone
        or the user's timezone.
        Must be either "person" or "user".`),
      }),
      z.object({
        send_type: z.literal('after_time_delay')
          .describe(`Describes if the step is due immediately or not.
        Must be either "at_time" or "after_time_delay".`),
        delay_time: z
          .number()
          .describe('must be a number between 0 and 720 (minutes'),
      }),
    ]),
  )
  .openapi({
    ref: 'StepGroupAutomatedSettings',
    description:
      'Represents the parameters for an automated action. Only valid for automated email steps',
  })

const stepSchema = z
  .object({
    enabled: z
      .boolean()
      .describe('Describes if that step is currently enabled'),
    name: z.string().describe('The name given by the user for the step'),
  })
  .and(
    z.discriminatedUnion('type', [
      z.object({
        type: z.literal('Phone'),
        type_settings: z.object({
          instructions: z.string(),
        }),
      }),
      z.object({
        type: z.literal('Other'),
        type_settings: z.object({
          instructions: z.string(),
        }),
      }),
      z.object({
        type: z.literal('Integration'),
        type_settings: z.object({
          instructions: z
            .string()
            .describe('The instructions to follow when executing that step'),
          integration_id: z
            .number()
            .describe(
              'Identifies the Salesloft integration you are trying to use',
            ),
          integration_step_type_guid: z
            .string()
            .describe(
              'For LinkedIn steps, identifies one of the LinkedIn Steps.',
            ),
        }),
      }),
      z.object({
        type: z.literal('Email'),
        type_settings: z.object({
          previous_email_step_group_reference_id: z
            .number()
            .optional()
            .describe(
              'Used to reference the step group of the previous email in a thread',
            ),
          email_template: z
            .object({
              title: z.string().optional(),
              subject: z.string().optional(),
              body: z.string().optional(),
            })
            .optional()
            .describe('Content for the email template used in this step'),
        }),
      }),
    ]),
  )
  .openapi({ref: 'Step'})

const stepGroupSchema = z
  .object({
    automated_settings: automatedSettingsSchema
      .optional()
      .describe(
        'Collection of all the settings for an automated step. Only valid if automated is true',
      ),
    automated: z
      .boolean()
      .describe(
        'Describes if the step happens with or without human intervention. Can only be true if steps in group are Email steps.',
      ),
    day: z.number().describe('The day that the step will be executed'),
    due_immediately: z
      .boolean()
      .describe('Describes if the step is due immediately or not.'),
    reference_id: z
      .number()
      .optional()
      .nullable()
      .describe(
        'Used to correlate threaded email steps. Required for email step, can pass 0 for example.',
      ),
    steps: z
      .array(stepSchema)
      .describe('All of the steps that belong to a particular day'),
  })
  .openapi({ref: 'StepGroup'})

const cadenceImport = z
  .object({
    settings: cadenceSettings
      .optional()
      .describe('optional when cadence_content.cadence_id is specified'),
    sharing_settings: cadenceSharingSettings
      .optional()
      .describe('optional when cadence_content.cadence_id is specified'),
    cadence_content: z.object({
      cadence_id: z.number().optional().describe('For importing'),
      step_groups: z.array(stepGroupSchema),
    }),
  })
  .openapi({
    ref: 'CadenceImport',
    description:
      '@see https://gist.github.com/tonyxiao/6e14c2348e4672e91257c0b918d5ccab',
  })

const cadenceExport = z
  .object({
    cadence_content: z.object({
      settings: cadenceSettings.optional(),
      sharing_settings: cadenceSharingSettings.optional(),
      step_groups: z.array(stepGroupSchema),
    }),
  })
  .openapi({
    ref: 'CadenceExport',
    description:
      '@see https://gist.github.com/tonyxiao/0820140ebf60e408b454804f0ea05177',
  })

const cadencePartial = z
  .object({
    current_state: z.enum([
      'draft',
      'active',
      'archived',
      'expired',
      'deleted',
    ]),
    id: z.number(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
  })
  .catchall(z.any())
  .openapi({ref: '_Cadence'})

const metadata = z
  .object({
    filtering: z.object({}).passthrough(),
    paging: z.object({
      per_page: z.number(),
      current_page: z.number(),
      next_page: z.number().nullable(),
      prev_page: z.number().nullable(),
    }),
    sorting: z.object({
      sort_by: z.string().openapi({example: 'updated_at'}),
      sort_direction: z.string().openapi({example: 'DESC NULLS LAST'}),
    }),
  })
  .openapi({ref: 'Metadata'})

const overwrites = createDocument({
  openapi: '3.0.0',
  info: _oas.info,
  paths: {
    '/v2/cadence_imports': {
      post: jsonOperation('importCadence', {
        body: cadenceImport,
        response: z.object({
          data: z.object({cadence: z.object({id: z.number()})}),
        }),
      }),
    },
    '/v2/cadence_exports/{id}': {
      get: jsonOperation('exportCadence', {
        path: z.object({id: z.string()}),
        response: z.object({data: cadenceExport}),
      }),
    },
    '/v2/cadences/{id}.json': {
      get: jsonOperation('getCadence', {
        path: z.object({id: z.string()}),
        response: {
          type: 'object',
          properties: {data: {$ref: '#/components/schemas/Cadence'}},
          required: ['data'],
        },
      }),
    },
  },
  components: {
    schemas: {
      cadenceImport,
      cadenceExport,
      cadencePartial,
      metadata,
    },
  },
})
// maybe use Immer if we cared about not modifying the original
const paths = _oas.paths as Partial<typeof _oas.paths>
delete paths['/v2/cadence_imports.json']
delete paths['/v2/cadence_exports/{id}.json']

// Patch the listing endpoints to return `metadata` and `data` and not just data alone.
for (const operations of Object.values(
  (paths as oas30.OpenAPIObject['paths']) ?? {},
)) {
  for (const response of Object.values(
    (operations.get?.responses ?? {}) as Record<string, oas30.ResponseObject>,
  )) {
    if (
      (response.content?.['*/*']?.schema as oas30.SchemaObject).type === 'array'
    ) {
      response.content!['*/*']!.schema = {
        properties: {
          data: response.content!['*/*']!.schema as Oas30Schema,
          metadata: {$ref: '#/components/schemas/Metadata'},
        },
        required: ['data', 'metadata'],
      } satisfies Oas30Schema
    }
  }
}

// Assigning overrides
Object.assign(_oas.paths, overwrites.paths)
Object.assign(_oas.components.schemas, overwrites.components?.schemas)

const _cadence = overwrites.components?.schemas?.[
  '_Cadence'
] as typeof _oas.components.schemas.Cadence
_oas.components.schemas.Cadence = {
  ..._oas.components.schemas.Cadence,
  ..._cadence,
  properties: {
    ..._oas.components.schemas.Cadence.properties,
    ..._cadence.properties,
  },
}

export const oas = _oas as OpenAPISpec

export default oas

if (import.meta.url.endsWith(process.argv[1]!)) {
  console.log(JSON.stringify(oas, null, 2))
}
