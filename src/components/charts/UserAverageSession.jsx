import "../../sass/components/_userAverageSession.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useSessionsData from "../../hooks/useSessionsData";

const UserAverageSession = () => {
  const data = useSessionsData();

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
            top: 40,
            right: 0,
            left: 0,
            bottom: 40,
          }}
        >
          <XAxis
            textAnchor="start"
            sclaeToFit="true"
            interval={0}
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={40}
            // textAnchor="middle"
            tick={{ fill: "#fff", opacity: ".4", fontSize: 10 }}
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
