import { useEffect, useState } from "react";
import { getUserDataFromApi } from "../utils/service/apiUser";
import { getUserDataFromMock } from "../utils/service/mockUser";

/**
 * Custom hook to fetch data from multiple users.
 *
 * This hook retrieves data from users with IDs 12 and 18.
 * User data can be retrieved either from an API or from a mock dataset,
 * depending on the 'useMock' parameter.
 *
 * If an error occurs while retrieving a user's data
 * (for example, if the user is not found), an error is logged in the console.
 *
 * @returns {Array} An array containing user data, or an empty array if the data is not yet loaded.
 */
export const useAccountData = (useMock = false) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userIds = [12, 18];
      const fetchedUsers = [];

      for (const id of userIds) {
        try {
          const userData = useMock
            ? await getUserDataFromMock(id)
            : await getUserDataFromApi(id);
          fetchedUsers.push(userData);
        } catch (error) {
          console.error(
            `Erreur lors de la récupération des données de l'utilisateur: ${error.message}`
          );
        }
      }

      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, [useMock]);

  return users;
};
