import { Text, View, Image, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { useState } from "react";
import { images } from "../../assets";
import { Spacer } from "../Spacer";
import RBSheet from "react-native-raw-bottom-sheet";
import { windowWidth } from "../../utils/CommonFun";


type Props = {
  title?: string;
  setFocused?: any;
  focused?: number;
  onAdd?:any
  sheetRef?:any
  children?:any
  left?:any,
  right?:any
  onRight?:()=>void,
  onLeft?:()=>void,
  topHeight?:number
  backgroundColor?:any
  paddingHorizontal?:any


};

const CustomBottomSheet = ({ title, setFocused, focused,onAdd ,sheetRef,children,left,right,onRight,onLeft,topHeight,backgroundColor,paddingHorizontal}: Props) => {
  return (
    <RBSheet
    ref={sheetRef}
   height={300}
   openDuration={250}
   customStyles={{
     container: {
       justifyContent: "center",
       alignItems: "center",
       height:"93%",
       backgroundColor:colors.black100,
       borderTopLeftRadius:10,
       borderTopRightRadius:10,
       width:"100%"
     }
   }}
 >
     <View style={{flex:1}}>
         <View style={{width:windowWidth,height: topHeight|| 80,backgroundColor:backgroundColor||  colors.grey700,alignItems:"center",flexDirection:"row",justifyContent:"space-between",paddingHorizontal: paddingHorizontal||10}}>
             <View 
             style={{width:"20%"}}
             >
                 {
                     left&&(
                         <TouchableOpacity
                         activeOpacity={0.6}
                         disabled={!onLeft}
                         onPress={onLeft}
                         >
                              <CustomText
                        text={left}
                        color={colors.grey300}
                        size={19}
                        fontWeight="500"
                        numberOfLines={1}
                        // fontFam="SF-Pro-Display-Bold"
                      />

                         </TouchableOpacity>
                       
                     )
                 }

                 </View>
         <CustomText
                text={ title|| "New Message"}
                color={colors.white}
                size={19}
                fontWeight="700"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />

              <TouchableOpacity 
              activeOpacity={0.6}
              disabled={!onRight}
              onPress={onRight}
              style={{width:"20%",alignItems:"flex-end"}}
              >
              <CustomText
                text={right}
                color={colors.blue}
                size={19}
                style={{textAlign:"flex-end"}}
                fontWeight="500"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />

              </TouchableOpacity>
         </View>

         {children}

     </View>
 </RBSheet>
 
  );
};
export default CustomBottomSheet;
