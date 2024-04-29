import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
  faUser,
  faSmileWink,
  faHouse,
  faPhoneFlip,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
// import { DocumentPicker } from "react-native-document-picker";
import * as DocumentPicker from "expo-document-picker";
import { registerPatient } from "../../actions/action-creators/auth_action";
import { Formik } from "formik";

const SignUp = () => {
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Hide the date picker after date selection
    setDateOfBirth(selectedDate || dateOfBirth);
  };

  const [image, setImage] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const route = useRoute();
  const { email } = route.params;

  const selectImage = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*", // Allow only images to be picked
      });

      if (!result.canceled) {
        // Document picked successfully
        console.log(result.canceled); //false
        console.log("Document picked:", result.assets[0]);
        setImage(result.assets[0]);
        // Display the picked image
      } else {
        // User cancelled the upload
        console.log(result.canceled); //true it is
        console.log("User cancelled the upload");
      }
    } catch (err) {
      // Error occurred
      console.log("Error:", err);
    }
  };

  return (
    <View className="flex-1 bg-slate-100 items-center justify-center">
      <View className="bg-slate-100 w-10/12   pb-6 ">
        <View className="items-center mb-6 ">
          {/* <Text className="text-2xl font-bold">AppointEase</Text> */}
          <TouchableOpacity className=" ">
            <Image
              className="w-60 h-20"
              source={require("../../images/appointEase.png")}
            />
          </TouchableOpacity>
        </View>
        {/* Main */}
        <Formik
          initialValues={{
            email: email,
            username: "",
            dateOfBirth: "",
            address: "",
            phoneNumber: "",
            password: "",
            image: null,
          }}
          onSubmit={async (values) => {
            console.log("idhar aaya");
            await registerPatient({
              ...values,
              imageFile: image,
              dob: new Date(),
            })
              .then(() => {
                navigation.navigate("Home");
                // navigare to home page
              })
              .catch((e) => {
                // toast (something went wrong)
                console.log(e.toString());
                console.log("something went wrong.");
              });
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View className="items-center">
              <View className=" flex-col w-10/12">
                <Text className="pl-7 text-black font-bold text-xl">
                  Create Your Account
                </Text>
              </View>
              <View className="w-full mt-6">
                <View className="gap-y-2">
                  <View className="gap-y-2 ">
                    <View className=" items-center ">
                      <TextInput
                        // placeholder="Email"
                        placeholderTextColor="grey"
                        onChangeText={handleChange("email")}
                        value={email}
                        editable={false}
                        className=" text-black bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 text-slate-600 "
                      />
                    </View>
                  </View>
                  <View className="gap-y-2 ">
                    <View className=" items-center ">
                      <TextInput
                        placeholder="Username"
                        placeholderTextColor="grey"
                        onChangeText={handleChange("username")}
                        value={values.username}
                        className=" text-black bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 "
                      />
                    </View>
                  </View>
                  {/* <View className="gap-y-2 ">
                    <View className=" items-center ">
                      <TextInput
                        placeholder="Date Of Birth"
                        placeholderTextColor="grey"
                        onChangeText={handleChange("dateOfBirth")}
                        value={values.dateOfBirth}
                        className=" text-black bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 "
                      />
                    </View>
                  </View> */}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setShowDatePicker(true)} // Show date picker on button press
                  >
                    <Text style={styles.buttonText}>Select Date of Birth</Text>
                  </TouchableOpacity>
                  {showDatePicker && (
                    <DateTimePicker
                      value={dateOfBirth}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
                  <Text> {dateOfBirth.toISOString().split("T")[0]} </Text>

                  <View className="gap-y-2 ">
                    <View className=" items-center ">
                      <TextInput
                        placeholder="Address"
                        placeholderTextColor="grey"
                        onChangeText={handleChange("address")}
                        value={values.address}
                        className=" text-black bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 "
                      />
                    </View>
                  </View>
                  <View className="gap-y-2 ">
                    <View className=" items-center ">
                      <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor="grey"
                        onChangeText={handleChange("phoneNumber")}
                        value={values.phoneNumber}
                        className=" text-black relative bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 "
                      />
                      <View className="left-28 " style={{ bottom: 28 }}>
                        <FontAwesomeIcon
                          icon={faPhoneFlip}
                          className="bg-blue-900 absolute "
                        />
                      </View>
                    </View>
                  </View>
                  <View className=" ">
                    <View className=" items-center  ">
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor="grey"
                        onChangeText={handleChange("password")}
                        value={values.password}
                        className=" text-black bg-slate-100 px-5 py-2 absolute rounded-md shadow-xl shadow-slate-500 w-10/12 "
                      />
                      <View className="left-28 " style={{ bottom: -12 }}>
                        <FontAwesomeIcon
                          icon={faEye}
                          className="bg-blue-900 relative "
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="mt-10 w-2/6  ml-8">
                <Button title="Choose file" onPress={selectImage} />
              </View>
              <View className="mt-8 items-center w-full  ">
                <TouchableOpacity
                  className=" bg-blue-600 items-center justify-center h-12 rounded-xl  w-11/12"
                  onPress={handleSubmit}
                >
                  <Text className="text-slate-100 font-bold text-lg">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>

        {/* Main */}

        <View className="items-center mt-2">
          <Text className="font-light text-xs">
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "80%",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 80,
  },
  form: {
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  datePickerContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SignUp;
