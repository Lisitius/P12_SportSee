import { useState, useEffect } from "react";
import { getUserPerformance } from "../service/apiPerformance";
import { useParams, useNavigate } from "react-router-dom";

const usePerformanceData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPerformance = await getUserPerformance(id);
        setData(userPerformance);
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

export default usePerformanceData;
