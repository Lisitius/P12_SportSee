import axios from "axios";
import { userActivity } from "../mockApi/mockApi";

/**
 * Retrieves user activity information.
 *
 * @async
 * @function
 * @param {number} userId - The user ID to retrieve.
 * @returns {Promise<Object>} A promise resolved with user activity information if successful.
 * @throws {Error} An error is thrown if the API call fails and the simulated usage cannot find the user.
 */

export const getUserActivity = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/activity`
    );
    return response.data.data;
  } catch (error) {
    const activity = userActivity.find(
      (activity) => activity.data.userId === Number(userId)
    );
    if (activity) {
      return activity.data;
    } else {
      throw new Error(
        "Échec de l'appel à l'API et impossible d'utiliser le mock."
      );
    }
  }
};
