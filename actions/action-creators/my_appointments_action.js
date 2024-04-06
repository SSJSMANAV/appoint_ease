import { BASE_URL } from "./config";

export const fetchMyAppointments = async (token) => {
  try {
    const url = `${BASE_URL}/appointment/get-appointment`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    if (response.status === 200) {
      console.log('all good');
      console.log(jsonData);
      return jsonData;
    } else {
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};
