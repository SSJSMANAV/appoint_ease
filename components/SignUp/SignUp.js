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
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from "react-native-image-picker";
import { launchImageLibrary } from "react-native-image-picker";

const SignUp = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibrary({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const navigation = useNavigation();

  const navigatetoLogin = () => {
    navigation.navigate("Login");
  };

  const forgotPassword = () => {
    Linking.openURL(
      "https://stackoverflow.com/questions/30540252/how-does-one-display-a-hyperlink-in-react-native-app"
    );
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
                    placeholder="Email"
                    placeholderTextColor="grey"
                    className=" text-black bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 "
                  />
                </View>
              </View>
              <View className="gap-y-2 ">
                <View className=""></View>
                <View className=" items-center ">
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="grey"
                    className=" text-black bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 "
                  />
                </View>
              </View>
              <View className="gap-y-2 ">
                <View className=" items-center ">
                  <TextInput
                    placeholder="Address"
                    placeholderTextColor="grey"
                    className=" text-black bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 "
                  />
                </View>
              </View>
              <View className="gap-y-2 ">
                <View className=" items-center ">
                  <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="grey"
                    className=" text-black relative bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-10/12 "
                  />
                  <View className="left-28 " style={{ bottom: 28 }}>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="bg-blue-900 absolute "
                    />
                  </View>
                </View>
              </View>
              <View className=" ">
                <View className=" items-center  ">
                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="grey"
                    className=" text-black bg-slate-100 px-5 py-2 absolute rounded-md shadow-xl shadow-slate-500 w-10/12 "
                  />
                  <View className="left-28 " style={{ bottom: -12 }}>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="bg-blue-900 relative "
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-10  ml-8">
          <View className="w-2/5">
            <Button
              title="Choose File"
              onPress={pickImage}
              color="#999999"
              placeholderTextColor="#000"
            />

            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        </View>

        {/* Main */}

        <View className="mt-8 items-center  ">
          <TouchableOpacity
            className=" bg-blue-600 items-center justify-center h-12 rounded-xl  w-11/12"
            onPress={navigatetoLogin}
          >
            <Text className="text-slate-100 font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>
          <View className="items-center mt-2">
            <Text className="font-light text-xs">
              By signing up, you agree to our Terms of Use and Privacy Policy.
            </Text>
          </View>
        </View>

        <View className="items-center gap-y-3 mt-1">
          <Text className="text-slate-600">-Or sign up with-</Text>

          <TouchableOpacity>
            <Image
              className="w-8 h-8  "
              source={require("../../images/google.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
