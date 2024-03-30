import React, { useEffect } from "react";
import { Alert, LogBox, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { appStyles } from "../../../utils/AppStyles";
import { windowWidth } from "../../../utils/CommonFun";

export const EventContainer = ({ item ,TBD,onPress}: any) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.6}
    onPress={onPress}
    style={{ ...appStyles.row,}}>
      {item.date && (
        <View style={{          marginRight: 30,
        }}>
          <CustomText
            text={item.date}
            color={colors.white}
            fontWeight="600"
            size={13}
          />
          <Spacer height={4} />
          <CustomText
            text={item.day}
            color={colors.grey300}
            fontWeight="400"
            size={17}
          />
        </View>
      )}

      <Image
        style={{
          width: 115,
          height: 70,
          borderRadius: 10,
          marginRight: 20,
        }}
        source={item.img}
      />
      <View
        style={{
          height: 70,
          width: windowWidth / 2,
          paddingVertical: 5,
        }}
      >
        <CustomText
          text={item.title}
          color={colors.white}
          numberOfLines={1}
          fontWeight="600"
          size={15}
        />
        <Spacer height={7} />
        <View style={appStyles.row}>
          <CustomText
            text={TBD?"Time @": "Starts @"}
            color={colors.white}
            fontWeight="600"
            style={{ marginRight: 5 }}
            size={13}
          />
          <CustomText
            text={item.time}
            color={colors.white}
            fontWeight="600"
            style={{ textDecorationLine: "underline" }}
            size={13}
          />
        </View>
        <Spacer height={7} />
        <CustomText
          text={item.des}
          color={colors.grey300}
          fontWeight="400"
          style={{ fontStyle: "italic" }}
          size={11}
        />
      </View>
    </TouchableOpacity>
  );
};

export default EventContainer;
