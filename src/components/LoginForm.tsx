import axios from "axios";
import { useState } from "react";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalData = {
      email,
      password,
    };

    axios
      .post("http://localhost:3000/users/login", finalData)
      .then((response) => {
        alert("User logged in successfully!");
      })
      .catch((error) => {
        console.log("error => ", error);
        const errors = error?.response?.data?.message || "An error occurred";
        alert(errors);
      });
  };
  return (
    <>
      <h1>Login Form</h1>
      <p>Login to Continue</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="search_email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="search_password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default LoginForm;
