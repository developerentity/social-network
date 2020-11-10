import React from 'react';
import { connect } from 'react-redux';
import { getLogin } from '../../redux/authReducer';
import { Form, Field } from 'react-final-form'
import { composeValidators, required, maxLengthCreator, minLength } from '../../util/validators';
import { Input } from '../FormsControls/FormsControls';
import { Redirect } from 'react-router-dom';
import style from '../FormsControls/FormControls.module.css';


const LoginForm = (props) => {

    const onSubmit = (formData) => {
        props.getLogin(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to='/profile' />

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

                        {props.authFormError &&
                            <div className={style.formSumError}>
                                {props.authFormError}
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

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        authFormError: state.auth.authFormError
    })
}

export default connect(mapStateToProps, { getLogin })(LoginForm);