import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import MessageContainer from "../../../components/MessageContainer";
import MessageSender from "../../../components/MessageSender";
import { Spacer } from "../../../components/Spacer";
import TopBar from "../../../components/TopBar";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import { windowWidth } from "../HomeChat/ChatList";

const AddContainer = ({img,txt,onPress}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
     style={{alignItems:"center"}}>
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}

    style={{
      alignItems: "center",
      borderRadius: 30,
      borderColor: "#313131",
      backgroundColor: "#0F0F0F",
      paddingHorizontal:27,
      height:50,
      justifyContent:"center",
      borderWidth:1
    }}>
    <Image
      style={{ width: 27, height: 27 }}
      source={img}
      resizeMode="contain"
    />
  
  </TouchableOpacity>

    <Spacer height={10} />
    <CustomText
      text={txt}
      color={colors.white}
      size={15}
      fontWeight="600"
      numberOfLines={1}
      fontFam="SF-Pro-Display-Bold"
    />

    </TouchableOpacity>
  );
};

export default AddContainer;
