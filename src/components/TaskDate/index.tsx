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

type Props = {
  taskCount?: number;
  date?: string;
  marginLeft?: number;
  item?: any;
  selectedDate: any;
  onPress?: any;
  index?: any;
  //   status?:string
};

const TaskDate = ({
  date,
  taskCount,
  marginLeft,
  item,
  onPress,
  index,
  selectedDate,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        backgroundColor: colors.lightGray,
        borderColor: colors.primary50,
        borderWidth: 1.2,
        borderRadius: 18,
      }}
    >
      <CustomText
        text={item?.day}
        color={selectedDate == index ? colors.primary50 : colors.white}
        fontFam="Inter-Bold"
        size={17}
      />
      <CustomText
        text={item?.date}
        color={selectedDate == index ? colors.primary50 : colors.white}
        fontFam="Inter-Bold"
        size={17}
      />
    </TouchableOpacity>
  );
};
export default TaskDate;

const styles = StyleSheet.create({});
