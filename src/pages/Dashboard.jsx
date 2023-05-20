import "../sass/pages/_dashboard.scss";
import React from "react";
import Hello from "../components/hello/Hello";
import UserActivity from "../components/charts/UserActivity";

/**
 * A component that displays a specific user's dashboard.
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
      <UserActivity />
    </div>
  );
};

export default Dashboard;
