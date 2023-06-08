import { useState, useEffect, useContext } from "react";
import { getUserActivityFromApi } from "../utils/service/apiUser";
import { getUserActivityFromMock } from "../utils/service/mockUser";
import { useParams, useNavigate } from "react-router-dom";
import { MockDataContext } from "../utils/context/MockDataContext";

/**
 * Custom hook to retrieve user activity data.
 *
 * This hook retrieves a user's activity data based on their ID.
 * Activity data can be retrieved either from an API or from a mock dataset,
 * depending on the 'useMock' context.
 *
 * The retrieved data is then transformed: for each activity session, we add a 'day' attribute that corresponds
 * to the session index in the array + 1.
 *
 * If an error occurs while retrieving activity data (for example, if the user is not found),
 * the user is redirected to a 404 error page.
 *
 * @returns {Array} An array containing user activity data, or an empty array if the data is not yet loaded.
 */
const useActivityData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { useMock } = useContext(MockDataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = useMock
          ? await getUserActivityFromMock(id)
          : await getUserActivityFromApi(id);

        const numberData = result.sessions.map((session, index) => ({
          ...session,
          day: index + 1,
        }));

        setData(numberData);
      } catch (err) {
        navigate("/404");
      }
    };

    fetchData();
  }, [id, navigate, useMock]);

  return data;
};

export default useActivityData;
