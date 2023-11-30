import { auth } from "../../../services/firebase";
import Form from "../molecules/Form";
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

  const inputs = [
    {
      name: "email",
      type: "email",
      text: "Email",
      placeholder: "Email",
    },
    {
      name: "password",
      type: "password",
      text: "Password",
      placeholder: "Password",
    },
  ];

  return (
    <div className="w-1/3 m-auto flex flex-col justify-center">
      <Form handleSubmit={handleLogin} buttonText="Login" sections={inputs} />
      <p>{loginMessage}</p>
      <p className="text-center text-gray-500 text-xs">
        &copy; 2023 Emma Gerigscott, Ladies IT Department. All rights reserved
      </p>
    </div>
  );
};

export default Login;
