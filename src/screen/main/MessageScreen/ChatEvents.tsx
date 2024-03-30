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
  ImageBackground,
  ScrollView,
} from "react-native";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import CustomView from "../../../components/CustomView";
import HorizontalContainer from "../../../components/HorizontalContainer";
import MessageContainer from "../../../components/MessageContainer";
import MessageSender from "../../../components/MessageSender";
import { Spacer } from "../../../components/Spacer";
import TopBar from "../../../components/TopBar";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import { windowHeight } from "../../../utils/CommonFun";
import CalendarDetailSheet from "../CalendarDetailSheet";
import PollOptionSheet from "../ChatPoll/PollOptionSheet";
import { windowWidth } from "../HomeChat/ChatList";
import AddContainer from "./AddContainer";
import CalendarContainer from "./CalendarContainer";

const ChatEvents = ({ navigation, route }) => {
  const CalendarSheetRef = useRef();
  const [isOpenGuest, setIsOpenGuest] = useState(false);
  const [isChangeRsvp, setIsChangeRsvp] = useState(false);
  const pollOptionsSheetRef = useRef();


const Rsvp=()=>{
    return(
        <View style={appStyles.rowjustify}>
        <TouchableOpacity style={styles.optionsBox}>
          <Image
            style={{ width: 20, height: 20 }}
            source={images.tick}
            resizeMode="contain"
          />
          <CustomText
            text={"going"}
            color={colors.white}
            size={13}
            fontWeight="500"
            style={{ textAlign: "center", marginTop: 5 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => sheetRef.current.close()}
          style={styles.optionsBox}>
          <Image
            style={{ width: 20, height: 20 }}
            source={images.question}
            resizeMode="contain"
          />
          <CustomText
            text={"maybe"}
            color={colors.white}
            size={13}
            fontWeight="500"
            style={{ textAlign: "center", marginTop: 5 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>setIsChangeRsvp(true)}
        style={styles.optionsBox}>
          <Image
            style={{ width: 20, height: 20 }}
            source={images.cancel}
            resizeMode="contain"
          />
          <CustomText
            text={"can’t go"}
            color={colors.white}
            size={13}
            fontWeight="500"
            style={{ textAlign: "center", marginTop: 5 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
        </TouchableOpacity>
      </View>
    )
}

  return (
    <>
      <ScrollView style={appStyles.main}>
        <Image 
        style={{width:300,height:100,alignSelf:"center"}}
        source={images.eventtitle}
        resizeMode={"contain"}
        />

        {/* <CustomText
          text={"Random Event Title"}
          color={colors.white}
          size={28}
          fontWeight="bold"
          style={{ textAlign: "center", marginVertical: 10 }}
          numberOfLines={1}
          fontFam="BlaakBold-PERSONAL"
        /> */}

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
        </ImageBackground>

        <CustomText
          text={"7:00 PM on Saturday, Dec 25"}
          color={colors.white}
          size={22}
          fontWeight="600"
          style={{ marginVertical: 30 }}
          numberOfLines={1}
        />

        <CustomText
          text={"Location:"}
          color={colors.grey800}
          size={15}
          fontWeight="400"
          style={{ marginBottom: 5 }}
          numberOfLines={1}
        />
        <View style={{ width: "52%", marginBottom: 10 }}>
          <CustomView borderWidth={0}>
            <View style={appStyles.row}>
              <Image
                style={{ width: 20, height: 20, borderRadius: 5 }}
                source={images.location}
              />
              <Spacer width={10} />
              <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>pollOptionsSheetRef.current.open()}
              >
              <CustomText
                text={"Vote for Location"}
                color={colors.white}
                size={17}
                // fontWeight='700'
                fontFam="SF-Pro-Text-Regular"
              />

              </TouchableOpacity>

             
            </View>
          </CustomView>

          <View style={{ ...appStyles.row, marginVertical: 15, marginLeft: 5 }}>
            <Image
              style={{ width: 20, height: 20, borderRadius: 5 }}
              source={images.crown}
            />
            <Spacer width={10} />

            <CustomText
              text={"Hosted by Rishi Narain"}
              color={colors.white}
              size={17}
              // fontWeight='700'
              fontFam="SF-Pro-Text-Regular"
            />
          </View>

          <View style={{ ...appStyles.row, marginLeft: 5 }}>
            <Image
              style={{ width: 20, height: 20, borderRadius: 5 }}
              source={images.link}
            />
            <Spacer width={10} />

            <CustomText
              text={"Venmo Link"}
              color={colors.white}
              size={17}
              textDecorationLine="underline"
              // fontWeight='700'
              fontFam="SF-Pro-Text-Regular"
            />
          </View>

          <View style={{ ...appStyles.row, marginTop: 20, marginBottom: 10 }}>
            <Spacer width={10} />

            <CustomText
              text={"9 Going | 7 Maybe |"}
              color={colors.white}
              size={14}
              fontWeight="400"
              fontFam="SF-Pro-Text-Regular"
            />

            <CustomText
              text={" 1 Blocked"}
              color={"#B92323"}
              size={14}
              fontWeight="400"
              fontFam="SF-Pro-Text-Regular"
            />
          </View>

          <View style={appStyles.row}>
            {[
              1,
              2,
              3,
              4,
              ,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
            ].map((item, index) => {
              return (
                index + 1 <= 7 && (
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 999,
                      backgroundColor:
                        index + 1 == 7 ? colors.black : "#D9D9D9",
                      marginRight: 10,
                      borderColor: index + 1 == 7 ? "#D9D9D9" : colors.black,
                      borderWidth: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    {index + 1 == 7 && (
                      <CustomText
                        text={"+13"}
                        color={colors.white}
                        size={14}
                        fontWeight="400"
                        fontFam="SF-Pro-Text-Regular"
                      />
                    )}
                  </View>
                )
              );
            })}
          </View>
        </View>
        <Spacer height={200} />
      </ScrollView>
      <View
        style={{
          width: windowWidth / 1,
          //   height: 180,
          backgroundColor: "#2C2C2E",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingHorizontal: 15,
          position: "absolute",
          bottom: 0,
        }}>
        <View style={appStyles.rowjustify}>
          <CustomText
            text={"Guest Options"}
            color={colors.white}
            size={26}
            fontWeight="bold"
            style={{ textAlign: "center", marginVertical: 20 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
                if(isChangeRsvp){

                    setIsChangeRsvp(false)
                    return
                }

                setIsOpenGuest(!isOpenGuest)

            }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 999,
              backgroundColor: "#363636",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              style={{ width: 18, height: 18 }}
              source={isOpenGuest ?isChangeRsvp?images.back:  images.dropup : images.dropdown}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Spacer height={15} />
        {isOpenGuest && (
          <>
          {
              isChangeRsvp?(
                  <>
                  <Rsvp/>
                  <Spacer height={30} />

                  </>

              ):(
                  <View>
                       <View style={appStyles.rowjustify}>
              <TouchableOpacity style={styles.optionsBox}>
                <Image
                  style={{ width: 32, height: 32 }}
                  source={images.datetime}
                  // resizeMode="contain"
                />
                <CustomText
                  text={"add to calendar"}
                  color={colors.white}
                  size={13}
                  fontWeight="500"
                  style={{ textAlign: "center", marginTop: 5 }}
                  numberOfLines={1}
                  fontFam="SF-Pro-Display-Bold"
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => sheetRef.current.close()}
                style={styles.optionsBox}>
                <Image
                  style={{ width: 32, height: 32 }}
                  source={images.adduser}
                  resizeMode="contain"
                />
                <CustomText
                  text={"invite +1’s"}
                  color={colors.white}
                  size={13}
                  fontWeight="500"
                  style={{ textAlign: "center", marginTop: 5 }}
                  numberOfLines={1}
                  fontFam="SF-Pro-Display-Bold"
                />
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={()=>setIsChangeRsvp(true)}
              style={styles.optionsBox}>
                <Image
                  style={{ width: 27, height: 27 }}
                  source={images.rsvp}
                  resizeMode="contain"
                />
                <CustomText
                  text={"change rsvp"}
                  color={colors.white}
                  size={13}
                  fontWeight="500"
                  style={{ textAlign: "center", marginTop: 5 }}
                  numberOfLines={1}
                  fontFam="SF-Pro-Display-Bold"
                />
              </TouchableOpacity>
            </View>

            <Spacer height={30} />

                  </View>
              )
              
          }
       
           
          </>
        )}
      </View>

      <CalendarDetailSheet sheetRef={CalendarSheetRef} />

      <PollOptionSheet
        sheetRef={pollOptionsSheetRef}
        isEvent
        // pollDetailSheetRef={pollDetailSheetRef}
        onPressVote={() => {
          pollOptionsSheetRef.current.close();
        
        }}
      />
    </>
  );
};

export default ChatEvents;

const styles = StyleSheet.create({
  imgContainer: {
    width: "99%",
    height: 270,
    borderRadius: 40,
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  optionsBox: {
    width: windowWidth / 3.5,
    height: 60,
    backgroundColor: "#4B4B4B",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
