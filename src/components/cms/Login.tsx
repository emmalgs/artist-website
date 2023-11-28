import { FormEvent, useState } from "react";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginMessage(`Welcome ${userCredential.user.email}`);
      })
      .catch((error: { message: string }) => {
        setLoginMessage(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>{loginMessage}</div>
    </div>
  );
};

export default Login;
