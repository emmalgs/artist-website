import AdminHeader from "../molecules/AdminHeader";
import AdminDashboard from "./AdminDashboard";
import { auth, db } from "../../../services/firebase";
import firebase from "firebase/compat/app";
import Login from "./Login";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [allArt, setAllArt] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    const artdb = ref(db, "paintings/");
    const unSubscribe = onValue(
      artdb,
      (snapshot) => {
        const data = snapshot.val();
        setAllArt(data);
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
      <div className="pt-20">{user ? <AdminDashboard artworks={allArt} /> : <Login />}</div>
    </div>
  );
};

export default Home;
