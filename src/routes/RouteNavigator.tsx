import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/auth/Login";
export const navigationContainerRef = React.createRef();
import SplashScreen from "react-native-splash-screen";
import Home from "../screen/main/Home";
import BottomTab from "./BottomTab";
import HomeChat from "../screen/main/HomeChat";
import Events from "../screen/main/Events";

const RouteNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName='AllBlocks'
      >
                {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
                 {/* <Stack.Screen name="Event" component={Events} /> */}


        <Stack.Screen name="HomeChat" component={HomeChat} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigator;
