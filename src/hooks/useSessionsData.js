import { useState, useEffect } from "react";
import { getUserSessions } from "../service/apiSessions";
import { useParams } from "react-router";

/**
 * useSessionsData is a custom hook that retrieves session data for a specific user
 * and transforms the day numbers into days of the week.
 *
 * @returns {Object[]} data - An array of session objects with the day number turned into the day of the week.
 * @property {string} id - User ID, retrieved from URL parameters.
 * @property {string[]} dayOfTheWeek - An array that represents the days of the week.
 */
const useSessionsData = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const dayOfTheWeek = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    const fetchData = async () => {
      const userSession = await getUserSessions(id);

      const transformDay = userSession.sessions.map((session) => ({
        ...session,
        day: dayOfTheWeek[session.day - 1],
      }));

      setData(transformDay);
    };

    fetchData();
  }, [id]);

  return data;
};

export default useSessionsData;
