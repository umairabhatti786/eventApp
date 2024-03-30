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
  SectionList,
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
import CustomView from "../../../components/CustomView";
import CustomLine from "../../../components/CustomLine";

const Notifications = ({ navigation }) => {
  const [activeBar, setActiveBar] = useState("Hosted Events");
  const TopData = ["Hosted Events", "Previously Attended"];
  const [isActive, setIsActive] = useState(0);

  const event = [
    {
      status: "Pending Invitations",
      data: [
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
      ],
    },

    {
      status: "Declined Invitations",
      data: [
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
      ],
    },
  ];

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
            text={"Notifications"}
            color={colors.white}
            size={19}
            fontWeight="700"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          <View
            //   disabled={!onRight}
            //   onPress={onPressVote}
            style={{ width: "20%", alignItems: "flex-end" }}>
            {/* <Image
                style={{ width: 25, height: 25 }}
                source={images.setting}
                resizeMode="contain"
              /> */}
          </View>
        </View>
        <View style={{ ...appStyles.row, marginTop: 30, marginBottom: 20 }}>
          {["Notifications", "Inbox"].map((item, index) => {
            return (
              <View style={{ marginRight: 15 }}>
                <CustomView
                  onPress={() => setIsActive(index)}
                  borderWidth={isActive == index ? 1 : 0}>
                  <View style={appStyles.row}>
                    <Image
                      style={{ width: 20, height: 20, borderRadius: 5 }}
                      source={
                        index == 0 ? images.calandericon : images.inboxgreen
                      }
                    />
                    <Spacer width={10} />

                    <CustomText
                      text={item}
                      color={colors.white}
                      size={16}
                      // fontWeight='700'
                      fontFam="SF-Pro-Text-Regular"
                    />
                  </View>
                </CustomView>
              </View>
            );
          })}
        </View>

        <SectionList
          sections={event}
          scrollEnabled={false}
          // contentContainerStyle={{ gap: 15 }}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
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
          renderSectionHeader={({ section: { status } }) => (
            <View
              style={{
                marginVertical: 15,
              }}>
              <CustomLine height={1} />
              <Spacer height={10} />

              <CustomText
                text={status}
                color={colors.white}
                fontWeight="600"
                size={20}
              />
            </View>
          )}
        />

        {/*   
  
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
          /> */}
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

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
