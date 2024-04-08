import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ToastAndroid } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../../actions/action-creators/config";
import { useParams } from "react-router-dom";

const BookingDates = ({ doctorId, schedule, date, token }) => {
  return (
    <View className="pb-12">
      {schedule.length > 0 && (
        <View>
          {schedule.map((sh) => {
            return (
              <RenderItem
                item={sh}
                doctorId={doctorId}
                token={token}
                date={date}
              ></RenderItem>
            );
          })}
        </View>
      )}
      {schedule.length === 0 && (
        <View>
          <Text>NO APPOINTMENTS AVAILABLE ON {date.toDateString()}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
  buttonContainer: {
    width: "auto",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#93ACD9",
    // backgroundColor: "#93ACD9",
  },
  detailsContainer: {
    justifyContent: "center",
  },
  bookDetails: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
  bookButton: {
    // backgroundColor: "#335D9F",
    minWidth: 80,
    borderColor: "#0066cc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  bookButtonText: {
    color: "black",
    fontFamily: "Poppins-Regular",
  },
  timeText: {
    fontFamily: "Poppins-Semibold",
  },
  bookedButton: {
    backgroundColor: "#ff3300",
    borderColor: "white",
  },
  bookedButtonText: {
    color: "white",
  },
});

export default BookingDates;

const RenderItem = ({ item, doctorId, token, date }) => {
  const [booked, setBooked] = useState(item.booked);
  const bookAppointment = async (id) => {
    if (!doctorId) {
      console.log("Doctor ID is not available.");
      return;
    }

    const url = `${BASE_URL}/appointment/book-appointment/${doctorId}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          date: date.toISOString().split("T")[0],
          timeId: id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      if (response.status === 200) {
        setBooked(true);
        ToastAndroid.show(responseData.message, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(responseData.message, ToastAndroid.LONG);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      ToastAndroid.show(
        "An error occurred. Please try again.",
        ToastAndroid.LONG
      );
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.bookDetails}>Available</Text>
        <View className="flex-row">
          <Text style={styles.bookDetails}>
            {item.startTime >= "12:00"
              ? `${item.startTime} PM`
              : `${item.startTime} AM`}
            -
            {item.endTime >= "12:00"
              ? `${item.endTime} PM`
              : `${item.endTime} AM`}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {!booked && (
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => {
              bookAppointment(item._id);
            }}
          >
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        )}
        {booked && (
          <TouchableOpacity style={[styles.bookButton, styles.bookedButton]}>
            <Text style={[styles.bookButtonText, styles.bookedButtonText]}>
              Booked
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
