import React from "react";
import { useFonts } from "expo-font";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const data = [
  {
    id: 1,
    name: "Post Covid Packages",
    amount: 3700,
  },
  { id: 2, name: "Fever", amount: 1300 },
  { id: 3, name: "Fever", amount: 1300 },
];

const Packages = () => {
  const RenderItem = ({ item }) => {
    return (
      <View>
        <View className="mt-2 flex-row rounded-xl">
          <View className="w-2/5">
            <Image
              source={require("../../../images/covid.png")}
              style={styles.image}
            />
          </View>
          <View className="ml-4">
            <Text style={[styles.text, styles.name]}>{item.name}</Text>
            <Text style={[styles.text, styles.amount]}>{item.amount}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.textBase}>Health Packages</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()} // Ensure key is a string
          renderItem={RenderItem}
          contentContainerStyle={styles.flatListContent}
          ItemSeparatorComponent={<View style={{ height: 5 }}></View>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // height: 400,
    paddingBottom: 70,
  },
  content: {
    width: "100%",
    borderRadius: 10,
  },
  header: {
    paddingVertical: 20,
    backgroundColor: "#ebccff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    paddingHorizontal: 5,
  },
  textBase: { fontFamily: "Poppins-Semibold", fontSize: 20 },
  image: {
    width: "100%",
    height: 130,
    maxHeight: 130,
    minHeight: 100,
    borderRadius: 30,
  },
  text: {
    fontFamily: "Poppins-Regular",
  },
  name: {
    fontSize: 16,
  },
  amount: {
    color: "red",
  },
  flatListContent: {
    paddingBottom: 10,
  },
});

export default Packages;
