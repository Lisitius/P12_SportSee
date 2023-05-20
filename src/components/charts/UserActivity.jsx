import "../../sass/components/_userActivity.scss";
import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import useActivityData from "../../hooks/useActivityData";

/**
 * Component to display user activity.
 * It uses the useActivityData custom hook to retrieve user activity data.
 *
 * @component
 * @returns {ReactNode} Returns BarChart component with user activity data.
 */

const UserActivity = () => {
  const data = useActivityData();

  return (
    <div className="barChart">
      <h2 className="barChart__title">Activité quotidienne</h2>
      <BarChart
        width={835}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend
          className="legend"
          iconType="circle"
          iconSize={8}
          align="right"
          verticalAlign="top"
          formatter={(value) => (
            <span className="barChart__textColorLegend">{value}</span>
          )}
          margin={{ top: 0, right: 0, left: 0, bottom: 100 }}
        />
        <Bar
          barSize={7}
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282d30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          barSize={7}
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default UserActivity;
