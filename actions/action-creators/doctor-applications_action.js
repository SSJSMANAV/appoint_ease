export const fetchDoctorApplications = async (token, docType) => {
  console.log(docType);
  try {
    const url = `http://localhost:3009/admin/requesdoctorList?state=${docType.toLowerCase()}`;

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
      return jsonData;
    } else {
      throw Error(jsonData.message);
    }
  } catch (e) {
    console.log(e.message);
    throw Error(e.message);
  }
};

export const changeApplicantVerifiedState = async (id, token, docType) => {
  console.log(id);
  try {
    const url = `http://localhost:3009/admin/approvedoctor/${id}?state=${docType}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    console.log(e.message);
    throw Error(e.message);
  }
};
