import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../utils/colors";
import CustomBottomTab from "../../../components/CustomBottomTab";
import Events from "../Events";
import CustomHeader from "../../../components/CustomHeader";
import SearchBar from "../../../components/SearchBar";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
export const windowWidth = Dimensions.get("window").width;

const ChatList = ({item,onPress}:any) => {
  console.log("itemList",item)

  return (
    <>
      <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.6}
      style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "20%" ,flexDirection:"row"}}>

         
          <Image
            style={{ width: 90, height: 55, borderRadius: 5 }}
            source={item?.img}
            resizeMode="contain"
          />
        </View>
        <View>
          <View style={{ flexDirection: "row"}}>
            <View style={{ width:"56%", marginLeft:35, marginTop: 3}}>
              <CustomText
                text={item?.name}
                color={colors.white}
                size={14.5}
                fontWeight="600"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
              <Spacer height={10} />
              <CustomText
                text={item?.message}
                color={colors.gray1}
                size={12}
                fontWeight="500"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
            </View>
            <View style={{width:70}} >
              <View style={{...appStyles.row,alignSelf:"flex-end"}}>
                <CustomText
                  text={item?.time}
                  color={colors.gray1}
                  size={12}
                  style={{ marginTop: 5 }}
                  fontWeight="500"
                  fontFam="SF-Pro-Display-Bold"
                />
                <Spacer width={5} />

                <Image
                  style={{ width: 12, height: 12 }}
                  source={images.next}
                  resizeMode="contain"
                />
              </View>
              {/* <Spacer height={8}/> */}
              {
                item.online&&(
                  <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    backgroundColor: colors.white,
                    alignSelf: "flex-end",
                    marginTop: 15,
                  }}
                ></View>

                )
              }

             
            </View>
          </View>

          <View
            style={{
              height: 0.3,
              width: "85%",
              backgroundColor: colors.gray1,
              marginLeft: 35,
              marginTop: 23,
            }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ChatList;
