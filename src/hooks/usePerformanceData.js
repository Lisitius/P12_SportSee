import { useState, useEffect, useContext } from "react";
import { getUserPerformanceFromApi } from "../utils/service/apiUser";
import { getUserPerformanceFromMock } from "../utils/service/mockUser";
import { useParams, useNavigate } from "react-router-dom";
import { MockDataContext } from "../utils/context/MockDataContext";

/**
 * Custom hook to retrieve a user's performance data.
 *
 * This hook retrieves a user's performance data based on their id.
 * Performance can be retrieved either from an API or from a mock dataset,
 * depending on the 'useMock' context.
 *
 * If an error occurs during performance fetching (for example, if the user is not found),
 * the user is redirected to a 404 error page.
 *
 * @returns {Array} An array containing the user's performance data, or an empty array if the data is not yet loaded.
 */
const usePerformanceData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { useMock } = useContext(MockDataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPerformance = useMock
          ? await getUserPerformanceFromMock(id)
          : await getUserPerformanceFromApi(id);

        setData(userPerformance);
      } catch (err) {
        navigate("/404");
      }
    };

    fetchData();
  }, [id, navigate, useMock]);

  return data;
};

export default usePerformanceData;
