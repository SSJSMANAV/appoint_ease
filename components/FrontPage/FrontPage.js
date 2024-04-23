import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  tokenContainer,
  userContainer,
} from "../../actions/action-creators/config";

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

  const fetchUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user !== null) {
        console.log("yeh ha ");
        console.log(user);
        const theUser = JSON.parse(user);
        console.log("yeh ");
        console.log(theUser);
        console.log("yeh ");

        userContainer.user = theUser;
        // Token exists in AsyncStorage
      } else {
        // Token doesn't exist
        console.log(" no user");
      }
    } catch (error) {
      // Error handling if AsyncStorage fails
      console.error("Error fetching user:", error);
      throw new Error("Failed to fetch user");
    }
  };

  const fetchTheToken = async () => {
    await fetchToken()
      .then(async () => {
        if (token === null) {
          console.log("idhar null");

          navigation.navigate("Login");
        } else {
          await fetchUser().then(() => {
            console.log("idhar done");
            navigation.navigate("Home");
          });
        }
      })
      .catch((e) => {
        console.log(e.toString());
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
