import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-22T22:12:36.762Z',
        updatedAt: '2023-12-22T22:12:36.762Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-22T22:12:36.762Z',
        updatedAt: '2023-12-22T22:12:36.762Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
