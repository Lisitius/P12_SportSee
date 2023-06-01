import React, { useEffect, useState } from "react";
import "../../sass/components/_userScore.scss";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { useParams } from "react-router-dom";
import { useScoreData } from "../../hooks/useUserData";
import Loading from "../../layouts/Loading";

/**
 * UserScore component to display a user's score in a radial bar chart.
 * Uses useScoreData custom hook to retrieve data.
 *
 * @returns {ReactNode} Returns RadialChart component with user data
 */
const UserScore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const user = useScoreData(id);
  // Multiplies user data by 100
  const score = (user.todayScore || user.score || 0) * 100;

  // Updates loading status when score data is available.
  useEffect(() => {
    if (score) {
      setIsLoading(false);
    }
  }, [score]);

  // Preparing data for the radial bar chart.
  const data = [
    {
      name: "Score",
      value: score,
    },
  ];

  // Displays a loading component while score data is retrieved.
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="scoreContainer">
      <div className="scoreContainer__title">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="83%"
          barSize={8}
          startAngle={90}
          endAngle={450}
          data={data}
          cx="55%"
          cy="45%"
        >
          <circle cx="55%" cy="40%" fill="white" r="80"></circle>
          <PolarAngleAxis
            type="number"
            dataKey="value"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="value" cornerRadius={10} fill="#ff0000" />
          <text
            x="55%"
            y="40%"
            textAnchor="middle"
            className="scoreContainer__score"
          >
            {score}%
          </text>
          <text
            x="55%"
            y="50%"
            textAnchor="middle"
            fill={"#74798C"}
            className="scoreContainer__your"
          >
            de votre
          </text>
          <text
            x="55%"
            y="60%"
            textAnchor="middle"
            fill={"#74798C"}
            className="scoreContainer__your"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserScore;
