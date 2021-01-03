import React from 'react'
import { Field, Form } from 'react-final-form'
import { Input } from '../../FormsControls/FormsControls'

const ProfileDataForm = ({ profile, onSubmit }) => {

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={ profile }
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Full name</label>
                        <Field
                            name='fullName'
                            component={Input}
                            type='text'
                        />
                    </div>

                    <div>
                        <label>Looking for a job</label>
                        <Field
                            name='lookingForAJob'
                            component={'input'}
                            type='checkbox'
                        />
                    </div>

                    <div>
                        <label>My professional skills:</label>
                        <Field
                            name='lookingForAJobDescription'
                            component={Input}
                            type='text'
                        />
                    </div>

                    <div>
                        <label>About me:</label>
                        <Field
                            name='aboutMe'
                            component={Input}
                            type='text'
                        />
                    </div>

                    <div>
                        <button type="submit"> save </button>
                    </div>
                </form>
            )}
        />
    )
}

export default ProfileDataForm