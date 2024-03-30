import { Pressable, Text, TouchableOpacity, View,ActivityIndicator } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
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
  notRequiredShadow?: boolean;
  disable?: boolean;
  isLoading?: boolean;
};

const CustomButton = ({
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
  notRequiredShadow,
  disable,
  isLoading,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.9}
      style={{
        ...style,
        width: width || "100%",
        height: height || 50,
        backgroundColor: bgColor || colors.blue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius || 10,
        borderWidth: 2,
        borderColor: borderColor || colors.blue,
      }}
    >
      {isLoading ? (
        <>
              <ActivityIndicator size={"large"} color={colors.white} />

        </>
      ) : (
        <CustomText
          text={text}
          color={textColor || colors.white}
          fontWeight={"600"}
          size={size || 18}
          fontFam={fontFam ||"SF-Pro-Text-Regular"}
        />
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
