import { BASE_URL } from "./action-creators/config";

export const fetchDoctorsList = async (speciality) => {
  try {
    const url = `${BASE_URL}/doctor/getalldoctors?find=${speciality}`;
    const response = await fetch(url, {
      method: "GET",
    });

    console.log(response.status);
    const jsonData = await response.json();

    if (!jsonData.result) {
      throw new Error("No data found.");
    } else {
      console.log("yeta");
      console.log(jsonData);
      console.log("yeta");
      return jsonData;
    }
  } catch (error) {
    // console.error("Error fetching doctors:", error);
    throw Error(error.message);
  }
};
