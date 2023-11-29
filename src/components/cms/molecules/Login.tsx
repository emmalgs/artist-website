import { auth } from "../../../services/firebase";
import Button from "../atoms/Button";
import FormInput from "../atoms/FormInput";
import { FormEvent, useState } from "react";
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
      <form onSubmit={handleLogin} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <FormInput
              type="email"
              name="email"
              placeholder="Your Email" />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <FormInput
              type="password"
              name="password"
              placeholder="Your Password" />
          </div>
        </div>
        <Button text="Login" type="submit" action="" />
      </form>
      <div>{loginMessage}</div>
    </div>
  );
};

export default Login;
