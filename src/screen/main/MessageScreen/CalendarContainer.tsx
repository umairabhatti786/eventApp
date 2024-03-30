import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { Spacer } from "../../../components/Spacer";
import { image } from "../../../assets/defaultimages";
import { images } from "../../../assets";

const CalendarContainer = ({ txt, img ,onPress,item}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
      style={{
    flexDirection:"row",
        backgroundColor: "#191919",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
      }}>
      <View style={appStyles.row}>
        <View style={{ alignItems: "center" }}>
          <CustomText
            text={ item?.date|| "12/26"}
            color={colors.white}
            size={17}
            fontWeight="600"
            style={{ marginBottom: 2 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
          <CustomText
            text={ item?.day|| "Wed"}
            color={colors.white}
            size={17}
            fontWeight="600"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
        </View>
        <Spacer width={15} />

        <Image
          style={{ width: 100, height: 65 }}
          source={ item?.img || images.eventimage1}
          resizeMode="contain"
        />
      </View>
      <Spacer width={15} />

      <View >
          <CustomText
            text={ item?.title || "Pregame Beers"}
            color={colors.white}
            size={17}
            fontWeight="600"
            // style={{ marginBottom: 2 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
          <Spacer height={5}/>
          <View style={appStyles.row}>
          <Image
          style={{ width: 15, height: 15 }}
          source={images.location}
          resizeMode="contain"
        />
        <Spacer width={5}/>
            <CustomText
            text={ item?.location ||"Santa Monica Brew Works"}
            color={colors.white}
            size={13}
            fontWeight="500"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          </View>

          <Spacer height={5}/>
          <View style={appStyles.row}>
          <Image
          style={{ width: 15, height: 15 }}
          source={images.time}
          resizeMode="contain"
        />
        <Spacer width={5}/>
            <CustomText
            text={ item?.time|| "Starts @ 7:15 PM"}
            color={colors.white}
            size={13}
            textDecorationLine={"underline"}
            fontWeight="500"
            numberOfLines={1}
          />

          </View>
        
        </View>

      

      {/* <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30 }}
            source={img}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
    </TouchableOpacity>
  );
};

export default CalendarContainer;

const styles = StyleSheet.create({});
