import { useState } from "react";
import { auth } from "../../../services/firebase";
import Button from "../atoms/Button";

const Logout = () => {
  const [logoutMessage, setLogoutMessage] = useState("");

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("loggedIn");
        setLogoutMessage("Logged out successfully");
      })
      .catch((error: { message: string }) => {
        setLogoutMessage(`Error: ${error.message}`);
      });
  };
  return (
    <div>
      <Button action={handleLogout} text="Logout" />
      <div>{logoutMessage}</div>
    </div>
  );
};

export default Logout;
