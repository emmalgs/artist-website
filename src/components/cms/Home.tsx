import AdminHeader from "./AdminHeader";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";
import { auth, db } from "../../services/firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

const Home = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [allArt, setAllArt] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    const artdb = ref(db, "paintings/");
    const unSubscribe = onValue(
      artdb,
      (snapshot) => {
        const data = snapshot.val();
        const artList = [];
        for (let id in data) {
          artList.push({ id, ...data[id] });
        }
        setAllArt(artList);
      },
      (error) => {
        console.log(error.message);
      }
    );
    return () => unSubscribe();
  }, []);
  console.log(allArt);

  return (
    <div>
      <AdminHeader user={auth.currentUser} />
      {user ? <AdminDashboard artworks={allArt} /> : <Login />}
    </div>
  );
};

export default Home;
