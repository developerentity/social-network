import React from 'react';
import { Form, Field } from 'react-final-form'


const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field placeholder={'Login'} name={'login'} component={'input'} />
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={'password'} component={'input'} />
                    </div>
                    <div>
                        <Field type={'Checkbox'} name={'checkbox'} component={'input'} /> Remember me
                    </div>
                    <div>
                        <button type={'submit'} >submit</button>
                    </div>
                </form>
            )}
        />
    )
}

export default Login;