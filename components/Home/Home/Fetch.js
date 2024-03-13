import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { fetchDoctorsList } from "../../../actions/doctor-action";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import { useFonts } from "expo-font";

const FetchDoctor = () => {
  const [doctorData, setDoctorData] = useState([]);

  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Semibold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

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
    <View style={styles.itemContainer}>
      <View style={styles.doctorImageContainer}>
        <Image
          source={require("../../../images/doctor.png")}
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
    </View>
  );

  return (
    <View>
      {doctorData.length > 0 && (
        <FlatList
          data={doctorData}
          keyExtractor={(item) => item.id}
          renderItem={renderDoctorItem}
          horizontal={true}
          snapToInterval={350}
          // className="flex-col"
          // showsHorizontalScrollIndicator={false}
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
