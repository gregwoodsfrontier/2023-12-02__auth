import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-22T22:13:15.140Z',
            updatedAt: '2023-12-22T22:13:15.140Z',
          },
        },
        user: {
          create: {
            email: 'String2569537',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:13:15.140Z',
          },
        },
        toUser: {
          create: {
            email: 'String8138537',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:13:15.140Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-22T22:13:15.140Z',
            updatedAt: '2023-12-22T22:13:15.140Z',
          },
        },
        user: {
          create: {
            email: 'String8523345',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:13:15.140Z',
          },
        },
        toUser: {
          create: {
            email: 'String9759726',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:13:15.140Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
