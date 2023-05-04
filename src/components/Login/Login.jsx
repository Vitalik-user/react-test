/*const LoginForm = (props) => {
    return (
        <form>
            <div>
                <Field  placeholder={"Login"} name="login" component="input"/>
            </div>
            <div>
                <Field  placeholder={"Password"} name="pass" component="input"/>
            </div>
            <div>
                <Field  type={"checkbox"} name="rememberMe" component="input"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm) */
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const Login = () => (
    <div>
        <h1>LOGIN</h1>
        <Formik
            initialValues={{login: '', email: '', password: ''}}
            validate={values => {
                debugger
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}

            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <LoginForm />
        </Formik>
    </div>
);

const LoginForm = (props) => {
    return <Form>
        <div>
            <Field placeholder={"login"} type="text" name="login"/>
            <ErrorMessage name="login" component="div"/>
        </div>
        <div>
            <Field placeholder={"email"} type="email" name="email"/>
            <ErrorMessage name="email" component="div"/>
        </div>
        <div>
            <Field placeholder={"pass"} type="password" name="password"/>
            <ErrorMessage name="password" component="div"/>
        </div>
        <div>
            <button type="submit">
                Submit
            </button>
        </div>
    </Form>

}

export default Login;


/*

const Login = (props) => {
    return (<div>
            <h1>LOGIN</h1>
        </div>
    )

}

export default Login;*/
