import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GroupinvitePage = () => {
  return (
    <>
      <MetaTags title="Groupinvite" description="Groupinvite page" />

      <h1>GroupinvitePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/GroupinvitePage/GroupinvitePage.tsx</code>
      </p>
      <p>
        My default route is named <code>groupinvite</code>, link to me with `
        <Link to={routes.groupinvite()}>Groupinvite</Link>`
      </p>
    </>
  )
}

export default GroupinvitePage
