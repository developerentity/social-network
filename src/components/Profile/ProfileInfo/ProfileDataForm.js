import React from 'react'
import { Form, Field } from 'react-final-form'
import style from './ProfileInfo.module.css'

const ProfileDataForm = ({ profile, onSubmit }) => {

  return (
    <div className={style.formWrap}>
      <Form
        onSubmit={onSubmit}
        initialValues={profile}
        validate={values => {
          const errors = {}
          if (!values.fullName) {
            errors.fullName = 'Required'
          }
          if (!values.lookingForAJobDescription) {
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
                  <input {...input} type="text" placeholder="John Smith" className='form-control' />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span className={style.textError}>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>


            <Field
              name="lookingForAJob"
              type='checkbox'>
              {({ input, meta }) => (
                <div className="form-check mt-2">
                  <input {...input} type="checkbox" className='form-check-input' id="lookingForAJob" />
                  <label className='form-check-label' htmlFor='lookingForAJob'>Is looking for a job</label>
                  {meta.error && meta.touched && <span className={style.textError}>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="lookingForAJobDescription">
              {({ input, meta }) => (
                <div className="mt-2">
                  <label className='form-label' htmlFor='lookingForAJobDescription'>Job description</label>
                  <input {...input} type="text" placeholder="Skills" className='form-control' id='lookingForAJobDescription' />
                  {meta.error && meta.touched && <span className={style.textError}>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="aboutMe">
              {({ input, meta }) => (
                <div className="mt-2">
                  <label className='form-label' htmlFor='aboutMe'>About me</label>
                  <input {...input} type="text" placeholder="Something interesting about you" className='form-control' id='aboutMe' />
                  {meta.error && meta.touched && <span className={style.textError}>{meta.error}</span>}
                </div>
              )}
            </Field>

            <div className="mt-2">
              <b>Contacts</b>:
                {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                  <Field name={`contacts.${key}`}>
                    {({ input }) => (
                      <div>
                        <input {...input} type="text" placeholder={`Your ${key} link`} className={submitError?.toLowerCase().includes(key) ? `form-control text-danger is-invalid ` : 'form-control'} />
                      </div>)}
                  </Field>
                </div>
              })}
            </div>

            {submitError && <div className={style.textError}>{submitError.split('(')[0]}</div>}

            <div className="mt-2">
              <button type="submit" disabled={submitting} className='btn btn-primary'> Save </button>
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default ProfileDataForm
