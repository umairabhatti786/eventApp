import { Platform, Text, TouchableOpacity, Image, View } from "react-native";
import { colors } from "../../utils/colors";
import React from "react";
import { images } from "../../assets";
import { Shadow } from "react-native-shadow-2";

type Props = {
  borderColor?: string;
  backgroundColor?: string;
  status?: string;
  complete?: boolean;
  borderWidth?: number;
  width?: number;
  height?: number;
  isShadow?: any;
  shadowColor?: any;
  shadowDistance?: any;
};

const CheckBox = ({
  borderColor,
  backgroundColor,
  complete,
  borderWidth,
  width,
  height,
  isShadow,
  shadowColor,
  shadowDistance,
}: Props) => {
  return (
    <View>
      {!isShadow ? (
        <TouchableOpacity
          style={{
            width: width || 25,
            height: height || 25,
            borderRadius: 7,
            borderWidth: borderWidth || 2,
            borderColor: borderColor || colors.purple,
            alignItems: "center",
            backgroundColor: backgroundColor,
            justifyContent: "center",
          }}
        >
          {complete && (
            <Image
              style={{ width: 12, height: 12 }}
              resizeMode="contain"
              source={images.check}
            />
          )}
        </TouchableOpacity>
      ) : (
        <Shadow
          startColor={shadowColor}
          distance={shadowDistance || 10}
          // offset={[3, 3]}

          style={{
            width: width || 25,
            height: height || 25,
            borderRadius: 7,
            borderWidth: borderWidth || 2,
            borderColor: borderColor || colors.purple,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: shadowColor,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: shadowColor,
              borderRadius: 7,

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {complete && (
              <Image
                style={{ width: 12, height: 12 }}
                resizeMode="contain"
                source={images.check}
              />
            )}
          </TouchableOpacity>
        </Shadow>
      )}
    </View>
  );
};
export default CheckBox;
