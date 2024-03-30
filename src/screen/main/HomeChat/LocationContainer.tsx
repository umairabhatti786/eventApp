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

const LocationContainer = ({item}:any) => {
  console.log("itemList",item)

  return (
    <>
    
      <View style={appStyles.row}>
          <Image
          style={{width:40,height:40}}
          source={images.locationpin}
          />
          <View style={{marginHorizontal:15,width:"80%",marginTop:-5}}>
          <CustomText
                    text={"Rishi’s House"}
                    color={colors.white}
                    size={20}
                    lineHeight={25}
                    fontWeight="500"
                  />
                  <Spacer height={7}/>
                
                   <CustomText
                    text={"1838 9th St, Apt 201, Santa Monica, CA 90404, Unitcdcdc"}
                    color={"#6F6F77"}
                    size={13}
                    numberOfLines={1}
                    fontWeight="500"
                  />

          </View>
      
      </View>
    </>
  );
};

export default LocationContainer;
