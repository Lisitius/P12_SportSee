import { useState, useEffect } from "react";
import { getUserSessions } from "../service/apiSessions";
import { useParams, useNavigate } from "react-router-dom";

const useSessionsData = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const dayOfTheWeek = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
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
  }, [id, navigate]);

  return data;
};

export default useSessionsData;
