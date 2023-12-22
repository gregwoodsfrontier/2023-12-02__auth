import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String5423862',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-22T22:06:50.963Z',
      },
    },
    two: {
      data: {
        email: 'String393013',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-22T22:06:50.963Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
