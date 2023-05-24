import axios from "axios";
import { userPerformance } from "../mockApi/mockApi";

export const getUserPerformance = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/performance`
    );
    return response.data.data;
  } catch (error) {
    console.error("Impossible de récupéré les données venant de l'api");
    const performance = userPerformance.find(
      (performance) => performance.data.userId === Number(userId)
    );
    if (performance) {
      return performance.data;
    } else {
      throw new Error(
        "Échec de l'appel à l'API et impossible d'utiliser le mock."
      );
    }
  }
};
