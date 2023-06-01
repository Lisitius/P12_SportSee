import axios from "axios";
import { users } from "../mockApi/mockApi";

/**
 * Retrieves a user's data from their ID.
 *
 * @async
 * @function
 * @param {string|number} userId - user ID.
 * @returns {Promise<Object>} User data.
 * @throws {Error} Raises an error if the user is not found in the mock data.
 */
export const getUserData = async (userId) => {
  try {
    // Try to get user data from the API.
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    return response.data.data;
  } catch (err) {
    // If API call fails, use mock data.
    const mockUser = users.find((user) => user.data.id === Number(userId));
    if (mockUser) {
      return mockUser.data;
    }
    // If the user is not found in the mock data, raise an error.
    throw new Error("Utilisateur non trouvé dans les données mock");
  }
};
