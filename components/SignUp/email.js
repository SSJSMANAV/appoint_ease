import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../../actions/action-creators/config";

const EmailScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const handleInputChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = async () => {
    if (email.length === 0) {
      console.log("here");
      return;
    }
    console.log("yeta");
    const url = `${BASE_URL}/user/verify_email`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.status);
      const jsonData = await response.json();
      console.log("login data");
      console.log(jsonData);
      if (response.status === 200) {
        console.log("all good");
        navigation.navigate("Pin", { email: email });
      } else {
        console.log("idhar lafada");
        // ToastAndroid.show(jsonData.message);
      }
    } catch (e) {
      console.log(e.toString());
    }
    // Here you can perform any necessary validation before navigating
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        placeholderTextColor="grey"
        onChangeText={handleInputChange}
        // value={email} // Use value={email} to bind the input value
        style={styles.input}
        className="border-2 rounded-lg border-black"
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Text>Please fill in your email</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default EmailScreen;
