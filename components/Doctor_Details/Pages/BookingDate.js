import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ToastAndroid } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../../actions/action-creators/config";
import { useParams } from "react-router-dom";

const BookingDates = ({ doctorId, schedule, date, token }) => {
  const [booked, setBooked] = useState(schedule.booked);
  //   const { doctorId } = useParams();

  const bookAppointment = async (id) => {
    if (!doctorId) {
      console.log("Doctor ID is not available.");
      return;
    }
    console.log(id, date, "skdfjldsjlfds");
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

      console.log(token, "token");
      // Log response body for debugging
      const responseData = await response.json();
      console.log(response.status); // Log response status
      console.log(responseData);

      // Handle response based on status code
      if (response.status === 200) {
        setBooked(true);
        ToastAndroid.show(responseData.message, ToastAndroid.SHORT); // Success message
      } else {
        ToastAndroid.show(responseData.message, ToastAndroid.LONG); // Error message
      }
    } catch (error) {
      console.error("Error occurred:", error); // Log any errors
      ToastAndroid.show(
        "An error occurred. Please try again.",
        ToastAndroid.LONG
      );
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer} className="">
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
              // console.log(item._id);
            }}
          >
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        )}
        {booked && (
          <TouchableOpacity style={styles.bookButton} onPress={bookAppointment}>
            <Text style={[styles.bookButtonText]}>Booked</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View className="pb-12">
      {schedule.length > 0 && (
        <FlatList
          data={schedule}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          ListHeaderComponent={() => <View />}
          contentContainerStyle={{
            backgroundColor: "#B3D2F7",
            paddingHorizontal: 10,
            paddingBottom: 20,
            paddingVertical: 5,
            borderRadius: 10,
          }}
        />
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
    width: "auto", // Set the width to auto to match the width of the title
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "#93ACD9",
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
    backgroundColor: "#335D9F",
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

export default BookingDates;
