import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchSchedules } from "../../../actions/action-creators/doctors_list_action";
import BookingDates from "./BookingDate";

const Appointment = ({ doctorId }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [token, setToken] = useState("");
  const timeStamp = Date.now();
  const dateObject = new Date(timeStamp);
  const [selectedDate, setSelectedDate] = useState(dateObject);
  const [isLoading, setIsLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [status, setStatus] = useState(false);

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

  return (
    <View className="pb-20">
      <View
        className=" mt-4  rounded-lg  py-2 px-3 "
        style={{ maxHeight: "83%" }}
      >
        <View className="mb-4 w-auto">
          <Text
            className="self-start bg-blue-500 rounded-lg py-2  px-3 text-lg "
            style={{ fontFamily: "Poppins-Semibold", color: "#fff" }}
            onPress={() => showMode("date")}
          >
            Date: {selectedDate.toDateString()}
          </Text>

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
        <BookingDates
          schedule={schedule}
          date={selectedDate}
          doctorId={doctorId}
          token={token}
        />
        {/* </View> */}
      </View>
    </View>
  );
};

export default Appointment;
