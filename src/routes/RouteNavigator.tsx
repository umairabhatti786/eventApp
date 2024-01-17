import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/auth/Login";
import AddName from "../screen/auth/RegisterFlow/AddName";
import AddEmail from "../screen/auth/RegisterFlow/AddEmail";
import EmailConfirmation from "../screen/auth/RegisterFlow/EmailConfirmation";
import SetupPassword from "../screen/auth/RegisterFlow/SetupPassword";
import PlannedTasks from "../screen/main/PlannedTasks";
import ToDoTask from "../screen/main/ToDoTask";
import Setting from "../screen/main/Setting";
import Profile from "../screen/main/Setting/Profile";
import EditName from "../screen/main/Setting/EditName";
import EditPassword from "../screen/main/Setting/EditPassword";
import CreateTask from "../screen/main/CreateTask";
import TaskDetail from "../screen/main/TaskDetail";
import NewCategory from "../screen/main/NewCategory";
import Reminders from "../screen/main/Reminders";
import Subscription from "../screen/main/Subscription";
import ToDoPlanner from "../screen/main/ToDoPlanner";
import Statistics from "../screen/main/Statistics";
export const navigationContainerRef = React.createRef();
import SplashScreen from "react-native-splash-screen";

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
      
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AddName" component={AddName} />
        <Stack.Screen name="AddEmail" component={AddEmail} />
        <Stack.Screen name="EmailConfirmation" component={EmailConfirmation} />
        <Stack.Screen name="SetupPassword" component={SetupPassword} />
        <Stack.Screen name="PlannedTasks" component={PlannedTasks} />
        <Stack.Screen name="ToDoTask" component={ToDoTask} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditName" component={EditName} />
        <Stack.Screen name="EditPassword" component={EditPassword} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="TaskDetail" component={TaskDetail} />
        <Stack.Screen name="NewCategory" component={NewCategory} />
        <Stack.Screen name="Reminders" component={Reminders} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="ToDoPlanner" component={ToDoPlanner} />










      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigator;
