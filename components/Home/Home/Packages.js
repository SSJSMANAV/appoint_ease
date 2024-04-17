import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  BASE_URL,
  tokenContainer,
} from "../../../actions/action-creators/config";
import { useNavigation } from "@react-navigation/native";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const navigation = useNavigation();

  const viewPackage = (item) => {
    navigation.navigate("PackageDetails", { packages: item });
  };

  const fetchPackages = async () => {
    try {
      const url = `${BASE_URL}/package/get-all-package`;
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData);
      if (response.ok) {
        setPackages(jsonData.result);
      } else {
        console.log("Error:", jsonData.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const renderPackage = ({ item }) => {
    const bookPackage = async () => {
      const url = `${BASE_URL}/package/buy-package/${item._id}`;
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            packageName: item.packageName,
            totalprice: item.price,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenContainer.token}`,
          },
        });
        console.log(response.status);
        const jsonData = await response.json();
        console.log("package book data");
        console.log(jsonData);
        if (response.status === 200) {
          // toast

          console.log("tada");
          return jsonData;
        } else {
          console.log("errrrrrrr");
          throw Error(jsonData.message);
        }
      } catch (e) {
        console.log("error hey: " + e.toString());
      }
    };
    return (
      <TouchableOpacity
        style={styles.packageContainer}
        onPress={() => viewPackage(item)}
      >
        <Image
          source={{ uri: `${BASE_URL}/assets/${item.image}` }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.packageName}>{item.packageName}</Text>
          <Text style={styles.packagePrice}>Price: Rs {item.price}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#80dfff" }}
              onPress={() => viewPackage(item)}
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={bookPackage}>
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text className="font-poppins text-lg">Health Packages</Text>
      </View>
      <FlatList
        data={packages}
        keyExtractor={(item) => item.id}
        renderItem={renderPackage}
        contentContainerStyle={styles.flatListContent}
        ItemSeparatorComponent={<View style={{ height: 5 }}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 52,
  },
  header: {
    backgroundColor: "#9fdfbf",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 12,
  },
  packageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 12,
  },
  image: {
    width: 100,
    height: 110,
    objectFit: "contain",
    backgroundColor: "#5f5f0",
    borderRadius: 10,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  packageName: {
    fontSize: 18,
    marginBottom: 4,
    fontFamily: "Poppins-Semibold",
  },
  packagePrice: {
    color: "red",
    marginBottom: 8,
    fontFamily: "Poppins-Semibold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    backgroundColor: "#79d2a6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins-Semibold",
  },
  flatListContent: {
    paddingBottom: 16,
  },
});

export default Packages;
