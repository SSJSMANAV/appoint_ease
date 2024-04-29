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

import { useNavigation } from "@react-navigation/native";
import { loginPatient } from "../../actions/action-creators/auth_action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const navigateToSignUp = () => {
    navigation.navigate("email");
  };

  const navigateToHome = async () => {
    await loginPatient(email, password)
      .then((data) => {
        // console.log("thik");
        navigation.navigate("Home");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const changeEmail = (email) => {
    setEmail(email);
  };

  const changePassword = (password) => {
    setPassword(password);
  };

  const forgotPassword = () => {
    Linking.openURL(
      "https://stackoverflow.com/questions/30540252/how-does-one-display-a-hyperlink-in-react-native-app"
    );
  };

  return (
    <View className="flex-1 bg-slate-100 items-center justify-center  ">
      <View className=" w-10/12  rounded-lg pb-6 ">
        <View className="items-center mb-6 ">
          {/* <Text className="text-2xl font-bold">AppointEase</Text> */}
          <TouchableOpacity className="  mb-4">
            <Image
              className="w-60 h-20"
              source={require("../../images/appointEase.png")}
            />
          </TouchableOpacity>
        </View>
        <View className=" flex-col ml-6 mb-4 ">
          <Text className=" text-black font-semibold text-lg">
            Login to your Account
          </Text>
        </View>
        <View>
          <View className="gap-6 items-center  ">
            <TextInput
              placeholder="Username"
              placeholderTextColor="grey"
              className=" text-black bg-slate-100 px-5 py-2 rounded-md w-4/5 shadow-xl shadow-slate-500"
              onChangeText={changeEmail}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="grey"
              className="text-black bg-slate-100 px-5 py-2 rounded-md w-4/5  shadow-xl shadow-slate-500 "
              onChangeText={changePassword}
            />
          </View>
          <View className="items-center"></View>
          <View className="mt-6 items-center mb-12  ">
            <TouchableOpacity
              className=" bg-blue-600 items-center justify-center h-12 rounded-xl  w-4/5"
              onPress={navigateToHome}
            >
              <Text className="text-slate-100 font-bold text-lg">Log In</Text>
            </TouchableOpacity>
          </View>

          <View className="items-center mt-12">
            <TouchableOpacity>
              <Text className="font-poppins ">
                Don't Have an account?
                <Text className="text-blue-700" onPress={navigateToSignUp}>
                  Sign up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
