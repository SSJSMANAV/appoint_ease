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
import { fetchDoctorsList } from "../../../actions/doctor-action";

const RenderItem = ({ item, index }) => {
  const containerColors = ["#e0ccff", "#b3d9ff", "#ffb380"];
  const bellIconContainers = ["#d1b3ff", "#66b3ff", "#ff8533"];

  // const [slkd, lsdkfj] = useState("");
  // useEffect(() => {
  //   const fetchDoctorBySpeciality = async () => {
  //       await fetchDoctorsList(item.title);
  //   }

  //   fetchDoctorBySpeciality();
  // }, []);
  return (
    <View
      style={[styles.container, { backgroundColor: containerColors[index] }]}
      className="w-4/6"
    >
      <TouchableOpacity>
        <View className="ml-4 pr-6 gap-y-5">
          <View>
            <View
              style={[
                styles.bellIconContainer,
                { backgroundColor: bellIconContainers[index] },
              ]}
            >
              <FontAwesomeIcon icon={item.icon} size={22} color={item.color} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.doctorsText}>{item.doctors} doctors</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            {[1, 2, 3, 4].map((index) => (
              <Image
                key={index}
                source={require("../../../images/doctor.png")}
                style={styles.doctorImage}
              />
            ))}
            <Text
              className=" bg-blue-100 rounded-full ml-[-12] text-lg "
              style={{
                paddingTop: 4,
                paddingHorizontal: 5,
                fontSize: 15,
                borderWidth: 2,
                borderColor: "#fff",
                fontFamily: "Poppins-Regular",
              }}
            >
              +9
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default RenderItem;
