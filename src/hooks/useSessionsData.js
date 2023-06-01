import { useState, useEffect } from "react";
import { getUserSessions } from "../service/apiSessions";
import { useParams, useNavigate } from "react-router-dom";

/**
 * A custom hook to retrieve user session data.
 *
 * @returns {Object} User session data.
 */
const useSessionsData = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const dayOfTheWeek = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    /**
     * Asynchronous function to retrieve data from user sessions.
     * Transforms the day number into a letter representing the day of the week.
     * In case of error, redirects to the 404 page.
     */
    const fetchData = async () => {
      try {
        const userSession = await getUserSessions(id);

        const transformDay = userSession.sessions.map((session) => ({
          ...session,
          day: dayOfTheWeek[session.day - 1],
        }));

        setData(transformDay);
      } catch (err) {
        if (err.message === "Utilisateur non trouvé dans les données mock") {
          navigate("/404");
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, navigate]);

  return data;
};

export default useSessionsData;
