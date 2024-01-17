import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Platform } from "react-native";
import ScreenLayout from "../../../../components/ScreenLayout";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import CustomInput from "../../../../components/CustomInput";
import { colors } from "../../../../utils/colors";
import CustomButton from "../../../../components/CustomButton";
import { images } from "../../../../assets";
import { appStyles } from "../../../../utils/AppStyles";
import { font } from "../../../../utils/font";
import ProgressBar from "../../../../components/ProgressBar";

type Props = {
  navigation?: any;
};

const AddName = ({ navigation }: Props) => {
  return (
    <ScreenLayout>
      <View
        style={{
            flex:1,
         
          padding: "5%",
        }}
      >
        <Spacer height={Platform.OS=="ios"?80: 60} />
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>navigation.goBack()}
        >
            <Image
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
          source={images.back}
        />
            </TouchableOpacity>
        
        <Spacer height={10} />

        <CustomText
          text={"Welcome to Strive!"}
          style={{ textAlign: "center" }}
          size={27}
          fontFam="Inter-Bold"
        />
        <Spacer height={5} />

        <CustomText
          text={"What should we call you?"}
          style={{ textAlign: "center" }}
          size={14}
        />

        <Spacer height={50} />

        <CustomText
          text={"Name*"}
          fontFam="Inter-Bold"
          size={15}
          style={{ marginLeft: 12 }}
        />
        <Spacer height={5} />

        <CustomInput textColor="white" placeholder={"Enter your name "} />
        <Spacer height={18} />
        <View
          style={{
            width: "100%",
            marginTop: "50%",
          }}
        >
          <CustomButton
            text="Next step"
            style={{
              alignSelf: "center",
            }}
            onPress={() => {
              navigation.navigate("AddEmail");
            }}
          />

          <Spacer height={ Platform.OS=="ios"?140: 90} />
          <View style={{ ...appStyles.row, alignSelf: "center" }}>
            <CustomText
              text={"Already have an account?"}
              size={14}
              fontFam="Poppins"
              color={colors.placeholdeColor}
            />
            <Spacer width={5} />
            <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>navigation.goBack()}
            >
            <CustomText
              text={"Log in"}
              size={14}
              fontFam="Poppins"
              color={colors.primary}
            />

            </TouchableOpacity>
            
          </View>
         
        </View>
      </View>

      <View style={{ marginHorizontal: "22%", }}>
            <ProgressBar
            steps={1}
             />

<Spacer height={50} />

          </View>
    </ScreenLayout>
  );
};

export default AddName;
const styles = StyleSheet.create({
  root: { justifyContent: "center", gap: 39 },
  codeFieldRoot: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 12,
    height: 100,
    borderColor: "#092F7459",
    paddingHorizontal: 30,
  },
  cell: {
    fontSize: 24,
    fontFamily: font.poppins,
    color: colors.primary,
  },
  focusCell: {
    borderColor: "#092F7459",
  },
  authImg: {
    width: 30,
    height: 30,
  },
  authImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
});
