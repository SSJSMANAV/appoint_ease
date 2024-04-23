// App.js
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Home/Header/Header"; // Rename Header screen to AppHeader
import Front from "./components/FrontPage/FrontPage";
import Home from "./components/Home/Home/Home";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Home/Footer/Footer"; // Rename Footer screen to AppFooter
import Main from "./components/Home/Main/Main";
import Search from "./components/Search/Search";
import Appointments from "./components/Appointment/Appointments";
import Inbox from "./components/Inbox/Inbox";
import FetchDoctor from "./components/Home/Home/Fetch";
import DoctorDetails from "./components/Doctor_Details/Doctor_Details";
import Packages from "./components/Home/Home/Packages";
import MedicalReport from "./components/Appointment/medical_report";
import Dropdown from "./components/Appointment/Dropdown";
import BecomeDoctor from "./components/Become_Doctor/become_doctor";
import pin from "./components/SignUp/pin";
import EmailScreen from "./components/SignUp/email";
import PackageDetails from "./components/Home/Home/PackageDetails";
import List from "./components/Home/Home/List";
import ChatMessages from "./components/Inbox/chat_details";
import Pin from "./components/SignUp/pin";
import { LogBox } from "react-native";
import MyPackages from "./components/MyPackages/my_packages";
// import Video from "./components/Video/video_chat";
// import VideoChat from "./components/Video/video";

// Disable all log notifications

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Front" component={Front} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Footer" component={Footer} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="FetchDoctor" component={FetchDoctor} />
        <Stack.Screen name="DoctorDetails" component={DoctorDetails} />
        <Stack.Screen name="Packages" component={Packages} />
        <Stack.Screen name="Report" component={MedicalReport} />
        <Stack.Screen name="Dropdown" component={Dropdown} />
        <Stack.Screen name="BecomeDoctor" component={BecomeDoctor} />
        <Stack.Screen name="email" component={EmailScreen} />
        <Stack.Screen name="Pin" component={Pin} />
        <Stack.Screen name="PackageDetails" component={PackageDetails} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ChatMessage" component={ChatMessages} />
        <Stack.Screen name="MyPackages" component={MyPackages} />
        {/* <Stack.Screen name="Video" component={Video} /> */}
        {/* <Stack.Screen name="VideoChat" component={VideoChat} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
