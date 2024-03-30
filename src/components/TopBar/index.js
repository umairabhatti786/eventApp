import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";
import { windowWidth } from "../../utils/CommonFun";

const TopBar = ({ activeBar, setActiveBar, topBarData,width ,height,activeBarHeight}) => {
  return (
    <View
      style={{
        height: height ||37,
        borderRadius: 10,
        borderColor: colors.grey900,
        borderWidth: 0.6,
        padding: 2,
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        {topBarData.map((item, index) => {
          return (
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: activeBar==item?colors.white:"transparent",
                  width: width||  windowWidth / 3.4,
                  height: activeBarHeight|| 31,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                activeOpacity={0.6}
                onPress={() => setActiveBar(item)}>
                <CustomText
                  color={activeBar == item ? colors.black100 : "#8E8E8E"}
                  text={item}
                  size={16}
                  fontWeight={"500"}
                  // fontFam="Poppins-Medium"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default TopBar;
