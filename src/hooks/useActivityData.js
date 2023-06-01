import { useState, useEffect } from "react";
import { getUserActivity } from "../service/apiActivity";
import { useParams, useNavigate } from "react-router-dom";

/**
 * A custom hook to retrieve activity data for a specific user
 * @returns {Array} The list of the user's daily activity sessions.
 */
const useActivityData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams(); // Get the id from the url
  const navigate = useNavigate();

  useEffect(() => {
    // Asynchronous function to retrieve daily user activity data.
    const fetchData = async () => {
      try {
        // Makes a request to the API to retrieve user activity data.
        const result = await getUserActivity(id);

        // Transforms the received data to transform the date into a number.
        const numberData = result.sessions.map((session, index) => ({
          ...session,
          day: index + 1,
        }));

        setData(numberData);
      } catch (err) {
        // If the user is not found, redirects to the 404 page.
        if (err.message === "Utilisateur non trouvé dans les données mock") {
          navigate("/404");
        }
      }
    };

    // Call of the fetchData function when mounting the component or when 'id' changes.
    fetchData();
  }, [id, navigate]);

  return data;
};

export default useActivityData;
