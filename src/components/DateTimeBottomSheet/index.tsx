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

LocaleConfig.locales["en"] = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };
  
  LocaleConfig.defaultLocale = "en";
  const DateTimeBottomSheet = ({ sheetRef, photosSheetRef, isPlain }) => {
    const dateTimeTopBar = ["Date & Time", "Poll", "TBD"];
    const [selectedDate,setSelectedDate]=useState("")
    const [dateTimeActiveBar, setDateTimeActiveBar] = useState("Date & Time");
    const timeFormat = ["AM", "PM"];
    const [selectFormat, setSelectFormat] = useState(0);





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
              backgroundColor: isPlain?colors.grey700:"transparent",
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
              text={isPlain ? "New Plan" : "Set Date & Time"}
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
            backgroundColor: colors.black100,
            // marginTop: 1,
            paddingHorizontal: 10,
          }}>
          <View style={{ height: "75%" }}>
            <TopBar
              topBarData={dateTimeTopBar}
              activeBar={dateTimeActiveBar}
              setActiveBar={setDateTimeActiveBar}
            />
            <Spacer height={20} />
            {dateTimeActiveBar == "Date & Time" ? (
              <>
                <Calendar
                  style={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    backgroundColor: colors.grey2,
                    height: 360,
                  }}
                  theme={{
                    backgroundColor: "#2C2C2E",
                    calendarBackground: "#2C2C2E",
                    textSectionTitleColor: "#EBEBF54D",
                    selectedDayBackgroundColor: "#0A84FF12",
                    selectedDayTextColor: "#0A84FF",
                    todayTextColor: "#0A84FF",
                    dayTextColor: "#ffffff",
                    monthTextColor: "#ffffff",
                    textDayFontSize: 18,
                    textMonthFontSize: 18,
                    textDayHeaderFontSize: 15,
                    textDayFontWeight: "600",
                    textMonthFontWeight: "bold",
                    textDayHeaderFontWeight: "600",
                    textDayFontFamily: "SF-Pro-Text-Regular",
                    textMonthFontFamily: "SF-Pro-Text-Regular",
                    textDayHeaderFontFamily: "SF-Pro-Text-Regular",

                    textDisabledColor: "#d9e ",
                    arrowColor: "#ffffff", // Change the color of the next and back arrows here
                  }}
                  // onDayPress={onDayPress}
                  onDayPress={day => {
                    setSelectedDate(day.dateString);
                  }}
                  markedDates={{
                    [selectedDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    height: 55,
                    backgroundColor: colors.grey2,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  }}>
                  <View
                    style={{
                      height: 0.5,
                      width: "96%",
                      backgroundColor: colors.gray1,
                      marginLeft: 15,
                    }}
                  />

                  <View
                    style={{
                      ...appStyles.rowjustify,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    }}>
                    <CustomText
                      text={"Ends"}
                      color={colors.white}
                      size={19}
                      fontWeight="500"
                      numberOfLines={1}
                      fontFam="SF-Pro-Display-Bold"
                    />
                    <View style={{ ...appStyles.row }}>
                      <View style={{ ...styles.timeContainer, height: 42 }}>
                        <CustomText
                          text={"8:00"}
                          color={colors.white}
                          size={18}
                          fontWeight="600"
                          numberOfLines={1}
                          fontFam="SF-Pro-Display-Bold"
                        />
                      </View>
                      <Spacer width={10} />
                      <View
                        style={{
                          ...appStyles.row,
                          height: 42,
                          width: 115,
                          backgroundColor: colors.grey767680,
                          borderRadius: 7,
                          paddingHorizontal: 3,
                        }}>
                        {timeFormat.map((item, index) => {
                          return (
                            <>
                              <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => {
                                  setSelectFormat(index);
                                }}
                                style={{
                                  ...styles.timeContainer,
                                  height: 35,
                                  backgroundColor:
                                    selectFormat == index
                                      ? "#636366"
                                      : "transparent",
                                  width: 52,
                                }}>
                                <CustomText
                                  text={item}
                                  color={colors.white}
                                  size={18}
                                  fontWeight="500"
                                  numberOfLines={1}
                                  fontFam="SF-Pro-Display-Bold"
                                />
                              </TouchableOpacity>
                              <Spacer width={5} />
                            </>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                </View>

                <Spacer height={"20%"} />
                <CustomButton text="Set Date & Time" size={22} />
              </>
            ) : dateTimeActiveBar == "Poll" ? (
              <>
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
                <CustomButton text="Set as TBD" size={22} />
              </>
            )}
          </View>
        </View>
  
        
        </View>
      </RBSheet>
    );
  };
  
  export default DateTimeBottomSheet;
  
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
  