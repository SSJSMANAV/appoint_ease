export const fetchDoctorsList = async (speciality) => {
  try {
    const url = `http://192.168.101.6:3009/doctor/getalldoctors?find=${speciality}`;
    const response = await fetch(url, {
      method: "GET",
    });

    console.log(response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      const jsonData = await response.json();
      // console.log(jsonData);
      return jsonData;
    }
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};
