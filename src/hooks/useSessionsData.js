import { useState, useEffect, useContext } from "react";
import { getUserSessionsFromApi } from "../utils/service/apiUser";
import { getUserSessionsFromMock } from "../utils/service/mockUser";
import { useParams, useNavigate } from "react-router-dom";
import { MockDataContext } from "../utils/context/MockDataContext";

/**
 * Custom hook to retrieve user sessions.
 *
 * This hook retrieves a user's sessions based on their id and transforms
 * the day of the week numbers in characters (for example, 1 becomes 'L', 2 becomes 'M', etc.).
 * Sessions can be retrieved either from an API or from a mock dataset,
 * depending on the 'useMock' context.
 *
 * If an error occurs while retrieving sessions (for example, if the user is not found),
 * the user is redirected to a 404 error page.
 *
 * @returns {Array} An array of transformed user sessions, or undefined if the data is not yet loaded.
 */
const dayOfTheWeek = ["L", "M", "M", "J", "V", "S", "D"];

const useSessionsData = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const { useMock } = useContext(MockDataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userSession = useMock
          ? await getUserSessionsFromMock(id)
          : await getUserSessionsFromApi(id);

        const transformDay = userSession.sessions.map((session) => ({
          ...session,
          day: dayOfTheWeek[session.day - 1],
        }));

        setData(transformDay);
      } catch (err) {
        navigate("/404");
      }
    };

    fetchData();
  }, [id, useMock, navigate]);

  return data;
};

export default useSessionsData;
