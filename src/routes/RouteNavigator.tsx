import React, { useEffect, useState } from "react";
import {
  StatusBar
 
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import Home from "../screen/main/Home";
import BottomTab from "./BottomTab";
import HomeChat from "../screen/main/HomeChat";
import Events from "../screen/main/Events";
import MessageScreen from "../screen/main/MessageScreen";
import AllPhotos from "../screen/main/AllPhotos";
import Profile from "../screen/main/Profile";
import Notifications from "../screen/main/Notifications";

const RouteNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
            <StatusBar backgroundColor="#yourStatusBarColor" barStyle="light-content" />

      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName='AllBlocks'
      >
                {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}


        <Stack.Screen name="HomeChat" component={HomeChat} />
                 <Stack.Screen name="MessageScreen" component={MessageScreen} />
                 <Stack.Screen name="AllPhotos" component={AllPhotos} />
                 <Stack.Screen name="Profile" component={Profile} />
                 <Stack.Screen name="Notifications" component={Notifications} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigator;
