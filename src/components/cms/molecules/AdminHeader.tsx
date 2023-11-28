import { AdminHeaderProps } from '../../../types';
import Logout from './Logout';

const AdminHeader: React.FC<AdminHeaderProps> = ({ user }) => {
  return (
    <div>
      {user ? <Logout /> : <p>Please login to continue</p>}
    </div>
  );
};

export default AdminHeader;