// import { fetch } from "react-native";

export const fetchDoctorsList = async (speciality) => {
  try {
    const url = `http://192.168.101.2:3009/doctor/getalldoctors?find=${speciality}`;
    const response = await fetch(url, {
      method: "GET",
      // Optionally, add headers here if needed
    });

    // Check if response is ok (status 2xx)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData.result;
  } catch (error) {
    // Log and re-throw the error for further handling
    console.error("Error fetching doctors:", error);
    throw error;
  }
};
