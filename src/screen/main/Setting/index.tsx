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
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import UserProfile from "../../../components/UserProfile";
import CustomView from "../../../components/CustomView";
import SettingContainer from "./SettingContainer";
type Props = {
  navigation?: any;
};

const Setting = ({ navigation }: Props) => {
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          height: "100%",
          padding: "4%",
        }}
      >
        <View style={{ paddingBottom: 100 }}>
          <Spacer height={40} />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}
          >
            <Image
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
              source={images.back}
            />
          </TouchableOpacity>
          <Spacer height={20} />
          <UserProfile />
          <Spacer height={40} />

          <CustomView>
            <CustomText
              text={"Account settings"}
              color={colors.white}
              fontFam="Inter-Bold"
              size={17}
            />
            <SettingContainer text="Change Password" isNext={true}
             onPress={()=>navigation.navigate("EditPassword")}

             />
            <SettingContainer text="Notifications" subTitle={"no"} />

            <SettingContainer
            onPress={()=>navigation.navigate("Profile")}
             text="Profile" isNext={true} />
          </CustomView>

          <Spacer height={15} />

          <CustomView>
            <CustomText
              text={"App Settings"}
              color={colors.white}
              fontFam="Inter-Bold"
              size={17}
            />
            <SettingContainer text="Language" subTitle={"no"} />
            <SettingContainer text="Dark Mode" subTitle={"no"} />

            <SettingContainer text="Check for Updates" isNext={true} />

            <SettingContainer text="Planner view" subTitle={"no"} />
            <SettingContainer text="Weekday start" subTitle={"no"} />
          </CustomView>

          <Spacer height={15} />

          <CustomView>
            <CustomText
              text={"Help and Support"}
              color={colors.white}
              fontFam="Inter-Bold"
              size={17}
            />
            <SettingContainer text="Change Password" isNext={true} />

            <SettingContainer text="FAQ" isNext={true} />

            <SettingContainer text="Suggest a feature" isNext={true} />

            <SettingContainer text="Contact Us" isNext={true} />
          </CustomView>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Setting;

