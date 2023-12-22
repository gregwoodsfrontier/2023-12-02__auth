import { DateField, Form, Label, TextField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewEventPage = () => {
  return (
    <>
      <MetaTags title="Set up a new group" />

      <div className="auth-form">
        <Form>
          <div className="field">
            <Label name="eventName">Group Name</Label>
            <TextField name="eventName" placeholder="" />
          </div>
          <div className="field">
            <Label name="eventDate">Event Date</Label>
            <DateField name="eventDate" placeholder="" />
          </div>
          <div className="field"></div>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
