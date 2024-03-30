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
  ImageBackground,
  TouchableOpacity,
  TextInput
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
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import { windowHeight } from "../../../utils/CommonFun";
import CustomLine from "../../../components/CustomLine";
export const windowWidth = Dimensions.get("window").width;

const ChoosePosterSheet = ({ref}:any) => {

  return (
    <>

<CustomBottomSheet
        right={"Create"}
        title={"New Event"}
        left={"Cancel"}
        topHeight={60}
        onLeft={() => ref.current.close()}
        sheetRef={ref}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: colors.black100,
            marginTop: 1,
            paddingHorizontal: 10,
          }}>
          <CustomText
            text={"Add Event Title"}
            textDecorationLine={"underline"}
            color={colors.white}
            size={35}
            style={{ textAlign: "center", fontStyle: "italic", marginTop: 20 }}
            fontFam="BlaakBold-PERSONAL"
          />
          <ImageBackground
            style={styles.imgContainer}
            source={images.eventback}
            resizeMode={"contain"}>
            <TouchableOpacity activeOpacity={0.6} style={styles.editContainer}>
              <Image style={{ width: 22, height: 22 }} source={images.pincel} />
            </TouchableOpacity>
          </ImageBackground>

          <CustomText
            text={"Details"}
            color={colors.grey800}
            size={15}
            fontWeight="500"
            numberOfLines={1}
            style={{ marginLeft: 10, marginBottom: 10 }}
            fontFam="SF-Pro-Display-Bold"
          />

          <View
            style={{
              width: windowWidth / 1.1,
              alignSelf: "center",
              // height: 200,
              backgroundColor: colors.grey2,
              borderRadius: 10,
            }}>
            <View
              style={{
                ...appStyles.row,
                // paddingTop: 15,
                paddingLeft: 15,
                // backgroundColor:"red",
                height: 50,
              }}>
              <Image
                style={{ width: 25, height: 25 }}
                source={images.datetime}
              />
              <View>
                <View
                  style={{ ...appStyles.rowjustify, width: windowWidth / 1.3,marginTop:15 }}>
                  <CustomText
                    text={"Date and Time*"}
                    color={colors.white}
                    size={17}
                    fontWeight="500"
                    numberOfLines={1}
                    style={{ marginLeft: 20 }}
                    fontFam="SF-Pro-Display-Bold"
                  />
                  <Image
                    style={{ width: 18, height: 18 }}
                    resizeMode="contain"
                    source={images.next}
                  />
                </View>

                <Spacer height={15} />
                <View style={{ marginLeft: 20 }}>
                  <CustomLine
                    width={windowWidth - 101}
                    backgroundColor={"#595959"}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                ...appStyles.row,
                paddingTop: 15,
                paddingLeft: 15,
                height: 50,
              }}>
              <Image
                style={{ width: 25, height: 25,marginBottom:15 }}
                source={images.location}
              />
              <View>
                <View
                  style={{ ...appStyles.rowjustify, width: windowWidth / 1.3 }}>
                  <CustomText
                    text={"Location*"}
                    color={colors.white}
                    size={17}
                    fontWeight="500"
                    numberOfLines={1}
                    style={{ marginLeft: 20 }}
                    fontFam="SF-Pro-Display-Bold"
                  />
                  <Image
                    style={{ width: 18, height: 18 }}
                    resizeMode="contain"
                    source={images.next}
                  />
                </View>

                <Spacer height={15} />
                <View style={{ marginLeft: 20 }}>
                  <CustomLine
                    width={windowWidth - 101}
                    backgroundColor={"#595959"}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                ...appStyles.row,
                // paddingTop: 15,
                paddingLeft: 15,
                height: 50,
              }}>
              <Image
                style={{ width: 25, height: 25 }}
                source={images.copylink}
              />
              <View>
                <View
                  style={{ ...appStyles.rowjustify, width: windowWidth / 1.3 }}>
                  <CustomText
                    text={"Custom Link"}
                    color={colors.white}
                    size={17}
                    fontWeight="500"
                    numberOfLines={1}
                    style={{ marginLeft: 20 }}
                    fontFam="SF-Pro-Display-Bold"
                  />
                  <Image
                    style={{ width: 18, height: 18 }}
                    resizeMode="contain"
                    source={images.next}
                  />
                </View>
              </View>
            </View>

            
          </View>

          <CustomText
            text={"Description"}
            color={colors.grey800}
            size={15}
            fontWeight="500"
            numberOfLines={1}
            style={{ marginLeft: 10,marginTop:30,marginBottom:10}}
            fontFam="SF-Pro-Display-Bold"
          />
          <View
           style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            backgroundColor: colors.grey2,
            borderRadius: 10,
            padding:10
          }}
          >
            <TextInput
            placeholder="Tell your guest about the event.. "
            placeholderTextColor={"#66656B"}
            style={{fontSize:17,fontFamily:"SF-Pro-Text-Regular"}}
            />
            
          </View>
        </View>
      </CustomBottomSheet>
    
    </>
  );
};

export default ChoosePosterSheet;

const styles=StyleSheet.create({
    imgContainer: {
        width: "99%",
        height: 270,
        borderRadius: 40,
        alignSelf: "center",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
      editContainer: {
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        backgroundColor: colors.black41,
        bottom: 35,
        right: 15,
      },

})
