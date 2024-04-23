import React, { useEffect, useState } from "react";
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
  ToastAndroid,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FlatList } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";
import {
  BASE_URL,
  tokenContainer,
} from "../../../actions/action-creators/config";

const Rating = ({ doctorId }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [reviews, setReviews] = useState([]);

  const handlePostRating = async () => {
    console.log(rating);
    console.log(comment);
    const url = `${BASE_URL}/feedback/${doctorId}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenContainer.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating: rating,
          comment: comment,
        }),
      });
      console.log(response.status);
      const jsonData = await response.json();
      console.log(jsonData);
      if (response.status === 200) {
        console.log(jsonData);
        ToastAndroid.show(jsonData.message, ToastAndroid.LONG);
      } else {
        ToastAndroid.show(jsonData.message, ToastAndroid.LONG);
      }
    } catch (e) {
      console.log(e.message);
      ToastAndroid.show(e.message, ToastAndroid.LONG);
    }
  };

  const fetchReviews = async () => {
    try {
      const url = `${BASE_URL}/feedback/${doctorId}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenContainer.token}`,
        },
      });
      console.log(response.status);
      const jsonData = await response.json();
      if (response.status === 200) {
        console.log(jsonData.result);
        setReviews(jsonData.result.reverse());
      } else {
        toast.error(jsonData.message);
        setReviews([]);
      }
    } catch (e) {}
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../../images/doctor.png")}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.username}</Text>
            <View style={styles.ratingContainer}>
              {[...Array(item.rating)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} color="#ffcc00" />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>{item.comment}</Text>
        </View>
      </View>
    </View>
  );

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

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
          <View style={styles.modalView} className="gap-y-5">
            <StarRating
              disabled={false}
              maxStars={5}
              rating={rating}
              selectedStar={(rating) => setRating(rating)}
              fullStarColor={"gold"}
              starSize={35}
              animation="rotate"
            />
            <TextInput
              value={comment}
              style={styles.modalText}
              onChangeText={(value) => {
                setComment(value);
              }}
            />
            {/* Rating bar */}

            <View className="flex-row justify-between w-9/12">
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  handlePostRating().then(setModalVisible(!modalVisible));
                  setComment("");
                  setRating(0);
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
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
          data={reviews}
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
