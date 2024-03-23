import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useRoute } from "@react-navigation/native";
import Review from "./Pages/Review";
import Rating from "./Pages/Rating";
import About from "./Pages/About";
import * as Animatable from "react-native-animatable";

const DoctorDetails = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const [activePage, setActivePage] = useState("About");
  const [borderAnimation, setBorderAnimation] = useState({
    translateX: 0, // Initial translation value
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleTabClick = (page) => {
    setActivePage(page);
    // Animate the border slowly from left to right
    setBorderAnimation({ translateX: 0 }); // Reset to initial position
    setTimeout(() => {
      setBorderAnimation({ translateX: 100 }); // Animate to right
    }, 50); // Adjust this delay as needed for the animation speed
  };
  // const route = useRoute();
  // const { data } = route.params;

  // console.log(data);

  return (
    <View className="flex-1 items-center bg-white">
      <View className="w-11/12 ">
        <Animatable.View
          className="flex-row gap-x-5 "
          animation="slideInLeft"
          duration={1000}
        >
          <View>
            <Image
              source={require("../../images/doctor.png")}
              className="w-28 h-28 rounded-2xl "
            />
          </View>
          <View className="justify-center">
            <Text className="text-lg font-semibold" style={styles.textBold}>
              Manav
            </Text>
            <Text className="text-slate-500" style={styles.text}>
              Doctor
            </Text>
            <Text className="text-slate-500" style={styles.text}>
              Bir Hospital
            </Text>
            <Text className="text-slate-500" style={styles.text}>
              22
            </Text>
          </View>
        </Animatable.View>
        <View className="flex-row justify-between mt-10 w-full gap-x-3">
          <TouchableOpacity
            onPress={() => {
              setActivePage("About");
            }}
          >
            <Animatable.View
              className="w-28 items-center  py-2 "
              style={activePage === "About" && styles.activeTab}
              animation="slideInLeft"
              duration={500}
            >
              <Text style={styles.text}>About</Text>
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActivePage("Review");
            }}
          >
            <Animatable.View
              className="w-28 items-center  py-2"
              style={activePage === "Review" && styles.activeTab}
              animation="slideInLeft"
            >
              <Text style={styles.text}>Review</Text>
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActivePage("Rating");
            }}
          >
            <Animatable.View
              className="w-28 items-center  py-2"
              style={activePage === "Rating" && styles.activeTab}
              animation="slideInLeft"
            >
              <Text style={styles.text}>Rating</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
        {activePage === "About" && <About />}
        {activePage === "Review" && <Review />}
        {activePage === "Rating" && <Rating />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
  },
  textBold: {
    fontFamily: "Poppins-Semibold",
  },
  pages: {
    borderBottomColor: "blue",
    fontFamily: "Poppins-Regular",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "blue",
  },
});

export default DoctorDetails;
