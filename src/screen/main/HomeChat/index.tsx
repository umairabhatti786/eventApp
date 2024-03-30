import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { colors } from "../../../utils/colors";
import CustomBottomTab from "../../../components/CustomBottomTab";
import Events from "../Events";
import CustomHeader from "../../../components/CustomHeader";
import SearchBar from "../../../components/SearchBar";
import { Spacer } from "../../../components/Spacer";
import ChatList, { windowWidth } from "./ChatList";
import { images } from "../../../assets";
import AddEventModal from "./AddEventModal";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import CustomText from "../../../components/CustomText";
import ContactContainer from "../../../components/ContactContainer";
import { appStyles } from "../../../utils/AppStyles";
import MessageScreen from "../MessageScreen";
import MessageSender from "../../../components/MessageSender";
import { windowHeight } from "../../../utils/CommonFun";
import CustomLine from "../../../components/CustomLine";
import ChoosePosterSheet from "./ChoosePosterSheet";
import TopBar from "../../../components/TopBar";
import MasonryList from "@react-native-seoul/masonry-list";
import { Calendar, LocaleConfig } from "react-native-calendars";
import CustomButton from "../../../components/CustomButton";
import CustomView from "../../../components/CustomView";
import LocationContainer from "./LocationContainer";
import { AlphabetList } from "react-native-section-alphabet-list";
import CreateEventModal from "./CreateEventModal";
import * as Animatable from 'react-native-animatable';
import AddLinkBottomSheet from "../../../components/AddLinkBottomSheet";


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

