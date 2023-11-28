import AdminHeader from "./AdminHeader";
import Login from "./Login";
import { auth } from "../../services/firebase";

const Home = () => {

  return (
    <div>
      <AdminHeader user={auth.currentUser}/>
      <h1>Admin Home</h1>
      {auth.currentUser ? <div>Admin content</div> : <Login />}
    </div>
  );
};

export default Home;
