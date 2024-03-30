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
  import React, { useMemo, useState } from "react";
  import RBSheet from "react-native-raw-bottom-sheet";
  import CustomText from "../CustomText";
  import { Spacer } from "../Spacer";
  import { colors } from "../../utils/colors";
  import { image } from "../../assets/defaultimages";
  import { images } from "../../assets";
  import { appStyles } from "../../utils/AppStyles";
  import { windowHeight, windowWidth } from "../../utils/CommonFun";
  import CustomLine from "../CustomLine";
  import MasonryList from "@react-native-seoul/masonry-list";
import TopBar from "../TopBar";
import SearchBar from "../SearchBar";

  
  const PhotosBottomSheet = ({ sheetRef }) => {
    const posterTopBar = ["GIF", "Image", "Upload"];
    const [activeTopBar,setActiveTopBar]=useState("GIF")
    

    const imageGif = [
        { height: 200 },
        { height: 200 },
        { height: 200 },
        { height: 200 },
        { height: 200 },
        { height: 200 },
        { height: 200 },
        { height: 200 },
      ];
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
                 onPress={()=>sheetRef.current.close()}
              >
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
              text={"New Message"}
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
                text={"Create"}
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
            backgroundColor: colors.grey700,
            // marginTop: 1,
            paddingHorizontal: 10,
          }}>
          <TopBar
            topBarData={posterTopBar}
            activeBar={activeTopBar}
            setActiveBar={setActiveTopBar}
          />
          <Spacer height={20} />

          <SearchBar
            backgroundColor={"#313035"}
            textColor={colors.white}
            placeholder="Find a GIF"
          />
          <Spacer height={20} />

          <MasonryList
            data={imageGif}
            numColumns={2}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              const randomBool = useMemo(() => Math.random() < 0.5, []);

              return (
                <View
                  style={{
                    width: windowWidth / 2.2,
                    height: randomBool ? 100 : 200,
                    backgroundColor: "#D9D9D9",
                    margin: 5,
                  }}></View>
              );
            }}
          />
        </View>
  
         
        </View>
      </RBSheet>
    );
  };
  
  export default PhotosBottomSheet;
  
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
  });
  