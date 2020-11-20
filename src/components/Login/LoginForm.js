import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../redux/authReducer';
import { Form, Field } from 'react-final-form'
import { composeValidators, required, maxLengthCreator, minLength } from '../../util/validators';
import { Input } from '../FormsControls/FormsControls';
import { Redirect } from 'react-router-dom';
import style from '../FormsControls/FormControls.module.css';


const LoginForm = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const authFormError = useSelector(state => state.auth.authFormError)

    const onSubmit = (data) => {
        dispatch(getLogin(data.email, data.password, data.rememberMe))
    }

    if (isAuth) return <Redirect to='/profile' />

    return (
        <>
            <h1>Login</h1>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
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

                        {authFormError &&
                            <div className={style.formSumError}>
                                {authFormError}
                            </div>}
                        <div>
                            <button type="submit">
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