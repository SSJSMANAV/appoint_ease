import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const navigatetoProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View className="items-center justify-center bg-slate-500 pb-3">
      <View className="flex-row mt-2  justify-between w-10/12 items-center">
        <Text className="font-bold text-2xl">Hi, Manav</Text>
        <TouchableOpacity
          className=" shadow-2xl   shadow-black bg-black  px-3 py-2 rounded-full "
          onPress={navigatetoProfile}
        >
          <Image
            className="w-8 h-8  rounded-sm"
            source={require("../../../images/google.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
