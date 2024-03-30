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
import PollProgress from "../../../components/PollProgress";

const PollDetailSheet = ({ sheetRef, navigation,onChangeVote }) => {
  const [selectedPoll, setSelectedPoll] = useState();
  const pollOptions = [
    { name: "Waffle House", vote: 1, percent: "33%", voteMember: [1] },
    { name: "Chipotle", vote: 0, percent: "0%", voteMember: [] },
    {
      name: "A very, very, very, very  long restaurant name",
      vote: 2,
      percent: "66%",
      voteMember: [1, 2],
    },
  ];
  console.log("selectedPoll", selectedPoll);

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
        <Spacer height={10} />
        <View
          style={{
            // width: windowWidth,
            //   height: 40,
            padding: 15,
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
            onPress={() => sheetRef.current.close()}
            style={{ alignItems: "flex-end" }}>
            <CustomText
              text={"End Now"}
              color={colors.blue}
              size={19}
              fontWeight="500"
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

        {pollOptions.map((item, index) => {
          return (
            <View style={{ marginLeft: 20 }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setSelectedPoll(index)}>
                <View
                  style={{
                    ...appStyles.row,
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
                <Spacer height={5} />

                <View style={{ ...appStyles.row, paddingVertical: 5 }}>
                  <CustomText
                    text={item.percent}
                    color={"#858585"}
                    size={15}
                    fontWeight="400"
                    style={{ marginLeft: -5, width: 60 }}
                  />
                  <PollProgress
                    steps={5}
                    step={item.vote}
                    width={windowWidth / 1.3}
                  />
                </View>
                <View style={{ ...appStyles.row, marginVertical: 5 }}>
                  <CustomText
                    text={item.vote + " " + "Votes"}
                    color={"#858585"}
                    size={15}
                    fontWeight="400"
                    style={{ marginLeft: -5, width: 60 }}
                  />

                  <View style={appStyles.row}>
                    {item.voteMember.map((item) => {
                      return (
                        <View
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 999,
                            backgroundColor: "#D9D9D9",
                            marginRight:10
                          }}></View>
                      );
                    })}
                  </View>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  height: 1,
                  backgroundColor: colors.grey400,
                  marginVertical: 10,
                }}
              />
            </View>
          );
        })}

<TouchableOpacity
            activeOpacity={0.6}
            //   disabled={!onRight}
            onPress={onChangeVote}
            style={{ alignSelf: "center",marginVertical:10 }}>
            <CustomText
              text={"Change Vote"}
              color={colors.blue}
              size={20}
              fontWeight="500"
            />
          </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default PollDetailSheet;

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
