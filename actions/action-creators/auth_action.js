// import { authSliceActions } from "../slices/auth_slice";
// import currentUser from "../constants";
// Your code files
import { BASE_URL } from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const registerPatient = async (patient) => {
  console.log("register patient");
  console.log(patient);
  const url = `http://${BASE_URL}:3009/user/signup`;

  const imageFile = new File([patient.imageFile], patient.imageFile.name);
  const formData = new FormData();

  formData.append("name", patient.username);
  formData.append("email", patient.email);
  formData.append("address", patient.address);
  formData.append("dob", patient.dob);
  formData.append("password", patient.password);
  formData.append("image", imageFile);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {},
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log(jsonData);

    if (response.status === 200) {
      localStorage.setItem("token", jsonData.token);
      localStorage.setItem("role", jsonData.result.role);
      localStorage.setItem("user", JSON.stringify(jsonData.result));
      return jsonData;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};

export const registerDoctorRequest = async (doctorData, token) => {
  console.log(doctorData.speciality);
  console.log(doctorData);
  const url = `http://${BASE_URL}:3009/user/applyasdoctor`;

  const formData = new FormData();
  for (let i = 0; i < doctorData.education.length; i++) {
    formData.append(
      `education[${i}][instituteName]`,
      doctorData.education[i].instituteName
    );
    formData.append(`education[${i}][grade]`, doctorData.education[i].grade);
  }

  for (let i = 0; i < doctorData.imageFiles; i++) {
    formData.append("document", doctorData.imageFiles[i]);
  }

  doctorData.imageFiles.forEach((file, index) => {
    formData.append("document", file);
  });
  formData.append("specialization", doctorData.speciality);
  formData.append("experience", doctorData.experience);
  formData.append("hospital", doctorData.currentlyWorkingAt);

  formData.append("location[latitude]", doctorData.location.latitude);
  formData.append("location[longitude]", doctorData.location.longitude);

  try {
    console.log("here");
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log(jsonData);

    if (response.status === 200) {
      return jsonData.message;
    } else {
      console.log(jsonData.message);
      throw Error(jsonData.message);
    }
  } catch (e) {
    console.log("error");
    console.log(e.message);
    throw Error(e.message);
  }
};

export const loginPatient = async (email, password) => {
  console.log(email);
  console.log(password);
  const url = `${BASE_URL}/user/login`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log("login data");
    console.log(jsonData);
    if (response.status === 200) {
      await AsyncStorage.setItem("token", jsonData.token);
      console.log("tada");
      return jsonData;
    } else {
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw Error(e.message);
  }
};

// export const getLoggedInState = () => {
//   return (dispatch) => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");
//     const userData = localStorage.getItem("user");
//     const user = JSON.parse(userData);
//     console.log("get loggedIn state.");
//     console.log(token);
//     console.log(user);
//     console.log("get loggedIn state.");

//     if (!token) {
//       console.log("bad");
//       dispatch(
//         authSliceActions.replaceLoggedInState({
//           loggedIn: false,
//           role: null,
//           user: null,
//           token: null,
//         })
//       );
//     } else {
//       console.log("good");
//       dispatch(
//         authSliceActions.replaceLoggedInState({
//           loggedIn: true,
//           role: role,
//           user: user,
//           token: token,
//         })
//       );
//     }
//   };
// };
