import AdminHeader from "./AdminHeader";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";
import { auth } from "../../services/firebase";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

const Home = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <AdminHeader user={auth.currentUser}/>
      {user ? <AdminDashboard /> : <Login />}
    </div>
  );
};

export default Home;
