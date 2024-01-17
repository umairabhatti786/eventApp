import React, { useEffect } from "react";
import { Alert, LogBox, StyleSheet, View, Text } from "react-native";
import RouteNavigator from "./src/routes/RouteNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";




export const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
              <RouteNavigator />

     
    </GestureHandlerRootView >

    
  );
};

export default  App
