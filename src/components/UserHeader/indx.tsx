import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import React from "react";
import { images } from "../../assets";

type Props = {
  taskCount?: number;
  date?: string;
  marginLeft?: number;
  navigation?: any;
  //   status?:string
};

const UserHeader = ({ date, taskCount, marginLeft, navigation }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          shadowColor: colors.white,
          shadowRadius: 20,
          elevation: 10,
          shadowOpacity: 40,
          backgroundColor:colors.white,
          width: 50,
          height: 50,
          borderRadius: 100,
          shadowOffset: { width:10, height: 10 },
        }}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 100 }}
          source={images.man}
        />
      </TouchableOpacity>

      <CustomText
        text={"December 2023"}
        color={colors.white}
        fontFam="Inter-Bold"
        size={20}
        style={{ marginTop: 25 }}
      />
      <TouchableOpacity
      onPress={()=>navigation.navigate("ToDoPlanner")}
      >
         <Image
        style={{ width: 25, height: 25, marginTop: 20, marginRight: 20 }}
        source={images.clander}
      />

      </TouchableOpacity>

     
    </View>
  );
};
export default UserHeader;

const styles = StyleSheet.create({});
