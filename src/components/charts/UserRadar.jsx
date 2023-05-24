import "../../sass/components/_userRadar.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import usePerformanceData from "../../hooks/usePerformanceData";

const UserRadar = () => {
  const testData = usePerformanceData();
  // console.log(testData);

  const kinds = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ];

  const dataRadar = kinds.map((kind, index) => {
    return { kind, value: testData?.data?.[index]?.value };
  });

  console.log(dataRadar);

  return (
    <div className="radarContainer">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={75} data={dataRadar}>
          <PolarGrid radialLines={false} stroke="#fff" />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false}
            tickSize={4}
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
