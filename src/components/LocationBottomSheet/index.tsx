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


  const LocationBottomSheet = ({ sheetRef, photosSheetRef, isPlain }) => {
    const EventLocationTopBar = ["Location", "Poll", "TBD"];
    const [locationActiveBar, setLocationActiveBar] = useState("Location");





    const mapLocation = [
        {
          title: "Rishi’s House",
          loc: "1838 9th St, Apt 201, Santa Monica, CA 90404, Unit...",
        },
        {
          title: "Rishi’s House",
          loc: "8653 W Sunset Blvd, West Hollywood, CA 90069, Un...",
        },
        {
          title: "Rishi’s House",
          loc: "8653 W Sunset Blvd, West Hollywood, CA 90069, Un...",
        },
        {
          title: "Rishi’s House",
          loc: "8653 W Sunset Blvd, West Hollywood, CA 90069, Un...",
        },
      ];
     

    const dateTimeOptions = [
        { date: "Jun 14, 2023", time: "9:41 AM" },
        { date: "Jun 14, 2023", time: "9:41 AM" },
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
              // backgroundColor: colors.grey700,
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
              text={"Set Location"}
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
            // marginTop: 1,
          }}>
          <View style={{ height: "75%" }}>
            <View style={{ paddingHorizontal: 15 }}>
              <TopBar
                topBarData={EventLocationTopBar}
                activeBar={locationActiveBar}
                setActiveBar={setLocationActiveBar}
              />
              <Spacer height={20} />
            </View>

            {locationActiveBar == "Location" ? (
              <>
                <View style={{ paddingHorizontal: 15 }}>
                  <SearchBar
                    backgroundColor={colors.grey767680}
                    placeholder="Enter Location, Text, or Link"
                  />
                </View>
                <View style={{ paddingLeft: 15 }}>
                  <Spacer height={20} />
                  <CustomLine backgroundColor={colors.grey400} />
                  <CustomText
                    text={"Plain Text or Link"}
                    color={"#9898A0"}
                    size={18}
                    lineHeight={25}
                    style={{ marginTop: 20, marginBottom: 7 }}
                    fontWeight="600"
                  />
                  <CustomLine backgroundColor={colors.grey400} />

                  <View style={{ ...appStyles.row, marginVertical: 10 }}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 999,
                        backgroundColor: "#9F9F9F",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={images.filter}
                      />
                    </View>

                    <CustomText
                      text={"“Rishi’s House”"}
                      color={colors.white}
                      size={18}
                      lineHeight={25}
                      style={{ marginLeft: 10 }}
                      fontWeight="500"
                    />
                  </View>
                  <CustomLine backgroundColor={colors.grey400} />

                  <CustomText
                    text={"Map Location"}
                    color={"#9898A0"}
                    size={18}
                    lineHeight={25}
                    style={{ marginTop: 20, marginBottom: 7 }}
                    fontWeight="600"
                  />
                  <CustomLine backgroundColor={colors.grey400} />
                  <Spacer height={20} />

                  {mapLocation.map((item, index) => {
                    return (
                      <>
                        <LocationContainer />
                        <Spacer height={20} />

                        <CustomLine backgroundColor={colors.grey400} />

                        <Spacer height={20} />
                      </>
                    );
                  })}

                  <Spacer height={20} />
                </View>
              </>
            ) : locationActiveBar == "Poll" ? (
              <>
              <View style={{padding:15}}>
              <View style={{ paddingHorizontal: 30 }}>
                  <CustomText
                    text={
                      "Can’t Decide on a date & time? Let your guests vote on the best one for them!"
                    }
                    color={colors.grey800}
                    size={19}
                    lineHeight={27}
                    style={{ textAlign: "center" }}
                    fontWeight="400"
                  />
                </View>
                <Spacer height={30} />
                <CustomText
                  text={"Date & Time Options"}
                  color={colors.grey800}
                  size={14}
                  fontWeight="500"
                  numberOfLines={1}
                  style={{ marginBottom: 10 }}
                />
                <CustomView paddingHorizontal={1}>
                  {dateTimeOptions.map((item, index) => {
                    return (
                      <View>
                        <View
                          style={{
                            ...appStyles.rowjustify,
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                          }}>
                          <CustomText
                            text={index + 1}
                            color={colors.white}
                            size={20}
                            fontWeight="400"
                            numberOfLines={1}
                          />
                          <View
                            style={{
                              ...appStyles.row,
                              marginHorizontal: 10,
                              width: "84%",
                            }}>
                            <View style={styles.dateTimeOption}>
                              <CustomText
                                text={item.date}
                                color={colors.white}
                                size={18}
                                fontWeight="400"
                                numberOfLines={1}
                              />
                            </View>
                            <Spacer width={10} />

                            <View style={styles.dateTimeOption}>
                              <CustomText
                                text={item.time}
                                color={colors.white}
                                size={18}
                                fontWeight="400"
                                numberOfLines={1}
                              />
                            </View>
                          </View>

                          <TouchableOpacity>
                            <Image
                              style={{ width: 23, height: 23 }}
                              source={images.circleCross}
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            height: 1,
                            backgroundColor: colors.grey400,
                            marginVertical: 10,
                            marginLeft: 20,
                          }}
                        />
                      </View>
                    );
                  })}

                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      ...appStyles.row,
                      marginVertical: 10,
                      marginHorizontal: 15,
                    }}>
                    <Image
                      style={{ width: 18, height: 18, tintColor: colors.blue }}
                      source={images.plus}
                    />
                    <Spacer width={10} />

                    <CustomText
                      text={"Add Poll Option"}
                      color={colors.blue}
                      size={20}
                      fontWeight="500"
                      numberOfLines={1}
                    />
                  </TouchableOpacity>
                </CustomView>

                <Spacer height={30} />
                <CustomText
                  text={"Voting Ends"}
                  color={colors.grey800}
                  size={14}
                  fontWeight="500"
                  numberOfLines={1}
                  style={{ marginBottom: 10 }}
                />
                <CustomView paddingHorizontal={1} paddingVertical={5}>
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      marginLeft: 15,
                      marginRight: 5,
                      paddingVertical: 5,
                    }}>
                    <CustomText
                      text={"Ends"}
                      color={colors.white}
                      size={20}
                      fontWeight="400"
                      numberOfLines={1}
                    />
                    <View style={{ ...appStyles.row, marginHorizontal: 10 }}>
                      <View style={styles.dateTimeOption}>
                        <CustomText
                          text={"Jun 14, 2023"}
                          color={colors.white}
                          size={18}
                          fontWeight="400"
                          numberOfLines={1}
                        />
                      </View>
                      <Spacer width={10} />

                      <View style={styles.dateTimeOption}>
                        <CustomText
                          text={"9:41 AM"}
                          color={colors.white}
                          size={18}
                          fontWeight="400"
                          numberOfLines={1}
                        />
                      </View>
                    </View>
                  </View>
                </CustomView>

                <Spacer height={"20%"} />
                <CustomButton text="Create Poll" size={22} /> 

              </View>
             
              </>
            ) : (
              <>
                <View style={{ paddingHorizontal: 40 }}>
                  <Spacer height={"20%"} />

                  <CustomText
                    text={"Don’t have a date & time yet? Figure it out later!"}
                    color={colors.grey800}
                    size={20}
                    lineHeight={27}
                    style={{ textAlign: "center" }}
                    fontWeight="400"
                  />
                  <Spacer height={"17%"} />

                  <View style={appStyles.row}>
                    <Image
                      style={{ height: 100, width: 100 }}
                      source={images.T}
                      resizeMode={"contain"}
                    />
                    <Image
                      style={{ height: 100, width: 100 }}
                      source={images.B}
                      resizeMode={"contain"}
                    />
                    <Image
                      style={{ height: 100, width: 100 }}
                      source={images.D}
                      resizeMode={"contain"}
                    />
                  </View>
                </View>

                <Spacer height={"27%"} />
                <View style={{paddingHorizontal:15}}>
                <CustomButton text="Set as TBD" size={22} />


                </View>
              </>
            )}
          </View>
        </View>
        
  
        
        </View>
      </RBSheet>
    );
  };
  
  export default LocationBottomSheet;
  
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
  