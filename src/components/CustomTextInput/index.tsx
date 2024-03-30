import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/CommonFun";
import CustomText from "../CustomText";

const CustomTextInput = ({
  placeholder,
  keyboard,
  isPassword,
  props,
  isCenter,
  fontWeight,
  multiline,
  height,
  value,
  onChangeText,
  onBlur,
  editable,
  color,
  maxLength,

}: any) => {

  return (
    <View style={{ ...props,}}>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: colors.grey2,
        }}
      >
    
        <View style={{ flex: 1 }}>
        
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize: 18,
                width: windowWidth / 1.2,
                height: height || 50,
                fontFamily:"SF-Pro-Text-Regular",
                fontWeight: fontWeight,
                color: color || "#656469",
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              multiline={multiline}
              placeholderTextColor={"#656469"}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
  
        </View>
      
      </View>
    </View>
  );
};
export default CustomTextInput;
