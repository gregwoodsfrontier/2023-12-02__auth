import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-22T22:12:58.306Z',
        user: {
          create: {
            email: 'String4762044',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:12:58.306Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-22T22:12:58.306Z',
            updatedAt: '2023-12-22T22:12:58.306Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-22T22:12:58.306Z',
        user: {
          create: {
            email: 'String1297925',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-22T22:12:58.306Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-22T22:12:58.306Z',
            updatedAt: '2023-12-22T22:12:58.306Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
