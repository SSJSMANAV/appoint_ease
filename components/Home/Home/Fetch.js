import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { fetchDoctorsList } from "../../../actions/doctor-action";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import { useFonts } from "expo-font";
import { BASE_URL } from "../../../actions/action-creators/config";
import { useNavigation } from "@react-navigation/native";

const FetchDoctor = () => {
  const [doctorData, setDoctorData] = useState([]);

  const navigation = useNavigation();

  const navigateToDoctor = (doctor) => {
    navigation.navigate("DoctorDetails", { data: doctor });
  };
  useEffect(() => {
    async function loadData() {
      try {
        const fetchData = await fetchDoctorsList("all");
        setDoctorData(fetchData.result);
        console.log(fetchData.result);
        console.log("Initial doctorData:", doctorData);
      } catch (err) {
        console.log("error" + err);
      }
    }
    loadData();
  }, []);

  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigateToDoctor(item);
      }}
      style={styles.itemContainer}
    >
      <View style={styles.doctorImageContainer}>
        <Image
          source={{ uri: `${BASE_URL}/assets/${item.image}` }}
          style={styles.doctorImageList}
        />
      </View>
      <View style={styles.detailsContainer} className="gap-y-2 ">
        <View style={styles.detailsSectionTop} className="gap-y-0.5">
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.hospitalText}>{item.hospital}</Text>
          <Text style={styles.specialtyText}>{item.specialization}</Text>
        </View>
        <View style={styles.detailsSection}>
          <View style={styles.clockIcon}>
            <FontAwesomeIcon icon={faClock} size={20} color="#333" />
          </View>
          <Text style={{ fontFamily: "Poppins-Regular" }}>
            {item.experience}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {doctorData.length > 0 && (
        <FlatList
          data={doctorData.slice(0, 3)} // Slice the data array to only include the first 3 items
          initialNumToRender={3} // Render only 3 items initially
          maxToRenderPerBatch={3} // Render maximum 3 items per batch
          keyExtractor={(item) => item.id} // Ensure id is converted to string
          renderItem={renderDoctorItem}
          horizontal={true}
          snapToInterval={350}
        />
      )}
      {doctorData.length === 0 && <Text>No data available</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom: 10,
    columnGap: 20,
    width: 350,
  },
  doctorImageContainer: {
    // marginRight: 30,
  },
  doctorImageList: {
    width: 100,
    height: 120,
    borderRadius: 12,
  },
  detailsContainer: {
    width: "auto",
    paddingRight: 60,
  },
  detailsSection: {
    marginBottom: 8,
    flexDirection: "row",
  },
  nameText: {
    fontSize: 18,
    fontFamily: "Poppins-Semibold",
  },
  hospitalText: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Poppins-Semibold",
  },
  specialtyText: {
    fontSize: 14,
    color: "#888",
    fontFamily: "Poppins-Regular",
  },
  clockIcon: {
    marginRight: 8,
  },
});

export default FetchDoctor;
