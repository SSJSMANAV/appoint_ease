import { BASE_URL } from "./config";

export const fetchDoctorsList = async (speciality) => {
  console.log(speciality);
  try {
    const url = `${BASE_URL}/doctor/getalldoctors?find=${speciality}`;

    const response = await fetch(url, {
      method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
    });
    console.log(response.status);
    const jsonData = await response.json();
    if (response.status === 200) {
      console.log(jsonData);
      return jsonData.result;
    } else {
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};

export const fetchDoctorsByName = async (name, token) => {
  console.log(name);
  try {
    const url = `${BASE_URL}/doctor/serchdoctor?name=${name}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    if (response.status === 200) {
      console.log(jsonData);
      console.log(jsonData.result);
      return jsonData.result;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};

export const fetchDoctorById = async (id) => {
  console.log(id);
  try {
    const url = `http://${BASE_URL}:3009/doctor/getdoctorbyid/${id}`;

    const response = await fetch(url, {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    console.log(response.status);
    const jsonData = await response.json();
    if (response.status === 200) {
      console.log(jsonData);
      return jsonData;
    } else {
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};

export const fetchSchedules = async (date, token, doctorId) => {
  console.log("fetch Schedule");
  console.log(date);
  console.log(doctorId);
  console.log(token);
  try {
    const url = `${BASE_URL}/schedule/get-all-schedule/${doctorId}?date=${date}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    if (response.status === 200) {
      console.log("all good");
      console.log(jsonData);
      return jsonData;
    } else {
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};
