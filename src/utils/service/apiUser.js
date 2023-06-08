import axios from "axios";

/**
 * Fetch user information from API.
 *
 * @param {number} userId - User ID.
 * @returns {Promise<object>} User information.
 * @throws {Error} If an error occurs while requesting the API.
 */
export const getUserDataFromApi = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetch average user sessions from API.
 *
 * @param {number} userId - User ID.
 * @returns {Promise<object>} The average user sessions.
 * @throws {Error} If an error occurs while requesting the API.
 */
export const getUserSessionsFromApi = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetch user performance from API.
 *
 * @param {number} userId - User ID.
 * @returns {Promise<object>} The performance of the user.
 * @throws {Error} If an error occurs while requesting the API.
 */
export const getUserPerformanceFromApi = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/performance`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetch user activity from API.
 *
 * @param {number} userId - User ID.
 * @returns {Promise<object>} User activity.
 * @throws {Error} If an error occurs while requesting the API.
 */
export const getUserActivityFromApi = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/activity`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
