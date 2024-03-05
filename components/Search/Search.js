import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Footer from "../Home/Footer/Footer";

const Search = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const doctors = [
    {
      id: 1,
      name: "Dr. Olivia Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 2,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 3,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 4,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 5,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 6,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 7,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 8,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 9,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
    {
      id: 10,
      name: "Dr. Olivion Brown",
      specialization: "Cardiologist",
      experience: "9 years",
      rating: 4.5,
      price: 96,
      image: require("../../images/doctor.png"),
    },
  ];

  const category = [
    {
      id: 1,
      category: "All",
    },
    {
      id: 2,
      category: "Neurologist",
    },
    {
      id: 3,
      category: "Cardiologist",
    },
    {
      id: 4,
      category: "Dermatologists",
    },
    {
      id: 5,
      category: "Ophthalmologists",
    },
  ];
  const renderDoctorCategory = ({ item }) => (
    <View className="flex-row mr-4 items-center ">
      <TouchableOpacity
        className="flex-row"
        onPress={() => setSelectedCategory(item.id)}
      >
        <Text
          style={{ borderWidth: 1 }}
          className={`text-slate-400 font-medium py-2 px-3 rounded-lg border-slate-400 ${
            selectedCategory === item.id ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          {item.category}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity
      style={styles.doctorItemContainer}
      className="flex-row items-center py-2 "
    >
      <View style={styles.doctorImageContainer}>
        <Image source={item.image} style={styles.doctorImage} />
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorDetailsText}>{item.specialization}</Text>
          <Text style={styles.doctorDetailsText}>{item.experience}</Text>
        </View>
        <Text>Rating: {item.rating}</Text>
      </View>
      <View>
        <Text style={styles.doctorPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white justify-center">
      <View className="flex-row items-start w-11/12 ">
        <Text style={styles.heading}>Doctors</Text>
      </View>
      <View style={styles.container} className="items-center">
        <View className="relative w-full flex-row items-center  ">
          <View className="left-8 bottom-1">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" absolute "
              color="#b3b3b3"
            />
          </View>
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>

        <FlatList
          horizontal
          data={category}
          key={(item) => item.id.toString()}
          renderItem={renderDoctorCategory}
          // style={styles.categories}
          className="flex-row w-11/12  h-20 "
        />
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderDoctorItem}
          style={styles.doctorsList}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 20,
  },
  searchInput: {
    borderWidth: 1.5,
    borderColor: "#b3b3b3",
    paddingLeft: 40,
    fontSize: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "90%",
  },
  categories: {
    flexDirection: "row",
    paddingBottom: 10,
    backgroundColor: "black",
  },
  categoryButton: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    height: "27%",
  },
  categoryText: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 8, // Adjusted padding for better fit
    paddingHorizontal: 12,
  },
  doctorsList: {
    width: "90%",
  },
  doctorItemContainer: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    marginTop: 15,
  },
  doctorImageContainer: {
    width: "20%",
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  doctorImage: {
    width: "100%",
    height: 70,
    borderRadius: 10,
  },
  doctorInfo: {
    width: "70%",
    paddingHorizontal: 10,
    gap: 6,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  doctorDetails: {
    flexDirection: "row",
    gap: 10,
  },
  doctorDetailsText: {
    color: "#808080",
  },
  doctorPrice: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Search;
