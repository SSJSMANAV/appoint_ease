import React from "react";
import { View } from "react-native";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <View className="flex-1">
      <Header />
      <Home />
      <Footer />
    </View>
  );
};

export default Main;
