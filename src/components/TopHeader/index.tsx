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
import { Spacer } from "../Spacer";
import { images } from "../../assets";

type Props = {
  taskCount?: number;
  date?: string;
  marginLeft?: number;
  navigation?: any;
  title?: any;
  edit?: any;
  //   status?:string
};

const TopHeader = ({
  date,
  taskCount,
  marginLeft,
  navigation,
  title,
  edit,
}: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: edit ? "65%" : "70%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <Image
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
            source={images.back}
          />
        </TouchableOpacity>
        <Spacer width={20} />

        <CustomText
          text={title || "Create New Task"}
          color={colors.white}
          fontFam="Inter-Bold"
          size={20}
        />
      </View>
      {edit && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("CreateTask", { isEdit: true })}
        >
          <Image
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
            source={images.edit}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default TopHeader;

const styles = StyleSheet.create({});
