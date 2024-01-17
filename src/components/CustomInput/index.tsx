import React from "react";
import {
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors } from "../../utils/colors";
import { images } from "../../assets";
import CustomText from "../CustomText";
import { appStyles } from "../../utils/AppStyles";

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
  textAlignVertical?:any
};

const CustomInput = ({
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
  return (
    <View>
      {label && (
        <View style={appStyles.row}>
          <CustomText
            text={label}
            fontFam="Inter-Bold"
            size={15}
            style={{ marginBottom: 2 }}
          />
          {complusory && (
            <CustomText
              text={"*"}
              fontFam="Inter-Bold"
              size={15}
              // style={{ marginBottom: 2 }}
            />
          )}
        </View>
      )}

      <View
        style={{
          width: width || "100%",
          height: height || 60,
          backgroundColor: backgroundColor || colors.lightGray,
          borderWidth: 1.5,
          borderRadius: 15,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 20,
          borderColor: colors.superLightGray,
        }}
      >
        <TextInput
          style={{
            fontSize: 15,
            color: textColor,
            height: "100%",
            width: isEye ? "89%" : "100%",
            justifyContent:"center",
            // backgroundColor: colors.white,
            borderRadius: borderRadius,
            ...style,
          }}
          placeholder={placeholder}
          textAlignVertical={textAlignVertical}
          placeholderTextColor={colors.placeholdeColor}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={onChangeText}
          multiline={multiline}
          value={value}
        />
        {isEye && (
          <TouchableOpacity>
            <Image
              style={{ width: 22, height: 22 }}
              source={images.eye_cross}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default CustomInput;
