import { useState, useEffect } from "react";
import { getUserPerformance } from "../service/apiPerformance";
import { useParams, useNavigate } from "react-router-dom";

/**
 * A custom hook to retrieve performance data for a specific user.
 *
 * @returns {Array} The list of user performances. (Cardio, energy, endurance etc...)
 */
const usePerformanceData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Asynchronous function to retrieve user performance data.
    const fetchData = async () => {
      try {
        // Make a request to the API to retrieve user performance data.
        const userPerformance = await getUserPerformance(id);

        setData(userPerformance);
      } catch (err) {
        // If the user is not found, redirect to the 404 page.
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
