import React from "react";
import { View, Image, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPenToSquare,
  faEye,
  faGreaterThan,
  faDoorOpen,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Footer from "../Home/Footer/Footer";

const Profile = () => {
  return (
    <View className="flex-1 bg-blue-100 ">
      <View className="items-center pt-12 pb-4  ">
        <Image
          source={require("../../images/doctor.png")}
          className="rounded-full w-24 h-24 mb-10 "
        />
        <Text className="text-2xl font-semibold mb-4">
          Dr. Tesha Shree Shrestha
        </Text>
        <Text className="text-lg text-slate-400">
          Doctor at Harvard University
        </Text>
      </View>
      <View className="gap-y-5 pt-4  ">
        <TouchableOpacity>
          <View className="justify-center flex-row items-center   gap-y-6  ">
            <View className="w-10/12">
              <Text className="text-lg font-semibold">Edit Profile</Text>
              <Text style={{ fontSize: 15 }} className="text-slate-700">
                Name, Email, Phone
              </Text>
            </View>
            <View>
              <TouchableOpacity className="">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size={24}
                  color="#2f3137"
                  className="text-lg"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View className="justify-center flex-row items-center   ">
            <View className="w-10/12">
              <Text className="text-lg font-semibold">View Profile</Text>
              <Text style={{ fontSize: 15 }} className="text-slate-700">
                See your Profile as others do
              </Text>
            </View>
            <View>
              <TouchableOpacity className=" ">
                <FontAwesomeIcon
                  icon={faEye}
                  size={24}
                  color="#2f3137"
                  className="text-lg"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="justify-center flex-row items-center   ">
            <View className="w-10/12">
              <Text className="text-lg font-semibold">Become a Doctor</Text>
              <Text style={{ fontSize: 15 }} className="text-slate-700">
                Fill the form with your details
              </Text>
            </View>
            <View>
              <TouchableOpacity className=" ">
                <FontAwesomeIcon
                  icon={faFileCirclePlus}
                  size={24}
                  color="#2f3137"
                  className="text-lg"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="justify-center flex-row items-center   ">
            <View className="w-10/12">
              <Text className="text-lg  font-semibold">Sign Out</Text>
              <Text style={{ fontSize: 15 }} className="text-slate-700">
                You are currently signed in
              </Text>
            </View>
            <View>
              <FontAwesomeIcon
                icon={faDoorOpen}
                size={28}
                color="#3b3d45"
                className="text-lg "
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default Profile;
