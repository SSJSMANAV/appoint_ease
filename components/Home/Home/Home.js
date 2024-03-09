import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { fetchDoctorsList } from "../../../actions/doctor-action";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import { FlatList } from "react-native-gesture-handler";
const Home = () => {
  const data = [
    { id: "1", title: "Cardio", doctors: 12, icon: faHeart, color: "#a366ff" },
    {
      id: "2",
      title: "Dental",
      doctors: 8,
      icon: faBell,
      color: "#3399ff",
    },
    {
      id: "3",
      title: "Neurologist",
      doctors: 8,
      icon: faBell,
      color: "#ffb380",
    },
  ];

  const doctorData = [
    {
      id: "1",
      name: "Dr. Adarsh Shrestha",
      hospital: "Bristol Hospital",
      specialty: "Cardiology",
      time: "4:30 - 7:30",
    },
    {
      id: "2",
      name: "Dr. Adarsh Shrestha",
      hospital: "Bristol Hospital",
      specialty: "Cardiology",
      time: "4:30 - 7:30",
    },
    {
      id: "3",
      name: "Dr. Adarsh Shrestha",
      hospital: "Bristol Hospital",
      specialty: "Cardiology",
      time: "4:30 - 7:30",
    },
    {
      id: "4",
      name: "Dr. Adarsh Shrestha",
      hospital: "Bristol Hospital",
      specialty: "Cardiology",
      time: "4:30 - 7:30",
    },
  ];
  // const [doctors, setDoctors] = useState([]);

  // const fetchTheDoctors = async () => {
  //   console.log("fetching doctors");
  //   await fetchDoctorsList("all")
  //     .then(() => {
  //       console.log("doctors fetched");
  //     })
  //     .catch((e) => {
  //       console.log("error");
  //     });
  // };

  // useEffect(() => {
  //   fetchTheDoctors();
  // }, []);

  // console.log("haha");
  const renderSeparator = () => <View style={{ width: 20 }} />;
  const containerColors = ["#e0ccff", "#b3d9ff", "#ffb380"];
  const bellIconContainers = ["#d1b3ff", "#66b3ff", "#ff8533"];

  const renderItem = ({ item, index }) => (
    <View
      style={[styles.container, { backgroundColor: containerColors[index] }]}
      className="w-4/6"
    >
      <View className="ml-4 pr-6 gap-y-5">
        <View>
          <View
            style={[
              styles.bellIconContainer,
              { backgroundColor: bellIconContainers[index] },
            ]}
          >
            <FontAwesomeIcon icon={item.icon} size={22} color={item.color} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.doctorsText}>{item.doctors} doctors</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          {[1, 2, 3, 4].map((index) => (
            <Image
              key={index}
              source={require("../../../images/doctor.png")}
              style={styles.doctorImage}
            />
          ))}
          <Text
            className=" bg-blue-100 rounded-full ml-[-12] text-lg justify-center"
            style={{
              paddingVertical: 2,
              fontSize: 15,
              paddingHorizontal: 7,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          >
            +9
          </Text>
        </View>
      </View>
    </View>
  );

  const renderDoctorItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.doctorImageContainer}>
        <Image
          source={require("../../../images/doctor.png")}
          style={styles.doctorImageList}
        />
      </View>
      <View style={styles.detailsContainer} className="gap-y-2">
        <View style={styles.detailsSectionTop} className="gap-y-0.5">
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.hospitalText}>{item.hospital}</Text>
          <Text style={styles.specialtyText}>{item.specialty}</Text>
        </View>
        <View style={styles.detailsSection}>
          <View style={styles.clockIcon}>
            <FontAwesomeIcon icon={faClock} size={20} color="#333" />
          </View>
          <Text>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 items-center bg-white">
      <View className=" w-11/12 mt-2 pb-60">
        {/* Whole View */}
        <View className="flex h-full ">
          {/* 1st Container */}
          <View>
            <View className="  flex-row justify-between items-center">
              <View className=" flex-row items-center">
                <Image
                  source={require("../../../images/doctor.png")}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <View>
                  <Text className="text-slate-500">Hi,</Text>
                  <Text className="font-semibold " style={{ fontSize: 16 }}>
                    Manav
                  </Text>
                </View>
              </View>
              <View className="mr-4">
                <FontAwesomeIcon icon={faBell} size={20} color="#a366ff" />
              </View>
            </View>
          </View>
          {/* 2nd Container */}
          <View className="w-full mt-4 ">
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Let's find </Text>
              <Text style={styles.sectionTitle}>your suitable doctor</Text>
            </View>
            <View className="w-full  flex">
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1 }}
                ItemSeparatorComponent={renderSeparator}
                // Ensure proper flex behavior
              />
            </View>
          </View>

          {/* 3rd Container */}
          <View className="mt-8 ">
            <View>
              <Text className="text-xl font-semibold">Top Doctors</Text>
            </View>
            <TouchableOpacity>
              <View className="h-4/5 mt-4 ">
                <FlatList
                  data={doctorData}
                  keyExtractor={(item) => item.id}
                  renderItem={renderDoctorItem}
                  // className="flex-col"
                  // showsVerticalScrollIndicator={true}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Adjust the color to your preference
  },

  container: {
    flex: 1,
    // backgroundColor: "#8b5cf6",
    width: "50%",
    marginTop: 4,
    borderRadius: 20,
    paddingVertical: 20,

    paddingLeft: 6,
  },
  bellIconContainer: {
    // backgroundColor: "#ef4444",
    marginTop: 2,
    width: "35%",
    // height: "10%",
    alignItems: "center",
    padding: 7,
    paddingVertical: 10,
    borderRadius: 20,
  },
  titleContainer: {
    marginTop: 4,
    paddingVertical: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "medium",
    color: "#000",
  },
  doctorsText: {
    fontWeight: "normal",
    color: "#000",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  doctorImage: {
    width: 36,
    height: 36,
    borderRadius: 20,
    marginLeft: -12,
    borderWidth: 2,
    borderColor: "#fff",
  },

  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    // borderRadius: ,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  doctorImageContainer: {
    marginRight: 16,
  },
  doctorImageList: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  detailsContainer: {
    // backgroundColor: "#000",
    flex: 1,
    justifyContent: "space-between",
  },
  detailsSection: {
    marginBottom: 8,
    flexDirection: "row",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  hospitalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  specialtyText: {
    fontSize: 14,
    color: "#888",
  },
  clockIcon: {
    marginRight: 8,
  },
});
export default Home;
