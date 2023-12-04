import AdminHeader from "../molecules/AdminHeader";
import AdminDashboard from "./AdminDashboard";
import { auth, db } from "../../../services/firebase";
import firebase from "firebase/compat/app";
import Login from "./Login";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import ImagesContainer from "../molecules/ImageModal";

const Home = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [data, setData] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    const artdb = ref(db, "/");
    const unSubscribe = onValue(
      artdb,
      (snapshot) => {
        const d = snapshot.val();
        setData(d);
      },
      (error) => {
        console.log(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  return (
    <div>
      <AdminHeader user={auth.currentUser} />
      <div className="pt-20">{user ? <AdminDashboard content={data} /> : <Login />}</div>
    </div>
  );
};

export default Home;
