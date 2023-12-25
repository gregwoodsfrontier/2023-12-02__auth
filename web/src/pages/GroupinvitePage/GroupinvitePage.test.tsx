import { render } from '@redwoodjs/testing/web'

import GroupinvitePage from './GroupinvitePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupinvitePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupinvitePage />)
    }).not.toThrow()
  })
})
