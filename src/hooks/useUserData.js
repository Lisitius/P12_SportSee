import { useEffect, useState } from "react";
import { getUserData } from "../service/apiUser";
import { useNavigate } from "react-router-dom";

/**
 * A custom hook to retrieve user-specific data
 * for the Hello component.
 *
 * @param {number} userId - The user ID to retrieve.
 * @returns {Object} The user information for the Hello component.
 */

export const useHelloData = (userId) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserData(userId);
        setUser(userData.userInfos);
      } catch (err) {
        setError(err);
        if (err.message === "Utilisateur non trouvé dans les données mock") {
          navigate("/404");
        }
      }
    };

    fetchUser();
  }, [userId, navigate]);

  if (error) {
    return { error };
  }

  return user;
};

export const useKeyData = (userId) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserData(userId);
        setUser(userData.keyData);
      } catch (err) {
        if (err.message === "Utilisateur non trouvé dans les données mock") {
          navigate("/404");
        }
      }
    };

    fetchUser();
  }, [userId, navigate]);

  return user;
};

//score
export const useScoreData = (userId) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserData(userId);
        setUser(userData);
      } catch (err) {
        if (err.message === "Utilisateur non trouvé dans les données mock") {
          navigate("/404");
        }
      }
    };

    fetchUser();
  }, [userId, navigate]);

  return user;
};
