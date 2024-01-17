import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { colors } from "../../utils/colors";

type Props = {
  navigation?: any;
  children?: any;
  paddingHorizontal?: number;
};

const CategoryLayout = ({ navigation, children, paddingHorizontal }: Props) => {
  return (
    <View
      style={{
        width: "100%",
        height: Platform.OS == "ios" ? 700 : 800,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        paddingHorizontal: paddingHorizontal || 15,
        borderColor: colors.placeholdeColor,
        backgroundColor: colors.black,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          width: 80,
          height: 4,
          backgroundColor: "#1E1E1E",
          borderRadius: 50,
          alignSelf: "center",
          marginVertical: 10,
        }}
      />
      {children}
    </View>
  );
};

export default CategoryLayout;
const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    backgroundColor: colors.white,
    borderRadius: 3,
  },
});
