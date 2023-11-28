import React from 'react';
import AllArtCard from '../molecules/AllArtCard';

interface Artwork {
  title: string;
  medium: string;
  size: string;
  price: number;
}

interface Artworks {
  [year: string]: {
    [artwork: string]: Artwork;
  };
}

interface AdminDashboardProps {
  artworks: Artworks;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ artworks }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>All Art</h2>
        <AllArtCard artworks={artworks} />
      </div>
    </div>
  );
};

export default AdminDashboard;
