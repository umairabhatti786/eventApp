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

const CalendarDetailSheet = ({ sheetRef,navigation }) => {
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
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>{
          sheetRef.current.close()
          
          // setTimeout(() => {
          //   navigation.navigate("MessageScreen")

            
          // }, 100);


        }}
        >
        <CustomText
          text={"Cancel"}
          color={"#8B8B8B"}
          size={19}
          fontWeight="400"
          numberOfLines={1}
          fontFam="SF-Pro-Display-Bold"
        />

        </TouchableOpacity>
        
        <Spacer height={20} />
        <CustomText
          text={"Sushi Date Night"}
          color={colors.white}
          size={30}
          fontWeight="700"
          numberOfLines={1}
          style={{ textAlign: "center" }}
          fontFam="SF-Pro-Display-Bold"
        />
        <Spacer height={20} />

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
        <Spacer height={25} />

        <CustomText
          text={"12:15 PM on Wednesday, Sept 25"}
          color={colors.white}
          size={22}
          fontWeight="600"
          numberOfLines={1}
          // style={{ textAlign: "center" }}
          fontFam="SF-Pro-Display-Bold"
        />
        <Spacer height={25} />
        <View style={{ ...appStyles.row, marginRight: 40 }}>
          <Image
            style={{ width: 23, height: 23, borderRadius: 999 }}
            source={images.location}
            resizeMode="contain"
          />
          <Spacer width={15} />

          <CustomText
            text={"1345 18th St., Apt 5, Santa Monica, CA 90404"}
            color={colors.white}
            size={16}
            fontWeight="600"
            // numberOfLines={1}
            textDecorationLine={"underline"}
            // style={{ textAlign: "center" }}
            fontFam="SF-Pro-Display-Bold"
          />
        </View>

        <Spacer height={15} />
        <View style={{ ...appStyles.row, marginRight: 40 }}>
          <Image
            style={{ width: 23, height: 23, borderRadius: 999 }}
            source={images.crown}
            resizeMode="contain"
          />
          <Spacer width={15} />

          <CustomText
            text={"Hosted by Rishi Narain"}
            color={colors.white}
            size={16}
            fontWeight="600"
            // numberOfLines={1}
            // style={{ textAlign: "center" }}
            fontFam="SF-Pro-Display-Bold"
          />
        </View>

        <CustomText
          text={"Description"}
          color={"#8B8B8B"}
          size={16}
          fontWeight="500"
          style={{ textAlign: "center", marginVertical: 20 }}
          numberOfLines={1}
          fontFam="SF-Pro-Display-Bold"
        />

        <CustomText
          text={
            "Voting rights of United States citizens who live in Super stoked for date night on the 15th of this month with you my love <3 Puerto Rico, like the voting rights of residents of"
          }
          color={colors.white}
          size={16}
          fontWeight="500"
          lineHeight={27}
          // numberOfLines={1}
          style={{ textAlign: "center" }}
          fontFam="SF-Pro-Display-Bold"
        />
      </ScrollView>
      <View
        style={{
          width: "100%",
          height: 180,
          backgroundColor: "#2C2C2E",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingHorizontal: 20,
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
              source={images.dropdown}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Spacer height={15} />
        <View style={appStyles.rowjustify}>

        <TouchableOpacity
          style={styles.optionsBox}>
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
            style={{ textAlign: "center",marginTop:5 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          </TouchableOpacity>

          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>sheetRef.current.close()}
          style={styles.optionsBox}>
             <Image
              style={{ width: 32, height: 32 }}
              source={images.chatgrey}
              resizeMode="contain"
            />
              <CustomText
            text={"go to chat"}
            color={colors.white}
            size={13}
            fontWeight="500"
            style={{ textAlign: "center",marginTop:5 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          </TouchableOpacity>

          <TouchableOpacity
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
            style={{ textAlign: "center",marginTop:5 }}
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          </TouchableOpacity>

        </View>
      
      </View>
    </RBSheet>
  );
};

export default CalendarDetailSheet;

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
