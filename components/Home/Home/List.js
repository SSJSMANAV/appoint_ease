import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { faBell, faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import { FlatList } from "react-native-gesture-handler";
import RenderItem from "./Render";
import { fetchDoctorsList } from "../../../actions/doctor-action";
import { BASE_URL } from "../../../actions/action-creators/config";

const List = () => {
  const data = [
    {
      id: "1",
      title: "Cardiologist",
      doctors: 8,
      icon: faBell,
      color: "#3399ff",
    },
    {
      id: "2",
      title: "Dentist",
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
  const navigation = useNavigation();

  const renderSeparator = () => <View style={{ width: 20 }} />;
  const bellIconContainers = ["#d1b3ff", "#66b3ff", "#ff8533"];
  // const [category, setCategory] = useState("");
  // const [doctorData, setDoctorData] = useState([]);

  // useEffect(() => {
  //   loadData(); // Correct way to call the function
  // }, [category]);

  // const handleNavigateToSearch = (item) => {
  //   navigation.navigate("Search", { searchData: item.title });
  //   console.log(item.title);
  // };
  return (
    <ScrollView horizontal>
      <View className="flex-row w-full pr-40">
        {data.map((e, index) => {
          return <Specialities data={e} index={index}></Specialities>;
        })}
      </View>
    </ScrollView>
  );
};

const Specialities = ({ data, index }) => {
  const [doctorList, setDoctorList] = useState([]);

  const loadData = async (category) => {
    console.log(category);
    try {
      const fetchData = await fetchDoctorsList(category);
      setDoctorList(fetchData.result);
      console.log("Here's fetched data", fetchData);
    } catch (error) {
      setDoctorList([]);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData(data.title);
  }, []);
  return (
    <View style={styles.specialitiesContainer}>
      <RenderItem
        item={data}
        index={index}
        onPress={() => {}}
        icon={faBell}
        doctorList={doctorList}
        doctorsLength={doctorList.length}
        color={["#fff", "#000", "#ff8"]}
        containerColors={["#e0ccff", "#b3d9ff", "#ffb380"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  specialitiesContainer: {
    flexDirection: "row", // Set flexDirection to 'row'
    alignItems: "flex-start",
    justifyContent: "space-between", // Optional: Adjust as needed
    marginTop: 10,
    width: "45%",
  },
  container: {
    flex: 1,
    // backgroundColor: "#8b5cf6",
    width: "50%",
    marginTop: 4,
    borderRadius: 20,
    paddingVertical: 20,
    alignSelf: "center",

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
    fontFamily: "Poppins-Regular",
  },
  doctorsText: {
    fontWeight: "normal",
    color: "#000",
    fontFamily: "Poppins-Regular",
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
});

export default List;
