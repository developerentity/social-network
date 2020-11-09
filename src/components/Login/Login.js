import React from 'react';
import { connect } from 'react-redux';
import { getLogin } from '../../redux/authReducer';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../util/validators';
import { Input } from '../FormsControls/FormsControls';
import { Redirect } from 'react-router-dom';
import style from '../FormsControls/FormControls.module.css';

const maxLength10 = maxLengthCreator(20)

const LoginForm = (props) => {

    return (
        <form
            onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    type='password'
                    component={Input}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <Field type={'Checkbox'} name={'rememberMe'} component={'input'} /> Remember me
            </div>
            {props.error &&
                <div className={style.formSumError}>
                    {props.error}
                </div>}
            <div>
                <button type={'submit'} >submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.getLogin(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to='/profile' />

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps, { getLogin })(Login);