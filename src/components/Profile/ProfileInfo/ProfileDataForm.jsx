import React from 'react'
import { Form, Field } from 'react-final-form'

const ProfileDataForm = ({ profile, onSubmit }) => {

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={profile}
        validate={values => {
          const errors = {}
          if (!values.fullName) {
            errors.fullName = 'Required'
          }
          if (values.lookingForAJob && !values.lookingForAJobDescription) {
            errors.lookingForAJobDescription = 'Please, write your skills'
          }
          if (!values.aboutMe) {
            errors.aboutMe = 'Tell something about you'
          }
          return errors
        }}
        render={({
          submitError,
          handleSubmit,
          submitting,
        }) => (
          <form onSubmit={handleSubmit}>

            <Field name="fullName">
              {({ input, meta }) => (
                <div>
                  <label>Enter full name</label>
                  <input {...input} type="text" placeholder="John Smith" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>


            <Field
              name="lookingForAJob"
              type='checkbox'>
              {({ input, meta }) => (
                <div>
                  <label>Is looking for a job</label>
                  <input {...input} type="checkbox" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="lookingForAJobDescription">
              {({ input, meta }) => (
                <div>
                  <label>Job description</label>
                  <input {...input} type="text" placeholder="Skills" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="aboutMe">
              {({ input, meta }) => (
                <div>
                  <label>About me</label>
                  <input {...input} type="text" placeholder="Something interesting about you" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <div>
              <b>Contacts</b>:
                {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                  <Field name={`contacts.${key}`}>
                    {({ input }) => (
                      <div>
                        <label><b>{key}:</b></label>
                        <input {...input} type="text" placeholder={`Your ${key} link`} />
                        {submitError?.toLowerCase().includes(key) && <div> {submitError.split('(')[0]} </div>}
                      </div>)}
                  </Field>
                </div>
              })}
            </div>

            {submitError && <div>{submitError}</div>}

            <div>
              <button type="submit" disabled={submitting}> Save </button>
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default ProfileDataForm
