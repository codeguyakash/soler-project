import axios from "axios";

const API_URL = "http://localhost:8000/api";
export const fetchSolarCalculators = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/solar-calculators/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching solar calculators:", error);
    throw error;
  }
};

export const createSolarCalculator = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/solar-calculators/, data`);
    return response.data;
  } catch (error) {
    console.error("Error creating solar calculator:", error);
    throw error;
  }
};
