import React, { useEffect, useState } from "react";
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

const SetupPassword = ({ navigation }: Props) => {
    const [isAgree,setIsAgree]=useState(false)
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
        }}
      >
        <Spacer height={Platform.OS=="ios"?100: 80} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ marginLeft: "5%" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
            source={images.back}
          />
        </TouchableOpacity>

        <Spacer height={10} />

        <CustomText
          text={"Let’s set up a password"}
          style={{ textAlign: "center" }}
          size={30}
          fontFam="Inter-Bold"
        />
        <Spacer height={5} />

        <CustomText
          text={
            "To keep things secure, let's set up a password for you. It's your key to a world of possibilities"
          }
          style={{ textAlign: "center", marginHorizontal: 18, lineHeight: 22 }}
          size={15}
        />

        <Spacer height={50} />
        <View style={{ paddingHorizontal: "10%" }}>
          <CustomText
            text={"Password"}
            
            fontFam="Inter-Bold"
            size={15}
            style={{ marginLeft: 12 }}
          />
          <Spacer height={5} />

          <CustomInput 
                      isEye={true}

          textColor="white" placeholder={"Enter your password"} />
          <View style={{ paddingLeft: 10, marginTop: 5 }}>
            <CustomText
              text={"Password must include: "}
              size={12}
              style={{ marginLeft: 10 }}
            />
            <View style={{ ...appStyles.row, paddingLeft: 17 }}>
              <View style={styles.dot} />

              <CustomText
                text={"one special character"}
                size={12}
                style={{ marginLeft: 8 }}
              />
              <Image
                style={{ width: 20, height: 20, tintColor: colors.primary }}
                resizeMode="center"
                source={images.tickIcon}
              />
            </View>

            <View style={{ ...appStyles.row, paddingLeft: 17 }}>
              <View style={styles.dot} />

              <CustomText
                text={"one number"}
                size={12}
                style={{ marginLeft: 8, width: 120 }}
              />
              <Image
                style={{ width: 20, height: 20, tintColor: colors.primary }}
                resizeMode="center"
                source={images.tickIcon}
              />
            </View>

            <View style={{ ...appStyles.row, paddingLeft: 17 }}>
              <View style={styles.dot} />

              <CustomText
                text={"at least 8 characters"}
                size={12}
                style={{ marginLeft: 8, width: 120 }}
              />
              <Image
                style={{ width: 20, height: 20, tintColor: colors.white }}
                resizeMode="center"
                source={images.tickIcon}
              />
            </View>
          </View>

          <View style={{ ...appStyles.row, marginLeft: 5, marginVertical: 15 }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>setIsAgree(!isAgree)}
              style={styles.check}
            >
                {isAgree&&(
                    <Image
                    style={{ width: 10, height: 10, tintColor: colors.primary }}
                    resizeMode="contain"
                    source={images.tickIcon}
                  />
                )}

            </TouchableOpacity>

            <CustomText
              text={"I agree to all Term, Privacy, Policies"}
              size={14}
              color={colors.placeholdeColor}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>

        <View style={{ padding: "5%",marginTop:"17%" }}>
          <CustomButton
            text="Start using Strive"
            style={{
              alignSelf: "center",
            }}
            onPress={() => {
              navigation.navigate("SetupPassword");
            }}
          />
        </View>
      </View>

      <View style={{ marginHorizontal: "22%" }}>
          <ProgressBar steps={4} />

          <Spacer height={50} />

        </View>
     
    </ScreenLayout>
  );
};

export default SetupPassword;
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

  dot: {
    width: 4,
    height: 4,
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: colors.placeholdeColor,
    alignItems:"center",
    justifyContent:"center"
  },
});
