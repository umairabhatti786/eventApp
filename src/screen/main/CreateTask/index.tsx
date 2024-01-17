import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import TopHeader from "../../../components/TopHeader";
import DropDown from "../../../components/DropDown";
import { data } from "../../../utils/Data";

type Props = {
  navigation?: any;
  route?:any
};

const CreateTask = ({ navigation,route }: Props) => {
  const isEdit=route?.params?.isEdit
  return (
    <ScreenLayout>
      <ScrollView>
        <View style={{ padding: "5%" }}>
          <Spacer height={40} />

          <TopHeader
          title={isEdit?"Edit Task":"Create New Task"}
          navigation={navigation} />
          <Spacer height={30} />

          <CustomText
            text={"Task Details"}
            size={18}
            fontFam="Inter-Bold"
          />

          <CustomText
            color={colors.placeholdeColor}
            text={"Enter the details of your new habit"}
            size={13}
          />

          <Spacer height={20} />

          <CustomInput
            label="Title"
            complusory={true}
            textColor="white"
            placeholder={"Pay the bills..."}
          />
          <Spacer height={7} />

          <CustomInput
        
            textAlignVertical={"top"}
            height={100}
            textColor="white"
            placeholder={"Description (optional)"}
          />
          <Spacer height={15} />

          <CustomText
            text={"Category*"}
            fontFam="Inter-Bold"
            size={15}
            style={{ marginBottom: 2 }}
          />

          <DropDown
            placeholder={"Select category"}
            placeholderColor={colors.placeholdeColor}
            //   data={data}
            data={data.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.value,
                value: item?.value,
              };
            })}
            // value={"All planned tasks"}
          />

          <Spacer height={30} />

          <CustomText
            text={"Schedule"}
            size={18}
            fontFam="Inter-Bold"
          />

          <CustomText
            color={colors.placeholdeColor}
            text={"Set the schedule for your new task"}
            size={13}
          />
          <CustomText
            text={"Duration"}
            style={{ marginTop: 10, marginBottom: 5 }}
            size={18}
            fontFam="Inter-Bold"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomInput width={155} textColor="white" placeholder={"12:00"} />
            <Image
              style={{ width: 20, height: 20 }}
              source={images.go}
              resizeMode="contain"
            />

            <CustomInput width={155} textColor="white" placeholder={"12:00"} />
          </View>

          <CustomText
            text={"Date"}
            style={{ marginTop: 10, marginBottom: 5 }}
            size={18}
            fontFam="Inter-Bold"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomInput width={100} textColor="white" placeholder={"Today"} />
            <CustomInput
              width={110}
              textColor="white"
              placeholder={"Tomorrow"}
            />

            <CustomInput width={120} textColor="white" placeholder={"Custom"} />
          </View>

          <CustomText
            text={"Reminder"}
            fontFam="Inter-Bold"
            size={15}
            style={{ marginBottom: 2, marginTop: 20 }}
          />

          <DropDown
            placeholder={"Don’t repeat"}
            placeholderColor={colors.placeholdeColor}
            //   data={data}
            data={data.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.value,
                value: item?.value,
              };
            })}
            // value={"All planned tasks"}
          />

          <CustomText
            text={"Repeat Task"}
            fontFam="Inter-Bold"
            size={15}
            style={{ marginBottom: 2, marginTop: 20 }}
          />

          <DropDown
            placeholder={"Set up Reminders"}
            placeholderColor={colors.placeholdeColor}
            //   data={data}
            data={data.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.value,
                value: item?.value,
              };
            })}
            // value={"All planned tasks"}
          />

          <Spacer height={30} />

          <CustomButton
            text="Create Task"
            style={{
              alignSelf: "center",
            }}
            onPress={() => {
              navigation.navigate("NewCategory");
            }}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default CreateTask;
