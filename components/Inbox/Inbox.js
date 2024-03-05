import React from "react";
import { View, Text, Image } from "react-native";
import Footer from "../Home/Footer/Footer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";
const Inbox = () => {
  // Inside your Inbox component:

  const data = [
    {
      id: 1,
      sender: "Dr. Sagar Sunar",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      timestamp: "19:56",
      pending: 1,
    },
    {
      id: 2,
      sender: "Dr. Sagar Sunar",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      timestamp: "19:56",
      pending: 1,
    },
    {
      id: 3,
      sender: "Dr. Sagar Sunar",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      timestamp: "19:56",
      pending: 1,
    },
    {
      id: 4,
      sender: "Dr. Sagar Sunar",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      timestamp: "19:56",
      pending: 1,
    },
    {
      id: 5,
      sender: "Dr. Sagar Sunar",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      timestamp: "19:56",
      pending: 1,
    },
    {
      id: 6,
      sender: "Dr. Sagar Sunar",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      timestamp: "19:56",
      pending: 1,
    },
    {
      id: 7,
      sender: "Dr. Sagar Sunar",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      timestamp: "19:56",
      pending: 2,
    },
    {
      id: 8,
      sender: "Dr. Sagar Sunar",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      timestamp: "19:56",
      pending: 3,
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity className="flex-row gap-x-2 w-full mt-8">
      <View className="w-1/6">
        <Image
          source={require("../../images/doctor.png")}
          className="w-full h-16 rounded-2xl"
        />
      </View>
      <View className="w-4/6 px-2 gap-y-1">
        <Text className="font-semibold " style={{ fontSize: 15 }}>
          {item.sender}
        </Text>
        <Text className="text-slate-600">{item.message}</Text>
      </View>
      <View className="w-1/6">
        <Text className="text-xs text-slate-500">{item.timestamp}</Text>
        <Text className="bg-red-500 px-3 py-1 w-8 ]\
         mt-3 rounded-full text-white">
          {item.pending}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white items-center  ">
      <View className="flex-1 w-11/12 gap-y-4">
        <View className="py-2">
          <Text className="text-2xl text-blue-600 font-semibold">Messages</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </View>
      <Footer className="flex-end" />
    </View>
  );
};

export default Inbox;
