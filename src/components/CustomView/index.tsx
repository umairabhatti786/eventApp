import { Text, TouchableOpacity, View, Image } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { images } from "../../assets";
import { Spacer } from "../Spacer";

type Props = {
  title?: string;
  firstImage?: any;
  secondImage?: any;
  thirdImage?: any;
  thirdHeight?: number;
  thirdWidth?: number;
  borderWidth?:number
  children?:any
  onPress?:any
};

const CustomView = ({
  title,
  firstImage,
  secondImage,
  thirdImage,
  thirdHeight,
  thirdWidth,
  borderWidth,
  children,
  onPress
}: Props) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
      style={{
        paddingHorizontal: 15,
       
        // width: 120,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth:borderWidth,
        borderColor:"#8F8F8F",
        borderRadius:12,
        backgroundColor:colors.grey2
      }}
    >
        {children}

    </TouchableOpacity>
  );
};
export default CustomView;
