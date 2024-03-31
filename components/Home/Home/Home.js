import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import { FlatList } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { RefreshControl } from "react-native";
import { style } from "../../Style/style";
import FetchDoctor from "./Fetch";
import List from "./List";
import Packages from "./Packages";

const Home = () => {
  const data = [
    { id: "1", title: "Cardio", doctors: 12, icon: faHeart, color: "#a366ff" },
    {
      id: "2",
      title: "Dental",
      doctors: 8,
      icon: faBell,
      color: "#3399ff",
    },
    {
      id: "3",
      title: "Neurologist",
      doctors: 8,
      icon: faBell,
      color: "#ffb380",
    },
  ];

  const renderSeparator = () => <View style={{ width: 20 }} />;
  const containerColors = ["#e0ccff", "#b3d9ff", "#ffb380"];
  const bellIconContainers = ["#d1b3ff", "#66b3ff", "#ff8533"];

  //

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} className="w-11/12 mt-2">
        {/* Whole View */}
        <View className="flex h-full  ">
          {/* 1st Container */}
          <View>
            <View className="  flex-row justify-between items-center">
              <View className=" flex-row items-center">
                <Image
                  source={require("../../../images/doctor.png")}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <View>
                  <Text
                    style={{ fontFamily: "Poppins-Regular" }}
                    className="text-slate-500"
                  >
                    Hi,
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins-Semibold", fontSize: 16 }}
                    className="font-semibold "
                  >
                    Manav
                  </Text>
                </View>
              </View>
              <View className="mr-4 p-3 bg-purple-200 rounded-full">
                <FontAwesomeIcon icon={faBell} size={22} color="#a366ff" />
              </View>
            </View>
          </View>
          {/* 2nd Container */}
          <View className="w-full mt-4">
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Let's find</Text>
              <Text style={styles.sectionTitle}>your suitable doctor</Text>
            </View>
            <View className="w-full flex">
              <List />
            </View>
          </View>
          {/* 3rd Container */}
          <View className="mt-2 pt-6  bg-blue-200  rounded-2xl ">
            <View className="pl-2 flex-row justify-between">
              <Text
                style={{ fontFamily: "Poppins-Semibold" }}
                className="text-2xl "
              >
                Top Doctors
              </Text>
              <View className=" justify-center mr-3">
                <Text className="text-slate-500">See All</Text>
              </View>
            </View>
            <View className="mt-4 bg-white">
              <View>
                <FetchDoctor />
              </View>
            </View>
          </View>
          {/* 4th Container */}
          <View className="">
            <Packages />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  sectionContainer: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    fontFamily: "Poppins-Semibold", // Adjust the color to your preference
  },

  container: {
    flex: 1,
    // backgroundColor: "#8b5cf6",
    width: "50%",
    marginTop: 4,
    borderRadius: 20,
    paddingVertical: 20,
    alignSelf: "center",

    paddingLeft: 6,
  },
  bellIconContainer: {
    // backgroundColor: "#ef4444",
    marginTop: 2,
    width: "35%",
    // height: "10%",
    alignItems: "center",
    padding: 7,
    paddingVertical: 10,
    borderRadius: 20,
  },
  titleContainer: {
    marginTop: 4,
    paddingVertical: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "medium",
    color: "#000",
    fontFamily: "Poppins-Regular",
  },
  doctorsText: {
    fontWeight: "normal",
    color: "#000",
    fontFamily: "Poppins-Regular",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  doctorImage: {
    width: 36,
    height: 36,
    borderRadius: 20,
    marginLeft: -12,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
export default Home;
