import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
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
  
  const GroupCalendar = ({ sheetRef,navigation }) => {

    const calendar = [
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
        {
            img: images.eventimage2,
            title: "Sushi w/ the guys!",
            location: "Kazu Nori Handrolls",
            time: "Starts @ 7:15 PM",
            date: "12/31",
            day: "Sun",
          },
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
            backgroundColor: colors.black,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: "100%",
          },
        }}>
        <View style={{ flex: 1,paddingHorizontal:15 }}>
        <View
          style={{
            // width: windowWidth,
            height: 40,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View style={{ width: "20%" }}>
              
            <TouchableOpacity
              activeOpacity={0.6}
              //  disabled={!onLeft}
              style={appStyles.row}
              onPress={() => sheetRef.current.close()}>
                  <Image
                  style={{width:15,height:15}}
                  source={images.back}
                  resizeMode="contain"
                  />
              <CustomText
                text={"Back"}
                color={colors.white}
                size={19}
                fontWeight="500"
                style={{marginLeft:5}}
                numberOfLines={1}
                // fontFam="SF-Pro-Display-Bold"
              />
            </TouchableOpacity>
          </View>
          <CustomText
            text={"Group Calendar"}
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
                  style={{width:25,height:25}}
                  source={images.addcircle}
                  resizeMode="contain"
                  />
          </TouchableOpacity>
        </View>
        <Spacer height={30}/>

        {calendar .map((item) => {
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
        })}
         
          
  
          
        </View>
        
      </RBSheet>
    );
  };
  
  export default GroupCalendar;
  
  const styles = StyleSheet.create({
    optionsBox:{
      width: windowWidth / 3.5,
      height: 60,
      backgroundColor: "#4B4B4B",
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center"
    }
  
  });
  