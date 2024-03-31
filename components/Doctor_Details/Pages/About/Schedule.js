import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";

const Schedule = () => {
  const data = [
    { id: "1", status: "Available", time: "8:00 AM - 9:00 AM" },
    { id: "2", status: "Available", time: "8:00 AM - 9:00 AM" },
    { id: "3", status: "Available", time: "8:00 AM - 9:00 AM" },

    // Add more data items as needed
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
    <View className=" mt-4">
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Schedule;
