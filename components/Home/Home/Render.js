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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BASE_URL } from "../../../actions/action-creators/config";
import { useNavigation, useRoute } from "@react-navigation/native";
const RenderItem = ({
  item,
  index,
  onPress,
  doctorsLength,
  icon,
  color,
  containerColors,
  image,
  doctorList,
}) => {
  const bellIconContainers = ["#d1b3ff", "#66b3ff", "#ff8533"];

  const navigation = useNavigation();
  console.log("yeta doctor list");
  console.log("DoctorList", doctorList);

  return (
    <View
      style={[styles.container, { backgroundColor: containerColors[index] }]}
      className="w-4/6 mr-4"
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search", { theCategory: item.title });
        }}
      >
        <View className="ml-4 pr-6 gap-y-5">
          <View>
            <View
              style={[
                styles.bellIconContainer,
                { backgroundColor: bellIconContainers[index] },
              ]}
            >
              <FontAwesomeIcon icon={icon} size={22} color={color[index]} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.doctorsText}>
                {doctorsLength > 1
                  ? `${doctorsLength} doctors`
                  : `${doctorsLength} doctor`}
              </Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            {doctorList.map((doctor, index) => (
              <Image
                key={index}
                source={{ uri: `${BASE_URL}/assets/${doctor.image}` }}
                style={styles.doctorImage}
              />
            ))}
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
    backgroundColor: "black",
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
