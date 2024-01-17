import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets";

type Props = {
  navigation?: any;
  isNext?: boolean;
  text?:string,
  subTitle?:string
  onPress?:any
  //   status?:string
};

const SettingContainer = ({
  navigation,
  isNext,
  text,
  onPress,
  subTitle
}: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical:5,
      }}
    >
      <CustomText
        text={text}
        color={colors.white}
        size={16}
      />
      {isNext ? (
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ width: 30, height: 30,alignItems:"flex-end",justifyContent:"center" }}
          onPress={onPress}
        >
          <Image
            resizeMode="contain"
            style={{ width: 18, height: 18 }}
            source={images.next}
          />
        </TouchableOpacity>
      ) : (
        <CustomText
          text={subTitle}
          color={colors.white}
          fontFam="Inter-Bold"
          size={17}
        />
      )}
    </View>
  );
};
export default SettingContainer;

const styles = StyleSheet.create({});
