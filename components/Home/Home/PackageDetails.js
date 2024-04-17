// @flow
import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BASE_URL } from "../../../actions/action-creators/config";

const PackageDetails = () => {
  const route = useRoute();
  const { packages } = route.params;

  const button = () => {
    console.log(packages);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#F9FAFB" }}
      >
        <Image
          source={{ uri: `${BASE_URL}/assets/${packages.image}` }}
          style={{
            width: "100%",
            height: 300,
            objectFit: "scale-down",
            marginBottom: 16,
            borderRadius: 8,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Poppins-Semibold" }}>
            {packages.packageName}
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Poppins-Semibold" }}>
            {packages.price}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins-Regular",
            marginBottom: 16,
          }}
        >
          {packages.description}
        </Text>
        <Text
          style={{ fontSize: 16, fontFamily: "Poppins-Bold", marginBottom: 8 }}
        >
          This includes:
        </Text>
        <View style={{ marginBottom: 16 }}>
          {packages.includes.map((item, index) => (
            <Text
              key={index}
              style={{ fontSize: 16, fontFamily: "Poppins-Regular" }}
            >{`\u2022 ${item}`}</Text>
          ))}
        </View>
        <Button title="Purchase" onPress={button} />
      </View>
    </ScrollView>
  );
};

export default PackageDetails;
