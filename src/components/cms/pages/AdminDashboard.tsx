import { AdminDashboardProps } from "../../../types";
import AllContent from "./AllContent";

const AdminDashboard: React.FC<AdminDashboardProps> = ({ content }) => {
  return (
    <div className="w-4/5 m-auto">
      <AllContent content={content} />
    </div>
  );
};

export default AdminDashboard;
