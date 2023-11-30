import React from "react";
import AllArtCard from "../organisms/AllArtCard";
import { Artworks } from "../../../types";

const AdminDashboard: React.FC<Artworks> = ({ artworks }) => {
  return (
    <div className="w-4/5 m-auto">
      <AllArtCard artworks={artworks} />
    </div>
  );
};

export default AdminDashboard;
