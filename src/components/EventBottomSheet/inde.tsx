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
import CreateEventModal from "../../screen/main/HomeChat/CreateEventModal";

const EventBottomSheet = ({ sheetRef, photosSheetRef, isPlain,dateTimeSheetRef,LocationSheetRef,AddLinkSheetRef,InviteFriendSheetRef }:any) => {

  const [isCreateEvent,setIsCreateEvent]=useState(false)

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
            text={isPlain ? "New Plan" : "New Message"}
            color={colors.white}
            size={19}
            fontWeight="700"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          <TouchableOpacity
            activeOpacity={0.6}
            //   disabled={!onRight}
              onPress={()=>setIsCreateEvent(true)}
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
            backgroundColor: colors.black100,
            marginTop: 1,
            paddingHorizontal: 10,
          }}>
          <CustomText
            text={isPlain ? "Add Plan Title*" : "Add Event Title"}
            textDecorationLine={"underline"}
            color={colors.white}
            size={37}
            fontWeight="700"
            style={{ textAlign: "center", fontStyle: "italic", marginTop: 20 }}
            fontFam="BlaakExtraBold-PERSONAL"
          />
          <Spacer height={20}/>
          {isPlain ? (
            <>
              <ImageBackground
              source={images.backgreen}
              style={{
                width: "100%",
                height: windowHeight / 4,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Image
                style={{ width: 180, height: 180 }}
                source={images.defimage}
                resizeMode="contain"
              />
              <View style={{ position: "absolute", bottom: 10, right: 10,flexDirection:"row",alignItems:"center" }}>
                <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  sheetRef.current.close();

                  setTimeout(() => {
                    photosSheetRef.current.open();
                  }, 500);
                }}
                  style={{
                    paddingHorizontal: 18,
                    paddingVertical: 7,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:"#00000055",
                    borderTopLeftRadius:30,
                    borderBottomLeftRadius:30
                  
                  }}>
                     <Image
                style={{ width: 25, height: 25 }}
                source={images.photo}
                resizeMode="contain"
              />

                  </TouchableOpacity>
                  <Spacer width={2}/>

                  <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    paddingHorizontal: 18,
                    paddingVertical: 7,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:"#00000055",
                    borderTopRightRadius:30,
                    borderBottomRightRadius:30
                  
                  }}>
                     <Image
                style={{ width: 25, height: 25 }}
                source={images.emoji}
                resizeMode="contain"
              />

                  </TouchableOpacity>
              </View>
            </ImageBackground>
            <CustomText
            text={"Click the emoji icon to change the emoji or click the  picture icon to add a custom thumbnail."}
            color={colors.grey800}
            size={15}
            fontWeight="400"
            style={{margin:10 }}
            fontFam="SF-Pro-Display-Bold"
          />
            </>
          
          ) : (
            <ImageBackground
              style={styles.imgContainer}
              source={images.eventback}
              resizeMode={"contain"}>
              <TouchableOpacity
                onPress={() => {
                  sheetRef.current.close();

                  setTimeout(() => {
                    photosSheetRef.current.open();
                  }, 500);
                }}
                activeOpacity={0.6}
                style={styles.editContainer}>
                <Image
                  style={{ width: 22, height: 22 }}
                  source={images.pincel}
                />
              </TouchableOpacity>
            </ImageBackground>
          )}

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
                <TouchableOpacity
                  activeOpacity={0.6}
                    onPress={() => {
                      sheetRef.current.close();
                      setTimeout(() => {
                        dateTimeSheetRef.current.open();
                      }, 500);
                    }}
                  style={{
                    ...appStyles.rowjustify,
                    width: windowWidth / 1.3,
                    marginTop: 15,
                  }}>
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
                </TouchableOpacity>

                <Spacer height={15} />
                <View style={{ marginLeft: 20 }}>
                  <CustomLine
                    width={windowWidth - 101}
                    backgroundColor={"#595959"}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
                onPress={() => {
                  sheetRef.current.close();
                  setTimeout(() => {
                    LocationSheetRef.current.open();
                  }, 500);
                }}
              style={{
                ...appStyles.row,
                paddingTop: 15,
                paddingLeft: 15,
                height: 50,
              }}>
              <Image
                style={{ width: 25, height: 25, marginBottom: 15 }}
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
            </TouchableOpacity>
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
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    sheetRef.current.close();
  
                    setTimeout(() => {
                      AddLinkSheetRef.current.open();
                    }, 500);
                  }}
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
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <CustomText
            text={"Description"}
            color={colors.grey800}
            size={15}
            fontWeight="500"
            numberOfLines={1}
            style={{ marginLeft: 10, marginTop: 30, marginBottom: 10 }}
            fontFam="SF-Pro-Display-Bold"
          />
          <View
            style={{
              width: windowWidth / 1.1,
              alignSelf: "center",
              height: 200,
              backgroundColor: colors.grey2,
              borderRadius: 10,
              padding: 10,
            }}>
            <TextInput
              placeholder="Tell your guest about the event.. "
              placeholderTextColor={"#66656B"}
              style={{ fontSize: 17, fontFamily: "SF-Pro-Text-Regular" }}
            />
          </View>
        </View>
      </View>

      {
          isCreateEvent&&(
            <CreateEventModal
            onPressInvite={()=>{
              setIsCreateEvent(false)

              sheetRef .current.close();

                // setTimeout(() => {
                //   InviteFriendSheetRef.current.open();
                // }, 500);

            }}
            />

          )
        }
    </RBSheet>
  );
};

export default EventBottomSheet;

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
