import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const About = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Semibold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const [allText, setAllText] = useState(false);
  const [text, setText] = useState("See More...");
  const [mapRegion, setMapRegion] = useState({
    latitude: 27.707365,
    longitude: 85.324447,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const toggleText = () => {
    setAllText(!allText);
    setText(allText ? "See More..." : "See Less...");
  };

  // const containerHeight = allText ? "80%" : "70%";f

  return (
    <View style={styles.maincontainer}>
      <View className="">
        {!allText && (
          <View>
            <View className="h-24">
              <Text style={styles.textcontainer}>
                Lorem Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Text>
            </View>
            <TouchableOpacity className="min-w-fit" onPress={toggleText}>
              <Text className="px-3 py-1 -mt-3" style={styles.text}>
                {text}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {allText && (
          <View>
            <ScrollView
              className="h-auto bg-red-300"

              // className="flex-wrap"
            >
              <Text style={styles.textcontainer}>
                Lorem Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Text>
            </ScrollView>
            <TouchableOpacity className="min-w-fit" onPress={toggleText}>
              <Text className="px-3 py-1 bg-red-400 -mt-7 " style={styles.text}>
                {text}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* 2nd Container */}
      <View className=" px-2 py-3 bg-blue-200">
        <View className="flex-2  rounded-2xl overflow-hidden ">
          <MapView
            className="w-full  h-60 rounded-xl"
            region={mapRegion}
            // onRegionChangeComplete={setMapRegion}
          >
            <Marker coordinate={mapRegion} title="Marker">
              {/* <Image source={require("../../../images/doctor.png")} /> */}
            </Marker>
          </MapView>
        </View>
      </View>
      <View>
        <View>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#fff",
  },
  container: {},
  textcontainer: {
    textAlign: "justify",
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontFamily: "Poppins-Regular",
    // overflow: "hidden",
  },
  text: {
    color: "grey",
    fontFamily: "Poppins-Regular",
  },
});

export default About;
