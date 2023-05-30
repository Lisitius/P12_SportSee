/**
 * @module apiUser
 */

import axios from "axios";
import { users } from "../mockApi/mockApi";

/**
 * Retrieves user information.
 *
 * @param {number} userId - The user ID to retrieve.
 * @returns {Promise<Object>} A promise resolved with user information if successful.
 * @throws {Error} An error is thrown if the API call fails and the mocked use cannot find the user.
 */

export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    return response.data.data;
  } catch (err) {
    const mockUser = users.find((user) => user.data.id === Number(userId));
    if (mockUser) {
      return mockUser.data;
    }
    throw new Error("Utilisateur non trouvé dans les données mock");
  }
};
