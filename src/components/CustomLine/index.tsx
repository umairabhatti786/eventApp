import React from "react";
import { colors } from "../../utils/colors";
import { View } from "react-native";

type Props = {
  height?: any;
  backgroundColor?: any;
  width?: any;
};

const CustomLine = ({ height, width, backgroundColor }: Props) => {
  return (
    <View
      style={{
        height: height || 0.5,
        width: width,
        backgroundColor: backgroundColor || colors.grey500,
      }}
    />
  );
};

export default CustomLine;
