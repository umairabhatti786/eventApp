import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import CustomButton from "../../../components/CustomButton";
import { Spacer } from "../../../components/Spacer";

const CreateEventModal = ({onPressInvite}) => {
  return (
    <Animatable.View
      animation="slideInUp"
      style={{
        width: "100%",
        height: "50%",
        backgroundColor: "#2E2E2E",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius:20,
        paddingHorizontal:20,
        paddingVertical:10,
        alignSelf:"center"
      }}>
      <CustomText
        text={"Create Event"}
        color={colors.white}
        size={25}
        lineHeight={25}
        style={{ marginTop: 20, marginBottom: 7, textAlign: "center" }}
        fontWeight="600"
      />

<CustomText
        text={"Once your invite is created invite friends from your contacts or share the link"}
        color={colors.white}
        size={18}
        lineHeight={25}
        style={{ marginTop: 10, textAlign: "center" }}
        fontWeight="400"
      />
      <Spacer height={"45%"}/>

<CustomButton 
onPress={onPressInvite}
text="Create Event and Invite Guests" size={20} />

    </Animatable.View>
  );
};

export default CreateEventModal;

const styles = StyleSheet.create({});
