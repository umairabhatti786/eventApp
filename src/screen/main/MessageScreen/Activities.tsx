import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import { images } from "../../../assets";
import CustomLine from "../../../components/CustomLine";
import CustomText from "../../../components/CustomText";
import HorizontalContainer from "../../../components/HorizontalContainer";
import MessageContainer from "../../../components/MessageContainer";
import MessageSender from "../../../components/MessageSender";
import { Spacer } from "../../../components/Spacer";
import TopBar from "../../../components/TopBar";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import CalendarDetailSheet from "../CalendarDetailSheet";
import { windowWidth } from "../HomeChat/ChatList";
import AddContainer from "./AddContainer";
import CalendarContainer from "./CalendarContainer";

const Activities = ({ navigation, route, isGroup, groupSheetRef,isEvent }) => {
  const CalendarSheetRef = useRef();

  const renderPhotos = ({ item, index }) => {
    return (
      <View
        style={{
          width: windowWidth / 3.3,
          height: 115,
          borderRadius: 5,
          backgroundColor: "#191919",
          margin: 1.5,
        }}></View>
    );
  };

  const groupCalendar = [
    {
      img: images.eventimage1,
      title: "Pregame Beers",
      location: "Santa Monica Brew Works",
      time: "Starts @ 7:15 PM",
      date: "12/26",
      day: "Wed",
    },
    {
      img: images.eventimage3,
      title: "Sushi w/ the guys!",
      location: "Kazu Nori Handrolls",
      time: "Starts @ 7:15 PM",
      date: "12/31",
      day: "Sun",
    },
  ];
  const signalCalendar = [
    {
      img: images.eventimage1,
      title: "Pregame Beers",
      location: "Santa Monica Brew Works",
      time: "Starts @ 7:15 PM",
      date: "12/26",
      day: "Wed",
    },
  ];

  return (
    <>
      <ScrollView style={appStyles.main}>
        <Spacer height={40} />
        {
          !isEvent&&(
            <>
                    <Spacer height={30} />


<HorizontalContainer
          txt={isGroup ? "Group Calendar" : "Shared Calendar"}
          img={images.addcircle}
        />
        <Spacer height={15} />

        {isGroup ? (
          <>
            {groupCalendar.map((item) => {
              return (
                <>
                  <CalendarContainer
                    item={item}
                    onPress={() => {
                      CalendarSheetRef.current.open();
                    }}
                  />
                  <Spacer height={10} />
                </>
              );
            })}
          </>
        ) : (
          <>
            {signalCalendar.map((item) => {
              return (
                <>
                  <CalendarContainer
                    item={item}
                    onPress={() => {
                      CalendarSheetRef.current.open();
                    }}
                  />
                  <Spacer height={10} />
                </>
              );
            })}
          </>
        )}
        {isGroup && (
          <>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                groupSheetRef.current.open();
              }}>
              <CustomText
                text={"See All"}
                color={colors.blue}
                size={17}
                fontWeight="600"
                style={{ textAlign: "right", marginVertical: 10 }}
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
            </TouchableOpacity>

            <Spacer height={10} />
            <CustomLine />
          </>
        )}
            </>
          )
        }
       

        <HorizontalContainer txt={"Photos"} img={images.addcircle} />
        <Spacer height={15} />
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            numColumns={3}
            scrollEnabled={false}
            renderItem={renderPhotos}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("AllPhotos")}>
          <CustomText
            text={"See All"}
            color={colors.blue}
            size={17}
            fontWeight="600"
            style={{ textAlign: "right", marginVertical: 10 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
        </TouchableOpacity>
      </ScrollView>

      <CalendarDetailSheet sheetRef={CalendarSheetRef} />
    </>
  );
};

export default Activities;
