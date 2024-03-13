import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPenToSquare,
  faEye,
  faGreaterThan,
  faDoorOpen,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Footer from "../Home/Footer/Footer";
import { useFonts } from "expo-font";

const Profile = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  return (
    <View className="flex-1 bg-blue-100 ">
      <View className="items-center pt-12 pb-4  ">
        <Image
          source={require("../../images/doctor.png")}
          className="rounded-full w-24 h-24 mb-10 "
        />
        <Text
          className="font-semibold mb-2"
          style={{ fontFamily: "Poppins-Semibold", fontSize: 22 }}
        >
          Dr. Tesha Shree Shrestha
        </Text>
        <Text
          className=" text-slate-400"
          style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}
        >
          Doctor at Harvard University
        </Text>
      </View>
      <View className="gap-y-6 pt-4  ">
        <TouchableOpacity>
          <View className="justify-center flex-row items-center   gap-y-6  ">
            <View className="w-10/12">
              <Text className="text-lg font-semibold" style={styles.heading}>
                Edit Profile
              </Text>
              <Text style={styles.text} className="text-slate-700">
                Name, Email, Phone
              </Text>
            </View>
            <View>
              <TouchableOpacity className="">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size={24}
                  color="#2f3137"
                  className="text-lg"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View className="justify-center flex-row items-center   ">
            <View className="w-10/12">
              <Text className="text-lg font-semibold" style={styles.heading}>
                View Profile
              </Text>
              <Text style={styles.text} className="text-slate-700">
                See your Profile as others do
              </Text>
            </View>
            <View>
              <TouchableOpacity className=" ">
                <FontAwesomeIcon
                  icon={faEye}
                  size={24}
                  color="#2f3137"
                  className="text-lg"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="justify-center flex-row items-center   ">
            <View className="w-10/12">
              <Text className="text-lg font-semibold" style={styles.heading}>
                Become a Doctor
              </Text>
              <Text style={styles.text} className="text-slate-700">
                Fill the form with your details
              </Text>
            </View>
            <View>
              <TouchableOpacity className=" ">
                <FontAwesomeIcon
                  icon={faFileCirclePlus}
                  size={24}
                  color="#2f3137"
                  className="text-lg"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="justify-center flex-row items-center   ">
            <View className="w-10/12">
              <Text className="text-lg  font-semibold" style={styles.heading}>
                Sign Out
              </Text>
              <Text style={styles.text} className="text-slate-700">
                You are currently signed in
              </Text>
            </View>
            <View>
              <FontAwesomeIcon
                icon={faDoorOpen}
                size={28}
                color="#3b3d45"
                className="text-lg "
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#8c8c8c",
  },
  heading: {
    fontFamily: "Poppins-Semibold",
  },
});

export default Profile;
