import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Platform } from "react-native";
import ScreenLayout from "../../../../components/ScreenLayout";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import CustomInput from "../../../../components/CustomInput";
import { colors } from "../../../../utils/colors";
import CustomButton from "../../../../components/CustomButton";
import { images } from "../../../../assets";
import { font } from "../../../../utils/font";
import ProgressBar from "../../../../components/ProgressBar";

type Props = {
  navigation?: any;
};

const AddEmail = ({ navigation }: Props) => {
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
          text={"Ready to get started?"}
          style={{ textAlign: "center" }}
          size={27}
          fontFam="Inter-Bold"
        />
        <Spacer height={5} />

        <CustomText
          text={
            "Could you share your email with us?  We'll keep it safe, promise!"
          }
          style={{ textAlign: "center", marginHorizontal: 40, lineHeight: 22 }}
          size={15}
        />

        <Spacer height={50} />

        <CustomText
          text={"Email*"}
          fontFam="Inter-Bold"
          size={15}
          style={{ marginLeft: 12 }}
        />
        <Spacer height={5} />

        <CustomInput textColor="white" placeholder={"Enter your email"} />
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
              navigation.navigate("EmailConfirmation");
            }}
          />

        
        </View>
      </View>

      <View style={{ marginHorizontal: "22%", }}>
            <ProgressBar
            steps={2}
             />

<Spacer height={50} />

          </View>

    </ScreenLayout>
  );
};

export default AddEmail;
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
