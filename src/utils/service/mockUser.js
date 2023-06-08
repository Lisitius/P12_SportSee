import {
  users,
  userSessions,
  userPerformance,
  userActivity,
} from "../../mockApi/mockApi";

/**
 * Retrieves user information from mock data.
 *
 * @param {number} userId - User ID.
 * @returns {object} User information.
 * @throws {Error} If user not found in mock data.
 */
export const getUserDataFromMock = (userId) => {
  try {
    const mockUser = users.find((user) => user.data.id === Number(userId));

    if (mockUser) {
      return mockUser.data;
    } else {
      throw new Error("Utilisateur non trouvé dans les données mock");
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get user sessions from mock data.
 *
 * @param {number} userId - User ID.
 * @returns {object} User sessions.
 * @throws {Error} If user not found in mock data.
 */
export const getUserSessionsFromMock = (userId) => {
  try {
    const mockSessions = userSessions.find(
      (session) => session.data.userId === Number(userId)
    );

    if (mockSessions) {
      return mockSessions.data;
    }

    throw new Error("Utilisateur non trouvé dans les données mock");
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get user performance from mock data.
 *
 * @param {number} userId - User ID.
 * @returns {object} User performance.
 * @throws {Error} If user not found in mock data.
 */
export const getUserPerformanceFromMock = (userId) => {
  try {
    const mockPerformance = userPerformance.find(
      (performance) => performance.data.userId === Number(userId)
    );

    if (mockPerformance) {
      return mockPerformance.data;
    }

    throw new Error("Utilisateur non trouvé dans les données mock");
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetch user activity from mock data.
 *
 * @param {number} userId - User ID.
 * @returns {object} User activity.
 * @throws {Error} If user not found in mock data.
 */
export const getUserActivityFromMock = (userId) => {
  try {
    const mockActivity = userActivity.find(
      (activity) => activity.data.userId === Number(userId)
    );

    if (mockActivity) {
      return mockActivity.data;
    }

    throw new Error("Utilisateur non trouvé dans les données mock");
  } catch (error) {
    console.error(error);
  }
};
