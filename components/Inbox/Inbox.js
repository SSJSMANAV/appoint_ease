import { View, Text, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { BASE_URL, userContainer } from "../../actions/action-creators/config";
import {
  fetchLastChatMessage,
  fetchTheChatUsers,
} from "../../actions/action-creators/chat_action";
import { useNavigation } from "@react-navigation/native";

const Inbox = () => {
  const [chatUsers, setChatUsers] = useState([]);
  const [selectedChat, setSelectedChat] = useState("");
  const navigation = useNavigation();

  const role = "patient";
  const userId = userContainer.user._id;

  useEffect(() => {
    const fetchChatUsers = async () => {
      await fetchTheChatUsers(role, userId)
        .then((data) => {
          if (data.length === 0) {
            setChatUsers([]);
          }
          setChatUsers(data);
        })
        .catch((e) => {
          setChatUsers([]);
          console.log("error:", e.message);
        });
    };

    fetchChatUsers();
  }, [role, userId]);

  return (
    <View>
      {chatUsers.length === 0 && (
        <View className=" pl-3 text-black text-sm">
          <Text>You have no available chats.</Text>
        </View>
      )}
      {chatUsers.length > 0 && role === "patient" && (
        <View className="flex flex-col gap">
          {chatUsers.map((user) => (
            <TouchableOpacity
              onPress={() => {
                console.log("click garepachi user");
                console.log(user.image);
                navigation.navigate("ChatMessage", {
                  image: user.image,
                  userId: userId,
                  doctorId: user.doctorId,
                  patientId: userId,
                });
              }}
              className={`transition-all ease-in-out ${
                selectedChat === user.doctorId ? "bg-sky-300" : "bg-sky-100"
              } text-white flex flex-row justify-start items-start px-3 py-3 gap-x-2 bg-sky-100 hover:bg-sky-200 cursor-pointer `}
            >
              <ChatUserHead
                doctorId={user.doctorId}
                patientId={userId}
                user={user}
                role={"patient"}
              ></ChatUserHead>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Inbox;

const ChatUserHead = ({ role, doctorId, patientId, user }) => {
  const userId = userContainer.user._id;

  const [lastMessage, setlastMessage] = useState("");

  useEffect(() => {
    const unsubscribe = fetchLastChatMessage(
      doctorId,
      patientId,
      (messages) => {
        if (messages.length === 0) {
          setlastMessage([]);
        } else {
          setlastMessage(messages);
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [doctorId, patientId]);

  return (
    <View className="flex flex-col  w-11/12 mx-auto ">
      <View className="flex flex-row ">
        <Image
          source={{ uri: `${BASE_URL}/assets/${user.image}` }}
          className=" rounded-full "
          style={{ width: 70, height: 70 }}
        />
        <View className=" ml-4 w-9/12">
          <Text className="font-poppins" style={{ fontSize: 15 }}>
            {user.name}
          </Text>

          {lastMessage.length !== 0 && (
            <Text
              className={`${
                lastMessage[0].read.length === 0
                  ? "text-gray-700 font-bold"
                  : "text-gray-500 font-normal"
              } text-sm `}
            >
              {lastMessage[0].sentBy === userId ? "Me: " : ""}
              {lastMessage[0].message}
            </Text>
          )}
          {lastMessage.length === 0 && (
            <Text className="text-slate-500">Say Hello</Text>
          )}
        </View>
      </View>
    </View>
  );
};
