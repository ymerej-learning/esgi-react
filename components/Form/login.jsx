import React, { useRef, useState } from 'react';

const Login = () => {

    const [validForm, setValidForm] = useState("");

    const emailRef = useRef(null);
    const [email, setEmail] = useState("");
    const [wrongEmail, setWrongEmail] = useState("");
    const updateEmail = ({ target: { value }}) => setEmail(value);

    const passwordRef = useRef(null);
    const [password, setPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState("");
    const updatePassword = ({ target: { value }}) => setPassword(value);

    const emailIsValid = (email) => {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(email.trim().length == 0) {
            emailRef.current.focus();
            setWrongEmail("Email can't be empty !");
        }
        else if(!emailIsValid(email)) {
            emailRef.current.focus();
            setWrongEmail("Email invalid !");
        }
        
        if(password.trim().length == 0) {
            passwordRef.current.focus();
            setWrongPassword("Password can't be empty !");
        }
        else if(password.trim().length < 8) {
            passwordRef.current.focus();
            setWrongPassword("Password can't be smaller than 8 characters !");
        }

        if(!wrongEmail && !wrongPassword) {
            setValidForm("Valid form, congratulations !");
        }
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <label htmlFor='email'>Email</label>
            <input type="email" value={ email } onChange={ updateEmail } ref={ emailRef }/>
            {wrongEmail && (
                <p className="error">{ wrongEmail }</p>
            )}

            <label htmlFor='password'>Password</label>
            <input type="password" value={ password } onChange={ updatePassword } ref={ passwordRef }/>
            {wrongPassword && (
                <p className="error">{ wrongPassword }</p>
            )}

            {validForm && (
                <p className="success">{ validForm }</p>
            )}

            <button type="submit">Login</button>
        </form>
    );   
}
export default Login;