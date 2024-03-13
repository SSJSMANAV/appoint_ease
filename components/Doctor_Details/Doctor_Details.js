import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

const DoctorDetails = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 items-center">
      <View className="w-11/12 ">
        <View className="flex-row gap-x-4 bg-blue-300">
          <View>
            <Image
              source={require("../../images/doctor.png")}
              className="w-28 h-28 rounded-2xl"
            />
          </View>
          <View>
            <Text>Dr.Sagar Prajapati</Text>
            <Text>Cardiologist</Text>
            <Text>Bir Hospital</Text>
            <Text>Bristol England</Text>
          </View>
        </View>
        <View className="flex-row justify-between bg-blue-100 mt-10 w-full gap-x-3">
          <TouchableOpacity>
            <View className="w-28 items-center bg-slate-500  py-2">
              <Text>About</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="w-28 items-center bg-slate-500  py-2">
              <Text>Review</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="w-28 items-center bg-slate-500  py-2">
              <Text>Rating</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DoctorDetails;
