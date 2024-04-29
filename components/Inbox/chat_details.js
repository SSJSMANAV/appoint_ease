import { View, Text, TextInput, Button, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";
import {
  subscribeToChat,
  sendTextMessage,
  updateSeenStatus,
} from "../../actions/action-creators/chat_action";
import { BASE_URL } from "../../actions/action-creators/config";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChatMessages = () => {
  const scrollViewRef = useRef(null);
  const route = useRoute();
  const { image, userId, doctorId, patientId } = route.params;
  console.log("here is the image name");
  console.log(image);
  console.log("here is the image name");
  const [limit, setLimit] = useState(10);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessages = async (newLimit) => {
    await subscribeToChat(doctorId, patientId, newLimit, (messages) => {
      if (messages.length === 0) {
        setMessages([]);
      } else {
        setMessages(messages);
      }
    });
  };

  const sendMessage = async () => {
    if (newMessage.length === 0) {
      return;
    }
    await sendTextMessage(userId, doctorId, patientId, newMessage)
      .then(() => {
        setNewMessage("");
      })
      .catch((e) => {
        toast.error("Message wasn't sent.");
      });
  };

  useEffect(() => {
    const unsubscribe = subscribeToChat(
      doctorId,
      patientId,
      limit,
      (messages) => {
        if (messages.length === 0) {
          setMessages([]);
        } else {
          setMessages(messages.reverse());
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [doctorId, patientId, limit]);

  return (
    <View className="flex flex-col justify-end  h-full bg-sky-100">
      <View className="flex flex-col p-4">
        {messages.length === 0 && (
          <View className="flex flex-col items-center justify-center h-1/2 w-full">
            <Text>Say Hello !!! 👋</Text>
          </View>
        )}
        {messages.length !== 0 && (
          <ScrollView
            ref={(ref) => {
              this.scrollView = ref;
            }}
            onContentSizeChange={() =>
              this.scrollView.scrollToEnd({ animated: false })
            }
            reverse={true}
            className="h-full gap-y-2 w-full"
          >
            {messages.map((message) => (
              <View
                className={`flex-col ${
                  userId === message.sentBy ? "items-end" : "items-start"
                } `}
              >
                <Text
                  style={{ minWidth: "10%", maxWidth: "70%" }}
                  className={` ${
                    userId === message.sentBy
                      ? "p-2 bg-blue-500 font-poppins rounded-xl text-white "
                      : "bg-slate-400 font-poppins rounded-xl p-2"
                  }`}
                >
                  {message.message}
                </Text>
                <Text className="text-slate-400">
                  {message.read.length === 0 ? "Unseen" : "Seen"}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
      <View className="flex flex-row items-center p-4 justify-end bg-red-50">
        <TextInput
          type="text"
          className="flex-grow border-l-2 border-y-2 font-poppins h-12 px-4 w-10/12 rounded-l-2xl border-slate-400 "
          placeholder="Type your message..."
          //   value={newMessage}
          onChangeText={(e) => {
            setNewMessage(e);
            console.log(e);
          }}
        />

        <TouchableOpacity
          className=" text-white py-2 px-4 h-12 justify-center rounded-r-2xl border-r-2 border-y-2 border-slate-400  "
          onPress={sendMessage}
        >
          <Text className="font-poppinssemibold text-slate-500">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatMessages;

const ChatMessageCard = ({ image, message, doctorId, patientId, userId }) => {
  return (
    <View key={message.id} className="bg-red-200 h-full ">
      {userId === message.sentBy && (
        <View className="flex flex-row justify-between items-center gap-x-10">
          <View className="bg-blue-400 rounded-2xl px-3 py-2 mb-2 w-fit flex-col-reverse">
            <Text className="font-poppins flex-col-reverse">
              {message.message}
            </Text>
          </View>
          <Text className="text-sm text-slate-400 font-poppins">
            {message.read.length === 0 ? "Unseen" : "Seen"}
          </Text>
        </View>
      )}
      {userId !== message.sentBy && (
        <GreyMessageCard
          image={image}
          message={message}
          doctorId={doctorId}
          patientId={patientId}
          userId={userId}
        ></GreyMessageCard>
      )}
    </View>
  );
};

const GreyMessageCard = ({ image, message, doctorId, patientId, userId }) => {
  useEffect(() => {
    const changeMessageSeenStatus = async () => {
      await updateSeenStatus(doctorId, patientId, message)
        .then(() => {
          return;
        })
        .catch((e) => {
          return;
        });
    };

    changeMessageSeenStatus();
  }, [doctorId, message, patientId]);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 3,
      }}
    >
      <Image
        source={{ uri: `${BASE_URL}/assets/${image}` }}
        style={{ width: 28, height: 28, borderRadius: 14 }}
      />
      {userId !== message.sentBy && (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#ccc",
              maxWidth: "70%",
            }}
          >
            <Text className="font-poppinssemibold text-black ">
              {message.message}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
