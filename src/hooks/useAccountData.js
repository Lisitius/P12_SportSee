/**
 * @module useUserData
 */

import { useEffect, useState } from "react";
import { getUserData } from "../service/apiUser";

/**
 * A custom hook to retrieve user data.
 *
 * @returns {Array} The list of users.
 */

export const useAccountData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userIds = [12, 18]; // Insérer les IDs des utilisateurs ici
      const fetchedUsers = [];

      for (const id of userIds) {
        const userData = await getUserData(id);
        fetchedUsers.push(userData);
      }

      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  return users;
};
