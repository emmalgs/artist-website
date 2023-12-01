import AllContent from "../organisms/AllContent";


const AdminDashboard = ({ content }) => {
  return (
    <div className="w-4/5 m-auto">
      <AllContent content={content} />
    </div>
  );
};

export default AdminDashboard;
