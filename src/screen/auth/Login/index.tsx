import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Platform } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";

import { font } from "../../../utils/font";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import { appStyles } from "../../../utils/AppStyles";
type Props = {
  navigation?: any;
};

const Login = ({ navigation }: Props) => {
 
  return (
    <ScreenLayout>
      <View
        style={{
          height: "100%",
          padding: "5%",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Spacer height={Platform.OS=="ios"?100: 80} />

          <CustomText text={"Hello again!"} size={27} fontFam="Inter-Bold" />
          <Spacer height={5} />

          <CustomText text={"Welcome back, you’ve"} size={14} />
          <Spacer height={1} />

          <CustomText text={"been missed!"} size={14} />
        </View>
        <View
          style={{
            marginTop: 50,
          }}
        >
          <CustomInput textColor="white" placeholder={"Email address"} />
          <Spacer height={18} />

          <CustomInput textColor="white"
          isEye={true}
           placeholder={"Password"} />
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ flexWrap: "wrap", alignSelf: "flex-end" }}
          >
            <CustomText
              text={"Recover password"}
              size={12}
              fontFam="Poppins"
              color={colors.placeholdeColor}
              style={{ textAlign: "right", marginTop: 10, marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: "15%",
          }}
        >
          <CustomButton
            text="Sign In"
            style={{
              alignSelf: "center",
            }}
            onPress={() => {
              navigation.navigate("PlannedTasks");
            }}
          />
          <Spacer height={50} />

          <CustomText
            text={"Or continue with"}
            size={15}
            fontFam="Poppins"
            color={colors.placeholdeColor}
            style={{ textAlign: "center" }}
          />
          <Spacer height={15} />

          <View style={styles.authImageContainer}>
            <TouchableOpacity activeOpacity={0.6}>
              <Image
                resizeMode="contain"
                style={styles.authImg}
                source={images.google}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Image
                resizeMode="contain"
                style={styles.authImg}
                source={images.apple}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Image
                resizeMode="contain"
                style={styles.authImg}
                source={images.facebook}
              />
            </TouchableOpacity>

           
            
          </View>
          <Spacer height={50}/>
          <View style={{...appStyles.row,alignSelf:"center"}}>
            <CustomText
              text={"Not a member?"}
              size={13}
              fontFam="Poppins"
              color={colors.placeholdeColor}
            />
            <Spacer width={5}/>

            <TouchableOpacity
            style={{flexWrap:"nowrap"}}
            activeOpacity={0.6}
            onPress={()=>navigation.navigate("AddName")}
            >
            <CustomText
              text={"Register now"}
              size={13}
              fontFam="Poppins"
              color={colors.primary}
            />

            </TouchableOpacity>
            


            </View>

        </View>
      </View>
    </ScreenLayout>
  );
};

export default Login;
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
