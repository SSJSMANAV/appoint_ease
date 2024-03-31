import React, { useEffect } from "react";
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
import RenderItem from "./Render";

const List = () => {
  const data = [
    {
      id: "1",
      title: "Cardiologist",
      doctors: 8,
      icon: faBell,
      color: "#3399ff",
    },
    {
      id: "2",
      title: "Dentist",
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

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={RenderItem}
        horizontal={true}
        contentContainerStyle={{ flexGrow: 1 }}
        ItemSeparatorComponent={renderSeparator}
        showsHorizontalScrollIndicator={false}
        // Ensure proper flex behavior
      />
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

export default List;
