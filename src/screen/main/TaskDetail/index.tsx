import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";
import TopHeader from "../../../components/TopHeader";
import DropDown from "../../../components/DropDown";
import { data } from "../../../utils/Data";
import CustomView from "../../../components/CustomView";

type Props = {
  navigation?: any;
};

const TaskDetail = ({ navigation }: Props) => {
  return (
    <ScreenLayout>
      <ScrollView>
        <View style={{ padding: "5%" }}>
          <Spacer height={Platform.OS=="ios"?60: 40} />

          <TopHeader
            title={"Task Details"}
            edit={true}
            navigation={navigation}
          />
          <Spacer height={30} />

          <CustomText
            text={"Complete folder organisation"}
            style={{ textAlign: "center" }}
            size={20}
            fontFam="Inter-Bold"
          />
          {/* <Spacer height={5} />  */}

          <CustomText
            style={{ textAlign: "center" }}
            color={colors.placeholdeColor}
            text={"Work"}
            size={13}
          />

          <Spacer height={20} />

          <CustomText
            color={colors.white}
            text={"Description"}
            fontFam="Inter-Bold"
            size={19}
          />
          <Spacer height={7} />

          <CustomView>
            <View style={appStyles.row}>
              <View style={styles.dot} />
              <Spacer width={10} />

              <CustomText
                text={"Organise C:// drive"}
                color={colors.white}
                //   fontFam="Inter-Bold"
                size={15}
              />
            </View>

            <View style={appStyles.row}>
              <View style={styles.dot} />
              <Spacer width={10} />

              <CustomText
                text={"Clean out download folder"}
                color={colors.white}
                //   fontFam="Inter-Bold"
                size={15}
              />
            </View>

            <View style={appStyles.row}>
              <View style={styles.dot} />
              <Spacer width={10} />

              <CustomText
                text={"Organise documents folder"}
                color={colors.white}
                //   fontFam="Inter-Bold"
                size={15}
              />
            </View>
          </CustomView>

          <CustomText
            text={"Category*"}
            fontFam="Inter-Bold"
            size={19}
            style={{ marginVertical: 10 }}
          />
          <CustomView
            width={120}
            paddingHorizontal={20}
            borderWidth={1}
            borderColor={colors.purple50}
          >
            <CustomText text={"Work"} size={15} fontFam="Inter-Bold" />
            <CustomText text={"6/10 tasks"} size={13} fontFam="Inter-Bold" />
          </CustomView>

          <CustomText
            text={"Reminders"}
            fontFam="Inter-Bold"
            size={19}
            style={{ marginVertical: 10 }}
          />

          <CustomView paddingVertical={1} paddingTop={5} paddingBottom={15}>
            <CustomText
              text={"1 hour before deadline"}
              color={colors.placeholdeColor}
              size={14}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CustomText
                text={"12:00"}
                fontFam="Inter-Bold"
                size={19}
                style={{ marginTop: -5 }}
              />

              <Image
                source={images.bell}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </View>
          </CustomView>
          <CustomText
            text={"Deadline"}
            fontFam="Inter-Bold"
            size={19}
            style={{ marginTop: 10 }}
          />

          <CustomText
            text={"17 february 2023"}
            size={12}
            color={colors.placeholdeColor}
            style={{ marginTop: -4, marginBottom: 7 }}
          />

          <CustomView
            paddingVertical={20}
            paddingHorizontal={35}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <CustomText
                  text={"4"}
                  fontFam="Inter-Bold"
                  size={19}
                />
                <CustomText
                  text={"Days"}
                  color={colors.placeholdeColor}
                  // fontFam="Inter-Bold"
                  size={14}
                  style={{ marginTop: -2 }}
                />
              </View>

              <View style={{ alignItems: "center" }}>
                <CustomText
                  text={"5"}
                  fontFam="Inter-Bold"
                  size={19}
                //   style={{ marginTop: -5 }}
                />
                <CustomText
                  text={"Hours"}
                  color={colors.placeholdeColor}
                  // fontFam="Inter-Bold"
                  size={14}
                  style={{ marginTop: -2 }}
                />
              </View>

              <View style={{ alignItems: "center" }}>
                <CustomText
                  text={"32"}
                  fontFam="Inter-Bold"
                  size={19}
                //   style={{ marginTop: -5 }}
                />
                <CustomText
                  text={"Minutes"}
                  color={colors.placeholdeColor}
                  // fontFam="Inter-Bold"
                  size={14}
                  style={{ marginTop: -2 }}
                />
              </View>

              <View style={{ alignItems: "center" }}>
                <CustomText
                  text={"42"}
                  fontFam="Inter-Bold"
                  size={19}
                />
                <CustomText
                  text={"Seconds"}
                  color={colors.placeholdeColor}
                  // fontFam="Inter-Bold"
                  size={14}
                  style={{ marginTop: -2 }}
                />
              </View>
            </View>
          </CustomView>

          <Spacer height={30} />


         
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width:"95%",
            //   backgroundColor:"red",
              alignSelf:"center"
            }}
          >
            <View style={{width:60,height:50,backgroundColor:colors.primary,borderRadius:10,alignItems:"center",justifyContent:"center"}}>

                <Image 
                source={images.tick}
                resizeMode="center"
                style={{width:23,height:23,tintColor:colors.white}}/>

            </View>

<CustomButton
            text="Marked as Completed"
            width={"80%"}
            size={15}
            style={{
              alignSelf: "center",
            }}
            onPress={() => {
              navigation.navigate("PlannedTasks");
            }}
          />
           

          </View>

       
        





        
        </View>
      </ScrollView>
      {/* {/* <ScrollView>
        <View
          style={{
            flex: 1,

            padding: "5%",
          }}
        > */}
      {/* <Spacer height={40} />

          <TopHeader navigation={navigation} />
          <Spacer height={30} />

          <CustomText
            text={"Task Details"}
            //   style={{ textAlign: "center" }}
            size={18}
            fontFam="Inter-Bold"
          /> */}
      {/* <Spacer height={5} /> */}

      {/* <CustomText text={"Enter the details of your new habit"} size={13} />

          <Spacer height={50} />

          <CustomInput
            label="Title"
            complusory={true}
            textColor="white"
            placeholder={"Pay the bills..."}
          />
          <Spacer height={7} /> */}
      {/* 
          <CustomInput
            // label="Title"
            // complusory={true}
            textAlignVertical={"top"}
            height={100}
            textColor="white"
            placeholder={"Description (optional)"}
          />
          <Spacer height={18} /> */}

      {/* <CustomText
            text={"Category*"}
            fontFam="Inter-Bold"
            size={15}
            style={{ marginBottom: 2 }}
          />

          <DropDown
            placeholder={"Select category"}
            placeholdeColor={colors.superLightGray}
          />

          <CustomText
            text={"Schedule"}
            //   style={{ textAlign: "center" }}
            size={18}
            fontFam="Inter-Bold"
          /> */}
      {/* <Spacer height={5} /> */}

      {/* <CustomText text={"Set the schedule for your new task"} size={13} /> */}
      {/* </View>

        
      </ScrollView> */}
    </ScreenLayout>
  );
};

export default TaskDetail;
const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    backgroundColor: colors.white,
    borderRadius: 3,
  },
});
