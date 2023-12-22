import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2023-12-22T22:12:47.714Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-22T22:12:47.714Z',
            updatedAt: '2023-12-22T22:12:47.714Z',
          },
        },
        santa: {
          create: {
            email: 'String9365205',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:12:47.714Z',
          },
        },
        person: {
          create: {
            email: 'String8739627',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:12:47.714Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-12-22T22:12:47.714Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-22T22:12:47.714Z',
            updatedAt: '2023-12-22T22:12:47.714Z',
          },
        },
        santa: {
          create: {
            email: 'String8596447',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:12:47.714Z',
          },
        },
        person: {
          create: {
            email: 'String1569254',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:12:47.714Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
