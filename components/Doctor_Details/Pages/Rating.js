import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FlatList } from "react-native-gesture-handler";

const data = [
  {
    id: "1",
    name: "Tesha Shree Shrestha",
    rating: 5, // 5 stars
    review:
      "Dr. Emily Smith is an outstanding cardiologist. Highly recommended!",
  },
  {
    id: "2",
    name: "John Doe",
    rating: 4, // 4 stars
    review: "Dr. Emily Smith provided excellent care during my visit. ",
  },
  {
    id: "3",
    name: "John Doe",
    rating: 4, // 4 stars
    review: "Dr. Emily Smith provided excellent care during my visit. ",
  },
  {
    id: "4",
    name: "John Doe",
    rating: 4, // 4 stars
    review: "Dr. Emily Smith provided excellent care during my visit. ",
  },
  {
    id: "5",
    name: "Johnath Doe",
    rating: 4, // 4 stars
    review: "Dr. Emily Smith provided excellent care during my visit. ",
  },
  {
    id: "6",
    name: "John Doey",
    rating: 4, // 4 stars
    review: "Dr. Emily Smith provided excellent care during my visit. ",
  },
  // Add more rating data objects as needed
];

const Rating = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../../images/doctor.png")}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              {[...Array(item.rating)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} color="#ffcc00" />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>{item.review}</Text>
        </View>
      </View>
    </View>
  );

  return (
    // <View style={styles.container}>
    //   <View style={styles.innerContainer}>
    //     <View style={styles.profileContainer}>
    //       <Image
    //         source={require("../../../images/doctor.png")}
    //         style={styles.profileImage}
    //       />
    //       <View style={styles.textContainer}>
    //         <Text style={styles.name}>Tesha Shree Shrestha</Text>
    //         <FontAwesomeIcon icon={faStar} color="#ffcc00" />
    //       </View>
    //     </View>

    //     <View style={styles.reviewContainer}>
    //       <Text style={styles.reviewText}>
    //         "Dr. Emily Smith is an outstanding cardiologist. Her expertise and
    //         genuine care for her patients are truly remarkable. Highly
    //         recommended!"
    //       </Text>
    //     </View>
    //   </View>
    // </View>
    <View style={{ marginTop: 10, gap: 10, height: "100%" }}>
      <View style={{ height: "5%" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontFamily: "Poppins-Regular" }}>Leave A Review</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "51%", minHeight: "auto" }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          style={styles.mainContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // height: "100%",
    // paddingBottom: 100,
  },
  container: {
    // flex: 1,
    backgroundColor: "#FFE4C4",
    borderRadius: 20,
  },
  innerContainer: {
    // backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    gap: 6,
  },
  profileContainer: {
    flexDirection: "row",
    gap: 10,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
    resizeMode: "cover",
  },
  textContainer: {
    justifyContent: "center",
    gap: 2,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  name: {
    // color: "white",
    fontFamily: "Poppins-Regular",
  },
  rating: {
    // color: "white",
  },
  reviewContainer: {
    marginTop: 10,
  },
  reviewText: {
    // color: "white",
    textAlign: "justify",
    fontFamily: "Poppins-Regular",
  },
  button: {
    backgroundColor: "#3385ff",
    width: "auto",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontFamily: "Poppins-Regular",
    alignSelf: "flex-start",
  },
});

export default Rating;
