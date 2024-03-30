import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { windowWidth } from "../HomeChat/ChatList";
import { Spacer } from "../../../components/Spacer";
import { windowHeight } from "../../../utils/CommonFun";
import { images } from "../../../assets";
import { appStyles } from "../../../utils/AppStyles";
import { useNavigation } from "@react-navigation/native";
import CalendarContainer from "../MessageScreen/CalendarContainer";
import TopBar from "../../../components/TopBar";

const Profile = ({ navigation }) => {
  const [activeBar, setActiveBar] = useState("Hosted Events");
  const TopData = ["Hosted Events", "Previously Attended"];

  const event = [
    {
      img: images.eventimage3,
      title: "Sushi w/ the guys!",
      location: "Santa Monica Brew Works",
      time: "Starts @ 7:15 PM",
      date: "12/31",
      day: "Sun",
    },
    {
      img: images.eventimage4,
      title: "Sushi w/ the guys!",
      location: "Kazu Nori Handrolls",
      time: "Starts @ 7:15 PM",
      date: "12/31",
      day: "Sun",
    },
  ];

  const previousEvent = [
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
      location: "Santa Monica Brew Works",
      time: "Starts @ 7:15 PM",
      date: "12/31",
      day: "Sun",
    },
    {
      img: images.eventimage2,
      title: "Sushi w/ the guys!",
      location: "Kazu Nori Handrolls",
      time: "Starts @ 7:15 PM",
      date: "12/31",
      day: "Sun",
    },
  ];

  const renderPhotos = ({ item, index }) => {
    return (
      <View
        style={{
          width: windowWidth / 3,
          height: 120,
          borderRadius: 5,
          backgroundColor: "#191919",
          margin: 1.5,
        }}></View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{
            // width: windowWidth,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View style={{ width: "20%" }}>
            <TouchableOpacity
              activeOpacity={0.6}
              //  disabled={!onLeft}
              style={appStyles.row}
              onPress={() => navigation.goBack()}>
              <Image
                style={{ width: 15, height: 15 }}
                source={images.back}
                resizeMode="contain"
              />
              <CustomText
                text={"Back"}
                color={colors.white}
                size={19}
                fontWeight="500"
                style={{ marginLeft: 5 }}
                numberOfLines={1}
                // fontFam="SF-Pro-Display-Bold"
              />
            </TouchableOpacity>
          </View>
          <CustomText
            text={"Profile"}
            color={colors.white}
            size={19}
            fontWeight="700"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          <TouchableOpacity
            activeOpacity={0.6}
            //   disabled={!onRight}
            //   onPress={onPressVote}
            style={{ width: "20%", alignItems: "flex-end" }}>
            <Image
              style={{ width: 25, height: 25 }}
              source={images.setting}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Spacer height={30} />
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 999,
            backgroundColor: "#D9D9D9",
            alignSelf: "center",
          }}></View>

<CustomText
            text={"Rishi Narain"}
            color={colors.white}
            size={25}
            fontWeight="700"
            style={{textAlign:"center",marginTop:10}}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
                  <Spacer height={40} />
                  <View style={{marginHorizontal:10}}>
                  <TopBar
          topBarData={TopData}
          width={windowWidth / 2.2}
          activeBar={activeBar}
          height={40}
          activeBarHeight={35}
          setActiveBar={setActiveBar}
        />

                  </View>

       
        <Spacer height={30} />

        <FlatList
          data={activeBar == "Previously Attended" ? previousEvent : event}
          renderItem={({ item, index }) => {
            return (
              <>
                <CalendarContainer
                  item={item}
                  // onPress={() => {
                  //   CalendarSheetRef.current.open();
                  // }}
                />
                <Spacer height={10} />
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  optionsBox: {
    width: windowWidth / 3.5,
    height: 60,
    backgroundColor: "#4B4B4B",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
