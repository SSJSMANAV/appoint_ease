export const fetchDoctorsList = async (speciality) => {
  try {
    const url = `http://192.168.101.6:3009/doctor/getalldoctors?find=${speciality}`;
    const response = await fetch(url, {
      method: "GET",
    });

    console.log("no data in name");
    console.log(response.status);
    console.log("no data in name");
    const jsonData = await response.json();

    if (!jsonData.result) {
      throw new Error("No data found.");
    } else {
      console.log(jsonData);
      return jsonData;
    }
  } catch (error) {
    // console.error("Error fetching doctors:", error);
    throw Error(error.message);
  }
};
