export const fetchMyAppointments = async (token) => {
  try {
    const url = `http://localhost:3009/appointment/get-appointment`;

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
