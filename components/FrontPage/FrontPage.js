import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FrontPage = () => {
  const navigation = useNavigation();

  const navigatetoHeader = () => {
    navigation.navigate("Header");
  };
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1500);
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
