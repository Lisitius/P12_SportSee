import axios from "axios";
import { users } from "../mockApi/mockApi";

/**
 * Retrieves user information.
 *
 * @async
 * @function
 * @name getUser
 *
 * @param {number} userId - The user ID to retrieve.
 *
 * @returns {Promise<Object[]|Object>} A promise resolved with user information if successful, otherwise an array with all user data.
 *
 * @throws {Error} An error is thrown if the API call fails and the mock usage does not find the user.
 */
export const getUser = async (userId) => {
  try {
    if (userId) {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      return response.data;
    } else {
      return users.map((user) => user.data);
    }
  } catch (error) {
    console.error(error);
    if (userId) {
      const user = users.find((user) => user.data.id === userId);
      if (user) {
        return user.data;
      } else {
        throw new Error(
          "Échec de l'appel à l'API et impossible d'utiliser le mock."
        );
      }
    } else {
      return users.map((user) => user.data);
    }
  }
};
