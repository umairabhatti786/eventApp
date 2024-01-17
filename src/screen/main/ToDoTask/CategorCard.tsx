import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
  
  type Props = {

    item?: any;
  
    //   status?:string
  };
  
  const CategorCard = ({
 
    item,

  }: Props) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          justifyContent: "center",
          width: 130,
          height: 65,
          backgroundColor: colors.lightGray,
          borderColor: item?.color,
          borderWidth: 1.2,
          borderRadius: 20,
          paddingHorizontal:15,
          marginVertical:5,
        }}
      >
        <CustomText
          text={item.title}
          color={ colors.white}
          fontFam="Inter-Bold"
          size={17}
          //   style={{ marginTop: 25 }}
        />
        <CustomText
          text={item.des}
          color={ colors.white}
          fontFam="Inter-Bold"
          size={14}
          //   style={{ marginTop: 25 }}
        />
      </TouchableOpacity>
    );
  };
  export default CategorCard;
  
  const styles = StyleSheet.create({});
  