import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../redux/authReducer';
import { Form, Field } from 'react-final-form'
import { composeValidators, required, maxLengthCreator, minLength } from '../../util/validators';
import { Input } from '../FormsControls/FormsControls';
import { Redirect } from 'react-router-dom';


const LoginForm = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const captchaUrl = useSelector(state => state.auth.captchaUrl)

    const onSubmit = data => {
        const res = dispatch(getLogin(data.email, data.password, data.rememberMe, data.captcha))
        if (res) {
            return res
        }
    }

    if (isAuth) return <Redirect to='/profile' />

    return (
        <>
            <h1>Login</h1>
            <Form
                onSubmit={onSubmit}
                render={({
                    handleSubmit,
                    submitError,
                    submitting
                }) => (
                    <form onSubmit={handleSubmit}>

                        <Field
                            name='email'
                            component={Input}
                            validate={composeValidators(required, maxLengthCreator(20))}
                            placeholder='email'
                            type='email'
                        />

                        <Field
                            name='password'
                            component={Input}
                            validate={composeValidators(required, maxLengthCreator(20), minLength(8))}
                            placeholder='password'
                            type='password'
                        />

                        <Field
                            type={'checkbox'}
                            name={'rememberMe'}
                            component={'input'}
                        /> Remember me

                        {submitError && <div style={{ color: 'red' }}>{submitError}</div>}
                        {captchaUrl && <img src={captchaUrl} alt='...' />}
                        {captchaUrl && <Field
                            name='captcha'
                            component={Input}
                            validate={required}
                            placeholder='Captcha symbols'
                            type='text'
                        />}
                        <div>
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            />
        </>
    )
}

export default LoginForm;