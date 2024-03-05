import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  const navigateToSearch = () => {
    navigation.navigate("Search");
  };
  const navigateToAppointments = () => {
    navigation.navigate("Appointments");
  };

  const navigateToInbox = () => {
    navigation.navigate("Inbox");
  };

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="absolute bottom-0 w-full items-center">
      <View
        className="items-center pt-3 py-5  rounded-3xl w-11/12 mb-2"
        style={{ backgroundColor: "#ADD8E6" }}
      >
        <View className="flex-row w-10/12 justify-between">
          <TouchableOpacity onPress={navigateToHome}>
            <View className="items-center gap-y-1">
              <FontAwesomeIcon
                icon={faHouseChimney}
                size={route.name === "Home" ? 28 : 22}
                color={route.name === "Home" ? "#fff" : "#808080"}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToSearch}>
            <View className="items-center gap-y-1">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size={route.name === "Search" ? 28 : 22}
                color={route.name === "Search" ? "#fff" : "#808080"}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToAppointments}>
            <View className="items-center gap-y-1">
              <FontAwesomeIcon
                icon={faCalendarDays}
                size={route.name === "Appointments" ? 28 : 22}
                color={route.name === "Appointments" ? "#fff" : "#808080"}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToInbox}>
            <View className="items-center gap-y-1">
              <FontAwesomeIcon
                icon={faMessage}
                size={route.name === "Inbox" ? 28 : 22}
                color={route.name === "Inbox" ? "#fff" : "#808080"}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToProfile}>
            <View className="items-center gap-y-1">
              <FontAwesomeIcon
                icon={faUser}
                size={route.name === "Profile" ? 28 : 22}
                color={route.name === "Profile" ? "#fff" : "#808080"}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
