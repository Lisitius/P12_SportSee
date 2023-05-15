import "../sass/pages/_dashboard.scss";
import React from "react";
import Hello from "../components/hello/Hello";

/**
 * Un composant qui affiche le tableau de bord d'un utilisateur spécifique.
 *
 * @component
 * @example
 * return (
 *   <Dashboard />
 * )
 */
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Hello />
    </div>
  );
};

export default Dashboard;
