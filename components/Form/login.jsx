import React, {useState, useEffect, useRef} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleEmailChanged = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChanged = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (password.trim().length === 0) {
      setPasswordError("Password cannot be empty");
      passwordRef.current.focus();
    } else if (password.length < 8) {
      setPasswordError("Password must have at least 8 characters");
      passwordRef.current.focus();
    }

    if (email.trim().length === 0) {
      setEmailError("Email address cannot be empty");
      emailRef.current.focus();
    } else if (!email.match(/\w+\@\w+\.\w+/)) {
      setEmailError("Email must be valid");
      emailRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={handleEmailChanged} ref={emailRef} />
        <small>{emailError}</small>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={handlePasswordChanged} ref={passwordRef} />
        <small>{passwordError}</small>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;