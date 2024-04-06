import React, { useEffect, useState } from "react";
import { View, Text, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../Home/Footer/Footer";
import { tokenContainer } from "../../actions/action-creators/config";
import { fetchMyAppointments } from "../../actions/action-creators/my_appointments_action";

const Appointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [theAppointmentsList, setAppointmentsList] = useState([]);
  const navigation = useNavigation();

  const changeStatus = (status) => {
    console.log("yeta list ko length yeti cha " + theAppointmentsList.length);
    let filteredList = theAppointmentsList.filter(
      (appointment) => appointment.status === status
    );
    console.log(filteredList.length);
    setAppointmentsList(filteredList);
  };

  const fetchAppointments = async () => {
    setIsLoading(true);
    await fetchMyAppointments(tokenContainer.token)
      .then((data) => {
        console.log(data.result);

        setAppointmentsList(data.result);

        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAppointments();
    // changeStatus('completed');
  }, []);

  return (
    <View className="flex-1">
      {theAppointmentsList.length === 0 && <Text> no</Text>}
      {theAppointmentsList.length !== 0 && (
        <View>
          {theAppointmentsList.map((appointment) => (
            <Pressable
              onPress={() => {
                navigation.navigate("Report", { appointment: appointment });
              }}
            >
              <Text> {appointment.status} </Text>
            </Pressable>
          ))}
        </View>
      )}
      <Button
        onPress={() => {
          changeStatus("completed");
        }}
        title="change"
      />
      <Footer />
    </View>
  );
};

export default Appointments;