export const HomeChat = ({navigation}) => {
  const [focused, setFocused] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const [activeBar, setActiveBar] = useState(0);
  const [dateTimeActiveBar, setDateTimeActiveBar] = useState("Date & Time");

  const messageRef = useRef();
  const eventRef = useRef();
  const photosSheetRef = useRef();
  const DateTimeSheetRef = useRef();
  const LocationSheetRef = useRef();
  const InviteFriendSheetRef = useRef();
  const AddLinkSheetRef=useRef()
const [isCreateEvent,setIsCreateEvent]=useState(false)

  const [selectedDate, setSelectedDate] = useState("");
  const [selectFormat, setSelectFormat] = useState(0);
  const [locationActiveBar, setLocationActiveBar] = useState("Location");
  const [activePoster,setActivePoster]=useState("GIF")

  const posterTopData = ["GIF", "Image", "Upload"];
  const timeFormat = ["AM", "PM"];

  const dateTimeTopBar = ["Date & Time", "Poll", "TBD"];
  const EventLocationTopBar = ["Location", "Poll", "TBD"];

  const dateTimeOptions = [
    { date: "Jun 14, 2023", time: "9:41 AM" },
    { date: "Jun 14, 2023", time: "9:41 AM" },
  ];
  const [selectedContact, setSelectedContact] = useState([]);

  const contactList = [
    { value: "Amanda Virden", id: 1 },
    { value: "Amanda Virden", id: 2 },
    { value: "Amanda Virden", id: 3 },
    { value: "Amanda Virden", id: 4 },
    { value: "Amanda Virden", id: 5 },
    { value: "Amanda Virden", id: 6 },
    { value: "Amanda Virden", id: 7 },
    { value: "bmanda Virden", id: 8 },
    { value: "bmanda Virden", id: 9 },
    { value: "bmanda Virden", id: 10 },
  ];

  // const messageRef = useRef();

  console.log("selectedContactData", selectedContact);

  const [toContact, setToContact] = useState([]);
  const [search, setSearch] = useState("");
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
  const onAddContact = (item, index) => {
    console.log("knckdnv", index);

    const findObject = selectedContact?.find((e) => e.id == item.id);
    if (findObject) {
      const dataContact1 = selectedContact.filter((f) => f.id != item.id);

      setSelectedContact(dataContact1);
    } else {
      const dataContact = [...selectedContact, item]; // Replace 'New Data' with your actual data
      setSelectedContact(dataContact);
    }
  };

  // const toContact=[]
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

  const chatListData = [
    {
      img: images.eventimage3,
      name: "Nico’s Birthday!",
      time: "5:45 PM",
      message: "Emma added 5 pice to album ",
      online: true,
    },
    {
      img: images.usertitle1,
      name: "Rishi Narain",
      time: "Yesterday",
      message: "What’s the plan, stan?",
      online: true,
    },
    {
      img: images.eventimage1,
      name: "Random Event Title",
      time: "5/31/23",
      message: "Emma added 5 pice to album ",
      isEvent:true,
      isGroup:true

    },
    {
      img: images.eventimage2,
      name: "Random Event Title",
      time: "5/31/23",
      message: "Emma added 5 pice to album ",
      isEvent:true,
      isGroup:true


    },

    {
      img: images.eventimage4,
      name: "Amanda Virden",
      time: "5:45 PM",
      message: "Love you long time <3",
    },
    {
      img: images.groupimage,
      name: "Nico Kerner, Ryan Dale, Chr...",
      time: "5:45 PM",
      message: "What are you guys doing for dinner?",
      isGroup:true
    },
  ];

  const messageArray = [
    { value: "Amanda Virden", id: 1 },
    { value: "Amanda Virden", id: 2 },
    { value: "Amanda Virden", id: 3 },
    { value: "Amanda Virden", id: 4 },
    { value: "Amanda Virden", id: 5 },
    { value: "Amanda Virden", id: 6 },
    { value: "Amanda Virden", id: 7 },
  ];
  const renderChatList = ({ item, index }) => {
    console.log("ckbdk", index);

    return <ChatList 
    onPress={()=>{
      navigation.navigate("MessageScreen",{isEvent:item.isEvent,isGroup:item.isGroup})

    }}
    item={item} />;
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.black,
          paddingTop: Platform.OS == "ios" ? 40 : 30,
        }}>
        {focused == 1 ? (
          <View style={{ padding: 20 }}>
            <Spacer height={20} />

            <CustomHeader 
            onProfile={()=>navigation.navigate("Profile")}
            onNotification={()=>navigation.navigate("Notifications")}
            thirdHeight={23} thirdWidth={23} />
            <Spacer height={20} />
            <SearchBar textColor={colors.white} placeholder="Search" />
            <Spacer height={30} />

            <FlatList
              data={chatListData}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 20,
              }}
              renderItem={renderChatList}
            />
          </View>
        ) : (
          <>
            <Events />
          </>
        )}
      </View>

      <CustomBottomTab
        onAdd={() => {
          // sheetRef.current.open()
          setIsAdd(true);
        }}
        setFocused={setFocused}
        focused={focused}
      />

      <AddEventModal
        isModalVisible={isAdd}
        onNewChat={() => {
          setIsAdd(false);
          setTimeout(() => {
            messageRef.current.open();
          }, 500);
        }}
        onNewEvent={() => {
          setIsAdd(false);
          setTimeout(() => {
            eventRef.current.open();
          }, 500);
        }}
        setModalVisible={setIsAdd}
      />
      <CustomBottomSheet
        right={"Cencel"}
        onRight={() => messageRef.current.close()}
        sheetRef={messageRef}>
        <View
          style={{
            width: windowWidth,
            height: 50,
            alignItems: "center",
            paddingHorizontal: 10,
            borderBottomWidth: 0.5,
            flexDirection: "row",
            borderBottomColor: colors.grey400,
          }}>
          <CustomText
            text={"To :"}
            color={colors.white}
            size={15}
            fontWeight="500"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
          {/* 0A86CD */}

          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            {toContact.length == 0 ? (
              <TextInput
                value={search}
                onChangeText={(text) => setSearch(text)}
                style={{
                  fontFamily: "SF-Pro-Display-Bold",
                  color: colors.white,
                  fontSize: 17,
                  width: "100%",
                }}
              />
            ) : (
              <ScrollView style={{ flex: 1 }} horizontal>
                <View style={{ ...appStyles.row, height: 60 }}>
                  {toContact.map((item) => {
                    return (
                      <View style={styles.toContactContainer}>
                        <CustomText
                          text={item.value}
                          color={"#0A86CD"}
                          size={15}
                          fontWeight="500"
                          numberOfLines={1}
                          // style={{marginLeft:-10}}
                          fontFam="SF-Pro-Display-Bold"
                        />
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            )}
          </View>
          <TouchableOpacity>
            <Image style={{ width: 22, height: 22 }} source={images.add} />
          </TouchableOpacity>
        </View>
        <Spacer height={10} />

        <FlatList
          data={messageArray}
          // contentContainerStyle={{ gap: 15 }}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <ContactContainer
              item={item}
              onAdd={() => {
                const newDataArray = [...toContact, item]; // Replace 'New Data' with your actual data
                setToContact(newDataArray);
              }}
            />
          )}
        />
        {search.length == 0 && (
          <View style={{ margin: 10 }}>
            <MessageSender />
            <Spacer height={20} />
          </View>
        )}
      </CustomBottomSheet>

      <CustomBottomSheet
        right={"Create"}
        title={"New Event"}
        left={"Cancel"}
        topHeight={60}
        onRight={()=>{      
          setIsCreateEvent(!isCreateEvent)
        }}
        onLeft={() => eventRef.current.close()}
        sheetRef={eventRef}>
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
            fontWeight={"700"}
            style={{ textAlign: "center", marginTop: 20 }}
            fontFam="BlaakExtraBold-PERSONAL"
          />
          <ImageBackground
            style={styles.imgContainer}
            source={images.eventback}
            resizeMode={"contain"}>
            <TouchableOpacity
              onPress={() => {
                eventRef.current.close();

                setTimeout(() => {
                  photosSheetRef.current.open();
                }, 500);
              }}
              activeOpacity={0.6}
              style={styles.editContainer}>
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
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    eventRef.current.close();
                    setTimeout(() => {
                      DateTimeSheetRef.current.open();
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
                eventRef.current.close();
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
                    eventRef.current.close();
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

        {
          isCreateEvent&&(
            <CreateEventModal
            onPressInvite={()=>{
              setIsCreateEvent(false)

              eventRef.current.close();

                setTimeout(() => {
                  InviteFriendSheetRef.current.open();
                }, 500);

            }}
            />

          )
        }


      </CustomBottomSheet>

      <CustomBottomSheet
        right={""}
        title={"Choose Poster"}
        left={"Cancel"}
        // backgroundColor={colors.black}
        topHeight={60}
        onLeft={() => photosSheetRef.current.close()}
        sheetRef={photosSheetRef}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: colors.grey700,
            // marginTop: 1,
            paddingHorizontal: 10,
          }}>
          <TopBar
            topBarData={posterTopData}
            activeBar={activePoster}
            setActiveBar={setActivePoster}
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
      </CustomBottomSheet>

      <CustomBottomSheet
        right={""}
        title={"Set Date & Time"}
        left={"Cancel"}
        backgroundColor={colors.black100}
        topHeight={60}
        onLeft={() => DateTimeSheetRef.current.close()}
        sheetRef={DateTimeSheetRef}>
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
      </CustomBottomSheet>

      <CustomBottomSheet
        right={"Add"}
        title={"Set Location"}
        left={"Cancel"}
        backgroundColor={colors.black100}
        topHeight={60}
        // paddingHorizontal={}
        onLeft={() => LocationSheetRef.current.close()}
        sheetRef={LocationSheetRef}>
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
              <View style={{flex:1,padding:15}}>
              <View style={{ paddingHorizontal: 10 }}>
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
              <View style={{padding:15}}>
              <View style={{ paddingHorizontal: 30 }}>
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


              </View>
             
              </>
            )}
          </View>
        </View>
      </CustomBottomSheet>

      {/* invite friend Sheet */}

      <CustomBottomSheet
        right={"Send"}
        title={"Invite Friends"}
        left={"Back"}
        backgroundColor={colors.black100}
        topHeight={60}
        // paddingHorizontal={}
        onLeft={() => InviteFriendSheetRef.current.close()}
        sheetRef={InviteFriendSheetRef}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: colors.black100,
            // marginTop: 1,
          }}>
          <View style={{ paddingHorizontal: 15 }}>
            <SearchBar
              backgroundColor={colors.grey767680}
              textColor={colors.white}
              placeholder="Search here..."
            />
          </View>

          <Spacer height={20} />

          <CustomLine backgroundColor={colors.grey400} />
          {selectedContact.length > 0 && (
            <View style={{ ...appStyles.row, height: 90 }}>
              <ScrollView horizontal>
                <View style={appStyles.row}>
                  {selectedContact.map((item) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                          const dataContact1 = selectedContact.filter(
                            (f) => f.id != item.id
                          );
                          console.log("dataContact1", dataContact1);

                          setSelectedContact(dataContact1);
                        }}
                        style={{ marginRight: 10, alignItems: "center" }}>
                        <Image
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 999,
                            marginLeft: 10,
                          }}
                          source={images.contact}
                        />

                        <CustomText
                          text={item.value}
                          color={colors.white}
                          size={15}
                          lineHeight={27}
                          style={{ marginLeft: 10 }}
                          fontWeight="400"
                        />

                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() => {
                            const dataContact1 = selectedContact.filter(
                              (f) => f.id != item.id
                            );
                            console.log("dataContact1", dataContact1);

                            setSelectedContact(dataContact1);
                          }}
                          style={{
                            width: 15,
                            position: "absolute",
                            top: 0,
                            right: 20,
                            height: 15,
                            borderRadius: 999,
                          }}>
                          <Image
                            style={{
                              width: 15,
                              height: 15,
                              borderRadius: 999,
                            }}
                            source={images.circleCross}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          )}

          <CustomLine backgroundColor={colors.grey400} />

          <View
            style={{
              ...appStyles.rowjustify,
              height: 50,
              paddingHorizontal: 30,
            }}>
            <View style={{ ...appStyles.row, width: "45%", height: 50 }}>
              <Image
                style={{ width: 27, height: 27 }}
                source={images.upload}
                resizeMode={"contain"}
              />

              <CustomText
                text={"Share Link"}
                color={"#A6A6A6"}
                size={19}
                lineHeight={27}
                style={{ marginLeft: 10 }}
                fontWeight="400"
              />
              <Spacer width={"30%"} />
              <View
                style={{
                  height: 50,
                  width: 0.5,
                  backgroundColor: colors.grey400,
                }}
              />
            </View>

            <View
              style={{
                ...appStyles.row,
                width: "45%",
                height: 50,
                paddingLeft: "5%",
              }}>
              <Image
                style={{ width: 25, height: 25 }}
                source={images.copy}
                resizeMode={"contain"}
              />

              <CustomText
                text={"Copy Link"}
                color={"#A6A6A6"}
                size={19}
                lineHeight={27}
                style={{ marginLeft: 10 }}
                fontWeight="400"
              />
              <Spacer width={"30%"} />
            </View>
          </View>
          <CustomLine backgroundColor={colors.grey400} />
          <Spacer height={5} />
          <AlphabetList
            data={contactList}
            indexContainerStyle={{ marginRight: 5 }}
            indexLetterStyle={{
              color: "#797979",
              fontSize: 16,
              fontFamily: "SF-Pro-Text-Regular",
              // marginRight:10
            }}
            renderCustomItem={(item, index) => (
              <ContactContainer
                item={item}
                isSelected
                selectedContact={selectedContact}
                onAdd={() => onAddContact(item, index)}
                // onAdd={() => {
                //   const findObject = selectedContact?.find((e) => e.name == item.name);
                //   if (findObject) {
                //     const dataContact1 = selectedContact.filter(
                //       (f) => f.name != item.name
                //     );

                //     setSelectedContact(dataContact1);
                //   } else {
                //     const dataContact = [...selectedContact, item]; // Replace 'New Data' with your actual data
                //     setSelectedContact(dataContact);
                //   }

                //   // const filterObject=
                //   // const newDataArray = [...selectedContact, item]; // Replace 'New Data' with your actual data
                //   // setSelectedContact(newDataArray);
                // }}
              />
              //   <CustomText
              //   text={item.value}
              //   color={"#0A86CD"}
              //   size={15}
              //   fontWeight="500"
              //   numberOfLines={1}
              //   // style={{marginLeft:-10}}
              //   fontFam="SF-Pro-Display-Bold"
              // />
            )}
            renderCustomSectionHeader={(section, index) => (
              <View style={{ ...appStyles.row, marginLeft: 25 }}>
                <CustomText
                  text={section.title}
                  color={"#919191"}
                  size={15}
                  fontWeight="500"
                  numberOfLines={1}
                  style={{ marginTop: 10 }}
                  fontFam="SF-Pro-Display-Bold"
                />
                <Spacer width={20} />
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: colors.grey400,
                    justifyContent: "center",
                    height: 60,
                    marginLeft: 20,
                  }}>
                  {/* <Spacer height={20}/>
              <View style={{height:1,backgroundColor:colors.grey400}}/> */}
                </View>
              </View>
            )}
          />
          {/* 
          <FlatList
            data={messageArray}
            contentContainerStyle={{ gap: 5 }}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => (
              <ContactContainer
                item={item}
                isSelected
                selectedContact={selectedContact}
                onAdd={() => onAddContact(item, index)}
                // onAdd={() => {
                //   const findObject = selectedContact?.find((e) => e.name == item.name);
                //   if (findObject) {
                //     const dataContact1 = selectedContact.filter(
                //       (f) => f.name != item.name
                //     );

                //     setSelectedContact(dataContact1);
                //   } else {
                //     const dataContact = [...selectedContact, item]; // Replace 'New Data' with your actual data
                //     setSelectedContact(dataContact);
                //   }

                //   // const filterObject=
                //   // const newDataArray = [...selectedContact, item]; // Replace 'New Data' with your actual data
                //   // setSelectedContact(newDataArray);
                // }}
              />
            )}
          /> */}

          <Spacer height={20} />
        </View>
      </CustomBottomSheet>

      <AddLinkBottomSheet
      sheetRef={AddLinkSheetRef}
      />


    </>
  );
};

export default HomeChat;

const styles = StyleSheet.create({
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
  imgContainer: {
    width: "99%",
    height: 270,
    borderRadius: 40,
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  toContactContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#383734",
    borderRadius: 5,
    marginBottom: 12,
    marginRight: 5,
  },
  timeContainer: {
    width: 60,
    backgroundColor: colors.grey767680,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  dateTimeOption: {
    backgroundColor: colors.grey767680,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});
