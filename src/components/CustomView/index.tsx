import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import React from "react";

type Props = {
  text?: string;
  onPress?: any;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  elevation?: number;
  borderRadius?: number;
  style?: any;
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  children?:any
  borderWidth?:number
  paddingHorizontal?:number
  paddingVertical?:number
  paddingTop?:number
  paddingBottom?:number
  
};

const CustomView = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  children,
  borderWidth,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom
}: Props) => {
  return (
    <View >
      <View
        style={{
          ...style,
          width: width || "100%",
        //   height: height || 150,
          backgroundColor: bgColor || colors.lightGray,
          borderRadius: borderRadius || 15,
          elevation: elevation,
          borderWidth:borderWidth||  2,
          borderColor: borderColor || colors.superLightGray,
          paddingHorizontal:paddingHorizontal||  30,
          paddingVertical: paddingVertical|| 10,
          paddingTop:paddingTop,
          paddingBottom:paddingBottom
        }}
      >
      {children}
      </View>
    </View>
  );
};
export default CustomView;
