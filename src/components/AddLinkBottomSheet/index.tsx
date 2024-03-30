import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import React, { useState } from "react";
  import RBSheet from "react-native-raw-bottom-sheet";
  import CustomText from "../CustomText";
  import { Spacer } from "../Spacer";
  import { colors } from "../../utils/colors";
  import { image } from "../../assets/defaultimages";
  import { images } from "../../assets";
  import { appStyles } from "../../utils/AppStyles";
  import { windowHeight, windowWidth } from "../../utils/CommonFun";
  import CustomLine from "../CustomLine";
import CustomButton from "../CustomButton";
import { Calendar, LocaleConfig } from "react-native-calendars";
import TopBar from "../TopBar";
import CustomView from "../CustomView";
import LocationContainer from "../../screen/main/HomeChat/LocationContainer";
import SearchBar from "../SearchBar";


  const AddLinkBottomSheet = ({ sheetRef, photosSheetRef, isPlain }) => {
   
    return (
      <RBSheet
        ref={sheetRef}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            height: "93%",
            backgroundColor: colors.black100,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: "100%",
          },
        }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: windowWidth,
              height: 80,
              backgroundColor: colors.grey700,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}>
            <View style={{ width: "20%" }}>
              <TouchableOpacity
                activeOpacity={0.6}
                //  disabled={!onLeft}
                onPress={() => sheetRef.current.close()}>
                <CustomText
                  text={"Cancel"}
                  color={colors.grey300}
                  size={19}
                  fontWeight="500"
                  numberOfLines={1}
                  // fontFam="SF-Pro-Display-Bold"
                />
              </TouchableOpacity>
            </View>
            <CustomText
              text={"Add Link"}
              color={colors.white}
              size={19}
              fontWeight="700"
              numberOfLines={1}
              fontFam="SF-Pro-Display-Bold"
            />
  
            <TouchableOpacity
              activeOpacity={0.6}
              //   disabled={!onRight}
              //   onPress={onRight}
              style={{ width: "20%", alignItems: "flex-end" }}>
              <CustomText
                text={"Add"}
                color={colors.blue}
                size={19}
                style={{ textAlign: "flex-end" }}
                fontWeight="500"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
            </TouchableOpacity>
          </View>
          <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: colors.black100,
        padding:20
            // marginTop: 1,
          }}>
               <CustomView
        backgroundColor={"#313035"}
        borderRadius={8}
        paddingHorizontal={-1}
    
        >
            <View style={{paddingLeft:15}}>
                <View style={{...appStyles.row,paddingBottom:5}}>
                <CustomText
                text={"Link Title:"}
                color={"#A0A0A8"}
                size={19}
                style={{ textAlign: "flex-end" }}
                fontWeight="400"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
              <View style={{paddingHorizontal:10}} >
                  <TextInput
                //   placeholder="cdondin"
                  placeholderTextColor={"red"}
                  style={{
                    height:30,
                    width:windowWidth/1.5,
                    fontSize:17,
                    color:colors.white,
                }}
                  />

              </View>

                </View>
                <CustomLine
                backgroundColor={"#828282"}
                />
                <Spacer height={5}/>

<View style={appStyles.row}>
                <CustomText
                text={"Link:"}
                color={"#A0A0A8"}
                size={19}
                style={{ textAlign: "flex-end" }}
                fontWeight="400"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
              <View style={{paddingHorizontal:10}} >
                  <TextInput
                //   placeholder="cdondin"
                //   placeholderTextColor={"red"}
                  style={{
                      height:30,
                    width:windowWidth/1.5,
                    fontSize:17,
                    color:colors.white,
                }}
                  />

              </View>

                </View>
               

            </View>
       

        </CustomView>
         
        </View>

       
        
  
        
        </View>
      </RBSheet>
    );
  };
  
  export default AddLinkBottomSheet;
  
  const styles = StyleSheet.create({
    optionsBox: {
      width: windowWidth / 3.5,
      height: 60,
      backgroundColor: "#4B4B4B",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
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
    dateTimeOption: {
        backgroundColor: colors.grey767680,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingVertical: 7,
      },
      timeContainer: {
        width: 60,
        backgroundColor: colors.grey767680,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      },
  });
  