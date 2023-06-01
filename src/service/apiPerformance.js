/**
 * @module getUserPerformance
 */

import axios from "axios";
import { userPerformance } from "../mockApi/mockApi";

/**
 * Retrieves a user's performance data from their ID.
 *
 * @async
 * @function
 * @param {string|number} userId - user ID.
 * @returns {Promise<Object>} User performance.
 * @throws {Error} Raises an error if the API call fails and the mock data cannot be used.
 */
export const getUserPerformance = async (userId) => {
  try {
    // Attempt to retrieve user performance data from the API.
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/performance`
    );
    return response.data.data;
  } catch (error) {
    // If API call fails, use mock data.
    const performance = userPerformance.find(
      (performance) => performance.data.userId === Number(userId)
    );
    // If user performance is found in mock data, return it.
    if (performance) {
      return performance.data;
    } else {
      // If the user is not found in the mock data, raise an error.
      throw new Error(
        "Échec de l'appel à l'API et impossible d'utiliser le mock."
      );
    }
  }
};
