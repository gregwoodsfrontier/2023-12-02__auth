import { DateField, Form, Label, TextField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Checkbox from 'src/components/Checkbox/Checkbox'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const NewEventPage = () => {
  const handleSubmit = (data) => {
    console.log({ data })
  }

  return (
    <>
      <MetaTags title="Set up your event" />

      <div className="auth-form">
        <HeaderWithRulers
          heading="Set Up Your Event"
          className="mb-8 text-white"
        />
        <Form onSubmit={handleSubmit}>
          <div className="field">
            <Label name="eventName">Group Name</Label>
            <TextField name="eventName" placeholder="" />
          </div>
          <div className="field">
            <Label name="eventDate">Event Date</Label>
            <DateField name="eventDate" placeholder="" />
          </div>
          <div className="field">
            <Checkbox
              name="eventReminder"
              label="Send out a reminder for the event"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
