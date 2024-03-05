import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { fetchDoctorsList } from "../../../actions/doctor-action";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchTheDoctors = async () => {
    console.log("fetching doctors");
    await fetchDoctorsList("all")
      .then(() => {
        console.log("doctors fetched");
      })
      .catch((e) => {
        console.log("error");
      });
  };

  useEffect(() => {
    fetchTheDoctors();
  }, []);

  // console.log("haha");
  return (
    <View className="flex-1">
      <ScrollView>
        {doctors.length === 0 && <Text> No doctors</Text>}
        {doctors.length !== 0 && <Text> Yes doctors</Text>}
        <View className=" bg-slate-100 w-full px-5 pt-2">
          <View className="gap-y-8">
            <View className="">
              <View className="w-full">
                <TouchableOpacity className="bg-black rounded-2xl w-full">
                  <Image
                    source={require("../../../images/doctor.png")}
                    style={{
                      // borderRadius: 20,
                      // width: "100%",
                      resizeMode: "stretch",
                    }}
                    className="rounded-2xl w-full object-fill"
                  />
                </TouchableOpacity>
              </View>
              <Text className="font-bold text-lg  text-start">
                Dr. Sagar Prajapati
              </Text>
              <View className="flex-row w-full justify-between items-center mt-1">
                <Text style={{ fontSize: 16 }} className="text-slate-600">
                  Neurologist
                </Text>
                <TouchableOpacity className=" rounded-2xl bg-blue-500 px-4 py-2">
                  <Text className="text-slate-100 ">Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex flex-col items-start">
              <View className="w-full">
                <TouchableOpacity className="bg-black rounded-2xl w-full">
                  <Image
                    source={require("../../../images/doctor.png")}
                    style={{
                      // borderRadius: 20,
                      // width: "100%",
                      resizeMode: "stretch",
                    }}
                    className="rounded-2xl w-full object-fill"
                  />
                </TouchableOpacity>
              </View>
              <Text className="font-bold text-lg  text-start">
                Dr. Sagar Prajapati
              </Text>
              <View className="flex-row w-full justify-between items-center mt-1">
                <Text style={{ fontSize: 16 }} className="text-slate-600">
                  Neurologist
                </Text>
                <TouchableOpacity className=" rounded-2xl bg-blue-500 px-4 py-2">
                  <Text className="text-slate-100 ">Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="mt-6   ">
            <Text className="font-bold text-2xl mb-4">Health Packages</Text>
            <View className="gap-y-8">
              <View className="flex-row mt-4">
                <View className="mt-2 w-3/5 pr-6 ">
                  <Text className="text-lg font-semibold">
                    Heart Health: $199
                  </Text>
                  <Text style={{ fontSize: 14 }} className="text-slate-600">
                    Comprehesive heart Health Assessment
                  </Text>
                  <TouchableOpacity className="w-1/2 items-start mt-4 ">
                    <Text className="bg-slate-300 px-4 py-2 rounded-2xl font-medium">
                      Buy Now
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="w-2/5 items-end">
                  <Image
                    source={require("../../../images/doctor.png")}
                    className="w-11/12 h-32 rounded-2xl"
                  />
                </View>
              </View>
              <View className="flex-row mt-4">
                <View className="mt-2 w-3/5 pr-6 ">
                  <Text className="text-lg font-semibold">
                    Heart Health: $199
                  </Text>
                  <Text style={{ fontSize: 14 }} className="text-slate-600">
                    Comprehesive heart Health Assessment
                  </Text>
                  <TouchableOpacity className="w-1/2 items-start mt-4 ">
                    <Text className="bg-slate-300 px-4 py-2 rounded-2xl font-medium">
                      Buy Now
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="w-2/5 items-end">
                  <Image
                    source={require("../../../images/doctor.png")}
                    className="w-11/12 h-32 rounded-2xl"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};
export default Home;
