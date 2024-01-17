import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import React from "react";
import { images } from "../../assets";
import { Shadow } from "react-native-shadow-2";

type Props = {
  onPress?: any;
  width?: any;
  height?: number;
  bgColor?: any;
};

const AddTaskButton = ({ onPress, width, height, bgColor }: Props) => {
  return (
    <Shadow
      startColor={colors.primary}
      distance={10}
      style={{
        backgroundColor: colors.primary,
        borderRadius: 100,
        shadowOpacity: 10,
      }}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <View
          style={{
            //   ...style,
            width: width || 60,
            height: height || 60,
            backgroundColor: bgColor || colors.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Image style={{ width: 25, height: 25 }} source={images.addtask} />
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};
export default AddTaskButton;
