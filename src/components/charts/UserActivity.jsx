import "../../sass/components/_userActivity.scss";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import useActivityData from "../../hooks/useActivityData";

/**
 * Component for chart tooltip customization.
 *
 * @param {boolean} active - If the tooltip is active.
 * @param {Object[]} payload - Tooltip data.
 * @returns {ReactNode} Returns custom tooltip or null.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="barChart__toolTip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Component to display daily user activity
 * Uses useActivityData custom hook to retrieve data.
 *
 * @returns {ReactElement} The user activity component
 */
const UserActivity = () => {
  const data = useActivityData();

  return (
    <div className="barChart">
      <div className="barChart__title">Activité quotidienne</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={8}
          barSize={7}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tickCount={7}
            dataKey="day"
          />
          <YAxis
            yAxisId="kilogram"
            type="number"
            orientation="right"
            axisLine={false}
            tickLine={false}
            dataKey="kilogram"
            stroke="#9B9EAC"
            domain={["dataMin -5", "dataMax +15"]}
          />
          <YAxis
            yAxisId="calories"
            type="number"
            domain={["dataMin -160", "dataMax +15"]}
            hide
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              top: 0,
              right: 80,
              marginBottom: "20px",
            }}
            formatter={(value) => (
              <span className="barChart__textColorLegend">{value}</span>
            )}
          />
          <Bar
            barSize={7}
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282d30"
            radius={[10, 10, 0, 0]}
            yAxisId="kilogram"
          />
          <Bar
            barSize={7}
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            yAxisId="calories"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivity;
