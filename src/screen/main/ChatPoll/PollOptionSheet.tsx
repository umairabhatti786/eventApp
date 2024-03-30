import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
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
import CustomView from "../../../components/CustomView";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";

const PollOptionSheet = ({ sheetRef, navigation ,onPressVote,isEvent}) => {
    const [selectedPoll,setSelectedPoll]=useState()
  const pollOptions = [
    { name: "Waffle House" },
    { name: "Chipotle" },
    { name: "A very, very, very, very  long restaurant name" },
  ];

  const pollOptions1 = [
    { name: "Monday, December 25 @ 7:15 PM",members:[1],vote:1 },
    { name: "Wednesday, December 26 @ 6:15 PM",members:[],vote:0  },
    { name: "Monday, December 25 @ 7:15 PM",members:[1,2] ,vote:2 },
  ];
  console.log("selectedPoll",selectedPoll)

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
      <View style={{ flex: 1, padding: 15 }}>
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
            text={"Poll"}
            color={colors.white}
            size={19}
            fontWeight="700"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          <TouchableOpacity
            activeOpacity={0.6}
            //   disabled={!onRight}
              onPress={onPressVote}
            style={{ width: "20%", alignItems: "flex-end" }}>
            <CustomText
              text={"Vote"}
              color={colors.blue}
              size={19}
              style={{ textAlign: "flex-end" }}
              fontWeight="500"
              numberOfLines={1}
              fontFam="SF-Pro-Display-Bold"
            />
          </TouchableOpacity>
        </View>

        <CustomText
          text={"Where should we get lunch?"}
          color={colors.white}
          size={21}
          fontWeight="700"
          style={{ marginVertical: 30, textAlign: "center" }}
          fontFam="SF-Pro-Display-Bold"
        />
        {
            isEvent?(
                <>
                  {pollOptions1.map((item,index) => {
          return (
            <View>
              <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>setSelectedPoll(index)}
                style={{
                  ...appStyles.row,
                //   paddingHorizontal: 15,
                //   paddingVertical: 5,
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    height: 60,
                    width: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      width: 22,
                      height: 22,
                      borderWidth: 1,
                      borderColor: "#383734",
                      borderRadius: 999,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: selectedPoll==index?  colors.white:"transparent",
                    }}>
                        {
                            selectedPoll==index&&(
                                <Image
                                style={{ width: 10, height: 10 }}
                                source={images.check}
                                resizeMode={"contain"}
                              />

                            )
                        }
                   
                  </TouchableOpacity>
                </TouchableOpacity>
            

                <View
                  style={{
                    ...appStyles.row,
                    marginHorizontal: 20,
                    width: "84%",
                  }}>
                  <CustomText
                    text={item.name}
                    color={colors.white}
                    size={18}
                    fontWeight="400"
                    style={{ marginLeft: -5 }}
                  />

                  <Spacer width={10} />
                </View>
              </TouchableOpacity>

              <View style={{ ...appStyles.row,marginTop:-10,marginLeft:60}}>
                  <CustomText
                    text={item.vote + " " + "Votes"}
                    color={"#858585"}
                    size={15}
                    fontWeight="400"
                    style={{ marginLeft: -5, width: 60 }}
                  />

                  <View style={appStyles.row}>
                    {item.members.map((item) => {
                      return (
                        <View
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 999,
                            backgroundColor: "#D9D9D9",
                            // marginRight:10
                          }}></View>
                      );
                    })}
                  </View>
                </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: colors.grey400,
                  marginVertical: 10,
                  marginLeft: 10,
                }}
              />
            </View>
          );
        })}
                </>
            ):<>
              {pollOptions.map((item,index) => {
          return (
            <View>
              <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>setSelectedPoll(index)}
                style={{
                  ...appStyles.row,
                //   paddingHorizontal: 15,
                //   paddingVertical: 5,
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    height: 60,
                    width: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      width: 22,
                      height: 22,
                      borderWidth: 1,
                      borderColor: "#383734",
                      borderRadius: 999,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: selectedPoll==index?  colors.white:"transparent",
                    }}>
                        {
                            selectedPoll==index&&(
                                <Image
                                style={{ width: 10, height: 10 }}
                                source={images.check}
                                resizeMode={"contain"}
                              />

                            )
                        }
                   
                  </TouchableOpacity>
                </TouchableOpacity>
            

                <View
                  style={{
                    ...appStyles.row,
                    marginHorizontal: 20,
                    width: "84%",
                  }}>
                  <CustomText
                    text={item.name}
                    color={colors.white}
                    size={18}
                    fontWeight="400"
                    style={{ marginLeft: -5 }}
                  />

                  <Spacer width={10} />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  height: 1,
                  backgroundColor: colors.grey400,
                  marginVertical: 10,
                  marginLeft: 10,
                }}
              />
            </View>
          );
        })}
            </>
        }

      
      </View>
    </RBSheet>
  );
};

export default PollOptionSheet;

const styles = StyleSheet.create({
  optionsBox: {
    width: windowWidth / 3.5,
    height: 60,
    backgroundColor: "#4B4B4B",
    borderRadius: 10,
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
