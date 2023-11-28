import { useEffect, useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  const getPassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  }

 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, 'working');
 }

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sign-in-email">Email</label>
        <input type="email" id="sign-in-email" value={email} onChange={getEmail}/>
        <label htmlFor="sign-in-password">Password</label>
        <input type="password" value={password} onChange={getPassword}/>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
