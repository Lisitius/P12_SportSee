/**
 * @module getUserSessions
 */

import axios from "axios";
import { userSessions } from "../mockApi/mockApi";

/**
 * Retrieves a user's average sessions from their ID.
 *
 * @async
 * @function
 * @param {string|number} userId - user ID.
 * @returns {Promise<Object>} The average user sessions.
 * @throws {Error} Raises an error if the user is not found in the mock data.
 */
export const getUserSessions = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    return response.data.data;
  } catch (error) {
    const mockSessions = userSessions.find(
      (session) => session.data.userId === Number(userId)
    );
    if (mockSessions) {
      return mockSessions.data;
    }

    throw new Error("Utilisateur non trouvé dans les données mock");
  }
};
