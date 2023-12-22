import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String4749734',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:12:17.459Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-22T22:12:17.459Z',
            updatedAt: '2023-12-22T22:12:17.459Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String3095280',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:12:17.459Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-22T22:12:17.459Z',
            updatedAt: '2023-12-22T22:12:17.459Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
