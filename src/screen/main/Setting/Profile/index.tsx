import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import ScreenLayout from "../../../../components/ScreenLayout";
import { Spacer } from "../../../../components/Spacer";
import UserProfile from "../../../../components/UserProfile";
import CustomView from "../../../../components/CustomView";
import CustomText from "../../../../components/CustomText";
import SettingContainer from "../SettingContainer";
import { colors } from "../../../../utils/colors";
import { images } from "../../../../assets";

type Props = {
  navigation?: any;
};

const Profile = ({ navigation }: Props) => {
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
              text={"Profile"}
              color={colors.white}
              fontFam="Inter-Bold"
              size={17}
            />
            <SettingContainer
            onPress={()=>navigation.navigate("EditName")}
             text="Name" isNext={true} />

            <SettingContainer text="Profile picture" isNext={true} />

            <SettingContainer text="Manage subscription" isNext={true} />
          </CustomView>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Profile;

