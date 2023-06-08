import "../../sass/components/_userRadar.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import usePerformanceData from "../../hooks/usePerformanceData";

/**
 * Component to show average user performance in a graph
 * Uses usePerformanceData custom hook to retrieve performance data.
 *
 * @returns {ReactNode} Returns RadarChart component with user performance data.
 */
const UserRadar = () => {
  // Uses custom hook to retrieve performance data.
  const performance = usePerformanceData();

  // Lists all statistics name for the chart.
  const kinds = [
    "Intensité",
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
  ];

  // Transforms performance data into a format suitable for RadarChart.
  const dataRadar = kinds.map((kind, index) => {
    return { kind, value: performance?.data?.[index]?.value };
  });

  return (
    <div className="radarContainer">
      <ResponsiveContainer width="100%" height={233}>
        <RadarChart outerRadius={"65%"} data={dataRadar}>
          <PolarGrid radialLines={false} stroke="#fff" />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false}
            tickSize={10}
            stroke="#fff"
            fontSize={9}
          />
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.6}
            legendType="none"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRadar;
