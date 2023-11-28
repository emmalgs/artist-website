import Logout from "./Logout";

const AdminHeader = ({ user }) => {
  return (
    <div>
      { user ? <Logout /> : <p>Please login to continue</p>}
    </div>
  );
};

export default AdminHeader;