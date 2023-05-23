/**
 * @module useHelloData
 */

import { useEffect, useState } from "react";
import { getUserData } from "../service/apiUser";

/**
 * A custom hook to retrieve user-specific data
 * for the Hello component.
 *
 * @param {number} userId - The user ID to retrieve.
 * @returns {Object} The user information for the Hello component.
 */

export const useHelloData = (userId) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserData(userId);

      setUser(userData.userInfos);
    };

    fetchUser();
  }, [userId]);

  return user;
};

export const useKeyData = (userId) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserData(userId);

      setUser(userData.keyData);
    };

    fetchUser();
  }, [userId]);

  return user;
};
