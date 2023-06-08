import { useEffect, useState, useContext } from "react";
import { getUserDataFromApi } from "../utils/service/apiUser";
import { getUserDataFromMock } from "../utils/service/mockUser";
import { MockDataContext } from "../utils/context/MockDataContext";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook to retrieve user information to display in Hello component.
 *
 * @param {string} userId - The user ID to retrieve.
 * @returns {object} The user information for the Hello component.
 */
export const useHelloData = (userId) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { useMock } = useContext(MockDataContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = useMock
          ? await getUserDataFromMock(userId)
          : await getUserDataFromApi(userId);
        setUser(userData.userInfos);
      } catch (err) {
        setError(err);
        if (err.message === "Utilisateur non trouvé dans les données mock") {
          navigate("/404");
        }
      }
    };

    fetchUser();
  }, [userId, useMock, navigate]);

  if (error) {
    return { error };
  }

  return user;
};

/**
 * Custom hook to retrieve user nutrients.
 *
 * @param {string} userId - The user ID to retrieve.
 * @returns {object} An object containing the user's nutrients
 */
export const useKeyData = (userId) => {
  const [user, setUser] = useState({});
  const { useMock } = useContext(MockDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = useMock
          ? await getUserDataFromMock(userId)
          : await getUserDataFromApi(userId);
        setUser(userData.keyData);
      } catch (err) {
        if (err.message === "Utilisateur non trouvé dans les données mock") {
          navigate("/404");
        }
      }
    };

    fetchUser();
  }, [userId, useMock, navigate]);

  return user;
};

/**
 * Custom hook to retrieve user objective score.
 *
 * @param {string} userId - The user ID to retrieve.
 * @returns {object} An object containing the objective score of the user.
 */
export const useScoreData = (userId) => {
  const [user, setUser] = useState({});
  const { useMock } = useContext(MockDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = useMock
          ? await getUserDataFromMock(userId)
          : await getUserDataFromApi(userId);
        setUser(userData);
      } catch (err) {
        navigate("/404");
      }
    };

    fetchUser();
  }, [userId, useMock, navigate]);

  return user;
};
