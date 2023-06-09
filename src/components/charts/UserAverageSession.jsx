import "../../sass/components/_userAverageSession.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useSessionsData from "../../hooks/useSessionsData";

/**
 * React component to display the average duration of a user's sessions.
 * Uses useSessionsData custom hook to retrieve data.
 *
 * @returns {ReactNode} Returns a LineChart component with user session data.
 */
const UserAverageSession = () => {
  const data = useSessionsData();

  /**
   * Component to customize chart tooltip.
   *
   * @param {boolean} active - Indicates whether the tooltip is active.
   * @param {Object[]} payload - Tooltip data.
   * @returns {ReactNode} Returns a custom tooltip or null.
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="lineContainer__Tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="lineContainer">
      <div className="lineContainer__title">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 40,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={40}
            tickCount={7}
            tick={{ fill: "#fff", opacity: "0.4", fontSize: 10 }}
            padding={{ left: 10, right: 10 }}
            minTickGap={1}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            type="number"
            domain={["dataMin", "dataMax + 30"]}
            hide="true"
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFF"
            strokeWidth={1}
            dot={false}
            activeDot={{
              fill: "#FFF",
              r: 5,
              strokeWidth: 10,
              strokeOpacity: 0.4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserAverageSession;
