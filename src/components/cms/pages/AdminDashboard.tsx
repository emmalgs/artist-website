import ContentHeader from "../organisms/ContentHeader";
import AllContent from "./AllContent";


const AdminDashboard = ({ content }) => {
  return (
    <div className="w-4/5 m-auto">
      <ContentHeader action="add" contentTitle="All Website Content"/>
      <AllContent content={content} />
    </div>
  );
};

export default AdminDashboard;
