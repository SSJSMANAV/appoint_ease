import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../Home/Footer/Footer";
import { tokenContainer } from "../../actions/action-creators/config";
import { fetchMyAppointments } from "../../actions/action-creators/my_appointments_action";
import Dropdown from "./Dropdown";

const Appointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [theAppointmentsList, setAppointmentsList] = useState([]);
  const navigation = useNavigation();

  const changeStatus = (status) => {
    console.log("yeta list ko length yeti cha " + theAppointmentsList.length);
    let filteredList = theAppointmentsList.filter(
      (appointment) => appointment.status === status
    );
    console.log(filteredList.length);
    setAppointmentsList(filteredList);
  };

  const fetchAppointments = async () => {
    setIsLoading(true);
    await fetchMyAppointments(tokenContainer.token)
      .then((data) => {
        console.log(data.result);
        setAppointmentsList(data.result);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.text}>{item.doctorName}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{item.status}</Text>
        </View>
        <View style={styles.cell}>
          {item.status === "Pending" ? (
            <TouchableOpacity style={[styles.button, styles.pendingButton]}>
              <Text style={styles.buttonText}>No Actions</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.button, styles.completedButton]}>
              <Text style={styles.buttonText}>View Report</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerRow}>
      <View style={styles.headerCell}>
        <Text style={styles.headerText}>Doctor</Text>
      </View>
      <View style={styles.headerCell}>
        <Text style={styles.headerText}>Status</Text>
      </View>
      <View style={styles.headerCell}>
        <Text style={styles.headerText}>Action</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Dropdown />
      </View>
      <View className="items-center">
        <FlatList
          ListHeaderComponent={renderHeader}
          data={theAppointmentsList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          width={"95%"}
          contentContainerStyle={{ paddingBottom: 100 }}
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
  row: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "white",
    marginTop: 2,
    paddingVertical: 8,
    backgroundColor: "#abe4d3",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",

    fontFamily: "Poppins-Regular",
  },
  button: {
    alignSelf: "center",
    paddingVertical: 8,
    width: "80%",
    borderWidth: 2,
  },
  pendingButton: {
    backgroundColor: "red",
    borderColor: "red",
  },
  completedButton: {
    backgroundColor: "green",
    borderColor: "green",
  },
  buttonText: {
    alignSelf: "center",
    color: "white",

    fontFamily: "Poppins-Regular",
  },
  headerRow: {
    flexDirection: "row",
    borderColor: "white",
    backgroundColor: "#87ceeb",
    marginTop: 2,
    paddingVertical: 14,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  headerCell: {
    flex: 1,
  },
  headerText: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "Poppins-Semibold",
    fontSize: 16,
  },
});

export default Appointments;
