import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import React from "react";
import { Spacer } from "../Spacer";
import CheckBox from "../CheckBox";
import { images } from "../../assets";
import { appStyles } from "../../utils/AppStyles";

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
  statusColor?: string;
  isComplete?: boolean;
  title?: string;
  status?: string;
  backgroundColor?: any;
  titleColor?: any;
  boxColor?: any;
  complete?: boolean;
  boxBorderColor?: string;
  shadowColor?: any;
  isShadow?: any;
  shadowDistance?: any;
};

const TaskContainer = ({
  onPress,
  width,
  height,
  size,
  elevation,
  borderRadius,
  isComplete,
  style,
  statusColor,
  title,
  status,
  backgroundColor,
  titleColor,
  boxColor,
  boxBorderColor,
  complete,
  shadowColor,
  isShadow,
  shadowDistance,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View
        style={{
          ...style,
          width: width || "100%",
          height: height || 60,
          backgroundColor: backgroundColor || colors.lightGray,
          alignItems: "center",
          borderRadius: borderRadius || 15,
          elevation: elevation,
          borderWidth: 1,
          borderColor: colors.superLightGray,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
      >
        <View
          style={{ width: "80%", height: "100%", justifyContent: "center" }}
        >
          <View style={appStyles.row}>
            {isComplete && (
              <>
                <Image
                  style={{ width: 10, height: 10 }}
                  source={images.star}
                  resizeMode="contain"
                />
                <Spacer width={5} />
              </>
            )}

            {/* <Text style={{textAlign:"center"}}></Text> */}
            <CustomText
              numberOfLines={1}
              text={title}
              color={titleColor || colors.white}
              size={size || 15}
              style={{ marginLeft: isComplete ? 0 : 15 }}
            />
          </View>

          <CustomText
            numberOfLines={1}
            text={status}
            color={statusColor || colors.purple}
            style={{ marginTop: -3, marginLeft: 15 }}
            size={size || 12}
          />
        </View>
        <View style={{ marginRight: 15 }}>
          <CheckBox
            isShadow={isShadow}
            shadowColor={shadowColor}
            complete={complete}
            shadowDistance={shadowDistance}
            borderColor={boxBorderColor}
            backgroundColor={boxColor}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default TaskContainer;
