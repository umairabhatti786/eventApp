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

const EmailConfirmation = ({ navigation }: Props) => {
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [step,setStep]=useState(2.5)
  useEffect(() => {
    setTimeout(() => {
      setEmailConfirm(true);
      setStep(3)
    }, 2000);
  });
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
          text={emailConfirm ? "You’re in!" : "Take a look at your inbox!"}
          style={{ textAlign: "center" }}
          size={30}
          fontFam="Inter-Bold"
        />
        <Spacer height={5} />

        <CustomText
          text={
            emailConfirm
              ? "Thanks for confirming your email. Get ready for  a personalized journey with us."
              : "We've sent a quick confirmation link to  your email. Just a step away from joining us."
          }
          style={{ textAlign: "center", marginHorizontal: 30, lineHeight: 22 }}
          size={15}
        />
        {emailConfirm&&(
              <View style={{ padding: "5%", marginTop: "70%" }}>
              <CustomButton
                text="Next step"
                style={{
                  alignSelf: "center",
                }}
                onPress={() => {
                  navigation.navigate("SetupPassword");
                }}
              />
            </View>

        )}
      
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
       

        <View style={{ marginHorizontal: "22%" }}>

        <View style={{ width: "40%", alignSelf: "center" }}>
          {!emailConfirm && (
            <>
              <CustomText
                text={"Resend email"}
                style={{ textAlign: "center" }}
                size={12}
                color={colors.placeholdeColor}
              />

              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: colors.placeholdeColor,
                }}
              />
            </>
         )}
        </View>
                    <Spacer height={40} />

          <ProgressBar steps={step} />
          <Spacer height={50} />

        </View>
      </View>
    </ScreenLayout>
  );
};

export default EmailConfirmation;
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
