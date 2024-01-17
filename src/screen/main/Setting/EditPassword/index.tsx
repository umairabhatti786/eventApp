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
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/colors";
import { font } from "../../../../utils/font";
import { images } from "../../../../assets";
import CustomInput from "../../../../components/CustomInput";
import CustomButton from "../../../../components/CustomButton";

type Props = {
  navigation?: any;
};

const EditPassword = ({ navigation }: Props) => {
  return (
    <ScreenLayout>
      <View style={{ paddingBottom: 100, flex: 1, padding: "4%" }}>
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
        <Spacer height={30} />

        <CustomText
          text={"New password"}
          color={colors.white}
          fontFam="Inter-Bold"
          size={17}
        />
        <Spacer height={3} />
        <CustomInput
          textColor="white"
          placeholder={"Enter your new password"}
        />

        <Spacer height={10} />
        <CustomInput textColor="white" placeholder={"Repeat password"} />
      </View>

      <View style={{ paddingHorizontal: "4%" }}>
        <CustomButton
          text="Save Password"
          style={{
            alignSelf: "center",
          }}
          onPress={() => {
            navigation.navigate("PlannedTasks");
          }}
        />
        <Spacer height={50} />
      </View>
    </ScreenLayout>
  );
};

export default EditPassword;
;
