import { AdminHeaderProps } from "../../../types";
import Logout from "./Logout";

const AdminHeader: React.FC<AdminHeaderProps> = ({ user }) => {
  return (
    <div className="fixed bg-white shadow-md w-full p-4">
      <div className="flex w-full justify-between">
        <h1 className="text-lg text-stone-500 w-full m-auto font-bold">{user ? `Welcome back, ${user.email}` : ""}</h1>
        {user ? <Logout /> : <p>Please login to continue</p>}
      </div>
    </div>
  );
};

export default AdminHeader;
