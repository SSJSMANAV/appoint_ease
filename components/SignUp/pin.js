import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../actions/action-creators/config";

const Pin = () => {
  const [pin, setPin] = useState("");
  const navigation = useNavigation();

  const route = useRoute();
  const { email } = route.params;

  const handleSubmit = async () => {
    if (pin.length === 0) {
      console.log("here");
      return;
    }
    console.log("yeta");
    console.log(pin);
    console.log(email);
    const url = `${BASE_URL}/user/findOtp`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          otp: pin,
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
        console.log("verified");
        navigation.navigate("SignUp", { email: email });
      } else {
        console.log("idhar lafada");
        // ToastAndroid.show(jsonData.message);
      }
    } catch (e) {
      console.log(e.toString());
    }
    // Here you can perform any necessary validation before navigating
  };

  return (
    <View className="flex-1 justify-center items-center gap-y-5">
      <View>
        <TextInput
          placeholder="OTP Verification"
          placeholderTextColor="grey"
          onChangeText={(text) => {
            setPin(text);
          }}
          className=" text-black bg-slate-100 px-5 py-2 rounded-md shadow-xl shadow-slate-500 w-fit"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSubmit}
          className="p-2 px-3 bg-blue-600 rounded-lg "
        >
          <Text className="text-white">Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: "Poppins-Regular" }}>
        Fill Up the OTP for verification
      </Text>
    </View>
  );
};

export default Pin;
