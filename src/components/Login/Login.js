import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../util/validators';
import { Input } from '../FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(16)

const LoginForm = (props) => {

    return (
        <form
            onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    name={'login'}
                    component={Input}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <Field type={'Checkbox'} name={'checkbox'} component={'input'} /> Remember me
               </div>
            <div>
                <button type={'submit'} >submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;