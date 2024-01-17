import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { colors } from "../../utils/colors";
import { images } from "../../assets";
import CustomText from "../CustomText";
import Collapsible from "react-native-collapsible";

type Props = {
  placeholder?: string;
  onChangeText?: any;
  height?: any;
  bgColor?: any;
  textColor?: string;
  borderRadius?: number;
  style?: any;
  multiline?: any;
  value?: any;
  width?: any;
  backgroundColor?: any;
  isEye?: boolean;
  label?: string;
  complusory?: boolean;
  textAlignVertical?: any;
};

const SelectTaskColor = ({
  onChangeText,
  placeholder,
  textColor,
  bgColor,
  borderRadius,
  style,
  multiline,
  value,
  width,
  height,
  backgroundColor,
  isEye,
  label,
  complusory,
  textAlignVertical,
}: Props) => {
  const [isActive, setIsActive] = useState(true);

  const colorData = [
    { name: "Cyan", color: colors.lightGreen },
    { name: "Purple", color: colors.purple },
    { name: "Pink", color: colors.pink },
  ];
  return (
    <View style={{ height: 300 }}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setIsActive(!isActive)}
        style={{
          width: width || "100%",
          height: height || 60,
          backgroundColor: backgroundColor || colors.lightGray,
          borderWidth: 1,
          borderBottomEndRadius: !isActive ? 0 : 15,
          borderBottomLeftRadius: !isActive ? 0 : 15,
          borderTopEndRadius: 15,
          borderTopLeftRadius: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          borderColor: colors.superLightGray,
        }}
      >
        <CustomText
          text={"Select a color"}
          color={colors.placeholdeColor}
          // style={{ marginVertical: 10 }}
          size={15}
          // fontFam="Inter-SemiBold"
        />

        <TouchableOpacity>
          <Image
            style={{ width: 17, height: 17 }}
            resizeMode="contain"
            source={images.down}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <Collapsible collapsed={isActive}>
        <View
          style={{
            width: width || "100%",
            backgroundColor: backgroundColor || colors.lightGray,
            borderWidth: 1,
            borderBottomEndRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopEndRadius: !isActive ? 0 : 15,
            borderTopLeftRadius: !isActive ? 0 : 15,
            justifyContent: "center",

            borderColor: colors.superLightGray,
          }}
        >
          <View>
            {colorData.map((item) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    height: 60,
                    paddingVertical: 15,
                    paddingLeft: 20,
                    borderColor: colors.placeholdeColor,
                    borderTopWidth: 0.5,
                  }}
                >
                  <View
                    style={{
                      ...styles.colorContainer,
                      backgroundColor: item.color,
                    }}
                  ></View>

                  <CustomText
                    text={item.name}
                    color={colors.white}
                    style={{ marginLeft: 10 }}
                    size={17}
                    fontFam="Inter-SemiBold"
                  />
                </View>
              );
            })}
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 70,
              paddingVertical: 15,
              paddingLeft: 20,
              borderColor: colors.placeholdeColor,
              borderTopWidth: 0.5,
            }}
          >
            <View
              style={{
                ...styles.colorContainer,
                width: 35,
                height: 35,
                borderColor: colors.placeholdeColor,
                borderWidth: 0.5,
                backgroundColor: colors.black,
              }}
            >
              <Image
                style={{ width: 17, height: 17 }}
                resizeMode="contain"
                source={images.addtask}
              />
            </View>

            <CustomText
              text={"Custom Color"}
              color={colors.white}
              style={{ marginLeft: 10 }}
              size={15}
              fontFam="Inter-SemiBold"
            />
          </View>
        </View>
      </Collapsible>
    </View>
  );
};
export default SelectTaskColor;

const styles = StyleSheet.create({
  colorContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
