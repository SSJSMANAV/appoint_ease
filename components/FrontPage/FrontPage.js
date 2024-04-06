import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { tokenContainer } from "../../actions/action-creators/config";

const FrontPage = () => {
  const navigation = useNavigation();

  const navigatetoHeader = () => {
    navigation.navigate("Header");
  };

  const [token, setToken] = useState("");

  const fetchToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        console.log("token " + token);
        setToken(token);

        tokenContainer.token = token;
        // Token exists in AsyncStorage
      } else {
        // Token doesn't exist
        console.log(" no token");
      }
    } catch (error) {
      // Error handling if AsyncStorage fails
      console.error("Error fetching token:", error);
      throw new Error("Failed to fetch token");
    }
  };

  const fetchTheToken = async () => {
    await fetchToken()
      .then(() => {
        if (token === null) {
          console.log("idhar null");
          navigation.navigate("Login");
        } else {
          console.log("idhar done");
          navigation.navigate("Home");
        }
      })
      .catch((e) => {
        console.log("idhar error");
        navigation.navigate("Login");
      });
  };

  useEffect(() => {
    fetchTheToken();
  }, []);

  return (
    <View className="flex-1 bg-blue-100 items-center justify-center">
      <TouchableOpacity onPress={navigatetoHeader}>
        <Image
          className="w-80 h-28 "
          source={require("../../images/appointEase.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FrontPage;
