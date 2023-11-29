import { AdminHeaderProps } from "../../../types";
import Logout from "./Logout";

const AdminHeader: React.FC<AdminHeaderProps> = ({ user }) => {
  return (
    <div className="fixed bg-amber-100 w-full p-4">
      <div className="flex w-full justify-between">
        <h1>{user ? `Welcome back, ${user.email}` : ""}</h1>
        {user ? <Logout /> : <p>Please login to continue</p>}
      </div>
    </div>
  );
};

export default AdminHeader;
