// App.js
import React from "react";
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
