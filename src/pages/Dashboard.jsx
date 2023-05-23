import "../sass/pages/_dashboard.scss";
import React from "react";
import Hello from "../components/hello/Hello";
import UserActivity from "../components/charts/UserActivity";
import UserAverageSession from "../components/charts/UserAverageSession";
import UserRadar from "../components/charts/UserRadar";
import UserScore from "../components/charts/UserScore";
import RightElement from "../components/rightElement/RightElement";

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
      <div className="dashboard__ossekour">
        <div className="dashboard__charts">
          <UserActivity />
          <div className="dashboard__charts triple">
            <span className="chart">
              <UserAverageSession />
            </span>
            <span className="chart">
              <UserRadar />
            </span>
            <span className="chart">
              <UserScore />
            </span>
          </div>
        </div>
        <div className="dashboard__elements">
          <RightElement />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
