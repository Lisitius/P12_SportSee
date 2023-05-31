import { useState, useEffect } from "react";
import { getUserActivity } from "../service/apiActivity";
import { useParams, useNavigate } from "react-router-dom";

const useActivityData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserActivity(id);

        const numberData = result.sessions.map((session, index) => ({
          ...session,
          day: index + 1,
        }));

        setData(numberData);
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

export default useActivityData;
