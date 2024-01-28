import { Text, View, Image, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { useState } from "react";
import { images } from "../../assets";
import { Spacer } from "../Spacer";

type Props = {
  title?: string;
  setFocused?: any;
  focused?: number;
  onAdd?:any
};

const CustomBottomTab = ({ title, setFocused, focused,onAdd }: Props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#1A1A1B",
          height: 85,
          justifyContent: "space-between",
          paddingHorizontal:70,
          // padding:20,
          paddingVertical: 10,
          width: "100%",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: "center" }}
          onPress={() => setFocused(1)}
        >
          <Image
            source={images.chat}
            style={{
              height: 22,
              width: 22,
              tintColor: focused == 1 ? colors.white : colors.gray1,
            }}
          />
          <Spacer height={3} />


          <CustomText
            text={"Chat"}
            color={focused == 1 ? colors.white : "#959595"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: "center" }}
          onPress={() => setFocused(2)}
        >
          <Image
            source={images.event}
            style={{
              height: 22,
              width: 22,
              tintColor: focused == 2 ? colors.white : colors.gray1,
            }}
          />
          <Spacer height={3} />
          <CustomText
            text={"Events"}
            color={focused == 2 ? colors.white : "#959595"}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      activeOpacity={0.6}
      onPress={onAdd}
        style={{
          width: 65,
          height: 65,
          backgroundColor: colors.white,
          borderRadius: 9999,
          position: "absolute",
          top: -30,
          left:"43%",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
         <Image
            source={images.plus}
            style={{
              height: 35,
              width: 35,
            //   tintColor: focused == 2 ? colors.white : colors.gray1,
            }}
          />

      </TouchableOpacity>
    </View>
  );
};
export default CustomBottomTab;
