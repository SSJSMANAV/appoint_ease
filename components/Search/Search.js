import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { fetchDoctorsList } from "../../actions/doctor-action";
import Footer from "../Home/Footer/Footer";
import { useFonts } from "expo-font";
import { useDispatch } from "react-redux";
import { fetchDoctorsByName } from "../../actions/action-creators/doctors_list_action";
import { useNavigation } from "@react-navigation/native";
// import DoctorDetails from "../Doctor_Details/Doctor_Details";

const Search = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigation = useNavigation();

  const navigateToDoctor = (doctor) => {
    navigation.navigate("DoctorDetails", { data: doctor });
  };

  const [selectedCategory, setSelectedCategory] = useState("All"); // Updated initial state
  const [doctorData, setDoctorData] = useState([]);
  //
  const [doctorName, setDoctorName] = useState("");
  const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = async () => {
    console.log("This is the doctor's Name:" + doctorName);
    try {
      const fetchData = await fetchDoctorsByName(doctorName);
      setDoctorData(fetchData);
      console.log("Fetch Result" + doctorData);
    } catch (err) {
      console.log(err);
      console.log("yeta");
      setDoctorData([]);
      setError(err.message);
      console.log("No one named: " + doctorData);
    }
  };

  const loadData = async () => {
    try {
      const category = selectedCategory === "All" ? "all" : selectedCategory;
      console.log("Category being fetched:", category); // Log the category being fetched
      const fetchData = await fetchDoctorsList(category);
      setDoctorData(fetchData.result);
      console.log("Doctor data: ", fetchData.result);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setDoctorData([]);
      // console.log("Error: " + err);
    }
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, [selectedCategory]);

  const renderDoctorCategory = ({ item }) => (
    <View className="flex-row mr-4">
      <TouchableOpacity
        className="flex-row"
        onPress={() => handleCategoryPress(item.category)}
      >
        <Text
          style={{ borderWidth: 1, fontFamily: "Poppins-Regular" }}
          className={`text-slate-400 font-medium py-2 px-3 rounded-lg border-slate-400 ${
            selectedCategory === item.category
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
        >
          {item.category}
        </Text>
      </TouchableOpacity>
    </View>
  );

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
    {
      id: 6,
      category: "Dentist",
    },
  ];

  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigateToDoctor(item);
      }}
      style={styles.doctorItemContainer}
      className="flex-row items-center py-2 "
    >
      <View style={styles.doctorImageContainer}>
        <Image
          source={require("../../images/doctor.png")}
          style={styles.doctorImage}
        />
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorDetailsText}>{item.specialization}</Text>
          <Text style={styles.doctorDetailsText}>
            {item.experience} years exp
          </Text>
        </View>
        <Text style={{ fontFamily: "Poppins-Regular" }}>
          Rating: {item.rating}
        </Text>
      </View>
      <View>
        <Text style={styles.doctorPrice}>$100{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white justify-center">
      <View className="flex-row items-start w-11/12 ">
        <Text style={styles.heading}>Doctors</Text>
      </View>
      <View style={styles.container} className="items-center">
        {/* Lll? */}
        <View className="relative w-full flex-row items-center  ">
          <View className="left-8 bottom-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" absolute "
              color="#b3b3b3"
            />
          </View>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={doctorName}
            onChangeText={(text) => setDoctorName(text)}
            onSubmitEditing={() => {
              handleSearchSubmit(doctorName);
            }}
          />
        </View>

        <View className="w-full items-center justify-center mb-40">
          <FlatList
            horizontal
            data={category}
            key={(item) => item.id.toString()}
            renderItem={renderDoctorCategory}
            className="flex-row w-11/12 h-12 "
          />
          <FlatList
            data={doctorData}
            keyExtractor={(item) => item.doctorId.toString()}
            renderItem={renderDoctorItem}
          />
          {doctorData.length === 0 && error && <Text> {error} </Text>}
        </View>
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
    paddingTop: 10,
    paddingBottom: 8,
    borderRadius: 10,
    marginBottom: 10,
    width: "90%",
    fontFamily: "Poppins-Regular",
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
    marginTop: 5,
    gap: 5,
  },
  doctorImageContainer: {
    width: "20%",
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  doctorImage: {
    width: "100%",
    height: 80,
    borderRadius: 10,
  },
  doctorInfo: {
    width: "65%",
    paddingHorizontal: 10,
    rowGap: 2,
  },
  doctorName: {
    fontSize: 16,
    fontFamily: "Poppins-Semibold",
  },
  doctorDetails: {
    flexDirection: "row",
    gap: 10,
  },
  doctorDetailsText: {
    color: "#808080",
    fontFamily: "Poppins-Regular",
  },
  doctorPrice: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});

export default Search;
