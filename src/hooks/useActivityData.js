import { useState, useEffect } from "react";
import { getUserActivity } from "../service/apiActivity";
import { useParams } from "react-router-dom";

/**
 * Custom hook to retrieve and process user activity data.
 * It uses the user ID obtained from the URL to retrieve the correct activity data.
 *
 * @hook
 * @returns {Array} Returns an array of user activity data.
 */

const useActivityData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserActivity(id);

      const numberData = result.sessions.map((session, index) => ({
        ...session,
        day: index + 1,
      }));

      setData(numberData);
    };

    fetchData();
  }, [id]);

  return data;
};

export default useActivityData;
