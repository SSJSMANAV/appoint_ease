import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchSchedules } from "../../../actions/action-creators/doctors_list_action";

const Appointment = ({ doctorId }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [token, setToken] = useState("");

  const fetchToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        console.log("token " + token);
        setToken(token);
        // Token exists in AsyncStorage
        return token;
      } else {
        // Token doesn't exist
        console.log(" no token");
        return null;
      }
    } catch (error) {
      // Error handling if AsyncStorage fails
      console.error("Error fetching token:", error);
      throw new Error("Failed to fetch token");
    }
  };

  const timeStamp = Date.now();
  const dateObject = new Date(timeStamp);
  const [selectedDate, setSelectedDate] = useState(dateObject);
  const [isLoading, setIsLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);

  const fetchDoctorSchedule = async (date) => {
    // const formattedDate = date.toISOString().split("T")[0];
    setSchedule([]);
    setIsLoading(true);
    try {
      await fetchSchedules(date, token, doctorId).then((data) => {
        setIsLoading(false);
        console.log(data.result[0].timeslot);
        setSchedule(data.result[0].timeslot);
      });
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchToken().then(() => {
      const timeStamp = Date.now();
      fetchDoctorSchedule(new Date(timeStamp).toISOString().split("T")[0]);
    });
  }, []);

  const onChange = (e, selectedDate) => {
    setShow(false);

    setSelectedDate(selectedDate);

    fetchDoctorSchedule(selectedDate.toISOString().split("T")[0]);
  };

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  const data = [
    // Add more data items as needed
    { id: "1", status: "Available", time: "8:00 AM - 9:00 AM" },
    { id: "2", status: "Available", time: "8:00 AM - 9:00 AM" },
    { id: "3", status: "Available", time: "8:00 AM - 9:00 AM" },
    { id: "4", status: "Available", time: "8:00 AM - 9:00 AM" },
    { id: "5", status: "Available", time: "8:00 AM - 9:00 AM" },
    { id: "6", status: "Available", time: "8:00 AM - 9:00 AM" },
    { id: "7", status: "Available", time: "8:00 AM - 9:00 AM" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer} className="bg-blue-200 ">
      <View style={styles.detailsContainer}>
        <Text style={styles.bookDetails}>{item.status}</Text>
        <Text style={styles.bookDetails}>{item.time}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="pb-20">
      <View
        className=" mt-4  rounded-lg bg-slate-200 py-2 px-3 "
        style={{ maxHeight: "83%" }}
      >
        {/* <View
        className="px-2 bg-slate-200 w-3/5 rounded-lg py-2 "
        style={{ backgroundColor: "#80b3ff" }}
      >
        <Text
          className="text-xl font-semibold px-2 text-white"
          style={styles.timeText}
        >
          Working Time
        </Text>
      </View> */}
        {/* <View className=" mt-4 "> */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          ListHeaderComponent={() => (
            <View>
              {/* <View
                className="px-2 bg-slate-200 w-7/12 rounded-lg py-2 mb-4"
                style={{ backgroundColor: "#80b3ff" }}
              >
                <Text
                  className="text-xl font-semibold px-2 text-white"
                  style={styles.timeText}
                >
                  Working Time
                </Text>
              </View> */}
              <View className="mb-4 w-auto ">
                <Text
                  className="self-start bg-blue-500 rounded-lg py-2  px-3 text-lg "
                  style={{ fontFamily: "Poppins-Semibold", color: "#fff" }}
                  onPress={() => showMode("date")}
                >
                  Pick a date for Appointment
                </Text>
                {/* <Button
                onPress={onChange}
                title="Show Date Picker"
                className="self-start w-auto"
              /> */}
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
          )}
        />
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
  buttonContainer: {
    width: "auto", // Set the width to auto to match the width of the title
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 5,
    borderRadius: 10,
  },
  detailsContainer: {
    justifyContent: "center",
  },
  bookDetails: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  bookButton: {
    backgroundColor: "#3B82F6",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  bookButtonText: {
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  timeText: {
    fontFamily: "Poppins-Semibold",
  },
});

export default Appointment;