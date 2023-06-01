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
    // Asynchronous function to retrieve user data.
    const fetchUsers = async () => {
      const userIds = [12, 18];
      const fetchedUsers = [];

      // For each user ID in userIds, fetches the user data and adds it to fetchedUsers.
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
