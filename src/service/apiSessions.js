/**
 * @module apiSessions
 */

import axios from "axios";
import { userSessions } from "../mockApi/mockApi";

/**
 * Fetch a user's session data from an API.
 * If the API request fails, the function tries to retrieve the data from an API simulation (mock).
 *
 * @param {string} userId - The user id for which sessions should be retrieved.
 * @returns {Promise<Object>} A promise that resolves to an object containing the user's sessions.
 * @throws {Error} An error is thrown if the API request fails and the user cannot be found in the mock data.
 */

export const getUserSessions = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    return response.data.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de l'utilisateur :",
      error
    );
    const mockSessions = userSessions.find(
      (session) => session.data.id === Number(userId)
    );
    if (mockSessions) {
      return mockSessions.data;
    }
    throw new Error("Utilisateur non trouvé dans les données mock");
  }
};
