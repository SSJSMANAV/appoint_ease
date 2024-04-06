import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
} from "react-native";
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
];

const Rating = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
    <View style={{ marginTop: 10, gap: 10, height: "100%" }}>
      {modalVisible && <View style={{}} />}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ height: "5%" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontFamily: "Poppins-Regular", color: "white" }}>
            Leave A Review
          </Text>
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
  mainContainer: {},
  container: {
    backgroundColor: "#FFE4C4",
    borderRadius: 20,
  },
  innerContainer: {
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
    fontFamily: "Poppins-Regular",
  },
  reviewContainer: {
    marginTop: 10,
  },
  reviewText: {
    textAlign: "justify",
    fontFamily: "Poppins-Regular",
  },
  button: {
    backgroundColor: "#3385ff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontFamily: "Poppins-Regular",
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    // textAlign: "center",
    borderColor: "#000",
    borderWidth: 0.5,
    paddingHorizontal: 100,
    paddingVertical: 50,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default Rating;
